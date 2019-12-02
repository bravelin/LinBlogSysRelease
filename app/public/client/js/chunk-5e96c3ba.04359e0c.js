(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5e96c3ba"],{"32df":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-container article-page"},[r("h2",{staticClass:"title"},[e._v("ES6标准入门笔记之十：Proxy和Reflect")]),e._m(0),r("footer",[e._v("2017年05月14日")]),r("Comments"),r("Catalog",{attrs:{catalog:e.catalog}})],1)},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content"},[r("h3",{staticClass:"title"},[e._v("Proxy概述")]),r("p",[e._v("用于修改某些操作的默认行为，在目标对象之前架设一“拦截”层，外界对该对象的访问都必须先通过这层拦截。\n            "),r("strong",[e._v("提供一种机制，可以对外界的访问进行过滤和拦截。")])]),r("p",[e._v("ES6提供原生的Proxy构造函数，用于生成Proxy实例。")]),r("pre",[r("code",[e._v("var proxy = new Proxy(target, handler) // target拦截的目标对象")])]),r("p",[e._v("拦截读取属性：")]),r("pre",[r("code",[e._v("var proxy = new Proxy({}, {\n    get: function (target, property) {\n        return 35\n    }\n})\nproxy.time // 35\nproxy.abc // 35")])]),r("p",[r("strong",[e._v("要使Proxy起作用，必须针对Proxy实例进行操作，而不是针对目标对象。")])]),r("p",[e._v("如果handler没有设置任何拦截，等同于直接通向原对象：")]),r("pre",[r("code",[e._v("var target = {}\nvar handler = {}\nvar proxy = new Proxy(target, handler)\nproxy.a = 'b'\ntarget.a // 'b'")])]),r("p",[e._v("目标对象可以是函数。")]),r("h3",{staticClass:"title"},[e._v("Reflect概述")]),r("p",[e._v("也是ES6为了操作对象而提供的新的API，设计目标如下：")]),r("p",[e._v("1、将Object对象一些属于语言层面的方法放到Reflect对象上；")]),r("p",[e._v("2、修改某些Object方法的返回结果，让其变得更合理；")]),r("p",[e._v("3、让Object操作都变成函数行为，如 name in obj和delete obj[name]变成Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)；")]),r("p",[e._v("4、Reflect对象的方法和Proxy对象的方法一一对应。可以使Proxy对象方便地调用Reflect方法完成默认行为。")])])}],a=r("3ad6"),o={extends:a["a"]},l=o,c=r("4e82"),s=Object(c["a"])(l,n,i,!1,null,null,null);t["default"]=s.exports},"3ad6":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div")},i=[],a=(r("4634"),r("eb57")),o={data:function(){return{catalog:[],showPreview:!1,previewList:[],previewIndex:0}},mounted:function(){var e=this;e.$store.commit(a["a"].SWITCH_LOADING,!1),e.$nextTick((function(){window.addEventListener("scroll",e.doHandlerScroll);var t=document.querySelectorAll("code");t.length>0&&t.forEach((function(e){hljs.highlightBlock(e)}));var r=document.querySelectorAll("h3.title");if(r.length>0){var n=[],i=Math.round(1e6*Math.random()),a="";e.catalog=r.forEach((function(e,t){a="section"+i+"-"+t,e.setAttribute("id",a),n.push({text:e.innerHTML,id:a,el:e,active:!1})})),e.catalog=n}var o=document.querySelectorAll(".content figure>img");o.length>0&&e.getImageSize(0,o)}))},methods:{getImageSize:function(e,t){var r=this,n=new Image,i=t[e];n.onload=function(){r.previewList.push({src:i.src,w:this.width,h:this.height}),e++,e<t.length?r.getImageSize(e,t):r.$el.addEventListener("click",r.doPreview)},n.src=i.src},doPreview:function(e){var t=this;if(/img/i.test(e.target.tagName)&&!t.showPreview&&!e.target.classList.contains("pswp__img")){t.previewIndex=0;for(var r=0;r<t.previewList.length;r++)if(t.previewList[r].src==e.target.src){t.previewIndex=r;break}t.showPreview=!0}},doHandlerScroll:function(){for(var e,t,r=this,n=r.catalog.length-1;n>=0;n--)if(e=r.catalog[n].el,e.getBoundingClientRect().top<10){t=n;break}r.catalog=r.catalog.map((function(e,r){return e.active=r==t,e}))}},beforeDestroy:function(){var e=this;window.removeEventListener("scroll",e.doHandlerScroll),e.previewList.length>0&&e.$el.removeEventListener("click",e.doPreview)}},l=o,c=r("4e82"),s=Object(c["a"])(l,n,i,!1,null,null,null);t["a"]=s.exports},4634:function(e,t,r){for(var n=r("96dd"),i=r("7d56"),a=r("a6d5"),o=r("3f8b"),l=r("b8ea"),c=r("e3b3"),s=r("1277"),v=s("iterator"),d=s("toStringTag"),u=c.Array,g={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(g),p=0;p<h.length;p++){var f,L=h[p],m=g[L],w=o[L],S=w&&w.prototype;if(S&&(S[v]||l(S,v,u),S[d]||l(S,d,L),c[L]=u,m))for(f in n)S[f]||a(S,f,n[f],!0)}}}]);