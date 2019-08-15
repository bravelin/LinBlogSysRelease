'use strict';

const Controller = require('egg').Controller;
const fs = require('fs');
const path = require('path');

class SysController extends Controller {
    // ssl校验
    async sslVerify() {
        const ctx = this.ctx;
        const verifyFile = path.resolve(__dirname, `../public/${ctx.app.config.ssl.file}`);
        const readFile = require('util').promisify(fs.readFile);
        const txt = await readFile(verifyFile, 'utf-8');
        ctx.set('Content-Type', 'text/plain');
        ctx.body = txt;
    }
}

module.exports = SysController;