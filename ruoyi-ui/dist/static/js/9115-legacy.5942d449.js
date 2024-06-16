"use strict";(self["webpackChunkruoyi"]=self["webpackChunkruoyi"]||[]).push([[9115],{39115:function(t,e,a){a.r(e),a.d(e,{default:function(){return d}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",[a("el-row",{attrs:{gutter:15}},[a("el-form",{ref:"elForm",attrs:{model:t.form,rules:t.rules,size:"medium","label-width":"70px"}},[a("el-col",{attrs:{span:23}},[a("el-row",{attrs:{type:"flex",justify:"start",align:"middle",gutter:30}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"项目编号",prop:"field101"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请输入项目编号",clearable:""},model:{value:t.form.field101,callback:function(e){t.$set(t.form,"field101",e)},expression:"form.field101"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"项目名称",prop:"field102"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请输入项目名称",clearable:""},model:{value:t.form.field102,callback:function(e){t.$set(t.form,"field102",e)},expression:"form.field102"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{size:"medium"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.query}},[t._v("查询")]),a("el-button",{on:{click:t.resetQuery}},[t._v("重置")])],1)],1)],1)],1)],1)],1)],1),a("div",{staticClass:"tcl"},[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"询价",name:"first"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{stripe:"",data:t.contractList1}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center"}}),a("el-table-column",{attrs:{label:"项目编号",align:"center",prop:"gCode"}}),a("el-table-column",{attrs:{label:"项目名称",align:"center",prop:"gName"}}),a("el-table-column",{attrs:{label:"公开/邀请",align:"center",prop:"gIsPublic"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.gIsPublic?a("span",[t._v("公开")]):2===e.row.gIsPublic?a("span",[t._v("邀请")]):t._e()]}}])}),a("el-table-column",{attrs:{label:"生成时间",align:"center",prop:"gSpawnTime"}}),a("el-table-column",{attrs:{label:"报价截止时间",align:"center",prop:"gDeadline"},scopedSlots:t._u([{key:"default",fn:function(e){return[null!=e.row.gDeadline?a("span",[t._v(t._s(e.row.gDeadline))]):a("span",[t._v("- -")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.gRelease||2===e.row.gRelease?a("router-link",{attrs:{to:"details1?gid="+e.row.gid}},[a("el-button",{attrs:{size:"mini",type:"text"}},[t._v("进入项目 ")])],1):a("router-link",{attrs:{to:"details1?gid="+e.row.gid}},[a("el-button",{attrs:{size:"mini",type:"text"}},[t._v("发布项目 ")])],1)]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total1>0,expression:"total1>0"}],attrs:{total:t.total1,page:t.queryParams1.pageNum,limit:t.queryParams1.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams1,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams1,"pageSize",e)},pagination:t.getList1}})],1),a("el-tab-pane",{attrs:{label:"竞争性谈判",name:"second"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{stripe:"",data:t.contractList2}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center"}}),a("el-table-column",{attrs:{label:"项目编号",align:"center",prop:"gCode"}}),a("el-table-column",{attrs:{label:"项目名称",align:"center",prop:"gName"}}),a("el-table-column",{attrs:{label:"公开/邀请",align:"center",prop:"gIsPublic"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.gIsPublic?a("span",[t._v("公开")]):2===e.row.gIsPublic?a("span",[t._v("邀请")]):t._e()]}}])}),a("el-table-column",{attrs:{label:"生成时间",align:"center",prop:"gSpawnTime"}}),a("el-table-column",{attrs:{label:"报价截止时间",align:"center",prop:"gDeadline"},scopedSlots:t._u([{key:"default",fn:function(e){return[null!=e.row.gDeadline?a("span",[t._v(t._s(e.row.gDeadline))]):a("span",[t._v("- -")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:"details2?gid="+e.row.gid}},[a("el-button",{attrs:{size:"mini",type:"text"}},[t._v("进入项目 ")])],1)]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total2>0,expression:"total2>0"}],staticClass:"gg",attrs:{total:t.total2,page:t.queryParams2.pageNum,limit:t.queryParams2.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams2,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams2,"pageSize",e)},pagination:t.getList2}})],1),a("el-tab-pane",{attrs:{label:"委托",name:"third"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{stripe:"",data:t.contractList3}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center"}}),a("el-table-column",{attrs:{label:"项目编号",align:"center",prop:"gCode"}}),a("el-table-column",{attrs:{label:"项目名称",align:"center",prop:"gName"}}),a("el-table-column",{attrs:{label:"生成时间",align:"center",prop:"gSpawnTime"}}),a("el-table-column",{attrs:{label:"委托单位",align:"center",prop:"gUnit"},scopedSlots:t._u([{key:"default",fn:function(e){return[null!=e.row.gUnit?a("span",[t._v(t._s(e.row.gUnit))]):a("span",[t._v("- -")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:"details3?gid="+e.row.gid}},[a("el-button",{attrs:{size:"mini",type:"text"}},[t._v("进入项目 ")])],1)]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total3>0,expression:"total3>0"}],attrs:{total:t.total3,page:t.queryParams3.pageNum,limit:t.queryParams3.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams3,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams3,"pageSize",e)},pagination:t.getList3}})],1),a("el-tab-pane",{attrs:{label:"单一来源",name:"fourth"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{stripe:"",data:t.contractList4}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center"}}),a("el-table-column",{attrs:{label:"项目编号",align:"center",prop:"gCode"}}),a("el-table-column",{attrs:{label:"项目名称",align:"center",prop:"gName"}}),a("el-table-column",{attrs:{label:"生成时间",align:"center",prop:"gSpawnTime"}}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.gRelease?a("router-link",{attrs:{to:"details4?gid="+e.row.gid}},[a("el-button",{attrs:{size:"mini",type:"text"}},[t._v("进入项目 ")])],1):t._e(),1===e.row.gRelease?a("router-link",{attrs:{to:"details5?gid="+e.row.gid}},[a("el-button",{attrs:{size:"mini",type:"text"}},[t._v("发布项目 ")])],1):a("router-link",{attrs:{to:"details5?gid="+e.row.gid}},[a("el-button",{attrs:{size:"mini",type:"text"}},[t._v("查看 ")])],1)]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total4>0,expression:"total4>0"}],attrs:{total:t.total4,page:t.queryParams4.pageNum,limit:t.queryParams4.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams4,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams4,"pageSize",e)},pagination:t.getList4}})],1)],1)],1)])},l=[],r=(a(98741),a(30855)),i={data:function(){return{dicts:["ppm_procurement_plan"],loading:!0,contractList1:[],contractList2:[],contractList3:[],contractList4:[],total1:0,total2:0,total3:0,total4:0,form:{},form1:{},queryParams1:{pageNum:1,pageSize:10,xyId:null,gCode:null,gName:null,gIsPublic:null,gSpawnTime:null,gDeadline:null,gStatus:null,gTendertype:3},queryParams2:{pageNum:1,pageSize:10,xyId:null,gCode:null,gName:null,gIsPublic:null,gSpawnTime:null,gDeadline:null,gStatus:null,gCount:null,gTendertype:5},queryParams3:{pageNum:1,pageSize:10,xyId:null,gCode:null,gName:null,gIsPublic:null,gSpawnTime:null,gDeadline:null,gStatus:null,gUnit:null,gTendertype:4},queryParams4:{pageNum:1,pageSize:10,xyId:null,gCode:null,gName:null,gIsPublic:null,gSpawnTime:null,gDeadline:null,gStatus:null,gRounds:null,gTendertype:6},rules:{},rules1:{},activeName:"first"}},created:function(){this.getList1()},methods:{query:function(){console.log("执行模糊查询"),this.queryParams1.gCode=this.form.field101,this.queryParams1.gName=this.form.field102,this.queryParams1.pageNum=1,this.getList1(),this.queryParams2.gCode=this.form.field101,this.queryParams2.gName=this.form.field102,this.queryParams2.pageNum=1,this.getList2(),this.queryParams3.eHcode=this.form.field101,this.queryParams3.gName=this.form.field102,this.queryParams3.pageNum=1,this.getList3(),this.queryParams4.eHcode=this.form.field101,this.queryParams4.gName=this.form.field102,this.queryParams4.pageNum=1,this.getList4()},resetQuery:function(){this.$refs.elForm.resetFields(),this.query()},handleClick:function(t,e){console.log("切换到标签页",t.name),"first"===t.name?this.getList1():"second"===t.name?this.getList2():"third"===t.name?this.getList3():"fourth"===t.name&&this.getList4()},getList1:function(){var t=this;this.loading=!0,(0,r.iU)(this.queryParams1).then((function(e){t.contractList1=e.rows,t.total1=e.total,t.loading=!1}))},getList2:function(){var t=this;this.loading=!0,(0,r.iU)(this.queryParams2).then((function(e){console.log(e.rows),t.contractList2=e.rows,t.total2=e.total,t.loading=!1}))},getList3:function(){var t=this;this.loading=!0,(0,r.iU)(this.queryParams3).then((function(e){t.contractList3=e.rows,t.total3=e.total,t.loading=!1}))},getList4:function(){var t=this;this.loading=!0,(0,r.iU)(this.queryParams4).then((function(e){t.contractList4=e.rows,t.total4=e.total,t.loading=!1}))}}},o=i,s=a(81656),u=(0,s.A)(o,n,l,!1,null,null,null),d=u.exports},30855:function(t,e,a){a.d(e,{Bj:function(){return p},Hs:function(){return g},Jp:function(){return s},Mc:function(){return d},Qf:function(){return u},SW:function(){return m},U7:function(){return r},UA:function(){return c},dd:function(){return o},iU:function(){return l},sS:function(){return i},sZ:function(){return f}});var n=a(35720);function l(t){return(0,n.Ay)({url:"/nonbidding/pro/list",method:"get",params:t})}function r(t){return(0,n.Ay)({url:"/nonbidding/plan/"+t,method:"get"})}function i(t){return(0,n.Ay)({url:"/nonbidding/pro/"+t,method:"get"})}function o(t){return(0,n.Ay)({url:"/nonbidding/items/getItemsDevice",method:"get",params:t})}function s(t){return(0,n.Ay)({url:"/nonbidding/pro/selectQuotation",method:"get",params:t})}function u(t){return(0,n.Ay)({url:"/nonbidding/pro/selectCom",method:"get",params:{aid:t}})}function d(t){return(0,n.Ay)({url:"/nonbidding/pro",method:"put",data:t})}function g(t){return(0,n.Ay)({url:"/nonbidding/pro/list1",method:"get",params:t})}function c(t){return(0,n.Ay)({url:"/nonbidding/pro/addCom",method:"post",data:t,headers:{isRepeatSubmit:!0}})}function m(t){return(0,n.Ay)({url:"/basic/contract/list1",method:"get",params:t})}function p(t){return(0,n.Ay)({url:"/basic/contract/del1",method:"get",params:{eid:t}})}function f(t){return(0,n.Ay)({url:"/nonbidding/pro/delByGfId",method:"delete",params:{gfId:t}})}}}]);