(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3fc4bc00"],{"6ed4":function(t,e,a){"use strict";a("d086")},7456:function(t,e,a){"use strict";a.d(e,"m",(function(){return l})),a.d(e,"q",(function(){return o})),a.d(e,"f",(function(){return s})),a.d(e,"o",(function(){return i})),a.d(e,"e",(function(){return r})),a.d(e,"k",(function(){return c})),a.d(e,"n",(function(){return u})),a.d(e,"p",(function(){return m})),a.d(e,"b",(function(){return d})),a.d(e,"l",(function(){return p})),a.d(e,"u",(function(){return f})),a.d(e,"t",(function(){return b})),a.d(e,"j",(function(){return h})),a.d(e,"v",(function(){return g})),a.d(e,"h",(function(){return y})),a.d(e,"a",(function(){return w})),a.d(e,"c",(function(){return v})),a.d(e,"d",(function(){return P})),a.d(e,"i",(function(){return D})),a.d(e,"s",(function(){return S})),a.d(e,"g",(function(){return C})),a.d(e,"r",(function(){return x}));var n=a("b775");function l(t){return Object(n["a"])({url:"/ppm/device/list",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/ppm/items/selectItemsDevice",method:"get",params:t})}function s(t){return Object(n["a"])({url:"/basic/management",method:"post",data:t})}function i(t){return Object(n["a"])({url:"/basic/management/list",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/basic/contract",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/basic/contract/"+t,method:"get"})}function u(t){return Object(n["a"])({url:"/basic/inventory/list",method:"get",params:t})}function m(t){return Object(n["a"])({url:"/basic/payment/list",method:"get",params:t})}function d(t){return Object(n["a"])({url:"/basic/sign/list1",method:"get",params:t})}function p(t){return Object(n["a"])({url:"/basic/management/"+t,method:"get"})}function f(t){return Object(n["a"])({url:"/basic/management",method:"put",data:t})}function b(t){return Object(n["a"])({url:"/basic/contract",method:"put",data:t})}function h(t){return Object(n["a"])({url:"/basic/contract/selectCom",method:"get",params:{eid:t}})}function g(t){return Object(n["a"])({url:"/basic/contract/updateoHstatus",method:"put",data:t})}function y(t){return Object(n["a"])({url:"/basic/contract/del",method:"get",params:{eid:t}})}function w(t){return Object(n["a"])({url:"/basic/contract/HtCancel",method:"put",data:t})}function v(t){return Object(n["a"])({url:"/basic/management/XyCancel",method:"get",params:{oid:t}})}function P(t){return Object(n["a"])({url:"/ppm/framework/XyCancel",method:"get",params:{oid:t}})}function D(t){return Object(n["a"])({url:"/basic/management/delXy",method:"get",params:{oid:t}})}function S(t){return Object(n["a"])({url:"/ppm/framework/upOidbyOid",method:"put",data:t})}function C(t){return Object(n["a"])({url:"/basic/contract/noTender",method:"post",data:t})}function x(t){return Object(n["a"])({url:"/bidding/candidate/getSuppHid",method:"get",params:{sid:t}})}},"98fd":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"con"},[a("h2",[t._v("采购合同")]),a("el-divider",{attrs:{direction:"horizontal"}}),a("el-form",{ref:"elForm",attrs:{model:t.form,rules:t.rules1,size:"medium","label-width":"180px","label-position":"left"}},[a("h3",[t._v("合同基本信息")]),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"space-between",align:"top",gutter:15}},[a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同名称",prop:"eHname"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.form.eHname,callback:function(e){t.$set(t.form,"eHname",e)},expression:"form.eHname"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同编号",prop:"eHcode"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",placeholder:"系统自动生成",readonly:""},model:{value:t.form.eHcode,callback:function(e){t.$set(t.form,"eHcode",e)},expression:"form.eHcode"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"类型",prop:"eType"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.form.eType,callback:function(e){t.$set(t.form,"eType",e)},expression:"form.eType"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"密级",prop:"eCon"}},[a("el-select",{staticClass:"cInput",attrs:{placeholder:"请选择"},model:{value:t.form.eCon,callback:function(e){t.$set(t.form,"eCon",e)},expression:"form.eCon"}},t._l(t.mjOptions,(function(t){return a("el-option",{key:t.value,attrs:{disabled:"",label:t.label,value:t.value}})})),1)],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"开始时间",prop:"eStartdate"}},[a("el-date-picker",{staticClass:"cInput",attrs:{type:"date",readonly:""},model:{value:t.form.eStartdate,callback:function(e){t.$set(t.form,"eStartdate",e)},expression:"form.eStartdate"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"结束时间",prop:"eEnddate"}},[a("el-date-picker",{staticClass:"cInput",attrs:{type:"date",readonly:""},model:{value:t.form.eEnddate,callback:function(e){t.$set(t.form,"eEnddate",e)},expression:"form.eEnddate"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"交付日期",prop:"eDeliveryTime"}},[a("el-date-picker",{staticClass:"cInput",attrs:{type:"date",readonly:""},model:{value:t.form.eDeliveryTime,callback:function(e){t.$set(t.form,"eDeliveryTime",e)},expression:"form.eDeliveryTime"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同金额",prop:"eAmount"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.form.eAmount,callback:function(e){t.$set(t.form,"eAmount",e)},expression:"form.eAmount"}}),a("span",{staticStyle:{color:"red"}},[t._v(" * 合同标的清单总价")])],1),a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"合同情况说明",prop:"eDescription"}},[a("el-col",[a("el-input",{staticClass:"cInput",attrs:{type:"textarea",rows:4,clearable:"",readonly:""},model:{value:t.form.eDescription,callback:function(e){t.$set(t.form,"eDescription",e)},expression:"form.eDescription"}})],1)],1)],1),a("h3",[t._v("相关项目信息")]),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"space-between",align:"top",gutter:15}},[a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"相关项目名称",prop:"tenderName"}},[a("el-input",{staticClass:"cInput",attrs:{readonly:""},model:{value:t.form.tenderName,callback:function(e){t.$set(t.form,"tenderName",e)},expression:"form.tenderName"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"项目编号",prop:"tenderNo"}},[a("el-input",{staticClass:"cInput",attrs:{readonly:""},model:{value:t.form.tenderNo,callback:function(e){t.$set(t.form,"tenderNo",e)},expression:"form.tenderNo"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"招标方式",prop:"tenderWay"}},[a("el-input",{staticClass:"cInput",attrs:{readonly:""},model:{value:t.form.tenderWay,callback:function(e){t.$set(t.form,"tenderWay",e)},expression:"form.tenderWay"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"业务类型",prop:"tenderType"}},[a("el-input",{staticClass:"cInput",attrs:{readonly:""},model:{value:t.form.tenderType,callback:function(e){t.$set(t.form,"tenderType",e)},expression:"form.tenderType"}})],1)],1)],1),a("h3",[t._v("合同标的清单")]),a("div",{staticClass:"cl"},[a("el-table",{style:{marginTop:"10px"},attrs:{data:t.lTableData,"row-key":function(t){return t.id},border:"",stripe:""},on:{"selection-change":t.lHandleSelectionChange}},[a("el-table-column",{attrs:{label:"序号",prop:"id",width:"60"}}),a("el-table-column",{attrs:{label:"产品名称",prop:"inName",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inName,callback:function(a){t.$set(e.row,"inName",a)},expression:"scope.row.inName"}},[a("i",{staticClass:"el-icon-search",staticStyle:{"margin-top":"10px"},attrs:{slot:"suffix"},on:{click:function(t){}},slot:"suffix"})]),a("el-dialog",{attrs:{title:"产品名称",visible:t.cpDialog},on:{"update:visible":function(e){t.cpDialog=e}}},[a("el-table",{ref:"singleTable",staticStyle:{width:"100%"},attrs:{data:t.deviceList,"highlight-current-row":""},on:{"row-click":t.handleRowClick}},[a("el-table-column",{attrs:{prop:"tName",label:"产品名称",width:"140"}}),a("el-table-column",{attrs:{prop:"tid",label:"产品编号",width:"130"}}),a("el-table-column",{attrs:{prop:"tModel",label:"规格型号",width:"150"}}),a("el-table-column",{attrs:{prop:"tUnit",label:"单位",width:"85"}}),a("el-table-column",{attrs:{prop:"tPrice",label:"单价",width:"120"}}),a("el-table-column",{attrs:{prop:"shui",label:"税点",width:"100"}})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.queryParams.pageNum,limit:t.queryParams.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.selectBdList}}),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-button",{on:{click:t.closeDialog1}},[t._v("取消")])],1)],1)]}}])}),a("el-table-column",{attrs:{label:"产品编码",prop:"tid",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.tid,callback:function(a){t.$set(e.row,"tid",a)},expression:"scope.row.tid"}})]}}])}),a("el-table-column",{attrs:{label:"规格型号",prop:"inModel",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inModel,callback:function(a){t.$set(e.row,"inModel",a)},expression:"scope.row.inModel"}})]}}])}),a("el-table-column",{attrs:{label:"单位",prop:"inUnit",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inUnit,callback:function(a){t.$set(e.row,"inUnit",a)},expression:"scope.row.inUnit"}})]}}])}),a("el-table-column",{attrs:{label:"含税单价",prop:"inVat",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inVat,callback:function(a){t.$set(e.row,"inVat",a)},expression:"scope.row.inVat"}})]}}])}),a("el-table-column",{attrs:{label:"数量",prop:"inCount",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input-number",{staticStyle:{width:"120px"},attrs:{min:1,precision:0,"controls-position":"right",disabled:""},on:{blur:function(a){return t.spCountBlur(e.row)},change:function(a){return t.spCountChange(e.row)}},model:{value:e.row.inCount,callback:function(a){t.$set(e.row,"inCount",a)},expression:"scope.row.inCount"}})]}}])}),a("el-table-column",{attrs:{label:"小计",prop:"inSubtotal"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inSubtotal,callback:function(a){t.$set(e.row,"inSubtotal",a)},expression:"scope.row.inSubtotal"}})]}}])})],1),a("div",{style:{textAlign:"right"}},[a("span",{style:{marginRight:"100px"}},[t._v("总价:")]),a("span",{style:{fontWeight:"700"}},[t._v(t._s(t.lTotalSubtotal.toFixed(2)))])])],1),a("h3",[t._v("合同付款约定")]),a("div",{staticClass:"cl"},[a("el-table",{style:{marginTop:"10px"},attrs:{data:t.payTableData,"row-key":function(t){return t.id},border:"",stripe:""},on:{"selection-change":t.payHandleSelectionChange}},[a("el-table-column",{attrs:{label:"序号",prop:"id",width:"60"}}),a("el-table-column",{attrs:{label:"款项内容",prop:"payContent"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-select",{staticClass:"cInput",attrs:{disabled:""},model:{value:e.row.payContent,callback:function(a){t.$set(e.row,"payContent",a)},expression:"scope.row.payContent"}},t._l(t.payTypes,(function(t){return a("el-option",{key:t.dictValue,attrs:{label:t.dictLabel,value:Number(t.dictValue),disabled:""}})})),1)]}}])}),a("el-table-column",{attrs:{label:"付款日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",readonly:""},model:{value:e.row.payDate,callback:function(a){t.$set(e.row,"payDate",a)},expression:"scope.row.payDate"}})],1)]}}])}),a("el-table-column",{attrs:{label:"付款单位",prop:"payer"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.payer,callback:function(a){t.$set(e.row,"payer",a)},expression:"scope.row.payer"}})]}}])}),a("el-table-column",{attrs:{label:"收款合同方",prop:"hName"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.hName,callback:function(a){t.$set(e.row,"hName",a)},expression:"scope.row.hName"}})]}}])}),a("el-table-column",{attrs:{label:"付款条件",prop:"payTerms"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.payTerms,callback:function(a){t.$set(e.row,"payTerms",a)},expression:"scope.row.payTerms"}})]}}])}),a("el-table-column",{attrs:{label:"付款金额",prop:"payAmount"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},on:{blur:function(a){return t.payHandleBlur(e.row)},input:function(a){return t.payHandleInput(e.row)}},model:{value:e.row.payAmount,callback:function(a){t.$set(e.row,"payAmount",a)},expression:"scope.row.payAmount"}})]}}])}),a("el-table-column",{attrs:{label:"违约责任",prop:"debty"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.debty,callback:function(a){t.$set(e.row,"debty",a)},expression:"scope.row.debty"}})]}}])})],1)],1),a("h3",[t._v("合同签署状态")]),a("h3",[t._v("合同签署状态")]),a("el-form",{ref:"qsForm",attrs:{model:t.qsFormData,rules:t.rules2,size:"medium","label-width":"180px","label-position":"left"}},[a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"space-between",align:"top",gutter:15}},[a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"签署方数",prop:"gnSignatorycount"}},[a("el-select",{staticClass:"cInput",attrs:{disabled:""},model:{value:t.qsFormData.gnSignatorycount,callback:function(e){t.$set(t.qsFormData,"gnSignatorycount",e)},expression:"qsFormData.gnSignatorycount"}},t._l(t.qsOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"我方主体",prop:"gnSub"}},[a("el-input",{staticClass:"cInput",attrs:{readonly:""},model:{value:t.qsFormData.gnSub,callback:function(e){t.$set(t.qsFormData,"gnSub",e)},expression:"qsFormData.gnSub"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方供应商",prop:"gnPbname"}},[a("el-input",{staticClass:"cInput",attrs:{readonly:""},model:{value:t.qsFormData.gnPbname,callback:function(e){t.$set(t.qsFormData,"gnPbname",e)},expression:"qsFormData.gnPbname"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方供应商地址",prop:"gnPbaddress"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbaddress,callback:function(e){t.$set(t.qsFormData,"gnPbaddress",e)},expression:"qsFormData.gnPbaddress"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方联系人",prop:"gnPbcontact"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbcontact,callback:function(e){t.$set(t.qsFormData,"gnPbcontact",e)},expression:"qsFormData.gnPbcontact"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方联系方式",prop:"gnPbcif"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbcif,callback:function(e){t.$set(t.qsFormData,"gnPbcif",e)},expression:"qsFormData.gnPbcif"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方开户行",prop:"gnPbbank"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbbank,callback:function(e){t.$set(t.qsFormData,"gnPbbank",e)},expression:"qsFormData.gnPbbank"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方开户行账户",prop:"gnPbaccount"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbaccount,callback:function(e){t.$set(t.qsFormData,"gnPbaccount",e)},expression:"qsFormData.gnPbaccount"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同方金额",prop:"gnPbamount"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbamount,callback:function(e){t.$set(t.qsFormData,"gnPbamount",e)},expression:"qsFormData.gnPbamount"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"币别",prop:"gnPbcurrency"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbcurrency,callback:function(e){t.$set(t.qsFormData,"gnPbcurrency",e)},expression:"qsFormData.gnPbcurrency"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"已支付金额",prop:"gnPbpayment"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbpayment,callback:function(e){t.$set(t.qsFormData,"gnPbpayment",e)},expression:"qsFormData.gnPbpayment"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"锁定金额",prop:"gnPbfixedprice"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbfixedprice,callback:function(e){t.$set(t.qsFormData,"gnPbfixedprice",e)},expression:"qsFormData.gnPbfixedprice"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"剩余金额",prop:"gnPbbalance"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbbalance,callback:function(e){t.$set(t.qsFormData,"gnPbbalance",e)},expression:"qsFormData.gnPbbalance"}})],1)],1),1===t.qsFormData.gnSignatorycount?a("div",[a("el-divider",{attrs:{direction:"horizontal"}}),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"space-between",align:"top",gutter:15}},[a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方供应商",prop:"gnPcname"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcname,callback:function(e){t.$set(t.qsFormData,"gnPcname",e)},expression:"qsFormData.gnPcname"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方供应商地址",prop:"gnPcaddress"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcaddress,callback:function(e){t.$set(t.qsFormData,"gnPcaddress",e)},expression:"qsFormData.gnPcaddress"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方联系人",prop:"gnPccontact"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPccontact,callback:function(e){t.$set(t.qsFormData,"gnPccontact",e)},expression:"qsFormData.gnPccontact"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方联系方式",prop:"gnPccif"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPccif,callback:function(e){t.$set(t.qsFormData,"gnPccif",e)},expression:"qsFormData.gnPccif"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方开户行",prop:"gnPcbank"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcbank,callback:function(e){t.$set(t.qsFormData,"gnPcbank",e)},expression:"qsFormData.gnPcbank"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方开户行账户",prop:"gnPcaccount"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcaccount,callback:function(e){t.$set(t.qsFormData,"gnPcaccount",e)},expression:"qsFormData.gnPcaccount"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同方金额",prop:"gnPcamount"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcamount,callback:function(e){t.$set(t.qsFormData,"gnPcamount",e)},expression:"qsFormData.gnPcamount"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"币别",prop:"gnPccurrency"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPccurrency,callback:function(e){t.$set(t.qsFormData,"gnPccurrency",e)},expression:"qsFormData.gnPccurrency"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"已支付金额",prop:"gnPcpayment"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcpayment,callback:function(e){t.$set(t.qsFormData,"gnPcpayment",e)},expression:"qsFormData.gnPcpayment"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"锁定金额",prop:"gnPcfixedprice"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcfixedprice,callback:function(e){t.$set(t.qsFormData,"gnPcfixedprice",e)},expression:"qsFormData.gnPcfixedprice"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"剩余金额",prop:"gnPcbalance"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcbalance,callback:function(e){t.$set(t.qsFormData,"gnPcbalance",e)},expression:"qsFormData.gnPcbalance"}})],1)],1)],1):t._e()],1),a("h3",[t._v("合同签署文件")]),a("el-form",{ref:"elForm",attrs:{model:t.form,rules:t.rules3,size:"medium","label-width":"180px","label-position":"left"}},[a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"space-between",align:"top",gutter:15}},[a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同影像上传",prop:"eImage"}},[a("el-upload",{ref:"up1",staticClass:"upload-demo",attrs:{action:t.url,"before-remove":t.beforeRemove1,"auto-upload":!1,limit:1,"on-exceed":t.handleExceed1,"on-success":t.success1,"on-change":t.onchange1,"file-list":t.fileList1,"on-preview":t.handlePreview1,disabled:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传合同影像")])],1)],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"附件上传",prop:"ComPubAttachments"}},[a("el-upload",{ref:"up2",staticClass:"upload-demo",attrs:{action:t.url,"before-remove":t.beforeRemove2,"auto-upload":!1,limit:1,"on-exceed":t.handleExceed2,"on-success":t.success2,"on-change":t.onchange2,"file-list":t.fileList2,"on-preview":t.handlePreview2,disabled:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传附件")])],1)],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同文件",prop:"eDocuments"}},[a("el-upload",{ref:"up3",staticClass:"upload-demo",attrs:{action:t.url,"before-remove":t.beforeRemove3,"auto-upload":!1,limit:1,"on-exceed":t.handleExceed3,"on-success":t.success3,"on-change":t.onchange3,"file-list":t.fileList3,"on-preview":t.handlePreview3,disabled:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传合同文件")])],1)],1)],1)],1)],1),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-button",{attrs:{size:"medium"},on:{click:t.back1}},[t._v("返回")])],1)])},l=[],o=a("5530"),s=a("2909"),i=(a("99af"),a("4de4"),a("caad"),a("d81d"),a("14d9"),a("13d5"),a("fb6a"),a("a434"),a("b0c0"),a("b680"),a("d3b7"),a("ac1f"),a("2532"),a("5319"),a("159b"),a("7456")),r=(a("37b4"),a("2986"),a("fdd2")),c={data:function(){return{fileList1:[],fileList2:[],fileList3:[],url:"/prod-api/basic/supplier/upload1",eid:this.$route.query.eid,lTableData:[],total:0,total1:0,queryParams:{pageNum:1,pageSize:10,tName:null,tUnit:null,shui:null,tModel:null,tPrice:null,tid:null},queryParams1:{pageNum:1,pageSize:10,hName:null,hid:null,hQuality:null},supplierList:[],deviceList:[],sub:"",cpDialog:!1,GysDialog:!1,qsOptions:[{value:0,label:"双方签署"},{value:1,label:"三方签署"}],payTimeValue:"",lTotalSubtotal:0,lTableColumns:[],lSelectedRows:[],payTableData:[],paySelectedRows:[],payDateOptions:[],qdSelectedItem:"",mjOptions:[{value:1,label:"非密"},{value:2,label:"商密"}],cgOptions:[{value:1,label:"邀请招标"},{value:2,label:"公开招标"}],cgValue:"",loading:!0,title:"",open:!1,form:{hid:null,sid:null,eid:null,eHname:null,eHcode:null,eType:null,eCon:1,eStatus:3,eStartdate:null,eEnddate:null,eAmount:0,eDescription:null,tenderName:null,tenderNo:null,tenderWay:null,tenderType:null,eImage:null,eDocuments:null,eOpinion:null,eDeliveryTime:null,bsSign:{},comPubAttachments:{}},payForm:{eid:null,payContent:null,payDate:null,payer:null,hid:null,hName:null,payTerms:null,payAmount:0,debty:null},tenderTypes:[],payTypes:[],qsFormData:{gnSignatorycount:0,gnSub:"XX科技有限公司",gnPbid:null,gnPbname:null,gnPbaddress:null,gnPbcontact:null,gnPbcif:null,gnPbbank:null,gnPbaccount:null,gnPbamount:null,gnPbcurrency:"人民币",gnPbpayment:null,gnPbfixedprice:null,gnPbbalance:null,gnPcname:null,gnPcaddress:null,gnPccontact:null,gnPccif:null,gnPcbank:null,gnPcaccount:null,gnPcamount:null,gnPccurrency:null,gnPcpayment:null,gnPcfixedprice:null,gnPcbalance:null},hid:2,rules1:{eHname:[{required:!0,message:"合同名称不能为空",trigger:"blur"}],eStartdate:[{required:!0,message:"开始时间不能为空",trigger:"blur"}],eEnddate:[{required:!0,message:"结束时间不能为空",trigger:"blur"}]},rules2:{},rules3:{},selectRow:null,ComPubAttachments:{anSize:null,anUrl:null,anName:null}}},mounted:function(){this.lCalculateTotalSubtotal()},created:function(){var t=this;this.selectContractByEid(),this.selectListInventory(),this.selectListPayment(),this.getSign(),this.getComPubAttachments(),this.getDicts("bs_contract_pay").then((function(e){t.payTypes=e.data}))},methods:{handlePreview1:function(){window.open(this.fileList1[0].url,"_blank","charset=utf-8")},handlePreview2:function(){window.open(this.fileList2[0].url,"_blank","charset=utf-8")},handlePreview3:function(){window.open(this.fileList3[0].url,"_blank","charset=utf-8")},onchange1:function(t,e){this.fileList1=e,console.log(this.fileList1,"fileList1 onchange"),0==t.size&&(this.$message.error("选择的文件不能为空，请重新选择！"),this.fileList1.splice(this.fileList1.indexOf(t[0]),1))},onchange2:function(t,e){this.fileList2=e,console.log(this.fileList2,"fileList2 onchange"),0==t.size&&(this.$message.error("选择的文件不能为空，请重新选择！"),this.fileList2.splice(this.fileList1.indexOf(t[0]),1))},onchange3:function(t,e){this.fileList3=e,console.log(this.fileList3,"fileList3 onchange"),0==t.size&&(this.$message.error("选择的文件不能为空，请重新选择！"),this.fileList3.splice(this.fileList1.indexOf(t[0]),1))},addXy:function(){this.submitNextUpload()},add:function(){var t=this;console.log("add-----------------"),this.form["bsInventoryList"]=Object(s["a"])(this.lTableData).filter((function(t){return delete t.id,null!=t.tid})),this.form["bsPaymentList"]=Object(s["a"])(this.payTableData).filter((function(t){return delete t.id,!(null==t.payContent||null==t.payAmount)})),this.form.bsSign=this.qsFormData,this.form.comPubAttachments=this.ComPubAttachments,Object(i["t"])(this.form).then((function(e){console.log(e.msg),"修改成功"==e.msg&&t.$router.push("/contract/cm")}))},handleExceed1:function(t,e){this.$message.warning("当前限制选择 1 个文件，本次选择了 ".concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))},beforeRemove1:function(t){var e=this;return this.$modal.confirm("确定移除 ".concat(t.name,"？")).then((function(){e.fileList1=[],e.form.eImage=null}))},success1:function(t){console.log(111),this.form.eImage=t.data.url,console.log("打印up1-------------------------"),console.log(this.form.eImage),this.submitNextUpload()},handleExceed2:function(t,e){this.$message.warning("当前限制选择 1 个文件，本次选择了 ".concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))},beforeRemove2:function(t){var e=this;return this.$modal.confirm("确定移除 ".concat(t.name,"？")).then((function(){e.fileList2=[],e.ComPubAttachments.anUrl=null,e.ComPubAttachments.anName=null,e.ComPubAttachments.anSize=null}))},success2:function(t,e){console.log(222),this.ComPubAttachments.anName=t.data.name,this.ComPubAttachments.anUrl=t.data.url,this.ComPubAttachments.anSize=e.size,console.log("打印up2-------------------------"),console.log(this.ComPubAttachments),this.submitNextUpload()},handleExceed3:function(t,e){this.$message.warning("当前限制选择 1 个文件，本次选择了 ".concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))},beforeRemove3:function(t){var e=this;return this.$modal.confirm("确定移除 ".concat(t.name,"？")).then((function(){e.fileList3=[],e.form.eDocuments}))},success3:function(t){console.log(333),console.log(t),this.form.eDocuments=t.data.url,console.log("打印up3-------------------------"),console.log(this.form.eDocuments),this.submitNextUpload()},submitNextUpload:function(){console.log("---------------------------打印------------------------------"),console.log(this.fileList1.length),console.log(this.form.eImage),console.log(this.fileList2.length),console.log(this.ComPubAttachments.anName),console.log(this.ComPubAttachments.anUrl),console.log(this.ComPubAttachments.anSize),console.log(this.fileList3.length),console.log(this.form.eDocuments),console.log("---------------------------打印------------------------------"),this.fileList1.length>0&&null==this.form.eImage?(console.log(1),this.$refs.up1.submit()):this.fileList2.length>0&&null==this.ComPubAttachments.anUrl?(console.log(2),this.$refs.up2.submit()):this.fileList3.length>0&&null==this.form.eDocuments?(console.log(3),this.$refs.up3.submit()):(console.log(4),this.add())},spCountBlur:function(t){null==t.inVat&&(t.inVat=0),t.inSubtotal=(t.inCount*t.inVat).toFixed(2),this.lCalculateTotalSubtotal()},spCountChange:function(t){null==t.inVat&&(t.inVat=0),t.inSubtotal=(t.inCount*t.inVat).toFixed(2),this.lCalculateTotalSubtotal()},lCalculateTotalSubtotal:function(){var t=this;this.lTotalSubtotal=this.lTableData.reduce((function(e,a){var n=a.inSubtotal?parseFloat(a.inSubtotal):0,l=e+n;return t.form.eAmount=l.toFixed(2),t.qsFormData.gnPbamount=l.toFixed(2),l}),0)},selectBdList:function(){var t=this;Object(i["m"])(this.queryParams).then((function(e){t.deviceList=e.rows,t.total=e.total}))},handleRowClick:function(t){this.selectRow.inName=t.tName,this.selectRow.tid=t.tid,this.selectRow.inModel=t.tModel,this.selectRow.inUnit=t.tUnit,this.selectRow.tid=t.tid,this.selectRow.inVat=(1.13*t.tPrice).toFixed(2),this.selectRow.inCount=1,this.selectRow.inSubtotal=(this.selectRow.inCount*this.selectRow.inVat).toFixed(2),this.cpDialog=!1,this.lCalculateTotalSubtotal()},handleRowClick1:function(t){this.selectRow.hName=t.hName,this.selectRow.tid=t.tid,this.GysDialog=!1},closeDialog1:function(){this.cpDialog=!1},closeDialog2:function(){this.GysDialog=!1},selectContractByEid:function(){var t=this;Object(i["k"])(this.eid).then((function(e){console.log("打印了合同的信息"),console.log(e.data);var a=e.data;if(t.form.eid=a.eid,t.form.eHname=a.eHname,t.form.eHcode=a.eHcode,t.form.eDescription=a.eDescription,t.form.eStartdate=a.eStartdate,t.form.eEnddate=a.eEnddate,t.form.eDeliveryTime=a.eDeliveryTime,t.form.eAmount=a.eAmount.toFixed(2),t.form.eType=a.eType,t.form.eCon=a.eCon,t.form.sid=a.sid,null!=a.eImage&&""!=a.eImage){var n=a.eImage.substring(a.eImage.lastIndexOf("/")+1),l=[{name:n,url:a.eImage}];t.fileList1=l,t.form.eImage=a.eImage}else t.fileList1=[],t.fileList1.eImage=null;if(null!=a.eDocuments&&""!=a.eDocuments){var o=a.eDocuments.substring(a.eDocuments.lastIndexOf("/")+1),s=[{name:o,url:a.eDocuments}];t.fileList3=s,t.form.eDocuments=a.eDocuments}else t.fileList3=[],t.form.eDocuments=null;t.selectTenderBySid()}))},selectTenderBySid:function(){var t=this;Object(r["c"])(this.form.sid).then((function(e){console.log("打印了相关项目信息"),console.log(e.data);var a=e.data;t.form.tenderName=a.sName,t.form.tenderNo=a.sCode,1==a.sWay?t.form.tenderWay="公开招标":t.form.tenderWay="邀请招标",1==a.sType?t.form.tenderType="办公类型":1==a.sType?t.form.tenderType="固定资产":2==a.sType?t.form.tenderType="资讯类":3==a.sType&&(t.form.tenderType="服务类"),t.form.eType="一般采购合同"}))},selectListInventory:function(){var t=this;this.loading=!0,Object(i["n"])({eid:this.eid}).then((function(e){var a=e.rows;a.forEach((function(e,a){t.lTableData.push({id:a+1,inName:e.inName,inModel:e.inModel,inVat:e.inVat.toFixed(2),inUnit:e.inUnit,inSubtotal:(e.inCount*e.inVat).toFixed(2),tid:e.tid,inCount:e.inCount})})),t.loading=!1,t.lCalculateTotalSubtotal()}))},selectListPayment:function(){var t=this;Object(i["p"])({eid:this.eid}).then((function(e){var a=e.rows;a.forEach((function(e,a){t.payTableData.push({id:a+1,hid:e.hid,hName:e.hName,payContent:e.payContent,payAmount:e.payAmount.toFixed(2),payDate:e.payDate,payTerms:e.payTerms,payer:e.payer,debty:e.debty})}))}))},getSign:function(){var t=this;Object(i["b"])({eid:this.eid}).then((function(e){t.qsFormData=e.data}))},getComPubAttachments:function(){var t=this;Object(i["j"])(this.eid).then((function(e){if(console.log("查询附件信息"),console.log(e),null!=e.data){var a=[{name:e.data.anName,url:e.data.anUrl,size:e.data.anSize}];t.fileList2=a,t.ComPubAttachments.anUrl=e.data.anUrl,t.ComPubAttachments.anName=e.data.anName,t.ComPubAttachments.anSize=e.data.anSize}else t.fileList2=[],t.ComPubAttachments.anUrl=null,t.ComPubAttachments.anName=null,t.ComPubAttachments.anSize=null}))},openCp:function(t){this.selectRow=t,this.cpDialog=!0,this.selectBdList()},qsHandleChange:function(t){this.qsFormData.gnSignatorycount=t,0==this.gnSignatorycount?this.qsFormData.gnPccurrency=null:this.qsFormData.gnPccurrency="人民币"},back1:function(){this.$router.back()},lAddRow:function(){var t={};this.lTableColumns.forEach((function(e){t[e.prop]=""})),t.id=this.lTableData.length+1,t.inSubtotal=(0).toFixed(2),t.inCount=1,this.lTableData.push(t)},lDeleteRows:function(){var t=this;this.$confirm("确定删除选中的行吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.lTableData=t.lTableData.filter((function(e){return!t.lSelectedRows.includes(e)})),t.lSelectedRows=[],t.lUpdateRowIds(),t.lCalculateTotalSubtotal(),t.$message({type:"success",message:"删除成功!"})})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},lCopyRows:function(){var t=this,e=this.lSelectedRows.map((function(t){return Object(o["a"])({},t)}));e.forEach((function(e){e.id=t.lTableData.reduce((function(t,e){return Math.max(e.id,t)}),0)+1,t.lTableData.push(e)})),this.lCalculateTotalSubtotal()},lUpdateRowIds:function(){this.lTableData.forEach((function(t,e){t.id=e+1}))},lHandleSelectionChange:function(t){this.lSelectedRows=t},payAddRow:function(){var t={};t.id=this.payTableData.length+1,t.payer="XX科技有限公司",t.hName=this.qsFormData.gnPbname,t.hid=this.form.hid,this.payTableData.push(t)},payDeleteRows:function(){var t=this;this.$confirm("确定删除选中的行吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.payTableData=t.payTableData.filter((function(e){return!t.paySelectedRows.includes(e)})),t.paySelectedRows=[],t.payUpdateRowIds(),t.$message({type:"success",message:"删除成功!"})})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},payCopyRows:function(){var t=this,e=this.paySelectedRows.map((function(t){return Object(o["a"])({},t)}));e.forEach((function(e){e.id=t.payTableData.reduce((function(t,e){return Math.max(e.id,t)}),0)+1,t.payTableData.push(e)}))},payUpdateRowIds:function(){this.payTableData.forEach((function(t,e){t.id=e+1}))},payHandleSelectionChange:function(t){this.paySelectedRows=t},payHandleBlur:function(t){t.payAmount&&(t.payAmount=parseFloat(t.payAmount).toFixed(2))},payHandleInput:function(t){t.payAmount=t.payAmount.replace(/[^\d.]/g,"");var e=t.payAmount.indexOf(".");-1!==e&&(t.payAmount=t.payAmount.slice(0,e+1)+t.payAmount.slice(e+1).replace(/\./g,""));var a=t.payAmount.split(".");a[1]&&a[1].length>2&&(t.payAmount=a[0]+"."+a[1].slice(0,2))}}},u=c,m=(a("6ed4"),a("2877")),d=Object(m["a"])(u,n,l,!1,null,"5d28e9ba",null);e["default"]=d.exports},d086:function(t,e,a){}}]);