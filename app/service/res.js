'use strict';
const Service = require('egg').Service;
const path = require('path');
const sendToWormhole = require('stream-wormhole');
const uuidv1 = require('uuid/v1');
const fs = require('fs');
const awaitWriteStream = require('await-stream-ready').write;

// fastDFS客户端实例
const fdfs = require('fdfs')
const fdfsClient = new fdfs({
    trackers: [{ host: '0.0.0.0', port: 22122 }],
    timeout: 10000,
    charset: 'utf8'
});


function generateUUID() {
    return uuidv1().replace(/-/g, '');
}

class ResService extends Service {
    // 分页查询phrase
    async query ({ authorId, page, pageSize, searchKey, order, orderDir }) {
        const { ctx, service, app } = this;
        const Sequelize = app.Sequelize;
        const isSuperAdmin = await service.manager.isSuperAdministrator(authorId);
        let countSql = 'select count(*) as count '; // 计算总数的sql
        let dataSql = ''; // 查询数据的sql
        let sql = `select res.id, res.path, res.remark, res.type, res.size, manager.loginName, res.createdAt `;
        let conditionSql = 'from res, manager where manager.id = res.author ';
        if (searchKey) {
            conditionSql += `and res.remark like '%${searchKey}%' `
        }
        if (authorId && !isSuperAdmin) {
            conditionSql += `and res.author='${authorId}' `
        }
        countSql += conditionSql + ';';
        console.log('countSql...', countSql);
        conditionSql += `order by res.${order} ${orderDir} limit ${(page - 1) * pageSize}, ${pageSize}`;
        dataSql = sql + conditionSql + ';';
        console.log('dataSql...', dataSql);

        const resData = { page, totalPage: 0, dataList: [], total: 0 };
        const queryRes = await ctx.model.query(dataSql, { type: Sequelize.QueryTypes.SELECT });
        const countRes = await ctx.model.query(countSql, { type: Sequelize.QueryTypes.SELECT });
        resData.dataList = queryRes;
        resData.total = countRes[0].count;
        resData.totalPage = Math.ceil(resData.total / pageSize);
        return resData;
    }

    // 创建res
    async create (authorId, path, remark, type, size) {
        const { ctx, app, service } = this;
        const author = await service.manager.findById(authorId);
        if (!author) {
            return { message: '未能查询到作者！', code: 201, data: null }
        }
        const res = await ctx.model.Res.create({ path, remark, author: authorId, type, size });
        return { message: '创建成功！', code: 200, data: res };
    }

    // 删除res
    async del (id) {
        const ctx = this.ctx;
        const res = await ctx.model.Res.findById(id);
        if (!res) {
            return { message: '未能查询到资源对象！', code: 201 };
        }
        await res.destroy();
        await this.delImgByPath(res.path);
        return { message: '操作成功！', code: 200 };
    }

    // 依据路径从fdfs上删除image
    async delImgByPath (path) {
        const ctx = this.ctx;
        const resId = path.replace(ctx.app.config.resHost, '');
        if (resId) {
            await fdfsClient.del(resId); // fdfs资源一同删除
        }
    }

    // upload file
    async upload () {
        const { ctx, app } = this;
        const stream = await ctx.getFileStream();
        const originalName = path.basename(stream.filename); // 原文件名
        const fileType = stream.mimeType;
        const fileExt = (fileType && fileType.indexOf('/') > 0) ? fileType.split('/')[1] : (fileType || '') // 文件后缀
        const tempFileName = generateUUID() + '.' + fileExt;
        const tempFilePath = path.join(app.config.uploadFastDfsDir, tempFileName);
        const writeStream = fs.createWriteStream(tempFilePath);
        try {
            await awaitWriteStream(stream.pipe(writeStream));
            const fileId = await fdfsClient.upload(tempFilePath);
            const generateName = fileId.substr(fileId.lastIndexOf('/') + 1);
            const fileStat = fs.statSync(tempFilePath);
            const res = {
                originalName,
                name: generateName,
                type: fileType,
                url: app.config.resHost + fileId,
                size: fileStat.size,
                state: 'SUCCESS'
            }
            console.log('res...', res);
            fs.unlinkSync(tempFilePath); // 删除临时文件
            return res;
        } catch (err) {
            await sendToWormhole(stream); // 必须将上传的文件流消费掉，要不然浏览器响应会卡死
            throw err;
        }
    }
}
module.exports = ResService;
