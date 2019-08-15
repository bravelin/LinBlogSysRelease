'use strict';
const Service = require('egg').Service;

class TagService extends Service {
    // 查询所有的标签
    async queryAll () {
        const ctx = this.ctx;
        const resData = await ctx.model.Tag.findAll({ order: [['createdAt', 'ASC']] });
        return resData;
    }

    // 分页查询标签之下的文章列表
    async query ({ authorId, page, pageSize, searchKey, tagId, order, orderDir }) {
        const { ctx, service, app } = this;
        const Sequelize = app.Sequelize;
        const isSuperAdmin = await service.manager.isSuperAdministrator(authorId);
        let countSql = 'select count(*) as count '; // 计算总数的sql
        let dataSql = ''; // 查询数据的sql
        let sql = `select article.id, article.title, article.type, article.description, article.content, manager.loginName,
                   article.author, article.status, article.routerName, article.visitCount, article.createdAt,
                   (select group_concat(tag.tagName) from tag, linktag where tag.id = linktag.tagId and linktag.articleId = article.id) as tagNames `;
        let conditionSql = `from article, manager, linktag where manager.id = article.author and linktag.articleId=article.id and linktag.tagId='${tagId}' `;
        if (searchKey) {
            conditionSql += `and (article.title like '%${searchKey}%' or article.description like '%${searchKey}%') `
        }
        if (authorId && !isSuperAdmin) {
            conditionSql += `and article.author='${authorId}' `
        }
        countSql += conditionSql + ';';
        console.log('countSql...', countSql);
        conditionSql += `order by article.${order} ${orderDir} limit ${(page - 1) * pageSize}, ${pageSize}`;
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

    // 创建标签
    async create (tagName) {
        const ctx = this.ctx;
        // 判定是否已有相同的tagName
        const res = await ctx.model.Tag.findOne({
            where: { tagName }
        });
        if (res) {
            return { message: '已存在相同的标签名称！', code: 501 };
        }
        await ctx.model.Tag.create({ tagName });
        return { message: '标签创建成功！', code: 200 };
    }

    // 修改标签的名字
    async update (id, tagName) {
        const ctx = this.ctx;
        // 判定是否已有相同的tagName
        const res = await ctx.model.Tag.findOne({
            where: { tagName }
        });
        if (res && res.id != id) {
            return { message: '已存在相同的标签名称！', code: 501 };
        }
        const tag = await ctx.model.Tag.findById(id);
        if (!tag) {
            return { message: '未能查询到标签！', code: 501 };
        }
        await tag.update({ tagName });
        return { message: '标签名称修改成功！', code: 200 };
    }

    // 删除标签
    async destroy (id) {
        const { ctx, app } = this;
        const Sequelize = app.Sequelize;
        const tag = await ctx.model.Tag.findById(id);
        if (!tag) {
            return { message: '未能查询到标签！', code: 501 };
        }
        // delete link-tag
        const sql = `delete from linktag where tagId='${id}'`;
        await ctx.model.query(sql, { type: Sequelize.QueryTypes.DELETE });
        await tag.destroy();
        return { message: '标签删除成功！', code: 200 };
    }

    // 文章关联标签
    async link (articleId, tagIds) {
        const { ctx, service, app } = this;
        const Sequelize = app.Sequelize;
        const article = await ctx.model.Article.findById(articleId);
        if (!article) {
            return { message: '未能查询到文章！', code: 501 };
        }
        // 删除文章现有的连接link关系
        const sql = `delete from linktag where articleId='${articleId}'`;
        await ctx.model.query(sql, { type: Sequelize.QueryTypes.DELETE });
        // 对每个tagId创建连接
        if (tagIds) {
            const ids = tagIds.split(',');
            for (let i = 0; i < ids.length; i++) {
                await ctx.model.Linktag.create({ tagId: ids[i], articleId });
            }
        }
        return { message: '文章标签关联成功！', code: 200 };
    }
}

module.exports = TagService;
