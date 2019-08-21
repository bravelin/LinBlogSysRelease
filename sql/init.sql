drop database if exists linblogdb;
create database linblogdb default character set utf8mb4 collate utf8mb4_unicode_ci;

use linblogdb;

/*** 管理人员表 ***/
drop table if exists manager;
create table manager (
    id char(32),
    loginName varchar(50) not null,
    loginPassword varchar(200) not null,
    realName varchar(50) not null, -- 真实姓名
    lastLoginTime datetime,
    role char(1) not null, -- 0-超级管理员 1-管理员
    status char(1), -- 状态 0-已删除 1-正常状态
    createdAt datetime,
    updatedAt datetime,
    primary key(id)
);

/*** 增加super admin ***/
insert into manager (id, loginName, loginPassword, realName, role, status, createdAt, updatedAt)
values ('6c84fb9012c411e1840d7b25c5ee775a', 'SuperAdministrator', '87a6ef9e02836d906bd0169a2550e1f93d21558e', '超级管理员', '0', '1', '2018-12-08 09:16:19', '2018-12-08 09:16:19'); /* seq119811xxj */

/*** 标签表 ***/
drop table if exists tag;
create table tag (
    id char(32),
    tagName varchar(50) not null,
    createdAt datetime,
    updatedAt datetime,
    primary key(id)
);

/*** 文章表 ***/
drop table if exists article;
create table article (
    id char(32),
    title varchar(500) not null, -- 标题
    type char(1), -- 0：前端增加页面   1：通过后台添加-markdown语法
    description mediumtext, -- 描述
    content mediumtext, -- type为1的时候，文章的内容
    status char(1), -- 0：已删除   1：上线   2：下线
    author char(32), -- 作者 -- manager的账号
    routerName varchar(200), -- 页面路由 type为0时
    visitCount int default 0, -- 访问量
    createdAt datetime,
    updatedAt datetime,
    primary key(id)
);

/*** 标签-文章关联表 ***/
drop table if exists linktag;
create table linktag (
    id char(32),
    tagId char(32),
    articleId char(32),
    createdAt datetime,
    updatedAt datetime,
    primary key(id)
);

/**** 页面浏览记录 visit ****/
drop table if exists visit;
create table visit (
    id char(32),
    articleId char(32),
    pagePath varchar(500), 
    createdAt datetime,
    updatedAt datetime,
    primary key(id)
);

/*** 心情短语表 ***/
drop table if exists phrase;
create table phrase (
    id char(32),
    content mediumtext, -- type为1的时候，文章的内容
    status char(1), -- 0：已删除   1：上线   2：下线
    author char(32), -- 作者 -- manager的账号
    origin varchar(200), -- 出处
    imgs varchar(5000), -- 附加图片路径[path1,path2]
    createdAt datetime,
    updatedAt datetime,
    primary key(id)
);

/*** 插图资源 ***/
drop table if exists res;
create table res (
    id char(32),
    author char(32), -- 作者 -- manager的账号
    type varchar(50), -- 类型 image/jpeg
    size int default 0, -- 资源大小
    path varchar(500), -- 路径
    remark varchar(200), -- 备注
    createdAt datetime,
    updatedAt datetime,
    primary key(id)
);
