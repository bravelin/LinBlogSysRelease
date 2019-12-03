(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-636abb89"],{"3ad6":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},i=[],a=(n("4634"),n("eb57")),o={data:function(){return{catalog:[],showPreview:!1,previewList:[],previewIndex:0}},mounted:function(){var e=this;e.$store.commit(a["a"].SWITCH_LOADING,!1),e.$nextTick((function(){window.addEventListener("scroll",e.doHandlerScroll);var t=document.querySelectorAll("code");t.length>0&&t.forEach((function(e){hljs.highlightBlock(e)}));var n=document.querySelectorAll("h3.title");if(n.length>0){var r=[],i=Math.round(1e6*Math.random()),a="";e.catalog=n.forEach((function(e,t){a="section"+i+"-"+t,e.setAttribute("id",a),r.push({text:e.innerHTML,id:a,el:e,active:!1})})),e.catalog=r}var o=document.querySelectorAll(".content figure>img");o.length>0&&e.getImageSize(0,o)}))},methods:{getImageSize:function(e,t){var n=this,r=new Image,i=t[e];r.onload=function(){n.previewList.push({src:i.src,w:this.width,h:this.height}),e++,e<t.length?n.getImageSize(e,t):n.$el.addEventListener("click",n.doPreview)},r.src=i.src},doPreview:function(e){var t=this;if(/img/i.test(e.target.tagName)&&!t.showPreview&&!e.target.classList.contains("pswp__img")){t.previewIndex=0;for(var n=0;n<t.previewList.length;n++)if(t.previewList[n].src==e.target.src){t.previewIndex=n;break}t.showPreview=!0}},doHandlerScroll:function(){for(var e,t,n=this,r=n.catalog.length-1;r>=0;r--)if(e=n.catalog[r].el,e.getBoundingClientRect().top<10){t=r;break}n.catalog=n.catalog.map((function(e,n){return e.active=n==t,e}))}},beforeDestroy:function(){var e=this;window.removeEventListener("scroll",e.doHandlerScroll),e.previewList.length>0&&e.$el.removeEventListener("click",e.doPreview)}},l=o,s=n("4e82"),c=Object(s["a"])(l,r,i,!1,null,null,null);t["a"]=c.exports},4634:function(e,t,n){for(var r=n("96dd"),i=n("7d56"),a=n("a6d5"),o=n("3f8b"),l=n("b8ea"),s=n("e3b3"),c=n("1277"),v=c("iterator"),u=c("toStringTag"),d=s.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=i(p),g=0;g<f.length;g++){var _,m=f[g],S=p[m],h=o[m],b=h&&h.prototype;if(b&&(b[v]||l(b,v,d),b[u]||l(b,u,m),s[m]=d,S))for(_ in r)b[_]||a(b,_,r[_],!0)}},"5d56":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-container article-page"},[n("h2",{staticClass:"title"},[e._v("你不知道的JavaScript（中卷）笔记")]),e._m(0),n("footer",[e._v("2018年06月05日")]),n("Comments"),n("Catalog",{attrs:{catalog:e.catalog}})],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[e._v("类型")]),n("p",[n("strong",[e._v("对语言引擎和开发人员来说，类型是值的内部特征，它定义了值的行为，以使其区别于其他值。")])]),n("p",[e._v("JavaScript不要求“类型强制”，也就是说，语言引擎不要求变量总是持有与其初始值同类型的值。")]),n("p",[e._v("转换类数组对象：Array.prototype.slice.call(obj)，或者Array.from(obj)")]),n("p",[e._v("JS中的整数就是没有小数的十进制数，42.0即等同于整数42.")]),n("p",[e._v("JS中的机器精度大约是2^-52，该值定义在Number.EPSILON.")]),n("p",[e._v("整数检测：Number.isInteger：")]),n("pre",[n("code",[e._v("if (!Number.isInteger) {\n    Number.isInteger = function (num) {\n        return typeof num == 'number' && num % 1 == 0\n    }\n}")])]),n("p",[n("strong",[e._v("void运算符")]),e._v("：void不改变表达式的结果，只是让表达式返回undefined.")]),n("pre",[n("code",[e._v("var a = 42\nconsole.log(void a, a) // undefined 42")])]),n("p",[n("strong",[e._v("NaN是JS中唯一一个不等于自身的值。")])]),n("p",[e._v("Function.prototype是一个空函数，Array.prototype是一个空数组，RegExp.prototype是一个空的正则表达式。")]),n("h3",{staticClass:"title"},[e._v("强制类型转换")]),n("p",[n("strong",[e._v("JS中的强制类型转换总是返回标量基本类型值，如string、number、boolean。类型转换发生在静态类型语言的编译阶段，而强制类型转换则发生在动态类型语言的运行时（runtime）。")])]),n("p",[n("em",[e._v("1、toString")])]),n("p",[e._v("字符串化规则为：null转化为'null'；undefined转化为'undefined'；true转化为'true'；false转化为'false'；数字的字符串化遵循通用规则，极大和极小的数字使用指数的形式；")]),n("pre",[n("code",[e._v("var a = 1.07 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000 * 1000;\nconsole.log(a + '') // 1.07e+21")])]),n("p",[e._v("对于对象来说，除非自定义，否则返回toString返回内部属性的值；数组的toString则是将单元字符串化以后再用逗号连接起来：")]),n("pre",[n("code",[e._v("var a = [1,2,3]\nconsole.log(a + '') // 1,2,3")])]),n("p",[e._v("JSON.stringify在将JSON对象序列化为字符串时也使用到了toString。所有安全的JSON值都是可以字符串化的。")]),n("p",[n("strong",[e._v("不安全的JSON值指的是undefined、function、symbol和包含循环引用的对象。")]),e._v("JSON.stringify在对象中遇到undefined、function、symbol时会自动将其忽略，在数组中则会返回null；如果对象中包含循环引用，则报错。")]),n("p",[e._v("如果对象中定义了toJSON方法，JSON字符串化时会首先调用此方法。然后用它的返回值进行序列化。")]),n("pre",[n("code",[e._v("var a = { val: [1,2,3], toJSON: function () { return this.val.slice(1) } }\nJSON.stringify(a) // [2,3]")])]),n("p",[n("em",[e._v("2、toNumber")])]),n("p",[e._v("true转为1；false转为0；null转为0；undefined转为NaN。")]),n("p",[e._v("对象（包括数组）会首先被转换为相应的基本类型值，如果返回的是非数字的基本类型值，则再遵循以上规则将其强制转换为数字。会尝试调用valueOf方法，再次toString方法。")]),n("pre",[n("code",[e._v("var a = { valueOf: function() { return '42' }}\nNumber(a) // 42\nNumber('') // 0\nNumber([]) // 0\nNumber([1,2]) // NaN")])]),n("p",[n("em",[e._v("3、toBoolean")])]),n("p",[n("strong",[e._v("以下这些是假值：undefined、null、''、false、+0、-0、NaN；假值以外的值都是真值。")])]),n("p",[n("strong",[e._v("~~x能将值截除为一个32位整数，x|0也可以：")])]),n("pre",[n("code",[e._v("~~32.11 // 32\n32.11 | 0 // 32")])]),n("p",[e._v("隐式强制类型转换的作用是减少冗余，让代码更简洁。")]),n("p",[n("strong",[e._v("||和&&返回它们其中一个操作数的值。")])]),n("p",[n("em",[e._v("抽象相等：")])]),n("p",[e._v("1、字符串与数字之间的相等比较：字符串会被转化成数字再进行比较。")]),n("pre",[n("code",[e._v("var a = 42\nvar b = '42'\na === b // false\na == b // true")])]),n("p",[e._v("2、其他类型与布尔类型的比较：布尔类型先转成数值再与对方进行比较。")]),n("pre",[n("code",[e._v("'42' == true // false，相当于比较：42 == 1\n'42' == false // false，相当于比较：42 == 0")])]),n("p",[n("strong",[e._v("无论什么情况下都不要使用==true和==false.")])]),n("p",[e._v("3、null == undefined为true。null和undefined没有对应的封装对象：")]),n("pre",[n("code",[e._v("var a = 'abc'\nvar b = Object(a)\na == b // true\n\nvar c = undefined\nvar d = Object(c)\nc == d // false\n\nvar e = null\nvar f = Object(f)\ne == f // false")])]),n("p",[n("strong",[e._v("&&运算符的优先级高于||，||运算符的优先级高于? :")])])])}],a=n("3ad6"),o={extends:a["a"]},l=o,s=n("4e82"),c=Object(s["a"])(l,r,i,!1,null,null,null);t["default"]=c.exports}}]);