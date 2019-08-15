/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1557222528762_2696';

    config.sequelize = {
        dialect: 'mysql',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: 'root123XYZ@',
        // password: 'root123',
        database: 'linblogdb'
    };

    config.jwt = {
        secret: 'jiKl2019sYzmnOo0Whs'
    };

    config.uploadFastDfsDir = '/root/imgUpload/'; // fastDFS上传临时文件夹
    config.resHost = 'https://bravelin.top/';

    config.ssl = {
        path: '.well-known/pki-validation/fileauth.txt',
        file: 'fileauth.txt'
    };

    // add your middleware config here
    config.middleware = ['token'];

    config.multipart = {
        fileSize: '50mb'
    };

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};
