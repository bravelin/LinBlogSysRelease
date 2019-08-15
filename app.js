// app.js
class AppBootHook {
    constructor(app) {
      this.app = app;
    }
    async didReady () {
        const ctx = await this.app.createAnonymousContext();
        this.app.myUserId = await ctx.service.manager.getManagerIdByRealName('zhangjialin')
    }
}
module.exports = AppBootHook;
