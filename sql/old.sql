-- MySQL dump 10.13  Distrib 5.6.43, for Linux (x86_64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	5.6.43

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `blog_articles`
--

DROP TABLE IF EXISTS `blog_articles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog_articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(500) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `date` varchar(10) DEFAULT NULL,
  `routerName` varchar(100) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_articles`
--

LOCK TABLES `blog_articles` WRITE;
/*!40000 ALTER TABLE `blog_articles` DISABLE KEYS */;
INSERT INTO `blog_articles` VALUES (52,'前端基础开发环境的配置','技术基础','js','主要记录安装完node.js和ruby之后sass的配置、淘宝cnpm以及gulp插件的安装。','2016/05/15','working-project-base','online'),(53,'CSS揭秘笔记之一：前言','读书笔记','css','由W3C CSS工作组特邀专家、CSS语言设计者之一的Lea Verou撰写。十年来最重要的CSS图书，没有之一。前言中主要是编程理念，特性检测与CSS编码技巧。','2016/10/30','learning-css-secrects-1','online'),(54,'CSS揭秘笔记之二：背景与边框','读书笔记','css','此书第二章的内容。分别描述了半透明边框、多重边框、背景定位、边框内圆角以及多种多样的条纹背景效果实现技巧。','2016/11/03','learning-css-secrects-2','online'),(55,'CSS揭秘笔记之三：形状','读书笔记','css','此书第三章的内容。主要讲解了自适应椭圆、平行四边形、菱形图片、切角效果、梯形效果及饼图的实现方案。','2016/11/08','learning-css-secrects-3','online'),(56,'CSS揭秘笔记之四：视觉效果','读书笔记','css','此书第四章的内容。讲解单侧投影、不规则投影、染色效果和折角效果的实现。','2016/11/20','learning-css-secrects-4','online'),(57,'CSS揭秘笔记之五：字体排印','读书笔记','css','此书第五章的内容。讲解连字符断行、简洁的插入换行、文本斑马线、自定义下划线以及几种文字效果的实现。','2016/12/05','learning-css-secrects-5','online'),(58,'转盘抽奖的前端实现','工作总结','canvas','介绍转盘抽奖页面实现过程中转盘的绘制、旋转度数的计算方案及前端使用随机数模拟的效果。','2016/12/07','working-canvas-turnTableDraw','online'),(59,'CSS揭秘笔记之六：用户体验','读书笔记','css','此书第六章的内容。主要内容是如何扩大点击区域、自定义复选框以及如何通过模糊弱化背景的实现。','2016/12/20','learning-css-secrects-6','online'),(60,'CSS揭秘笔记之七：结构与布局','读书笔记','css','此书第七章的内容。如何做到自适应内部元素、根据兄弟元素的数量来设置样式以及垂直居中是此章节的主题。','2017/01/10','learning-css-secrects-7','online'),(61,'CSS揭秘笔记之八：过渡与动画','读书笔记','css','此书第八章的内容。（未完）','2017/01/22','learning-css-secrects-8','online'),(62,'ES6标准入门笔记之一：let与const命令','读书笔记','es6','let、const命令以及块级作用域概念。','2017/03/08','learning-es6-1','online'),(63,'ES6标准入门笔记之二：变量的解构赋值','读书笔记','es6','数组、对象、字符串、数值和布尔值的解构赋值及其用途','2017/03/09','learning-es6-2','online'),(64,'ES6标准入门笔记之三：字符串的扩展','读书笔记','es6','字符的Unicode表示法、字符串的codePointAt()、includes()、startsWidth()、endsWidth()、repeat()、padStart()、padEnd()等方法以及模板字符串和标签模板。','2017/03/11','learning-es6-3','online'),(65,'ES6标准入门笔记之四：正则的扩展','读书笔记','es6','ES6的正则支持新的构造函数，支持u修饰符、y修饰符，新增sticky属性、flags属性。','2017/03/13','learning-es6-4','online'),(66,'ES6标准入门笔记之五：数值的扩展','读书笔记','es6','二进制和八进制表示法；Number对象新增的isFinite、isNaN、parseInt、parseFloat等方法和属性；Math对象新增的trunc、sign、cbrt等17个方法；指数运算符。','2017/03/17','learning-es6-5','online'),(67,'ES6标准入门笔记之六：数组的扩展','读书笔记','es6','Array.from()、Array.of()方法以及数组实例的copyWithin()、find()、findIndex()、fill()、entries()、keys()、values()、includes()等方法的介绍。','2017/03/21','learning-es6-6','online'),(68,'Git的常用命令','技术基础','git','记录下Git的常用命令','2016/08/11','working-project-git','online'),(69,'ES6标准入门笔记之七：函数的扩展','读书笔记','es6','','2017/05/07','learning-es6-7','online'),(70,'ES6标准入门笔记之八：对象的扩展','读书笔记','es6','','2017/05/09','learning-es6-8','online'),(71,'Canvas学习笔记之一：基础知识','读书笔记','canvas','','2016/06/08','learning-canvas-1','online'),(72,'ES6标准入门笔记之九：Symbol','读书笔记','es6','','2017/05/13','learning-es6-9','online'),(73,'ES6标准入门笔记之十：Proxy和Reflect','读书笔记','es6','','2017/05/14','learning-es6-10','online'),(74,'ES6标准入门笔记之十一：二进制数组','读书笔记','es6','','2017/05/18','learning-es6-11','online'),(75,'Canvas学习笔记之二：绘制','读书笔记','canvas','','2016/06/01','learning-canvas-2','online'),(76,'Canvas绘制的时钟','例子','canvas','','2017/06/17','example-canvas-clock','online'),(77,'Canvas学习笔记之三：文本','读书笔记','canvas','','2016/06/25','learning-canvas-3','online'),(78,'Canvas学习笔记之四：图像与视频','读书笔记','canvas','','2016/06/30','learning-canvas-4','online'),(79,'React学习笔记之一：初入React世界','读书笔记','react','','2017/10/29','learning-react-1','online'),(80,'React学习笔记之二：漫谈React','读书笔记','react','','2017/11/05','learning-react-2','online'),(81,'APICloud平台的使用','工作笔记','apicloud','记录apicloud平台的使用，以此构建一个小型的、免费的、可实现数据存储与接口调用的web应用。','2018/03/16','working-project-apiCloud','online'),(82,'数字滚动效果的实现','工作笔记','js','vue.js实现的数字滚动组件','2018/04/11','working-project-scrollNumber','online'),(83,'mpvue中使用WeCropper实现图片裁剪','工作笔记','mpvue','we-cropper是一款灵活小巧的Canvas图片裁剪器，本文记录在mpvue框架中如何引入使用，并修复在IOS中上传的图片翻转的问题。','2018/05/12','working-wx-weCropper','online'),(84,'你不知道的JavaScript(上卷)笔记','读书笔记','JavaScript','作用域与闭包','2018/05/20','learning-javascript-1','online'),(85,'使用PhotoSwipe构建图片预览组件','工作笔记','vue','利用photoSwipe封装图片预览组件','2018/05/23','working-project-photoSwipe','online'),(86,'Say Goodbye!','感想','感想','','2018/05/31','bye','downline'),(87,'你不知道的JavaScript(下卷)笔记','读书笔记','javascript','','2018/06/09','learning-javascript-3','online'),(88,'你不知道的JavaScript(中卷)笔记','读书笔记','javascript','','2018/06/05','learning-javascript-2','online'),(89,'Canvas学习笔记之五：动画','笔记','canvas','','2016/07/10','learning-canvas-5','online'),(90,'Canvas学习笔记之六：精灵','笔记','canvas','','2016/07/15','learning-canvas-6','online'),(91,'Canvas学习笔记之六：物理效果','笔记','canvas','','2016/07/19','learning-canvas-7','online'),(92,'Canavs绘制的RfidCard','例子','canvas','','2018/07/27','example-canvas-rfid-card','downline'),(93,'CSS3实现旋转的魔方','例子','css','','2018/10/10','learning-css-exp-1','online');
/*!40000 ALTER TABLE `blog_articles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_imgs`
--

DROP TABLE IF EXISTS `blog_imgs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog_imgs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createAt` datetime DEFAULT NULL,
  `updateAt` datetime DEFAULT NULL,
  `url` varchar(500) DEFAULT NULL,
  `name` varchar(200) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_imgs`
--

LOCK TABLES `blog_imgs` WRITE;
/*!40000 ALTER TABLE `blog_imgs` DISABLE KEYS */;
INSERT INTO `blog_imgs` VALUES (1,'2018-05-31 15:00:27','2018-05-31 15:00:27','http://800cx2.com1.z0.glb.clouddn.com/apicloud/3656599f328b4d2668c0d78ee2271da7.png','QQ截图20180531150004.png','image/png',34839),(2,'2018-05-31 14:50:04','2018-05-31 14:50:04','http://800cx2.com1.z0.glb.clouddn.com/apicloud/5f237f4ca33746e872de71f66a7b9548.png','QQ截图20180531144807.png','image/png',177503),(3,'2018-05-31 12:29:00','2018-05-31 12:29:00','http://800cx2.com1.z0.glb.clouddn.com/apicloud/f2f73c8e6597c1289d21a6aff402e5dc.jpg','IMG_20150731_084139.jpg','image/jpeg',53861),(4,'2018-05-31 12:16:46','2018-05-31 12:16:46','http://800cx2.com1.z0.glb.clouddn.com/apicloud/0a526b4424548f765c1bd0ef89d29672.png','QQ截图20180531120930.png','image/png',179931),(5,'2018-05-31 12:02:03','2018-05-31 12:02:03','http://800cx2.com1.z0.glb.clouddn.com/apicloud/480f8162a3b729acea0316a3c1e65d70.jpg','IMG_20150731_084139.jpg','image/jpeg',220725),(6,'2018-05-31 12:02:02','2018-05-31 12:02:02','http://800cx2.com1.z0.glb.clouddn.com/apicloud/16ca227c9e0872e6ad555a1459e4e1a5.jpg','IMG_20150731_084139.jpg','image/jpeg',124482),(7,'2018-05-31 11:52:19','2018-05-31 11:52:19','http://800cx2.com1.z0.glb.clouddn.com/apicloud/00a05376fbe82279e0588fcfcdecb455.png','QQ截图20180531091040.png','image/png',27707),(8,'2018-05-31 11:42:21','2018-05-31 11:42:21','http://800cx2.com1.z0.glb.clouddn.com/apicloud/c1bb7299121a8d96dca3ebcc21b001ec.png','QQ截图20180531085205.png','image/png',107316),(9,'2018-05-31 11:35:20','2018-05-31 11:35:20','http://800cx2.com1.z0.glb.clouddn.com/apicloud/5563a748dd8469188c81306a4b41f961.jpg','领取红包.jpg','image/jpeg',83758),(10,'2018-05-31 11:26:42','2018-05-31 11:26:42','http://800cx2.com1.z0.glb.clouddn.com/apicloud/c85ee8c87bc8224fc707d32bf11444c8.jpg','个人中心_已登录.jpg','image/jpeg',64079),(11,'2018-05-31 11:18:22','2018-05-31 11:18:22','http://800cx2.com1.z0.glb.clouddn.com/apicloud/3cf4b4c5a5b53d9b9acb2142770c4c64.jpg','登录.jpg','image/jpeg',40985),(12,'2018-05-31 11:16:06','2018-05-31 11:16:06','http://800cx2.com1.z0.glb.clouddn.com/apicloud/8a48edd6e0550756ee6c186dfad8e74c.jpg','个人中心.jpg','image/jpeg',87342),(13,'2018-05-31 11:08:01','2018-05-31 11:08:01','http://800cx2.com1.z0.glb.clouddn.com/apicloud/f56d57e2e4aa6ded519395cf7cf6ec49.jpg','QQ图片20180531110728.jpg','image/jpeg',96474),(14,'2018-05-31 10:45:03','2018-05-31 10:45:03','http://800cx2.com1.z0.glb.clouddn.com/apicloud/a932cbf582c094ba1400114a3e71bd98.png','QQ截图20180531104251.png','image/png',244671),(15,'2018-05-24 14:45:12','2018-05-24 14:45:12','http://800cx2.com1.z0.glb.clouddn.com/apicloud/4f6458ca30b96f7bccc6e01c9af06c8c.png','QQ截图20180524144353.png','image/png',17341),(16,'2018-05-24 12:25:44','2018-05-24 12:25:44','http://800cx2.com1.z0.glb.clouddn.com/apicloud/45713a6792da60c6de4b69c8c3dbaad3.png','QQ截图20180524122507.png','image/png',45154),(17,'2018-05-24 12:15:33','2018-05-24 12:15:33','http://800cx2.com1.z0.glb.clouddn.com/apicloud/bd83b7c03dcf2507eed15b399b02de17.png','QQ截图20180524121420.png','image/png',24370),(18,'2018-05-24 12:00:32','2018-05-24 12:00:32','http://800cx2.com1.z0.glb.clouddn.com/apicloud/c0804ae9a1321d903995b11ac208b9a7.png','QQ截图20180524115908.png','image/png',26016),(19,'2018-05-24 12:00:32','2018-05-24 12:00:32','http://800cx2.com1.z0.glb.clouddn.com/apicloud/8f460dee7e914be9354fec6344e4b112.png','QQ截图20180524115908.png','image/png',12884),(20,'2018-05-24 09:41:40','2018-05-24 09:41:40','http://800cx2.com1.z0.glb.clouddn.com/apicloud/5ed2510ca788d087abfbf36afe000e95.png','QQ截图20180524094017.png','image/png',178832);
/*!40000 ALTER TABLE `blog_imgs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blog_sentences`
--

DROP TABLE IF EXISTS `blog_sentences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `blog_sentences` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(2000) DEFAULT NULL,
  `origin` varchar(200) DEFAULT NULL,
  `status` varchar(20) DEFAULT NULL,
  `imgs` varchar(1000) DEFAULT NULL,
  `createAt` datetime DEFAULT NULL,
  `updateAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blog_sentences`
--

LOCK TABLES `blog_sentences` WRITE;
/*!40000 ALTER TABLE `blog_sentences` DISABLE KEYS */;
INSERT INTO `blog_sentences` VALUES (4,'应该有一个位置，刚刚好！','','online','','2018-07-14 22:07:59','2018-07-14 22:08:05'),(5,'捉到一只误闯走廊的麻雀，刚要拍照，趁我手松的时候飞走了！','','online',NULL,'2018-06-09 17:40:55','2018-06-09 17:40:59'),(6,'blog增加了两个重要的功能，一是利用photoSwipe使图片可预览，并支持移动端的touch；二是github的issue功能为文章增加评论，虽然之前也有简易的评论功能。','','online','[{\"src\":\"http://800cx2.com1.z0.glb.clouddn.com/apicloud/59956e7dc818e186345755ede5c3169c.jpg\",\"w\":\"900\",\"h\":\"1600\"},{\"src\":\"http://800cx2.com1.z0.glb.clouddn.com/apicloud/f53db04abef77bcf66c291b0d017ec92.png\",\"w\":\"1366\",\"h\":\"768\"},{\"src\":\"http://800cx2.com1.z0.glb.clouddn.com/apicloud/0a995e06a42974f2dabc414bcf529ea5.png\",\"w\":\"1366\",\"h\":\"768\"}]','2018-05-22 23:34:07','2018-05-22 23:34:11'),(7,'路边的民工只能在树荫下午休——其实你在别人眼中，比大部分人过得都要幸福，只是不知道而已。','lin','online','[{\"src\":\"http://800cx2.com1.z0.glb.clouddn.com/apicloud/e060fb490183f78e1a66e5046155b1dd.jpeg\",\"w\":\"1080\",\"h\":\"1440\"}]','2018-05-20 22:46:31','2018-05-22 15:34:47'),(8,'“你不知道的JavaScript”每天都有收获，很多知识点自己确实不了解，令人惊讶的document.all，~~，!!等操作符，还有&&与||返回值，感觉真的很无知……','','online',NULL,'2018-05-17 22:48:12','2018-05-17 22:50:11'),(9,'跑了五公里，回来拿镜子一照，满脸是汗，像刚从水里出来的一样！','lin','online',NULL,'2018-05-14 22:16:37','2018-05-14 22:16:41'),(10,'今天解决了图片裁剪图片翻转的问题。内网也重构完了，所有难题，皆去矣！','lin','online',NULL,'2018-05-12 21:57:13','2018-05-12 21:57:18'),(11,'要将内网系统重构完，压力还是有的。','','online',NULL,'2018-04-22 23:04:23','2018-04-28 23:33:12'),(12,'不知道什么时候才能不再烦恼、不再抑郁，像其他人一样自在洒脱！','lin','online',NULL,'2018-04-22 20:24:41','2018-04-22 20:25:25'),(13,'长大后，我们变得越来越胆小，并不是懦弱，是越来越懂得责任！','日思夜读','online',NULL,'2018-04-21 21:21:09','2018-04-21 21:40:53');
/*!40000 ALTER TABLE `blog_sentences` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-30  8:33:57
