'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');

class ClientController extends Controller {
    // 返回页面
    async index () {
        const ctx = this.ctx;
        const pageFile = path.resolve(__dirname, `../public/client/index.html`);
        const readFile = require('util').promisify(fs.readFile);
        const pageData = await readFile(pageFile, 'utf-8');
        ctx.set('Content-Type', 'text/html');
        ctx.body = pageData;
    }
    // articles查询
    async articles () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const query = ctx.query || {};
        // 查询条件
        const authorId = ctx.app.myUserId;
        const page = (query.page || 1) - 0;
        const pageSize = (query.pageSize || 15) - 0;
        const searchKey = query.key ? decodeURIComponent(query.key) : '';
        const status = '1';
        const order = query.order || 'createdAt';
        const orderDir = query.orderDir || 'DESC';
        const resData = await service.article.query({ authorId, page, pageSize, searchKey, status, order, orderDir });
        helper.success(ctx, resData);
    }
    // phrase查询
    async phrases () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const query = ctx.query || {};
        // 查询条件
        const authorId = ctx.app.myUserId;
        const page = (query.page || 1) - 0;
        const pageSize = (query.pageSize || 15) - 0;
        const searchKey = query.key ? decodeURIComponent(query.key) : '';
        const status = '1';
        const order = query.order || 'createdAt';
        const orderDir = query.orderDir || 'DESC';
        const resData = await service.phrase.query({ authorId, page, pageSize, searchKey, status, order, orderDir });
        helper.success(ctx, resData);
    }
    // 创建访问记录
    async create () {
        const { ctx, service } = this;
        const helper = ctx.helper;
        const params = ctx.request.body;
        if (!params.pagePath || !(params.pagePath + '').trim()) {
            return helper.success(ctx, '', '访问路径不能为空！', 501);
        }
        const res = await service.visit.create(params);
        helper.success(ctx, res.data, res.message, res.code);
    }
}

module.exports = ClientController;
