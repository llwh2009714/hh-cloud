"use strict";(self["webpackChunkruoyi"]=self["webpackChunkruoyi"]||[]).push([[6786],{16786:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"con"},[n("h2",[t._v("基本信息")]),n("el-divider",{attrs:{direction:"horizontal"}}),n("el-form",{ref:"elForm",attrs:{model:t.form,rules:t.rules1,size:"medium","label-width":"180px","label-position":"left"}},[n("h3",[t._v("非招标基本信息")]),n("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"space-between",align:"top",gutter:15}},[n("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"项目名称",prop:"gName"}},[0===t.form.gRelease?n("el-input",{staticClass:"cInput",attrs:{clearable:""},model:{value:t.form.gName,callback:function(e){t.$set(t.form,"gName",e)},expression:"form.gName"}}):n("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.form.gName,callback:function(e){t.$set(t.form,"gName",e)},expression:"form.gName"}})],1),n("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"项目编号",prop:"gCode"}},[n("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.form.gCode,callback:function(e){t.$set(t.form,"gCode",e)},expression:"form.gCode"}})],1),n("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"采购方式",prop:"gTendertype"}},[n("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.form.gTendertype,callback:function(e){t.$set(t.form,"gTendertype",e)},expression:"form.gTendertype"}})],1),n("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"公司",prop:"eType"}},[n("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.form.gCompany,callback:function(e){t.$set(t.form,"gCompany",e)},expression:"form.gCompany"}})],1),n("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"创建人",prop:"createBy"}},[n("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.form.createBy,callback:function(e){t.$set(t.form,"createBy",e)},expression:"form.createBy"}})],1),n("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"创建部门",prop:"createDept"}},[n("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.form.createDept,callback:function(e){t.$set(t.form,"createDept",e)},expression:"form.createDept"}})],1),n("el-form-item",{staticClass:"cInput",staticStyle:{width:"45%"},attrs:{label:"委托方",prop:"gUnit",clearable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{staticClass:"cInput",attrs:{clearable:"",readonly:""},model:{value:t.form.gUnit,callback:function(e){t.$set(t.form,"gUnit",e)},expression:"form.gUnit"}},[0===t.form.gRelease?n("i",{staticClass:"el-icon-search",staticStyle:{"margin-top":"10px"},attrs:{slot:"suffix"},on:{click:function(e){return t.openGys()}},slot:"suffix"}):t._e()]),n("el-dialog",{attrs:{title:"产品名称",visible:t.GysDialog},on:{"update:visible":function(e){t.GysDialog=e}}},[n("el-table",{ref:"singleTable",staticStyle:{width:"100%"},attrs:{data:t.supplierList,"highlight-current-row":""},on:{"row-click":t.handleRowClick1}},[n("el-table-column",{attrs:{type:"index",label:"序号",width:"100"}}),n("el-table-column",{attrs:{prop:"hName",label:"委托方名称",width:"140"}}),n("el-table-column",{attrs:{prop:"hSignPhone",label:"电话",width:"130"}}),n("el-table-column",{attrs:{prop:"hQuality",label:"企业性质",width:"150"}}),n("el-table-column",{attrs:{prop:"hRange",label:"经营范围"}})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total1>0,expression:"total1>0"}],attrs:{total:t.total1,page:t.queryParams1.pageNum,limit:t.queryParams1.pageSize},on:{"update:page":function(e){return t.$set(t.queryParams1,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams1,"pageSize",e)},pagination:t.selectGysList}}),n("el-button",{on:{click:t.rest}},[t._v("清空")])],1)]}}])})],1)],1),n("h3",[t._v("合同标的清单")]),n("div",{staticClass:"cl"},[n("el-table",{style:{marginTop:"10px"},attrs:{data:t.lTableData,"row-key":function(t){return t.id},border:"",stripe:""},on:{"selection-change":t.lHandleSelectionChange}},[n("el-table-column",{attrs:{label:"序号",prop:"id",width:"60"}}),n("el-table-column",{attrs:{label:"产品名称",prop:"inName",width:"170"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{readonly:""},model:{value:e.row.inName,callback:function(n){t.$set(e.row,"inName",n)},expression:"scope.row.inName"}})]}}])}),n("el-table-column",{attrs:{label:"产品编码",prop:"tid",width:"163"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{readonly:""},model:{value:e.row.tid,callback:function(n){t.$set(e.row,"tid",n)},expression:"scope.row.tid"}})]}}])}),n("el-table-column",{attrs:{label:"规格型号",prop:"inModel"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{readonly:""},model:{value:e.row.inModel,callback:function(n){t.$set(e.row,"inModel",n)},expression:"scope.row.inModel"}})]}}])}),n("el-table-column",{attrs:{label:"单位",prop:"inUnit",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{readonly:""},model:{value:e.row.inUnit,callback:function(n){t.$set(e.row,"inUnit",n)},expression:"scope.row.inUnit"}})]}}])}),n("el-table-column",{attrs:{label:"含税单价",prop:"inVat",width:"130"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{readonly:""},model:{value:e.row.inVat,callback:function(n){t.$set(e.row,"inVat",n)},expression:"scope.row.inVat"}})]}}])}),n("el-table-column",{attrs:{label:"数量",prop:"inCount",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{readonly:""},model:{value:e.row.inCount,callback:function(n){t.$set(e.row,"inCount",n)},expression:"scope.row.inCount"}})]}}])}),n("el-table-column",{attrs:{label:"小计",prop:"inSubtotal",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-input",{attrs:{readonly:""},model:{value:e.row.inSubtotal,callback:function(n){t.$set(e.row,"inSubtotal",n)},expression:"scope.row.inSubtotal"}})]}}])})],1),n("div",{style:{textAlign:"right"}},[n("span",{style:{marginRight:"100px"}},[t._v("总价:")]),n("span",{style:{fontWeight:"700"}},[t._v(t._s(t.lTotalSubtotal.toFixed(2)))])])],1),n("h3",[t._v("合同签署文件")]),n("el-form",{ref:"elForm1",attrs:{model:t.form,size:"medium","label-width":"180px","label-position":"left"}},[n("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex",justify:"space-between",align:"top",gutter:15}},[n("el-form-item",{staticStyle:{width:"45%"},attrs:{label:"附件上传",prop:"ComPubAttachments"}},[n("el-upload",{ref:"up2",staticClass:"upload-demo",attrs:{action:t.url,"before-remove":t.beforeRemove2,"auto-upload":!1,limit:3,"on-exceed":t.handleExceed2,"on-success":t.success2,"on-change":t.onchange2,"file-list":t.fileList2,disabled:1===t.form.gRelease}},[n("el-button",{attrs:{size:"small",type:"primary"}},[t._v("上传附件")])],1)],1)],1)],1)],1),n("div",{staticStyle:{"margin-top":"20px"}},[n("el-button",{attrs:{size:"medium"},on:{click:t.back1}},[t._v("返回")]),t.show?n("el-button",{attrs:{size:"medium",type:"primary"},on:{click:t.addXy}},[t._v("发布")]):t._e()],1)])},i=[],l=(n(28743),n(30855)),o=n(21509),r=(n(39325),n(18246)),s={data(){return{GysDialog:!1,total1:0,show:!1,gTenderTypes:[],url:"/prod-api/basic/supplier/upload1",gid:this.$route.query.gid,XyOptions:[{value:1,label:"邀请"},{value:2,label:"公开"}],lTableData:[],total:0,queryParams:{pageNum:1,pageSize:10,tName:null,tUnit:null,shui:null,tModel:null,tPrice:null,tid:null},deviceList:[],sub:"",cpDialog:!1,lTotalSubtotal:0,lTableColumns:[],lSelectedRows:[],cgValue:"",loading:!0,title:"",open:!1,form:{gName:null,gCode:null,gIsPublic:null,gSpawnTime:null,xyId:null,gid:null,gCompany:null,gTendertype:null,gTimeon:null,gDeadline:null,createBy:null,createDept:null,gRelease:null,gUnit:null,hid:null,gNotes:null},rules1:{gUnit:[{required:!0,message:"请选择委托人",trigger:"blur"}]},selectRow:null,fileList2:[],ComPubAttachments:{anSize:null,anUrl:null,anName:null},aid:null,gfId:null,ComQuotation:[],info:{gid:null,gUnit:null,gRelease:null,comPubAttachments:{anId:null,aid:null,anName:null,anUrl:null}},chuan:[],show1:!1,queryParams1:{pageNum:1,pageSize:10,hName:null,hid:null,hQuality:null},supplierList:[]}},mounted(){this.lCalculateTotalSubtotal(),this.getList()},created(){this.getDicts("bs_contract_pay").then((t=>{this.payTypes=t.data}))},methods:{onchange2(t,e){this.fileList2=e,console.log("--------------"),0==t.size&&(this.$message.error("选择的文件不能为空，请重新选择！"),this.fileList2.splice(this.fileList2.indexOf(t[0]),1))},addXy(){this.$refs.elForm.validate((t=>{if(!t)return this.$message.error("请填写完整信息"),!1;0===this.fileList2.length?this.$message.warning("请上传附件"):this.hasNewFiles()?(console.log(1),this.chuan.push(...this.fileList2),this.$refs.up2.submit()):this.add()}))},hasNewFiles(){for(let t of this.fileList2)if(!t.url)return!0;return!1},add(){this.info.gUnit=this.form.gUnit,this.info.gRelease=1,console.log(this.chuan,"chuan"),this.info.comPubAttachments.anUrl=this.chuan.map((t=>t.response?t.response.data.url:t.url)).join(","),this.info.comPubAttachments.anName=this.chuan.map((t=>t.response?t.response.data.name:t.name)).join(","),(0,l.Mc)(this.info).then((t=>{this.$message.success(t.msg),this.$router.push("/noTender/project")})).catch((t=>{this.$message.error("发布失败")}))},handleExceed2(t,e){this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${t.length} 个文件，共选择了 ${t.length+e.length} 个文件`)},beforeRemove2(t,e){return this.$modal.confirm(`确定移除 ${t.name}？`).then((()=>{this.fileList2=e,this.$message.success("删除成功!")}))},success2(t,e){this.add()},getList(){(0,l.sS)(this.gid).then((t=>(this.aid=t.data.xyId,this.info.comPubAttachments.aid=t.data.xyId,this.info.gid=t.data.gid,this.form=t.data,0===t.data.gRelease&&(this.show=!0),3==t.data.gTendertype?this.form.gTendertype="询价":5==t.data.gTendertype?this.form.gTendertype="竞争性谈判":4==t.data.gTendertype?this.form.gTendertype="委托":6==t.data.gTendertype&&(this.form.gTendertype="单一来源"),1==t.data.gIsPublic?this.form.gIsPublic="公开":this.form.gIsPublic="邀请",this.form.gCompany="鸿鹄科技有限公司",this.gfId=this.form.gCode,this.getComPubAttachments(),Promise.all([(0,l.U7)(this.aid),(0,l.Jp)({gfId:this.gfId})])))).then((t=>(this.form.createBy=t[0].data.createBy,this.form.createDept=t[0].data.aCreateDept,this.ComQuotation=t[1].rows,(0,l.dd)({aid:this.aid})))).then((t=>{t.rows.forEach(((t,e)=>{this.lTableData.push({id:e+1,inName:t.ppmDevice.tName,inModel:t.ppmDevice.tModel,inVat:(1.13*t.ppmDevice.tPrice).toFixed(2),inUnit:t.ppmDevice.tUnit,inSubtotal:(t.vCount*t.ppmDevice.tPrice*1.13).toFixed(2),tid:t.tid,inCount:t.vCount}),this.lTotalSubtotal+=t.vCount*t.ppmDevice.tPrice*1.13.toFixed(2)}))}))},getComPubAttachments(){(0,l.Qf)(this.aid).then((t=>{if(console.log(t,"res"),null!=t.data)if(this.info.comPubAttachments.anId=t.data.anId,t.data.anName&&t.data.anUrl){const e=t.data.anName.split(","),n=t.data.anUrl.split(",");let a=[];for(let t=0;t<e.length;t++)a.push({name:e[t],url:n[t]});this.fileList2=a,this.info.comPubAttachments.anName=t.data.anName,this.info.comPubAttachments.anUrl=t.data.anUrl}else this.fileList2=[],this.info.comPubAttachments.anName=null,this.info.comPubAttachments.anUrl=null;else this.info.comPubAttachments.anId=null,this.fileList2=[],this.info.comPubAttachments.anName=null,this.info.comPubAttachments.anUrl=null}))},selectGysList(){(0,r.bP)(this.queryParams1).then((t=>{this.supplierList=t.rows,this.total1=t.total}))},spCountBlur(t){null==t.inVat&&(t.inVat=0),t.inSubtotal=(t.inCount*t.inVat).toFixed(2),this.lCalculateTotalSubtotal()},spCountChange(t){null==t.inVat&&(t.inVat=0),t.inSubtotal=(t.inCount*t.inVat).toFixed(2),this.lCalculateTotalSubtotal()},lCalculateTotalSubtotal(){this.lTotalSubtotal=this.lTableData.reduce(((t,e)=>{let n=e.inSubtotal?parseFloat(e.inSubtotal):0,a=t+n;return this.form.eAmount=a.toFixed(2),this.qsFormData.gnPbamount=a.toFixed(2),a}),0)},selectBdList(){(0,o.n)(this.queryParams).then((t=>{this.deviceList=t.rows,this.total=t.total}))},selectSupplier(){getOperator(this.hid).then((t=>{let e=t.data;this.qsFormData.gnPbcontact=e.ywName,this.qsFormData.gnPbcif=e.ywPhone})),getSupplier(this.hid).then((t=>{let e=t.data;this.qsFormData.gnPbname=e.hName,this.qsFormData.gnPbaddress=e.hAddress,this.qsFormData.gnPbbank=e.hBankAddress,this.qsFormData.gnPbaccount=e.hAccount,this.qsFormData.gnPbid=e.hid,this.form.hid=e.hid}))},handleRowClick(t){this.selectRow.inName=t.tName,this.selectRow.tid=t.tid,this.selectRow.inModel=t.tModel,this.selectRow.inUnit=t.tUnit,this.selectRow.tid=t.tid,this.selectRow.inVat=(1.13*t.tPrice).toFixed(2),this.selectRow.inCount=1,this.selectRow.inSubtotal=(this.selectRow.inCount*this.selectRow.inVat).toFixed(2),this.cpDialog=!1,this.lCalculateTotalSubtotal()},handleRowClick1(t){console.log(t),this.form.gUnit=t.hName,this.form.hid=t.hid,this.GysDialog=!1},closeDialog1(){this.cpDialog=!1},openGys(){this.GysDialog=!0,this.selectGysList()},openCp(t){this.selectRow=t,this.cpDialog=!0,this.selectBdList()},back1(){this.$router.push("/noTender/project")},rest(){this.form.gUnit=null,this.GysDialog=!1},lHandleSelectionChange(t){this.lSelectedRows=t}}},u=s,c=n(81656),d=(0,c.A)(u,a,i,!1,null,"76fa9c0f",null),m=d.exports},21509:function(t,e,n){n.d(e,{BZ:function(){return o},Bv:function(){return g},D3:function(){return S},Fz:function(){return w},H6:function(){return h},H9:function(){return d},HH:function(){return b},JP:function(){return v},Jo:function(){return x},LJ:function(){return l},Mt:function(){return C},Mv:function(){return p},OO:function(){return y},PF:function(){return u},an:function(){return P},n:function(){return i},px:function(){return A},qB:function(){return s},so:function(){return r},tb:function(){return c},u:function(){return m},yp:function(){return f}});var a=n(35720);function i(t){return(0,a.Ay)({url:"/ppm/device/list",method:"get",params:t})}function l(t){return(0,a.Ay)({url:"/ppm/items/selectItemsDevice",method:"get",params:t})}function o(t){return(0,a.Ay)({url:"/basic/management",method:"post",data:t})}function r(t){return(0,a.Ay)({url:"/basic/management/list",method:"get",params:t})}function s(t){return(0,a.Ay)({url:"/basic/contract",method:"post",data:t})}function u(t){return(0,a.Ay)({url:"/basic/contract/"+t,method:"get"})}function c(t){return(0,a.Ay)({url:"/basic/inventory/list",method:"get",params:t})}function d(t){return(0,a.Ay)({url:"/basic/payment/list",method:"get",params:t})}function m(t){return(0,a.Ay)({url:"/basic/sign/list1",method:"get",params:t})}function p(t){return(0,a.Ay)({url:"/basic/management/"+t,method:"get"})}function h(t){return(0,a.Ay)({url:"/basic/management",method:"put",data:t})}function f(t){return(0,a.Ay)({url:"/basic/contract",method:"put",data:t})}function g(t){return(0,a.Ay)({url:"/basic/contract/selectCom",method:"get",params:{eid:t}})}function b(t){return(0,a.Ay)({url:"/basic/contract/updateoHstatus",method:"put",data:t})}function y(t){return(0,a.Ay)({url:"/basic/contract/del",method:"get",params:{eid:t}})}function w(t){return(0,a.Ay)({url:"/basic/contract/HtCancel",method:"put",data:t})}function C(t){return(0,a.Ay)({url:"/basic/management/XyCancel",method:"get",params:{oid:t}})}function v(t){return(0,a.Ay)({url:"/ppm/framework/XyCancel",method:"get",params:{oid:t}})}function S(t){return(0,a.Ay)({url:"/basic/management/delXy",method:"get",params:{oid:t}})}function A(t){return(0,a.Ay)({url:"/ppm/framework/upOidbyOid",method:"put",data:t})}function x(t){return(0,a.Ay)({url:"/basic/contract/noTender",method:"post",data:t})}function P(t){return(0,a.Ay)({url:"/bidding/candidate/getSuppHid",method:"get",params:{sid:t}})}},30855:function(t,e,n){n.d(e,{Bj:function(){return h},Hs:function(){return d},Jp:function(){return s},Mc:function(){return c},Qf:function(){return u},SW:function(){return p},U7:function(){return l},UA:function(){return m},dd:function(){return r},iU:function(){return i},sS:function(){return o},sZ:function(){return f}});var a=n(35720);function i(t){return(0,a.Ay)({url:"/nonbidding/pro/list",method:"get",params:t})}function l(t){return(0,a.Ay)({url:"/nonbidding/plan/"+t,method:"get"})}function o(t){return(0,a.Ay)({url:"/nonbidding/pro/"+t,method:"get"})}function r(t){return(0,a.Ay)({url:"/nonbidding/items/getItemsDevice",method:"get",params:t})}function s(t){return(0,a.Ay)({url:"/nonbidding/pro/selectQuotation",method:"get",params:t})}function u(t){return(0,a.Ay)({url:"/nonbidding/pro/selectCom",method:"get",params:{aid:t}})}function c(t){return(0,a.Ay)({url:"/nonbidding/pro",method:"put",data:t})}function d(t){return(0,a.Ay)({url:"/nonbidding/pro/list1",method:"get",params:t})}function m(t){return(0,a.Ay)({url:"/nonbidding/pro/addCom",method:"post",data:t,headers:{isRepeatSubmit:!0}})}function p(t){return(0,a.Ay)({url:"/basic/contract/list1",method:"get",params:t})}function h(t){return(0,a.Ay)({url:"/basic/contract/del1",method:"get",params:{eid:t}})}function f(t){return(0,a.Ay)({url:"/nonbidding/pro/delByGfId",method:"delete",params:{gfId:t}})}}}]);