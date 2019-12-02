(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d9efe6e"],{"3ad6":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},a=[],i=(n("4634"),n("eb57")),s={data:function(){return{catalog:[],showPreview:!1,previewList:[],previewIndex:0}},mounted:function(){var t=this;t.$store.commit(i["a"].SWITCH_LOADING,!1),t.$nextTick((function(){window.addEventListener("scroll",t.doHandlerScroll);var e=document.querySelectorAll("code");e.length>0&&e.forEach((function(t){hljs.highlightBlock(t)}));var n=document.querySelectorAll("h3.title");if(n.length>0){var r=[],a=Math.round(1e6*Math.random()),i="";t.catalog=n.forEach((function(t,e){i="section"+a+"-"+e,t.setAttribute("id",i),r.push({text:t.innerHTML,id:i,el:t,active:!1})})),t.catalog=r}var s=document.querySelectorAll(".content figure>img");s.length>0&&t.getImageSize(0,s)}))},methods:{getImageSize:function(t,e){var n=this,r=new Image,a=e[t];r.onload=function(){n.previewList.push({src:a.src,w:this.width,h:this.height}),t++,t<e.length?n.getImageSize(t,e):n.$el.addEventListener("click",n.doPreview)},r.src=a.src},doPreview:function(t){var e=this;if(/img/i.test(t.target.tagName)&&!e.showPreview&&!t.target.classList.contains("pswp__img")){e.previewIndex=0;for(var n=0;n<e.previewList.length;n++)if(e.previewList[n].src==t.target.src){e.previewIndex=n;break}e.showPreview=!0}},doHandlerScroll:function(){for(var t,e,n=this,r=n.catalog.length-1;r>=0;r--)if(t=n.catalog[r].el,t.getBoundingClientRect().top<10){e=r;break}n.catalog=n.catalog.map((function(t,n){return t.active=n==e,t}))}},beforeDestroy:function(){var t=this;window.removeEventListener("scroll",t.doHandlerScroll),t.previewList.length>0&&t.$el.removeEventListener("click",t.doPreview)}},o=s,v=n("4e82"),l=Object(v["a"])(o,r,a,!1,null,null,null);e["a"]=l.exports},4634:function(t,e,n){for(var r=n("96dd"),a=n("7d56"),i=n("a6d5"),s=n("3f8b"),o=n("b8ea"),v=n("e3b3"),l=n("1277"),c=l("iterator"),h=l("toStringTag"),u=v.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},_=a(p),g=0;g<_.length;g++){var f,d=_[g],M=p[d],m=s[d],N=m&&m.prototype;if(N&&(N[c]||o(N,c,u),N[h]||o(N,h,d),v[d]=u,M))for(f in r)N[f]||i(N,f,r[f],!0)}},"55d4":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container article-page"},[n("h2",{staticClass:"title"},[t._v("ES6标准入门笔记之五：数值的扩展")]),t._m(0),n("footer",[t._v("2017年03月17日")]),n("Comments"),n("Catalog",{attrs:{catalog:t.catalog}})],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[t._v("二进制和八进制数值表示法")]),n("p",[t._v("ES6对二进制和八进制提供了新的表示方法：分别用前缀0b(0B)和0o(0O)表示：")]),n("pre",[n("code",[t._v("0b111110111 === 503\n0o767 === 503")])]),n("p",[t._v("在严格模式中，八进制数据不允许使用0前缀表示，需使用0o前缀。使用Number方法可以将这种前缀表示的数值字符串转为十进制数值：")]),n("pre",[n("code",[t._v("Number('0b111110111') // 503\nNumber('0o767') // 503")])]),n("h3",{staticClass:"title"},[t._v("Number.isFinite()、Number.isNaN()")]),n("p",[t._v("分别用来检查Infinite和NaN这两个特殊值。")]),n("p",[t._v("Number.isFinite()用来检查一个数值是否\n                "),n("strong",[t._v("非无穷")]),t._v("（infinity）。")]),n("p",[t._v("Number.isNaN()用来检查一个值是否为NaN。")]),n("p",[t._v("这两个方法与传统的全局方法isFinite()和isNaN()的区别在于，\n                "),n("strong",[t._v("传统的方法会先调用Number将非数值转为数值，再进行判断。而新方法只对数值有效。")])]),n("pre",[n("code",[t._v("isFinite(25) // true\nisFinite('25') // true\nNumber.isFinite(25) // true\nNumber.isFinite('25') // false\nisNaN('NaN') // true\nNumber.isNaN('NaN') // false")])]),n("h3",{staticClass:"title"},[t._v("Number.parseInt()、Number.parseFloat()")]),n("p",[t._v("与传统的全局方法parseInt()和parseFloat()是等价的，只是移植到了Number对象上。")]),n("p",[t._v("其目的是逐步减少全局方法，使语言逐步模块化。")]),n("h3",{staticClass:"title"},[t._v("Number.isInteger()")]),n("p",[t._v("用来判断一个值是否为整数。在JS内部，整数和浮点数是相同的存储方法，3和3.0是相同的数值。")]),n("pre",[n("code",[t._v("Number.isInteger(3) // true\nNumber.isInteger(3.0) // true\nNumber.isInteger('3') // false")])]),n("h3",{staticClass:"title"},[t._v("Number.EPSILON")]),n("p",[t._v("新增的极小常量：")]),n("pre",[n("code",[t._v('Number.EPSILON // 2.220446049250313e-16\nNumber.EPSILON.toFixed(20) // "0.00000000000000022204"')])]),n("p",[t._v("因为浮点数的计算是不精确的，可以利用这个值设置误差范围：")]),n("pre",[n("code",[t._v("function withinErrorMargin (v1, v2) { // 判断两个值是否相等（在一定误差范围之内）\n        return Math.abs(v1 - v2) < Number.EPSILON\n}\nwithinErrorMargin(0.1 + 0.2, 0.3) // true\n0.1+0.2 == 0.3 // false")])]),n("h3",{staticClass:"title"},[t._v("Number.isSafeInteger()")]),n("p",[t._v("JS可以精确表示的整数范围是-2\n                "),n("sup",[t._v("53")]),t._v("~2\n                "),n("sup",[t._v("53")]),t._v("之间，超出这个范围无法精确表示。ES6新增了\n                "),n("strong",[t._v("Number.MAX_SAFE_INTEGER")]),t._v("和\n                "),n("strong",[t._v("Number.MIN_SAFE_INTEGER")]),t._v("两个常量，用来表示这个范围的上下限。")]),n("p",[t._v("Number.isSafeInteger()用来判断一个\n                "),n("strong",[t._v("整数")]),t._v("是否位于这个范围之内。")]),n("pre",[n("code",[t._v("Math.pow(2,53) // 9007199254740992\nMath.pow(2,53)+1 // 9007199254740992\nMath.pow(-2,53) // -9007199254740992\nMath.pow(-2,53)-1 // -9007199254740992\n\nNumber.MAX_SAFE_INTEGER // 9007199254740991\nNumber.MIN_SAFE_INTEGER // -9007199254740991")])]),n("pre",[n("code",[t._v("Number.isSafeInteger('a') // false\nNumber.isSafeInteger(null) // false\nNumber.isSafeInteger(NaN) // false\nNumber.isSafeInteger(1.2) // false\nNumber.isSafeInteger(1.0) // true")])]),n("h3",{staticClass:"title"},[t._v("Math对象的扩展")]),n("p",[t._v("Math对象新增了17个与数学相关的静态方法。")]),n("p",[n("strong",[t._v("1、Math.trunc()")])]),n("p",[t._v("用于获取一个数（如果不是数值，会先转换）的整数部分：")]),n("pre",[n("code",[t._v('Math.trunc(1.1) // 1\nMath.trunc(-1.1) // -1\nMath.trunc("-1.1") // -1')])]),n("p",[t._v("等价于此方法：")]),n("pre",[n("code",[t._v("function (x) {\n    return x > 0 ? Math.floor(x) : Math.ceil(x)\n}")])]),n("p",[n("strong",[t._v("2、Math.sign()")])]),n("p",[t._v("用于判断一个数是正数、负数、0：参数为正数，返回1；参数为负数，返回-1；参数为0，返回0，参数为-0，返回-0；其他值，返回NaN。")]),n("pre",[n("code",[t._v("Math.sign(11) // 1\nMath.sign(-11) // -1\nMath.sign(-0) // -0\nMath.sign(0) // 0\nMath.sign('A') // NaN")])]),n("p",[n("strong",[t._v("3、Math.cbrt()")])]),n("p",[t._v("用于计算一个数（如果不是数值，会先转换）的立方根：")]),n("pre",[n("code",[t._v("Math.cbrt(2) // 1.2599210498948732")])]),n("p",[t._v("等价于此方法：")]),n("pre",[n("code",[t._v("function (x) {\n    var y = Math.pow(Math.abs(x), 1/3)\n    return x > 0 ? y : -y\n}")])]),n("p",[n("strong",[t._v("4、Math.clz32()")])]),n("p",[t._v('返回一个数的32位无符号整数形式有多少个前导0，函数名称来自"count leading zero bits in 32-bit binary representations of a number"')]),n("pre",[n("code",[t._v("Math.clz32(1) // 31\nMath.clz32(0) // 32\nMath.clz32(1 << 1) // 30")])]),n("p",[t._v("对于小数，该方法只考虑整数部分。其他非数值参数会先转换成数值。")]),n("p",[n("strong",[t._v("5、Math.imul()")])]),n("p",[t._v("返回两个数以32位带符号整数形式相乘的结果（也是一个32位带符号整数）。")]),n("p",[t._v("如果只考虑32位，大多数情况下，Math.imul(a * b)与a * b的结果是相同的（（a * b）|0）。超出32位的部分溢出。")]),n("pre",[n("code",[t._v("Math.imul(2, 4) // 8\nMath.imul(-2, -2) // 4\nMath.imul(0x7fffffff, 0x7fffffff) // 1")])]),n("p",[t._v("之所以增加此方法，是因为JS有精度限制，超出2的53次方无法精确表示出来。Math.imul()可以返回正确的低位数值。")]),n("p",[n("strong",[t._v("6、Math.fround()")])]),n("p",[t._v("返回一个数的单精度浮点数形式：")]),n("pre",[n("code",[t._v("Math.fround(1) // 1\nMath.fround(1.337) // 1.3370000123977661\nMath.fround(1.5) // 1.5")])]),n("p",[t._v("对于整数，此方法返回同样的整数；区别在于那些无法使用64位二进制位表示精确表示的数，Math.fround()会返回最接近这个小数的单精度浮点数。")]),n("p",[n("strong",[t._v("7、Math.hypot()")])]),n("p",[t._v("此方法返回所有参数（如果参数不是数值，会先转换）平方和的平方根：")]),n("pre",[n("code",[t._v("Math.hypot(3, 4) // 5\nMath.hypot(3, 4, 5) // 7.0710678118654755\nMath.hypot(-3) // 3")])]),n("p",[n("strong",[t._v("8、Math.expm1()")])]),n("p",[t._v("等价于Math.exp(x) - 1，即e的x次方再减去1的结果。")]),n("pre",[n("code",[t._v("Math.expm1(1) // 1.718281828459045")])]),n("p",[n("strong",[t._v("9、Math.log1p()")])]),n("p",[t._v("等价于Math.log(1+x)，即求x加1之和的自然对数。")]),n("pre",[n("code",[t._v("Math.log1p(Math.E-1) // 1")])]),n("p",[n("strong",[t._v("10、Math.log10()")])]),n("p",[t._v("返回以10为底的x的对数。")]),n("pre",[n("code",[t._v("Math.log10(1000) // 3")])]),n("p",[n("strong",[t._v("11、Math.log2()")])]),n("p",[t._v("返回以2为底的x的对数。")]),n("pre",[n("code",[t._v("Math.log2(1024) // 10")])]),n("p",[n("strong",[t._v("12、Math.sinh(x)")]),t._v("：返回x的双曲正旋。")]),n("p",[n("strong",[t._v("13、Math.cosh(x)")]),t._v("：返回x的双曲余旋。")]),n("p",[n("strong",[t._v("14、Math.tanh(x)")]),t._v("：返回x的双曲正切。")]),n("p",[n("strong",[t._v("15、Math.asinh(x)")]),t._v("：返回x的反双曲正旋。")]),n("p",[n("strong",[t._v("16、Math.acosh(x)")]),t._v("：返回x的反双曲余旋。")]),n("p",[n("strong",[t._v("17、Math.atanh(x)")]),t._v("：返回x的反双曲正切。")]),n("h3",{staticClass:"title"},[t._v("指数运算符")]),n("p",[t._v("ES7里面新增的一个运算符（**）")]),n("pre",[n("code",[t._v("2 ** 4 // 16")])]),n("p",[t._v("与等号结合，形成一个新的赋值运算符：（**=）")]),n("pre",[n("code",[t._v("let b = 3\nb **= 3 // 27")])])])}],i=n("3ad6"),s={extends:i["a"]},o=s,v=n("4e82"),l=Object(v["a"])(o,r,a,!1,null,null,null);e["default"]=l.exports}}]);