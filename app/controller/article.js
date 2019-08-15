'use strict';
const Controller = require('egg').Controller;

class ArticleController extends Controller {
    // 分页查询article
    async index () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const query = ctx.query || {};
        // 查询条件
        const authorId = ctx.request.header.uid;
        const page = (query.page || 1) - 0;
        const pageSize = (query.pageSize || 15) - 0;
        const searchKey = query.key ? decodeURIComponent(query.key) : '';
        const status = query.status || 'all';
        const order = query.order || 'createdAt';
        const orderDir = query.orderDir || 'DESC';
        const resData = await service.article.query({ authorId, page, pageSize, searchKey, status, order, orderDir });
        helper.success(ctx, resData);
    }

    // 查询单个article
    async show () {
        const { ctx, service } = this;
        const querys = ctx.params;
        const helper = ctx.helper;
        if (!querys.id || !(querys.id + '').trim()) {
            return helper.success(ctx, '', '接口缺少参数！', 501);
        }
        const res = await service.article.getDetail(querys.id);
        helper.success(ctx, res.data, res.message, res.code);
    }

    // 修改article
    async update () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const querys = ctx.params;
        const params = ctx.request.body;
        if (!querys.id || !(querys.id + '').trim()) {
            return helper.success(ctx, '', '接口缺少参数！', 501);
        }
        if (!/(0|1)/.test(params.type)) {
            return helper.success(ctx, '', '接口缺少参数！', 501);
        }
        if (!params.title || !(params.title + '').trim()) {
            return helper.success(ctx, '', '文章标题不能为空！', 501);
        }
        if (!params.description || !(params.description + '').trim()) {
            return helper.success(ctx, '', '文章描述不能为空！', 501);
        }
        if (params.type == '0') {
            if (!params.routerName || !(params.routerName + '').trim()) {
                return helper.success(ctx, '', '文章页面路由不能为空！', 501);
            }
        } else {
            if (!params.content || !(params.content + '').trim()) {
                return helper.success(ctx, '', '文章内容不能为空！', 501);
            }
        }
        const res = await service.article.update(querys.id, params);
        helper.success(ctx, '', res.message, res.code);
    }

    // 创建article
    async create () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const params = ctx.request.body;
        if (!/(0|1)/.test(params.type)) {
            return helper.success(ctx, '', '文章类型参数不正确！', 501);
        }
        if (!params.title || !(params.title + '').trim()) {
            return helper.success(ctx, '', '文章标题不能为空！', 501);
        }
        if (!params.description || !(params.description + '').trim()) {
            return helper.success(ctx, '', '文章描述不能为空！', 501);
        }
        if (params.type == '0') {
            if (!params.routerName || !(params.routerName + '').trim()) {
                return helper.success(ctx, '', '文章页面路由不能为空！', 501);
            }
        } else {
            if (!params.content || !(params.content + '').trim()) {
                return helper.success(ctx, '', '文章内容不能为空！', 501);
            }
        }
        const res = await service.article.create(ctx.request.header.uid, params);
        helper.success(ctx, res.data, res.message, res.code);
    }

    // 更改article状态
    async changeStatus () {
        const { ctx, service } = this;
        const querys = ctx.params;
        const helper = ctx.helper;
        if (!querys.id || !(querys.id + '').trim()) {
            return helper.success(ctx, '', '接口缺少参数！', 501);
        }
        const params = ctx.request.body;
        if (params.status == undefined) {
            return helper.success(ctx, '', '接口缺少参数！', 501);
        }
        if (!/(0|1|2)/.test(params.status)) {
            return helper.success(ctx, '', '接口参数不正确！', 501);
        }
        const res = await service.article.changeStatus(querys.id, params.status);
        helper.success(ctx, '', res.message, res.code);
    }

    // 获取单个article的tags
    async getTags () {
        const { ctx, service } = this;
        const querys = ctx.params;
        const helper = ctx.helper;
        if (!querys.id || !(querys.id + '').trim()) {
            return helper.success(ctx, '', '接口缺少参数！', 501);
        }
        const res = await service.article.getTags(querys.id);
        helper.success(ctx, res.data, res.message, res.code);
    }
}

module.exports = ArticleController;
