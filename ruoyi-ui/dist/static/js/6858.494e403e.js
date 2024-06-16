"use strict";(self["webpackChunkruoyi"]=self["webpackChunkruoyi"]||[]).push([[6858],{96858:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",[a("el-row",{attrs:{gutter:15}},[1===t.change?a("el-form",{ref:"elForm",attrs:{model:t.formData,rules:t.rules,size:"medium","label-width":"70px"}},[a("el-col",{attrs:{span:23}},[a("el-row",{attrs:{type:"flex",justify:"start",align:"middle",gutter:30}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"项目编号",prop:"field101"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请输入项目编号",clearable:""},model:{value:t.formData.field101,callback:function(e){t.$set(t.formData,"field101",e)},expression:"formData.field101"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"项目名称",prop:"field102"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请输入项目名称",clearable:""},model:{value:t.formData.field102,callback:function(e){t.$set(t.formData,"field102",e)},expression:"formData.field102"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{size:"medium"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.query}},[t._v("查询")]),a("el-button",{on:{click:t.resetForm}},[t._v("重置")])],1)],1)],1)],1)],1):t._e(),2===t.change?a("el-form",{ref:"elForm1",attrs:{model:t.formData1,rules:t.rules,size:"medium","label-width":"70px"}},[a("el-col",{attrs:{span:23}},[a("el-row",{attrs:{type:"flex",justify:"start",align:"middle",gutter:30}},[a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"合同编号",prop:"field101"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请输入合同编号",clearable:""},model:{value:t.formData1.field101,callback:function(e){t.$set(t.formData1,"field101",e)},expression:"formData1.field101"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"合同名称",prop:"field102"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请输入合同名称",clearable:""},model:{value:t.formData1.field102,callback:function(e){t.$set(t.formData1,"field102",e)},expression:"formData1.field102"}})],1)],1),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{size:"medium"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.query1}},[t._v("查询")]),a("el-button",{on:{click:t.resetForm1}},[t._v("重置")])],1)],1)],1)],1)],1):t._e()],1)],1),a("div",{staticClass:"tcl"},[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"待创建",name:"first"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{stripe:"",data:t.contractList1}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center"}}),a("el-table-column",{attrs:{label:"项目编号",align:"center",prop:"sCode"}}),a("el-table-column",{attrs:{label:"项目名称",align:"center",prop:"sName"}}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:"add?sid="+e.row.sid}},[a("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-folder-add"}},[t._v("创建合同 ")])],1)]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total1>0,expression:"total1>0"}],attrs:{total:t.total1,page:t.queryParams1.pageNum,limit:t.queryParams1.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams1,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams1,"pageSize",e)},pagination:t.getList1}})],1),a("el-tab-pane",{attrs:{label:"签订中",name:"second"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{stripe:"",data:t.contractList2}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center"}}),a("el-table-column",{attrs:{label:"合同编号",align:"center",prop:"eHcode"}}),a("el-table-column",{attrs:{label:"合同名称",align:"center",prop:"eHname"}}),a("el-table-column",{attrs:{label:"创建人",align:"center",prop:"createBy"}}),a("el-table-column",{attrs:{label:"创建日期",align:"center",prop:"createTime"}}),a("el-table-column",{attrs:{label:"合同状态",align:"center",prop:"eStatus"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.eStatus?a("el-tag",[t._v("已通过")]):2===e.row.eStatus?a("el-tag",{attrs:{type:"info"}},[t._v("草稿")]):3===e.row.eStatus?a("el-tag",{attrs:{type:"warning"}},[t._v("待审核")]):4===e.row.eStatus?a("el-tag",{attrs:{type:"danger"}},[t._v("未通过")]):t._e()]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.eStatus?a("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-upload"},on:{click:function(a){return t.UploadHt(e.row.eid)}}},[t._v("上传签订合同 ")]):t._e(),a("router-link",{attrs:{to:"update?eid="+e.row.eid}},[2===e.row.eStatus||4===e.row.eStatus?a("el-button",{staticStyle:{"margin-right":"20px"},attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(t){}}},[t._v("编辑 ")]):t._e()],1),2===e.row.eStatus||4===e.row.eStatus?a("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(a){return t.delectHt(e.row.eid)}}},[t._v("删除 ")]):t._e(),a("router-link",{attrs:{to:"examine?eid="+e.row.eid}},[3===e.row.eStatus?a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(t){}}},[t._v("审核 ")]):t._e()],1)]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total2>0,expression:"total2>0"}],staticClass:"gg",attrs:{total:t.total2,page:t.queryParams2.pageNum,limit:t.queryParams2.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams2,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams2,"pageSize",e)},pagination:t.getList2}})],1),a("el-tab-pane",{attrs:{label:"已签订",name:"third"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{stripe:"",data:t.contractList3}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center"}}),a("el-table-column",{attrs:{label:"合同编号",align:"center",prop:"eHcode"}}),a("el-table-column",{attrs:{label:"合同名称",align:"center",prop:"eHname"}}),a("el-table-column",{attrs:{label:"创建人",align:"center",prop:"createBy"}}),a("el-table-column",{attrs:{label:"创建日期",align:"center",prop:"createTime"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.parseTime(e.row.createTime,"{y}-{m}-{d} {h}:{i}:{s}")))])]}}])},[t._v(" 4 ")]),a("el-table-column",{attrs:{label:"交付日期",align:"center",prop:"eDeliveryTime",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t.parseTime(e.row.eDeliveryTime,"{y}-{m}-{d} {h}:{i}:{s}")))])]}}])}),a("el-table-column",{attrs:{label:"状态",align:"center",prop:"eCancel"},scopedSlots:t._u([{key:"default",fn:function(e){return[0===e.row.eCancel?a("el-tag",[t._v("正常")]):1===e.row.eCancel?a("el-tag",{attrs:{type:"danger"}},[t._v("作废")]):t._e()]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:"details?eid="+e.row.eid}},[a("el-button",{staticStyle:{"margin-right":"20px"},attrs:{size:"mini",type:"text",icon:"el-icon-edit"}},[t._v("查看 ")])],1),0===e.row.eCancel?a("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(a){return t.cancel(e.row)}}},[t._v("作废 ")]):t._e()]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total3>0,expression:"total3>0"}],attrs:{total:t.total3,page:t.queryParams3.pageNum,limit:t.queryParams3.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams3,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams3,"pageSize",e)},pagination:t.getList3}})],1)],1)],1)])},r=[],i=a(35720);function l(t){return(0,i.Ay)({url:"/bidding/tender/NoEidTenderList",method:"get",params:t})}function o(t){return(0,i.Ay)({url:"/basic/contract/list2",method:"get",params:t})}var s=a(21509),u=(a(30855),{name:"Contract",data(){return{change:1,activeName:"first",loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total1:0,total2:0,total3:0,contractList1:[],contractList2:[],contractList3:[],title:"",open:!1,queryParams1:{pageNum:1,pageSize:10,sid:null,sCode:null,sName:null,sProjectState:7},queryParams2:{pageNum:1,pageSize:10,hid:null,eHcode:null,eHname:null,eStatus:null,eDeliveryTime:null,oHstatus:2,createBy:null,createTime:null,sProjectState:7},queryParams3:{pageNum:1,pageSize:10,hid:null,eHcode:null,eHname:null,eStatus:null,eDeliveryTime:null,oHstatus:3,createBy:null,createTime:null,eCancel:null,sProjectState:7},formData:{field101:null,field102:void 0},formData1:{field101:null,field102:void 0},rules:{field101:[],field102:[]}}},created(){this.getList1()},methods:{cancel(t){this.$confirm("确定使该合同作废?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{(0,s.Fz)({eid:t.eid,gid:t.gid}).then((t=>{console.log(t),"修改成功"===t.msg?(this.activeName="first",this.getList3(),this.$message({type:"info",message:"已作废"})):this.$message({type:"info",message:"修改失败"})}))})).catch((()=>{this.$message({type:"warning",message:"已取消"})}))},delectHt(t){this.$confirm("确定删除该合同?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{(0,s.OO)(t).then((t=>{console.log(t),"删除成功"===t.msg?(this.activeName="third",this.$message({message:"删除成功",type:"success"}),this.activeName="first",this.getList1()):this.$message.error("删除异常")}))})).catch((()=>{this.$message({type:"info",message:"已取消"})}))},UploadHt(t){(0,s.HH)({oHstatus:3,eid:t}).then((t=>{console.log(t),t.data>0?(this.activeName="third",this.$message({message:"上传成功",type:"success"}),this.getList3()):this.$message.error("上传异常")}))},handleClick(t,e){console.log("切换到标签页",t.name),"first"===t.name?(this.change=1,this.getList1(),console.log("执行标签页1的查询操作")):"second"===t.name?(this.change=2,this.getList2(),console.log("执行标签页2的查询操作")):(this.change=2,this.getList3(),console.log("执行标签页3的查询操作"))},query(){console.log("执行模糊查询"),this.queryParams1.sCode=this.formData.field101,this.queryParams1.sName=this.formData.field102,this.queryParams1.pageNum=1,this.getList1()},query1(){console.log("执行模糊查询"),this.queryParams2.eHcode=this.formData1.field101,this.queryParams2.eHname=this.formData1.field102,this.queryParams3.eHcode=this.formData1.field101,this.queryParams3.eHname=this.formData1.field102,this.queryParams2.pageNum=1,this.queryParams3.pageNum=1,this.getList2(),this.getList3()},resetForm(){this.$refs.elForm.resetFields()},resetForm1(){this.$refs.elForm1.resetFields()},getList1(){this.loading=!0,l(this.queryParams1).then((t=>{this.contractList1=t.rows,this.total1=t.total,this.loading=!1}))},getList2(){this.loading=!0,o(this.queryParams2).then((t=>{console.log(t.rows),this.contractList2=t.rows,this.total2=t.total,this.loading=!1}))},getList3(){this.loading=!0,o(this.queryParams3).then((t=>{console.log(t.rows),this.contractList3=t.rows,this.total3=t.total,this.loading=!1}))}}}),c=u,m=a(81656),d=(0,m.A)(c,n,r,!1,null,null,null),p=d.exports},21509:function(t,e,a){a.d(e,{BZ:function(){return l},Bv:function(){return h},D3:function(){return S},Fz:function(){return v},H6:function(){return f},H9:function(){return m},HH:function(){return y},JP:function(){return _},Jo:function(){return x},LJ:function(){return i},Mt:function(){return w},Mv:function(){return p},OO:function(){return b},PF:function(){return u},an:function(){return k},n:function(){return r},px:function(){return A},qB:function(){return s},so:function(){return o},tb:function(){return c},u:function(){return d},yp:function(){return g}});var n=a(35720);function r(t){return(0,n.Ay)({url:"/ppm/device/list",method:"get",params:t})}function i(t){return(0,n.Ay)({url:"/ppm/items/selectItemsDevice",method:"get",params:t})}function l(t){return(0,n.Ay)({url:"/basic/management",method:"post",data:t})}function o(t){return(0,n.Ay)({url:"/basic/management/list",method:"get",params:t})}function s(t){return(0,n.Ay)({url:"/basic/contract",method:"post",data:t})}function u(t){return(0,n.Ay)({url:"/basic/contract/"+t,method:"get"})}function c(t){return(0,n.Ay)({url:"/basic/inventory/list",method:"get",params:t})}function m(t){return(0,n.Ay)({url:"/basic/payment/list",method:"get",params:t})}function d(t){return(0,n.Ay)({url:"/basic/sign/list1",method:"get",params:t})}function p(t){return(0,n.Ay)({url:"/basic/management/"+t,method:"get"})}function f(t){return(0,n.Ay)({url:"/basic/management",method:"put",data:t})}function g(t){return(0,n.Ay)({url:"/basic/contract",method:"put",data:t})}function h(t){return(0,n.Ay)({url:"/basic/contract/selectCom",method:"get",params:{eid:t}})}function y(t){return(0,n.Ay)({url:"/basic/contract/updateoHstatus",method:"put",data:t})}function b(t){return(0,n.Ay)({url:"/basic/contract/del",method:"get",params:{eid:t}})}function v(t){return(0,n.Ay)({url:"/basic/contract/HtCancel",method:"put",data:t})}function w(t){return(0,n.Ay)({url:"/basic/management/XyCancel",method:"get",params:{oid:t}})}function _(t){return(0,n.Ay)({url:"/ppm/framework/XyCancel",method:"get",params:{oid:t}})}function S(t){return(0,n.Ay)({url:"/basic/management/delXy",method:"get",params:{oid:t}})}function A(t){return(0,n.Ay)({url:"/ppm/framework/upOidbyOid",method:"put",data:t})}function x(t){return(0,n.Ay)({url:"/basic/contract/noTender",method:"post",data:t})}function k(t){return(0,n.Ay)({url:"/bidding/candidate/getSuppHid",method:"get",params:{sid:t}})}},30855:function(t,e,a){a.d(e,{Bj:function(){return f},Hs:function(){return m},Jp:function(){return s},Mc:function(){return c},Qf:function(){return u},SW:function(){return p},U7:function(){return i},UA:function(){return d},dd:function(){return o},iU:function(){return r},sS:function(){return l},sZ:function(){return g}});var n=a(35720);function r(t){return(0,n.Ay)({url:"/nonbidding/pro/list",method:"get",params:t})}function i(t){return(0,n.Ay)({url:"/nonbidding/plan/"+t,method:"get"})}function l(t){return(0,n.Ay)({url:"/nonbidding/pro/"+t,method:"get"})}function o(t){return(0,n.Ay)({url:"/nonbidding/items/getItemsDevice",method:"get",params:t})}function s(t){return(0,n.Ay)({url:"/nonbidding/pro/selectQuotation",method:"get",params:t})}function u(t){return(0,n.Ay)({url:"/nonbidding/pro/selectCom",method:"get",params:{aid:t}})}function c(t){return(0,n.Ay)({url:"/nonbidding/pro",method:"put",data:t})}function m(t){return(0,n.Ay)({url:"/nonbidding/pro/list1",method:"get",params:t})}function d(t){return(0,n.Ay)({url:"/nonbidding/pro/addCom",method:"post",data:t,headers:{isRepeatSubmit:!0}})}function p(t){return(0,n.Ay)({url:"/basic/contract/list1",method:"get",params:t})}function f(t){return(0,n.Ay)({url:"/basic/contract/del1",method:"get",params:{eid:t}})}function g(t){return(0,n.Ay)({url:"/nonbidding/pro/delByGfId",method:"delete",params:{gfId:t}})}}}]);