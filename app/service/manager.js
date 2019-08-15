'use strict';
const crypto = require('crypto');
const Service = require('egg').Service;

class ManagerService extends Service {
    // 查询所有账号
    async queryAll () {
        const ctx = this.ctx;
        const resData = await ctx.model.Manager.findAll({
            attributes: { exclude: ['loginPassword'] },
            where: { status: '1' },
            order: [['createdAt', 'DESC']]
        });
        return resData;
    }

    // 查找正常状态的账号，依据loginName和loginPassword
    async find (loginName, loginPassword) {
        const ctx = this.ctx;
        const resData = await ctx.model.Manager.findOne({
            attributes: { exclude: ['loginPassword'] },
            where: { loginName, loginPassword, status: '1' }
        });
        return resData;
    }

    // 查找manager，通过realName
    async getManagerIdByRealName (realName) {
        const ctx = this.ctx;
        const res = await ctx.model.Manager.findOne({
            where: { realName }
        });
        if (res) {
            return res.id;
        } else {
            return null;
        }
    }

    // 查找Manager，通过id
    async findById (id) {
        const ctx = this.ctx;
        return await ctx.model.Manager.findById(id, {
            attributes: { exclude: ['loginPassword'] }
        });
    }

    // 判定是否是超管账号
    async isSuperAdministrator (id) {
        const ctx = this.ctx;
        const res = await ctx.model.Manager.findOne({
            where: { id, role: '0' }
        });
        return !!res;
    }

    async getDetail (id) {
        const manager = await this.findById(id);
        if (manager) {
            return { message: '账号查询成功！', data: manager, code: 200 };
        } else {
            return { message: '未能查询到账号！', data: null, code: 201 };
        }
    }

    // 记录登录时间
    async saveLoginTime (manager) {
        await manager.update({ lastLoginTime: new Date() });
    }

    // 更新账号
    async updateRealName (id, realName) {
        const ctx = this.ctx;
        const manager = await this.findById(id);
        if (manager) {
            await manager.update({ realName });
            return { code: 200, message: '账号修改成功！' };
        } else {
            return { code: 201, message: '未能查询到账号！' };
        }
    }

    async updatePassword (id, password) {
        const ctx = this.ctx;
        const manager = await this.findById(id);
        if (manager) {
            const plainPassword = ctx.helper.aesDecrypt(password);
            const hash = crypto.createHash('sha1');
            hash.update(plainPassword);
            hash.update(plainPassword);
            await manager.update({ loginPassword: hash.digest('hex') });
            return { code: 200, message: '账号密码修改成功！' };
        } else {
            return { code: 201, message: '未能查询到账号！' };
        }
    }

    // 创建账号
    async create (loginName, realName, password, role = '1') {
        const ctx = this.ctx;
        const resData = await ctx.model.Manager.findOne({
            where: { loginName }
        });
        if (resData) {
            return { message: '已存在相同账号的用户！', code: 201 };
        } else {
            const plainPassword = ctx.helper.aesDecrypt(password);
            const hash = crypto.createHash('sha1');
            hash.update(plainPassword);
            hash.update(plainPassword);
            const loginPassword = hash.digest('hex');
            await ctx.model.Manager.create({ loginName, realName, loginPassword, role, status: '1' });
            return { message: '账号创建成功！', code: 200 };
        }
    }

    // 删除账号
    async del (id) {
        const manager = await this.findById(id);
        if (!manager) {
            return { message: '未能查询到账号！', code: 201 }
        }
        await manager.update({ status: '0' });
        return { message: '账号删除成功！', code: 200 }
    }
}

module.exports = ManagerService;
