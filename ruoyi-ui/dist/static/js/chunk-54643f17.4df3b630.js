(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54643f17"],{"02c5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"con"},[a("h2",[t._v("采购合同")]),a("el-divider",{attrs:{direction:"horizontal"}}),a("el-form",{ref:"elForm",attrs:{model:t.form,rules:t.rules1,size:"medium","label-width":"180px","label-position":"left"}},[a("h3",[t._v("合同基本信息")]),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"space-between",align:"top",gutter:15}},[a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同名称",prop:"eHname"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.form.eHname,callback:function(e){t.$set(t.form,"eHname",e)},expression:"form.eHname"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同编号",prop:"eHcode"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",placeholder:"系统自动生成",readonly:""},model:{value:t.form.eHcode,callback:function(e){t.$set(t.form,"eHcode",e)},expression:"form.eHcode"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"类型",prop:"eType"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.form.eType,callback:function(e){t.$set(t.form,"eType",e)},expression:"form.eType"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"密级",prop:"eCon"}},[a("el-select",{staticClass:"cInput",attrs:{placeholder:"请选择",disabled:""},model:{value:t.form.eCon,callback:function(e){t.$set(t.form,"eCon",e)},expression:"form.eCon"}},t._l(t.mjOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"开始时间",prop:"eStartdate"}},[a("el-date-picker",{staticClass:"cInput",attrs:{type:"date",readonly:""},model:{value:t.form.eStartdate,callback:function(e){t.$set(t.form,"eStartdate",e)},expression:"form.eStartdate"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"结束时间",prop:"eEnddate"}},[a("el-date-picker",{staticClass:"cInput",attrs:{type:"date",readonly:""},model:{value:t.form.eEnddate,callback:function(e){t.$set(t.form,"eEnddate",e)},expression:"form.eEnddate"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"交付日期",prop:"eDeliveryTime"}},[a("el-date-picker",{staticClass:"cInput",attrs:{type:"date",readonly:""},model:{value:t.form.eDeliveryTime,callback:function(e){t.$set(t.form,"eDeliveryTime",e)},expression:"form.eDeliveryTime"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同金额",prop:"eAmount"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.form.eAmount,callback:function(e){t.$set(t.form,"eAmount",e)},expression:"form.eAmount"}}),a("span",{staticStyle:{color:"red"}},[t._v(" * 合同标的清单总价")])],1),a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"合同情况说明",prop:"eDescription"}},[a("el-col",[a("el-input",{staticClass:"cInput",attrs:{type:"textarea",rows:4,clearable:"",readonly:""},model:{value:t.form.eDescription,callback:function(e){t.$set(t.form,"eDescription",e)},expression:"form.eDescription"}})],1)],1)],1),a("h3",[t._v("相关项目信息")]),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"space-between",align:"top",gutter:15}},[a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"相关项目名称",prop:"tenderName"}},[a("el-input",{staticClass:"cInput",attrs:{readonly:""},model:{value:t.form.tenderName,callback:function(e){t.$set(t.form,"tenderName",e)},expression:"form.tenderName"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"项目编号",prop:"tenderNo"}},[a("el-input",{staticClass:"cInput",attrs:{readonly:""},model:{value:t.form.tenderNo,callback:function(e){t.$set(t.form,"tenderNo",e)},expression:"form.tenderNo"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"招标方式",prop:"tenderWay"}},[a("el-input",{staticClass:"cInput",attrs:{readonly:""},model:{value:t.form.tenderWay,callback:function(e){t.$set(t.form,"tenderWay",e)},expression:"form.tenderWay"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"业务类型",prop:"tenderType"}},[a("el-input",{staticClass:"cInput",attrs:{readonly:""},model:{value:t.form.tenderType,callback:function(e){t.$set(t.form,"tenderType",e)},expression:"form.tenderType"}})],1)],1)],1),a("h3",[t._v("合同标的清单")]),a("div",{staticClass:"cl"},[a("el-table",{style:{marginTop:"10px"},attrs:{data:t.lTableData,"row-key":function(t){return t.id},border:"",stripe:""}},[a("el-table-column",{attrs:{label:"序号",prop:"id",width:"60"}}),a("el-table-column",{attrs:{label:"产品名称",prop:"inName",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inName,callback:function(a){t.$set(e.row,"inName",a)},expression:"scope.row.inName"}},[a("i",{staticClass:"el-icon-search",staticStyle:{"margin-top":"10px"},attrs:{slot:"suffix"},on:{click:function(t){}},slot:"suffix"})])]}}])}),a("el-table-column",{attrs:{label:"产品编码",prop:"tid",width:"163"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.tid,callback:function(a){t.$set(e.row,"tid",a)},expression:"scope.row.tid"}})]}}])}),a("el-table-column",{attrs:{label:"规格型号",prop:"inModel",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inModel,callback:function(a){t.$set(e.row,"inModel",a)},expression:"scope.row.inModel"}})]}}])}),a("el-table-column",{attrs:{label:"单位",prop:"inUnit",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inUnit,callback:function(a){t.$set(e.row,"inUnit",a)},expression:"scope.row.inUnit"}})]}}])}),a("el-table-column",{attrs:{label:"含税单价",prop:"inVat",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inVat,callback:function(a){t.$set(e.row,"inVat",a)},expression:"scope.row.inVat"}})]}}])}),a("el-table-column",{attrs:{label:"数量",prop:"inCount",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input-number",{staticStyle:{width:"120px"},attrs:{min:1,precision:0,"controls-position":"right",disabled:!0},on:{blur:function(a){return t.spCountBlur(e.row)},change:function(a){return t.spCountChange(e.row)}},model:{value:e.row.inCount,callback:function(a){t.$set(e.row,"inCount",a)},expression:"scope.row.inCount"}})]}}])}),a("el-table-column",{attrs:{label:"小计",prop:"inSubtotal"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inSubtotal,callback:function(a){t.$set(e.row,"inSubtotal",a)},expression:"scope.row.inSubtotal"}})]}}])})],1),a("div",{style:{textAlign:"right"}},[a("span",{style:{marginRight:"100px"}},[t._v("总价:")]),a("span",{style:{fontWeight:"700"}},[t._v(t._s(t.lTotalSubtotal))])])],1),a("h3",[t._v("合同付款约定")]),a("div",{staticClass:"cl"},[a("el-table",{style:{marginTop:"10px"},attrs:{data:t.payTableData,"row-key":function(t){return t.id},border:"",stripe:""}},[a("el-table-column",{attrs:{label:"序号",prop:"id",width:"60"}}),a("el-table-column",{attrs:{label:"款项内容",prop:"payContent"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-select",{staticClass:"cInput",attrs:{disabled:""},model:{value:e.row.payContent,callback:function(a){t.$set(e.row,"payContent",a)},expression:"scope.row.payContent"}},t._l(t.payTypes,(function(t){return a("el-option",{key:t.dictValue,attrs:{label:t.dictLabel,value:Number(t.dictValue)}})})),1)]}}])}),a("el-table-column",{attrs:{label:"付款日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",readonly:""},model:{value:e.row.payDate,callback:function(a){t.$set(e.row,"payDate",a)},expression:"scope.row.payDate"}})],1)]}}])}),a("el-table-column",{attrs:{label:"付款单位",prop:"payer"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.payer,callback:function(a){t.$set(e.row,"payer",a)},expression:"scope.row.payer"}})]}}])}),a("el-table-column",{attrs:{label:"收款合同方",prop:"hName"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.hName,callback:function(a){t.$set(e.row,"hName",a)},expression:"scope.row.hName"}})]}}])}),a("el-table-column",{attrs:{label:"付款条件",prop:"payTerms"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.payTerms,callback:function(a){t.$set(e.row,"payTerms",a)},expression:"scope.row.payTerms"}})]}}])}),a("el-table-column",{attrs:{label:"付款金额",prop:"payAmount"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{disabled:!0},on:{blur:function(a){return t.payHandleBlur(e.row)},input:function(a){return t.payHandleInput(e.row)}},model:{value:e.row.payAmount,callback:function(a){t.$set(e.row,"payAmount",a)},expression:"scope.row.payAmount"}})]}}])}),a("el-table-column",{attrs:{label:"违约责任",prop:"debty"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.debty,callback:function(a){t.$set(e.row,"debty",a)},expression:"scope.row.debty"}})]}}])})],1)],1),a("h3",[t._v("合同签署状态")]),a("el-form",{ref:"qsForm",attrs:{model:t.qsFormData,rules:t.rules2,size:"medium","label-width":"180px","label-position":"left"}},[a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"space-between",align:"top",gutter:15}},[a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"签署方数",prop:"gnSignatorycount"}},[a("el-select",{staticClass:"cInput",attrs:{disabled:""},model:{value:t.qsFormData.gnSignatorycount,callback:function(e){t.$set(t.qsFormData,"gnSignatorycount",e)},expression:"qsFormData.gnSignatorycount"}},t._l(t.qsOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"我方主体",prop:"gnSub"}},[a("el-input",{staticClass:"cInput",attrs:{readonly:""},model:{value:t.qsFormData.gnSub,callback:function(e){t.$set(t.qsFormData,"gnSub",e)},expression:"qsFormData.gnSub"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方供应商",prop:"gnPbname"}},[a("el-input",{staticClass:"cInput",attrs:{readonly:""},model:{value:t.qsFormData.gnPbname,callback:function(e){t.$set(t.qsFormData,"gnPbname",e)},expression:"qsFormData.gnPbname"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方供应商地址",prop:"gnPbaddress"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbaddress,callback:function(e){t.$set(t.qsFormData,"gnPbaddress",e)},expression:"qsFormData.gnPbaddress"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方联系人",prop:"gnPbcontact"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbcontact,callback:function(e){t.$set(t.qsFormData,"gnPbcontact",e)},expression:"qsFormData.gnPbcontact"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方联系方式",prop:"gnPbcif"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbcif,callback:function(e){t.$set(t.qsFormData,"gnPbcif",e)},expression:"qsFormData.gnPbcif"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方开户行",prop:"gnPbbank"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbbank,callback:function(e){t.$set(t.qsFormData,"gnPbbank",e)},expression:"qsFormData.gnPbbank"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方开户行账户",prop:"gnPbaccount"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbaccount,callback:function(e){t.$set(t.qsFormData,"gnPbaccount",e)},expression:"qsFormData.gnPbaccount"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同方金额",prop:"gnPbamount"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbamount,callback:function(e){t.$set(t.qsFormData,"gnPbamount",e)},expression:"qsFormData.gnPbamount"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"币别",prop:"gnPbcurrency"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbcurrency,callback:function(e){t.$set(t.qsFormData,"gnPbcurrency",e)},expression:"qsFormData.gnPbcurrency"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"已支付金额",prop:"gnPbpayment"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbpayment,callback:function(e){t.$set(t.qsFormData,"gnPbpayment",e)},expression:"qsFormData.gnPbpayment"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"锁定金额",prop:"gnPbfixedprice"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbfixedprice,callback:function(e){t.$set(t.qsFormData,"gnPbfixedprice",e)},expression:"qsFormData.gnPbfixedprice"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"剩余金额",prop:"gnPbbalance"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbbalance,callback:function(e){t.$set(t.qsFormData,"gnPbbalance",e)},expression:"qsFormData.gnPbbalance"}})],1)],1),1===t.qsFormData.gnSignatorycount?a("div",[a("el-divider",{attrs:{direction:"horizontal"}}),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"space-between",align:"top",gutter:15}},[a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方供应商",prop:"gnPcname"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcname,callback:function(e){t.$set(t.qsFormData,"gnPcname",e)},expression:"qsFormData.gnPcname"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方供应商地址",prop:"gnPcaddress"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcaddress,callback:function(e){t.$set(t.qsFormData,"gnPcaddress",e)},expression:"qsFormData.gnPcaddress"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方联系人",prop:"gnPccontact"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPccontact,callback:function(e){t.$set(t.qsFormData,"gnPccontact",e)},expression:"qsFormData.gnPccontact"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方联系方式",prop:"gnPccif"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPccif,callback:function(e){t.$set(t.qsFormData,"gnPccif",e)},expression:"qsFormData.gnPccif"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方开户行",prop:"gnPcbank"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcbank,callback:function(e){t.$set(t.qsFormData,"gnPcbank",e)},expression:"qsFormData.gnPcbank"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方开户行账户",prop:"gnPcaccount"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcaccount,callback:function(e){t.$set(t.qsFormData,"gnPcaccount",e)},expression:"qsFormData.gnPcaccount"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同方金额",prop:"gnPcamount"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcamount,callback:function(e){t.$set(t.qsFormData,"gnPcamount",e)},expression:"qsFormData.gnPcamount"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"币别",prop:"gnPccurrency"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPccurrency,callback:function(e){t.$set(t.qsFormData,"gnPccurrency",e)},expression:"qsFormData.gnPccurrency"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"已支付金额",prop:"gnPcpayment"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcpayment,callback:function(e){t.$set(t.qsFormData,"gnPcpayment",e)},expression:"qsFormData.gnPcpayment"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"锁定金额",prop:"gnPcfixedprice"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcfixedprice,callback:function(e){t.$set(t.qsFormData,"gnPcfixedprice",e)},expression:"qsFormData.gnPcfixedprice"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"剩余金额",prop:"gnPcbalance"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcbalance,callback:function(e){t.$set(t.qsFormData,"gnPcbalance",e)},expression:"qsFormData.gnPcbalance"}})],1)],1)],1):t._e()],1),a("h3",[t._v("合同签署文件")]),a("el-form",{ref:"elForm",attrs:{model:t.form,rules:t.rules3,size:"medium","label-width":"180px","label-position":"left"}},[a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"space-between",align:"top",gutter:15}},[a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同影像上传",prop:"eImage"}},[a("el-upload",{ref:"up1",staticClass:"upload-demo",attrs:{action:t.url,"auto-upload":!1,limit:1,"file-list":t.fileList1,disabled:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传合同影像")])],1)],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"附件上传",prop:"ComPubAttachments"}},[a("el-upload",{ref:"up2",staticClass:"upload-demo",attrs:{action:t.url,"auto-upload":!1,limit:1,"file-list":t.fileList2,disabled:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传附件")])],1)],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同文件",prop:"eDocuments"}},[a("el-upload",{ref:"up3",staticClass:"upload-demo",attrs:{action:t.url,"auto-upload":!1,limit:1,"file-list":t.fileList3,disabled:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传合同文件")])],1)],1)],1)],1)],1),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-button",{attrs:{size:"medium"},on:{click:t.back1}},[t._v("返回")])],1)])},l=[],r=(a("14d9"),a("b680"),a("d3b7"),a("159b"),a("7456")),o=a("1dad"),s={data:function(){return{fileList1:[],fileList2:[],fileList3:[],url:"/prod-api/basic/supplier/upload1",eid:this.$route.query.eid,lTableData:[],total:0,total1:0,queryParams:{pageNum:1,pageSize:10,tName:null,tUnit:null,shui:null,tModel:null,tPrice:null,tid:null},queryParams1:{pageNum:1,pageSize:10,hName:null,hid:null,hQuality:null},supplierList:[],deviceList:[],sub:"",cpDialog:!1,GysDialog:!1,qsOptions:[{value:0,label:"双方签署"},{value:1,label:"三方签署"}],payTimeValue:"",lTotalSubtotal:0,lTableColumns:[],lSelectedRows:[],payTableData:[],paySelectedRows:[],payDateOptions:[],qdSelectedItem:"",mjOptions:[{value:1,label:"非密"},{value:2,label:"商密"}],cgOptions:[{value:1,label:"邀请招标"},{value:2,label:"公开招标"}],cgValue:"",loading:!0,title:"",open:!1,form:{hid:null,sid:null,eid:null,eHname:null,eHcode:null,eType:null,eCon:null,eStatus:null,eStartdate:null,eEnddate:null,eAmount:null,eDescription:null,tenderName:null,tenderNo:null,tenderWay:null,tenderType:null,eImage:null,eDocuments:null,eOpinion:null,eDeliveryTime:null,bsSign:{},comPubAttachments:{}},payForm:{eid:null,payContent:null,payDate:null,payer:null,hid:null,hName:null,payTerms:null,payAmount:0,debty:null},tenderTypes:[],payTypes:[],qsFormData:{gnSignatorycount:0,gnSub:"XX科技有限公司",gnPbid:null,gnPbname:null,gnPbaddress:null,gnPbcontact:null,gnPbcif:null,gnPbbank:null,gnPbaccount:null,gnPbamount:null,gnPbcurrency:"人民币",gnPbpayment:null,gnPbfixedprice:null,gnPbbalance:null,gnPcname:null,gnPcaddress:null,gnPccontact:null,gnPccif:null,gnPcbank:null,gnPcaccount:null,gnPcamount:null,gnPccurrency:null,gnPcpayment:null,gnPcfixedprice:null,gnPcbalance:null},hid:2,rules1:{eHname:[{required:!0,message:"合同名称不能为空",trigger:"blur"}],eStartdate:[{required:!0,message:"开始时间不能为空",trigger:"blur"}],eEnddate:[{required:!0,message:"结束时间不能为空",trigger:"blur"}]},rules2:{},rules3:{},selectRow:null,ComPubAttachments:{anSize:null,anUrl:null,anName:null}}},mounted:function(){},created:function(){var t=this;this.selectContractByEid(),this.selectListInventory(),this.selectListPayment(),this.getSign(),this.getComPubAttachments(),this.getDicts("bs_contract_pay").then((function(e){t.payTypes=e.data}))},methods:{updateHt:function(){var t=this;this.form.eStatus=1,console.log(this.form),Object(r["t"])(this.form).then((function(e){console.log(e.msg),t.$message.success("已通过"),t.$router.push("/contract/cm")}))},updateBh:function(){var t=this;this.form.eStatus=4,Object(r["t"])(this.form).then((function(e){console.log(e.msg),t.$message.error("已驳回"),t.$router.push("/contract/cm")}))},selectContractByEid:function(){var t=this;Object(r["k"])(this.eid).then((function(e){var a=e.data;if(t.form.eid=a.eid,t.form.eHname=a.eHname,t.form.eHcode=a.eHcode,t.form.eDescription=a.eDescription,t.form.eStartdate=a.eStartdate,t.form.eEnddate=a.eEnddate,t.form.eDeliveryTime=a.eDeliveryTime,t.form.eAmount=a.eAmount.toFixed(2),t.form.eType=a.eType,t.form.eCon=a.eCon,t.form.gid=a.gid,t.form.eOpinion=a.eOpinion,console.log(a.eOpinion),null!=a.eImage&&""!=a.eImage){var n=a.eImage.substring(a.eImage.lastIndexOf("/")+1),l=[{name:n,url:a.eImage}];t.fileList1=l,t.form.eImage=a.eImage}else t.fileList1=[],t.fileList1.eImage=null;if(null!=a.eDocuments&&""!=a.eDocuments){var r=a.eDocuments.substring(a.eDocuments.lastIndexOf("/")+1),o=[{name:r,url:a.eDocuments}];t.fileList3=o,t.form.eDocuments=a.eDocuments}else t.fileList3=[],t.form.eDocuments=null;t.selectTenderBySid()}))},selectTenderBySid:function(){var t=this;Object(o["g"])(this.form.gid).then((function(e){console.log(e,"res");var a=e.data;t.form.tenderName=a.gName,t.form.tenderNo=a.gCode,3===a.gTendertype?t.form.tenderWay="询价":5===a.gTendertype?t.form.tenderWay="竞争性谈判":t.form.tenderWay="单一来源",1===a.gIsPublic?t.form.tenderType="公开":t.form.tenderType="邀请",t.form.eType="一般采购合同",t.aid=a.xyId,t.hid=a.hid}))},selectListInventory:function(){var t=this;this.loading=!0,Object(r["n"])({eid:this.eid}).then((function(e){var a=e.rows;a.forEach((function(e,a){t.lTableData.push({id:a+1,inName:e.inName,inModel:e.inModel,inVat:e.inVat.toFixed(2),inUnit:e.inUnit,inSubtotal:(e.inCount*e.inVat).toFixed(2),tid:e.tid,inCount:e.inCount})})),t.loading=!1}))},selectListPayment:function(){var t=this;Object(r["p"])({eid:this.eid}).then((function(e){var a=e.rows;a.forEach((function(e,a){t.payTableData.push({id:a+1,hid:e.hid,hName:e.hName,payContent:e.payContent,payAmount:e.payAmount.toFixed(2),payDate:e.payDate,payTerms:e.payTerms,payer:e.payer,debty:e.debty})}))}))},getSign:function(){var t=this;Object(r["b"])({eid:this.eid}).then((function(e){t.qsFormData=e.data,t.lTotalSubtotal=e.data.gnPbamount}))},getComPubAttachments:function(){var t=this;Object(r["j"])(this.eid).then((function(e){if(console.log("查询附件信息"),console.log(e),null!=e.data){var a=[{name:e.data.anName,url:e.data.anUrl,size:e.data.anSize}];t.fileList2=a,t.ComPubAttachments.anUrl=e.data.anUrl,t.ComPubAttachments.anName=e.data.anName,t.ComPubAttachments.anSize=e.data.anSize}else t.fileList2=[],t.ComPubAttachments.anUrl=null,t.ComPubAttachments.anName=null,t.ComPubAttachments.anSize=null}))},back1:function(){this.$router.back()}}},i=s,c=(a("f830"),a("2877")),u=Object(c["a"])(i,n,l,!1,null,"5f9904ec",null);e["default"]=u.exports},"1dad":function(t,e,a){"use strict";a.d(e,"j",(function(){return l})),a.d(e,"f",(function(){return r})),a.d(e,"g",(function(){return o})),a.d(e,"e",(function(){return s})),a.d(e,"h",(function(){return i})),a.d(e,"d",(function(){return c})),a.d(e,"l",(function(){return u})),a.d(e,"k",(function(){return m})),a.d(e,"a",(function(){return d})),a.d(e,"i",(function(){return p})),a.d(e,"b",(function(){return b})),a.d(e,"c",(function(){return f}));var n=a("b775");function l(t){return Object(n["a"])({url:"/nonbidding/pro/list",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/nonbidding/plan/"+t,method:"get"})}function o(t){return Object(n["a"])({url:"/nonbidding/pro/"+t,method:"get"})}function s(t){return Object(n["a"])({url:"/nonbidding/items/getItemsDevice",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/nonbidding/pro/selectQuotation",method:"get",params:t})}function c(t){return Object(n["a"])({url:"/nonbidding/pro/selectCom",method:"get",params:{aid:t}})}function u(t){return Object(n["a"])({url:"/nonbidding/pro",method:"put",data:t})}function m(t){return Object(n["a"])({url:"/nonbidding/pro/list1",method:"get",params:t})}function d(t){return Object(n["a"])({url:"/nonbidding/pro/addCom",method:"post",data:t,headers:{isRepeatSubmit:!0}})}function p(t){return Object(n["a"])({url:"/basic/contract/list1",method:"get",params:t})}function b(t){return Object(n["a"])({url:"/basic/contract/del1",method:"get",params:{eid:t}})}function f(t){return Object(n["a"])({url:"/nonbidding/pro/delByGfId",method:"delete",params:{gfId:t}})}},"6c62":function(t,e,a){},7456:function(t,e,a){"use strict";a.d(e,"m",(function(){return l})),a.d(e,"q",(function(){return r})),a.d(e,"f",(function(){return o})),a.d(e,"o",(function(){return s})),a.d(e,"e",(function(){return i})),a.d(e,"k",(function(){return c})),a.d(e,"n",(function(){return u})),a.d(e,"p",(function(){return m})),a.d(e,"b",(function(){return d})),a.d(e,"l",(function(){return p})),a.d(e,"u",(function(){return b})),a.d(e,"t",(function(){return f})),a.d(e,"j",(function(){return y})),a.d(e,"v",(function(){return g})),a.d(e,"h",(function(){return h})),a.d(e,"a",(function(){return w})),a.d(e,"c",(function(){return P})),a.d(e,"d",(function(){return v})),a.d(e,"i",(function(){return D})),a.d(e,"s",(function(){return S})),a.d(e,"g",(function(){return k})),a.d(e,"r",(function(){return x}));var n=a("b775");function l(t){return Object(n["a"])({url:"/ppm/device/list",method:"get",params:t})}function r(t){return Object(n["a"])({url:"/ppm/items/selectItemsDevice",method:"get",params:t})}function o(t){return Object(n["a"])({url:"/basic/management",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/basic/management/list",method:"get",params:t})}function i(t){return Object(n["a"])({url:"/basic/contract",method:"post",data:t})}function c(t){return Object(n["a"])({url:"/basic/contract/"+t,method:"get"})}function u(t){return Object(n["a"])({url:"/basic/inventory/list",method:"get",params:t})}function m(t){return Object(n["a"])({url:"/basic/payment/list",method:"get",params:t})}function d(t){return Object(n["a"])({url:"/basic/sign/list1",method:"get",params:t})}function p(t){return Object(n["a"])({url:"/basic/management/"+t,method:"get"})}function b(t){return Object(n["a"])({url:"/basic/management",method:"put",data:t})}function f(t){return Object(n["a"])({url:"/basic/contract",method:"put",data:t})}function y(t){return Object(n["a"])({url:"/basic/contract/selectCom",method:"get",params:{eid:t}})}function g(t){return Object(n["a"])({url:"/basic/contract/updateoHstatus",method:"put",data:t})}function h(t){return Object(n["a"])({url:"/basic/contract/del",method:"get",params:{eid:t}})}function w(t){return Object(n["a"])({url:"/basic/contract/HtCancel",method:"put",data:t})}function P(t){return Object(n["a"])({url:"/basic/management/XyCancel",method:"get",params:{oid:t}})}function v(t){return Object(n["a"])({url:"/ppm/framework/XyCancel",method:"get",params:{oid:t}})}function D(t){return Object(n["a"])({url:"/basic/management/delXy",method:"get",params:{oid:t}})}function S(t){return Object(n["a"])({url:"/ppm/framework/upOidbyOid",method:"put",data:t})}function k(t){return Object(n["a"])({url:"/basic/contract/noTender",method:"post",data:t})}function x(t){return Object(n["a"])({url:"/bidding/candidate/getSuppHid",method:"get",params:{sid:t}})}},f830:function(t,e,a){"use strict";a("6c62")}}]);