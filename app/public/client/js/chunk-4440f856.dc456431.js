(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4440f856"],{"3ad6":function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div")},a=[],l=(s("f763"),s("eb57")),v={data:function(){return{catalog:[],showPreview:!1,previewList:[],previewIndex:0}},mounted:function(){var t=this;t.$store.commit(l["a"].SWITCH_LOADING,!1),t.$nextTick(function(){window.addEventListener("scroll",t.doHandlerScroll);var i=document.querySelectorAll("code");i.length>0&&i.forEach(function(t){hljs.highlightBlock(t)});var s=document.querySelectorAll("h3.title");if(s.length>0){var e=[],a=Math.round(1e6*Math.random()),l="";t.catalog=s.forEach(function(t,i){l="section"+a+"-"+i,t.setAttribute("id",l),e.push({text:t.innerHTML,id:l,el:t,active:!1})}),t.catalog=e}var v=document.querySelectorAll(".content figure>img");v.length>0&&t.getImageSize(0,v)})},methods:{getImageSize:function(t,i){var s=this,e=new Image,a=i[t];e.onload=function(){s.previewList.push({src:a.src,w:this.width,h:this.height}),t++,t<i.length?s.getImageSize(t,i):s.$el.addEventListener("click",s.doPreview)},e.src=a.src},doPreview:function(t){var i=this;if(/img/i.test(t.target.tagName)&&!i.showPreview&&!t.target.classList.contains("pswp__img")){i.previewIndex=0;for(var s=0;s<i.previewList.length;s++)if(i.previewList[s].src==t.target.src){i.previewIndex=s;break}i.showPreview=!0}},doHandlerScroll:function(){for(var t,i,s=this,e=s.catalog.length-1;e>=0;e--)if(t=s.catalog[e].el,t.getBoundingClientRect().top<10){i=e;break}s.catalog=s.catalog.map(function(t,s){return t.active=s==i,t})}},beforeDestroy:function(){var t=this;window.removeEventListener("scroll",t.doHandlerScroll),t.previewList.length>0&&t.$el.removeEventListener("click",t.doPreview)}},r=v,n=s("17cc"),c=Object(n["a"])(r,e,a,!1,null,null,null);i["a"]=c.exports},"85af":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"page-container article-page resume-page"},[s("h2",{staticClass:"title"},[t._v("Resume")]),s("div",{staticClass:"content resume"},[s("div",{staticClass:"top clear-fix"},[s("div",{staticClass:"left"},[s("h2",[t._v("张家林    男")]),s("div",[t._v("求职意向：Web前端工程师")]),s("div",[t._v("目前状况：在职")])]),s("ul",{staticClass:"right"},[s("li",[t._v("出生年月：1989/02/28")]),s("li",[t._v("籍"),s("span"),t._v("贯：江西 赣州")]),s("li",[t._v("联系电话：13049344009")]),s("li",[t._v("电子邮箱：jialin2013@qq.com")])])]),s("div",{staticClass:"zone clear-fix"},[s("div",{staticClass:"left"},[t._v("工作经历")]),s("div",{staticClass:"right"},[s("ul",{staticClass:"list"},[s("li",[t._v("2018/10/11 至 今：江西裕丰智能农业科技有限公司，Web前端工程师")]),s("li",[t._v("2015/05/19 至 2018/05/31：深圳石豆软件技术有限公司（"),s("a",{attrs:{href:"http://www.xiaomodo.com",target:"_blank"}},[t._v("深圳市小摩豆网络科技有限公司")]),t._v("），Web前端工程师")]),s("li",[t._v("2013/04/15 至 2015/04/15：中车信息技术有限公司，平台开发工程师")]),s("li",[t._v("2011/07/09 至 2013/04/15：天津凯发电气股份有限公司，软件工程师")])])])]),s("div",{staticClass:"zone clear-fix"},[s("div",{staticClass:"left"},[t._v("教育背景")]),s("div",{staticClass:"right"},[s("ul",{staticClass:"list"},[s("li",[t._v("2007/09/13 至 2011/06/20：华东交通大学，计算机科学与技术专业，本科，学士学位")])])])]),s("div",{staticClass:"zone clear-fix"},[s("div",{staticClass:"left"},[t._v("专业技能")]),s("div",{staticClass:"right"},[s("ul",{staticClass:"list"},[s("li",[t._v("熟悉与掌握HTML5的相关技术，包括CSS3、ES6、Sass、Canvas以及构建工具gulp、webpack的使用；")]),s("li",[t._v("熟悉与掌握使用Vue.js、Avalon.js等前端框架搭建单页模式应用；了解React的应用;")]),s("li",[t._v("掌握egg.js框架构建基于node.js的后台服务；")]),s("li",[t._v("了解页面的性能优化方法以及浏览器兼容性问题解决方法；")]),s("li",[t._v("了解Java、MySql等数据库技术；")]),s("li",[t._v("个人主页："),s("a",{attrs:{href:"https://bravelin.top",target:"_blank"}},[t._v("https://bravelin.top")])]),s("li",[t._v("英语水平：CET-4。")])])])]),s("div",{staticClass:"zone clear-fix"},[s("div",{staticClass:"left"},[t._v("自我评价")]),s("div",{staticClass:"right"},[s("ul",{staticClass:"list"},[s("li",[t._v("做事认真，对工作负责；待人真诚，有良好的独立学习能力和团队协作精神；")]),s("li",[t._v("善于解决工作中遇到的一些技术难题，并总结经验；")]),s("li",[t._v("喜欢编程，能够承受工作中的压力；")]),s("li",[t._v("基础扎实，业余喜欢学习新知识和新技术，以充实和提高自己。")])])])]),s("div",{staticClass:"zone clear-fix"},[s("div",{staticClass:"left"},[t._v("项目经历A")]),s("div",{staticClass:"right"},[s("ul",[s("li",[s("strong",[t._v("【项目名称】")]),t._v("（天津凯发电气）铁路牵引供电设备维修管理信息系统")]),s("li",[s("strong",[t._v("【开发周期】")]),t._v("2011.10 至 2013.04")]),s("li",[s("strong",[t._v("【项目描述】")]),t._v("使用Flex+Java+Oracle等技术实现的、应用于铁路局供电段的一套基于B/S架构的信息管理系统。主要目标是方便路局人员对铁路牵引供电设备实施更有效的管理，及时掌握设备的运行状况，确保供电设备在经济运行条件下的安全、不间断供电。")]),s("li",[s("strong",[t._v("【项目职责】")]),t._v("负责部分模块的前后端实现。")]),s("li",[s("strong",[t._v("【项目经验】")]),t._v("作为大学毕业之后的第一份工作，接触到了真实的应用系统以及开发流程，学到的东西很多。Java的Spring、Hibernate框架，以及Oracle数据库，特别是前端的Flex技术，虽然现在已经落寞了，但依然受益匪浅。")])])])]),s("div",{staticClass:"zone clear-fix"},[s("div",{staticClass:"left"},[t._v("项目经历B")]),s("div",{staticClass:"right"},[s("ul",[s("li",[s("strong",[t._v("【项目名称】")]),t._v("（中车信息技术）TiEAM平台")]),s("li",[s("strong",[t._v("【开发周期】")]),t._v("2013.04 至 2015.04")]),s("li",[s("strong",[t._v("【项目描述】")]),t._v("TiEAM平台相当于一个组件库，用于快速构建Web应用系统。在前端提供现成的UI组件，在后端提供业务逻辑处理模块，通过自主研发的集成工具，进行编译和构建。")]),s("li",[s("strong",[t._v("【项目职责】")]),t._v('主要开发和维护一些图表组件，以及基于此平台实现 "建筑模型交互信息系统（TiBIM）" 的部分模块。')]),s("li",[s("strong",[t._v("【项目经验】")]),t._v("接触了FusionCharts、AmCharts等商业图表组件以及echarts、zrender等开源的JS组件。巩固了自己JS的编程能力。")])])])]),s("div",{staticClass:"zone clear-fix"},[s("div",{staticClass:"left"},[t._v("项目经历C")]),s("div",{staticClass:"right"},[s("ul",[s("li",[s("strong",[t._v("【项目名称】")]),t._v("小摩豆SASS平台")]),s("li",[s("strong",[t._v("【开发周期】")]),t._v("2015.09 至 2018.05")]),s("li",[s("strong",[t._v("【项目描述】")]),t._v('小摩豆致力于健康养身行业提供SASS服务，为水疗沐足会所提供拓客锁客的工具。主要包括微信公众号 "小摩豆" 以及PC端的后台管理系统、技师端和管理者端的APP。\n            '),s("p",{staticStyle:{margin:"0"}},[t._v("公众号前端页面使用vue.js框架构建；PC端的会所后台管理系统页面则是基于国内avalon.js框架构建的单页应用，部分页面已使用vue.js重构。")]),s("p",{staticStyle:{margin:"0"}},[t._v("项目中的亮点是集成了环信/腾讯云即时通讯SDK，成功构建了契合项目需求的聊天应用。")])]),s("li",[s("strong",[t._v("【项目职责】")]),t._v("负责Web系统页面框架的搭建、页面整体结构的规划和实现、公共样式与公共组件的实现、编码规范的约定以及解决技术难题和具体需求的实现。")]),s("li",[s("strong",[t._v("【项目经验】")]),t._v("小摩豆是移动互联网项目，在项目的开始阶段就参与进来了。主要经验是掌握和使用了Web前端流行的一些技术，如gulp、sass、spa单页模式、vue.js框架、es6、webpack打包工具等。")])])])]),s("div",{staticClass:"zone clear-fix"},[s("div",{staticClass:"left"},[t._v("项目经历D")]),s("div",{staticClass:"right"},[s("ul",[s("li",[s("strong",[t._v("【项目名称】")]),t._v("个人主页 "),s("a",{attrs:{href:"https://bravelin.top",target:"_blank"}},[t._v("bravelin.top(私下)")])]),s("li",[s("strong",[t._v("【开发周期】")]),t._v("2016.05 起")]),s("li",[s("strong",[t._v("【项目描述】")]),t._v("一直很想拥有个人blog平台，最初使用vue.js在GitHub Pages构建了个人主页，可以在线看到代码的运行效果。之后购买bravelin.top域名、阿里云服务器，使用"),s("a",{attrs:{href:"https://eggjs.org/zh-cn/",target:"_blank"}},[t._v("egg.js")]),t._v("+mysql搭建后台，并增加https+ssr(服务端渲染)。")]),s("li",[s("strong",[t._v("【项目经验】")]),t._v("页面的布局与样式都是自己设计并且实现的，能适配PC端与移动端的屏幕；增强自己从前端到后台构建整个web应用的能力。")])])])]),s("div",{staticClass:"zone clear-fix"},[s("div",{staticClass:"left"},[t._v("项目经历E")]),s("div",{staticClass:"right"},[s("ul",[s("li",[s("strong",[t._v("【项目名称】")]),s("a",{attrs:{href:"http://test.yufengtek.com:8086",target:"_blank"}},[t._v("武夷山茶园数据平台")])]),s("li",[s("strong",[t._v("【开发周期】")]),t._v("2019.02起")]),s("li",[s("strong",[t._v("【项目描述】")]),t._v("武夷山市所有茶园的一个物联监控平台，包括各乡镇的茶树排行、施肥信息、采摘信息、种植分布、实时环境监控等。")]),s("li",[s("strong",[t._v("【项目职责】")]),t._v("整个系统除去后台包括PC管理端、PC大屏、微信小程序和app等。个人负责PC管理端和大屏页面的开发。图表使用echarts和百度地图结合，vue + vuex构建页面。预览地址：http://test.yufengtek.com:8086")])])])]),s("div",{staticClass:"zone clear-fix"},[s("div",{staticClass:"left"},[t._v("证书荣誉")]),s("div",{staticClass:"right"},[s("ul",{staticClass:"list"},[s("li",[t._v("2017年：深圳市小摩豆网络科技有限公司“优秀员工奖”；")]),s("li",[t._v("2013年：通过北京地区2012年下半年软考，获得软件设计师证书；")]),s("li",[t._v("2012年：（天津）助理工程师证书；")]),s("li",[t._v("2007~2011年：华东交通大学优秀毕业设计（论文）证书、国家励志奖学金、华东交通大学“三好”学生、优秀共青团员等。")])])])])])])}],l=s("3ad6"),v={extends:l["a"]},r=v,n=(s("b7df"),s("17cc")),c=Object(n["a"])(r,e,a,!1,null,null,null);i["default"]=c.exports},b7df:function(t,i,s){"use strict";var e=s("cdc7"),a=s.n(e);a.a},cdc7:function(t,i,s){}}]);