'use strict';
const Controller = require('egg').Controller;

class ResController extends Controller {
    // 分页查询res
    async index () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const query = ctx.query || {};
        // 查询条件
        const authorId = ctx.request.header.uid;
        const page = (query.page || 1) - 0;
        const pageSize = (query.pageSize || 15) - 0;
        const searchKey = query.key ? decodeURIComponent(query.key) : '';
        const order = query.order || 'createdAt';
        const orderDir = query.orderDir || 'DESC';
        const resData = await service.res.query({ authorId, page, pageSize, searchKey, order, orderDir });
        helper.success(ctx, resData);
    }

    // 创建res
    async create () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const params = ctx.request.body;
        if (!params.path || !(params.path + '').trim()) {
            return helper.success(ctx, '', '资源链接不能为空！', 501);
        }
        if (!params.type || !(params.type + '').trim()) {
            return helper.success(ctx, '', '资源类型不能为空！', 501);
        }
        if (!params.size || !(params.size + '').trim()) {
            return helper.success(ctx, '', '资源大小不能为空！', 501);
        }
        const res = await service.res.create(ctx.request.header.uid, params.path.trim(), params.remark || '', params.type, params.size);
        helper.success(ctx, res.data, res.message, res.code);
    }

    // 依据路径删除fdfs上的图片
    async delImgByPath () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const params = ctx.request.body;
        if (!params.path || !(params.path + '').trim()) {
            return helper.success(ctx, '', '资源链接不能为空！', 501);
        }
        await service.res.delImgByPath(params.path);
        helper.success(ctx, '', '');
    }

    // 上传file
    async upload () {
        const { ctx } = this;
        const query = ctx.query;
        const uid = ctx.request.header.uid || query.uid;
        const res = await ctx.service.res.upload(uid);
        ctx.body = res;
        ctx.status = 200;
    }

    // 删除res
    async destroy () {
        const { ctx, service } = this;
        const querys = ctx.params;
        const helper = ctx.helper;
        if (!querys.id || !(querys.id + '').trim()) {
            return helper.success(ctx, '', '接口缺少参数！', 501);
        }
        const res = await service.res.del(querys.id);
        helper.success(ctx, '', res.message, res.code);
    }
}
module.exports = ResController;
