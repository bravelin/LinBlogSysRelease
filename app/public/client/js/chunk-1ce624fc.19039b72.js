(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ce624fc"],{"3ad6":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div")},r=[],n=(a("4634"),a("eb57")),s={data:function(){return{catalog:[],showPreview:!1,previewList:[],previewIndex:0}},mounted:function(){var e=this;e.$store.commit(n["a"].SWITCH_LOADING,!1),e.$nextTick((function(){window.addEventListener("scroll",e.doHandlerScroll);var t=document.querySelectorAll("code");t.length>0&&t.forEach((function(e){hljs.highlightBlock(e)}));var a=document.querySelectorAll("h3.title");if(a.length>0){var i=[],r=Math.round(1e6*Math.random()),n="";e.catalog=a.forEach((function(e,t){n="section"+r+"-"+t,e.setAttribute("id",n),i.push({text:e.innerHTML,id:n,el:e,active:!1})})),e.catalog=i}var s=document.querySelectorAll(".content figure>img");s.length>0&&e.getImageSize(0,s)}))},methods:{getImageSize:function(e,t){var a=this,i=new Image,r=t[e];i.onload=function(){a.previewList.push({src:r.src,w:this.width,h:this.height}),e++,e<t.length?a.getImageSize(e,t):a.$el.addEventListener("click",a.doPreview)},i.src=r.src},doPreview:function(e){var t=this;if(/img/i.test(e.target.tagName)&&!t.showPreview&&!e.target.classList.contains("pswp__img")){t.previewIndex=0;for(var a=0;a<t.previewList.length;a++)if(t.previewList[a].src==e.target.src){t.previewIndex=a;break}t.showPreview=!0}},doHandlerScroll:function(){for(var e,t,a=this,i=a.catalog.length-1;i>=0;i--)if(e=a.catalog[i].el,e.getBoundingClientRect().top<10){t=i;break}a.catalog=a.catalog.map((function(e,a){return e.active=a==t,e}))}},beforeDestroy:function(){var e=this;window.removeEventListener("scroll",e.doHandlerScroll),e.previewList.length>0&&e.$el.removeEventListener("click",e.doPreview)}},c=s,l=a("4e82"),o=Object(l["a"])(c,i,r,!1,null,null,null);t["a"]=o.exports},4634:function(e,t,a){for(var i=a("96dd"),r=a("7d56"),n=a("a6d5"),s=a("3f8b"),c=a("b8ea"),l=a("e3b3"),o=a("1277"),u=o("iterator"),v=o("toStringTag"),g=l.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=r(d),p=0;p<f.length;p++){var h,_=f[p],L=d[_],S=s[_],m=S&&S.prototype;if(m&&(m[u]||c(m,u,g),m[v]||c(m,v,_),l[_]=g,L))for(h in i)m[h]||n(m,h,i[h],!0)}},"834b":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-container article-page"},[a("h2",{staticClass:"title"},[e._v("ES6标准入门笔记之四：正则的扩展")]),e._m(0),a("footer",[e._v("2017年03月13日")]),a("Comments"),a("Catalog",{attrs:{catalog:e.catalog}})],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h3",{staticClass:"title"},[e._v("RegExp构造函数")]),a("p",[e._v("ES6允许RegExp构造函数接受正则表达式作为参数，而不仅仅是字符串：var reg = new RegExp(/xyz/i)。")]),a("p",[e._v("如果使用构造函数的第二个参数指定修饰符，则返回的正则表达式会忽略原有的正则表达式修饰符。只使用新指定的修饰符：new RegExp(/abc/ig, 'i')")]),a("h3",{staticClass:"title"},[e._v("字符串的正则方法")]),a("p",[e._v("字符串对象的match()、replace()、search()和split()方法可以使用正则表达式。")]),a("h3",{staticClass:"title"},[e._v("u修饰符")]),a("p",[e._v('新增的u修饰符，含义为"Unicode模式"，用来处理大于\\uffff的Unicode字符。')]),a("pre",[a("code",[e._v("/^\\uD83D/u.test('\\uD83D\\uDC2A')  // false\n/^\\uD83D/.test('\\uD83D\\uDC2A')  // true")])]),a("p",[e._v('"83D2A"是一个4字节的UTF-16编码，代表一个字符。ES5将其识别成两个字符，因此第二个正则为true。增加了u修饰符，ES6将其识别为一个字符，所以第一个正则为false。')]),a("p",[a("strong",[e._v("点字符是匹配除换行符以外的任意单个字符。")]),e._v("对于码点大于0xffff的Unicode字符，点字符不能识别，必须加上u修饰符。")]),a("p",[e._v("ES6新增了使用大括号的Unicode字符表示法，这种表示法在正则中必须加上u修饰符才能识别，否则会被解读为量词。")]),a("pre",[a("code",[e._v("/\\u{61}/.test('a') // false\n/\\u{61}/u.test('a') // true\n/^\\u{3}$/.test('uuu') // true")])]),a("p",[e._v("u修饰符也影响到预定义模式能否正确识别码点大于0xfffff的Unicode字符。")]),a("h3",{staticClass:"title"},[e._v("y修饰符")]),a("p",[e._v("称为粘连（sticky）修饰符。与g修饰符类似，也是全局匹配。后一次匹配都成上一次匹配成功的下一个位置开始。不同之处在于，g修饰符只要剩余位置中存在匹配就行，\n                "),a("strong",[e._v("而y修饰符会确保匹配从剩余的第一个位置开始。")])]),a("pre",[a("code",[e._v("var s = 'aaa_aa_a'\nvar r1 = /a+/g\nvar r2 = /a+/y\n\nr1.exec(s) // ['aaa']\nr2.exec(s) // ['aaa']\n\nr1.exec(s) // ['aa']\nr2.exec(s) // null\n\n/b/y.exec('aba') // null")])]),a("p",[e._v("第一次匹配的结果相同，第二次就不一样了。进一步说，y修饰符隐藏了头部的的匹配标志（^）")]),a("p",[e._v("在split方法中使用y修饰符，原字符串必须以分隔符开头。意味着只要匹配成功，数组的第一个成员定是空字符串。")]),a("pre",[a("code",[e._v("'x##'.split(/#/y) // 没有找到匹配 ['x##']\n'##x'.split(/#/y) // 找到两个匹配 ['', '', 'x']\n'#x#'.split(/#/y) // ['', 'x#']")])]),a("p",[e._v("replace例子：")]),a("pre",[a("code",[e._v("var reg = /a/gy\n'aaxa'.replace(reg, '-') // '--xa'")])]),a("h3",{staticClass:"title"},[e._v("sticky属性")]),a("p",[e._v("ES6正则对象新增的这个属性表示是否设置了y修饰符。")]),a("pre",[a("code",[e._v("var reg = /abc/y\nreg.sticky // true")])]),a("h3",{staticClass:"title"},[e._v("flags属性")]),a("p",[e._v("此属性返回正则表达式的修饰符。")]),a("pre",[a("code",[e._v("/abc/ig.source // source属性返回正则表达式的正文 abc\n/abc/ig.flags // flags属性返回修饰符 gi")])])])}],n=a("3ad6"),s={extends:n["a"]},c=s,l=a("4e82"),o=Object(l["a"])(c,i,r,!1,null,null,null);t["default"]=o.exports}}]);