'use strict';
const Controller = require('egg').Controller;

class TagController extends Controller {
    // 获取所有的tag
    async index () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const resData = await service.tag.queryAll();
        helper.success(ctx, resData);
    }

    // 查询单个tag下的article,分页查询
    async show () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const params = ctx.params;
        const query = ctx.query || {};
        // 查询条件
        const tagId = params.id;
        if (!tagId.trim()) {
            return helper.success(ctx, '', '接口缺少参数！', 501);
        }
        const authorId = ctx.request.header.uid;
        const page = (query.page || 1) - 0;
        const pageSize = (query.pageSize || 15) - 0;
        const searchKey = query.key ? decodeURIComponent(query.key) : '';
        const order = query.order || 'createdAt';
        const orderDir = query.orderDir || 'DESC';
        const resData = await service.tag.query({ authorId, page, pageSize, searchKey, tagId, order, orderDir });
        helper.success(ctx, resData);
    }

    // 更新标签的名字
    async update () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const querys = ctx.params;
        const params = ctx.request.body;
        if (!querys.id || !(querys.id + '').trim()) {
            return helper.success(ctx, '', '接口缺少参数！', 501);
        }
        if (!params.tagName || !(params.tagName + '').trim()) {
            return helper.success(ctx, '', '标签名称不能为空！', 501);
        }
        const res = await service.tag.update(querys.id, params.tagName);
        helper.success(ctx, '', res.message, res.code);
    }

    // 创建标签
    async create () {
        const { ctx, service } = this;
        const params = ctx.request.body;
        const helper = ctx.helper;
        // 校验参数
        if (!params.tagName || !(params.tagName + '').trim()) {
            return helper.success(ctx, '', '标签名称不能为空！', 501);
        }
        const res = await service.tag.create(params.tagName);
        helper.success(ctx, '', res.message, res.code);
    }

    // 删除标签--先删除关联关系，再删除之
    async destroy () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const querys = ctx.params;
        if (!querys.id || !(querys.id + '').trim()) {
            return helper.success(ctx, '', '接口缺少参数！', 501);
        }
        const res = await service.tag.destroy(querys.id);
        helper.success(ctx, '', res.message, res.code);
    }

    // 增加文章与标签之间的关联关系,articleId和tagIds
    async link () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const querys = ctx.params;
        if (!querys.id || !(querys.id + '').trim()) {
            return helper.success(ctx, '', '接口缺少参数！', 501);
        }
        const params = ctx.request.body;
        // 校验参数
        if (params.tagIds == undefined) {
            return helper.success(ctx, '', '标签Id不能为空！', 501);
        }
        const res = await service.tag.link(querys.id, params.tagIds);
        helper.success(ctx, '', res.message, res.code);
    }
}
module.exports = TagController;
