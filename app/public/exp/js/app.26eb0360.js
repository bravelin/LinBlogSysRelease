(function(t){function e(e){for(var a,c,l=e[0],s=e[1],o=e[2],u=0,m=[];u<l.length;u++)c=l[u],i[c]&&m.push(i[c][0]),i[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(m.length)m.shift()();return r.push.apply(r,o||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,l=1;l<n.length;l++){var s=n[l];0!==i[s]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},r=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var d=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("dac5"),n("6e26"),n("9604"),n("df67");var a=n("6e6d"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{height:t.winHeight+"px"},attrs:{id:"app"}},[n("div",{attrs:{id:"viewer-container"}}),n("Spinner",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]})],1)},r=[],c=(n("8741"),n("acf8"),n("2338"),n("1294"),n("fb37"),n("f763"),n("7a59"),n("a506")),l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"spinner-wrap"},[n("div",{staticClass:"spinner"},[n("div",{staticClass:"spinner-container container1"},[n("div",{staticClass:"circle1"}),n("div",{staticClass:"circle2"}),n("div",{staticClass:"circle3"}),n("div",{staticClass:"circle4"})]),n("div",{staticClass:"spinner-container container2"},[n("div",{staticClass:"circle1"}),n("div",{staticClass:"circle2"}),n("div",{staticClass:"circle3"}),n("div",{staticClass:"circle4"})]),n("div",{staticClass:"spinner-container container3"},[n("div",{staticClass:"circle1"}),n("div",{staticClass:"circle2"}),n("div",{staticClass:"circle3"}),n("div",{staticClass:"circle4"})])])])}],o=n("6691"),d={},u=Object(o["a"])(d,l,s,!1,null,null,null),m=u.exports,h=n("591a"),g=["SWITCH_LOADING","SWITCH_SCREEN_FULL","GET_WINDOW_SIZE","SWITCH_MESSAGE_TIP"],p={};g.forEach(function(t){p[t]=t});var f=p,x=[{id:"image101",longitude:1.8980849795052552,latitude:-.2666216286189218,image:"./images/map/marker.png",width:32,height:32,anchor:"bottom center"},{id:"text101",longitude:.3155955262333645,latitude:-1.2062343811518579,html:"裕丰科技",anchor:"center center",scale:[.5,1.5],className:"text-style text-style-1"},{id:"text102",longitude:.5808239759641052,latitude:-.04569425207134836,html:"恒大悦龙台",anchor:"center center",scale:[.5,1.5],className:"text-style text-style-1"},{id:"text103",longitude:2.7740579702550847,latitude:-.9200055414875021,html:"香江大道",anchor:"center center",scale:[.5,1.5],className:"text-style text-style-1"},{id:"text104",longitude:.9353904249693797,latitude:-.12224440071617937,html:"赣州国际企业中心总部园区",anchor:"center center",scale:[.5,1.5],className:"text-style text-style-3",content:'\n        <div class="text-content">赣州国际企业中心位于赣州市经济技术开发区华坚北路与香江大道交汇处，距离赣州黄金机场约12公里，厦蓉高速公路3.5公里。创业办公环境十分优越，项目总建筑面积21.3万平米，是集科技孵化企业、服务外包企业、高端配套产业及都市型企业、区域性中小企业总部基地、文化创意等现代服务业为一体的综合型产业园区！</div>\n        <div class="text-content">赣州国际企业中心秉持“小资源、大产出”的总部型经济理念，计划将引进500家企业入园办公，不同类型、不同发展阶段的企业集聚在园区创业发展，在产生税收效应的同时，将带来大量高管和核心技术岗位就业，对创业就业及延伸产业带动能力强。园区自运营以来，入驻企业达375家。作为赣州首个集“产、学、研”于一体的总部经济产业园，园区以培育中小企业为核心先导，依托具有独立知识产权的“云科技共享中心”，致力于建设一个现代化、国际化、创新型、生态型的总部经济产业园，积极为入园企业搭建一个集聚发展的平台，助力园区企业走向腾飞！</div>\n        <div class="text-content">赣州国际企业中心以双生态园区推动总部企业集聚、为大学生创业就业搭建平台、助推中小企业创业、持续提升税收贡献效应和科技成果转化。园区汇聚了多家具有代表性科技型企业——慧通力合信息技术、九维3D打印、菲客无人机、裕丰智能农业科技；金融企业——积木盒子、趣分期，致力于不同领域的金融企业的进驻，为园区企业发展提供更多样、更快捷的金融服务渠道；以及电商企业——最惠购、冠宏亚太电子商务等企业共同发展。通过园区创新的八大服务平台来助力企业得到更好的发展，有利地搭建了“大众创业 万众创新”的良好平台，让企业来这里办公，创业更简单！</div>\n        '},{id:"text105",longitude:.20469921270195215,latitude:-.01631336229622682,html:"劲嘉山与城",anchor:"center center",scale:[.5,1.5],className:"text-style text-style-1"},{id:"text106",longitude:1.9142415027887278,latitude:-.18359340628315612,html:"黄金家园小区",anchor:"center center",scale:[.5,1.5],className:"text-style text-style-2"},{id:"text107",longitude:3.0668459421061565,latitude:-.557009735461695,html:"杨梅康居社区",anchor:"center center",scale:[.5,1.5],className:"text-style text-style-1"},{id:"image102",longitude:4.640286265439133,latitude:-.3698453301139324,image:"./images/map/marker.png",width:32,height:32,anchor:"bottom center"},{id:"text108",longitude:4.649124294486832,latitude:-.2890784699253437,html:"紫荆康居小区",anchor:"center center",scale:[.5,1.5],className:"text-style text-style-2"},{id:"text109",longitude:6.0191176145370235,latitude:-.3731695977823395,html:"红旗实验中学新校区",anchor:"center center",scale:[.5,1.5],className:"text-style text-style-1"},{id:"text110",longitude:.1916336526235613,latitude:-.5244459527091325,html:"华昌路",anchor:"center center",scale:[.5,1.5],className:"text-style text-style-1"},{id:"polyline101",polyline_rad:[[.3319322451269822,-.26213270596862936],[.2310906671958969,-.4320399372918464],[.14146359125896657,-.5551123777186939],[.08237252688098684,-.6219515581269461],[.05978419329265335,-.6519839972919348],[6.246050683118821,-.7442608129013837]],svgStyle:{stroke:"rgba(140, 190, 10, 0.6)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"10px"}},{id:"polygon",polygon_rad:[[5.11937949392216,-.15699968826336308],[5.475674271718401,-.13231532175155025],[5.6208894304954455,-.2650653693609697],[5.770396369273277,-.45300745193192604],[5.967686288286505,-.5597437209543861],[6.154649960407969,-.6140437999989214],[6.179524194850232,-.6449224946271261],[5.912649665852826,-.8078632078116232],[5.552375658037812,-.8948064347656275],[5.3404832005755924,-.9206622836233711],[4.800668189155621,-.8871897499251702],[4.720629802210733,-.8482040285920469],[4.786491990603896,-.7214510569093981],[4.957654659478731,-.4534506958363451],[5.061134204754606,-.24686436011579227],[5.117282930288132,-.15889107853483297],[5.11937949392216,-.15699968826336308]],svgStyle:{fill:"rgba(200, 0, 0, 0.2)",stroke:"rgba(200, 0, 50, 0.8)",strokeWidth:"2px"}},{id:"text111",longitude:5.437457692101721,latitude:-.4819432415154692,html:"工地",anchor:"center center",scale:[.5,1.5],className:"text-style text-style-1"}],y=[{id:"image201",longitude:4.152985838857941,latitude:-.6694348977819908,image:"./images/map/marker.png",width:32,height:32,anchor:"bottom center"},{id:"text201",longitude:5.459592328547654,latitude:-.46592850919868045,html:"杨梅康居社区",anchor:"center center",scale:[.5,1.5],className:"text-style text-style-1"},{id:"text202",longitude:.0721141527886587,latitude:-.29102468638103995,html:"香江大道",anchor:"center center",scale:[.5,1.5],className:"text-style text-style-1"},{id:"text203",longitude:6.207225483793423,latitude:-.23373044335915427,html:"紫荆康居小区",anchor:"center center",scale:[.5,1.5],className:"text-style text-style-1"},{id:"text204",longitude:6.270266195817247,latitude:-.6741729504924581,html:"裕丰科技",anchor:"center center",scale:[.5,1.5],className:"text-style text-style-1"},{id:"text205",longitude:4.385299861114074,latitude:-.3104747102286627,html:"杨梅新村",anchor:"center center",scale:[.5,1.5],className:"text-style text-style-1"},{id:"text206",longitude:3.4987137163781465,latitude:-.240660305747455,html:"黄金家园小区",anchor:"center center",scale:[.5,1.5],className:"text-style text-style-1"},{id:"text207",longitude:4.171860390463932,latitude:-.607002286839931,html:"赣州国际企业中心总部园区",anchor:"center center",scale:[.5,1.5],className:"text-style text-style-2"}],v=[{id:"image301",longitude:.8694445238634918,latitude:-.3590781952589821,image:"./images/map/marker.png",width:32,height:32,anchor:"bottom center"},{id:"text301",longitude:2.429401220740268,latitude:-.558141442427349,html:"黄金家园小区",anchor:"center center",scale:[.5,1.5],className:"text-style text-style-1"},{id:"text302",longitude:.8716317808674247,latitude:-.2972686980707031,html:"赣州国际企业中心总部园区",anchor:"center center",scale:[.5,1.5],className:"text-style text-style-2"},{id:"text303",longitude:4.247371726022154,latitude:-.5611835173208481,html:"杨梅新村",anchor:"center center",scale:[.5,1.5],className:"text-style text-style-1"},{id:"text304",longitude:5.422835819647649,latitude:-1.0087756223342952,html:"香江大道",anchor:"center center",scale:[.5,1.5],className:"text-style text-style-1"},{id:"text305",longitude:4.836815143671327,latitude:-.6040856178018377,html:"华坚北大道",anchor:"center center",scale:[.5,1.5],className:"text-style text-style-1"}];function w(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,a)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?w(n,!0).forEach(function(e){Object(c["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):w(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var O,S=null,_="https://guangyuan1688.com/group1/M00/03/BA/fwAAAV1TW2CAMTRgAFvZJ68iTpw14.jpeg",j="https://guangyuan1688.com/group1/M00/03/BA/fwAAAV1TW2uAQ4m9AEsgCrhWpWQ89.jpeg",E="https://guangyuan1688.com/group1/M00/03/BF/fwAAAV1TgR2ASTE3AElZwzCtt7489.jpeg",N={name:"app",components:{Spinner:m},computed:b({},Object(h["b"])(["loading","winHeight","screenFullState"])),created:function(){var t=this,e=t.$store,n=window;n.addEventListener("resize",function(){e.commit(f.GET_WINDOW_SIZE)}),e.commit(f.GET_WINDOW_SIZE)},mounted:function(){var t=this;t.$nextTick(function(){t.init()})},methods:{init:function(){S=new PhotoSphereViewer({panorama:_,container:document.getElementById("viewer-container"),time_anim:!1,anim_speed:"0.5rpm",default_fov:90,navbar:!1,loading_txt:"正在加载..."}),S.on("panorama-loaded",function(){var t=S.config.panorama;t==_?x.forEach(function(t){return S.addMarker(t)}):t==j?y.forEach(function(t){return S.addMarker(t)}):t==E&&v.forEach(function(t){return S.addMarker(t)})}),S.on("click",function(t){console.log(t.longitude,t.latitude)}),S.on("select-marker",function(t){"text108"==t.id||"image102"==t.id?(S.clearMarkers(),S.setPanorama(j)):"text207"==t.id||"text302"==t.id||"image201"==t.id||"image301"==t.id?(S.clearMarkers(),S.setPanorama(_)):"text106"!=t.id&&"image101"!=t.id||(S.clearMarkers(),S.setPanorama(E))}),setTimeout(function(){var t=new Image;t.src=j},2e4),setTimeout(function(){var t=new Image;t.src=E},3e4)}}},C=N,T=(n("5c0b"),Object(o["a"])(C,i,r,!1,null,null,null)),k=T.exports,W=window,P=document,A=(localStorage,O={},Object(c["a"])(O,f.SWITCH_LOADING,function(t,e){t.loading=e}),Object(c["a"])(O,f.SWITCH_SCREEN_FULL,function(t,e){t.screenFullState=e}),Object(c["a"])(O,f.GET_WINDOW_SIZE,function(t){t.winHeight=P.documentElement.clientHeight||W.innerHeight,t.winWidth=P.documentElement.clientWidth||W.innerWidth,P.body.style.minHeight=t.winHeight+"px";var e=t.windowResizeState+1;e=e>99999?1:e,t.windowResizeState=e}),Object(c["a"])(O,f.SWITCH_MESSAGE_TIP,function(t,e){t.showMessageTip=e.show,t.tip=e.tip}),O),I=n("f753"),M=n.n(I),H={baseUrl:"".concat(location.origin,"/tea-Web-Bigdata"),mapAutoChangeTime:5e3},D=n("fed1");M.a.defaults.baseURL="",M.a.interceptors.request.use(function(t){return t.headers["valToken"]=G.state.userToken,t},function(t){return Promise.reject(t)}),M.a.interceptors.response.use(function(t){return Promise.resolve(t)},function(t){return Promise.reject(t)});var L=function(t){return/post/i.test(t.method)&&!t.headers&&(t.headers={"Content-Type":"application/x-www-form-urlencoded"},t.data=D.stringify(t.data)),/json/.test(t.url)||(t.url=H.baseUrl+t.url),new Promise(function(e,n){M.a.request(t).then(function(t){"w1005"==t.data.code||"token过期"==t.data.msg?G.state.currRouter.instance.push({name:"login"}):e(t.data)},function(t){n(t)})})},R={};a["a"].use(h["a"]);localStorage;var G=new h["a"].Store({state:{winHeight:0,winWidth:0,showMessageTip:!1,tip:"",loading:!1,screenFullState:!1,windowResizeState:0},mutations:A,actions:R});a["a"].config.productionTip=!1,a["a"].prototype.$ajax=L,new a["a"]({store:G,render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("ca9d"),i=n.n(a);i.a},ca9d:function(t,e,n){}});