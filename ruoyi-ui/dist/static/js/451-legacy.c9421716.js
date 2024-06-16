"use strict";(self["webpackChunkruoyi"]=self["webpackChunkruoyi"]||[]).push([[451],{90451:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{padding:"30px 80px"}},[a("div",{staticClass:"cl"},[a("el-descriptions",{staticClass:"cl",attrs:{title:"| 协议基本信息",column:2,size:t.size,"label-style":t.labelStyle,border:""}},[a("el-descriptions-item",{attrs:{span:2}},[a("template",{slot:"label"},[t._v(" 协议名称 ")]),[a("el-input",{attrs:{placeholder:"请输入协议名称"},model:{value:t.queryParams.oName,callback:function(e){t.$set(t.queryParams,"oName",e)},expression:"queryParams.oName"}})]],2),a("el-descriptions-item",[a("template",{slot:"label"},[t._v(" 协议编号 ")]),[a("el-input",{attrs:{placeholder:"系统自动生成",disabled:""},model:{value:t.queryParams.oCode,callback:function(e){t.$set(t.queryParams,"oCode",e)},expression:"queryParams.oCode"}})]],2),a("el-descriptions-item",[a("template",{slot:"label"},[t._v(" 协议类型 ")]),[a("el-input",{attrs:{readonly:""},model:{value:t.queryParams.oType,callback:function(e){t.$set(t.queryParams,"oType",e)},expression:"queryParams.oType"}})]],2),a("el-descriptions-item",{attrs:{span:2}},[a("template",{slot:"label"},[t._v(" 协议说明 ")]),a("template",{slot:"default"},[a("el-input",{staticClass:"cInput",attrs:{type:"textarea",rows:3,clearable:""},model:{value:t.queryParams.oDescribe,callback:function(e){t.$set(t.queryParams,"oDescribe",e)},expression:"queryParams.oDescribe"}})],1)],2),a("el-descriptions-item",[a("template",{slot:"label"},[t._v(" 签署主体 ")]),a("template",{slot:"default"},[a("el-input",{staticClass:"cll",attrs:{readonly:""},model:{value:t.queryParams.oSubject,callback:function(e){t.$set(t.queryParams,"oSubject",e)},expression:"queryParams.oSubject"}})],1)],2),a("el-descriptions-item",[a("template",{slot:"label"},[t._v(" 相对方 ")]),a("template",{slot:"default"},[a("el-input",{staticClass:"cll",attrs:{readonly:""},model:{value:t.queryParams.hName,callback:function(e){t.$set(t.queryParams,"hName",e)},expression:"queryParams.hName"}})],1)],2),a("el-descriptions-item",[a("template",{slot:"label"},[t._v(" 签署日期 ")]),[a("el-date-picker",{staticClass:"cInput",attrs:{type:"date"},model:{value:t.queryParams.oStartdate,callback:function(e){t.$set(t.queryParams,"oStartdate",e)},expression:"queryParams.oStartdate"}})]],2),a("el-descriptions-item",[a("template",{slot:"label"},[t._v(" 失效日期 ")]),[a("el-date-picker",{staticClass:"cInput",attrs:{type:"date"},model:{value:t.queryParams.oEnddate,callback:function(e){t.$set(t.queryParams,"oEnddate",e)},expression:"queryParams.oEnddate"}})]],2),a("el-descriptions-item",[a("template",{slot:"label"},[t._v(" 协议文件 ")]),[a("el-upload",{ref:"up1",staticClass:"upload-demo",attrs:{action:t.url,"before-remove":t.beforeRemove,"auto-upload":!1,limit:1,"on-exceed":t.handleExceed,"on-success":t.success,"file-list":t.fileList,"on-change":t.onchange1}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传框架协议文件")])],1)]],2)],1),a("div",{staticClass:"cl1"},[t._m(0),a("el-button",{on:{click:t.lAddRow}},[t._v("新增")]),a("el-button",{attrs:{disabled:0===t.lSelectedRows.length},on:{click:t.lDeleteRows}},[t._v("删除")]),a("el-button",{attrs:{disabled:0===t.lSelectedRows.length},on:{click:t.lCopyRows}},[t._v("复制")]),a("el-table",{style:{marginTop:"10px"},attrs:{data:t.lTableData,"row-key":function(t){return t.id},border:"",stripe:""},on:{"selection-change":t.lHandleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"序号",prop:"id",width:"60"}}),a("el-table-column",{attrs:{label:"产品名称",prop:"inName",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inName,callback:function(a){t.$set(e.row,"inName",a)},expression:"scope.row.inName"}},[a("i",{staticClass:"el-icon-search",staticStyle:{"margin-top":"10px"},attrs:{slot:"suffix"},on:{click:function(a){return t.openCp(e.row)}},slot:"suffix"})]),a("el-dialog",{attrs:{title:"产品名称",visible:t.cpDialog},on:{"update:visible":function(e){t.cpDialog=e}}},[a("el-table",{ref:"singleTable",staticStyle:{width:"100%"},attrs:{data:t.deviceList,"highlight-current-row":""},on:{"row-click":t.handleRowClick}},[a("el-table-column",{attrs:{prop:"tName",label:"产品名称",width:"140"}}),a("el-table-column",{attrs:{prop:"tid",label:"产品编号",width:"130"}}),a("el-table-column",{attrs:{prop:"tModel",label:"规格型号",width:"150"}}),a("el-table-column",{attrs:{prop:"tUnit",label:"单位",width:"85"}}),a("el-table-column",{attrs:{prop:"tPrice",label:"单价",width:"120"}}),a("el-table-column",{attrs:{prop:"shui",label:"税点",width:"100"}})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.queryParams.pageNum,limit:t.queryParams.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.selectBdList}})],1)]}}])}),a("el-table-column",{attrs:{label:"产品编码",prop:"tid",width:"165"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.tid,callback:function(a){t.$set(e.row,"tid",a)},expression:"scope.row.tid"}})]}}])}),a("el-table-column",{attrs:{label:"规格型号",prop:"inModel",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inModel,callback:function(a){t.$set(e.row,"inModel",a)},expression:"scope.row.inModel"}})]}}])}),a("el-table-column",{attrs:{label:"单位",prop:"inUnit",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inUnit,callback:function(a){t.$set(e.row,"inUnit",a)},expression:"scope.row.inUnit"}})]}}])}),a("el-table-column",{attrs:{label:"含税单价",prop:"inVat",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inVat,callback:function(a){t.$set(e.row,"inVat",a)},expression:"scope.row.inVat"}})]}}])}),a("el-table-column",{attrs:{label:"数量",prop:"inCount",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input-number",{staticStyle:{width:"120px"},attrs:{min:1,precision:0,"controls-position":"right"},on:{blur:function(a){return t.spCountBlur(e.row)},change:function(a){return t.spCountChange(e.row)}},model:{value:e.row.inCount,callback:function(a){t.$set(e.row,"inCount",a)},expression:"scope.row.inCount"}})]}}])}),a("el-table-column",{attrs:{label:"小计",prop:"inSubtotal",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inSubtotal,callback:function(a){t.$set(e.row,"inSubtotal",a)},expression:"scope.row.inSubtotal"}})]}}])})],1),a("div",{style:{textAlign:"right"}},[a("span",{style:{marginRight:"100px"}},[t._v("总价:")]),a("span",{style:{fontWeight:"700"}},[t._v(t._s(t.oTotalprice.toFixed(2)))])])],1)],1),a("el-button",{attrs:{size:"medium"},on:{click:t.back1}},[t._v("返回")]),a("el-button",{attrs:{type:"primary"},on:{click:t.addFa}},[t._v("创建框架协议")])],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",[a("strong",[t._v("| 设备信息")])])}],o=a(12127),i=a(59258),r=(a(80115),a(17),a(47746),a(59581),a(28743),a(68763),a(98741),a(34867),a(5086),a(43148),a(58379),a(21509)),s={name:"AddFa",data:function(){return{url:"/prod-api/basic/supplier/upload1",oTotalprice:0,size:"0",labelStyle:{width:"180px",textAlign:"center"},jhId:this.$route.query.jhId,queryParams:{tid:null,oCode:null,oName:null,oSubject:"鸿鹄科技有限公司",hid:null,hName:null,oStartdate:null,oEnddate:null,oFile:null,oType:"采购框架协议",oHstatus:1,oDescribe:null,oOpinion:null},fileList:[],lSelectedRows:[],lTableData:[],cpDialog:!1,deviceList:[],total:1,lTableColumns:[]}},created:function(){this.hh()},methods:{success:function(t){console.log(111),this.queryParams.oFile=t.data.url,console.log("打印up1-------------------------"),console.log(this.queryParams.oFile),this.submitNextUpload()},handleExceed:function(t,e){this.$message.warning("当前限制选择 1 个文件，本次选择了 ".concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))},beforeRemove:function(t,e){return this.$confirm("确定移除 ".concat(t.name,"？"))},onchange1:function(t,e){this.fileList=e,console.log(this.fileList,"fileList onchange"),0===t.size&&(this.$message.error("选择的文件不能为空，请重新选择！"),this.fileList.splice(this.fileList.indexOf(t[0]),1))},hh:function(){var t=this;(0,r.LJ)({jhId:this.jhId}).then((function(e){console.log(e,"er"),t.queryParams.hName=e.rows[0].ppmFramePlan.bsSupplier.hName,t.queryParams.hid=e.rows[0].ppmFramePlan.bsSupplier.hid,t.queryParams.oName=e.rows[0].ppmFramePlan.jhName+"协议",t.queryParams.jhId=t.jhId,e.rows.forEach((function(e,a){t.lTableData.push({id:a+1,inName:e.ppmDevice.tName,inModel:e.ppmDevice.tModel,inVat:(1.13*e.ppmDevice.tPrice).toFixed(2),inUnit:e.ppmDevice.tUnit,inSubtotal:(e.vCount*e.ppmDevice.tPrice*1.13).toFixed(2),tid:e.tid,inCount:e.vCount}),t.oTotalprice+=e.vCount*e.ppmDevice.tPrice*1.13.toFixed(2)}))}))},addFa:function(){this.submitNextUpload()},add:function(){var t=this;this.queryParams["oTotalprice"]=parseFloat(this.oTotalprice).toFixed(2),this.queryParams["bsInventoryList"]=(0,i.A)(this.lTableData).filter((function(t){return delete t.id,null!=t.tid})),(0,r.BZ)(this.queryParams).then((function(e){if(console.log(e),"操作成功"===e.msg)return(0,r.px)({oid:e.data.frameManagement.oid,jhId:e.data.frameManagement.jhId});t.$message.error("添加失败")})).then((function(e){console.log("打印二------------------"),console.log(e),console.log("打印二------------------"),"修改成功"===e.msg?(t.$message.success("添加成功"),t.$router.push("/contract/fam")):t.$message.error("修改失败")}))},submitNextUpload:function(){this.fileList.length>0&&null==this.queryParams.oFile?(console.log("打印提交1-------------------------"),this.$refs.up1.submit()):(console.log("打印提交2-------------------------"),this.add())},back1:function(){this.$router.back()},spCountBlur:function(t){null==t.inVat&&(t.inVat=0),t.inSubtotal=(t.inCount*t.inVat).toFixed(2),this.lCalculateTotalSubtotal()},spCountChange:function(t){null==t.inVat&&(t.inVat=0),t.inSubtotal=(t.inCount*t.inVat).toFixed(2),this.lCalculateTotalSubtotal()},openCp:function(t){this.selectRow=t,this.cpDialog=!0,this.selectBdList()},selectBdList:function(){var t=this;(0,r.n)(this.queryParams).then((function(e){console.log(e),t.deviceList=e.rows,t.total=e.total}))},handleRowClick:function(t){this.selectRow.inName=t.tName,this.selectRow.tid=t.tid,this.selectRow.inModel=t.tModel,this.selectRow.inUnit=t.tUnit,this.selectRow.inVat=(1.13*t.tPrice).toFixed(2),this.selectRow.inCount=1,this.selectRow.inSubtotal=(this.selectRow.inCount*this.selectRow.inVat).toFixed(2),this.cpDialog=!1,this.lCalculateTotalSubtotal()},lAddRow:function(){var t={};this.lTableColumns.forEach((function(e){t[e.prop]=""})),t.id=this.lTableData.length+1,t.inVat=(0).toFixed(2),t.inSubtotal=(0).toFixed(2),t.inCount=1,this.lTableData.push(t)},lDeleteRows:function(){var t=this;this.$confirm("确定删除选中的行吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.lTableData=t.lTableData.filter((function(e){return!t.lSelectedRows.includes(e)})),t.lSelectedRows=[],t.lUpdateRowIds(),t.lCalculateTotalSubtotal(),t.$message({type:"success",message:"删除成功!"})})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},lCopyRows:function(){var t=this,e=this.lSelectedRows.map((function(t){return(0,o.A)({},t)}));e.forEach((function(e){e.id=t.lTableData.reduce((function(t,e){return Math.max(e.id,t)}),0)+1,t.lTableData.push(e)})),this.lCalculateTotalSubtotal()},lUpdateRowIds:function(){this.lTableData.forEach((function(t,e){t.id=e+1}))},lHandleSelectionChange:function(t){this.lSelectedRows=t},lCalculateTotalSubtotal:function(){this.oTotalprice=this.lTableData.reduce((function(t,e){var a=e.inSubtotal?parseFloat(e.inSubtotal):0;return t+a}),0)}}},u=s,c=a(81656),d=(0,c.A)(u,n,l,!1,null,"a52c9c60",null),p=d.exports},21509:function(t,e,a){a.d(e,{BZ:function(){return i},Bv:function(){return b},D3:function(){return x},Fz:function(){return w},H6:function(){return f},H9:function(){return d},HH:function(){return y},JP:function(){return C},Jo:function(){return P},LJ:function(){return o},Mt:function(){return v},Mv:function(){return m},OO:function(){return g},PF:function(){return u},an:function(){return k},n:function(){return l},px:function(){return S},qB:function(){return s},so:function(){return r},tb:function(){return c},u:function(){return p},yp:function(){return h}});var n=a(35720);function l(t){return(0,n.Ay)({url:"/ppm/device/list",method:"get",params:t})}function o(t){return(0,n.Ay)({url:"/ppm/items/selectItemsDevice",method:"get",params:t})}function i(t){return(0,n.Ay)({url:"/basic/management",method:"post",data:t})}function r(t){return(0,n.Ay)({url:"/basic/management/list",method:"get",params:t})}function s(t){return(0,n.Ay)({url:"/basic/contract",method:"post",data:t})}function u(t){return(0,n.Ay)({url:"/basic/contract/"+t,method:"get"})}function c(t){return(0,n.Ay)({url:"/basic/inventory/list",method:"get",params:t})}function d(t){return(0,n.Ay)({url:"/basic/payment/list",method:"get",params:t})}function p(t){return(0,n.Ay)({url:"/basic/sign/list1",method:"get",params:t})}function m(t){return(0,n.Ay)({url:"/basic/management/"+t,method:"get"})}function f(t){return(0,n.Ay)({url:"/basic/management",method:"put",data:t})}function h(t){return(0,n.Ay)({url:"/basic/contract",method:"put",data:t})}function b(t){return(0,n.Ay)({url:"/basic/contract/selectCom",method:"get",params:{eid:t}})}function y(t){return(0,n.Ay)({url:"/basic/contract/updateoHstatus",method:"put",data:t})}function g(t){return(0,n.Ay)({url:"/basic/contract/del",method:"get",params:{eid:t}})}function w(t){return(0,n.Ay)({url:"/basic/contract/HtCancel",method:"put",data:t})}function v(t){return(0,n.Ay)({url:"/basic/management/XyCancel",method:"get",params:{oid:t}})}function C(t){return(0,n.Ay)({url:"/ppm/framework/XyCancel",method:"get",params:{oid:t}})}function x(t){return(0,n.Ay)({url:"/basic/management/delXy",method:"get",params:{oid:t}})}function S(t){return(0,n.Ay)({url:"/ppm/framework/upOidbyOid",method:"put",data:t})}function P(t){return(0,n.Ay)({url:"/basic/contract/noTender",method:"post",data:t})}function k(t){return(0,n.Ay)({url:"/bidding/candidate/getSuppHid",method:"get",params:{sid:t}})}}}]);