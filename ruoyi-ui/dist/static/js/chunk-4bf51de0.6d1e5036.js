(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bf51de0"],{"2aff":function(t,e,a){"use strict";a("5e76")},"4c53":function(t,e,a){"use strict";var n=a("23e7"),o=a("857a"),l=a("af03");n({target:"String",proto:!0,forced:l("sub")},{sub:function(){return o(this,"sub","","")}})},"5e76":function(t,e,a){},7456:function(t,e,a){"use strict";a.d(e,"m",(function(){return o})),a.d(e,"q",(function(){return l})),a.d(e,"f",(function(){return i})),a.d(e,"o",(function(){return s})),a.d(e,"e",(function(){return r})),a.d(e,"k",(function(){return u})),a.d(e,"n",(function(){return c})),a.d(e,"p",(function(){return d})),a.d(e,"b",(function(){return p})),a.d(e,"l",(function(){return m})),a.d(e,"u",(function(){return f})),a.d(e,"t",(function(){return b})),a.d(e,"j",(function(){return h})),a.d(e,"v",(function(){return g})),a.d(e,"h",(function(){return y})),a.d(e,"a",(function(){return w})),a.d(e,"c",(function(){return v})),a.d(e,"d",(function(){return x})),a.d(e,"i",(function(){return S})),a.d(e,"s",(function(){return C})),a.d(e,"g",(function(){return P})),a.d(e,"r",(function(){return q}));var n=a("b775");function o(t){return Object(n["a"])({url:"/ppm/device/list",method:"get",params:t})}function l(t){return Object(n["a"])({url:"/ppm/items/selectItemsDevice",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/basic/management",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/basic/management/list",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/basic/contract",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/basic/contract/"+t,method:"get"})}function c(t){return Object(n["a"])({url:"/basic/inventory/list",method:"get",params:t})}function d(t){return Object(n["a"])({url:"/basic/payment/list",method:"get",params:t})}function p(t){return Object(n["a"])({url:"/basic/sign/list1",method:"get",params:t})}function m(t){return Object(n["a"])({url:"/basic/management/"+t,method:"get"})}function f(t){return Object(n["a"])({url:"/basic/management",method:"put",data:t})}function b(t){return Object(n["a"])({url:"/basic/contract",method:"put",data:t})}function h(t){return Object(n["a"])({url:"/basic/contract/selectCom",method:"get",params:{eid:t}})}function g(t){return Object(n["a"])({url:"/basic/contract/updateoHstatus",method:"put",data:t})}function y(t){return Object(n["a"])({url:"/basic/contract/del",method:"get",params:{eid:t}})}function w(t){return Object(n["a"])({url:"/basic/contract/HtCancel",method:"put",data:t})}function v(t){return Object(n["a"])({url:"/basic/management/XyCancel",method:"get",params:{oid:t}})}function x(t){return Object(n["a"])({url:"/ppm/framework/XyCancel",method:"get",params:{oid:t}})}function S(t){return Object(n["a"])({url:"/basic/management/delXy",method:"get",params:{oid:t}})}function C(t){return Object(n["a"])({url:"/ppm/framework/upOidbyOid",method:"put",data:t})}function P(t){return Object(n["a"])({url:"/basic/contract/noTender",method:"post",data:t})}function q(t){return Object(n["a"])({url:"/bidding/candidate/getSuppHid",method:"get",params:{sid:t}})}},"7de2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",staticStyle:{padding:"30px 80px"}},[a("div",{staticClass:"cl"},[a("el-descriptions",{staticClass:"cl",attrs:{title:"| 协议基本信息",column:2,size:t.size,"label-style":t.labelStyle,border:""}},[a("el-descriptions-item",{attrs:{span:2}},[a("template",{slot:"label"},[t._v(" 协议名称 ")]),[a("el-input",{attrs:{placeholder:"请输入协议名称",readonly:""},model:{value:t.queryParams.oName,callback:function(e){t.$set(t.queryParams,"oName",e)},expression:"queryParams.oName"}})]],2),a("el-descriptions-item",[a("template",{slot:"label"},[t._v(" 协议编号 ")]),[a("el-input",{attrs:{placeholder:"系统自动生成",disabled:""},model:{value:t.queryParams.oCode,callback:function(e){t.$set(t.queryParams,"oCode",e)},expression:"queryParams.oCode"}})]],2),a("el-descriptions-item",[a("template",{slot:"label"},[t._v(" 协议类型 ")]),[a("el-input",{attrs:{readonly:""},model:{value:t.queryParams.oType,callback:function(e){t.$set(t.queryParams,"oType",e)},expression:"queryParams.oType"}})]],2),a("el-descriptions-item",{attrs:{span:2}},[a("template",{slot:"label"},[t._v(" 协议说明 ")]),a("template",{slot:"default"},[a("el-input",{staticClass:"cInput",attrs:{type:"textarea",rows:3,clearable:"",readonly:""},model:{value:t.queryParams.oDescribe,callback:function(e){t.$set(t.queryParams,"oDescribe",e)},expression:"queryParams.oDescribe"}})],1)],2),a("el-descriptions-item",[a("template",{slot:"label"},[t._v(" 签署主体 ")]),a("template",{slot:"default"},[a("el-input",{staticClass:"cll",attrs:{readonly:""},model:{value:t.queryParams.oSubject,callback:function(e){t.$set(t.queryParams,"oSubject",e)},expression:"queryParams.oSubject"}})],1)],2),a("el-descriptions-item",[a("template",{slot:"label"},[t._v(" 相对方 ")]),a("template",{slot:"default"},[a("el-input",{staticClass:"cll",attrs:{readonly:""},model:{value:t.queryParams.hName,callback:function(e){t.$set(t.queryParams,"hName",e)},expression:"queryParams.hName"}})],1)],2),a("el-descriptions-item",[a("template",{slot:"label"},[t._v(" 签署日期 ")]),[a("el-date-picker",{staticClass:"cInput",attrs:{type:"date",readonly:""},model:{value:t.queryParams.oStartdate,callback:function(e){t.$set(t.queryParams,"oStartdate",e)},expression:"queryParams.oStartdate"}})]],2),a("el-descriptions-item",[a("template",{slot:"label"},[t._v(" 失效日期 ")]),[a("el-date-picker",{staticClass:"cInput",attrs:{type:"date",readonly:""},model:{value:t.queryParams.oEnddate,callback:function(e){t.$set(t.queryParams,"oEnddate",e)},expression:"queryParams.oEnddate"}})]],2),a("el-descriptions-item",[a("template",{slot:"label"},[t._v(" 协议文件 ")]),[a("el-upload",{ref:"up1",staticClass:"upload-demo",attrs:{action:t.url,"on-preview":t.handlePreview,"before-remove":t.beforeRemove,"auto-upload":!1,limit:1,"on-exceed":t.handleExceed,"on-success":t.success,"file-list":t.fileList,"on-change":t.onchange1,disabled:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传框架协议文件")])],1)]],2)],1),a("div",{staticClass:"cl1"},[t._m(0),a("el-table",{style:{marginTop:"10px"},attrs:{data:t.lTableData,"row-key":function(t){return t.id},border:"",stripe:""},on:{"selection-change":t.lHandleSelectionChange}},[a("el-table-column",{attrs:{label:"序号",prop:"id",width:"60"}}),a("el-table-column",{attrs:{label:"产品名称",prop:"inName",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inName,callback:function(a){t.$set(e.row,"inName",a)},expression:"scope.row.inName"}},[a("i",{staticClass:"el-icon-search",staticStyle:{"margin-top":"10px"},attrs:{slot:"suffix"},on:{click:function(t){}},slot:"suffix"})]),a("el-dialog",{attrs:{title:"产品名称",visible:t.cpDialog},on:{"update:visible":function(e){t.cpDialog=e}}},[a("el-table",{ref:"singleTable",staticStyle:{width:"100%"},attrs:{data:t.deviceList,"highlight-current-row":""},on:{"row-click":t.handleRowClick}},[a("el-table-column",{attrs:{prop:"tName",label:"产品名称",width:"140"}}),a("el-table-column",{attrs:{prop:"tid",label:"产品编号",width:"130"}}),a("el-table-column",{attrs:{prop:"tModel",label:"规格型号",width:"150"}}),a("el-table-column",{attrs:{prop:"tUnit",label:"单位",width:"85"}}),a("el-table-column",{attrs:{prop:"tPrice",label:"单价",width:"120"}}),a("el-table-column",{attrs:{prop:"shui",label:"税点",width:"100"}})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.queryParams.pageNum,limit:t.queryParams.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.selectBdList}})],1)]}}])}),a("el-table-column",{attrs:{label:"产品编码",prop:"tid",width:"165"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.tid,callback:function(a){t.$set(e.row,"tid",a)},expression:"scope.row.tid"}})]}}])}),a("el-table-column",{attrs:{label:"规格型号",prop:"inModel",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inModel,callback:function(a){t.$set(e.row,"inModel",a)},expression:"scope.row.inModel"}})]}}])}),a("el-table-column",{attrs:{label:"单位",prop:"inUnit",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inUnit,callback:function(a){t.$set(e.row,"inUnit",a)},expression:"scope.row.inUnit"}})]}}])}),a("el-table-column",{attrs:{label:"含税单价",prop:"inVat",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inVat,callback:function(a){t.$set(e.row,"inVat",a)},expression:"scope.row.inVat"}})]}}])}),a("el-table-column",{attrs:{label:"数量",prop:"inCount",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input-number",{staticStyle:{width:"120px"},attrs:{min:1,precision:0,"controls-position":"right"},on:{blur:function(a){return t.spCountBlur(e.row)},change:function(a){return t.spCountChange(e.row)}},model:{value:e.row.inCount,callback:function(a){t.$set(e.row,"inCount",a)},expression:"scope.row.inCount"}})]}}])}),a("el-table-column",{attrs:{label:"小计",prop:"inSubtotal"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inSubtotal,callback:function(a){t.$set(e.row,"inSubtotal",a)},expression:"scope.row.inSubtotal"}})]}}])})],1),a("div",{style:{textAlign:"right"}},[a("span",{style:{marginRight:"100px"}},[t._v("总价:")]),a("span",{style:{fontWeight:"700"}},[t._v(t._s(parseFloat(t.oTotalprice).toFixed(2)))])])],1)],1),2===this.queryParams.oHstatus?a("div",[t._m(1),a("el-form",{ref:"elForm",attrs:{model:t.sub,rules:t.rules,size:"medium","label-width":"180px","label-position":"left"}},[a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"space-between",align:"top",gutter:15}},[a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"",prop:"oOpinion"}},[a("el-input",{staticClass:"cInput",attrs:{type:"textarea",rows:4,clearable:""},model:{value:t.sub.oOpinion,callback:function(e){t.$set(t.sub,"oOpinion",e)},expression:"sub.oOpinion"}})],1)],1)],1)],1):t._e(),a("el-button",{attrs:{size:"medium"},on:{click:t.back1}},[t._v("返回")]),2===this.queryParams.oHstatus?a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:t.updateHt}},[t._v("通过")]):t._e(),2===this.queryParams.oHstatus?a("el-button",{attrs:{size:"medium",type:"danger"},on:{click:t.updateBh}},[t._v("驳回")]):t._e()],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",[a("strong",[t._v("| 设备信息")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",[a("strong",[t._v("| 审核意见")])])}],l=a("5530"),i=a("2909"),s=(a("99af"),a("4de4"),a("caad"),a("d81d"),a("14d9"),a("13d5"),a("fb6a"),a("a434"),a("b0c0"),a("b680"),a("d3b7"),a("2532"),a("4c53"),a("159b"),a("7456")),r={name:"AddFa",data:function(){return{url:"/prod-api/basic/supplier/upload1",oTotalprice:0,oid:this.$route.query.oid,labelStyle:{width:"180px",textAlign:"center"},textColor:{color:"#00afff"},size:"0",queryParams:{oid:null,tid:null,oCode:null,oName:null,oSubject:"XX科技有限公司",hid:null,hName:null,oStartdate:null,oEnddate:null,oFile:null,oType:"采购框架协议",oHstatus:null,oDescribe:null,oOpinion:null},sub:{oHstatus:null,oid:null,oOpinion:null},view:null,rules:{oOpinion:[{required:!0,message:"审核意见不能为空",trigger:"blur"}]},fileList:[],lTotalSubtotal:0,lTableColumns:[],lSelectedRows:[],lTableData:[],deviceList:[],cpDialog:!1,total:0}},created:function(){this.hh(),this.xx()},watch:{"queryParams.oStartdate":function(t){if(t){var e=new Date(t),a=new Date(e.getFullYear()+2,e.getMonth(),e.getDate());this.queryParams.oEnddate=a.toISOString().slice(0,10)}}},methods:{addFa:function(){this.submitNextUpload()},add:function(){var t=this;this.queryParams["oTotalprice"]=parseFloat(this.oTotalprice).toFixed(2),this.queryParams["bsInventoryList"]=Object(i["a"])(this.lTableData).filter((function(t){return delete t.id,null!=t.tid})),Object(s["u"])(this.queryParams).then((function(e){console.log(e),"修改成功"===e.msg&&t.$router.push("/contract/fam")}))},onchange1:function(t,e){this.fileList=e,console.log(this.fileList,"fileList onchange"),0===t.size&&(this.$message.error("选择的文件不能为空，请重新选择！"),this.fileList.splice(this.fileList.indexOf(t[0]),1))},updateHt:function(){var t=this;this.$refs.elForm.validate().then((function(){t.sub.oHstatus=3,t.sub.oid=t.oid,Object(s["u"])(t.sub).then((function(e){console.log(e.msg),"修改成功"===e.msg?(t.$message.success("已通过"),t.$router.push("/contract/fam")):t.$message.success("修改失败")}))})).catch((function(){t.$message.warning("请填写审核意见")}))},updateBh:function(){var t=this;this.$refs.elForm.validate().then((function(){t.sub.oHstatus=4,t.sub.oid=t.oid,Object(s["u"])(t.sub).then((function(e){console.log(e.msg),"修改成功"===e.msg?(t.$message.error("已驳回"),t.$router.push("/contract/fam")):t.$message.success("修改失败")}))})).catch((function(){t.$message.warning("请填写审核意见")}))},hh:function(){var t=this;this.loading=!0,Object(s["l"])(this.oid).then((function(e){console.log("打印框架协议信息"),console.log(e),t.queryParams=e.data,t.view=e.data.oOpinion;var a=e.data.oFile;if(null!=a){var n=a.substring(a.lastIndexOf("/")+1);t.fileList=[{name:n,url:a}],e.data.oFile||(t.form.oFile=e.data.oFile)}else t.fileList=[],t.fileList.oFile=null}))},xx:function(){var t=this;Object(s["n"])({oid:this.oid}).then((function(e){console.log(e.rows);var a=e.rows;a.forEach((function(e,a){t.lTableData.push({id:a+1,inName:e.inName,inModel:e.inModel,inVat:e.inVat.toFixed(2),inUnit:e.inUnit,inSubtotal:(e.inCount*e.inVat).toFixed(2),tid:e.tid,inCount:e.inCount})})),t.loading=!1,t.lCalculateTotalSubtotal()}))},success:function(t){console.log(333),console.log(t),this.queryParams.oFile=t.data.url,console.log("打印up3-------------------------"),console.log(this.queryParams.oFile),this.submitNextUpload()},handlePreview:function(t){window.open(this.fileList[0].url,"_blank","charset=utf-8")},handleExceed:function(t,e){this.$message.warning("当前限制选择 1 个文件，本次选择了 ".concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))},beforeRemove:function(t,e){var a=this;return this.$modal.confirm("确定移除 ".concat(t.name,"？")).then((function(){a.fileList=[],a.queryParams.oFile=null}))},submitNextUpload:function(){this.fileList.length>0&&null==this.queryParams.oFile?(console.log("打印提交1-------------------------"),this.$refs.up1.submit()):(console.log("打印提交2-------------------------"),this.add())},lAddRow:function(){var t={};this.lTableColumns.forEach((function(e){t[e.prop]=""})),t.id=this.lTableData.length+1,t.inVat=(0).toFixed(2),t.inSubtotal=(0).toFixed(2),t.inCount=1,this.lTableData.push(t)},lDeleteRows:function(){var t=this;this.$confirm("确定删除选中的行吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.lTableData=t.lTableData.filter((function(e){return!t.lSelectedRows.includes(e)})),t.lSelectedRows=[],t.lUpdateRowIds(),t.lCalculateTotalSubtotal(),t.$message({type:"success",message:"删除成功!"})})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},lCopyRows:function(){var t=this,e=this.lSelectedRows.map((function(t){return Object(l["a"])({},t)}));e.forEach((function(e){e.id=t.lTableData.reduce((function(t,e){return Math.max(e.id,t)}),0)+1,t.lTableData.push(e)})),this.lCalculateTotalSubtotal()},lUpdateRowIds:function(){this.lTableData.forEach((function(t,e){t.id=e+1}))},lHandleSelectionChange:function(t){this.lSelectedRows=t},openCp:function(t){this.selectRow=t,this.cpDialog=!0,this.selectBdList()},handleRowClick:function(t){this.selectRow.inName=t.tName,this.selectRow.tid=t.tid,this.selectRow.inModel=t.tModel,this.selectRow.inUnit=t.tUnit,this.selectRow.inVat=(1.13*t.tPrice).toFixed(2),this.selectRow.inCount=1,this.selectRow.inSubtotal=(this.selectRow.inCount*this.selectRow.inVat).toFixed(2),this.cpDialog=!1,this.lCalculateTotalSubtotal()},selectBdList:function(){var t=this;Object(s["m"])(this.queryParams).then((function(e){console.log(e),t.deviceList=e.rows,t.total=e.total}))},spCountBlur:function(t){null==t.inVat&&(t.inVat=0),t.inSubtotal=(t.inCount*t.inVat).toFixed(2),this.lCalculateTotalSubtotal()},spCountChange:function(t){null==t.inVat&&(t.inVat=0),t.inSubtotal=(t.inCount*t.inVat).toFixed(2),this.lCalculateTotalSubtotal()},lCalculateTotalSubtotal:function(){this.oTotalprice=this.lTableData.reduce((function(t,e){var a=e.inSubtotal?parseFloat(e.inSubtotal):0,n=t+a;return n}),0)},back1:function(){this.$router.back()}}},u=r,c=(a("2aff"),a("2877")),d=Object(c["a"])(u,n,o,!1,null,"35a3457b",null);e["default"]=d.exports}}]);