(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bc926208"],{b97b:function(e,t,a){"use strict";a.d(t,"c",(function(){return n})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return o})),a.d(t,"d",(function(){return s}));var r=a("b775");function n(e){return Object(r["a"])({url:"/basic/monitor/list",method:"get",params:e})}function l(e){return Object(r["a"])({url:"/basic/monitor/"+e,method:"get"})}function o(e){return Object(r["a"])({url:"/basic/monitor",method:"post",data:e})}function s(e){return Object(r["a"])({url:"/basic/monitor",method:"put",data:e})}},b991:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"68px"}},[a("el-form-item",{attrs:{label:"合同名称",prop:"eHname"}},[a("el-input",{attrs:{placeholder:"请输入合同名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.eHname,callback:function(t){e.$set(e.queryParams,"eHname",t)},expression:"queryParams.eHname"}})],1),a("el-form-item",{attrs:{label:"供应商名称",prop:"hName","label-width":"100px"}},[a("el-input",{attrs:{placeholder:"请输入供应商名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.hName,callback:function(t){e.$set(e.queryParams,"hName",t)},expression:"queryParams.hName"}})],1),a("el-form-item",{attrs:{label:"风险项",prop:"rmItem"}},[a("el-select",{attrs:{placeholder:"请选择风险项"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.rmItem,callback:function(t){e.$set(e.queryParams,"rmItem",t)},expression:"queryParams.rmItem"}},e._l(e.rm_items,(function(e){return a("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),a("el-form-item",{attrs:{label:"风险处理状态",prop:"rmStatus","label-width":"110px"}},[a("el-select",{attrs:{placeholder:"请选择风险处理状态"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.rmStatus,callback:function(t){e.$set(e.queryParams,"rmStatus",t)},expression:"queryParams.rmStatus"}},e._l(e.rm_Status,(function(e){return a("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),a("el-row",{staticClass:"mb8",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasRole",rawName:"v-hasRole",value:["common","controller"],expression:"['common','controller']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增 ")])],1),a("right-toolbar",{attrs:{showSearch:e.showSearch},on:{"update:showSearch":function(t){e.showSearch=t},"update:show-search":function(t){e.showSearch=t},queryTable:e.getList}})],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.monitorList,stripe:""}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center"}}),a("el-table-column",{attrs:{label:"合同编号",align:"center",prop:"bsContract.eHcode"}}),a("el-table-column",{attrs:{label:"合同名称",align:"center",prop:"bsContract.eHname"}}),a("el-table-column",{attrs:{label:"供应商名称",align:"center",prop:"bsSupplier.hName"}}),a("el-table-column",{attrs:{label:"风险说明",align:"center",prop:"rmIllustrate"}}),a("el-table-column",{attrs:{label:"发生时间",align:"center",prop:"rmHappenDate",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.rmHappenDate,"{y}-{m}-{d}")))])]}}])}),a("el-table-column",{attrs:{label:"风险项",align:"center",prop:"rmItem"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==e.monitorList[t.$index].rmItem?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("合同履约点逾期风险 ")]):e._e(),2==e.monitorList[t.$index].rmItem?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("合同变更风险 ")]):e._e(),3==e.monitorList[t.$index].rmItem?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("收款时间点逾期风险 ")]):e._e(),4==e.monitorList[t.$index].rmItem?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("故意逃避监控风险 ")]):e._e(),5==e.monitorList[t.$index].rmItem?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("外部签约方异常风险 ")]):e._e(),6==e.monitorList[t.$index].rmItem?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("合同履约率风险 ")]):e._e()]}}])}),a("el-table-column",{attrs:{label:"风险处理状态",align:"center",prop:"rmStatus"},scopedSlots:e._u([{key:"default",fn:function(t){return[1==e.monitorList[t.$index].rmStatus?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("未处理 ")]):e._e(),2==e.monitorList[t.$index].rmStatus?a("el-tag",{attrs:{size:"small",type:"success"}},[e._v("已处理 ")]):e._e(),3==e.monitorList[t.$index].rmStatus?a("el-tag",{attrs:{size:"small",type:"info"}},[e._v("已忽略 ")]):e._e()]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"hasRole",rawName:"v-hasRole",value:["common","controller"],expression:"['common','controller']"}],attrs:{size:"small",type:"primary",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("修改 ")]),a("router-link",{attrs:{to:"riskHandling?rm_id="+t.row.rmId}},[a("el-button",{directives:[{name:"hasRole",rawName:"v-hasRole",value:["controller"],expression:"['controller']"}],staticStyle:{"margin-left":"10px"},attrs:{size:"small",icon:"el-icon-document-checked"}},[e._v("风险处理 ")])],1)]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{width:"30%",title:e.title,visible:e.open,"append-to-body":""},on:{"update:visible":function(t){e.open=t}}},[a("el-dialog",{attrs:{title:"选择合同",width:"50%",visible:e.innerVisible,"append-to-body":""},on:{"update:visible":function(t){e.innerVisible=t},close:function(t){e.innerVisible=!1}}},[a("el-table",{ref:"singleTable",staticStyle:{width:"100%"},attrs:{data:e.contractData,"highlight-current-row":""},on:{"current-change":e.handleCurrentChange}},[a("el-table-column",{attrs:{type:"index",width:"60"}}),a("el-table-column",{attrs:{property:"eHcode",label:"合同编号",width:"185"}}),a("el-table-column",{attrs:{property:"eHname",label:"合同名称",width:"185"}}),a("el-table-column",{attrs:{property:"bsSupplier.hName",label:"供应商名称"}})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total1>0,expression:"total1>0"}],attrs:{total:e.total1,page:e.contract.pageNum,limit:e.contract.pageSize},on:{"update:page":function(t){return e.$set(e.contract,"pageNum",t)},"update:limit":function(t){return e.$set(e.contract,"pageSize",t)},pagination:e.innerShow}})],1),a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"合同名称",prop:"eHname"}},[a("el-input",{attrs:{placeholder:"请选择合同"},on:{focus:e.innerShow},model:{value:e.contractName,callback:function(t){e.contractName=t},expression:"contractName"}})],1),a("el-form-item",{attrs:{label:"风险说明",prop:"rmIllustrate"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入风险说明"},model:{value:e.form.rmIllustrate,callback:function(t){e.$set(e.form,"rmIllustrate",t)},expression:"form.rmIllustrate"}})],1),a("el-form-item",{attrs:{label:"发生日期",prop:"rmHappenDate"}},[a("el-date-picker",{attrs:{clearable:"",type:"date","value-format":"yyyy-MM-dd",placeholder:"请选择发生日期"},model:{value:e.form.rmHappenDate,callback:function(t){e.$set(e.form,"rmHappenDate",t)},expression:"form.rmHappenDate"}})],1),a("el-form-item",{attrs:{label:"风险项",prop:"rmItem"}},[a("el-select",{attrs:{placeholder:"请选择风险项"},model:{value:e.form.rmItem,callback:function(t){e.$set(e.form,"rmItem",t)},expression:"form.rmItem"}},e._l(e.rm_items,(function(e){return a("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:Number(e.dictValue)}})})),1)],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},n=[],l=(a("b64b"),a("b97b")),o=a("b775");function s(e){return Object(o["a"])({url:"/basic/contract/list",method:"get",params:e})}a("c38a");var i={name:"Monitor",data:function(){return{contract:{eCancel:0,oHstatus:3,pageNum:1,pageSize:10},total1:0,contractData:[],innerVisible:!1,loading:!0,showSearch:!0,total:0,monitorList:[],rm_items:[],rm_Status:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,eHname:null,hName:null,rmItem:null,rmStatus:null},form:{},rules:{},contractName:null}},created:function(){var e=this;null!=sessionStorage.getItem("a1")&&sessionStorage.getItem("a2")&&(this.queryParams.pageNum=JSON.parse(sessionStorage.getItem("a1")),this.queryParams.pageSize=JSON.parse(sessionStorage.getItem("a2")),sessionStorage.removeItem("a1"),sessionStorage.removeItem("a2")),this.getList(),this.getDicts("bs_risk_monitoring_item").then((function(t){e.rm_items=t.data})),this.getDicts("bs_risk_monitoring_status").then((function(t){e.rm_Status=t.data}))},beforeRouteLeave:function(e,t,a){sessionStorage.setItem("a1",this.queryParams.pageNum),sessionStorage.setItem("a2",this.queryParams.pageSize),a(!0)},methods:{getList:function(){var e=this;this.loading=!0,console.log(this.queryParams),Object(l["c"])(this.queryParams).then((function(t){console.log(t),e.monitorList=t.rows,e.total=t.total,e.loading=!1}))},cancel:function(){this.open=!1,this.reset()},handleCurrentChange:function(e){console.log(e),this.contractName=e.eHname,this.form.eid=e.eid,this.innerVisible=!1},reset:function(){this.form={rmId:null,eid:null,rmIllustrate:null,rmHappenDate:null,rmItem:null,rmStatus:1},this.resetForm("form")},innerShow:function(){var e=this;s(this.contract).then((function(t){console.log(t),e.contractData=t.rows,e.total1=t.total})),this.innerVisible=!0},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleAdd:function(){this.contractName=null,this.reset(),this.open=!0,this.title="添加供应商风险监控"},handleUpdate:function(e){var t=this;this.reset();var a=e.rmId;Object(l["b"])(a).then((function(a){console.log(a),t.form=a.data,t.contractName=e.bsContract.eHname,t.open=!0,t.title="修改供应商风险监控"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(null==e.contractName||""==e.contractName||null==e.form.rmIllustrate||""==e.form.rmIllustrate||null==e.form.rmHappenDate||""==e.form.rmHappenDate||null==e.form.rmItem||""==e.form.rmItem?e.$message.error("信息不能为空"):null!=e.form.rmId?Object(l["d"])(e.form).then((function(t){e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})):Object(l["a"])(e.form).then((function(t){e.$modal.msgSuccess("新增成功"),e.open=!1,e.getList()})))}))}}},m=i,u=a("2877"),c=Object(u["a"])(m,r,n,!1,null,null,null);t["default"]=c.exports}}]);