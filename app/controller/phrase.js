'use strict';
const Controller = require('egg').Controller;

class PhraseController extends Controller {
    // 分页查询phrase
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
        const resData = await service.phrase.query({ authorId, page, pageSize, searchKey, status, order, orderDir });
        helper.success(ctx, resData);
    }

    // 查询phrase详情
    async show () {
        const { ctx, service } = this;
        const querys = ctx.params;
        const helper = ctx.helper;
        if (!querys.id || !(querys.id + '').trim()) {
            return helper.success(ctx, '', '接口缺少参数！', 501);
        }
        const res = await service.phrase.getDetail(querys.id);
        helper.success(ctx, res.data, res.message, res.code);
    }

    // 修改phrase
    async update () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const querys = ctx.params;
        const params = ctx.request.body;
        if (!querys.id || !(querys.id + '').trim()) {
            return helper.success(ctx, '', '接口缺少参数！', 501);
        }
        if (!params.content || !(params.content + '').trim()) {
            return helper.success(ctx, '', '内容不能为空！', 501);
        }
        const res = await service.phrase.update(querys.id, params.content.trim(), params.imgs || [], params.origin || '');
        helper.success(ctx, '', res.message, res.code);
    }

    // 创建phrase
    async create () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const params = ctx.request.body;
        if (!params.content || !(params.content + '').trim()) {
            return helper.success(ctx, '', '内容不能为空！', 501);
        }
        const res = await service.phrase.create(ctx.request.header.uid, params.content.trim(), params.imgs || [], params.origin || '');
        helper.success(ctx, res.data, res.message, res.code);
    }

    // 更改phrase状态
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
        const res = await service.phrase.changeStatus(querys.id, params.status);
        helper.success(ctx, '', res.message, res.code);
    }
}
module.exports = PhraseController;
