'use strict';
const Service = require('egg').Service;

class ArticleService extends Service {
    // 分页查询article
    async query ({ authorId, page, pageSize, searchKey, status, order, orderDir }) {
        const { ctx, service, app } = this;
        const Sequelize = app.Sequelize;
        const isSuperAdmin = await service.manager.isSuperAdministrator(authorId);
        let countSql = 'select count(*) as count '; // 计算总数的sql
        let dataSql = ''; // 查询数据的sql
        let sql = `select article.id, article.title, article.type, article.description, article.content, manager.loginName,
                   article.author, article.status, article.routerName, article.visitCount, article.createdAt,
                   (select group_concat(tag.tagName) from tag, linktag where tag.id = linktag.tagId and linktag.articleId = article.id) as tagNames `;
        let conditionSql = 'from article, manager where manager.id = article.author and ';
        if (status == 'all') {
            conditionSql += `article.status !='0' `;
        } else {
            conditionSql += `article.status ='${status}' `;
        }
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

    // 获取article 详情
    async getDetail (id) {
        const { ctx, app } = this;
        const Sequelize = app.Sequelize;
        let sql = `select article.id, article.title, article.type, article.description, article.content, manager.loginName,
                   article.author, article.status, article.routerName, article.visitCount, article.createdAt,
                   (select group_concat(tag.tagName) from tag, linktag where tag.id = linktag.tagId and linktag.articleId = article.id) as tagNames 
                   from article, manager where manager.id = article.author and article.id='${id}' and article.status!='0'`;
        const resData = await ctx.model.query(sql, { type: Sequelize.QueryTypes.SELECT });
        if (!resData || resData.length==0) {
            return { message: '未能查询到文章！', code: 201 }
        }
        return { message: '查询成功！', code: 200, data: resData[0] }
    }

    // 获取单个article的tags
    async getTags (id) {
        const { ctx, app, service } = this;
        const Sequelize = app.Sequelize;
        const allTags = await service.tag.queryAll();
        const sql = `select linktag.tagId as tagId from linktag where linktag.articleId='${id}'`;
        const articleTags = await ctx.model.query(sql, { type: Sequelize.QueryTypes.SELECT });
        const flagObj = {};
        articleTags.forEach(item => {
            flagObj[item.tagId] = true
        });
        const resData = allTags.map(item => {
            return { id: item.id, tagName: item.tagName, flag: !!flagObj[item.id] }
        });
        console.log('resData......', resData);
        return { message: '查询成功！', code: 200, data: resData };
    }

    // 更改article
    async changeStatus (id, status) {
        const ctx = this.ctx;
        const article = await ctx.model.Article.findById(id);
        if (!article) {
            return { message: '未能查询到文章！', code: 201 };
        }
        await article.update({ status });
        return { message: '操作成功！', code: 200 };
    }

    // 更新article
    async update (id, { title, description, routerName, content, type }) {
        const ctx = this.ctx;
        const article = await ctx.model.Article.findById(id);
        if (!article) {
            return { message: '未能查询到文章！', code: 201 };
        }
        if (type == '0') {
            await article.update({ title, description, routerName });
        } else {
            await article.update({ title, description, content });
        }
        return { message: '修改成功！', code: 200 };
    }

    // 创建article
    async create (authorId, { title, description, routerName = '', content = '', type }) {
        const { ctx, app, service } = this;
        const author = await service.manager.findById(authorId);
        if (!author) {
            return { message: '未能查询到文章作者！', code: 201, data: null }
        }
        const article = await ctx.model.Article.create({ title, description, routerName, content, type, status: '2', visitCount: 0, author: authorId });
        return { message: '文章创建成功！', code: 200, data: article };
    }
}

module.exports = ArticleService;
