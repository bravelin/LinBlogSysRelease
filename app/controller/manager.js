'use strict';
const Controller = require('egg').Controller;

class ManagerController extends Controller {
    // 获取所有的manager
    async index () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const resData = await service.manager.queryAll();
        helper.success(ctx, resData);
    }

    // 修改manager
    async updateRealName () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const querys = ctx.params;
        const params = ctx.request.body;
        if (!querys.id || !(querys.id + '').trim()) {
            return helper.success(ctx, '', '接口缺少参数！', 501);
        }
        if (!params.realName || !(params.realName + '').trim()) {
            return helper.success(ctx, '', '账号真实名称不能为空！', 501);
        }
         
        const res = await service.manager.updateRealName(querys.id, params.realName);
        helper.success(ctx, '', res.message, res.code);
    }

    async updatePassword () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const querys = ctx.params;
        const params = ctx.request.body;
        if (!querys.id || !(querys.id + '').trim()) {
            return helper.success(ctx, '', '接口缺少参数！', 501);
        }
        if (!params.password || !(params.password + '').trim()) {
            return helper.success(ctx, '', '账号密码不能为空！', 501);
        }
        const res = await service.manager.updatePassword(querys.id, params.password);
        helper.success(ctx, '', res.message, res.code);
    }

    // 创建manager
    async create () {
        const { ctx, service } = this;
        const params = ctx.request.body;
        const helper = ctx.helper;
        // 校验参数
        if (!params.loginName || !(params.loginName + '').trim()) {
            return helper.success(ctx, '', '账号登录名不能为空！', 501);
        }
        if (!params.realName || !(params.realName + '').trim()) {
            return helper.success(ctx, '', '账号真实名称不能为空！', 501);
        }
        if (!params.password || !(params.password + '').trim()) {
            return helper.success(ctx, '', '账号密码不能为空！', 501);
        }
        const res = await service.manager.create(params.loginName, params.realName, params.password);
        helper.success(ctx, '', res.message, res.code);
    }

    // 查询当个manager
    async show () {
        const { ctx, service } = this;
        const querys = ctx.params;
        const helper = ctx.helper;
        if (!querys.id || !(querys.id + '').trim()) {
            return helper.success(ctx, '', '接口缺少参数！', 501);
        }
        const res = await service.manager.getDetail(querys.id);
        helper.success(ctx, res.data, res.message, res.code);
    }

    // 删除manager
    async destroy () {
        const { ctx, service } = this;
        const querys = ctx.params;
        const helper = ctx.helper;
        if (!querys.id || !(querys.id + '').trim()) {
            return helper.success(ctx, '', '接口缺少参数！', 501)
        }
        const res = await service.manager.del(querys.id);
        helper.success(ctx, '', res.message, res.code);
    }
}

module.exports = ManagerController;
