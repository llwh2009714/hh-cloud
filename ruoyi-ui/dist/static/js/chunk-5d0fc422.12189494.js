(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d0fc422"],{"1dad":function(t,e,a){"use strict";a.d(e,"j",(function(){return l})),a.d(e,"f",(function(){return o})),a.d(e,"g",(function(){return i})),a.d(e,"e",(function(){return s})),a.d(e,"h",(function(){return r})),a.d(e,"d",(function(){return c})),a.d(e,"l",(function(){return u})),a.d(e,"k",(function(){return m})),a.d(e,"a",(function(){return d})),a.d(e,"i",(function(){return p})),a.d(e,"b",(function(){return b})),a.d(e,"c",(function(){return f}));var n=a("b775");function l(t){return Object(n["a"])({url:"/nonbidding/pro/list",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/nonbidding/plan/"+t,method:"get"})}function i(t){return Object(n["a"])({url:"/nonbidding/pro/"+t,method:"get"})}function s(t){return Object(n["a"])({url:"/nonbidding/items/getItemsDevice",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/nonbidding/pro/selectQuotation",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/nonbidding/pro/selectCom",method:"get",params:{aid:t}})}function u(t){return Object(n["a"])({url:"/nonbidding/pro",method:"put",data:t})}function m(t){return Object(n["a"])({url:"/nonbidding/pro/list1",method:"get",params:t})}function d(t){return Object(n["a"])({url:"/nonbidding/pro/addCom",method:"post",data:t,headers:{isRepeatSubmit:!0}})}function p(t){return Object(n["a"])({url:"/basic/contract/list1",method:"get",params:t})}function b(t){return Object(n["a"])({url:"/basic/contract/del1",method:"get",params:{eid:t}})}function f(t){return Object(n["a"])({url:"/nonbidding/pro/delByGfId",method:"delete",params:{gfId:t}})}},"1fda":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"con"},[a("h2",[t._v("采购合同")]),a("el-divider",{attrs:{direction:"horizontal"}}),a("el-form",{ref:"formData",attrs:{model:t.form,rules:t.rules1,size:"medium","label-width":"180px","label-position":"left"}},[a("h3",[t._v("合同基本信息")]),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"space-between",align:"top",gutter:15}},[a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同名称",prop:"eHname"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:""},model:{value:t.form.eHname,callback:function(e){t.$set(t.form,"eHname",e)},expression:"form.eHname"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同编号",prop:"eHcode"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",placeholder:"系统自动生成",disabled:""},model:{value:t.form.eHcode,callback:function(e){t.$set(t.form,"eHcode",e)},expression:"form.eHcode"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"类型",prop:"eType"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.form.eType,callback:function(e){t.$set(t.form,"eType",e)},expression:"form.eType"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"密级",prop:"eCon"}},[a("el-select",{staticClass:"cInput",attrs:{placeholder:"请选择"},model:{value:t.form.eCon,callback:function(e){t.$set(t.form,"eCon",e)},expression:"form.eCon"}},t._l(t.mjOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"开始时间",prop:"eStartdate"}},[a("el-date-picker",{staticClass:"cInput",attrs:{type:"date"},model:{value:t.form.eStartdate,callback:function(e){t.$set(t.form,"eStartdate",e)},expression:"form.eStartdate"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"结束时间",prop:"eEnddate"}},[a("el-date-picker",{staticClass:"cInput",attrs:{type:"date"},model:{value:t.form.eEnddate,callback:function(e){t.$set(t.form,"eEnddate",e)},expression:"form.eEnddate"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"交付日期",prop:"eDeliveryTime"}},[a("el-date-picker",{staticClass:"cInput",attrs:{type:"date"},model:{value:t.form.eDeliveryTime,callback:function(e){t.$set(t.form,"eDeliveryTime",e)},expression:"form.eDeliveryTime"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同金额",prop:"eAmount"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.form.eAmount,callback:function(e){t.$set(t.form,"eAmount",e)},expression:"form.eAmount"}}),a("span",{staticStyle:{color:"red"}},[t._v(" * 合同标的清单总价")])],1),a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"合同情况说明",prop:"eDescription"}},[a("el-col",[a("el-input",{staticClass:"cInput",attrs:{type:"textarea",rows:4,clearable:""},model:{value:t.form.eDescription,callback:function(e){t.$set(t.form,"eDescription",e)},expression:"form.eDescription"}})],1)],1)],1),a("h3",[t._v("相关项目信息")]),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"space-between",align:"top",gutter:15}},[a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"相关项目名称",prop:"tenderName"}},[a("el-input",{staticClass:"cInput",attrs:{readonly:""},model:{value:t.form.tenderName,callback:function(e){t.$set(t.form,"tenderName",e)},expression:"form.tenderName"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"项目编号",prop:"tenderNo"}},[a("el-input",{staticClass:"cInput",attrs:{readonly:""},model:{value:t.form.tenderNo,callback:function(e){t.$set(t.form,"tenderNo",e)},expression:"form.tenderNo"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"采购方式",prop:"tenderWay"}},[a("el-input",{staticClass:"cInput",attrs:{readonly:""},model:{value:t.form.tenderWay,callback:function(e){t.$set(t.form,"tenderWay",e)},expression:"form.tenderWay"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"公开/邀请",prop:"tenderType"}},[a("el-input",{staticClass:"cInput",attrs:{readonly:""},model:{value:t.form.tenderType,callback:function(e){t.$set(t.form,"tenderType",e)},expression:"form.tenderType"}})],1)],1)],1),a("h3",[t._v("合同标的清单")]),a("div",{staticClass:"cl"},[a("el-button",{on:{click:t.lAddRow}},[t._v("新增")]),a("el-button",{attrs:{disabled:0===t.lSelectedRows.length},on:{click:t.lDeleteRows}},[t._v("删除")]),a("el-button",{attrs:{disabled:0===t.lSelectedRows.length},on:{click:t.lCopyRows}},[t._v("复制")]),a("el-table",{style:{marginTop:"10px"},attrs:{data:t.lTableData,"row-key":function(t){return t.id},border:"",stripe:""},on:{"selection-change":t.lHandleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"序号",prop:"id",width:"60"}}),a("el-table-column",{attrs:{label:"产品名称",prop:"inName",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inName,callback:function(a){t.$set(e.row,"inName",a)},expression:"scope.row.inName"}},[a("i",{staticClass:"el-icon-search",staticStyle:{"margin-top":"10px"},attrs:{slot:"suffix"},on:{click:function(a){return t.openCp(e.row)}},slot:"suffix"})]),a("el-dialog",{attrs:{title:"产品名称",visible:t.cpDialog},on:{"update:visible":function(e){t.cpDialog=e}}},[a("el-table",{ref:"singleTable",staticStyle:{width:"100%"},attrs:{data:t.deviceList,"highlight-current-row":""},on:{"row-click":t.handleRowClick}},[a("el-table-column",{attrs:{prop:"tName",label:"产品名称",width:"140"}}),a("el-table-column",{attrs:{prop:"tid",label:"产品编号",width:"130"}}),a("el-table-column",{attrs:{prop:"tModel",label:"规格型号",width:"150"}}),a("el-table-column",{attrs:{prop:"tUnit",label:"单位",width:"85"}}),a("el-table-column",{attrs:{prop:"tPrice",label:"单价",width:"120"}}),a("el-table-column",{attrs:{prop:"shui",label:"税点",width:"100"}})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.queryParams.pageNum,limit:t.queryParams.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.selectBdList}}),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-button",{on:{click:t.closeDialog1}},[t._v("取消")])],1)],1)]}}])}),a("el-table-column",{attrs:{label:"产品编码",prop:"tid",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.tid,callback:function(a){t.$set(e.row,"tid",a)},expression:"scope.row.tid"}})]}}])}),a("el-table-column",{attrs:{label:"规格型号",prop:"inModel",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inModel,callback:function(a){t.$set(e.row,"inModel",a)},expression:"scope.row.inModel"}})]}}])}),a("el-table-column",{attrs:{label:"单位",prop:"inUnit",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inUnit,callback:function(a){t.$set(e.row,"inUnit",a)},expression:"scope.row.inUnit"}})]}}])}),a("el-table-column",{attrs:{label:"含税单价",prop:"inVat",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inVat,callback:function(a){t.$set(e.row,"inVat",a)},expression:"scope.row.inVat"}})]}}])}),a("el-table-column",{attrs:{label:"数量",prop:"inCount",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input-number",{staticStyle:{width:"120px"},attrs:{min:1,precision:0,"controls-position":"right"},on:{blur:function(a){return t.spCountBlur(e.row)},change:function(a){return t.spCountChange(e.row)}},model:{value:e.row.inCount,callback:function(a){t.$set(e.row,"inCount",a)},expression:"scope.row.inCount"}})]}}])}),a("el-table-column",{attrs:{label:"小计",prop:"inSubtotal"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inSubtotal,callback:function(a){t.$set(e.row,"inSubtotal",a)},expression:"scope.row.inSubtotal"}})]}}])})],1),a("div",{style:{textAlign:"right"}},[a("span",{style:{marginRight:"100px"}},[t._v("总价:")]),a("span",{style:{fontWeight:"700"}},[t._v(t._s(t.lTotalSubtotal.toFixed(2)))])])],1),a("h3",[t._v("合同付款约定")]),a("div",{staticClass:"cl"},[a("el-button",{on:{click:t.payAddRow}},[t._v("新增")]),a("el-button",{attrs:{disabled:0===t.paySelectedRows.length},on:{click:t.payDeleteRows}},[t._v("删除")]),a("el-button",{attrs:{disabled:0===t.paySelectedRows.length},on:{click:t.payCopyRows}},[t._v("复制")]),a("el-table",{style:{marginTop:"10px"},attrs:{data:t.payTableData,"row-key":function(t){return t.id},border:"",stripe:""},on:{"selection-change":t.payHandleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{label:"序号",prop:"id",width:"60"}}),a("el-table-column",{attrs:{label:"款项内容",prop:"payContent"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-select",{staticClass:"cInput",model:{value:e.row.payContent,callback:function(a){t.$set(e.row,"payContent",a)},expression:"scope.row.payContent"}},t._l(t.payTypes,(function(t){return a("el-option",{key:t.dictValue,attrs:{label:t.dictLabel,value:Number(t.dictValue)}})})),1)]}}])}),a("el-table-column",{attrs:{label:"付款日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.row.payDate,callback:function(a){t.$set(e.row,"payDate",a)},expression:"scope.row.payDate"}})],1)]}}])}),a("el-table-column",{attrs:{label:"付款单位",prop:"payer"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.payer,callback:function(a){t.$set(e.row,"payer",a)},expression:"scope.row.payer"}})]}}])}),a("el-table-column",{attrs:{label:"收款合同方",prop:"hName"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.hName,callback:function(a){t.$set(e.row,"hName",a)},expression:"scope.row.hName"}})]}}])}),a("el-table-column",{attrs:{label:"付款条件",prop:"payTerms"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{model:{value:e.row.payTerms,callback:function(a){t.$set(e.row,"payTerms",a)},expression:"scope.row.payTerms"}})]}}])}),a("el-table-column",{attrs:{label:"付款金额",prop:"payAmount"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{on:{blur:function(a){return t.payHandleBlur(e.row)},input:function(a){return t.payHandleInput(e.row)}},model:{value:e.row.payAmount,callback:function(a){t.$set(e.row,"payAmount",a)},expression:"scope.row.payAmount"}})]}}])}),a("el-table-column",{attrs:{label:"违约责任",prop:"debty"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{model:{value:e.row.debty,callback:function(a){t.$set(e.row,"debty",a)},expression:"scope.row.debty"}})]}}])})],1)],1),a("h3",[t._v("合同签署状态")]),a("el-form",{ref:"formData3",attrs:{model:t.qsFormData,rules:t.formRules3,size:"medium","label-width":"180px","label-position":"left"}},[a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"space-between",align:"top",gutter:15}},[a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"签署方数",prop:"gnSignatorycount"}},[a("el-select",{staticClass:"cInput",on:{change:t.qsHandleChange},model:{value:t.qsFormData.gnSignatorycount,callback:function(e){t.$set(t.qsFormData,"gnSignatorycount",e)},expression:"qsFormData.gnSignatorycount"}},t._l(t.qsOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"我方主体",prop:"gnSub"}},[a("el-input",{staticClass:"cInput",model:{value:t.qsFormData.gnSub,callback:function(e){t.$set(t.qsFormData,"gnSub",e)},expression:"qsFormData.gnSub"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方供应商",prop:"gnPbname"}},[a("el-input",{staticClass:"cInput",model:{value:t.qsFormData.gnPbname,callback:function(e){t.$set(t.qsFormData,"gnPbname",e)},expression:"qsFormData.gnPbname"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方供应商地址",prop:"gnPbaddress"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:""},model:{value:t.qsFormData.gnPbaddress,callback:function(e){t.$set(t.qsFormData,"gnPbaddress",e)},expression:"qsFormData.gnPbaddress"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方联系人",prop:"gnPbcontact"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:""},model:{value:t.qsFormData.gnPbcontact,callback:function(e){t.$set(t.qsFormData,"gnPbcontact",e)},expression:"qsFormData.gnPbcontact"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方联系方式",prop:"gnPbcif"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:""},model:{value:t.qsFormData.gnPbcif,callback:function(e){t.$set(t.qsFormData,"gnPbcif",e)},expression:"qsFormData.gnPbcif"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方开户行",prop:"gnPbbank"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:""},model:{value:t.qsFormData.gnPbbank,callback:function(e){t.$set(t.qsFormData,"gnPbbank",e)},expression:"qsFormData.gnPbbank"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方开户行账户",prop:"gnPbaccount"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:""},model:{value:t.qsFormData.gnPbaccount,callback:function(e){t.$set(t.qsFormData,"gnPbaccount",e)},expression:"qsFormData.gnPbaccount"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同方金额",prop:"gnPbamount"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:""},model:{value:t.qsFormData.gnPbamount,callback:function(e){t.$set(t.qsFormData,"gnPbamount",e)},expression:"qsFormData.gnPbamount"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"币别",prop:"gnPbcurrency"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:""},model:{value:t.qsFormData.gnPbcurrency,callback:function(e){t.$set(t.qsFormData,"gnPbcurrency",e)},expression:"qsFormData.gnPbcurrency"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"已支付金额",prop:"gnPbpayment"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:""},model:{value:t.qsFormData.gnPbpayment,callback:function(e){t.$set(t.qsFormData,"gnPbpayment",e)},expression:"qsFormData.gnPbpayment"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"锁定金额",prop:"gnPbfixedprice"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:""},model:{value:t.qsFormData.gnPbfixedprice,callback:function(e){t.$set(t.qsFormData,"gnPbfixedprice",e)},expression:"qsFormData.gnPbfixedprice"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"剩余金额",prop:"gnPbbalance"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:""},model:{value:t.qsFormData.gnPbbalance,callback:function(e){t.$set(t.qsFormData,"gnPbbalance",e)},expression:"qsFormData.gnPbbalance"}})],1)],1),1===t.qsFormData.gnSignatorycount?a("div",[a("el-divider",{attrs:{direction:"horizontal"}}),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"space-between",align:"top",gutter:15}},[a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方供应商",prop:"gnPcname"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:""},model:{value:t.qsFormData.gnPcname,callback:function(e){t.$set(t.qsFormData,"gnPcname",e)},expression:"qsFormData.gnPcname"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方供应商地址",prop:"gnPcaddress"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:""},model:{value:t.qsFormData.gnPcaddress,callback:function(e){t.$set(t.qsFormData,"gnPcaddress",e)},expression:"qsFormData.gnPcaddress"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方联系人",prop:"gnPccontact"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:""},model:{value:t.qsFormData.gnPccontact,callback:function(e){t.$set(t.qsFormData,"gnPccontact",e)},expression:"qsFormData.gnPccontact"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方联系方式",prop:"gnPccif"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:""},model:{value:t.qsFormData.gnPccif,callback:function(e){t.$set(t.qsFormData,"gnPccif",e)},expression:"qsFormData.gnPccif"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方开户行",prop:"gnPcbank"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:""},model:{value:t.qsFormData.gnPcbank,callback:function(e){t.$set(t.qsFormData,"gnPcbank",e)},expression:"qsFormData.gnPcbank"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方开户行账户",prop:"gnPcaccount"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:""},model:{value:t.qsFormData.gnPcaccount,callback:function(e){t.$set(t.qsFormData,"gnPcaccount",e)},expression:"qsFormData.gnPcaccount"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同方金额",prop:"gnPcamount"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:""},model:{value:t.qsFormData.gnPcamount,callback:function(e){t.$set(t.qsFormData,"gnPcamount",e)},expression:"qsFormData.gnPcamount"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"币别",prop:"gnPccurrency"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:""},model:{value:t.qsFormData.gnPccurrency,callback:function(e){t.$set(t.qsFormData,"gnPccurrency",e)},expression:"qsFormData.gnPccurrency"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"已支付金额",prop:"gnPcpayment"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:""},model:{value:t.qsFormData.gnPcpayment,callback:function(e){t.$set(t.qsFormData,"gnPcpayment",e)},expression:"qsFormData.gnPcpayment"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"锁定金额",prop:"gnPcfixedprice"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:""},model:{value:t.qsFormData.gnPcfixedprice,callback:function(e){t.$set(t.qsFormData,"gnPcfixedprice",e)},expression:"qsFormData.gnPcfixedprice"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"剩余金额",prop:"gnPcbalance"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:""},model:{value:t.qsFormData.gnPcbalance,callback:function(e){t.$set(t.qsFormData,"gnPcbalance",e)},expression:"qsFormData.gnPcbalance"}})],1)],1)],1):t._e()],1),a("h3",[t._v("合同签署文件")]),a("el-form",{ref:"elForm",attrs:{model:t.form,rules:t.rules3,size:"medium","label-width":"180px","label-position":"left"}},[a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"space-between",align:"top",gutter:15}},[a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同影像上传",prop:"eImage"}},[a("el-upload",{ref:"up1",staticClass:"upload-demo",attrs:{action:t.url,"before-remove":t.beforeRemove1,"auto-upload":!1,limit:1,"on-exceed":t.handleExceed1,"on-success":t.success1,"on-change":t.onchange1}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传合同影像")])],1)],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"附件上传",prop:"ComPubAttachments"}},[a("el-upload",{ref:"up2",staticClass:"upload-demo",attrs:{action:t.url,"before-remove":t.beforeRemove2,"auto-upload":!1,limit:1,"on-exceed":t.handleExceed2,"on-success":t.success2,"on-change":t.onchange2}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传附件")])],1)],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同文件",prop:"eDocuments"}},[a("el-upload",{ref:"up3",staticClass:"upload-demo",attrs:{action:t.url,"before-remove":t.beforeRemove3,"auto-upload":!1,limit:1,"on-exceed":t.handleExceed3,"on-success":t.success3,"on-change":t.onchange3}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传合同文件")])],1)],1)],1)],1)],1),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-button",{attrs:{size:"medium"},on:{click:t.back1}},[t._v("返回")]),a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:t.addXy}},[t._v("创建合同")])],1)])},l=[],o=a("5530"),i=a("2909"),s=(a("99af"),a("4de4"),a("caad"),a("d81d"),a("14d9"),a("13d5"),a("fb6a"),a("a434"),a("b0c0"),a("b680"),a("d3b7"),a("ac1f"),a("2532"),a("5319"),a("159b"),a("fdd2"),a("1dad")),r=a("7456"),c=a("37b4"),u=a("2986"),m={data:function(){return{url:"/prod-api/basic/supplier/upload1",gid:this.$route.query.gid,lTableData:[],total:0,total1:0,queryParams:{pageNum:1,pageSize:10,tName:null,tUnit:null,shui:null,tModel:null,tPrice:null,tid:null},queryParams1:{pageNum:1,pageSize:10,hName:null,hid:null,hQuality:null},supplierList:[],deviceList:[],sub:"",cpDialog:!1,GysDialog:!1,qsOptions:[{value:0,label:"双方签署"},{value:1,label:"三方签署"}],payTimeValue:"",lTotalSubtotal:0,lTableColumns:[],lSelectedRows:[],payTableData:[],paySelectedRows:[],payDateOptions:[],qdSelectedItem:"",mjOptions:[{value:1,label:"非密"},{value:2,label:"商密"}],cgOptions:[{value:1,label:"邀请招标"},{value:2,label:"公开招标"}],cgValue:"",loading:!0,title:"",open:!1,form:{hid:null,gid:null,eHname:null,eHcode:null,eType:null,eCon:1,eStartdate:null,eEnddate:null,eAmount:0,eDescription:null,tenderName:null,tenderNo:null,tenderWay:null,tenderType:null,eImage:null,eDocuments:null,eOpinion:null,eDeliveryTime:null,bsSign:{},comPubAttachments:{}},payForm:{eid:null,payContent:null,payDate:null,payer:null,hid:null,hName:null,payTerms:null,payAmount:0,debty:null},tenderTypes:[],payTypes:[],qsFormData:{gnSignatorycount:0,gnSub:"XX科技有限公司",gnPbid:null,gnPbname:null,gnPbaddress:null,gnPbcontact:null,gnPbcif:null,gnPbbank:null,gnPbaccount:null,gnPbamount:null,gnPbcurrency:"人民币",gnPbpayment:null,gnPbfixedprice:null,gnPbbalance:null,gnPcname:null,gnPcaddress:null,gnPccontact:null,gnPccif:null,gnPcbank:null,gnPcaccount:null,gnPcamount:null,gnPccurrency:null,gnPcpayment:null,gnPcfixedprice:null,gnPcbalance:null},hid:null,rules1:{eHname:[{required:!0,message:"合同名称不能为空",trigger:"blur"}],eStartdate:[{required:!0,message:"开始时间不能为空",trigger:"blur"}],eEnddate:[{required:!0,message:"结束时间不能为空",trigger:"blur"}],eDeliveryTime:[{required:!0,message:"交付时间不能为空",trigger:"blur"}]},form1:{inName:null},formRules3:{gnPbcif:[{required:!0,message:"乙方联系方式不能为空",trigger:"blur"},{pattern:/^1[3456789]\d{9}$/,message:"请输入正确的手机号码",trigger:"blur"}]},rules3:{},selectRow:null,fileList1:[],fileList2:[],fileList3:[],ComPubAttachments:{anSize:null,anUrl:null,anName:null},aid:null}},mounted:function(){this.lCalculateTotalSubtotal()},created:function(){var t=this;this.selectNoTenderBySid(),this.getDicts("bs_contract_pay").then((function(e){t.payTypes=e.data}))},methods:{onchange1:function(t,e){this.fileList1=e,console.log(this.fileList1,"fileList1 onchange"),0==t.size&&(this.$message.error("选择的文件不能为空，请重新选择！"),this.fileList1.splice(this.fileList1.indexOf(t[0]),1))},onchange2:function(t,e){this.fileList2=e,console.log(this.fileList2,"fileList2 onchange"),0==t.size&&(this.$message.error("选择的文件不能为空，请重新选择！"),this.fileList2.splice(this.fileList2.indexOf(t[0]),1))},onchange3:function(t,e){this.fileList3=e,console.log(this.fileList3,"fileList3 onchange"),0==t.size&&(this.$message.error("选择的文件不能为空，请重新选择！"),this.fileList3.splice(this.fileList3.indexOf(t[0]),1))},addXy:function(){this.submitNextUpload()},isNull:function(){var t=this;this.$refs.formData.validate((function(e){if(!e)return t.$message.warning("请填写完整信息"),!1;t.$refs.formData3.validate((function(e){if(!e)return t.$message.warning("请填写完整信息"),!1;t.add()}))}))},add:function(){var t=this;this.form.gid=this.gid,this.form["bsInventoryList"]=Object(i["a"])(this.lTableData).filter((function(t){return delete t.id,null!=t.tid})),this.form["bsPaymentList"]=Object(i["a"])(this.payTableData).filter((function(t){return delete t.id,!(null==t.payContent||null==t.payAmount)})),this.form.bsSign=this.qsFormData,this.form.comPubAttachments=this.ComPubAttachments,Object(r["g"])(this.form).then((function(e){console.log(e),"添加成功"===e.msg&&(t.$router.push("/noTender/noContract"),t.$message.success("创建成功"))}))},handleExceed1:function(t,e){this.$message.warning("当前限制选择 1 个文件，本次选择了 ".concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))},beforeRemove1:function(t){var e=this;return this.$modal.confirm("确定移除 ".concat(t.name,"？")).then((function(){e.fileList2=[],e.ComPubAttachments.anUrl=null,e.ComPubAttachments.anName=null,e.ComPubAttachments.anSize=null}))},success1:function(t){console.log(111),this.form.eImage=t.data.url,console.log("打印up1-------------------------"),console.log(this.form.eImage),this.submitNextUpload()},handleExceed2:function(t,e){this.$message.warning("当前限制选择 1 个文件，本次选择了 ".concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))},beforeRemove2:function(t){return this.$confirm("确定移除 ".concat(t.name,"？"))},success2:function(t,e){console.log(222),this.ComPubAttachments.anName=t.data.name,this.ComPubAttachments.anUrl=t.data.url,this.ComPubAttachments.anSize=e.size,console.log("打印up2-------------------------"),console.log(this.ComPubAttachments),this.submitNextUpload()},handleExceed3:function(t,e){this.$message.warning("当前限制选择 1 个文件，本次选择了 ".concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))},beforeRemove3:function(t){return this.$confirm("确定移除 ".concat(t.name,"？"))},success3:function(t){console.log(333),console.log(t),this.form.eDocuments=t.data.url,console.log("打印up3-------------------------"),console.log(this.form.eDocuments),this.submitNextUpload()},submitNextUpload:function(){this.fileList1.length>0&&null==this.form.eImage?this.$refs.up1.submit():this.fileList2.length>0&&null==this.ComPubAttachments.anUrl&&null==this.ComPubAttachments.anSize&&null==this.ComPubAttachments.anName?this.$refs.up2.submit():this.fileList3.length>0&&null==this.form.eDocuments?this.$refs.up3.submit():(console.log("打印提交-------------------------"),this.isNull())},spCountBlur:function(t){null==t.inVat&&(t.inVat=0),t.inSubtotal=(t.inCount*t.inVat).toFixed(2),this.lCalculateTotalSubtotal()},spCountChange:function(t){null==t.inVat&&(t.inVat=0),t.inSubtotal=(t.inCount*t.inVat).toFixed(2),this.lCalculateTotalSubtotal()},lCalculateTotalSubtotal:function(){var t=this;this.lTotalSubtotal=this.lTableData.reduce((function(e,a){var n=a.inSubtotal?parseFloat(a.inSubtotal):0,l=e+n;return t.form.eAmount=l.toFixed(2),t.qsFormData.gnPbamount=l.toFixed(2),l}),0)},selectBdList:function(){var t=this;Object(s["e"])({aid:this.aid}).then((function(e){console.log(e,"getItemsDevice"),e.rows.forEach((function(e,a){t.lTableData.push({id:a+1,inName:e.ppmDevice.tName,inModel:e.ppmDevice.tModel,inVat:(1.13*e.ppmDevice.tPrice).toFixed(2),inUnit:e.ppmDevice.tUnit,inSubtotal:(e.vCount*e.ppmDevice.tPrice*1.13).toFixed(2),tid:e.tid,inCount:e.vCount}),t.lTotalSubtotal+=e.vCount*e.ppmDevice.tPrice*1.13.toFixed(2),t.qsFormData.gnPbamount=t.lTotalSubtotal.toFixed(2),t.form.eAmount=t.lTotalSubtotal.toFixed(2)}))})),this.selectSupplier()},selectSupplier:function(){var t=this;Object(u["a"])(this.hid).then((function(e){var a=e.data;t.qsFormData.gnPbcontact=a.ywName,t.qsFormData.gnPbcif=a.ywPhone})),Object(c["a"])(this.hid).then((function(e){console.log(e);var a=e.data;t.qsFormData.gnPbname=a.hName,t.qsFormData.gnPbaddress=a.hAddress,t.qsFormData.gnPbbank=a.hBankAddress,t.qsFormData.gnPbaccount=a.hAccount,t.qsFormData.gnPbid=a.hid,t.form.hid=a.hid}))},handleRowClick:function(t){this.selectRow.inName=t.tName,this.selectRow.tid=t.tid,this.selectRow.inModel=t.tModel,this.selectRow.inUnit=t.tUnit,this.selectRow.tid=t.tid,this.selectRow.inVat=(1.13*t.tPrice).toFixed(2),this.selectRow.inCount=1,this.selectRow.inSubtotal=(this.selectRow.inCount*this.selectRow.inVat).toFixed(2),this.cpDialog=!1,this.lCalculateTotalSubtotal()},handleRowClick1:function(t){this.selectRow.hName=t.hName,this.selectRow.tid=t.tid,this.GysDialog=!1},closeDialog1:function(){this.cpDialog=!1},closeDialog2:function(){this.GysDialog=!1},selectNoTenderBySid:function(){var t=this;Object(s["g"])(this.gid).then((function(e){console.log(e,"res");var a=e.data;t.form.tenderName=a.gName,t.form.tenderNo=a.gCode,3===a.gTendertype?t.form.tenderWay="询价":5===a.gTendertype?t.form.tenderWay="竞争性谈判":t.form.tenderWay="单一来源",1===a.gIsPublic?t.form.tenderType="公开":t.form.tenderType="邀请",t.form.eType="一般采购合同",t.aid=a.xyId,t.hid=a.hid,t.selectBdList()}))},openCp:function(t){this.selectRow=t,this.cpDialog=!0,this.selectBdList()},openGys:function(t){this.selectRow=t,this.GysDialog=!0,this.selectGysList()},selectGysList:function(){var t=this;Object(c["c"])(this.queryParams1).then((function(e){console.log(e),t.supplierList=e.rows,t.total1=e.total}))},qsHandleChange:function(t){this.qsFormData.gnSignatorycount=t,0===this.gnSignatorycount?this.qsFormData.gnPccurrency=null:this.qsFormData.gnPccurrency="人民币"},back1:function(){this.$router.back()},lAddRow:function(){var t={};this.lTableColumns.forEach((function(e){t[e.prop]=""})),t.id=this.lTableData.length+1,t.inSubtotal=(0).toFixed(2),t.inCount=1,this.lTableData.push(t)},lDeleteRows:function(){var t=this;this.$confirm("确定删除选中的行吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.lTableData=t.lTableData.filter((function(e){return!t.lSelectedRows.includes(e)})),t.lSelectedRows=[],t.lUpdateRowIds(),t.lCalculateTotalSubtotal(),t.$message({type:"success",message:"删除成功!"})})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},lCopyRows:function(){var t=this,e=this.lSelectedRows.map((function(t){return Object(o["a"])({},t)}));e.forEach((function(e){e.id=t.lTableData.reduce((function(t,e){return Math.max(e.id,t)}),0)+1,t.lTableData.push(e)})),this.lCalculateTotalSubtotal()},lUpdateRowIds:function(){this.lTableData.forEach((function(t,e){t.id=e+1}))},lHandleSelectionChange:function(t){this.lSelectedRows=t},payAddRow:function(){var t={};t.id=this.payTableData.length+1,t.payer="XX科技有限公司",t.hName=this.qsFormData.gnPbname,t.hid=this.form.hid,this.payTableData.push(t)},payDeleteRows:function(){var t=this;this.$confirm("确定删除选中的行吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.payTableData=t.payTableData.filter((function(e){return!t.paySelectedRows.includes(e)})),t.paySelectedRows=[],t.payUpdateRowIds(),t.$message({type:"success",message:"删除成功!"})})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},payCopyRows:function(){var t=this,e=this.paySelectedRows.map((function(t){return Object(o["a"])({},t)}));e.forEach((function(e){e.id=t.payTableData.reduce((function(t,e){return Math.max(e.id,t)}),0)+1,t.payTableData.push(e)}))},payUpdateRowIds:function(){this.payTableData.forEach((function(t,e){t.id=e+1}))},payHandleSelectionChange:function(t){this.paySelectedRows=t},payHandleBlur:function(t){t.payAmount&&(t.payAmount=parseFloat(t.payAmount).toFixed(2));var e=this.payTableData.reduce((function(t,e){return t+(parseFloat(e.payAmount)||parseFloat(0))}),0);this.qsFormData.gnPbpayment=e.toFixed(2),this.qsFormData.gnPbbalance=(this.qsFormData.gnPbamount-this.qsFormData.gnPbpayment).toFixed(2)},payHandleInput:function(t){t.payAmount=t.payAmount.replace(/[^\d.]/g,"");var e=t.payAmount.indexOf(".");-1!==e&&(t.payAmount=t.payAmount.slice(0,e+1)+t.payAmount.slice(e+1).replace(/\./g,""));var a=t.payAmount.split(".");a[1]&&a[1].length>2&&(t.payAmount=a[0]+"."+a[1].slice(0,2))}}},d=m,p=(a("842d"),a("2877")),b=Object(p["a"])(d,n,l,!1,null,"1ec17f0a",null);e["default"]=b.exports},7456:function(t,e,a){"use strict";a.d(e,"m",(function(){return l})),a.d(e,"q",(function(){return o})),a.d(e,"f",(function(){return i})),a.d(e,"o",(function(){return s})),a.d(e,"e",(function(){return r})),a.d(e,"k",(function(){return c})),a.d(e,"n",(function(){return u})),a.d(e,"p",(function(){return m})),a.d(e,"b",(function(){return d})),a.d(e,"l",(function(){return p})),a.d(e,"u",(function(){return b})),a.d(e,"t",(function(){return f})),a.d(e,"j",(function(){return h})),a.d(e,"v",(function(){return g})),a.d(e,"h",(function(){return y})),a.d(e,"a",(function(){return w})),a.d(e,"c",(function(){return D})),a.d(e,"d",(function(){return v})),a.d(e,"i",(function(){return P})),a.d(e,"s",(function(){return S})),a.d(e,"g",(function(){return x})),a.d(e,"r",(function(){return C}));var n=a("b775");function l(t){return Object(n["a"])({url:"/ppm/device/list",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/ppm/items/selectItemsDevice",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/basic/management",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/basic/management/list",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/basic/contract",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/basic/contract/"+t,method:"get"})}function u(t){return Object(n["a"])({url:"/basic/inventory/list",method:"get",params:t})}function m(t){return Object(n["a"])({url:"/basic/payment/list",method:"get",params:t})}function d(t){return Object(n["a"])({url:"/basic/sign/list1",method:"get",params:t})}function p(t){return Object(n["a"])({url:"/basic/management/"+t,method:"get"})}function b(t){return Object(n["a"])({url:"/basic/management",method:"put",data:t})}function f(t){return Object(n["a"])({url:"/basic/contract",method:"put",data:t})}function h(t){return Object(n["a"])({url:"/basic/contract/selectCom",method:"get",params:{eid:t}})}function g(t){return Object(n["a"])({url:"/basic/contract/updateoHstatus",method:"put",data:t})}function y(t){return Object(n["a"])({url:"/basic/contract/del",method:"get",params:{eid:t}})}function w(t){return Object(n["a"])({url:"/basic/contract/HtCancel",method:"put",data:t})}function D(t){return Object(n["a"])({url:"/basic/management/XyCancel",method:"get",params:{oid:t}})}function v(t){return Object(n["a"])({url:"/ppm/framework/XyCancel",method:"get",params:{oid:t}})}function P(t){return Object(n["a"])({url:"/basic/management/delXy",method:"get",params:{oid:t}})}function S(t){return Object(n["a"])({url:"/ppm/framework/upOidbyOid",method:"put",data:t})}function x(t){return Object(n["a"])({url:"/basic/contract/noTender",method:"post",data:t})}function C(t){return Object(n["a"])({url:"/bidding/candidate/getSuppHid",method:"get",params:{sid:t}})}},"842d":function(t,e,a){"use strict";a("8b07")},"8b07":function(t,e,a){}}]);