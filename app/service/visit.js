'use strict';
const Service = require('egg').Service;

class VisitService extends Service {
    // 创建访问记录
    async create ({ pagePath, articleId }) {
        const { ctx } = this;
        const record = await ctx.model.Visit.create({ articleId, pagePath });
        if (articleId) {
            const article = await ctx.model.Article.findById(articleId);
            if (article) {
                let visitCount = (article.visitCount || 0) + 1; 
                await article.update({ visitCount });
            }
        }
        return { message: '请求成功！', code: 200, data: record };
    }
}

module.exports = VisitService;
