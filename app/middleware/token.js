// 校验token
module.exports = () => {
    return async (ctx, next) => {
        if (ctx.url.startsWith('/api/admin/')) { // 需要校验token
            const res = await ctx.helper.verifyToken(ctx);
            if (res) {
                await next()
            }
        } else {
            await next();
        }
    }
}