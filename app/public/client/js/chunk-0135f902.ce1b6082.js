(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0135f902"],{"125c":function(t,e,n){"use strict";var r=n("a9cf"),i=n("c3a9"),o=n("8941");t.exports=[].copyWithin||function(t,e){var n=r(this),a=o(n.length),c=i(t,a),s=i(e,a),l=arguments.length>2?arguments[2]:void 0,u=Math.min((void 0===l?a:i(l,a))-s,a-c),f=1;s<c&&c<s+u&&(f=-1,s+=u-1,c+=u-1);while(u-- >0)s in n?n[c]=n[s]:delete n[c],c+=f,s+=f;return n}},"1dbb":function(t,e,n){},3122:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container article-page"},[n("Ani"),n("h2",{staticClass:"title"},[t._v("裕丰科技官网的开场动效实现")]),n("div",{staticClass:"content"}),n("Comments"),n("Catalog",{attrs:{catalog:t.catalog}})],1)},i=[],o=n("3ad6"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"opening-ani-wrap active"},[n("ExplosionLines",{ref:"explosion",on:{ready:function(e){return t.doReady()}}}),n("CircleRing",{ref:"circle"}),n("WaveCircle",{ref:"wave1",attrs:{color:"#4ebefd",scaleAni:!0},on:{over:function(e){return t.doOverWaveCircleScaleAni()}}}),n("WaveCircle",{ref:"wave2",attrs:{delay:.3,dir:!1,opacity:0},on:{complete:function(e){return t.doCompleteWaveCircleAni()}}}),n("RopeRing",{ref:"ring"}),n("FlyFish",{ref:"fish"})],1)},c=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"circle-ring-wrap"},[n("svg",{style:{width:t.w+"px",height:t.w+"px"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+t.w+" "+t.w}},[n("path",{attrs:{d:t.path,fill:"none",stroke:"#ffffff","stroke-width":t.strokeWidth,"stroke-opacity":t.opacity}})])])},l=[],u=Math.PI,f={name:"CircleRing",data:function(){return{w:310,strokeWidth:2,opacity:1,radius:300,centerX:0,centerY:0,path:"",timer:null}},mounted:function(){var t=this;t.$nextTick((function(){t.computeSize()})),window.addEventListener("resize",t.computeSize)},methods:{startAni:function(){var t=this,e={startDeg:0,rangeDeg:0},n=1;new TweenMax(e,n,{rangeDeg:2*u-1e-7,startDeg:u,onUpdate:function(){t.draw(e.startDeg,e.rangeDeg)},onComplete:function(){console.log("over ......")}})},hideAni:function(){var t=this,e={opacity:1,strokeWidth:2},n=.35;new TweenMax(e,n,{strokeWidth:0,opacity:0,onUpdate:function(){t.opacity=e.opacity,t.strokeWidth=e.strokeWidth}})},computeSize:function(){var t=this;t.radius=150,t.w=2*t.radius+10,t.centerX=t.w/2,t.centerY=t.w/2},draw:function(t,e){var n=this,r=t+e,i=n.centerX+Math.cos(t)*n.radius,o=n.centerY+Math.sin(t)*n.radius,a=n.centerX+Math.cos(r)*n.radius,c=n.centerY+Math.sin(r)*n.radius;n.path="M".concat(i," ").concat(o," A ").concat(n.radius," ").concat(n.radius," 0 ").concat(e>Math.PI?1:0," 1 ").concat(a," ").concat(c)}},beforeDestroy:function(){var t=this;window.removeEventListener("resize",t.computeSize)}},d=f,h=n("4e82"),p=Object(h["a"])(d,s,l,!1,null,null,null),y=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"explosion-container"})},g=[],w=(n("9e94"),2e3),x=26,m=Math.PI,A=2500,b=12,E={name:"ExplosionLines",data:function(){return{scene:null,camera:null,renderer:null,points:[],dirs:[],timer:null,stopAni:!1,startAniTime:0,line:null,ani:null}},mounted:function(){this.init()},methods:{init:function(){var t=this,e=document.documentElement.clientWidth||window.innerWidth,n=document.documentElement.clientHeight||window.innerHeight,r=new THREE.Scene;r.fog=new THREE.FogExp2(0,8e-4);var i=new THREE.PerspectiveCamera(70,e/n,.1,5e3);i.position.set(0,0,900),i.lookAt(r.position),t.camera=i,t.scene=r;var o=new THREE.WebGLRenderer({antialias:!0});o.setSize(e,n),o.autoClearColor=new THREE.Color(0,0,0,0),o.setPixelRatio(window.devicePixelRatio),t.$el.appendChild(o.domElement);for(var a,c=0,s=0,l=0,u=null,f=new THREE.BufferGeometry,d=new Float32Array(2*w*3),h=new Float32Array(2*w*3),p=d.length,y=t.points,v=t.dirs,g=new THREE.Color(4074379),A=new THREE.Color(1512339),E=0;E<p;E+=6)c=x*THREE.Math.randFloat(0,1)+5,s=Math.random()*m*2,l=Math.random()*m,a={x:c*Math.sin(l)*Math.cos(s),y:c*Math.sin(l)*Math.sin(s),z:c*Math.cos(l)},d[E]=-b*a.x,d[E+1]=-b*a.y,d[E+2]=-b*a.z,d[E+3]=b*a.x,d[E+4]=b*a.y,d[E+5]=b*a.z,u=E%6==0?g:A,h[E]=u.r,h[E+1]=u.g,h[E+2]=u.b,h[E+3]=u.r,h[E+4]=u.g,h[E+5]=u.b,y.push({x:0,y:0,z:0}),v.push(a);f.addAttribute("position",new THREE.BufferAttribute(d,3)),f.addAttribute("color",new THREE.BufferAttribute(h,3));var S=new THREE.LineBasicMaterial({linewidth:5,linecap:"butt",vertexColors:THREE.VertexColors}),M=new THREE.LineSegments(f,S);r.add(M),o.render(r,i),t.renderer=o,t.line=M,console.log("ready...."),t.$emit("ready")},startAni:function(){console.log("startAni...");var t=this;t.stopAni=!1,t.startAniTime=Date.now(),t.doAni(),setTimeout((function(){t.stopAni=!0}),A)},doAni:function(){var t=this;t.stopAni?(console.log("stop ani..."),t.ani=null):t.ani=requestAnimationFrame(t.doAni);var e=1-(Date.now()-t.startAniTime)/(.8*A),n=b*e;n=n<0?0:n;for(var r=null,i=0,o=null,a=t.points,c=t.dirs,s=t.line.geometry,l=s.attributes.position.array,u=0,f=0,d=0,h=0;h<6*w;h+=6)i=parseInt(h/6),r=a[i],o=c[i],u=o.x*e,f=o.y*e,d=o.z*e,r.x=r.x+u,r.y=r.y+f,r.z=r.z+d,l[h]=r.x-n*u,l[h+1]=r.y-n*f,l[h+2]=r.z-n*d,l[h+3]=r.x+n*u,l[h+4]=r.y+n*f,l[h+5]=r.z+n*d;s.attributes.position.needsUpdate=!0,t.renderer.render(t.scene,t.camera)}},beforeDestroy:function(){var t=this;t.timer&&clearInterval(t.timer),t.ani&&cancelAnimationFrame(t.ani)}},S=E,M=Object(h["a"])(S,v,g,!1,null,null,null),C=M.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wave-circle-wrap"},[n("svg",{style:{transform:"scale("+t.scale+")"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 200"}},[n("path",{attrs:{d:t.pathData,fill:t.color,stroke:"none","fill-opacity":t.fillOpacity}})])])},T=[],R=(n("8f42"),{name:"WaveCircle",props:{color:{type:String,default:"#ad76fc"},opacity:{type:Number,default:1},dir:{type:Boolean,default:!0},duration:{type:Number,default:1.5},delay:{type:Number,default:0},scaleAni:{type:Boolean,default:!1}},data:function(){return{pathData:"",fillOpacity:1,scale:1}},methods:{startAni:function(){var t=this,e={degree:90,opacity:1};new TweenMax(e,t.duration,{degree:-89.9,opacity:t.opacity,delay:t.delay,onUpdate:function(){t.draw(e.degree,e.opacity)},onComplete:function(){t.$emit("complete"),t.scale?t.nextAni():t.$el.style.display="none"}})},draw:function(t,e){var n=this,r=100,i={x:100,y:100},o="M",a=i.x+r*Math.cos(t*Math.PI/180),c=i.y+r*Math.sin(t*Math.PI/180);o+="".concat(a," ").concat(c," A ").concat(r," ").concat(r," "),o+=t<0?"0 1 1 ":"0 0 1 ";var s=i.x+r*Math.cos((180-t)*Math.PI/180),l=i.y+r*Math.sin((180-t)*Math.PI/180);o+="".concat(s," ").concat(l," C ");var u=30*(90-Math.abs(t))/90,f=(a-s)/4;n.dir?o+="".concat(s+f," ").concat(l+u," ").concat(a-f," ").concat(c-u," ").concat(a," ").concat(c," Z"):o+="".concat(s+f," ").concat(l-u," ").concat(a-f," ").concat(c+u," ").concat(a," ").concat(c," Z"),n.fillOpacity=e,n.pathData=o},nextAni:function(){var t=this,e={scale:1};new TweenMax(e,.45,{scale:.45,onUpdate:function(){t.scale=e.scale},onComplete:function(){t.$emit("over"),t.$el.style.display="none"}})}}}),P=R,k=Object(h["a"])(P,L,T,!1,null,null,null),I=k.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"rope-ring-wrap"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 200 200"}},[n("circle",{attrs:{cx:"100",cy:"100",fill:"none",r:t.circleRadius,stroke:"#0386ff","stroke-width":t.len-2}}),n("path",{attrs:{d:t.pathData,fill:"none",stroke:"#0386ff","stroke-width":t.len}})])])},W=[],D={name:"RopeRing",data:function(){return{pathData:"",len:40,circleRadius:20}},methods:{startAni:function(){var t=this;t.$el.style.opacity=1;var e={len:40,radius:20};new TweenMax(e,.4,{len:0,radius:100,onUpdate:function(){t.circleRadius=e.radius,t.draw(e.radius),t.len=e.len},onComplete:function(){t.$el.style.display="none",t.$emit("complete")}})},draw:function(t){for(var e=this,n=15+10*(1-t/100),r=360/n,i={x:100,y:100},o="M",a=0,c=0,s=2*t/100,l=0;l<n;l++)a=i.x+t*Math.cos(l*r*Math.PI/180),c=i.y+t*Math.sin(l*r*Math.PI/180),a+=s*Math.random()*(Math.random()>.5?1:-1),c+=s*Math.random()*(Math.random()>.5?1:-1),o+=0==l?"".concat(a," ").concat(c," "):"A ".concat(t," ").concat(t," 0 0 1 ").concat(a," ").concat(c," ");e.pathData=o+"Z"}}},H=D,F=Object(h["a"])(H,_,W,!1,null,null,null),O=F.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fly-fish-wrap"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+t.winWidth+" "+t.winHeight}},[n("defs",[n("linearGradient",{attrs:{id:"logo-fill-1",x1:"0%",y1:"0%",x2:"100%",y2:"0%"}},[n("stop",{attrs:{offset:"0%","stop-color":"#2314c5"}}),n("stop",{attrs:{offset:"100%","stop-color":"#54d9ff"}})],1),n("linearGradient",{attrs:{id:"logo-fill-2",x1:"0%",y1:"0%",x2:"100%",y2:"0%"}},[n("stop",{attrs:{offset:"0%","stop-color":"#54d9ff"}}),n("stop",{attrs:{offset:"100%","stop-color":"#2314c5"}})],1),n("linearGradient",{attrs:{id:"logo-fill-3",x1:"0%",y1:"0%",x2:"0%",y2:"100%"}},[n("stop",{attrs:{offset:"0%","stop-color":"#54d9ff"}}),n("stop",{attrs:{offset:"50%","stop-color":"#2295e4"}}),n("stop",{attrs:{offset:"100%","stop-color":"#2314c5"}})],1)],1),n("ellipse",{staticStyle:{display:"none"},attrs:{cx:t.ellipseCx1,cy:t.ellipseCy1,rx:t.radiusX,ry:t.radiusY,fill:"none",stroke:"#ff0000","stroke-width":"1"}}),n("path",{ref:"path1",attrs:{id:"fish1",d:t.path1,fill:"#0386ff",stroke:"#0386ff","stroke-width":"1"}}),n("ellipse",{staticStyle:{display:"none"},attrs:{cx:t.ellipseCx2,cy:t.ellipseCy2,rx:t.radiusX,ry:t.radiusY,fill:"none",stroke:"#ff0000","stroke-width":"1"}}),n("path",{ref:"path2",attrs:{id:"fish2",d:t.path2,fill:"#0386ff",stroke:"#0386ff","stroke-width":"1"}}),n("ellipse",{staticStyle:{display:"none"},attrs:{cx:t.centerX,cy:t.centerY,rx:t.curveRx,ry:t.curveRy,fill:"none",stroke:"#ff0000","stroke-width":"1"}}),n("path",{ref:"logoPath1",attrs:{id:"logo1",d:t.logoPath1,fill:"url(#logo-fill-1)",stroke:"none","stroke-width":"0"}}),n("path",{ref:"logoPath2",attrs:{id:"logo2",d:t.logoPath2,fill:"url(#logo-fill-2)",stroke:"none","stroke-width":"0"}}),n("circle",{ref:"logoCircle",attrs:{cx:t.centerX,cy:t.centerY+100,stroke:"none",r:t.circleRadius,fill:"url(#logo-fill-3)"}})])])},$=[],z=Math.PI,B={name:"FlyFish",data:function(){return{winHeight:0,winWidth:0,centerX:0,centerY:0,radiusY:0,radiusX:0,path1:"",ellipseCx1:0,ellipseCy1:0,path2:"",ellipseCx2:0,ellipseCy2:0,curveRx:0,curveRy:0,logoPath1:"",logoPath2:"",timer:null,circleRadius:0}},mounted:function(){var t=this;t.$nextTick((function(){t.computeSize()})),window.addEventListener("resize",t.computeSize)},methods:{startAni:function(){var t=this,e={deg:0},n={delt:z/36,radius:16},r=1.6,i=z/9;new TweenMax(n,.26*r,{delt:i,radius:12}),new TweenMax(e,r,{deg:2*z-i,onUpdate:function(){t.draw(e.deg,n.delt,n.radius)},onComplete:function(){t.startNextAni()}})},draw:function(t,e,n){var r=this,i=r.ellipseCx1,o=r.ellipseCy1,a=r.radiusX,c=r.radiusY,s=r.getEllipsePoint(t,i,o,a,c),l=r.getEllipsePoint(t+e,i,o,a,c),u=l.x-i,f=l.y-o,d=Math.sqrt(u*u+f*f),h=u/d,p=f/d,y={x:l.x-n*h,y:l.y-n*p},v={x:l.x+n*h,y:l.y+n*p};r.path1="M".concat(s.x," ").concat(s.y," A").concat(a," ").concat(c," 0 0 1 ").concat(y.x," ").concat(y.y," A").concat(n," ").concat(n," 0 0 0 ").concat(v.x," ").concat(v.y," A").concat(a+n," ").concat(c," 0 0 0 ").concat(s.x," ").concat(s.y," Z");var g=r.getSymmetryPoint(s,r.centerX),w=r.getSymmetryPoint(y,r.centerX),x=r.getSymmetryPoint(v,r.centerX);r.path2="M".concat(g.x," ").concat(g.y," A").concat(a," ").concat(c," 0 0 0 ").concat(w.x," ").concat(w.y," A").concat(n," ").concat(n," 0 0 1 ").concat(x.x," ").concat(x.y," A").concat(a+n," ").concat(c," 0 0 1 ").concat(g.x," ").concat(g.y," Z")},startNextAni:function(){var t=this,e={deg:0,r:0},n=.4,r=z/2.2,i=null,o=t.$refs;new TweenMax(e,n,{deg:z-1.68,r:10,onUpdate:function(){i=t.drawNext(e.deg,r,12),t.circleRadius=e.r},onComplete:function(){t.drawLogo(i),o.path1.setAttribute("fill","url(#logo-fill-1)"),o.path1.setAttribute("stroke-width",0),o.path2.setAttribute("fill","url(#logo-fill-2)"),o.path2.setAttribute("stroke-width",0),TweenMax.to("#fish1",.3,{morphSVG:"#logo1"}),TweenMax.to("#fish2",.3,{morphSVG:"#logo2"});var e={r:10};new TweenMax(e,.3,{r:20,onUpdate:function(){t.circleRadius=e.r},onComplete:function(){t.$emit("end")}})}})},drawNext:function(t,e,n){var r=this,i=r.centerX,o=r.centerY,a=r.curveRx,c=r.curveRy,s=r.getEllipsePoint(t,i,o,a,c),l=r.getEllipsePoint(t+e,i,o,a,c),u=l.x-i,f=l.y-o,d=Math.sqrt(u*u+f*f),h=u/d,p=f/d,y={x:l.x-n*h,y:l.y-n*p},v={x:l.x+n*h,y:l.y+n*p};r.path2="M".concat(s.x," ").concat(s.y," A").concat(a," ").concat(c," 0 0 1 ").concat(y.x," ").concat(y.y," A").concat(n," ").concat(n," 0 0 0 ").concat(v.x," ").concat(v.y," A").concat(a+.4*n," ").concat(c," 0 0 0 ").concat(s.x," ").concat(s.y," Z");var g=r.getSymmetryPoint(s,r.centerX),w=r.getSymmetryPoint(y,r.centerX),x=r.getSymmetryPoint(v,r.centerX);return r.path1="M".concat(g.x," ").concat(g.y," A").concat(a," ").concat(c," 0 0 0 ").concat(x.x," ").concat(x.y," A").concat(n," ").concat(n," 0 0 0 ").concat(w.x," ").concat(w.y," A").concat(a+.4*n," ").concat(c," 0 0 1 ").concat(g.x," ").concat(g.y," Z"),{p11:g,q11:w,q12:x,p21:s,q21:y,q22:v}},drawLogo:function(t){var e=this,n=t.q11,r=t.q12,i=t.q21,o=t.q22,a={x:12,y:-31},c=4;r.x-=c,o.x+=c,n.x+=a.x,n.y+=a.y,i.x-=a.x,i.y+=a.y;var s=90,l={x:3,y:3},u={x:-4,y:3};e.logoPath1="M".concat(r.x," ").concat(r.y," L").concat(n.x+l.x," ").concat(n.y+l.y," Q").concat(n.x," ").concat(n.y," ").concat(n.x+u.x," ").concat(n.y+u.y," Q").concat(e.centerX," ").concat(n.y+s," ").concat(i.x," ").concat(i.y," L").concat(o.x," ").concat(o.y," Q").concat(e.centerX," ").concat(n.y+s," ").concat(r.x," ").concat(r.y," Z"),e.logoPath2="M".concat(r.x," ").concat(r.y," Q").concat(e.centerX," ").concat(r.y+s-10," ").concat(o.x," ").concat(o.y," L").concat(i.x-l.x," ").concat(i.y+l.y," Q").concat(i.x," ").concat(i.y," ").concat(i.x-u.x," ").concat(i.y+u.y," Q").concat(e.centerX," ").concat(n.y+s," ").concat(r.x," ").concat(r.y," Z")},getSymmetryPoint:function(t,e){return{x:e>t.x?t.x+2*(e-t.x):t.x-2*(t.x-e),y:t.y}},getEllipsePoint:function(t,e,n,r,i){var o=0,a=0;if(t<0&&(t=2*z+t),Math.abs(t-z/2)<1e-10)o=e,a=n+i;else if(Math.abs(t-1.5*z)<1e-10)o=e,a=n-i;else{var c=Math.tan(t),s=Math.sqrt(i*i+r*r*c*c);t>=0&&t<z/2||t>1.5*z&&t<=2*z?(o=e+r*i/s,a=n+r*i*c/s):(o=e-r*i/s,a=n-r*i*c/s)}return{x:o,y:a}},computeSize:function(){var t=this,e=document,n=window;t.winHeight=e.documentElement.clientHeight||n.innerHeight,t.winWidth=e.documentElement.clientWidth||n.innerWidth,t.centerX=t.winWidth/2,t.centerY=t.winHeight/2,t.radiusY=300,t.radiusX=260;var r=90;t.ellipseCx1=t.centerX-t.radiusX-r,t.ellipseCy1=t.centerY,t.ellipseCx2=t.centerX+t.radiusX+r,t.ellipseCy2=t.centerY,t.curveRx=95,t.curveRy=80}},beforeDestroy:function(){var t=this;window.removeEventListener("resize",t.computeSize),t.timer&&clearInterval(t.timer)}},N=B,U=Object(h["a"])(N,X,$,!1,null,null,null),Y=U.exports,V=null,q={name:"OpeningAni",components:{CircleRing:y,ExplosionLines:C,WaveCircle:I,RopeRing:O,FlyFish:Y},data:function(){return{ani1:null,ani2:null}},methods:{doReady:function(){var t=this;t.doStartAni()},doStartAni:function(){var t=this.$refs;t.circle.startAni(),t.wave1.startAni(),t.wave2.startAni()},doCompleteWaveCircleAni:function(){this.$refs.circle.hideAni()},doOverWaveCircleScaleAni:function(){var t=this,e=t.$refs;document.querySelector("div.explosion-container").style.opacity=1,e.ring.startAni(),e.fish.startAni(),e.explosion.startAni()}},beforeDestroy:function(){V&&clearInterval(V)}},G=q,j=(n("598f"),Object(h["a"])(G,a,c,!1,null,null,null)),Z=j.exports,Q={extends:o["a"],components:{Ani:Z},mounted:function(){}},J=Q,K=Object(h["a"])(J,r,i,!1,null,null,null);e["default"]=K.exports},3837:function(t,e,n){var r=n("da0b"),i=n("c58e"),o=n("1277")("species");t.exports=function(t){var e;return i(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!i(e.prototype)||(e=void 0),r(e)&&(e=e[o],null===e&&(e=void 0))),void 0===e?Array:e}},"3ad6":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},i=[],o=(n("4634"),n("eb57")),a={data:function(){return{catalog:[],showPreview:!1,previewList:[],previewIndex:0}},mounted:function(){var t=this;t.$store.commit(o["a"].SWITCH_LOADING,!1),t.$nextTick((function(){window.addEventListener("scroll",t.doHandlerScroll);var e=document.querySelectorAll("code");e.length>0&&e.forEach((function(t){hljs.highlightBlock(t)}));var n=document.querySelectorAll("h3.title");if(n.length>0){var r=[],i=Math.round(1e6*Math.random()),o="";t.catalog=n.forEach((function(t,e){o="section"+i+"-"+e,t.setAttribute("id",o),r.push({text:t.innerHTML,id:o,el:t,active:!1})})),t.catalog=r}var a=document.querySelectorAll(".content figure>img");a.length>0&&t.getImageSize(0,a)}))},methods:{getImageSize:function(t,e){var n=this,r=new Image,i=e[t];r.onload=function(){n.previewList.push({src:i.src,w:this.width,h:this.height}),t++,t<e.length?n.getImageSize(t,e):n.$el.addEventListener("click",n.doPreview)},r.src=i.src},doPreview:function(t){var e=this;if(/img/i.test(t.target.tagName)&&!e.showPreview&&!t.target.classList.contains("pswp__img")){e.previewIndex=0;for(var n=0;n<e.previewList.length;n++)if(e.previewList[n].src==t.target.src){e.previewIndex=n;break}e.showPreview=!0}},doHandlerScroll:function(){for(var t,e,n=this,r=n.catalog.length-1;r>=0;r--)if(t=n.catalog[r].el,t.getBoundingClientRect().top<10){e=r;break}n.catalog=n.catalog.map((function(t,n){return t.active=n==e,t}))}},beforeDestroy:function(){var t=this;window.removeEventListener("scroll",t.doHandlerScroll),t.previewList.length>0&&t.$el.removeEventListener("click",t.doPreview)}},c=a,s=n("4e82"),l=Object(s["a"])(c,r,i,!1,null,null,null);e["a"]=l.exports},4536:function(t,e,n){"use strict";var r=n("a9cf"),i=n("c3a9"),o=n("8941");t.exports=function(t){var e=r(this),n=o(e.length),a=arguments.length,c=i(a>1?arguments[1]:void 0,n),s=a>2?arguments[2]:void 0,l=void 0===s?n:i(s,n);while(l>c)e[c++]=t;return e}},4634:function(t,e,n){for(var r=n("96dd"),i=n("7d56"),o=n("a6d5"),a=n("3f8b"),c=n("b8ea"),s=n("e3b3"),l=n("1277"),u=l("iterator"),f=l("toStringTag"),d=s.Array,h={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(h),y=0;y<p.length;y++){var v,g=p[y],w=h[g],x=a[g],m=x&&x.prototype;if(m&&(m[u]||c(m,u,d),m[f]||c(m,f,g),s[g]=d,w))for(v in r)m[v]||o(m,v,r[v],!0)}},"598f":function(t,e,n){"use strict";var r=n("1dbb"),i=n.n(r);i.a},"7bbe":function(t,e,n){"use strict";var r=n("3f8b"),i=n("f9a5"),o=n("6cc2"),a=n("da28"),c=n("b8ea"),s=n("a17c"),l=n("0cc1"),u=n("5e01"),f=n("a6ad"),d=n("8941"),h=n("e4d7"),p=n("cb2e").f,y=n("d3d8").f,v=n("4536"),g=n("3d87"),w="ArrayBuffer",x="DataView",m="prototype",A="Wrong length!",b="Wrong index!",E=r[w],S=r[x],M=r.Math,C=r.RangeError,L=r.Infinity,T=E,R=M.abs,P=M.pow,k=M.floor,I=M.log,_=M.LN2,W="buffer",D="byteLength",H="byteOffset",F=i?"_b":W,O=i?"_l":D,X=i?"_o":H;function $(t,e,n){var r,i,o,a=new Array(n),c=8*n-e-1,s=(1<<c)-1,l=s>>1,u=23===e?P(2,-24)-P(2,-77):0,f=0,d=t<0||0===t&&1/t<0?1:0;for(t=R(t),t!=t||t===L?(i=t!=t?1:0,r=s):(r=k(I(t)/_),t*(o=P(2,-r))<1&&(r--,o*=2),t+=r+l>=1?u/o:u*P(2,1-l),t*o>=2&&(r++,o/=2),r+l>=s?(i=0,r=s):r+l>=1?(i=(t*o-1)*P(2,e),r+=l):(i=t*P(2,l-1)*P(2,e),r=0));e>=8;a[f++]=255&i,i/=256,e-=8);for(r=r<<e|i,c+=e;c>0;a[f++]=255&r,r/=256,c-=8);return a[--f]|=128*d,a}function z(t,e,n){var r,i=8*n-e-1,o=(1<<i)-1,a=o>>1,c=i-7,s=n-1,l=t[s--],u=127&l;for(l>>=7;c>0;u=256*u+t[s],s--,c-=8);for(r=u&(1<<-c)-1,u>>=-c,c+=e;c>0;r=256*r+t[s],s--,c-=8);if(0===u)u=1-a;else{if(u===o)return r?NaN:l?-L:L;r+=P(2,e),u-=a}return(l?-1:1)*r*P(2,u-e)}function B(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function N(t){return[255&t]}function U(t){return[255&t,t>>8&255]}function Y(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function V(t){return $(t,52,8)}function q(t){return $(t,23,4)}function G(t,e,n){y(t[m],e,{get:function(){return this[n]}})}function j(t,e,n,r){var i=+n,o=h(i);if(o+e>t[O])throw C(b);var a=t[F]._b,c=o+t[X],s=a.slice(c,c+e);return r?s:s.reverse()}function Z(t,e,n,r,i,o){var a=+n,c=h(a);if(c+e>t[O])throw C(b);for(var s=t[F]._b,l=c+t[X],u=r(+i),f=0;f<e;f++)s[l+f]=u[o?f:e-f-1]}if(a.ABV){if(!l((function(){E(1)}))||!l((function(){new E(-1)}))||l((function(){return new E,new E(1.5),new E(NaN),E.name!=w}))){E=function(t){return u(this,E),new T(h(t))};for(var Q,J=E[m]=T[m],K=p(T),tt=0;K.length>tt;)(Q=K[tt++])in E||c(E,Q,T[Q]);o||(J.constructor=E)}var et=new S(new E(2)),nt=S[m].setInt8;et.setInt8(0,2147483648),et.setInt8(1,2147483649),!et.getInt8(0)&&et.getInt8(1)||s(S[m],{setInt8:function(t,e){nt.call(this,t,e<<24>>24)},setUint8:function(t,e){nt.call(this,t,e<<24>>24)}},!0)}else E=function(t){u(this,E,w);var e=h(t);this._b=v.call(new Array(e),0),this[O]=e},S=function(t,e,n){u(this,S,x),u(t,E,x);var r=t[O],i=f(e);if(i<0||i>r)throw C("Wrong offset!");if(n=void 0===n?r-i:d(n),i+n>r)throw C(A);this[F]=t,this[X]=i,this[O]=n},i&&(G(E,D,"_l"),G(S,W,"_b"),G(S,D,"_l"),G(S,H,"_o")),s(S[m],{getInt8:function(t){return j(this,1,t)[0]<<24>>24},getUint8:function(t){return j(this,1,t)[0]},getInt16:function(t){var e=j(this,2,t,arguments[1]);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=j(this,2,t,arguments[1]);return e[1]<<8|e[0]},getInt32:function(t){return B(j(this,4,t,arguments[1]))},getUint32:function(t){return B(j(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return z(j(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return z(j(this,8,t,arguments[1]),52,8)},setInt8:function(t,e){Z(this,1,t,N,e)},setUint8:function(t,e){Z(this,1,t,N,e)},setInt16:function(t,e){Z(this,2,t,U,e,arguments[2])},setUint16:function(t,e){Z(this,2,t,U,e,arguments[2])},setInt32:function(t,e){Z(this,4,t,Y,e,arguments[2])},setUint32:function(t,e){Z(this,4,t,Y,e,arguments[2])},setFloat32:function(t,e){Z(this,4,t,q,e,arguments[2])},setFloat64:function(t,e){Z(this,8,t,V,e,arguments[2])}});g(E,w),g(S,x),c(S[m],a.VIEW,!0),e[w]=E,e[x]=S},"9e94":function(t,e,n){n("a11f")("Float32",4,(function(t){return function(e,n,r){return t(this,e,n,r)}}))},a11f:function(t,e,n){"use strict";if(n("f9a5")){var r=n("6cc2"),i=n("3f8b"),o=n("0cc1"),a=n("2498"),c=n("da28"),s=n("7bbe"),l=n("e85e"),u=n("5e01"),f=n("0614"),d=n("b8ea"),h=n("a17c"),p=n("a6ad"),y=n("8941"),v=n("e4d7"),g=n("c3a9"),w=n("2ab1"),x=n("549d"),m=n("02f2"),A=n("da0b"),b=n("a9cf"),E=n("67c1"),S=n("65c3"),M=n("d15b"),C=n("cb2e").f,L=n("5fff"),T=n("4d2c"),R=n("1277"),P=n("ce67"),k=n("1f9e"),I=n("95e3"),_=n("96dd"),W=n("e3b3"),D=n("b309"),H=n("e465"),F=n("4536"),O=n("125c"),X=n("d3d8"),$=n("e493"),z=X.f,B=$.f,N=i.RangeError,U=i.TypeError,Y=i.Uint8Array,V="ArrayBuffer",q="Shared"+V,G="BYTES_PER_ELEMENT",j="prototype",Z=Array[j],Q=s.ArrayBuffer,J=s.DataView,K=P(0),tt=P(2),et=P(3),nt=P(4),rt=P(5),it=P(6),ot=k(!0),at=k(!1),ct=_.values,st=_.keys,lt=_.entries,ut=Z.lastIndexOf,ft=Z.reduce,dt=Z.reduceRight,ht=Z.join,pt=Z.sort,yt=Z.slice,vt=Z.toString,gt=Z.toLocaleString,wt=R("iterator"),xt=R("toStringTag"),mt=T("typed_constructor"),At=T("def_constructor"),bt=c.CONSTR,Et=c.TYPED,St=c.VIEW,Mt="Wrong length!",Ct=P(1,(function(t,e){return kt(I(t,t[At]),e)})),Lt=o((function(){return 1===new Y(new Uint16Array([1]).buffer)[0]})),Tt=!!Y&&!!Y[j].set&&o((function(){new Y(1).set({})})),Rt=function(t,e){var n=p(t);if(n<0||n%e)throw N("Wrong offset!");return n},Pt=function(t){if(A(t)&&Et in t)return t;throw U(t+" is not a typed array!")},kt=function(t,e){if(!(A(t)&&mt in t))throw U("It is not a typed array constructor!");return new t(e)},It=function(t,e){return _t(I(t,t[At]),e)},_t=function(t,e){var n=0,r=e.length,i=kt(t,r);while(r>n)i[n]=e[n++];return i},Wt=function(t,e,n){z(t,e,{get:function(){return this._d[n]}})},Dt=function(t){var e,n,r,i,o,a,c=b(t),s=arguments.length,u=s>1?arguments[1]:void 0,f=void 0!==u,d=L(c);if(void 0!=d&&!E(d)){for(a=d.call(c),r=[],e=0;!(o=a.next()).done;e++)r.push(o.value);c=r}for(f&&s>2&&(u=l(u,arguments[2],2)),e=0,n=y(c.length),i=kt(this,n);n>e;e++)i[e]=f?u(c[e],e):c[e];return i},Ht=function(){var t=0,e=arguments.length,n=kt(this,e);while(e>t)n[t]=arguments[t++];return n},Ft=!!Y&&o((function(){gt.call(new Y(1))})),Ot=function(){return gt.apply(Ft?yt.call(Pt(this)):Pt(this),arguments)},Xt={copyWithin:function(t,e){return O.call(Pt(this),t,e,arguments.length>2?arguments[2]:void 0)},every:function(t){return nt(Pt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return F.apply(Pt(this),arguments)},filter:function(t){return It(this,tt(Pt(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return rt(Pt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return it(Pt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){K(Pt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return at(Pt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return ot(Pt(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return ht.apply(Pt(this),arguments)},lastIndexOf:function(t){return ut.apply(Pt(this),arguments)},map:function(t){return Ct(Pt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return ft.apply(Pt(this),arguments)},reduceRight:function(t){return dt.apply(Pt(this),arguments)},reverse:function(){var t,e=this,n=Pt(e).length,r=Math.floor(n/2),i=0;while(i<r)t=e[i],e[i++]=e[--n],e[n]=t;return e},some:function(t){return et(Pt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return pt.call(Pt(this),t)},subarray:function(t,e){var n=Pt(this),r=n.length,i=g(t,r);return new(I(n,n[At]))(n.buffer,n.byteOffset+i*n.BYTES_PER_ELEMENT,y((void 0===e?r:g(e,r))-i))}},$t=function(t,e){return It(this,yt.call(Pt(this),t,e))},zt=function(t){Pt(this);var e=Rt(arguments[1],1),n=this.length,r=b(t),i=y(r.length),o=0;if(i+e>n)throw N(Mt);while(o<i)this[e+o]=r[o++]},Bt={entries:function(){return lt.call(Pt(this))},keys:function(){return st.call(Pt(this))},values:function(){return ct.call(Pt(this))}},Nt=function(t,e){return A(t)&&t[Et]&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},Ut=function(t,e){return Nt(t,e=w(e,!0))?f(2,t[e]):B(t,e)},Yt=function(t,e,n){return!(Nt(t,e=w(e,!0))&&A(n)&&x(n,"value"))||x(n,"get")||x(n,"set")||n.configurable||x(n,"writable")&&!n.writable||x(n,"enumerable")&&!n.enumerable?z(t,e,n):(t[e]=n.value,t)};bt||($.f=Ut,X.f=Yt),a(a.S+a.F*!bt,"Object",{getOwnPropertyDescriptor:Ut,defineProperty:Yt}),o((function(){vt.call({})}))&&(vt=gt=function(){return ht.call(this)});var Vt=h({},Xt);h(Vt,Bt),d(Vt,wt,Bt.values),h(Vt,{slice:$t,set:zt,constructor:function(){},toString:vt,toLocaleString:Ot}),Wt(Vt,"buffer","b"),Wt(Vt,"byteOffset","o"),Wt(Vt,"byteLength","l"),Wt(Vt,"length","e"),z(Vt,xt,{get:function(){return this[Et]}}),t.exports=function(t,e,n,s){s=!!s;var l=t+(s?"Clamped":"")+"Array",f="get"+t,h="set"+t,p=i[l],g=p||{},w=p&&M(p),x=!p||!c.ABV,b={},E=p&&p[j],L=function(t,n){var r=t._d;return r.v[f](n*e+r.o,Lt)},T=function(t,n,r){var i=t._d;s&&(r=(r=Math.round(r))<0?0:r>255?255:255&r),i.v[h](n*e+i.o,r,Lt)},R=function(t,e){z(t,e,{get:function(){return L(this,e)},set:function(t){return T(this,e,t)},enumerable:!0})};x?(p=n((function(t,n,r,i){u(t,p,l,"_d");var o,a,c,s,f=0,h=0;if(A(n)){if(!(n instanceof Q||(s=m(n))==V||s==q))return Et in n?_t(p,n):Dt.call(p,n);o=n,h=Rt(r,e);var g=n.byteLength;if(void 0===i){if(g%e)throw N(Mt);if(a=g-h,a<0)throw N(Mt)}else if(a=y(i)*e,a+h>g)throw N(Mt);c=a/e}else c=v(n),a=c*e,o=new Q(a);d(t,"_d",{b:o,o:h,l:a,e:c,v:new J(o)});while(f<c)R(t,f++)})),E=p[j]=S(Vt),d(E,"constructor",p)):o((function(){p(1)}))&&o((function(){new p(-1)}))&&D((function(t){new p,new p(null),new p(1.5),new p(t)}),!0)||(p=n((function(t,n,r,i){var o;return u(t,p,l),A(n)?n instanceof Q||(o=m(n))==V||o==q?void 0!==i?new g(n,Rt(r,e),i):void 0!==r?new g(n,Rt(r,e)):new g(n):Et in n?_t(p,n):Dt.call(p,n):new g(v(n))})),K(w!==Function.prototype?C(g).concat(C(w)):C(g),(function(t){t in p||d(p,t,g[t])})),p[j]=E,r||(E.constructor=p));var P=E[wt],k=!!P&&("values"==P.name||void 0==P.name),I=Bt.values;d(p,mt,!0),d(E,Et,l),d(E,St,!0),d(E,At,p),(s?new p(1)[xt]==l:xt in E)||z(E,xt,{get:function(){return l}}),b[l]=p,a(a.G+a.W+a.F*(p!=g),b),a(a.S,l,{BYTES_PER_ELEMENT:e}),a(a.S+a.F*o((function(){g.of.call(p,1)})),l,{from:Dt,of:Ht}),G in E||d(E,G,e),a(a.P,l,Xt),H(l),a(a.P+a.F*Tt,l,{set:zt}),a(a.P+a.F*!k,l,Bt),r||E.toString==vt||(E.toString=vt),a(a.P+a.F*o((function(){new p(1).slice()})),l,{slice:$t}),a(a.P+a.F*(o((function(){return[1,2].toLocaleString()!=new p([1,2]).toLocaleString()}))||!o((function(){E.toLocaleString.call([1,2])}))),l,{toLocaleString:Ot}),W[l]=k?P:I,r||k||d(E,wt,I)}}else t.exports=function(){}},c017:function(t,e,n){var r=n("3837");t.exports=function(t,e){return new(r(t))(e)}},c58e:function(t,e,n){var r=n("6077");t.exports=Array.isArray||function(t){return"Array"==r(t)}},ce67:function(t,e,n){var r=n("e85e"),i=n("9952"),o=n("a9cf"),a=n("8941"),c=n("c017");t.exports=function(t,e){var n=1==t,s=2==t,l=3==t,u=4==t,f=6==t,d=5==t||f,h=e||c;return function(e,c,p){for(var y,v,g=o(e),w=i(g),x=r(c,p,3),m=a(w.length),A=0,b=n?h(e,m):s?h(e,0):void 0;m>A;A++)if((d||A in w)&&(y=w[A],v=x(y,A,g),t))if(n)b[A]=v;else if(v)switch(t){case 3:return!0;case 5:return y;case 6:return A;case 2:b.push(y)}else if(u)return!1;return f?-1:l||u?u:b}}},da28:function(t,e,n){var r,i=n("3f8b"),o=n("b8ea"),a=n("4d2c"),c=a("typed_array"),s=a("view"),l=!(!i.ArrayBuffer||!i.DataView),u=l,f=0,d=9,h="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");while(f<d)(r=i[h[f++]])?(o(r.prototype,c,!0),o(r.prototype,s,!0)):u=!1;t.exports={ABV:l,CONSTR:u,TYPED:c,VIEW:s}},e4d7:function(t,e,n){var r=n("a6ad"),i=n("8941");t.exports=function(t){if(void 0===t)return 0;var e=r(t),n=i(e);if(e!==n)throw RangeError("Wrong length!");return n}}}]);