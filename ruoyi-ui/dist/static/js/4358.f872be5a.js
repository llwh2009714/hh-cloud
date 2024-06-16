"use strict";(self["webpackChunkruoyi"]=self["webpackChunkruoyi"]||[]).push([[4358],{44358:function(e,t,l){l.r(t),l.d(t,{default:function(){return h}});var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"app-container"},[l("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"100px"}},[l("el-form-item",{attrs:{label:"框架计划编码",prop:"jhCode"}},[l("el-input",{attrs:{placeholder:"请输入框架计划编码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.jhCode,callback:function(t){e.$set(e.queryParams,"jhCode",t)},expression:"queryParams.jhCode"}})],1),l("el-form-item",{attrs:{label:"计划名称",prop:"jhName"}},[l("el-input",{attrs:{placeholder:"请输入计划名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.jhName,callback:function(t){e.$set(e.queryParams,"jhName",t)},expression:"queryParams.jhName"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),l("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")]),l("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增 ")])],1)],1),l("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[l("el-tab-pane",{attrs:{label:"待提交",name:"first"}},[l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.framewokPlanList}},[l("el-table-column",{attrs:{label:"框架计划编码",align:"center",prop:"jhCode"}}),l("el-table-column",{attrs:{label:"框架计划名称",align:"center",prop:"jhName"}}),l("el-table-column",{attrs:{label:"预算(含税)/元",align:"center",prop:"jhYu"}}),l("el-table-column",{attrs:{label:"创建部门",align:"center",prop:"dept"}}),l("el-table-column",{attrs:{label:"计划状态",align:"center",prop:"jhStatus"}},[[l("el-tag",[e._v("待提交")])]],2),l("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(l){return e.handleUpdate(t.row)}}},[e._v("修改 ")]),l("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(l){return e.handleDelete(t.row)}}},[e._v("删除 ")]),l("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(l){return e.showFrameworkDetails(t.row)}}},[e._v("查看 ")])]}}])})],1)],1),l("el-tab-pane",{attrs:{label:"待审批",name:"second"}},[l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.framewokPlanList}},[l("el-table-column",{attrs:{label:"框架计划编码",align:"center",prop:"jhCode"}}),l("el-table-column",{attrs:{label:"框架计划名称",align:"center",prop:"jhName"}}),l("el-table-column",{attrs:{label:"预算(含税)/元",align:"center",prop:"jhYu"}}),l("el-table-column",{attrs:{label:"创建部门",align:"center",prop:"dept"}}),l("el-table-column",{attrs:{label:"计划状态",align:"center",prop:"jhStatus"}},[[l("el-tag",{attrs:{type:"danger"}},[e._v("待审批")])]],2),l("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(l){return e.showFrameworkDetails(t.row)}}},[e._v("查看 ")])]}}])})],1)],1),l("el-tab-pane",{attrs:{label:"已完成",name:"third"}},[l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.framewokPlanList}},[l("el-table-column",{attrs:{label:"框架计划编码",align:"center",prop:"jhCode"}}),l("el-table-column",{attrs:{label:"框架计划名称",align:"center",prop:"jhName"}}),l("el-table-column",{attrs:{label:"预算(含税)/元",align:"center",prop:"jhYu"}}),l("el-table-column",{attrs:{label:"创建部门",align:"center",prop:"dept"}}),l("el-table-column",{attrs:{label:"计划状态",align:"center",prop:"jhStatus"}},[[l("el-tag",{attrs:{type:"success"}},[e._v("已完成")])]],2),l("el-table-column",{attrs:{label:"审批人",align:"center",prop:"jhPerson"}}),l("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(l){return e.showFrameworkDetails(t.row)}}},[e._v("查看 ")])]}}])})],1)],1)],1),l("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),l("el-dialog",{attrs:{title:e.title,visible:e.open,width:"1000px","append-to-body":""},on:{close:e.OpenClose,"update:visible":function(t){e.open=t}}},[l("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-position":"left","label-width":"120px",size:"medium"},nativeOn:{submit:function(e){e.preventDefault()}}},[l("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"static-content-item"},[l("el-divider",{attrs:{direction:"horizontal"}})],1),l("div",{staticClass:"card-container"},[l("el-row",[l("el-col",{staticClass:"grid-cell",attrs:{span:12}},[l("el-form-item",{staticClass:"label-center-align",attrs:{label:"计划编码",prop:"计划编码"}},[l("el-input",{attrs:{disabled:!0,type:"text",placeholder:"自动生成"},model:{value:e.form.jhCode,callback:function(t){e.$set(e.form,"jhCode",t)},expression:"form.jhCode"}})],1)],1),l("el-col",{staticClass:"grid-cell",attrs:{span:12}},[l("el-form-item",{staticClass:"required label-center-align",attrs:{label:"计划名称",prop:"jhName"}},[l("el-input",{attrs:{type:"text"},model:{value:e.form.jhName,callback:function(t){e.$set(e.form,"jhName",t)},expression:"form.jhName"}})],1)],1)],1),l("el-row",[l("el-col",{staticClass:"grid-cell",attrs:{span:12}},[l("el-form-item",{staticClass:"required label-center-align",attrs:{label:"业务类型",prop:"businessType"}},[l("el-select",{staticClass:"input",attrs:{placeholder:"请选择业务类型"},model:{value:e.form.businessType,callback:function(t){e.$set(e.form,"businessType",t)},expression:"form.businessType"}},e._l(e.dict.type.ppm_procurement_plan,(function(e){return l("el-option",{key:e.value,attrs:{label:e.label,value:1*e.value}})})),1)],1)],1),l("el-col",{staticClass:"grid-cell",attrs:{span:12}},[l("el-form-item",{staticClass:"required label-center-align",attrs:{label:"计划预算",prop:"jhYu"}},[l("el-input",{model:{value:e.form.jhYu,callback:function(t){e.$set(e.form,"jhYu",e._n(t))},expression:"form.jhYu"}})],1)],1)],1),l("el-row",[l("el-col",{staticClass:"grid-cell",attrs:{span:12}},[l("el-form-item",{staticClass:"required label-center-align",attrs:{label:"供应商",prop:"hid"}},[l("el-select",{staticClass:"input full-width-input",attrs:{filterable:""},model:{value:e.form.hid,callback:function(t){e.$set(e.form,"hid",t)},expression:"form.hid"}},e._l(e.supplierOptions,(function(e,t){return l("el-option",{key:t,attrs:{label:e.hName,value:e.hid}})})),1)],1)],1),l("el-col",{staticClass:"grid-cell",attrs:{span:12}},[l("el-form-item",{staticClass:"required label-center-align",attrs:{label:"创建人"}},[l("el-input",{attrs:{disabled:"",value:e.form.jhFounder||"系统自动生成",type:"text"}})],1)],1)],1),l("el-row",[l("el-col",{staticClass:"grid-cell",attrs:{span:12}},[l("el-form-item",{staticClass:"required label-center-align",attrs:{label:"创建部门",prop:"dept"}},[l("el-input",{attrs:{value:e.form.dept||"系统自动生成",disabled:"",type:"text"}})],1)],1),l("el-col",{staticClass:"grid-cell",attrs:{span:12}},[l("el-form-item",{staticClass:"label-center-align",attrs:{label:"上传附件",prop:"annex"}},[l("el-upload",{ref:"upload",attrs:{action:e.upload.url,headers:e.upload.headers,"file-list":e.upload.fileList,multiple:!0,"on-progress":e.handleFileUploadProgress,"on-success":e.handleFileSuccess,limit:5,"on-exceed":e.exceedingMaximumLimit,"on-error":e.uploadError,"before-upload":e.beforeUpload,"before-remove":e.beforeRemove,"on-remove":e.removeFile,"auto-upload":!1}},[l("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),l("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success",loading:e.upload.isUploading},on:{click:e.submitUpload}},[e._v("上传到服务器 ")])],1)],1)],1)],1)],1),l("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"static-content-item"},[l("el-divider",{attrs:{direction:"horizontal"}})],1),l("div",{staticClass:"card-container"},[l("div",{staticClass:"static-content-item"},[l("el-button",{attrs:{icon:"el-icon-plus",type:"primary",size:"small"},on:{click:e.insertItems}},[e._v("添加项目")])],1),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"elTable",staticStyle:{"margin-top":"20px"},attrs:{"max-height":"250",data:e.items,border:""}},[l("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.$index+1))])]}}])}),l("el-table-column",{attrs:{label:"行项目编号",align:"center",prop:"vCode",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[null==e.form.aid?l("span",[e._v("自动生成")]):l("el-input",{staticClass:"borderNone",attrs:{disabled:""},model:{value:t.row.vCode,callback:function(l){e.$set(t.row,"vCode",l)},expression:"scope.row.vCode"}})]}}])}),l("el-table-column",{attrs:{label:"物料编号",align:"center",prop:"tid",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(t.row.tid))]),l("i",{staticClass:"el-icon-search",on:{click:function(l){return e.search(t.row,t.$index)}}})]}}])}),l("el-table-column",{attrs:{label:"数量",align:"center",prop:"vCount",width:"230"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input-number",{attrs:{step:1,"step-strictly":""},model:{value:t.row.vCount,callback:function(l){e.$set(t.row,"vCount",l)},expression:"scope.row.vCount"}})]}}])}),l("el-table-column",{attrs:{label:"采购人",align:"center",prop:"vPerson",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{staticClass:"borderNone",model:{value:t.row.vPerson,callback:function(l){e.$set(t.row,"vPerson",l)},expression:"scope.row.vPerson"}})]}}])}),l("el-table-column",{attrs:{label:"交付时间",align:"center",prop:"vDeliveryTime",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.row.vDeliveryTime,callback:function(l){e.$set(t.row,"vDeliveryTime",l)},expression:"scope.row.vDeliveryTime"}})]}}])}),l("el-table-column",{attrs:{label:"交付地点",align:"center",prop:"vDeliveryArea",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{staticClass:"borderNone",model:{value:t.row.vDeliveryArea,callback:function(l){e.$set(t.row,"vDeliveryArea",l)},expression:"scope.row.vDeliveryArea"}},[e._v(" "+e._s(e.parseTime(t.row.tDate,"{y}-{m}-{d}"))+" ")])]}}])}),l("el-table-column",{attrs:{label:"需求说明",align:"center",prop:"vIllustrate",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-input",{staticClass:"borderNone",model:{value:t.row.vIllustrate,callback:function(l){e.$set(t.row,"vIllustrate",l)},expression:"scope.row.vIllustrate"}})]}}])}),l("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(l){return e.deleteItems(t.row,t.$index)}}},[e._v("删除 ")])]}}])})],1)],1)]),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),l("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),l("el-dialog",{attrs:{title:"收货地址",visible:e.deviceOpen,width:"42%"},on:{"update:visible":function(t){e.deviceOpen=t}}},[l("el-form",{ref:"queryForm",attrs:{model:e.form,size:"small",inline:!0,"label-width":"68px"}},[l("el-form-item",{attrs:{label:"产品编码",prop:"tid"}},[l("el-input",{attrs:{placeholder:"请输入产品编码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.tid,callback:function(t){e.$set(e.queryParams,"tid",t)},expression:"queryParams.tid"}})],1),l("el-form-item",{attrs:{label:"产品名称",prop:"tName"}},[l("el-input",{attrs:{placeholder:"请输入产品名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.tName,callback:function(t){e.$set(e.queryParams,"tName",t)},expression:"queryParams.tName"}})],1),l("el-form-item",[l("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),l("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.deviceLoding,expression:"deviceLoding"}],attrs:{"max-height":"300",border:"",data:e.device},on:{"cell-dblclick":e.selectedMateria}},[l("el-table-column",{attrs:{label:"产品编码",align:"center",prop:"tid"}}),l("el-table-column",{attrs:{label:"产品名称",align:"center",prop:"tName"}})],1),l("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[l("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getMaterialList}})],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:e.cancelDevice}},[e._v("关 闭")])],1)],1),l("el-dialog",{attrs:{visible:e.openFrameworkDetails},on:{"update:visible":function(t){e.openFrameworkDetails=t}}},[l("el-descriptions",{staticClass:"margin-top",attrs:{direction:"vertical",title:"查看框架详情",column:3,size:"medium",border:""}},[l("el-descriptions-item",[l("template",{slot:"label"},[e._v(" 框架计划名称 ")]),e._v(" "+e._s(e.form.jhName)+" ")],2),l("el-descriptions-item",[l("template",{slot:"label"},[e._v(" 框架计划预算 ")]),e._v(" "+e._s(e.form.jhYu)+" ")],2),l("el-descriptions-item",[l("template",{slot:"label"},[e._v(" 部门 ")]),e._v(" "+e._s(e.form.dept)+" ")],2),l("el-descriptions-item",[l("template",{slot:"label"},[e._v(" 框架计划状态 ")]),0==e.form.jhStatus?l("el-tag",[e._v("待提交")]):e._e(),1==e.form.jhStatus?l("el-tag",[e._v("待审核")]):e._e(),2==e.form.jhStatus?l("el-tag",[e._v("已生效")]):e._e()],2),l("el-descriptions-item",[l("template",{slot:"label"},[e._v(" 审批人 ")]),null!=e.form.jhPerson&&""!=e.form.jhPerson?l("span",[e._v(" "+e._s(e.form.jhPerson)+" ")]):l("span",{staticStyle:{color:"#cccccc"}},[e._v(" 未审核 ")])],2),l("el-descriptions-item",[l("template",{slot:"label"},[e._v(" 创建人 ")]),e._v(" "+e._s(e.form.jhFounder)+" ")],2),l("el-descriptions-item",[l("template",{slot:"label"},[e._v(" 附件 ")]),l("el-button",{attrs:{type:"primary",icon:"el-icon-download"},on:{click:e.downloadFile}},[e._v("下载附件")])],2),l("el-descriptions-item",[l("template",{slot:"label"},[e._v(" 附件名称 ")]),e._l(e.file.fileUrls.length,(function(t){return l("p",{key:t},[l("a",{attrs:{href:e.file.fileUrls[t-1]}},[e._v(e._s(e.file.fileName[t-1]))])])}))],2)],1),l("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"margin-top":"20px"},attrs:{border:"","max-height":"250",data:e.form.items},on:{"cell-click":e.click}},[l("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-descriptions",{attrs:{border:""}},[l("el-descriptions-item",{attrs:{label:"产品名称"}},[e._v(e._s(t.row.ppmDevice.tName))]),l("el-descriptions-item",{attrs:{label:"计量单位"}},[e._v(e._s(t.row.ppmDevice.tUnit))]),l("el-descriptions-item",{attrs:{label:"税率"}},[e._v(e._s(t.row.ppmDevice.shui))]),l("el-descriptions-item",{attrs:{label:"类别"}},[l("el-tag",{attrs:{size:"small"}},[e._v(e._s(t.row.ppmDevice.category))])],1),l("el-descriptions-item",{attrs:{label:"需求说明"}},[e._v(e._s(t.row.ppmDevice.tIllustrate)+" 1188 号 ")]),l("el-descriptions-item",{attrs:{label:"规格型号"}},[e._v(e._s(t.row.ppmDevice.tModel))])],1)]}}])}),l("el-table-column",{attrs:{label:"行项目编号",align:"center",prop:"vCode",width:"160"}}),l("el-table-column",{attrs:{label:"数量",align:"center",prop:"vCount"}}),l("el-table-column",{attrs:{label:"采购人",align:"center",prop:"vPerson"}}),l("el-table-column",{attrs:{label:"交付时间",align:"center",prop:"vDeliveryTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("span",[e._v(e._s(e.parseTime(t.row.vDeliveryTime,"{y}-{m}-{d}")))])]}}])}),l("el-table-column",{attrs:{label:"交付地点",align:"center",prop:"vDeliveryArea",width:"150"}}),l("el-table-column",{attrs:{label:"需求说明",align:"center",prop:"vIllustrate",width:"120"}})],1),l("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[l("div",{directives:[{name:"has-permi",rawName:"v-has-permi",value:["system:procurement:allow"],expression:"['system:procurement:allow']"}],staticStyle:{display:"inline-block","margin-right":"10px"}},[1==e.form.jhStatus?l("el-button",{attrs:{type:"success"},on:{click:e.allowFarmeworkPlan}},[e._v("审 核")]):e._e(),1==e.form.jhStatus?l("el-button",{attrs:{type:"danger"},on:{click:e.rejectFarmeworkPlan}},[e._v("驳 回")]):e._e()],1),0==e.form.jhStatus?l("el-button",{attrs:{type:"primary"},on:{click:e.sumbitFarmeworkPlan}},[e._v("提 交")]):e._e(),l("el-button",{on:{click:e.cancelFramework}},[e._v("关 闭")])],1)],1)],1)},i=[],s=(l(28743),l(48623)),r=l(35865),o=l(18246),n=l(76177),c=l(43603),m={dicts:["ppm_procurement_plan","procurement_method"],name:"Plan",data(){return{activeName:"first",fullscreenLoading:!1,openFrameworkDetails:!1,hidden:!1,loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,deviceOpen:!1,selectedIndex:null,total:0,framewokPlanList:[],device:[],deviceLoding:!1,title:"",open:!1,file:{fileUrls:[],fileName:[]},upload:{isUploading:!1,headers:{Authorization:"Bearer "+(0,c.gf)()},url:"/prod-api/ppm/file/upload",fileList:[],fileSecuss:[]},queryParams:{pageNum:1,pageSize:10,oid:null,jhCode:null,jhName:null,jhYu:null,dept:null,jhStatus:null,jhPerson:null,jhPmethod:null},form:{hid:""},supplierOptions:[],annexFileList:[],annexUploadHeaders:{},annexUploadData:{},items:[],rules:{jhName:[{required:!0,message:"计划名称值不可为空"}],businessType:[{required:!0,message:"业务类型值不可为空"}],jhYu:[{required:!0,message:"计划预算值不可为空"},{type:"number",message:"计划预算只能是数字"}],hid:[{required:!0,message:"供应商值不可为空"}],jhFounder:[{required:!0,message:"创建人不可为空"}]}}},created(){this.queryParams.jhStatus=0,this.getList()},methods:{OpenClose(){this.file.fileUrls=[],this.file.fileName=[],this.form={},this.upload.fileList=[],this.upload.fileSecuss=[],this.device=[],this.items=[]},removeFile(e,t){if(this.$modal.loading("文件删除中"),this.form.jhId){if("success"==e.status){let t=e;t["jhid"]=this.form.jhId,t["anName"]=t["name"],t["anUrl"]=t["url"],(0,n.yA)(t,"success").then((e=>{this.$modal.closeLoading(),this.$modal.msgSuccess("删除成功！！")})).catch((e=>{this.$modal.closeLoading(),this.$modal.msgError("服务器出错，请联系管理员！！！")}))}}else this.upload.fileSecuss=this.upload.fileSecuss.filter((t=>!t["name"].includes(e["name"].substring(0,e["name"].indexOf(".")))))},beforeRemove(e,t){return this.$confirm(`确定移除 ${e.name}？`)},beforeUpload(e){const t=e.size/1024/1024<2;return t||this.$modal.msgError("文件大小不可超过2MB"),t},uploadError(e,t,l){this.upload.isUploading=!1,this.$modal.msgError(e)},exceedingMaximumLimit(e,t){this.$modal.msgError("最多上传文件5个！！")},submitUpload(){this.$refs.upload.submit()},handleFileSuccess(e,t,l){if(200==e.code)if(this.form.jhId){let t=e.data.data;t["jhid"]=this.form.jhId,t["anName"]=t["name"],t["anUrl"]=t["url"],(0,n.yA)(t,"insert").then((e=>{if(200==e.code)return this.$modal.msgSuccess(e.msg),1;this.$modal.msgSuccess("文件上传失败")})).catch((e=>{this.$modal.msgError("服务器出错，请联系管理员！！！")}))}else this.upload.fileSecuss.push(e.data.data),this.$modal.msgSuccess("文件上成功，需要点击提交按钮才可生效！！");this.upload.isUploading=!1},handleFileUploadProgress(e,t,l){this.upload.isUploading=!0},downloadFile(){0!=this.file.fileUrls.length&&0!=this.file.fileName.length||this.$modal.msgError("没有附件可下载，请上传附件！！")},deleteItems(e,t){this.items.splice(t,1)},handleClick(e,t){switch(console.log(e,t),e.name){case"first":this.queryParams.jhStatus=0,this.getList();break;case"second":this.queryParams.jhStatus=1,this.getList();break;case"third":this.queryParams.jhStatus=2,this.getList();break;default:this.queryParams.jhStatus=0,this.getList();break}},allowFarmeworkPlan(e){let t=this.form.jhId||e.jhId;this.$modal.confirm("确定要通过编号为"+t+"的审核吗").then((()=>{this.$modal.loading("审核中....."),(0,s.j8)(t,2).then((e=>{this.$modal.closeLoading(),this.$modal.msgSuccess("审核成功！！"),this.openFrameworkDetails=!1,this.getList()})).catch((e=>{this.$modal.closeLoading(),this.$modal.msgError("服务器出错，请联系管理员！！！")}))}))},rejectFarmeworkPlan(){this.$modal.confirm("确定要驳回编号为"+this.form.jhId+"的审核吗").then((()=>{this.$modal.loading("驳回中......."),(0,s.j8)(this.form.jhId,0).then((e=>{this.$modal.closeLoading(),this.$modal.msgSuccess("驳回成功！！"),this.openFrameworkDetails=!1,this.getList()})).catch((e=>{this.$modal.closeLoading(),this.$modal.msgError("服务器出错，请联系管理员！！！")}))}))},sumbitFarmeworkPlan(){this.$modal.confirm("确定要提交编号为"+this.form.jhId+"的框架计划吗").then((()=>{this.$modal.loading("提交中......."),(0,s.j8)(this.form.jhId,1).then((e=>{this.$modal.closeLoading(),this.$modal.msgSuccess("提交成功！！"),this.openFrameworkDetails=!1,this.getList()})).catch((e=>{this.$modal.closeLoading(),this.$modal.msgError("服务器出错，请联系管理员！！！")}))}))},click(){},showFrameworkDetails(e){const t=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});(0,s.Aj)(e.jhId).then((e=>{this.form=e.data,e.data.comPubAttachments.anUrl&&e.data.comPubAttachments.anName&&(this.file.fileUrls=e.data.comPubAttachments.anUrl.split(","),this.file.fileName=e.data.comPubAttachments.anName.split(",")),t.close(),this.openFrameworkDetails=!0})).catch((e=>{t.close(),this.$modal.msgError("服务器出错，请联系管理员！！！")}))},getList(){this.loading=!0,(0,s.Gl)(this.queryParams).then((e=>{this.loading=!1,this.framewokPlanList=e.rows,this.total=e.total})).catch((e=>{this.$modal.msgError("服务器出错，请联系管理员！！！")}))},cancel(){this.open=!1,this.items=[],this.reset()},reset(){this.form={jhId:null,oid:null,jhCode:null,jhName:null,jhYu:null,dept:null,jhStatus:null,jhPerson:null,jhPmethod:null},this.resetForm("form"),this.file.fileName=[],this.file.fileUrls=[],this.upload.fileList=[]},handleQuery(){this.queryParams.pageNum=1,this.getList()},resetQuery(){this.resetForm("queryForm"),this.handleQuery()},handleAdd(){this.reset(),this.open=!0,this.getSupplier(),this.title="添加框架计划"},getSupplier(){(0,o.bP)(null).then((e=>{this.supplierOptions=e.rows})).catch((e=>{this.$modal.msgError("服务器出错，请联系管理员！！！")}))},cancelFramework(){this.reset(),this.openFrameworkDetails=!1},handleUpdate(e){this.reset();const t=e.jhId||this.ids;this.$modal.loading("加载中......."),(0,s.Aj)(t).then((e=>{this.$modal.closeLoading(),this.form=e.data,this.items=e.data.items,e.data.comPubAttachments.anUrl&&e.data.comPubAttachments.anName&&(this.file.fileUrls=e.data.comPubAttachments.anUrl.split(","),this.file.fileName=e.data.comPubAttachments.anName.split(","),this.file.fileUrls.forEach(((e,t)=>{this.upload.fileList.push({name:this.file.fileName[t],url:this.file.fileUrls[t]})}))),this.open=!0,this.title="修改框架计划"})).catch((e=>{this.$modal.closeLoading(),this.$modal.msgError("服务器出错，请联系管理员！！！")})),this.getSupplier()},cancelDevice(){this.deviceOpen=!1,this.reset()},search(e,t){this.selectedIndex=t,this.deviceOpen=!0,0==this.device.length&&this.getMaterialList()},getMaterialList(){this.deviceLoding=!0,(0,r.n)(this.queryParams).then((e=>{this.device=e.rows,this.total=e.total,this.deviceLoding=!1})).catch((e=>{this.deviceLoding=!1,this.$modal.msgError("服务器出错，请联系管理员！！！")}))},selectedMateria(e){let t=this.items[this.selectedIndex];t={...t,tid:e.tid},this.items.splice(this.selectedIndex,1,t),this.deviceOpen=!1},submitForm(){console.log("hid",this.form.hid),this.$refs["form"].validate((e=>{if(e)if(null!=this.form.jhId)this.$modal.loading("修改中....."),(0,s.td)(this.form).then((e=>{this.$modal.closeLoading(),this.$modal.msgSuccess("修改成功"),this.open=!1,this.getList()})).catch((e=>{this.$modal.closeLoading(),this.$modal.msgError("修改失败，请联系管理员！！！")}));else{if(0==this.items.length)return this.$modal.msgError("请至少添加一条项目信息"),!1;if(this.items.some((e=>!e.tid)))return void this.$modal.msgError("所有项目设备不能为空");this.$modal.loading("添加中......."),this.form["items"]=this.items,(0,s.U8)(this.form).then((e=>{this.$modal.msgSuccess("添加成功"),this.open=!1,this.$modal.closeLoading(),setTimeout((()=>{this.getList()}),1e3)})).catch((e=>{this.$modal.msgError("服务器发生错误请联系管理员!!"),this.$modal.closeLoading()}))}}))},handleDelete(e){const t=e.jhId||this.ids;this.$modal.confirm('删除框架计划将删除所有行项目，是否继续删除框架计划编号为"'+t+'"的数据项？').then((()=>(this.$modal.loading("删除中......."),(0,s.cB)(t).then((()=>{this.getList(),this.$modal.closeLoading(),this.$modal.msgSuccess("删除成功")})).catch((e=>{this.$modal.closeLoading(),this.$modal.msgError("删除失败，请联系管理员！！！")})))))},insertItems(){this.items.push({})}}},d=m,u=l(81656),p=(0,u.A)(d,a,i,!1,null,"6f1e09d1",null),h=p.exports},35865:function(e,t,l){l.d(t,{n:function(){return i}});var a=l(35720);function i(e){return(0,a.Ay)({url:"/ppm/device/list",method:"get",params:e})}},76177:function(e,t,l){l.d(t,{o5:function(){return i},yA:function(){return s}});var a=l(35720);function i(e){return(0,a.Ay)({url:"/ppm/attachments/selectedComPubAttamentsByAid",method:"post",data:{aid:e}})}function s(e,t){return(0,a.Ay)({url:"/ppm/attachments/updateComPubAttamentsByAid?status="+t,method:"post",data:e})}},48623:function(e,t,l){l.d(t,{$N:function(){return m},Aj:function(){return o},Gl:function(){return i},U8:function(){return r},cB:function(){return n},j8:function(){return c},td:function(){return s}});var a=l(35720);function i(e){return(0,a.Ay)({url:"/ppm/framework/list",method:"get",params:e})}function s(e){return(0,a.Ay)({url:"/ppm/framework",method:"put",data:e})}function r(e){return(0,a.Ay)({url:"/ppm/framework/AddPlanAndOther",method:"post",data:e})}function o(e){return(0,a.Ay)({url:"/ppm/framework/PlanAndRelatedInformation?jhId="+e,method:"post"})}function n(e){return(0,a.Ay)({url:"/ppm/framework/deleteByJhId?jhid="+e,method:"post"})}function c(e,t){return(0,a.Ay)({url:"/ppm/framework/updateFarmeworkPlanStatus?jhId="+e+"&jhStatus="+t,method:"post"})}function m(e){return(0,a.Ay)({url:"/ppm/framework/list1",method:"get",params:e})}}}]);