(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0da266de"],{"3ad6":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},r=[],i=(n("4634"),n("eb57")),o={data:function(){return{catalog:[],showPreview:!1,previewList:[],previewIndex:0}},mounted:function(){var e=this;e.$store.commit(i["a"].SWITCH_LOADING,!1),e.$nextTick((function(){window.addEventListener("scroll",e.doHandlerScroll);var t=document.querySelectorAll("code");t.length>0&&t.forEach((function(e){hljs.highlightBlock(e)}));var n=document.querySelectorAll("h3.title");if(n.length>0){var a=[],r=Math.round(1e6*Math.random()),i="";e.catalog=n.forEach((function(e,t){i="section"+r+"-"+t,e.setAttribute("id",i),a.push({text:e.innerHTML,id:i,el:e,active:!1})})),e.catalog=a}var o=document.querySelectorAll(".content figure>img");o.length>0&&e.getImageSize(0,o)}))},methods:{getImageSize:function(e,t){var n=this,a=new Image,r=t[e];a.onload=function(){n.previewList.push({src:r.src,w:this.width,h:this.height}),e++,e<t.length?n.getImageSize(e,t):n.$el.addEventListener("click",n.doPreview)},a.src=r.src},doPreview:function(e){var t=this;if(/img/i.test(e.target.tagName)&&!t.showPreview&&!e.target.classList.contains("pswp__img")){t.previewIndex=0;for(var n=0;n<t.previewList.length;n++)if(t.previewList[n].src==e.target.src){t.previewIndex=n;break}t.showPreview=!0}},doHandlerScroll:function(){for(var e,t,n=this,a=n.catalog.length-1;a>=0;a--)if(e=n.catalog[a].el,e.getBoundingClientRect().top<10){t=a;break}n.catalog=n.catalog.map((function(e,n){return e.active=n==t,e}))}},beforeDestroy:function(){var e=this;window.removeEventListener("scroll",e.doHandlerScroll),e.previewList.length>0&&e.$el.removeEventListener("click",e.doPreview)}},s=o,d=n("4e82"),c=Object(d["a"])(s,a,r,!1,null,null,null);t["a"]=c.exports},4634:function(e,t,n){for(var a=n("96dd"),r=n("7d56"),i=n("a6d5"),o=n("3f8b"),s=n("b8ea"),d=n("e3b3"),c=n("1277"),p=c("iterator"),g=c("toStringTag"),l=d.Array,v={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},b=r(v),u=0;u<b.length;u++){var x,_=b[u],h=v[_],k=o[_],m=k&&k.prototype;if(m&&(m[p]||s(m,p,l),m[g]||s(m,g,_),d[_]=l,h))for(x in a)m[x]||i(m,x,a[x],!0)}},"7b82":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page-container article-page"},[n("h2",{staticClass:"title"},[e._v("CSS揭秘笔记之二：背景与边框")]),e._m(0),n("footer",[e._v("2016年11月03日")]),n("Comments"),n("Catalog",{attrs:{catalog:e.catalog}})],1)},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[e._v("半透明边框")]),n("p",[e._v("默认情况下，背景会延伸到边框所在区域的下层，此时即使设置边框为透明的颜色，也无法达到预期的效果。可以通过\n              "),n("strong",[e._v("background-clip")]),e._v("属性来调整。这个属性初始值默认为border-box，设置为padding-box可以用内边距的外沿将背景裁剪掉。\n          ")]),n("div",{staticClass:"exp transparent-border"},[n("div",[e._v("未设置background-clip")])]),n("div",{staticClass:"exp transparent-border"},[n("div",{staticClass:"act"},[e._v("设置background-clip")])]),n("pre",[n("code",{staticClass:"css"},[e._v("background: #fff;\nborder:25px dotted rgba(0,0,255,0.1);\nbackground-clip: padding-box;")])]),n("h3",{staticClass:"title"},[e._v("多重边框")]),n("p",[n("strong",[e._v("box-shadow方案：")]),e._v("利用box-shadow的第四个参数——扩张半径，加上为0的偏移量和模糊值，可以得到一道实线边框。由于box-shadow支持多个投影，因此可以实现多重边框。\n          ")]),n("p",[e._v("需要注意的是box-shadow是重重叠加的，需要按一定的规律调整扩张半径；投影不会影响布局，也不会受到box-sizing属性影响。此外投影生成的边框不会响应鼠标事件。")]),n("div",{staticClass:"exp multiple-border-box-shadow"},[n("div")]),n("pre",[n("code",[e._v("background-color: white;\nbox-shadow: 0 0 0 5px #655, 0 0 0 10px deeppink, 0 2px 5px 10px rgba(0,0,0,0.6);")])]),n("p",[e._v("可以给box-shadow属性加上\n              "),n("strong",[e._v("inset")]),e._v('关键字，使投影绘制在元素的内圈，此时的"边框"就能响应鼠标事件了。')]),n("p",[n("strong",[e._v("outline方案：")]),e._v("如果只需要两重边框的话，可以使用border产生常规边框，再使用outline产生外层边框。")]),n("div",{staticClass:"exp multiple-border-outline"},[n("div")]),n("pre",[n("code",[e._v("background-color: white;\nborder:5px solid #655;\noutline:5px solid deeppink;")])]),n("p",[e._v("outline并不支持设置多个，并且边框不会贴合border-radius产生的圆角，描边目前只能是直角效果。")]),n("h3",{staticClass:"title"},[e._v("灵活的背景定位")]),n("p",[n("strong",[e._v("background-position扩展语法：")]),e._v("在CSS3中可以指定背景图片距离任意角的偏移量，只要我们在偏移量前面指定关键字。")]),n("div",{staticClass:"exp bg bg-position"}),n("p",[e._v("上面的背景图片定位在距容器右侧20px，底部10px的地方，即使改变窗口的宽度。")]),n("pre",[n("code",[e._v('background: url("...") no-repeat bottom right rgb(225,213,216);\nbackground-position: right 20px bottom 10px;')])]),n("p",[n("strong",[e._v("background-origin方案：")]),e._v("每个元素都存在3个矩形框：border-box、padding-box、content-box，background-position默认以padding-box为准。CSS3中增加的background-origin可以改变这种行为。定义如下样式也能达到同样的效果：\n          ")]),n("pre",[n("code",[e._v('background: url("...") no-repeat bottom right rgb(225,213,216);\npadding:10px 20px;\nbackground-origin: content-box;')])]),n("div",{staticClass:"exp bg bg-origin"}),n("p",[n("strong",[e._v("calc()方案：")]),e._v("calc()函数可以对位置执行动态计算。")]),n("pre",[n("code",[e._v('background: url("...") no-repeat bottom right rgb(225,213,216);\nbackground-position: calc(100% - 20px) calc(100% - 10px);')])]),n("div",{staticClass:"exp bg bg-calc"}),n("p",[e._v('使用calc()函数需要注意的是操作符"+"、"-"两侧需要留有空白。')]),n("h3",{staticClass:"title"},[e._v("边框内圆角")]),n("p",[n("strong",[e._v("描边不会跟着元素的圆角走，而box-shadow确是会的。")]),e._v("两者叠加到一起，box-shadow填充描边和容器圆角之间的空隙，可以达到此种效果。需要注意的是，box-shadow的扩张值大约是border-radius的一半。\n          ")]),n("div",{staticClass:"exp inner-border-radius"},[n("div")]),n("pre",[n("code",[e._v("background: tan;\nborder-radius: 12px;\nbox-shadow: 0 0 0 6px #655;\noutline:9px solid #655;")])]),n("h3",{staticClass:"title"},[e._v("条纹背景")]),n("p",[n("strong",[e._v("对于渐变，当多个色标具有相同的位置时，它们会产生一个无限小的过渡区域。从效果上看，颜色在那个位置突然变化了。")])]),n("p",[e._v("条纹背景示例：")]),n("div",{staticClass:"exp linear-1"},[n("div")]),n("pre",[n("code",[e._v("background: linear-gradient(#fb3 50%, #58a 50%);\nbackground-size: 100% 30px;")])]),n("p",[n("strong",[e._v("如果某个色标的位置比它之前的位置值小，那么它会被解析为前面所有色标位置的最大值。")])]),n("p",[e._v("上例可以写成：background: linear-gradient(#fb3 50%, #58a 0);")]),n("p",[n("strong",[e._v("垂直条纹")]),e._v("的效果需要加额外的参数来指定渐变方向：to right")]),n("div",{staticClass:"exp linear-2"},[n("div")]),n("pre",[n("code",[e._v("background: linear-gradient(to right ,#fb3 50%, #58a 0);\nbackground-size: 30px 100%;")])]),n("p",[n("strong",[n("b",[e._v("45度斜向条纹：")])])]),n("p",[e._v("方法一：使用linear-gradient，background-size设置为条纹宽度的2*1.414倍")]),n("div",{staticClass:"exp linear-3"},[n("div")]),n("pre",[n("code",[e._v("background: linear-gradient(45deg, #fb3 25%, #58a 25%, #58a 50%, #fb3 50%, #fb3 75%, #58a 75%);\nbackground-size: 42.426px 42.426px;")])]),n("p",[e._v("方法二：使用repeating-linear-gradient")]),n("div",{staticClass:"exp linear-4"},[n("div")]),n("pre",[n("code",[e._v("background: repeating-linear-gradient(45deg,#fb3, #fb3 15px, #58a 15px, #58a 30px);")])]),n("p",[n("strong",[n("b",[e._v("同色系条纹：")])])]),n("p",[e._v("将最深的颜色指定为背景色，把半透明的白色条纹叠加到背景色之上")]),n("div",{staticClass:"exp linear-5"},[n("div")]),n("pre",[n("code",[e._v("background: #58a;\nbackground-image: repeating-linear-gradient(30deg,hsla(0, 0%, 100%, .1),\n      hsla(0, 0%, 100%, .1) 15px, transparent 15px, transparent 30px);")])]),n("p",[n("strong",[e._v("使用CSS渐变来产生任何种类的几何图案都是可能的。")]),e._v("原理是将多个渐变图案组合起来。")]),n("p",[n("strong",[e._v("桌布方格图案：")])]),n("div",{staticClass:"exp linear-6"},[n("div")]),n("pre",[n("code",[e._v("background: white;\nbackground-image: linear-gradient(90deg, rgba(200,0,0,0.5) 50%, transparent 0),\n      linear-gradient(rgba(200,0,0,0.5) 50%, transparent 0);\nbackground-size: 30px 30px;")])]),n("p",[n("strong",[e._v("网格图案：")])]),n("div",{staticClass:"exp linear-7"},[n("div")]),n("pre",[n("code",[e._v("background: #58a;\nbackground-image: linear-gradient(#ccc 1px, transparent 0),\n      linear-gradient(90deg, #ccc 1px, transparent 0);\nbackground-size: 20px 20px;")])]),n("p",[n("strong",[e._v("叠加多重渐变的蓝图网格：")]),e._v("使用background-size调整间距。")]),n("div",{staticClass:"exp linear-8"},[n("div")]),n("pre",[n("code",[e._v("background: #58a;\nbackground-image: linear-gradient(white 2px, transparent 0),\n      linear-gradient(90deg, white 2px, transparent 0),\n      linear-gradient(hsla(0, 0%, 100%, 0.3) 1px, transparent 0),\n      linear-gradient(90deg, hsla(0, 0%, 100%, 0.3) 1px, transparent 0);\nbackground-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px;")])]),n("p",[n("strong",[e._v("波点图案：")]),e._v("使用径向渐变。")]),n("div",{staticClass:"exp linear-9"},[n("div")]),n("pre",[n("code",[e._v("background: #655;\nbackground-image: radial-gradient(tan 20%, transparent 0);\nbackground-size: 30px 30px;")])]),n("p",[n("strong",[e._v("复杂点的波点图案：")]),e._v("使用background-position错开位置。")]),n("div",{staticClass:"exp linear-10"},[n("div")]),n("pre",[n("code",[e._v("background: #655;\nbackground-image: radial-gradient(tan 20%, transparent 0),\n      radial-gradient(tan 20%, transparent 0);\nbackground-size: 30px 30px;\nbackground-position: 0 0, 15px 15px;")])]),n("p",[n("strong",[e._v("信封样式边框：")]),e._v("设置两层背景，内层纯白色（使用渐变实现），斜纹背景溢出到边框区域。边框设置为透明。")]),n("div",{staticClass:"exp linear-11"},[n("div")]),n("pre",[n("code",[e._v("padding:1em;\nborder:1em solid transparent;\nbackground: linear-gradient(white,white),\n      repeating-linear-gradient(-45deg, red 0, red 12.5%, transparent 12.5%,transparent 25%, #58a 25%, #58a 37.5%, transparent 37.5%, transparent 50%);\nbackground-size: 3em 3em;\nbackground-clip: padding-box, border-box;")])]),n("p",[n("strong",[n("b",[e._v("蚂蚁行军边框：")])]),e._v("动起来的关键是使用animation设置background-position。")]),n("div",{staticClass:"exp marching-ants"},[n("div")]),n("pre",[n("code",[e._v("@keyframes ants {\n  to {\n    background-position: 100%;\n  }\n}\n\ndiv.marching-ants{\n  padding: 1em;\n  border:1px solid transparent;\n  background: linear-gradient(white,white),\n      repeating-linear-gradient(-45deg, black 0, black 25%, white 0, white 50%);\n  background-clip: padding-box, border-box;\n  background-size: 0.6em 0.6em;\n  animation: ants 12s linear infinite;\n}")])])])}],i=n("3ad6"),o={extends:i["a"]},s=o,d=n("4e82"),c=Object(d["a"])(s,a,r,!1,null,null,null);t["default"]=c.exports}}]);