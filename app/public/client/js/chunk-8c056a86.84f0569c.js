(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8c056a86"],{"21bb":function(t,e,i){"use strict";var o=i("d575"),s=i.n(o);s.a},bb51:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-container home-page",on:{scroll:t.doScroll}},[i("ul",{ref:"container",staticClass:"article-list"},t._l(t.list,(function(e){return i("li",{key:e.id,on:{click:function(i){return t.doViewPage(e)}}},[i("h4",[t._v(t._s(e.createdAt))]),i("h3",[t._v(t._s(e.title))]),i("div",[t._v(t._s(e.description))])])})),0)])},s=[],a=i("bedd"),r=i("eb57"),n=i("46f1"),c=i("f1ed"),l=15,u={name:"Home",data:function(){return{list:[],page:1,isLoading:!1,isOver:!1,scrollTop:0}},created:function(){var t=this,e=sessionStorage,i=e.getItem("home-list");i&&(t.list=JSON.parse(i));var o=e.getItem("home-over");o&&(t.isOver="1"==o);var s=e.getItem("home-top");s&&(t.scrollTop=s-0);var a=e.getItem("home-page");a&&a-0>1?t.page=a-0:t.getDataList(),setTimeout((function(){t.$store.commit(r["a"].SWITCH_LOADING,!1)}),2e3)},mounted:function(){var t=this;t.$nextTick((function(){t.scrollTop&&setTimeout((function(){t.$el.scrollTop=t.scrollTop}),300)}))},methods:{doScroll:function(t){var e=this,i=e.$el,o=e.$refs.container,s=parseInt(getComputedStyle(o,null)["height"]),a=e.$store.state.winHeight;e.scrollTop=i.scrollTop,a+i.scrollTop+50>=s&&e.getDataList(e.page+1)},doViewPage:function(t){var e=t.id,i=t.type,o=t.routerName,s=this;0==i&&s.$router.push({name:o,params:{id:e}})},getDataList:function(t){var e=this;if(!e.isOver){if(e.isLoading)return;e.isLoading=!0,t=t||e.page,e.$ajax({url:n["a"].GET_ARTICLES,params:{page:t}}).then((function(i){if(200==i.code){var o=i.data.dataList.map((function(t){return{id:t.id,title:t.title,routerName:t.routerName,description:t.description,type:t.type,createdAt:Object(c["b"])(new Date(t.createdAt),"yyyy/MM/dd hh:mm:ss")}}));e.page=t,1==t?(e.$store.commit(r["a"].SWITCH_LOADING,!1),e.list=o):e.list=[].concat(Object(a["a"])(e.list),Object(a["a"])(o)),o.length<l&&(e.isOver=!0)}e.isLoading=!1}))}}},beforeDestroy:function(){var t=this,e=sessionStorage;e.setItem("home-list",JSON.stringify(t.list)),e.setItem("home-page",t.page),e.setItem("home-over",t.isOver?"1":"0"),e.setItem("home-top",t.scrollTop)}},p=u,d=(i("21bb"),i("4e82")),m=Object(d["a"])(p,o,s,!1,null,null,null);e["default"]=m.exports},d575:function(t,e,i){}}]);