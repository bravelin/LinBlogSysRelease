'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class AdminController extends Controller {
    // 返回页面
    async index () {
        const ctx = this.ctx;
        const pageFile = path.resolve(__dirname, `../public/admin/index.html`);
        const readFile = require('util').promisify(fs.readFile);
        const pageData = await readFile(pageFile, 'utf-8');
        ctx.set('Content-Type', 'text/html');
        ctx.body = pageData;
    }

    // 后台管理用户登录接口
    async login () {
        const { ctx, service, app } = this;
        const helper = ctx.helper;
        const params = ctx.request.body;
        // 校验参数
        if (!params.loginName || !(params.loginName + '').trim()) {
            return helper.success(ctx, '', '登录用户名不能为空!', 501);
        }
        if (!params.password || !(params.password + '').trim()) {
            return helper.success(ctx, '', '登录密码不能为空!', 501);
        }
        const plainPassword = helper.aesDecrypt(params.password);
        // sha1两次加密
        const hash = crypto.createHash('sha1');
        hash.update(plainPassword);
        hash.update(plainPassword);
        const password = hash.digest('hex');
        console.log('password...', password);
        console.log('loginName...', params.loginName);
        // 查找
        const manager = await service.manager.find(params.loginName, password);
        if (manager) {
            const resObj = {
                token: app.jwt.sign({ id: manager.id }, app.config.jwt.secret, { expiresIn: '12h' }),
                id: manager.id,
                lastLoginTime: manager.lastLoginTime,
                realName: manager.realName,
                role: manager.role
            }
            helper.success(ctx, resObj, '恭喜，登录成功！');
            service.manager.saveLoginTime(manager);
        } else {
            helper.success(ctx, '', '用户名或者密码错误!', 403);
        }
    }

    // 校验token是否有效
    async verifyToken () {
        const { ctx } = this;
        const helper = ctx.helper;
        const isVerify = await helper.verifyToken(ctx);
        if (isVerify) {
            helper.success(ctx, true);
        }
    }
}

module.exports = AdminController;
