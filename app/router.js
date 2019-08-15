'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller, config } = app;

    // 管理端、用户端
    router.get('/admin', controller.admin.index);
    router.get('/', controller.client.index);

    // ssl证书验证
    router.get(`/${config.ssl.path}`, controller.sys.sslVerify);

    // admin api
    router.post('/api/login', controller.admin.login); // 登录
    router.post('/api/verify/token', controller.admin.verifyToken); // 校验token是否有效

    router.get('/api/admin/managers', controller.manager.index); // 查询所有的manager
    router.get('/api/admin/managers/:id', controller.manager.show); // 查询单个manager
    router.put('/api/admin/managers/updateName/:id', controller.manager.updateRealName); // 修改manager的realName
    router.put('/api/admin/managers/updatePassword/:id', controller.manager.updatePassword); // 修改manager的password
    router.post('/api/admin/managers', controller.manager.create); // 创建manager
    router.delete('/api/admin/managers/:id', controller.manager.destroy); // 删除manager

    router.get('/api/admin/articles', controller.article.index); // 分页查询article
    router.get('/api/admin/articles/:id', controller.article.show); // 查询单个article
    router.put('/api/admin/articles/:id', controller.article.update); // 修改article
    router.post('/api/admin/articles', controller.article.create); // 创建article
    router.post('/api/admin/articles/changeStatus/:id', controller.article.changeStatus); // 更改article状态
    router.get('/api/admin/article/tags/:id', controller.article.getTags); // 获取单个article的tags

    router.get('/api/admin/tags', controller.tag.index); // 查询所有的tag
    router.get('/api/admin/tags/:id', controller.tag.show); // 分页查询查询单个tag下的articles
    router.put('/api/admin/tags/:id', controller.tag.update); // 修改tag的名称
    router.post('/api/admin/tags', controller.tag.create); // 创建tag
    router.delete('/api/admin/tags/:id', controller.tag.destroy); // 删除tag
    router.post('/api/admin/tags/link/:id', controller.tag.link); // 创建tag与article的关联关系

    router.get('/api/admin/phrases', controller.phrase.index); // 分页查询phrase
    router.put('/api/admin/phrases/:id', controller.phrase.update); // 修改phrase
    router.get('/api/admin/phrases/:id', controller.phrase.show); // 查询单个article
    router.post('/api/admin/phrases', controller.phrase.create); // 创建phrase
    router.post('/api/admin/phrases/changeStatus/:id', controller.phrase.changeStatus); // 更改article状态

    router.get('/api/admin/res', controller.res.index); // 分页查询res
    router.post('/api/admin/res', controller.res.create); // 创建res
    router.delete('/api/admin/res/:id', controller.res.destroy); // 删除res
    router.post('/api/admin/upload', controller.res.upload); // 上传file
    router.delete('/api/admin/img', controller.res.delImgByPath); // 删除图片

    // client端接口
    router.get('/api/client/articles', controller.client.articles);
    router.get('/api/client/phrases', controller.client.phrases);

    // vue history模式
    router.get('/admin/*', controller.admin.index); // 管理端
    router.get('/*', controller.client.index); // 用户端
};
