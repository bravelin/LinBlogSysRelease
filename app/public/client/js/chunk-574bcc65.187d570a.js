(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-574bcc65"],{"2fa0":function(t,e,i){var n=i("2498");n(n.P,"Array",{fill:i("4536")}),i("ab19")("fill")},"3ad6":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div")},a=[],o=(i("4634"),i("eb57")),r={data:function(){return{catalog:[],showPreview:!1,previewList:[],previewIndex:0}},mounted:function(){var t=this;t.$store.commit(o["a"].SWITCH_LOADING,!1),t.$nextTick((function(){window.addEventListener("scroll",t.doHandlerScroll);var e=document.querySelectorAll("code");e.length>0&&e.forEach((function(t){hljs.highlightBlock(t)}));var i=document.querySelectorAll("h3.title");if(i.length>0){var n=[],a=Math.round(1e6*Math.random()),o="";t.catalog=i.forEach((function(t,e){o="section"+a+"-"+e,t.setAttribute("id",o),n.push({text:t.innerHTML,id:o,el:t,active:!1})})),t.catalog=n}var r=document.querySelectorAll(".content figure>img");r.length>0&&t.getImageSize(0,r)}))},methods:{getImageSize:function(t,e){var i=this,n=new Image,a=e[t];n.onload=function(){i.previewList.push({src:a.src,w:this.width,h:this.height}),t++,t<e.length?i.getImageSize(t,e):i.$el.addEventListener("click",i.doPreview)},n.src=a.src},doPreview:function(t){var e=this;if(/img/i.test(t.target.tagName)&&!e.showPreview&&!t.target.classList.contains("pswp__img")){e.previewIndex=0;for(var i=0;i<e.previewList.length;i++)if(e.previewList[i].src==t.target.src){e.previewIndex=i;break}e.showPreview=!0}},doHandlerScroll:function(){for(var t,e,i=this,n=i.catalog.length-1;n>=0;n--)if(t=i.catalog[n].el,t.getBoundingClientRect().top<10){e=n;break}i.catalog=i.catalog.map((function(t,i){return t.active=i==e,t}))}},beforeDestroy:function(){var t=this;window.removeEventListener("scroll",t.doHandlerScroll),t.previewList.length>0&&t.$el.removeEventListener("click",t.doPreview)}},s=r,l=i("4e82"),c=Object(l["a"])(s,n,a,!1,null,null,null);e["a"]=c.exports},4536:function(t,e,i){"use strict";var n=i("a9cf"),a=i("c3a9"),o=i("8941");t.exports=function(t){var e=n(this),i=o(e.length),r=arguments.length,s=a(r>1?arguments[1]:void 0,i),l=r>2?arguments[2]:void 0,c=void 0===l?i:a(l,i);while(c>s)e[s++]=t;return e}},4634:function(t,e,i){for(var n=i("96dd"),a=i("7d56"),o=i("a6d5"),r=i("3f8b"),s=i("b8ea"),l=i("e3b3"),c=i("1277"),h=c("iterator"),p=c("toStringTag"),d=l.Array,u={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=a(u),v=0;v<f.length;v++){var g,m=f[v],w=u[m],y=r[m],b=y&&y.prototype;if(b&&(b[h]||s(b,h,d),b[p]||s(b,p,m),l[m]=d,w))for(g in n)b[g]||o(b,g,n[g],!0)}},"84a3":function(t,e,i){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}i.d(e,"a",(function(){return a}))},8868:function(t,e,i){var n=i("2498"),a=i("da27"),o=i("0cc1");t.exports=function(t,e){var i=(a.Object||{})[t]||Object[t],r={};r[t]=e(i),n(n.S+n.F*o((function(){i(1)})),"Object",r)}},9717:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-container article-page canvas-7-page"},[i("h2",{staticClass:"title"},[t._v("Canvas学习笔记之七：物理效果")]),i("div",{staticClass:"content"},[i("h3",{staticClass:"title"},[t._v("自由落体")]),i("p",[t._v("重力是最弱的宇宙基本力。四种宇宙基本力：强核作用力、电磁力、弱核作用力以及重力。")]),t._m(0),i("div",{staticClass:"exp"},[i("canvas",{ref:"c1",attrs:{width:"300",height:"400"}})]),t._m(1),i("h3",{staticClass:"title"},[t._v("抛物线运动")]),i("div",{staticClass:"exp"},[i("canvas",{ref:"c2",attrs:{width:"300",height:"400"}})]),t._m(2),i("h3",{staticClass:"title"},[t._v("钟摆运动")]),i("div",{staticClass:"exp"},[i("canvas",{ref:"c3",attrs:{width:"300",height:"400"}})]),i("p",[t._v("定义精灵对象：")]),t._m(3),i("p",[t._v("绘制器对象：")]),t._m(4),i("p",[t._v("行为对象：")]),t._m(5)]),i("footer",[t._v("2016年07月19日")]),i("Comments"),i("Catalog",{attrs:{catalog:t.catalog}})],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("在现实世界中，地球表面的物体在下坠时，其加速度都是9.81m/s/s，也可以表示为32ft/s/s。速度公式：\n                "),i("strong",[t._v("v = gt")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("pre",[i("code",[t._v("const move = {\n    execute (sprite, context, time) {\n        if (sprite.top + sprite.velocityY + sprite.radius > context.canvas.height) {\n            sprite.velocityY = 0\n            sprite.top = 0\n            sprite.lastTime = (+new Date())\n            sprite.elapseTime = 0\n        }\n        time = time || (+new Date())\n        let deltTime = time - sprite.lastTime\n        let fps = 1000 / deltTime\n        sprite.top += sprite.velocityY / fps\n        sprite.elapseTime += deltTime\n        sprite.velocityY = gravity * (sprite.elapseTime / 1000) * metersRatio\n    }\n}")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("pre",[i("code",[t._v("const move = {\n    execute (sprite, context, time) {\n        if (sprite.top + sprite.velocityY > context.canvas.height || sprite.left + sprite.velocityX > context.canvas.width) {\n            sprite.velocityY = 0\n            sprite.lastTime = (+new Date())\n            sprite.elapseTime = 0\n            sprite.left = parseInt(200 * Math.random())\n            sprite.top = 400 - parseInt(20 * Math.random())\n        }\n        time = time || (+new Date())\n        let deltTime = time - sprite.lastTime\n        let fps = 1000 / deltTime\n        sprite.top += sprite.velocityY / fps\n        sprite.left += sprite.velocityX / fps\n        sprite.elapseTime += deltTime\n        sprite.velocityY = -(sprite.initVelocityY - gravity * (sprite.elapseTime / 1000)) * metersRatio\n    }\n}")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("pre",[i("code",[t._v("const initAngle = Math.PI / 7\nthat.pendulum = new Sprite({\n    painter: pendulumPainter,\n    behaviors: [move],\n    initAngle: initAngle,\n    angle: initAngle,\n    x: 150,\n    y: 30,\n    weightX: 0,\n    weightY: 0,\n    weightRadius: 25,\n    rodLength: 320,\n    pivotRadius: 7,\n    lastTime: (+new Date()),\n    elapseTime: 0\n})")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("pre",[i("code",[t._v("const pendulumPainter = {\n    pivotFillStyle: 'rgba(0,0,0,0.2)',\n    weightShadowCOlor: 'rgb(0,0,0)',\n    pivotShadowColor: 'rgb(255,255,0)',\n    strokeColor: 'rgb(100,100,195)',\n    paint (sprite, context) {\n        this.drawPivot(sprite, context)\n        this.drawRod(sprite, context)\n        this.drawWeight(sprite, context)\n    },\n    drawWeight (sprite, context) {\n        context.save()\n        context.beginPath()\n        context.arc(sprite.weightX, sprite.weightY, sprite.weightRadius, 0, Math.PI * 2, false)\n        context.clip()\n        context.shadowColor = this.weightShadowCOlor\n        context.shadowOffsetX = -4\n        context.shadowOffsetY = -4\n        context.shadowBlur = 8\n        context.lineWidth = 2\n        context.strokeStyle = this.strokeColor\n        context.stroke()\n        context.beginPath()\n        context.arc(sprite.weightX, sprite.weightY, sprite.weightRadius / 2, 0, Math.PI * 2, false)\n        context.clip()\n        context.shadowColor = this.pivotShadowColor\n        context.shadowOffsetX = -4\n        context.shadowOffsetY = -4\n        context.shadowBlur = 8\n        context.stroke()\n        context.restore()\n    },\n    drawPivot (sprite, context) {\n        context.save()\n        context.beginPath()\n        context.fillStyle = this.pivotFillStyle\n        context.arc(sprite.x + sprite.pivotRadius, sprite.y, sprite.pivotRadius, 0, Math.PI * 2, false)\n        context.fill()\n        context.stroke()\n        context.restore()\n    },\n    drawRod (sprite, context) {\n        context.beginPath()\n        context.moveTo(sprite.x + sprite.pivotRadius + sprite.pivotRadius * Math.sin(sprite.angle), sprite.y + sprite.pivotRadius * Math.cos(sprite.angle))\n        context.lineTo(sprite.weightX - sprite.weightRadius * Math.sin(sprite.angle), sprite.weightY - sprite.weightRadius * Math.cos(sprite.angle))\n        context.stroke()\n    }\n}")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("pre",[i("code",[t._v("const move = {\n    execute (sprite, context, time) {\n        time = time || (+new Date())\n        sprite.elapseTime += (time - sprite.lastTime) / 1000\n        sprite.angle = sprite.initAngle * Math.cos(Math.sqrt(gravity / rodLength) * sprite.elapseTime)\n        sprite.weightX = sprite.x + Math.sin(sprite.angle) * sprite.rodLength\n        sprite.weightY = sprite.y + Math.cos(sprite.angle) * sprite.rodLength\n        sprite.lastTime = time\n    }\n}")])])}],o=(i("4634"),i("2fa0"),i("3ad6")),r=i("edea"),s={paint:function(t,e){var i=e.createRadialGradient(t.left,t.top,0,t.left,t.top,t.radius);i.addColorStop(.3,t.innerColor),i.addColorStop(.5,t.middleColor),i.addColorStop(1,t.outerColor),e.save(),e.fillStyle=i,e.strokeStyle=t.strokeStyle,e.beginPath(),e.arc(t.left,t.top,t.radius,0,2*Math.PI,!1),e.fill(),e.stroke(),e.restore()}},l={extends:o["a"],data:function(){return{ball:null,lobBalls:[],pendulum:null}},mounted:function(){var t=this;t.$nextTick((function(){t.startGravityForce(),t.startLob(),t.startPendulum()}))},methods:{startGravityForce:function(){var t=this,e=9.81,i=.01,n={execute:function(t,n,a){t.top+t.velocityY+t.radius>n.canvas.height&&(t.velocityY=0,t.top=0,t.lastTime=+new Date,t.elapseTime=0),a=a||+new Date;var o=a-t.lastTime,r=1e3/o;t.top+=t.velocityY/r,t.elapseTime+=o,t.velocityY=e*(t.elapseTime/1e3)*i}};t.ball=new r["a"]({painter:s,behaviors:[n],left:150,top:20,velocityX:0,velocityY:0,lastTime:+new Date,elapseTime:0,radius:10,innerColor:"rgba(100,145,230,1)",middleColor:"rgba(100,145,230,0.7)",outerColor:"rgba(100,145,230,0.5)",strokeStyle:"blue"}),t.animateGravityForce()},animateGravityForce:function(t){var e=this,i=e.$refs.c1,n=i.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,i.width,i.height),e.ball.update(n),e.ball.paint(n),window.requestAnimationFrame(e.animateGravityForce)},startLob:function(){for(var t=this,e=9.81,i=.6,n={execute:function(t,n,a){(t.top+t.velocityY>n.canvas.height||t.left+t.velocityX>n.canvas.width)&&(t.velocityY=0,t.lastTime=+new Date,t.elapseTime=0,t.left=parseInt(200*Math.random()),t.top=400-parseInt(20*Math.random())),a=a||+new Date;var o=a-t.lastTime,r=1e3/o;t.top+=t.velocityY/r,t.left+=t.velocityX/r,t.elapseTime+=o,t.velocityY=-(t.initVelocityY-e*(t.elapseTime/1e3))*i}},a=[],o=0;o<1;o++)a.push(new r["a"]({painter:s,behaviors:[n],left:parseInt(200*Math.random()),top:400-parseInt(20*Math.random()),velocityX:4+10*Math.random(),velocityY:0,initVelocityY:100-50*Math.random(),lastTime:+new Date,elapseTime:0,radius:12,innerColor:"rgba(100,145,230,1)",middleColor:"rgba(100,145,230,0.7)",outerColor:"rgba(100,145,230,0.5)",strokeStyle:"blue"}));t.lobBalls=a,t.animateLob()},animateLob:function(t){var e=this,i=e.$refs.c2,n=i.getContext("2d");n.fillStyle="#ffffff",n.fillRect(0,0,i.width,i.height),e.lobBalls.forEach((function(t){t.update(n)})),e.lobBalls.forEach((function(t){t.paint(n)})),window.requestAnimationFrame(e.animateLob)},startPendulum:function(){var t=this,e=32,i=.8,n={execute:function(t,n,a){a=a||+new Date,t.elapseTime+=(a-t.lastTime)/1e3,t.angle=t.initAngle*Math.cos(Math.sqrt(e/i)*t.elapseTime),t.weightX=t.x+Math.sin(t.angle)*t.rodLength,t.weightY=t.y+Math.cos(t.angle)*t.rodLength,t.lastTime=a}},a={pivotFillStyle:"rgba(0,0,0,0.2)",weightShadowCOlor:"rgb(0,0,0)",pivotShadowColor:"rgb(255,255,0)",strokeColor:"rgb(100,100,195)",paint:function(t,e){this.drawPivot(t,e),this.drawRod(t,e),this.drawWeight(t,e)},drawWeight:function(t,e){e.save(),e.beginPath(),e.arc(t.weightX,t.weightY,t.weightRadius,0,2*Math.PI,!1),e.clip(),e.shadowColor=this.weightShadowCOlor,e.shadowOffsetX=-4,e.shadowOffsetY=-4,e.shadowBlur=8,e.lineWidth=2,e.strokeStyle=this.strokeColor,e.stroke(),e.beginPath(),e.arc(t.weightX,t.weightY,t.weightRadius/2,0,2*Math.PI,!1),e.clip(),e.shadowColor=this.pivotShadowColor,e.shadowOffsetX=-4,e.shadowOffsetY=-4,e.shadowBlur=8,e.stroke(),e.restore()},drawPivot:function(t,e){e.save(),e.beginPath(),e.fillStyle=this.pivotFillStyle,e.arc(t.x+t.pivotRadius,t.y,t.pivotRadius,0,2*Math.PI,!1),e.fill(),e.stroke(),e.restore()},drawRod:function(t,e){e.beginPath(),e.moveTo(t.x+t.pivotRadius+t.pivotRadius*Math.sin(t.angle),t.y+t.pivotRadius*Math.cos(t.angle)),e.lineTo(t.weightX-t.weightRadius*Math.sin(t.angle),t.weightY-t.weightRadius*Math.cos(t.angle)),e.stroke()}},o=Math.PI/7;t.pendulum=new r["a"]({painter:a,behaviors:[n],initAngle:o,angle:o,x:150,y:30,weightX:0,weightY:0,weightRadius:25,rodLength:320,pivotRadius:7,lastTime:+new Date,elapseTime:0}),t.animatePendulum()},animatePendulum:function(){var t=this,e=t.$refs.c3,i=e.getContext("2d");i.fillStyle="#ffffff",i.fillRect(0,0,e.width,e.height),t.pendulum.update(i),t.pendulum.paint(i),window.requestAnimationFrame(t.animatePendulum)}}},c=l,h=i("4e82"),p=Object(h["a"])(c,n,a,!1,null,null,null);e["default"]=p.exports},b059:function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}i.d(e,"a",(function(){return n}))},ed8b:function(t,e,i){var n=i("a9cf"),a=i("7d56");i("8868")("keys",(function(){return function(t){return a(n(t))}}))},edea:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));i("ed8b"),i("4634"),i("7cfd");var n=i("b059"),a=i("84a3"),o=function(){function t(e){var i=this;Object(n["a"])(this,t),this.name=e.name||"sprite",this.painter=e.painter,this.top=e.top||0,this.left=e.left||0,this.width=e.width||0,this.height=e.height||0,this.velocityX=e.velocityX||0,this.velocityY=e.velocityY||0,this.visible=e.visible||!0,this.animating=e.animating||!1,this.behaviors=e.behaviors||[],Object.keys(e).forEach((function(t){void 0==i[t]&&(i[t]=e[t])}))}return Object(a["a"])(t,[{key:"paint",value:function(t){this.painter&&this.visible&&this.painter.paint(this,t)}},{key:"update",value:function(t,e){var i=this;this.behaviors.forEach((function(n){n.execute(i,t,e)}))}}]),t}()}}]);