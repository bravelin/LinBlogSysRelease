(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-428ee885"],{"3ad6":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},l=[],i=(n("4634"),n("eb57")),s={data:function(){return{catalog:[],showPreview:!1,previewList:[],previewIndex:0}},mounted:function(){var t=this;t.$store.commit(i["a"].SWITCH_LOADING,!1),t.$nextTick((function(){window.addEventListener("scroll",t.doHandlerScroll);var e=document.querySelectorAll("code");e.length>0&&e.forEach((function(t){hljs.highlightBlock(t)}));var n=document.querySelectorAll("h3.title");if(n.length>0){var r=[],l=Math.round(1e6*Math.random()),i="";t.catalog=n.forEach((function(t,e){i="section"+l+"-"+e,t.setAttribute("id",i),r.push({text:t.innerHTML,id:i,el:t,active:!1})})),t.catalog=r}var s=document.querySelectorAll(".content figure>img");s.length>0&&t.getImageSize(0,s)}))},methods:{getImageSize:function(t,e){var n=this,r=new Image,l=e[t];r.onload=function(){n.previewList.push({src:l.src,w:this.width,h:this.height}),t++,t<e.length?n.getImageSize(t,e):n.$el.addEventListener("click",n.doPreview)},r.src=l.src},doPreview:function(t){var e=this;if(/img/i.test(t.target.tagName)&&!e.showPreview&&!t.target.classList.contains("pswp__img")){e.previewIndex=0;for(var n=0;n<e.previewList.length;n++)if(e.previewList[n].src==t.target.src){e.previewIndex=n;break}e.showPreview=!0}},doHandlerScroll:function(){for(var t,e,n=this,r=n.catalog.length-1;r>=0;r--)if(t=n.catalog[r].el,t.getBoundingClientRect().top<10){e=r;break}n.catalog=n.catalog.map((function(t,n){return t.active=n==e,t}))}},beforeDestroy:function(){var t=this;window.removeEventListener("scroll",t.doHandlerScroll),t.previewList.length>0&&t.$el.removeEventListener("click",t.doPreview)}},a=s,o=n("4e82"),c=Object(o["a"])(a,r,l,!1,null,null,null);e["a"]=c.exports},4634:function(t,e,n){for(var r=n("96dd"),l=n("7d56"),i=n("a6d5"),s=n("3f8b"),a=n("b8ea"),o=n("e3b3"),c=n("1277"),u=c("iterator"),m=c("toStringTag"),d=o.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=l(v),f=0;f<h.length;f++){var p,_=h[f],b=v[_],g=s[_],w=g&&g.prototype;if(w&&(w[u]||a(w,u,d),w[m]||a(w,m,_),o[_]=d,b))for(p in r)w[p]||i(w,p,r[p],!0)}},"51db":function(t,e,n){},"8f0b":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container article-page"},[n("h2",{staticClass:"title"},[t._v("数字滚动效果的实现")]),n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[t._v("效果")]),n("div",{staticClass:"exp-container"},[t._v(t._s(t.scrollData.title)+"\n                "),n("ScrollNumber",{attrs:{num:t.scrollData.num}}),t._v(t._s(t.scrollData.desc))],1),t._m(0),n("h3",{staticClass:"title"},[t._v("实现")]),n("p",[t._v("将隐藏的元素显示出来，可以看到数字是这样滚动的：")]),t._m(1),n("p",[t._v("每一列都是0-9的数字再加一个逗号（逗号用于千位的分隔），通过translateY+transition移动到相应的位置，并通过在外层设置的overflow:hidden样式，隐藏当前不需要显示的数字。")]),n("p",[t._v("定义组件ScrollNumber，其中的每一列又可以是一个ScrollNumberItem组件（列宽度40px）：")]),t._m(2),n("p",[t._v("ScrollNumber组件从外层接收一个num数字，首先要将数字拆分成字符串，并且每三位一个间隔。如486048，应拆分成'486,048'：")]),t._m(3),t._m(4),n("p",[t._v("初始每个位置上设置为0，间隔30ms之后再设置为真实的值，这是因为有变化才能看到数字在滚动的效果。")]),n("p",[t._v("下面是ScrollNumberItem的实现，每个数字高度80px：")]),t._m(5),n("p",[t._v("其中data定义如下：")]),t._m(6),n("p",[t._v("从外层接收index属性，并监听index的变化，计算出transition的duration是多少：")]),t._m(7),t._m(8),n("h3",{staticClass:"title"},[t._v("使用")]),n("p",[t._v("本文中的效果是这样实现的：")]),t._m(9),n("p",[t._v("data中定义如下状态：")]),t._m(10),n("p",[t._v("启动滚动定时器：")]),t._m(11),n("p",[t._v("在页面销毁之前记得将定时器清除：")]),t._m(12)]),n("footer",[t._v("2018年04月11日")]),n("Comments"),n("Catalog",{attrs:{catalog:t.catalog}}),n("Preview",{attrs:{"is-show":t.showPreview,list:t.previewList,index:t.previewIndex},on:{"update:isShow":function(e){t.showPreview=e},"update:is-show":function(e){t.showPreview=e}}})],1)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("应用于官网的效果：\n                "),n("a",{attrs:{href:"https://www.xiaomodo.com"}},[t._v("https://www.xiaomodo.com")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("figure",{staticClass:"common"},[n("img",{staticStyle:{"max-width":"820px",border:"1px solid #ccc"},attrs:{src:"http://800cx2.com1.z0.glb.clouddn.com/apicloud/5ed2510ca788d087abfbf36afe000e95.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v('<div class="scroll-num-wrap" :style="{ width: cursors.length * 40 + \'px\' }">\n    <ScrollNumberItem v-for="(v, index) in cursors" :index="v" :key="index"></ScrollNumberItem>\n</div>')])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("props: {\n    num: {\n        type: Number,\n        default: 0\n    }\n}")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("splitNum () {\n    const that = this\n    let cursors = (that.num + '').split('')\n    for (let i = cursors.length - 2; i >= 0; i = i - 3) { // 每三位增加间隔，数字10的索引代表逗号\n        if (i > 1) {\n            cursors.splice(i - 1, 0, 10)\n        }\n    }\n    let tempCursors = cursors.map(item => { // 初始每个位置上设置为0\n        if (item - 0 < 10) {\n            return 0\n        } else {\n            return item\n        }\n    })\n    that.cursors = tempCursors\n    let reallyCursors = cursors.map(item => item - 0) // 真实的索引\n    setTimeout(() => {\n        that.cursors = reallyCursors\n    }, 30)\n}")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("<div class=\"scroll-number-item\">\n    <ul :style=\"{ transform: 'translateY(' + (index * -80 + 'px') + ')', 'transition-duration': duration + 's' }\">\n        <li v-for=\"(item, index) in list\" :key=\"index\">{ { item } }</li>\n    </ul>\n</div>")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("data () {\n    return {\n        duration: 0.3,\n        list: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',']\n    }\n}")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("watch: {\n    index (newVal, oldVal) {\n        const that = this\n        that.duration = (Math.abs(newVal - oldVal) / 3 + 1) * 0.3\n    }\n}")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("源码：\n                "),n("a",{attrs:{href:"https://github.com/bravelin/bravelin.github.io/blob/master/source/src/components/ScrollNumber.vue"}},[t._v("https://github.com/bravelin/bravelin.github.io/blob/master/source/src/components/ScrollNumber.vue")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("<div class=\"exp-container\">{ { scrollData.title } } <ScrollNumber :num = 'scrollData.num'></ScrollNumber>{ { scrollData.desc } }</div>")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("scrollData: { // 当前的scroll信息\n    title: '',\n    num: 0,\n    desc: ''\n},\nscrollTimer: null, // 定时器\nscrollCount: 0, // 每变化一次+1，用于切换\nscrollDataList: [ // 数据源\n    { title: '增加', num: 486048, desc: '人' },\n    { title: '到店率', num: 95, desc: '%' },\n    { title: '信息', num: 875395, desc: '条' }\n]")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("startScrollData () {\n    const that = this\n    const scrollData = that.scrollData\n    const scrollDataList = that.scrollDataList\n    // 初始为第一个\n    scrollData.title = scrollDataList[0].title\n    scrollData.num = scrollDataList[0].num\n    scrollData.desc = scrollDataList[0].desc\n    let index = 0\n    that.scrollTimer = setInterval(() => { // 定义定时器\n        index = (that.scrollCount ++) % 3 // 取一下个\n        scrollData.title = scrollDataList[index].title\n        scrollData.num = scrollDataList[index].num\n        scrollData.desc = scrollDataList[index].desc\n    }, 3000)\n}\n")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("beforeDestroy () {\n    const that = this\n    if (that.scrollTimer) {\n        clearInterval(that.scrollTimer)\n    }\n}")])])}],i=n("3ad6"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scroll-num-wrap",style:{width:40*t.cursors.length+"px"}},t._l(t.cursors,(function(t,e){return n("ScrollNumberItem",{key:e,attrs:{index:t}})})),1)},a=[],o=(n("e6d1"),n("8f42"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scroll-number-item"},[n("ul",{style:{transform:"translateY("+-80*t.index+"px)","transition-duration":t.duration+"s"}},t._l(t.list,(function(e,r){return n("li",{key:r},[t._v(t._s(e))])})),0)])}),c=[],u={name:"ScrollNumberItem",data:function(){return{duration:.3,list:["0","1","2","3","4","5","6","7","8","9",","]}},watch:{index:function(t,e){var n=this;n.duration=.3*(Math.abs(t-e)/3+1)}},props:{index:{type:Number,default:0}}},m=u,d=n("4e82"),v=Object(d["a"])(m,o,c,!1,null,null,null),h=v.exports,f={name:"ScrollNumber",components:{ScrollNumberItem:h},data:function(){return{cursors:[]}},watch:{num:function(t,e){this.splitNum()}},props:{num:{type:Number,default:0}},created:function(){this.splitNum()},methods:{splitNum:function(){for(var t=this,e=(t.num+"").split(""),n=e.length-2;n>=0;n-=3)n>1&&e.splice(n-1,0,10);var r=e.map((function(t){return t-0<10?0:t}));t.cursors=r;var l=e.map((function(t){return t-0}));setTimeout((function(){t.cursors=l}),30)}}},p=f,_=(n("e3b1"),Object(d["a"])(p,s,a,!1,null,null,null)),b=_.exports,g={extends:i["a"],components:{ScrollNumber:b},data:function(){return{scrollData:{title:"",num:0,desc:""},scrollTimer:null,scrollCount:0,scrollDataList:[{title:"增加",num:4648,desc:"人"},{title:"到店率",num:95,desc:"%"},{title:"信息",num:8795,desc:"条"}]}},created:function(){this.startScrollData()},methods:{startScrollData:function(){var t=this,e=t.scrollData,n=t.scrollDataList;e.title=n[0].title,e.num=n[0].num,e.desc=n[0].desc;var r=0;t.scrollTimer=setInterval((function(){r=t.scrollCount++%3,e.title=n[r].title,e.num=n[r].num,e.desc=n[r].desc}),3e3)}},beforeDestroy:function(){var t=this;t.scrollTimer&&clearInterval(t.scrollTimer)}},w=g,S=(n("a3a6"),Object(d["a"])(w,r,l,!1,null,null,null));e["default"]=S.exports},a3a6:function(t,e,n){"use strict";var r=n("51db"),l=n.n(r);l.a},e3b1:function(t,e,n){"use strict";var r=n("ec0b"),l=n.n(r);l.a},ec0b:function(t,e,n){}}]);