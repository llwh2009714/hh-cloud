"use strict";(self["webpackChunkruoyi"]=self["webpackChunkruoyi"]||[]).push([[9834],{69834:function(t,e,a){a.r(e),a.d(e,{default:function(){return m}});var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"con"},[a("h2",[t._v("采购合同")]),a("el-divider",{attrs:{direction:"horizontal"}}),a("el-form",{ref:"elForm",attrs:{model:t.form,rules:t.rules1,size:"medium","label-width":"180px","label-position":"left"}},[a("h3",[t._v("合同基本信息")]),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"space-between",align:"top",gutter:15}},[a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同名称",prop:"eHname"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.form.eHname,callback:function(e){t.$set(t.form,"eHname",e)},expression:"form.eHname"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同编号",prop:"eHcode"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",placeholder:"系统自动生成",readonly:""},model:{value:t.form.eHcode,callback:function(e){t.$set(t.form,"eHcode",e)},expression:"form.eHcode"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"类型",prop:"eType"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.form.eType,callback:function(e){t.$set(t.form,"eType",e)},expression:"form.eType"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"密级",prop:"eCon"}},[a("el-select",{staticClass:"cInput",attrs:{placeholder:"请选择",disabled:""},model:{value:t.form.eCon,callback:function(e){t.$set(t.form,"eCon",e)},expression:"form.eCon"}},t._l(t.mjOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"开始时间",prop:"eStartdate"}},[a("el-date-picker",{staticClass:"cInput",attrs:{type:"date",readonly:""},model:{value:t.form.eStartdate,callback:function(e){t.$set(t.form,"eStartdate",e)},expression:"form.eStartdate"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"结束时间",prop:"eEnddate"}},[a("el-date-picker",{staticClass:"cInput",attrs:{type:"date",readonly:""},model:{value:t.form.eEnddate,callback:function(e){t.$set(t.form,"eEnddate",e)},expression:"form.eEnddate"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"交付日期",prop:"eDeliveryTime"}},[a("el-date-picker",{staticClass:"cInput",attrs:{type:"date",readonly:""},model:{value:t.form.eDeliveryTime,callback:function(e){t.$set(t.form,"eDeliveryTime",e)},expression:"form.eDeliveryTime"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同金额",prop:"eAmount"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.form.eAmount,callback:function(e){t.$set(t.form,"eAmount",e)},expression:"form.eAmount"}}),a("span",{staticStyle:{color:"red"}},[t._v(" * 合同标的清单总价")])],1),a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"合同情况说明",prop:"eDescription"}},[a("el-col",[a("el-input",{staticClass:"cInput",attrs:{type:"textarea",rows:4,clearable:"",readonly:""},model:{value:t.form.eDescription,callback:function(e){t.$set(t.form,"eDescription",e)},expression:"form.eDescription"}})],1)],1)],1),a("h3",[t._v("相关项目信息")]),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"space-between",align:"top",gutter:15}},[a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"相关项目名称",prop:"tenderName"}},[a("el-input",{staticClass:"cInput",attrs:{readonly:""},model:{value:t.form.tenderName,callback:function(e){t.$set(t.form,"tenderName",e)},expression:"form.tenderName"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"项目编号",prop:"tenderNo"}},[a("el-input",{staticClass:"cInput",attrs:{readonly:""},model:{value:t.form.tenderNo,callback:function(e){t.$set(t.form,"tenderNo",e)},expression:"form.tenderNo"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"招标方式",prop:"tenderWay"}},[a("el-input",{staticClass:"cInput",attrs:{readonly:""},model:{value:t.form.tenderWay,callback:function(e){t.$set(t.form,"tenderWay",e)},expression:"form.tenderWay"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"业务类型",prop:"tenderType"}},[a("el-input",{staticClass:"cInput",attrs:{readonly:""},model:{value:t.form.tenderType,callback:function(e){t.$set(t.form,"tenderType",e)},expression:"form.tenderType"}})],1)],1)],1),a("h3",[t._v("合同标的清单")]),a("div",{staticClass:"cl"},[a("el-table",{style:{marginTop:"10px"},attrs:{data:t.lTableData,"row-key":function(t){return t.id},border:"",stripe:""}},[a("el-table-column",{attrs:{label:"序号",prop:"id",width:"60"}}),a("el-table-column",{attrs:{label:"产品名称",prop:"inName",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inName,callback:function(a){t.$set(e.row,"inName",a)},expression:"scope.row.inName"}},[a("i",{staticClass:"el-icon-search",staticStyle:{"margin-top":"10px"},attrs:{slot:"suffix"},on:{click:function(a){return t.openCp(e.row)}},slot:"suffix"})])]}}])}),a("el-table-column",{attrs:{label:"产品编码",prop:"tid",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.tid,callback:function(a){t.$set(e.row,"tid",a)},expression:"scope.row.tid"}})]}}])}),a("el-table-column",{attrs:{label:"规格型号",prop:"inModel",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inModel,callback:function(a){t.$set(e.row,"inModel",a)},expression:"scope.row.inModel"}})]}}])}),a("el-table-column",{attrs:{label:"单位",prop:"inUnit",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inUnit,callback:function(a){t.$set(e.row,"inUnit",a)},expression:"scope.row.inUnit"}})]}}])}),a("el-table-column",{attrs:{label:"含税单价",prop:"inVat",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inVat,callback:function(a){t.$set(e.row,"inVat",a)},expression:"scope.row.inVat"}})]}}])}),a("el-table-column",{attrs:{label:"数量",prop:"inCount",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input-number",{staticStyle:{width:"120px"},attrs:{min:1,precision:0,"controls-position":"right"},on:{blur:function(a){return t.spCountBlur(e.row)},change:function(a){return t.spCountChange(e.row)}},model:{value:e.row.inCount,callback:function(a){t.$set(e.row,"inCount",a)},expression:"scope.row.inCount"}})]}}])}),a("el-table-column",{attrs:{label:"小计",prop:"inSubtotal"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.inSubtotal,callback:function(a){t.$set(e.row,"inSubtotal",a)},expression:"scope.row.inSubtotal"}})]}}])})],1),a("div",{style:{textAlign:"right"}},[a("span",{style:{marginRight:"100px"}},[t._v("总价:")]),a("span",{style:{fontWeight:"700"}},[t._v(t._s(t.lTotalSubtotal))])])],1),a("h3",[t._v("合同付款约定")]),a("div",{staticClass:"cl"},[a("el-table",{style:{marginTop:"10px"},attrs:{data:t.payTableData,"row-key":function(t){return t.id},border:"",stripe:""}},[a("el-table-column",{attrs:{label:"序号",prop:"id",width:"60"}}),a("el-table-column",{attrs:{label:"款项内容",prop:"payContent"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-select",{staticClass:"cInput",attrs:{disabled:""},model:{value:e.row.payContent,callback:function(a){t.$set(e.row,"payContent",a)},expression:"scope.row.payContent"}},t._l(t.payTypes,(function(t){return a("el-option",{key:t.dictValue,attrs:{label:t.dictLabel,value:Number(t.dictValue)}})})),1)]}}])}),a("el-table-column",{attrs:{label:"付款日期"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期",readonly:""},model:{value:e.row.payDate,callback:function(a){t.$set(e.row,"payDate",a)},expression:"scope.row.payDate"}})],1)]}}])}),a("el-table-column",{attrs:{label:"付款单位",prop:"payer"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.payer,callback:function(a){t.$set(e.row,"payer",a)},expression:"scope.row.payer"}})]}}])}),a("el-table-column",{attrs:{label:"收款合同方",prop:"hName"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.hName,callback:function(a){t.$set(e.row,"hName",a)},expression:"scope.row.hName"}})]}}])}),a("el-table-column",{attrs:{label:"付款条件",prop:"payTerms"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.payTerms,callback:function(a){t.$set(e.row,"payTerms",a)},expression:"scope.row.payTerms"}})]}}])}),a("el-table-column",{attrs:{label:"付款金额",prop:"payAmount"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},on:{blur:function(a){return t.payHandleBlur(e.row)},input:function(a){return t.payHandleInput(e.row)}},model:{value:e.row.payAmount,callback:function(a){t.$set(e.row,"payAmount",a)},expression:"scope.row.payAmount"}})]}}])}),a("el-table-column",{attrs:{label:"违约责任",prop:"debty"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{attrs:{readonly:""},model:{value:e.row.debty,callback:function(a){t.$set(e.row,"debty",a)},expression:"scope.row.debty"}})]}}])})],1)],1),a("h3",[t._v("合同签署状态")]),a("el-form",{ref:"qsForm",attrs:{model:t.qsFormData,rules:t.rules2,size:"medium","label-width":"180px","label-position":"left"}},[a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"space-between",align:"top",gutter:15}},[a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"签署方数",prop:"gnSignatorycount"}},[a("el-select",{staticClass:"cInput",attrs:{disabled:""},model:{value:t.qsFormData.gnSignatorycount,callback:function(e){t.$set(t.qsFormData,"gnSignatorycount",e)},expression:"qsFormData.gnSignatorycount"}},t._l(t.qsOptions,(function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"我方主体",prop:"gnSub"}},[a("el-input",{staticClass:"cInput",attrs:{readonly:""},model:{value:t.qsFormData.gnSub,callback:function(e){t.$set(t.qsFormData,"gnSub",e)},expression:"qsFormData.gnSub"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方供应商",prop:"gnPbname"}},[a("el-input",{staticClass:"cInput",attrs:{readonly:""},model:{value:t.qsFormData.gnPbname,callback:function(e){t.$set(t.qsFormData,"gnPbname",e)},expression:"qsFormData.gnPbname"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方供应商地址",prop:"gnPbaddress"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbaddress,callback:function(e){t.$set(t.qsFormData,"gnPbaddress",e)},expression:"qsFormData.gnPbaddress"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方联系人",prop:"gnPbcontact"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbcontact,callback:function(e){t.$set(t.qsFormData,"gnPbcontact",e)},expression:"qsFormData.gnPbcontact"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方联系方式",prop:"gnPbcif"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbcif,callback:function(e){t.$set(t.qsFormData,"gnPbcif",e)},expression:"qsFormData.gnPbcif"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方开户行",prop:"gnPbbank"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbbank,callback:function(e){t.$set(t.qsFormData,"gnPbbank",e)},expression:"qsFormData.gnPbbank"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"乙方开户行账户",prop:"gnPbaccount"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbaccount,callback:function(e){t.$set(t.qsFormData,"gnPbaccount",e)},expression:"qsFormData.gnPbaccount"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同方金额",prop:"gnPbamount"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbamount,callback:function(e){t.$set(t.qsFormData,"gnPbamount",e)},expression:"qsFormData.gnPbamount"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"币别",prop:"gnPbcurrency"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbcurrency,callback:function(e){t.$set(t.qsFormData,"gnPbcurrency",e)},expression:"qsFormData.gnPbcurrency"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"已支付金额",prop:"gnPbpayment"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbpayment,callback:function(e){t.$set(t.qsFormData,"gnPbpayment",e)},expression:"qsFormData.gnPbpayment"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"锁定金额",prop:"gnPbfixedprice"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbfixedprice,callback:function(e){t.$set(t.qsFormData,"gnPbfixedprice",e)},expression:"qsFormData.gnPbfixedprice"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"剩余金额",prop:"gnPbbalance"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPbbalance,callback:function(e){t.$set(t.qsFormData,"gnPbbalance",e)},expression:"qsFormData.gnPbbalance"}})],1)],1),1===t.qsFormData.gnSignatorycount?a("div",[a("el-divider",{attrs:{direction:"horizontal"}}),a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"space-between",align:"top",gutter:15}},[a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方供应商",prop:"gnPcname"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcname,callback:function(e){t.$set(t.qsFormData,"gnPcname",e)},expression:"qsFormData.gnPcname"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方供应商地址",prop:"gnPcaddress"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcaddress,callback:function(e){t.$set(t.qsFormData,"gnPcaddress",e)},expression:"qsFormData.gnPcaddress"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方联系人",prop:"gnPccontact"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPccontact,callback:function(e){t.$set(t.qsFormData,"gnPccontact",e)},expression:"qsFormData.gnPccontact"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方联系方式",prop:"gnPccif"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPccif,callback:function(e){t.$set(t.qsFormData,"gnPccif",e)},expression:"qsFormData.gnPccif"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方开户行",prop:"gnPcbank"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcbank,callback:function(e){t.$set(t.qsFormData,"gnPcbank",e)},expression:"qsFormData.gnPcbank"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"丙方开户行账户",prop:"gnPcaccount"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcaccount,callback:function(e){t.$set(t.qsFormData,"gnPcaccount",e)},expression:"qsFormData.gnPcaccount"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同方金额",prop:"gnPcamount"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcamount,callback:function(e){t.$set(t.qsFormData,"gnPcamount",e)},expression:"qsFormData.gnPcamount"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"币别",prop:"gnPccurrency"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPccurrency,callback:function(e){t.$set(t.qsFormData,"gnPccurrency",e)},expression:"qsFormData.gnPccurrency"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"已支付金额",prop:"gnPcpayment"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcpayment,callback:function(e){t.$set(t.qsFormData,"gnPcpayment",e)},expression:"qsFormData.gnPcpayment"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"锁定金额",prop:"gnPcfixedprice"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcfixedprice,callback:function(e){t.$set(t.qsFormData,"gnPcfixedprice",e)},expression:"qsFormData.gnPcfixedprice"}})],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"剩余金额",prop:"gnPcbalance"}},[a("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.qsFormData.gnPcbalance,callback:function(e){t.$set(t.qsFormData,"gnPcbalance",e)},expression:"qsFormData.gnPcbalance"}})],1)],1)],1):t._e()],1),a("h3",[t._v("合同签署文件")]),a("el-form",{ref:"elForm1",attrs:{model:t.form,rules:t.rules3,size:"medium","label-width":"180px","label-position":"left"}},[a("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"space-between",align:"top",gutter:15}},[a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同影像上传",prop:"eImage"}},[a("el-upload",{ref:"up1",staticClass:"upload-demo",attrs:{action:t.url,"auto-upload":!1,limit:1,"file-list":t.fileList1,disabled:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传合同影像")])],1)],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"附件上传",prop:"ComPubAttachments"}},[a("el-upload",{ref:"up2",staticClass:"upload-demo",attrs:{action:t.url,"auto-upload":!1,limit:1,"file-list":t.fileList2,disabled:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传附件")])],1)],1),a("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"合同文件",prop:"eDocuments"}},[a("el-upload",{ref:"up3",staticClass:"upload-demo",attrs:{action:t.url,"auto-upload":!1,limit:1,"file-list":t.fileList3,disabled:""}},[a("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传合同文件")])],1)],1),a("el-form-item",{staticStyle:{width:"100%"},attrs:{label:"审核意见",prop:"eOpinion"}},[a("el-input",{staticClass:"cInput",attrs:{type:"textarea",rows:4,clearable:""},model:{value:t.form.eOpinion,callback:function(e){t.$set(t.form,"eOpinion",e)},expression:"form.eOpinion"}})],1)],1)],1)],1),a("div",{staticStyle:{"margin-top":"20px"}},[a("el-button",{attrs:{size:"medium"},on:{click:t.back1}},[t._v("返回")]),a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:t.updateHt}},[t._v("通过")]),a("el-button",{attrs:{size:"medium",type:"danger"},on:{click:t.updateBh}},[t._v("驳回")])],1)])},n=[],r=(a(28743),a(21509)),o=(a(18246),a(23874),a(22937)),s={data(){return{fileList1:[],fileList2:[],fileList3:[],url:"/prod-api/basic/supplier/upload1",eid:this.$route.query.eid,lTableData:[],total:0,total1:0,queryParams:{pageNum:1,pageSize:10,tName:null,tUnit:null,shui:null,tModel:null,tPrice:null,tid:null},queryParams1:{pageNum:1,pageSize:10,hName:null,hid:null,hQuality:null},supplierList:[],deviceList:[],sub:"",cpDialog:!1,GysDialog:!1,qsOptions:[{value:0,label:"双方签署"},{value:1,label:"三方签署"}],payTimeValue:"",lTotalSubtotal:0,lTableColumns:[],lSelectedRows:[],payTableData:[],paySelectedRows:[],payDateOptions:[],qdSelectedItem:"",mjOptions:[{value:1,label:"非密"},{value:2,label:"商密"}],cgOptions:[{value:1,label:"邀请招标"},{value:2,label:"公开招标"}],cgValue:"",loading:!0,title:"",open:!1,form:{hid:null,sid:null,eid:null,eHname:null,eHcode:null,eType:null,eCon:null,eStatus:null,eStartdate:null,eEnddate:null,eAmount:null,eDescription:null,tenderName:null,tenderNo:null,tenderWay:null,tenderType:null,eImage:null,eDocuments:null,eOpinion:null,eDeliveryTime:null,bsSign:{},comPubAttachments:{}},payForm:{eid:null,payContent:null,payDate:null,payer:null,hid:null,hName:null,payTerms:null,payAmount:0,debty:null},tenderTypes:[],payTypes:[],qsFormData:{gnSignatorycount:0,gnSub:"鸿鹄科技有限公司",gnPbid:null,gnPbname:null,gnPbaddress:null,gnPbcontact:null,gnPbcif:null,gnPbbank:null,gnPbaccount:null,gnPbamount:null,gnPbcurrency:"人民币",gnPbpayment:null,gnPbfixedprice:null,gnPbbalance:null,gnPcname:null,gnPcaddress:null,gnPccontact:null,gnPccif:null,gnPcbank:null,gnPcaccount:null,gnPcamount:null,gnPccurrency:null,gnPcpayment:null,gnPcfixedprice:null,gnPcbalance:null},hid:2,rules1:{eHname:[{required:!0,message:"合同名称不能为空",trigger:"blur"}],eStartdate:[{required:!0,message:"开始时间不能为空",trigger:"blur"}],eEnddate:[{required:!0,message:"结束时间不能为空",trigger:"blur"}]},rules2:{},rules3:{eOpinion:[{required:!0,message:"审核意见不能为空",trigger:"blur"}]},selectRow:null,ComPubAttachments:{anSize:null,anUrl:null,anName:null}}},mounted(){},created(){this.selectContractByEid(),this.selectListInventory(),this.selectListPayment(),this.getSign(),this.getComPubAttachments(),this.getDicts("bs_contract_pay").then((t=>{this.payTypes=t.data}))},methods:{updateHt(){this.$refs.elForm1.validate((t=>{t?(this.form.eStatus=1,console.log(this.form),(0,r.yp)(this.form).then((t=>{console.log(t.msg),this.$message.success("已通过"),this.$router.push("/contract/cm")}))):this.$message.warning("请先填写审核意见")}))},updateBh(){this.$refs.elForm1.validate((t=>{t?(this.form.eStatus=4,(0,r.yp)(this.form).then((t=>{console.log(t.msg),this.$message.error("已驳回"),this.$router.push("/contract/cm")}))):this.$message.warning("请先填写审核意见")}))},selectContractByEid(){(0,r.PF)(this.eid).then((t=>{let e=t.data;if(this.form.eid=e.eid,this.form.eHname=e.eHname,this.form.eHcode=e.eHcode,this.form.eDescription=e.eDescription,this.form.eStartdate=e.eStartdate,this.form.eEnddate=e.eEnddate,this.form.eDeliveryTime=e.eDeliveryTime,this.form.eAmount=e.eAmount.toFixed(2),this.form.eType=e.eType,this.form.eCon=e.eCon,this.form.sid=e.sid,this.form.eOpinion=null,console.log(e.eOpinion),null!=e.eImage&&""!=e.eImage){let t=e.eImage.substring(e.eImage.lastIndexOf("/")+1),a=[{name:t,url:e.eImage}];this.fileList1=a,this.form.eImage=e.eImage}else this.fileList1=[],this.fileList1.eImage=null;if(null!=e.eDocuments&&""!=e.eDocuments){let t=e.eDocuments.substring(e.eDocuments.lastIndexOf("/")+1),a=[{name:t,url:e.eDocuments}];this.fileList3=a,this.form.eDocuments=e.eDocuments}else this.fileList3=[],this.form.eDocuments=null;this.selectTenderBySid()}))},selectTenderBySid(){(0,o.Dn)(this.form.sid).then((t=>{let e=t.data;this.form.tenderName=e.sName,this.form.tenderNo=e.sCode,1==e.sWay?this.form.tenderWay="公开招标":this.form.tenderWay="邀请招标",1==e.sType?this.form.tenderType="办公类型":1==e.sType?this.form.tenderType="固定资产":2==e.sType?this.form.tenderType="资讯类":3==e.sType&&(this.form.tenderType="服务类"),this.form.eType="一般采购合同"}))},selectListInventory(){this.loading=!0,(0,r.tb)({eid:this.eid}).then((t=>{let e=t.rows;e.forEach(((t,e)=>{this.lTableData.push({id:e+1,inName:t.inName,inModel:t.inModel,inVat:t.inVat.toFixed(2),inUnit:t.inUnit,inSubtotal:(t.inCount*t.inVat).toFixed(2),tid:t.tid,inCount:t.inCount})})),this.loading=!1}))},selectListPayment(){(0,r.H9)({eid:this.eid}).then((t=>{let e=t.rows;e.forEach(((t,e)=>{this.payTableData.push({id:e+1,hid:t.hid,hName:t.hName,payContent:t.payContent,payAmount:t.payAmount.toFixed(2),payDate:t.payDate,payTerms:t.payTerms,payer:t.payer,debty:t.debty})}))}))},getSign(){(0,r.u)({eid:this.eid}).then((t=>{this.qsFormData=t.data,this.lTotalSubtotal=t.data.gnPbamount}))},getComPubAttachments(){(0,r.Bv)(this.eid).then((t=>{if(console.log("查询附件信息"),console.log(t),null!=t.data){let e=[{name:t.data.anName,url:t.data.anUrl,size:t.data.anSize}];this.fileList2=e,this.ComPubAttachments.anUrl=t.data.anUrl,this.ComPubAttachments.anName=t.data.anName,this.ComPubAttachments.anSize=t.data.anSize}else this.fileList2=[],this.ComPubAttachments.anUrl=null,this.ComPubAttachments.anName=null,this.ComPubAttachments.anSize=null}))},back1(){this.$router.back()}}},i=s,c=a(81656),u=(0,c.A)(i,l,n,!1,null,"00b4d5d1",null),m=u.exports},21509:function(t,e,a){a.d(e,{BZ:function(){return o},Bv:function(){return y},D3:function(){return v},Fz:function(){return w},H6:function(){return f},H9:function(){return m},HH:function(){return g},JP:function(){return D},Jo:function(){return k},LJ:function(){return r},Mt:function(){return P},Mv:function(){return d},OO:function(){return h},PF:function(){return c},an:function(){return x},n:function(){return n},px:function(){return S},qB:function(){return i},so:function(){return s},tb:function(){return u},u:function(){return p},yp:function(){return b}});var l=a(35720);function n(t){return(0,l.Ay)({url:"/ppm/device/list",method:"get",params:t})}function r(t){return(0,l.Ay)({url:"/ppm/items/selectItemsDevice",method:"get",params:t})}function o(t){return(0,l.Ay)({url:"/basic/management",method:"post",data:t})}function s(t){return(0,l.Ay)({url:"/basic/management/list",method:"get",params:t})}function i(t){return(0,l.Ay)({url:"/basic/contract",method:"post",data:t})}function c(t){return(0,l.Ay)({url:"/basic/contract/"+t,method:"get"})}function u(t){return(0,l.Ay)({url:"/basic/inventory/list",method:"get",params:t})}function m(t){return(0,l.Ay)({url:"/basic/payment/list",method:"get",params:t})}function p(t){return(0,l.Ay)({url:"/basic/sign/list1",method:"get",params:t})}function d(t){return(0,l.Ay)({url:"/basic/management/"+t,method:"get"})}function f(t){return(0,l.Ay)({url:"/basic/management",method:"put",data:t})}function b(t){return(0,l.Ay)({url:"/basic/contract",method:"put",data:t})}function y(t){return(0,l.Ay)({url:"/basic/contract/selectCom",method:"get",params:{eid:t}})}function g(t){return(0,l.Ay)({url:"/basic/contract/updateoHstatus",method:"put",data:t})}function h(t){return(0,l.Ay)({url:"/basic/contract/del",method:"get",params:{eid:t}})}function w(t){return(0,l.Ay)({url:"/basic/contract/HtCancel",method:"put",data:t})}function P(t){return(0,l.Ay)({url:"/basic/management/XyCancel",method:"get",params:{oid:t}})}function D(t){return(0,l.Ay)({url:"/ppm/framework/XyCancel",method:"get",params:{oid:t}})}function v(t){return(0,l.Ay)({url:"/basic/management/delXy",method:"get",params:{oid:t}})}function S(t){return(0,l.Ay)({url:"/ppm/framework/upOidbyOid",method:"put",data:t})}function k(t){return(0,l.Ay)({url:"/basic/contract/noTender",method:"post",data:t})}function x(t){return(0,l.Ay)({url:"/bidding/candidate/getSuppHid",method:"get",params:{sid:t}})}}}]);