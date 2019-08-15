'use strict';
const Service = require('egg').Service;

class PhraseService extends Service {
    // 分页查询phrase
    async query ({ authorId, page, pageSize, searchKey, status, order, orderDir }) {
        const { ctx, service, app } = this;
        const Sequelize = app.Sequelize;
        const isSuperAdmin = await service.manager.isSuperAdministrator(authorId);
        let countSql = 'select count(*) as count '; // 计算总数的sql
        let dataSql = ''; // 查询数据的sql
        let sql = `select phrase.id, phrase.content, phrase.origin, phrase.imgs, manager.loginName,
                    phrase.status, phrase.createdAt `;
        let conditionSql = 'from phrase, manager where manager.id = phrase.author and ';
        if (status == 'all') {
            conditionSql += `phrase.status !='0' `;
        } else {
            conditionSql += `phrase.status ='${status}' `;
        }
        if (searchKey) {
            conditionSql += `and (phrase.content like '%${searchKey}%' or phrase.origin like '%${searchKey}%') `
        }
        if (authorId && !isSuperAdmin) {
            conditionSql += `and phrase.author='${authorId}' `
        }
        countSql += conditionSql + ';';
        console.log('countSql...', countSql);
        conditionSql += `order by phrase.${order} ${orderDir} limit ${(page - 1) * pageSize}, ${pageSize}`;
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

    // 查询phrase详情
    async getDetail (id) {
        const { ctx, app } = this;
        const Sequelize = app.Sequelize;
        let sql = `select phrase.id, phrase.content, phrase.origin, manager.loginName, phrase.author, phrase.status, phrase.createdAt, phrase.imgs
                   from phrase, manager where manager.id = phrase.author and phrase.id='${id}' and phrase.status!='0'`;
        const resData = await ctx.model.query(sql, { type: Sequelize.QueryTypes.SELECT });
        if (!resData || resData.length==0) {
            return { message: '未能查询到短语！', code: 201 }
        }
        return { message: '查询成功！', code: 200, data: resData[0] }
    }

    // 修改phrase
    async update (id, content, imgs, origin) {
        const ctx = this.ctx;
        const phrase = await ctx.model.Phrase.findById(id);
        if (!phrase) {
            return { message: '未能查询到短语！', code: 201 };
        }
        await phrase.update({ content, imgs: JSON.stringify(imgs), origin });
        return { message: '修改成功！', code: 200 };
    }

    // 创建phrase
    async create (authorId, content, imgs, origin) {
        const { ctx, app, service } = this;
        const author = await service.manager.findById(authorId);
        if (!author) {
            return { message: '未能查询到作者！', code: 201, data: null }
        }
        const phrase = await ctx.model.Phrase.create({ imgs: JSON.stringify(imgs), origin, content, status: '2', author: authorId });
        return { message: '创建成功！', code: 200, data: phrase };
    }

    // 更改phrase的状态
    async changeStatus (id, status) {
        const ctx = this.ctx;
        const phrase = await ctx.model.Phrase.findById(id);
        if (!phrase) {
            return { message: '未能查询到短语！', code: 201 };
        }
        await phrase.update({ status });
        return { message: '操作成功！', code: 200 };
    }
}
module.exports = PhraseService;
