"use strict";(self["webpackChunkruoyi"]=self["webpackChunkruoyi"]||[]).push([[3594],{53594:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",[a("el-form",{ref:"elForm",attrs:{model:e.form,rules:e.rules,size:"medium","label-width":"150px"}},[a("el-row",{attrs:{type:"flex",justify:"start",align:"middle",gutter:15}},[a("el-form-item",{attrs:{label:"采购计划名称",prop:"field107"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请输入采购计划名称",clearable:""},model:{value:e.queryParams.aName,callback:function(t){e.$set(e.queryParams,"aName",t)},expression:"queryParams.aName"}})],1),a("el-form-item",{attrs:{label:"创建部门"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请输入创建部门",clearable:""},model:{value:e.queryParams.aCreateDept,callback:function(t){e.$set(e.queryParams,"aCreateDept",t)},expression:"queryParams.aCreateDept"}})],1),a("el-form-item",{attrs:{size:"medium"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.query}},[e._v("查询")]),a("el-button",{on:{click:e.resetQuery}},[e._v("重置")])],1)],1)],1)],1),a("el-row",{staticClass:"mb8",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:rules:add"],expression:"['system:rules:add']"}],attrs:{type:"primary",plain:"",size:"mini"},on:{click:e.handleSubmit}},[e._v("执行采购寻源 ")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.planList},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{selectable:e.selectable,type:"selection",width:"55",align:"center"}}),a("el-table-column",{attrs:{label:"序号",align:"center",prop:"aid",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index+1)+" ")]}}])}),a("el-table-column",{attrs:{label:"采购计划编号",align:"center",prop:"aCode"}}),a("el-table-column",{attrs:{label:"采购业务类型",align:"center",prop:"aBtype"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("dict-tag",{attrs:{options:e.dict.type.ppm_procurement_plan,value:t.row.aBtype}})]}}])}),a("el-table-column",{attrs:{label:"采购计划名称",align:"center",prop:"aName"}}),a("el-table-column",{attrs:{label:"创建人",align:"center",prop:"createBy"}}),a("el-table-column",{attrs:{label:"创建部门",align:"center",prop:"aCreateDept"}}),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime"}}),a("el-table-column",{attrs:{label:"修改时间",align:"center",prop:"updateTime"}}),a("el-table-column",{attrs:{label:"采购计划状态",align:"center",prop:"aAstate"},scopedSlots:e._u([{key:"default",fn:function(t){return[3==t.row.aAstate?a("el-tag",{attrs:{type:"danger"}},[e._v("已寻源")]):a("el-tag",[e._v("待寻源")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:plan:edit"],expression:"['system:plan:edit']"}],attrs:{size:"mini",type:"text"},on:{click:function(a){return e.handleClick(t.row)}}},[e._v("查看 ")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{title:"查看采购计划",visible:e.open,width:"1000px","append-to-body":""},on:{close:e.closeDialog,"update:visible":function(t){e.open=t}}},[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.paneName,callback:function(t){e.paneName=t},expression:"paneName"}},[a("el-descriptions",{staticClass:"margin-top",attrs:{direction:"vertical",column:4,size:"medium",border:""}},[a("el-descriptions-item",{attrs:{label:"采购计划编号"}},[e._v(e._s(e.form.aCode))]),a("el-descriptions-item",{attrs:{label:"计划名称"}},[e._v(e._s(e.form.aName))]),a("el-descriptions-item",{attrs:{label:"创建人"}},[e._v(e._s(e.form.createBy))]),a("el-descriptions-item",{attrs:{label:"创建部门"}},[e._v(e._s(e.form.aCreateDept))]),a("el-descriptions-item",{attrs:{label:"附件"}},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.download(e.form.fjAnnex)}}},[e._v(" 下载附件"),a("i",{staticClass:"el-icon-download"})]),e._l(e.file.fileUrls.length,(function(t){return a("p",[a("a",{attrs:{href:e.file.fileUrls[t-1],target:"_blank"}},[e._v(e._s(e.file.fileName[t-1]))])])}))],2)],1),a("el-table",{staticStyle:{"margin-top":"20px"},attrs:{"max-height":"250",data:e.budgetData}},[a("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.$index)+" ")]}}])}),a("el-table-column",{attrs:{height:"250",align:"center","header-align":"center",prop:"duDept",label:"部门名称"}}),a("el-table-column",{attrs:{prop:"duId",align:"center",label:"预算科目编号"}}),a("el-table-column",{attrs:{prop:"duName",align:"center",label:"预算科目名称"}}),a("el-table-column",{attrs:{prop:"duTotal",align:"center",label:"总金额"}})],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"margin-top":"20px"},attrs:{"max-height":"250",data:e.itemList},on:{"cell-click":e.click}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-descriptions",{attrs:{border:""}},[a("el-descriptions-item",{attrs:{label:"产品名称"}},[e._v(e._s(t.row.ppmDevice.tName))]),a("el-descriptions-item",{attrs:{label:"计量单位"}},[e._v(e._s(t.row.ppmDevice.tUnit))]),a("el-descriptions-item",{attrs:{label:"税率"}},[e._v(e._s(t.row.ppmDevice.shui))]),a("el-descriptions-item",{attrs:{label:"类别"}},[a("el-tag",{attrs:{size:"small"}},[e._v(e._s(t.row.ppmDevice.category))])],1),a("el-descriptions-item",{attrs:{label:"需求说明"}},[e._v(e._s(t.row.ppmDevice.tIllustrate)+" 1188 号 ")]),a("el-descriptions-item",{attrs:{label:"规格型号"}},[e._v(e._s(t.row.ppmDevice.tModel))])],1)]}}])}),a("el-table-column",{attrs:{label:"行项目编号",align:"center",prop:"vCode",width:"160"}}),a("el-table-column",{attrs:{label:"数量",align:"center",prop:"vCount"}}),a("el-table-column",{attrs:{label:"采购人",align:"center",prop:"vPerson"}}),a("el-table-column",{attrs:{label:"交付时间",align:"center",prop:"vDeliveryTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.vDeliveryTime,"{y}-{m}-{d}")))])]}}])}),a("el-table-column",{attrs:{label:"交付地点",align:"center",prop:"vDeliveryArea",width:"150"}}),a("el-table-column",{attrs:{label:"需求说明",align:"center",prop:"vIllustrate"}}),a("el-table-column",{attrs:{label:"采购方式",align:"center",prop:"procurementMethod"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),a("el-dialog",{attrs:{visible:e.openByType,title:"选择采购方式",width:"35%"},on:{close:e.cancelType,"update:visible":function(t){e.openByType=t}}},[a("div",{staticClass:"radio",staticStyle:{"text-align":"center"}},[a("el-radio-group",{model:{value:e.typeRadio,callback:function(t){e.typeRadio=t},expression:"typeRadio"}},[a("el-radio",{attrs:{label:1}},[e._v("公开")]),a("el-radio",{attrs:{label:2}},[e._v("邀请")]),a("el-radio",{attrs:{label:3}},[e._v("询价")]),a("el-radio",{attrs:{label:4}},[e._v("委托")]),a("el-radio",{attrs:{label:5}},[e._v("竞争性谈判")]),a("el-radio",{attrs:{label:6}},[e._v("单一来源")])],1)],1),5==e.typeRadio||3==e.typeRadio?a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("是否公开/邀请")])]),a("div",{staticClass:"text item"},[a("el-radio-group",{model:{value:e.noBidType,callback:function(t){e.noBidType=t},expression:"noBidType"}},[a("el-radio",{attrs:{label:1}},[e._v("公开")]),a("el-radio",{attrs:{label:2}},[e._v("邀请")])],1)],1)]):e._e(),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:e.sumbitType}},[e._v("确 定")]),a("el-button",{on:{click:e.cancelType}},[e._v("取 消")])],1)],1)],1)},i=[],s=(a(28743),a(50393)),r={dicts:["ppm_procurement_plan"],name:"Plan",components:{},props:[],data(){return{file:{fileUrls:[],fileName:[]},planList:[],itemList:[],openByType:!1,fullscreenLoading:!1,typeRadio:1,noBidType:1,form:{},queryParams:{pageNum:1,pageSize:10,aAstate:2},loading:!1,total:0,budgetData:[],open:!1,yilist:[],paneName:"",rules:{}}},created(){let e=this.$route.query;e&&e.aid&&this.handleClick(e),this.getList()},methods:{closeDialog(){this.file.fileUrls=[],this.file.fileName=[],this.budgetData=[]},selectable(e,t){return 2==e.aAstate},getList(){this.loading=!0,this.planList=[],(0,s.eX)(this.queryParams).then((e=>{this.total=e.total,this.loading=!1,this.planList=e.rows})).catch((e=>{this.$modal.msgError("服务器出错，请联系管理员！！！")}))},query(){this.$nextTick((()=>{this.$refs["elForm"].validate((e=>{})),this.getList()}))},cancelType(){this.typeRadio=1,this.openByType=!1},sumbitType(){this.fullscreenLoading=!0,(0,s.c7)(this.yilist,this.typeRadio,this.noBidType).then((e=>{this.fullscreenLoading=!1,this.openByType=!1,this.$modal.msgSuccess("操作成功！！"),this.getList()})).catch((e=>{this.fullscreenLoading=!1,this.$modal.msgError("服务器出错，请联系管理员！！！")}))},reset(){this.queryParams={aid:null,aCode:null,aName:null,createBy:null,aCreateDept:null,createTime:null,updateBy:null,updateTime:null,fjAnnex:null,aOpinion:null,aProjectCount:null,aBtype:null,aAstate:0},this.queryParams.aBtype=null,this.resetForm("form")},resetForm(){this.$nextTick((()=>{this.$refs["elForm"].resetFields()}))},resetQuery(){this.reset(),this.getList()},handleClick(e){(0,s.Gb)(e.aid).then((e=>{this.open=!0,this.itemList=e.data.items,this.loading=!1,this.form=e.data,e.data.items&&e.data.items.forEach(((e,t)=>{e.ppmBudget.duId&&this.budgetData.push(e.ppmBudget)})),e.data.file.anName&&e.data.file.anUrl&&(this.file.fileUrls=e.data.file.anUrl.split(","),this.file.fileName=e.data.file.anName.split(","))})).catch((e=>{this.$modal.msgError("服务器出错，请联系管理员！！！")}))},handleSubmit(){this.yilist.length>0?this.openByType=!0:this.$modal.msgError("请选择采购寻源")},cancel(){this.open=!1,this.reset()},click(e){if(null!=e.ppmBudget.duName&&void 0!=e.ppmBudget.duName){let t=[];t.push(e.ppmBudget),this.budgetData=t}else this.budgetData=null},handleSelectionChange(e){this.yilist=e},download(){if(0==this.file.fileUrls.length)return void this.$modal.msgError("没有附件可下载，请上传附件！！");let e=encodeURIComponent(this.file.fileUrls);var t=`http://localhost:8080/ppm/file/downloadFiles?file=${e}`;const a=document.createElement("a");a.setAttribute("target","_blank"),a.setAttribute("href",t),a.click()}}},n=r,o=a(81656),c=(0,o.A)(n,l,i,!1,null,"4b0a3534",null),p=c.exports}}]);