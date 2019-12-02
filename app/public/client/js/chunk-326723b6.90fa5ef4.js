(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-326723b6"],{"2fa0":function(t,e,n){var r=n("2498");r(r.P,"Array",{fill:n("4536")}),n("ab19")("fill")},"3ad6":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},a=[],i=(n("4634"),n("eb57")),l={data:function(){return{catalog:[],showPreview:!1,previewList:[],previewIndex:0}},mounted:function(){var t=this;t.$store.commit(i["a"].SWITCH_LOADING,!1),t.$nextTick((function(){window.addEventListener("scroll",t.doHandlerScroll);var e=document.querySelectorAll("code");e.length>0&&e.forEach((function(t){hljs.highlightBlock(t)}));var n=document.querySelectorAll("h3.title");if(n.length>0){var r=[],a=Math.round(1e6*Math.random()),i="";t.catalog=n.forEach((function(t,e){i="section"+a+"-"+e,t.setAttribute("id",i),r.push({text:t.innerHTML,id:i,el:t,active:!1})})),t.catalog=r}var l=document.querySelectorAll(".content figure>img");l.length>0&&t.getImageSize(0,l)}))},methods:{getImageSize:function(t,e){var n=this,r=new Image,a=e[t];r.onload=function(){n.previewList.push({src:a.src,w:this.width,h:this.height}),t++,t<e.length?n.getImageSize(t,e):n.$el.addEventListener("click",n.doPreview)},r.src=a.src},doPreview:function(t){var e=this;if(/img/i.test(t.target.tagName)&&!e.showPreview&&!t.target.classList.contains("pswp__img")){e.previewIndex=0;for(var n=0;n<e.previewList.length;n++)if(e.previewList[n].src==t.target.src){e.previewIndex=n;break}e.showPreview=!0}},doHandlerScroll:function(){for(var t,e,n=this,r=n.catalog.length-1;r>=0;r--)if(t=n.catalog[r].el,t.getBoundingClientRect().top<10){e=r;break}n.catalog=n.catalog.map((function(t,n){return t.active=n==e,t}))}},beforeDestroy:function(){var t=this;window.removeEventListener("scroll",t.doHandlerScroll),t.previewList.length>0&&t.$el.removeEventListener("click",t.doPreview)}},o=l,s=n("4e82"),c=Object(s["a"])(o,r,a,!1,null,null,null);e["a"]=c.exports},4536:function(t,e,n){"use strict";var r=n("a9cf"),a=n("c3a9"),i=n("8941");t.exports=function(t){var e=r(this),n=i(e.length),l=arguments.length,o=a(l>1?arguments[1]:void 0,n),s=l>2?arguments[2]:void 0,c=void 0===s?n:a(s,n);while(c>o)e[o++]=t;return e}},4634:function(t,e,n){for(var r=n("96dd"),a=n("7d56"),i=n("a6d5"),l=n("3f8b"),o=n("b8ea"),s=n("e3b3"),c=n("1277"),d=c("iterator"),h=c("toStringTag"),v=s.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},g=a(f),u=0;u<g.length;u++){var x,_=g[u],w=f[_],p=l[_],m=p&&p.prototype;if(m&&(m[d]||o(m,d,v),m[h]||o(m,h,_),s[_]=v,w))for(x in r)m[x]||i(m,x,r[x],!0)}},"62b1":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container article-page canvas-2-page"},[n("h2",{staticClass:"title"},[t._v("Canvas学习笔记之二：绘制")]),n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[t._v("Canvas的绘制模型")]),n("p",[t._v("浏览器按照如下步骤来绘制图形：")]),n("p",[t._v("(1)将图形绘制到一个无限大的透明位图中，在绘制时遵循当前的填充模式、描边模式以及线条样式；")]),n("p",[t._v("(2)使用当前绘图环境的阴影设定将图形的阴影绘制到另外的一幅位图中；")]),n("p",[t._v("(3)将阴影中的每一个像素的alpha分量乘以绘图环境对象的globalAlpha属性值；")]),n("p",[t._v("(4)将绘有阴影的位图与经过剪辑区域剪切过的canvas进行图像合成，使用当前的合成模式参数；")]),n("p",[t._v("(5)将图形的每一个像素颜色分量，乘以绘图环境对象的globalAlpha属性值；")]),n("p",[t._v("(6)将绘有图形的位图，合成到当前经过剪辑区域剪切过的canvas位图之上，使用当前的合成操作符。")]),n("p",[t._v("只有在启用阴影时才会执行第2~4步。")]),n("h3",{staticClass:"title"},[t._v("矩形的绘制")]),n("p",[t._v("Canvas提供如下3个api，分别用于矩形的清除、描边、填充：")]),t._m(0),n("h3",{staticClass:"title"},[t._v("渐变色")]),n("p",[t._v("Canvas支持线性（linear）渐变与放射（radial）渐变。")]),t._m(1),n("div",{staticClass:"exp gradient"},[n("canvas",{ref:"c1",attrs:{width:"250",height:"250"}}),n("canvas",{ref:"c2",attrs:{width:"250",height:"250"}}),n("canvas",{ref:"c3",attrs:{width:"250",height:"250"}}),n("canvas",{ref:"c4",attrs:{width:"250",height:"250"}})]),t._m(2),t._m(3),n("p",[t._v("创建线性渐变，需要使用两个圆，他们表示某个圆锥的起始位置。")]),n("div",{staticClass:"exp gradient"},[n("canvas",{ref:"c5",attrs:{width:"290",height:"290"}})]),t._m(4),t._m(5),n("h3",{staticClass:"title"},[t._v("图案填充")]),t._m(6),n("p",[t._v('使用createPattern(patternObj, repeatTypeString)方法创建图案，patternObj指的是图案元素，repeatTypeString指的是图案的重复方式："repeat"、"repeat-x"、"repeat-y"以及"no-repeat"4种方式。')]),n("h3",{staticClass:"title"},[t._v("阴影")]),n("p",[t._v("阴影效果通过如下4个属性值设置：")]),t._m(7),n("h3",{staticClass:"title"},[t._v("路径、描边与填充")]),t._m(8),t._m(9),t._m(10),n("p",[t._v("绘制圆环：")]),n("div",{staticClass:"exp circle"},[n("canvas",{ref:"c6",attrs:{width:"250",height:"250"}})]),t._m(11),n("h3",{staticClass:"title"},[t._v("线段")]),t._m(12),n("p",[t._v("网格的绘制：")]),n("div",{ref:"grid",staticClass:"exp grid"},[n("canvas",{ref:"c7",attrs:{width:"250",height:"250"}})]),t._m(13),n("p",[t._v("虚线的绘制：")]),n("div",{staticClass:"exp grid"},[n("canvas",{ref:"c8",attrs:{width:"250",height:"250"}})]),t._m(14),n("p",[t._v("lineCap的取值：butt、round、square，默认为butt，控制线段端点的绘制。")]),n("p",[t._v("lineJoin的取值：round、bevel、miter，默认值为miter，控制线段的连接点的绘制。")]),n("p",[t._v("miterLimit：斜接线长度与二分之一线宽的比值，如果斜接线的长度超过了此值，浏览器将以bevel的方式绘制线段的连接点。")]),n("h3",{staticClass:"title"},[t._v("圆弧与圆形")]),n("p",[t._v("arc()方法所绘制可能不仅仅是圆弧，如果当前路径有子路径的话，浏览器会将子路径的终点与圆弧的起点用线段连接起来。")]),n("p",[t._v("另外一个用于创建圆弧路径的方法是arcTo(x1,y1,x2,y2,radius)，参数分别代表两个点及半径，此圆弧与当前点到第一个点(x1,y1)，的连线相切，并且与(x1,y1)到(x2,y2)的连线也相切。")]),n("p",[t._v("圆角矩形的绘制：")]),n("div",{ref:"grid",staticClass:"exp grid"},[n("canvas",{ref:"c9",attrs:{width:"250",height:"250"}})]),t._m(15),n("h3",{staticClass:"title"},[t._v("贝塞尔曲线")]),t._m(16),n("p",[t._v("平方贝塞尔曲线使用quadraticCurveTo方法绘制，接受四个参数，分别表示控制点和锚点的X、Y坐标。所绘制的曲线，会将锚点与当前路径中最后一个点连接起来。")]),n("p",[t._v("使用贝赛尔曲线绘制圆角：")]),n("div",{staticClass:"exp grid"},[n("canvas",{ref:"c10",attrs:{width:"250",height:"250"}})]),t._m(17),n("h3",{staticClass:"title"},[t._v("坐标系的变换")]),n("p",[t._v("Canvas中平移、旋转、缩放坐标系的方法：")]),t._m(18),t._m(19),t._m(20),n("p",[t._v("坐标(x, y)绕原点旋转angle角度之后的坐标(x', y')计算如下：")]),t._m(21),n("p",[t._v("矩阵变换有下面的方程式：")]),t._m(22),n("h3",{staticClass:"title"},[t._v("剪辑区域")]),n("p",[t._v("由路径定义的一块区域，浏览器会将所有的绘图操作都限制在本区域内。默认情况下剪辑区域就是整个Canvas，除非创建路径并调用clip()方法显式地设置剪辑区域。")]),n("p",[t._v("利用剪辑区域实现的伸缩式动画：")]),n("div",{staticClass:"exp clip"},[n("canvas",{ref:"c11",staticStyle:{width:"280px",height:"280px !important"},attrs:{width:"280",height:"280"}})]),t._m(23)]),n("footer",[t._v("2016年06月15日")]),n("Comments"),n("Catalog",{attrs:{catalog:t.catalog}})],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("clearRect(double x, double y, double w, double h)\nstrokeRect(double x, double y, double w, double h)\nfillRect(double x, double y, double w, double h)")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("线性渐变通过调用\n                "),n("strong",[t._v("createLinearGradient()")]),t._v("方法创建，需要向该方法传入两个点的坐标，两点之间的连线就是canvas建立线性渐变效果的依据，该方法会返回CanvasGradient实例。可以添加颜色停止点设置渐变色。")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("initLinearGradient () {\n    let that = this\n    let refs = that.$refs\n    let w = 250\n    let h = 250\n    that.drawLinearGradient(refs.c1, {x0: 0, y0: 0, x1: w, y1: 0})\n    that.drawLinearGradient(refs.c2, {x0: 0, y0: 0, x1: 0, y1: h})\n    that.drawLinearGradient(refs.c3, {x0: 0, y0: 0, x1: w, y1: h})\n    that.drawLinearGradient(refs.c4, {x0: 0, y0: 0, x1: 0, y1: h / 2})\n}\ndrawLinearGradient (el, pos) {\n    let context = el.getContext('2d')\n    let gradient = context.createLinearGradient(pos.x0, pos.y0, pos.x1, pos.y1)\n    gradient.addColorStop(0, 'blue')\n    gradient.addColorStop(0.25, 'white')\n    gradient.addColorStop(0.5, 'purple')\n    gradient.addColorStop(0.75, 'red')\n    gradient.addColorStop(1, 'yellow')\n    context.fillStyle = gradient\n    context.fillRect(0, 0, el.width, el.height)\n}")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("strong",[t._v("使用线性渐变填充时，Canvas会使用最后一种颜色来填充非渐变区域。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("let context = el.getContext('2d')\nlet w = el.width\nlet h = el.height\nlet gradient = context.createRadialGradient(w / 2, h, 1, w / 2, 0, 128)\ngradient.addColorStop(0, '#333')\ngradient.addColorStop(1, '#fff')\ncontext.fillStyle = gradient\ncontext.fillRect(0, 0, el.width, el.height)")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("strong",[t._v("放射渐变的填充范围仅局限于两个圆形所定义的圆锥区域，不会使用最后一个渐变色填充剩余区域。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Canavs允许使用图案对图形和文本进行填充，图案元素可以是这3种：\n                "),n("strong",[t._v("Image元素、Video元素、canvas元素。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",[n("li",[t._v("1、shadowColor：CSS3格式的颜色，默认值：rgba(0,0,0,0)；")]),n("li",[t._v("2、shadowOffsetX：阴影的水平像素偏移；")]),n("li",[t._v("3、shadowOffsetY：阴影的垂直像素偏移；")]),n("li",[t._v("4、shadowBlur：一个与像素无关的值，该值被用于高斯模糊方程之中。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("strokeRect()和fillRect()是Canavs中仅有的两个可以立即绘制图形的方法，其他方法都是基于路径的。\n                "),n("strong",[t._v("不论一个路径是否开放或者封闭，都可以进行填充。")]),t._v("与路径有关的方法：")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",[n("li",[t._v("1、\n                    "),n("strong",[t._v("beginPath()")]),t._v("：将当前路径下的子路径都清除，以此重置当前路径；")]),n("li",[t._v("2、\n                    "),n("strong",[t._v("closePath()")]),t._v("：显式地封闭某段开放路径；")]),n("li",[t._v("3、\n                    "),n("strong",[t._v("fill()")]),t._v("：填充；")]),n("li",[t._v("4、\n                    "),n("strong",[t._v("stroke()")]),t._v("：描边；")]),n("li",[t._v("5、\n                    "),n("strong",[t._v("rect(x,y,w,h)")]),t._v("：添加矩形子路径，逆时针方向创建；")]),n("li",[t._v("6、\n                    "),n("strong",[t._v("arc(centerX,centerY,radius,startAngle,endAngle,counterClockwise)")]),t._v("：添加圆弧子路径，counterClockwise默认为false(顺时针)，设置为true则逆时针。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("填充路径是使用\n                "),n("strong",[t._v("非零环绕原则")]),t._v("：从区域内部画一条足够长的线段，与路径的顺时针部分相交则加1，逆时针部分相交则-1，如果最终值为0则不填充该区域，否则填充。")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("drawRing () {\n    let that = this\n    let el = that.$refs.c6\n    let context = el.getContext('2d')\n    let w = el.width\n    let h = el.height\n    context.fillStyle = 'rgba(0,0,0,0.5)'\n    context.shadowColor = 'rgba(0,0,0,0.8)'\n    context.shadowOffsetX = 8\n    context.shadowOffsetY = 8\n    context.shadowBlur = 20\n    context.arc(w / 2, h / 2, 100, 0, 2 * Math.PI, true)\n    context.arc(w / 2, h / 2, 70, 0, 2 * Math.PI, false)\n    context.fill()\n}")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("主要有两个API：\n                "),n("strong",[t._v("moveTo(x,y)")]),t._v("和\n                "),n("strong",[t._v("lineTo(x,y)")]),t._v("。\n                "),n("strong",[t._v("如果要绘制一像素的线条，需要将其绘制在某两个像素之间的那个像素中。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("drawGrid () {\n    let that = this\n    let el = that.$refs.c7\n    let context = el.getContext('2d')\n    let w = el.width\n    let h = el.height\n    let stepX = 10\n    let stepY = 10\n\n    context.clearRect(0, 0, w, h)\n    context.strokeStyle = '#e0e0e0'\n    context.lineWidth = 0.5\n    for (let i = stepX + 0.5; i < w; i += stepX) {\n        context.beginPath()\n        context.moveTo(i, 0)\n        context.lineTo(i, h)\n        context.stroke()\n    }\n\n    for (let j = stepY + 0.5; j < h; j += stepY) {\n        context.beginPath()\n        context.moveTo(0, j)\n        context.lineTo(w, j)\n        context.stroke()\n    }\n}")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("drawDashedLine () {\n    let that = this\n    let el = that.$refs.c8\n    let context = el.getContext('2d')\n    let w = el.width\n    let h = el.height\n    let startPoint = {x: 15, y: 15}\n    let endPoint = {x: w - 20, y: h - 30}\n    let deltX = endPoint.x - startPoint.x\n    let deltY = endPoint.y - startPoint.y\n    let dashLen = 4\n    let num = Math.floor(Math.sqrt(deltX * deltX + deltY * deltY) / dashLen)\n\n    context.beginPath()\n    context.strokeStyle = 'rgba(0,0,0,0.8)'\n    context.lineWidth = 1\n    for (let i = 0; i < num; i++) {\n        context[i % 2 == 0 ? 'moveTo' : 'lineTo'](startPoint.x + (deltX / num) * i, startPoint.y + (deltY / num) * i)\n    }\n    context.stroke()\n}")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("drawRoundedRect () {\n    let that = this\n    let el = that.$refs.c9\n    let context = el.getContext('2d')\n    let w = Math.floor(el.width * 0.9)\n    let h = Math.floor(el.height * 0.9)\n    let startX = (el.width - w) / 2\n    let startY = (el.height - h) / 2\n    let radius = 20\n    let endX = startX + w\n    let endY = startY + h\n    context.strokeStyle = 'rgba(0,0,0,0.5)'\n    context.fillStyle = 'rgba(0,0,0,0.3)'\n    context.lineWidth = 1\n    context.beginPath()\n    context.moveTo(startX + radius, startY)\n    context.arcTo(endX, startY, endX, startY + radius, radius)\n    context.arcTo(endX, endY, endX - radius, endY, radius)\n    context.arcTo(startX, endY, startX, endY - radius, radius)\n    context.arcTo(startX, startY, startX + radius, startY, radius)\n    context.stroke()\n    context.fill()\n}")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("分为\n                "),n("strong",[t._v("平方贝塞尔曲线")]),t._v("（由两个锚点和一个控制点）和\n                "),n("strong",[t._v("立方贝塞尔曲线")]),t._v("（两个锚点以及两个控制点）。")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("drawArrow () {\n    let that = this\n    let el = that.$refs.c10\n    let context = el.getContext('2d')\n    let margin = 30\n    let w = el.width\n    let h = el.height\n    context.strokeStyle = 'rgba(0,0,0,0.5)'\n    context.fillStyle = 'rgba(0,0,0,0.3)'\n    context.beginPath()\n    context.moveTo(w - margin, margin * 2)\n    context.lineTo(w - margin, h - margin * 2)\n    context.quadraticCurveTo(w - margin, h - margin, w - margin * 2, h - margin)\n    context.lineTo(w - 250, h / 2 + margin)\n    context.quadraticCurveTo(w - 300, h / 2, w - 250, h / 2 - margin)\n    context.lineTo(w - margin * 2, margin)\n    context.quadraticCurveTo(w - margin, margin, w - margin, margin * 2)\n    context.fill()\n    context.stroke()\n}")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ol",[n("li",[t._v("1、\n                    "),n("strong",[t._v("rotate(angle)")]),t._v("：按照给定的角度旋转坐标系；")]),n("li",[t._v("2、\n                    "),n("strong",[t._v("scale(x, y)")]),t._v("：在X、Y方向上按照设定的数值来缩放坐标系；")]),n("li",[t._v("3、\n                    "),n("strong",[t._v("translate(x, y)")]),t._v("：在X、Y方向上平移坐标系。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("strong",[t._v("水平镜像变换：scale(-1, 1)；垂直镜像变换：scale(1, -1)。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("操作变换矩阵的方法：\n                "),n("strong",[t._v("transform(a,b,c,d,e,f)")]),t._v("（在当前的变换矩阵之上叠加运用变换效果）和\n                "),n("strong",[t._v("setTransform(a,b,c,d,e,f)")]),t._v("（重置当前的变换矩阵）。两者可以实现上面三种变换方法无法实现的变换，比如错切。")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("x' = x * cos(angle) - y * sin(angle)\ny' = y * cos(angle) + y * sin(angle)")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("x' = a * x + c * y + e\ny' = b * x + d * y + f")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("pre",[n("code",[t._v("drawClipAni () {\n    let that = this\n    let context = that.$refs.c11.getContext('2d')\n    let w = context.canvas.width\n    let h = context.canvas.height\n    let radius = w / 2\n    let direction = -1\n\n    setInterval(function () {\n        context.fillStyle = '#333333'\n        context.fillRect(0, 0, w, h)\n        if (direction == -1) {\n            radius -= w / 100\n            if (radius > 0) {\n                that.drawAni(radius)\n            } else {\n                direction = 1\n            }\n        } else {\n            radius += w / 100\n            if (radius < w / 2) {\n                that.drawAni(radius)\n            } else {\n                direction = -1\n            }\n        }\n    }, 50)\n},\ndrawClipText () {\n    let that = this\n    let context = that.$refs.c11.getContext('2d')\n    let w = context.canvas.width\n    let h = context.canvas.height\n    context.save()\n    context.font = 'normal 70px 微软雅黑'\n    context.lineWidth = 4\n    context.shadowColor = 'rgba(100,100,150,0.8)'\n    context.shadowOffsetX = 5\n    context.shadowOffsetY = 5\n    context.shadowBlur = 10\n\n    context.fillStyle = '#ff6666'\n    context.textAlign = 'center'\n    context.textBaseline = 'middle'\n    context.fillText('Canvas', w / 2, h / 2)\n    context.restore()\n},\ndrawAni (radius) {\n    let that = this\n    let context = that.$refs.c11.getContext('2d')\n    let w = context.canvas.width\n    let h = context.canvas.height\n\n    context.save()\n    context.beginPath()\n    context.arc(w / 2, h / 2, radius, 0, 2 * Math.PI, true)\n    context.clip()\n    context.fillStyle = '#dddddd'\n    context.fillRect(0, 0, w, h)\n    that.drawClipText()\n    context.restore()\n}")])])}],i=(n("2fa0"),n("3ad6")),l={extends:i["a"],data:function(){return{drawClipAniTimer:null}},mounted:function(){var t=this;t.$nextTick((function(){t.initLinearGradient(),t.initRadialGradient(),t.drawRing(),t.initGrid(),t.drawDashedLine(),t.drawRoundedRect(),t.drawArrow(),t.drawClipAni()}))},methods:{initLinearGradient:function(){var t=this,e=t.$refs,n=250,r=250;t.drawLinearGradient(e.c1,{x0:0,y0:0,x1:n,y1:0}),t.drawLinearGradient(e.c2,{x0:0,y0:0,x1:0,y1:r}),t.drawLinearGradient(e.c3,{x0:0,y0:0,x1:n,y1:r}),t.drawLinearGradient(e.c4,{x0:0,y0:0,x1:0,y1:r/2})},drawLinearGradient:function(t,e){var n=t.getContext("2d"),r=n.createLinearGradient(e.x0,e.y0,e.x1,e.y1);r.addColorStop(0,"#333"),r.addColorStop(1,"#fff"),n.fillStyle=r,n.fillRect(0,0,t.width,t.height)},initRadialGradient:function(){var t=this,e=t.$refs.c5,n=e.getContext("2d"),r=e.width,a=e.height,i=n.createRadialGradient(r/2,a,1,r/2,0,128);i.addColorStop(0,"blue"),i.addColorStop(.25,"white"),i.addColorStop(.5,"purple"),i.addColorStop(.75,"red"),i.addColorStop(1,"yellow"),n.fillStyle=i,n.fillRect(0,0,e.width,e.height)},drawRing:function(){var t=this,e=t.$refs.c6,n=e.getContext("2d"),r=e.width,a=e.height;n.fillStyle="rgba(0,0,0,0.5)",n.shadowColor="rgba(0,0,0,0.8)",n.shadowOffsetX=8,n.shadowOffsetY=8,n.shadowBlur=20,n.arc(r/2,a/2,100,0,2*Math.PI,!0),n.arc(r/2,a/2,70,0,2*Math.PI,!1),n.fill()},initGrid:function(){var t=this,e=t.$refs,n=e.c7,r=e.c8,a=e.c9,i=e.c10,l=e.grid,o=l.getBoundingClientRect(),s=.95*(o.right-o.left);n.setAttribute("width",s),r.setAttribute("width",s),a.setAttribute("width",s),i.setAttribute("width",s),t.drawGrid(n),t.drawGrid(r),t.drawGrid(a),t.drawGrid(i)},drawGrid:function(t){var e=t.getContext("2d"),n=t.width,r=t.height,a=10,i=10;e.clearRect(0,0,n,r),e.strokeStyle="#e0e0e0",e.lineWidth=.5;for(var l=a+.5;l<n;l+=a)e.beginPath(),e.moveTo(l,0),e.lineTo(l,r),e.stroke();for(var o=i+.5;o<r;o+=i)e.beginPath(),e.moveTo(0,o),e.lineTo(n,o),e.stroke()},drawDashedLine:function(){var t=this,e=t.$refs.c8,n=e.getContext("2d"),r=e.width,a=e.height,i={x:15,y:15},l={x:r-20,y:a-30},o=l.x-i.x,s=l.y-i.y,c=4,d=Math.floor(Math.sqrt(o*o+s*s)/c);n.beginPath(),n.strokeStyle="rgba(0,0,0,0.8)",n.lineWidth=1;for(var h=0;h<d;h++)n[h%2==0?"moveTo":"lineTo"](i.x+o/d*h,i.y+s/d*h);n.stroke()},drawRoundedRect:function(){var t=this,e=t.$refs.c9,n=e.getContext("2d"),r=Math.floor(.9*e.width),a=Math.floor(.9*e.height),i=(e.width-r)/2,l=(e.height-a)/2,o=20,s=i+r,c=l+a;n.strokeStyle="rgba(0,0,0,0.5)",n.fillStyle="rgba(0,0,0,0.3)",n.lineWidth=1,n.beginPath(),n.moveTo(i+o,l),n.arcTo(s,l,s,l+o,o),n.arcTo(s,c,s-o,c,o),n.arcTo(i,c,i,c-o,o),n.arcTo(i,l,i+o,l,o),n.stroke(),n.fill()},drawArrow:function(){var t=this,e=t.$refs.c10,n=e.getContext("2d"),r=30,a=e.width,i=e.height;n.strokeStyle="rgba(0,0,0,0.5)",n.fillStyle="rgba(0,0,0,0.3)",n.beginPath(),n.moveTo(a-r,2*r),n.lineTo(a-r,i-2*r),n.quadraticCurveTo(a-r,i-r,a-2*r,i-r),n.lineTo(a-250,i/2+r),n.quadraticCurveTo(a-300,i/2,a-250,i/2-r),n.lineTo(a-2*r,r),n.quadraticCurveTo(a-r,r,a-r,2*r),n.fill(),n.stroke()},drawClipAni:function(){var t=this,e=t.$refs.c11.getContext("2d"),n=e.canvas.width,r=e.canvas.height,a=n/2,i=-1;t.drawClipAniTimer=setInterval((function(){e.fillStyle="#999999",e.fillRect(0,0,n,r),-1==i?(a-=n/100,a>0?t.drawAni(a):i=1):(a+=n/100,a<n/2?t.drawAni(a):i=-1)}),50)},drawClipText:function(){var t=this,e=t.$refs.c11.getContext("2d"),n=e.canvas.width,r=e.canvas.height;e.save(),e.font="normal 70px 微软雅黑",e.lineWidth=4,e.shadowColor="rgba(100,100,150,0.8)",e.shadowOffsetX=5,e.shadowOffsetY=5,e.shadowBlur=10,e.fillStyle="#ff6666",e.textAlign="center",e.textBaseline="middle",e.fillText("Canvas",n/2,r/2),e.restore()},drawAni:function(t){var e=this,n=e.$refs.c11.getContext("2d"),r=n.canvas.width,a=n.canvas.height;n.save(),n.beginPath(),n.arc(r/2,a/2,t,0,2*Math.PI,!0),n.clip(),n.fillStyle="#dddddd",n.fillRect(0,0,r,a),e.drawClipText(),n.restore()}},beforeDestroy:function(){var t=this;t.drawClipAniTimer&&window.clearInterval(t.drawClipAniTimer)}},o=l,s=n("4e82"),c=Object(s["a"])(o,r,a,!1,null,null,null);e["default"]=c.exports}}]);