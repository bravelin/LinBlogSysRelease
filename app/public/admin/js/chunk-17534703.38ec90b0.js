(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17534703"],{1297:function(t,e,n){"use strict";var o=n("d222"),i=n.n(o);i.a},3373:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"articles-page page-container pb-2"},[n("v-layout",{staticClass:"pa-1",attrs:{row:"",wrap:""}},[n("div",{staticClass:"page-title"},[t._v(t._s("Add"==t.action?"添加":"编辑")+"文章")]),n("v-spacer"),n("v-btn",{attrs:{depressed:"",dark:"",color:"indigo accent-1"},on:{click:function(e){return t.doSave()}}},[t._v("保存")]),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:"Add"==t.action,expression:"action=='Add'"}],attrs:{depressed:"",dark:"",color:"red lighten-3"},on:{click:function(e){return t.doClear()}}},[t._v("清空")]),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:"Update"==t.action,expression:"action=='Update'"}],attrs:{depressed:"",dark:"",color:"green lighten-2"},on:{click:function(e){return t.doRefresh()}}},[t._v("刷新")])],1),n("v-form",{staticClass:"px-3 py-3 white mx-2"},[n("v-text-field",{ref:"titleInput",attrs:{"dont-fill-mask-blanks":"",error:t.titleError,autocomplete:"off",name:"title",label:"文章标题",type:"text",tabindex:"1",maxlength:"200"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("v-textarea",{ref:"descriptionInput",attrs:{error:t.descriptionError,name:"description",label:"文章描述",tabindex:"2",maxlength:"2000"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),n("mavon-editor",{ref:"md",on:{imgAdd:t.doAddImg,imgDel:t.doDelImg},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),n("Loading",{attrs:{show:t.inprocess}})],1)},i=[],s=(n("7364"),n("eb57")),a=n("0706"),r=n("3a5e"),c=n("46f1"),d=a["a"].ARTICLES,l={name:"Article",components:{Loading:r["a"]},data:function(){return{id:"",action:"Add",title:"",description:"",content:"",titleError:!1,descriptionError:!1,inprocess:!1}},created:function(){var t=this,e=t.$store,n=t.$route,o=n.query;t.action="article-add"==n.name?"Add":"Update","Update"==t.action?(t.id=o.id,t.id||(t.showMessage("缺少访问参数！",!1),setTimeout(function(){t.$router.back()},1500)),e.dispatch(d+"/"+s["a"].GET_ARTICLE,t.id).then(function(n){t.title=n.title,t.description=n.description,t.content=n.content,e.commit(s["a"].SWITCH_LOADING,!1)},function(n){e.commit(s["a"].SWITCH_LOADING,!1),t.showMessage(n,!1),setTimeout(function(){t.$router.back()},1500)})):e.commit(s["a"].SWITCH_LOADING,!1)},methods:{doSave:function(){var t=this,e=t.$store;t.doCheckForm()&&(t.inprocess=!0,e.dispatch(d+"/"+s["a"].ADD_OR_UPDATE_ARTICLE,{action:t.action,id:t.id,title:t.title.trim(),description:t.description.trim(),content:t.content.trim(),type:"1"}).then(function(e){t.showMessage(e,!0),t.inprocess=!1,"Add"==t.action&&setTimeout(function(){t.$router.push({name:"articles"})},1500)},function(e){t.showMessage(e,!1),t.inprocess=!1}))},doCheckForm:function(){var t=this,e=t.$refs;return t.title.trim()?(t.titleError=!1,t.description.trim()?(t.descriptionError=!1,!!t.content.trim()||(t.showMessage("需要输入文章的内容！",!1),!1)):(e.descriptionInput.focus(),t.descriptionError=!0,t.showMessage("需要输入文章介绍与描述！",!1),!1)):(e.titleInput.focus(),t.titleError=!0,t.showMessage("需要输入文章标题！",!1),!1)},doRefresh:function(){var t=this,e=t.$store;e.dispatch(d+"/"+s["a"].GET_ARTICLE,t.id).then(function(e){t.title=e.title,t.description=e.description,t.content=e.content})},doClear:function(){var t=this;t.title="",t.description="",t.content=""},showMessage:function(t,e){var n=this;n.$store.commit(s["a"].SWITCH_GLOABL_MESSAGE,{show:!0,content:t,status:e?"success":"error",delay:1500})},doAddImg:function(t,e){console.log("add img,",t,e);var n=this,o=new FormData;o.append("multipartfiles",e),n.$ajax({url:c["a"].upload,method:"post",data:o,headers:{"Content-Type":"multipart/form-data"}}).then(function(e){n.inprocess=!1,e&&e.url?(n.showMessage("上传成功！",!0),n.$refs.md.$img2Url(t,e.url)):n.showMessage(e.message||"上传出错！",!1)},function(){n.showMessage("请求出错！",!1),n.inprocess=!1})},doDelImg:function(t){var e=this;t&&t[0]&&e.$ajax({url:c["a"].delImg,method:"delete",data:{path:t[0]}})}}},u=l,p=(n("1297"),n("6691")),m=Object(p["a"])(u,o,i,!1,null,null,null);e["default"]=m.exports},"3a5e":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"data-table-loading"},[n("v-progress-circular",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white",size:90}})],1)},i=[],s={name:"DataTableLoading",props:{show:{type:Boolean,default:!0}}},a=s,r=n("6691"),c=Object(r["a"])(a,o,i,!1,null,null,null);e["a"]=c.exports},d222:function(t,e,n){}}]);