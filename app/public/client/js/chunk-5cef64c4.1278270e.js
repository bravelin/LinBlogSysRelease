(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cef64c4"],{"3ad6":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},i=[],r=(a("4634"),a("eb57")),o={data:function(){return{catalog:[],showPreview:!1,previewList:[],previewIndex:0}},mounted:function(){var t=this;t.$store.commit(r["a"].SWITCH_LOADING,!1),t.$nextTick((function(){window.addEventListener("scroll",t.doHandlerScroll);var e=document.querySelectorAll("code");e.length>0&&e.forEach((function(t){hljs.highlightBlock(t)}));var a=document.querySelectorAll("h3.title");if(a.length>0){var n=[],i=Math.round(1e6*Math.random()),r="";t.catalog=a.forEach((function(t,e){r="section"+i+"-"+e,t.setAttribute("id",r),n.push({text:t.innerHTML,id:r,el:t,active:!1})})),t.catalog=n}var o=document.querySelectorAll(".content figure>img");o.length>0&&t.getImageSize(0,o)}))},methods:{getImageSize:function(t,e){var a=this,n=new Image,i=e[t];n.onload=function(){a.previewList.push({src:i.src,w:this.width,h:this.height}),t++,t<e.length?a.getImageSize(t,e):a.$el.addEventListener("click",a.doPreview)},n.src=i.src},doPreview:function(t){var e=this;if(/img/i.test(t.target.tagName)&&!e.showPreview&&!t.target.classList.contains("pswp__img")){e.previewIndex=0;for(var a=0;a<e.previewList.length;a++)if(e.previewList[a].src==t.target.src){e.previewIndex=a;break}e.showPreview=!0}},doHandlerScroll:function(){for(var t,e,a=this,n=a.catalog.length-1;n>=0;n--)if(t=a.catalog[n].el,t.getBoundingClientRect().top<10){e=n;break}a.catalog=a.catalog.map((function(t,a){return t.active=a==e,t}))}},beforeDestroy:function(){var t=this;window.removeEventListener("scroll",t.doHandlerScroll),t.previewList.length>0&&t.$el.removeEventListener("click",t.doPreview)}},s=o,v=a("4e82"),l=Object(v["a"])(s,n,i,!1,null,null,null);e["a"]=l.exports},4634:function(t,e,a){for(var n=a("96dd"),i=a("7d56"),r=a("a6d5"),o=a("3f8b"),s=a("b8ea"),v=a("e3b3"),l=a("1277"),c=l("iterator"),g=l("toStringTag"),p=v.Array,_={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},d=i(_),h=0;h<d.length;h++){var u,m=d[h],f=_[m],w=o[m],L=w&&w.prototype;if(L&&(L[c]||s(L,c,p),L[g]||s(L,g,m),v[m]=p,f))for(u in n)L[u]||r(L,u,n[u],!0)}},c51d:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-container article-page"},[a("h2",{staticClass:"title"},[t._v("Canvas学习笔记之一：基础知识")]),t._m(0),a("footer",[t._v("2016年06月08日")]),a("Comments"),a("Catalog",{attrs:{catalog:t.catalog}})],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h3",{staticClass:"title"},[t._v("Canvas元素")]),a("p",[t._v("在设置Canvas的宽度与高度属性时，不能使用px后缀，并且只能是非负整数。")]),a("p",[t._v("默认情况下，浏览器创建的Canvas元素是300*150的尺寸。Canvas元素有两套尺寸，一是元素本身的大小；二是元素绘图表面的大小。")]),a("p",[t._v("通过设置属性width和height时，实际上同时修改了该元素本身的大小和绘图表面的大小；如果通过CSS设定Canvas元素的大小，那么只会改变元素本身的大小，而不会影响到绘图表面，此时浏览器会对绘图表面进行缩放，使其符合元素的大小。")]),a("p",[t._v("Canvas元素提供如下3个方法：")]),a("p",[a("strong",[t._v("1、getContext()")]),t._v("：返回与该canvas元素相关的绘图环境对象；")]),a("p",[a("strong",[t._v("2、toDataURL(type, quality)")]),t._v("：返回一个数据地址（图片的base64编码），type默认为image/png，第二个参数是0~1.0之间的数值，表示JPEG图片的质量（当type为image/jpeg）。")]),a("p",[a("strong",[t._v("3、toBlob(callback, type, args...)")]),t._v("：创建一个表示此canvas元素图像文件的Blob，type为image/png或者image/jpeg，第3个参数如同toDataURL中的quality（写成args...是可能会扩展）。")]),a("h3",{staticClass:"title"},[t._v("绘图环境")]),a("p",[t._v("2D绘图环境通常指CanvasRenderingContent2D对象，此对象的属性如下：")]),a("p",[a("strong",[t._v("1、canvas")]),t._v("：指向绘图环境所属的canvas对象，常见用途是用来获取canvas的宽度与高度，分别调用context.canvas.width与context.canvas.height。")]),a("p",[a("strong",[t._v("2、fillstyle")]),t._v("：设定绘图环境在后续图形填充操作中所使用的颜色、渐变色和图案。")]),a("p",[a("strong",[t._v("3、font")]),t._v("：在调用绘图环境对象的fillText()或者strokeText()方法时，使用的字型。")]),a("p",[a("strong",[t._v("4、globalAlpha")]),t._v("：全局透明度设定，0~1.0之间的值。浏览器会将每个像素的alpha值与之相乘。")]),a("p",[a("strong",[t._v("5、globalCompsiteOperation：")]),t._v("设定将某个物体绘制在其他物体之上时的绘制方式。")]),a("p",[a("strong",[t._v("6、lineCap")]),t._v("：设置绘制线段端点的方式。")]),a("p",[a("strong",[t._v("7、lineWidth")]),t._v("：设置绘制线段的屏幕像素的宽度，默认值1.0。")]),a("p",[a("strong",[t._v("8、lineJoin")]),t._v("：设定两条线段相交时如何绘制焦点，可取的值：bevel、round、miter（默认值）。")]),a("p",[a("strong",[t._v("9、miterLimit")]),t._v("：设定如何绘制miter形式的焦点。")]),a("p",[a("strong",[t._v("10、strokeStyle")]),t._v("：设定对路径进行描边的风格，可以是某个颜色值、渐变色或者图案。")]),a("p",[a("strong",[t._v("11、textAlign")]),t._v("：设定文本的水平对齐方式。")]),a("p",[a("strong",[t._v("11、textBaseline")]),t._v("：设定文本的垂直对齐方式。")]),a("p",[t._v("阴影相关的属性：")]),a("p",[a("strong",[t._v("12、shadowBlur")]),t._v("：设定阴影的延伸效果，值越高，阴影延伸的越远，默认值为0。")]),a("p",[a("strong",[t._v("13、shadowColor")]),t._v("：设定阴影的颜色。通常使用半透明色。")]),a("p",[a("strong",[t._v("14、shadowOffsetX")]),t._v("：阴影效果的水平方向偏移量。")]),a("p",[a("strong",[t._v("15、shadowOffsetY")]),t._v("：阴影效果的垂直方向偏移量。")]),a("p",[t._v("save()和restore()是绘图环境对象中与状态操作的两个方法。")]),a("p",[t._v("鼠标坐标转为Canvas坐标，使用如下方法")]),a("pre",[a("code",[t._v("function windowToCanvas (canvas, x ,y) {\n    var box = canvas.getBoundingClientRect()\n    return { x: (x - box.left) * (canvas.width / box.width), y: (y - box.top) * (canvas.height / box.height) }\n}")])]),a("p",[a("strong",[t._v("Canvas常用的是“立即模式”（immediate-mode）来绘制图形的，它会立即将所指定的内容绘制在canvas上，然后忘记刚才绘制的内容。“保留模式”（retained-mode）会维护一份所绘图形对象的列表。")])]),a("h3",{staticClass:"title"},[t._v("基础数学知识")]),a("p",[t._v("弧度与角度的转换：\n                "),a("strong",[t._v("π = 180度   1弧度 = (180 / π) 度    1度 = (π / 180) 弧度")])]),a("p",[t._v("二维向量含有两个值：方向和大小。{ x: x, y: y }，向量的大小通过勾股定理（毕达哥拉斯定理）计算出来：")]),a("pre",[a("code",[t._v("var magnitude = Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2))")])]),a("p",[t._v("单位向量是长度为1的向量，通常用来指示方向：")]),a("pre",[a("code",[t._v("var magnitude = Math.sqrt(Math.pow(vector.x, 2) + Math.pow(vector.y, 2))\nvar unitVector = new Vector()\nuniteVector.x = vector.x / magnitude\nuniteVector.y = vector.y / magnitude")])]),a("p",[t._v("向量的加减即将两个向量对应的x和y相加减即可。")]),a("p",[a("strong",[t._v("向量的点积")]),t._v("是将两个向量的对应分量相乘然后再相加：v1.x * v2.x + v1.y * v2.y。当点积大于0，意味着两个向量大致处在同一个方向上。")]),a("p",[a("strong",[t._v("动画的移动应该以时间为基准的（time-bases motion）。")]),t._v("帧速率是每帧持续的时间（frame rate，毫秒）。如果设定了物体的移动速度（每秒移动多少像素），可以求得每帧移动的像素数：")]),a("p",[a("strong",[t._v("像素/帧 = （X * Y）/ 1000")]),t._v("  （X：用毫秒/帧表示的帧速率，Y：用像素/秒表示的速度）")])])}],r=a("3ad6"),o={extends:r["a"]},s=o,v=a("4e82"),l=Object(v["a"])(s,n,i,!1,null,null,null);e["default"]=l.exports}}]);