(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1991348d"],{"023f":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var l=a("b775");function i(e){return Object(l["a"])({url:"/ppm/device/list",method:"get",params:e})}},"0e64":function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return n}));var l=a("b775");function i(e){return Object(l["a"])({url:"/ppm/attachments/selectedComPubAttamentsByAid",method:"post",data:{aid:e}})}function n(e,t){return Object(l["a"])({url:"/ppm/attachments/updateComPubAttamentsByAid?status="+t,method:"post",data:e})}},2627:function(e,t,a){},"73a7":function(e,t,a){},"847a":function(e,t,a){"use strict";a("c9c7")},"8c4c":function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"g",(function(){return n})),a.d(t,"a",(function(){return r})),a.d(t,"e",(function(){return o})),a.d(t,"b",(function(){return s})),a.d(t,"f",(function(){return c})),a.d(t,"d",(function(){return u}));var l=a("b775");function i(e){return Object(l["a"])({url:"/ppm/framework/list",method:"get",params:e})}function n(e){return Object(l["a"])({url:"/ppm/framework",method:"put",data:e})}function r(e){return Object(l["a"])({url:"/ppm/framework/AddPlanAndOther",method:"post",data:e})}function o(e){return Object(l["a"])({url:"/ppm/framework/PlanAndRelatedInformation?jhId="+e,method:"post"})}function s(e){return Object(l["a"])({url:"/ppm/framework/deleteByJhId?jhid="+e,method:"post"})}function c(e,t){return Object(l["a"])({url:"/ppm/framework/updateFarmeworkPlanStatus?jhId="+e+"&jhStatus="+t,method:"post"})}function u(e){return Object(l["a"])({url:"/ppm/framework/list1",method:"get",params:e})}},"96b8":function(e,t,a){"use strict";a("73a7")},c9c7:function(e,t,a){},d060:function(e,t,a){"use strict";a("2627")},fd7d:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{directives:[{name:"show",rawName:"v-show",value:e.showSearch,expression:"showSearch"}],ref:"queryForm",attrs:{model:e.queryParams,size:"small",inline:!0,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"框架计划编码",prop:"jhCode"}},[a("el-input",{attrs:{placeholder:"请输入框架计划编码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.jhCode,callback:function(t){e.$set(e.queryParams,"jhCode",t)},expression:"queryParams.jhCode"}})],1),a("el-form-item",{attrs:{label:"计划名称",prop:"jhName"}},[a("el-input",{attrs:{placeholder:"请输入计划名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.jhName,callback:function(t){e.$set(e.queryParams,"jhName",t)},expression:"queryParams.jhName"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")]),a("el-button",{attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增 ")])],1)],1),a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"待提交",name:"first"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.framewokPlanList}},[a("el-table-column",{attrs:{label:"框架计划编码",align:"center",prop:"jhCode"}}),a("el-table-column",{attrs:{label:"框架计划名称",align:"center",prop:"jhName"}}),a("el-table-column",{attrs:{label:"预算(含税)/元",align:"center",prop:"jhYu"}}),a("el-table-column",{attrs:{label:"创建部门",align:"center",prop:"dept"}}),a("el-table-column",{attrs:{label:"计划状态",align:"center",prop:"jhStatus"}},[[a("el-tag",[e._v("待提交")])]],2),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("修改 ")]),a("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除 ")]),a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return e.showFrameworkDetails(t.row)}}},[e._v("查看 ")])]}}])})],1)],1),a("el-tab-pane",{attrs:{label:"待审批",name:"second"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.framewokPlanList}},[a("el-table-column",{attrs:{label:"框架计划编码",align:"center",prop:"jhCode"}}),a("el-table-column",{attrs:{label:"框架计划名称",align:"center",prop:"jhName"}}),a("el-table-column",{attrs:{label:"预算(含税)/元",align:"center",prop:"jhYu"}}),a("el-table-column",{attrs:{label:"创建部门",align:"center",prop:"dept"}}),a("el-table-column",{attrs:{label:"计划状态",align:"center",prop:"jhStatus"}},[[a("el-tag",{attrs:{type:"danger"}},[e._v("待审批")])]],2),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return e.showFrameworkDetails(t.row)}}},[e._v("查看 ")])]}}])})],1)],1),a("el-tab-pane",{attrs:{label:"已完成",name:"third"}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.framewokPlanList}},[a("el-table-column",{attrs:{label:"框架计划编码",align:"center",prop:"jhCode"}}),a("el-table-column",{attrs:{label:"框架计划名称",align:"center",prop:"jhName"}}),a("el-table-column",{attrs:{label:"预算(含税)/元",align:"center",prop:"jhYu"}}),a("el-table-column",{attrs:{label:"创建部门",align:"center",prop:"dept"}}),a("el-table-column",{attrs:{label:"计划状态",align:"center",prop:"jhStatus"}},[[a("el-tag",{attrs:{type:"success"}},[e._v("已完成")])]],2),a("el-table-column",{attrs:{label:"审批人",align:"center",prop:"jhPerson"}}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(a){return e.showFrameworkDetails(t.row)}}},[e._v("查看 ")])]}}])})],1)],1)],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),a("el-dialog",{attrs:{title:e.title,visible:e.open,width:"1000px","append-to-body":""},on:{close:e.OpenClose,"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-position":"left","label-width":"120px",size:"medium"},nativeOn:{submit:function(e){e.preventDefault()}}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"static-content-item"},[a("el-divider",{attrs:{direction:"horizontal"}})],1),a("div",{staticClass:"card-container"},[a("el-row",[a("el-col",{staticClass:"grid-cell",attrs:{span:12}},[a("el-form-item",{staticClass:"label-center-align",attrs:{label:"计划编码",prop:"计划编码"}},[a("el-input",{attrs:{disabled:!0,type:"text",placeholder:"自动生成"},model:{value:e.form.jhCode,callback:function(t){e.$set(e.form,"jhCode",t)},expression:"form.jhCode"}})],1)],1),a("el-col",{staticClass:"grid-cell",attrs:{span:12}},[a("el-form-item",{staticClass:"required label-center-align",attrs:{label:"计划名称",prop:"jhName"}},[a("el-input",{attrs:{type:"text"},model:{value:e.form.jhName,callback:function(t){e.$set(e.form,"jhName",t)},expression:"form.jhName"}})],1)],1)],1),a("el-row",[a("el-col",{staticClass:"grid-cell",attrs:{span:12}},[a("el-form-item",{staticClass:"required label-center-align",attrs:{label:"业务类型",prop:"businessType"}},[a("el-select",{staticClass:"input",attrs:{placeholder:"请选择业务类型"},model:{value:e.form.businessType,callback:function(t){e.$set(e.form,"businessType",t)},expression:"form.businessType"}},e._l(e.dict.type.ppm_procurement_plan,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:1*e.value}})})),1)],1)],1),a("el-col",{staticClass:"grid-cell",attrs:{span:12}},[a("el-form-item",{staticClass:"required label-center-align",attrs:{label:"计划预算",prop:"jhYu"}},[a("el-input",{model:{value:e.form.jhYu,callback:function(t){e.$set(e.form,"jhYu",e._n(t))},expression:"form.jhYu"}})],1)],1)],1),a("el-row",[a("el-col",{staticClass:"grid-cell",attrs:{span:12}},[a("el-form-item",{staticClass:"required label-center-align",attrs:{label:"供应商",prop:"hid"}},[a("el-select",{staticClass:"input full-width-input",attrs:{filterable:""},model:{value:e.form.hid,callback:function(t){e.$set(e.form,"hid",t)},expression:"form.hid"}},e._l(e.supplierOptions,(function(e,t){return a("el-option",{key:t,attrs:{label:e.hName,value:e.hid}})})),1)],1)],1),a("el-col",{staticClass:"grid-cell",attrs:{span:12}},[a("el-form-item",{staticClass:"required label-center-align",attrs:{label:"创建人"}},[a("el-input",{attrs:{disabled:"",value:e.form.jhFounder||"系统自动生成",type:"text"}})],1)],1)],1),a("el-row",[a("el-col",{staticClass:"grid-cell",attrs:{span:12}},[a("el-form-item",{staticClass:"required label-center-align",attrs:{label:"创建部门",prop:"dept"}},[a("el-input",{attrs:{value:e.form.dept||"系统自动生成",disabled:"",type:"text"}})],1)],1),a("el-col",{staticClass:"grid-cell",attrs:{span:12}},[a("el-form-item",{staticClass:"label-center-align",attrs:{label:"上传附件",prop:"annex"}},[a("el-upload",{ref:"upload",attrs:{action:e.upload.url,headers:e.upload.headers,"file-list":e.upload.fileList,multiple:!0,"on-progress":e.handleFileUploadProgress,"on-success":e.handleFileSuccess,limit:5,"on-exceed":e.exceedingMaximumLimit,"on-error":e.uploadError,"before-upload":e.beforeUpload,"before-remove":e.beforeRemove,"on-remove":e.removeFile,"auto-upload":!1}},[a("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[e._v("选取文件")]),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"success",loading:e.upload.isUploading},on:{click:e.submitUpload}},[e._v("上传到服务器 ")])],1)],1)],1)],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"static-content-item"},[a("el-divider",{attrs:{direction:"horizontal"}})],1),a("div",{staticClass:"card-container"},[a("div",{staticClass:"static-content-item"},[a("el-button",{attrs:{icon:"el-icon-plus",type:"primary",size:"small"},on:{click:e.insertItems}},[e._v("添加项目")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"elTable",staticStyle:{"margin-top":"20px"},attrs:{"max-height":"250",data:e.items,border:""}},[a("el-table-column",{attrs:{label:"序号",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.$index+1))])]}}])}),a("el-table-column",{attrs:{label:"行项目编号",align:"center",prop:"vCode",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[null==e.form.aid?a("span",[e._v("自动生成")]):a("el-input",{staticClass:"borderNone",attrs:{disabled:""},model:{value:t.row.vCode,callback:function(a){e.$set(t.row,"vCode",a)},expression:"scope.row.vCode"}})]}}])}),a("el-table-column",{attrs:{label:"物料编号",align:"center",prop:"tid",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.tid))]),a("i",{staticClass:"el-icon-search",on:{click:function(a){return e.search(t.row,t.$index)}}})]}}])}),a("el-table-column",{attrs:{label:"数量",align:"center",prop:"vCount",width:"230"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input-number",{attrs:{step:1,"step-strictly":""},model:{value:t.row.vCount,callback:function(a){e.$set(t.row,"vCount",a)},expression:"scope.row.vCount"}})]}}])}),a("el-table-column",{attrs:{label:"采购人",align:"center",prop:"vPerson",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{staticClass:"borderNone",model:{value:t.row.vPerson,callback:function(a){e.$set(t.row,"vPerson",a)},expression:"scope.row.vPerson"}})]}}])}),a("el-table-column",{attrs:{label:"交付时间",align:"center",prop:"vDeliveryTime",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-date-picker",{staticStyle:{width:"150px"},attrs:{type:"date",placeholder:"选择日期"},model:{value:t.row.vDeliveryTime,callback:function(a){e.$set(t.row,"vDeliveryTime",a)},expression:"scope.row.vDeliveryTime"}})]}}])}),a("el-table-column",{attrs:{label:"交付地点",align:"center",prop:"vDeliveryArea",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{staticClass:"borderNone",model:{value:t.row.vDeliveryArea,callback:function(a){e.$set(t.row,"vDeliveryArea",a)},expression:"scope.row.vDeliveryArea"}},[e._v(" "+e._s(e.parseTime(t.row.tDate,"{y}-{m}-{d}"))+" ")])]}}])}),a("el-table-column",{attrs:{label:"需求说明",align:"center",prop:"vIllustrate",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{staticClass:"borderNone",model:{value:t.row.vIllustrate,callback:function(a){e.$set(t.row,"vIllustrate",a)},expression:"scope.row.vIllustrate"}})]}}])}),a("el-table-column",{attrs:{fixed:"right",label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(a){return e.deleteItems(t.row,t.$index)}}},[e._v("删除 ")])]}}])})],1)],1)]),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),a("el-dialog",{attrs:{title:"收货地址",visible:e.deviceOpen,width:"42%"},on:{"update:visible":function(t){e.deviceOpen=t}}},[a("el-form",{ref:"queryForm",attrs:{model:e.form,size:"small",inline:!0,"label-width":"68px"}},[a("el-form-item",{attrs:{label:"产品编码",prop:"tid"}},[a("el-input",{attrs:{placeholder:"请输入产品编码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.tid,callback:function(t){e.$set(e.queryParams,"tid",t)},expression:"queryParams.tid"}})],1),a("el-form-item",{attrs:{label:"产品名称",prop:"tName"}},[a("el-input",{attrs:{placeholder:"请输入产品名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.tName,callback:function(t){e.$set(e.queryParams,"tName",t)},expression:"queryParams.tName"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.deviceLoding,expression:"deviceLoding"}],attrs:{"max-height":"300",border:"",data:e.device},on:{"cell-dblclick":e.selectedMateria}},[a("el-table-column",{attrs:{label:"产品编码",align:"center",prop:"tid"}}),a("el-table-column",{attrs:{label:"产品名称",align:"center",prop:"tName"}})],1),a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getMaterialList}})],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.cancelDevice}},[e._v("关 闭")])],1)],1),a("el-dialog",{attrs:{visible:e.openFrameworkDetails},on:{"update:visible":function(t){e.openFrameworkDetails=t}}},[a("el-descriptions",{staticClass:"margin-top",attrs:{direction:"vertical",title:"查看框架详情",column:3,size:"medium",border:""}},[a("el-descriptions-item",[a("template",{slot:"label"},[e._v(" 框架计划名称 ")]),e._v(" "+e._s(e.form.jhName)+" ")],2),a("el-descriptions-item",[a("template",{slot:"label"},[e._v(" 框架计划预算 ")]),e._v(" "+e._s(e.form.jhYu)+" ")],2),a("el-descriptions-item",[a("template",{slot:"label"},[e._v(" 部门 ")]),e._v(" "+e._s(e.form.dept)+" ")],2),a("el-descriptions-item",[a("template",{slot:"label"},[e._v(" 框架计划状态 ")]),0==e.form.jhStatus?a("el-tag",[e._v("待提交")]):e._e(),1==e.form.jhStatus?a("el-tag",[e._v("待审核")]):e._e(),2==e.form.jhStatus?a("el-tag",[e._v("已生效")]):e._e()],2),a("el-descriptions-item",[a("template",{slot:"label"},[e._v(" 审批人 ")]),null!=e.form.jhPerson&&""!=e.form.jhPerson?a("span",[e._v(" "+e._s(e.form.jhPerson)+" ")]):a("span",{staticStyle:{color:"#cccccc"}},[e._v(" 未审核 ")])],2),a("el-descriptions-item",[a("template",{slot:"label"},[e._v(" 创建人 ")]),e._v(" "+e._s(e.form.jhFounder)+" ")],2),a("el-descriptions-item",[a("template",{slot:"label"},[e._v(" 附件 ")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-download"},on:{click:e.downloadFile}},[e._v("下载附件")])],2),a("el-descriptions-item",[a("template",{slot:"label"},[e._v(" 附件名称 ")]),e._l(e.file.fileUrls.length,(function(t){return a("p",{key:t},[a("a",{attrs:{href:e.file.fileUrls[t-1]}},[e._v(e._s(e.file.fileName[t-1]))])])}))],2)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{"margin-top":"20px"},attrs:{border:"","max-height":"250",data:e.form.items},on:{"cell-click":e.click}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-descriptions",{attrs:{border:""}},[a("el-descriptions-item",{attrs:{label:"产品名称"}},[e._v(e._s(t.row.ppmDevice.tName))]),a("el-descriptions-item",{attrs:{label:"计量单位"}},[e._v(e._s(t.row.ppmDevice.tUnit))]),a("el-descriptions-item",{attrs:{label:"税率"}},[e._v(e._s(t.row.ppmDevice.shui))]),a("el-descriptions-item",{attrs:{label:"类别"}},[a("el-tag",{attrs:{size:"small"}},[e._v(e._s(t.row.ppmDevice.category))])],1),a("el-descriptions-item",{attrs:{label:"需求说明"}},[e._v(e._s(t.row.ppmDevice.tIllustrate)+" 1188 号 ")]),a("el-descriptions-item",{attrs:{label:"规格型号"}},[e._v(e._s(t.row.ppmDevice.tModel))])],1)]}}])}),a("el-table-column",{attrs:{label:"行项目编号",align:"center",prop:"vCode",width:"160"}}),a("el-table-column",{attrs:{label:"数量",align:"center",prop:"vCount"}}),a("el-table-column",{attrs:{label:"采购人",align:"center",prop:"vPerson"}}),a("el-table-column",{attrs:{label:"交付时间",align:"center",prop:"vDeliveryTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.vDeliveryTime,"{y}-{m}-{d}")))])]}}])}),a("el-table-column",{attrs:{label:"交付地点",align:"center",prop:"vDeliveryArea",width:"150"}}),a("el-table-column",{attrs:{label:"需求说明",align:"center",prop:"vIllustrate",width:"120"}})],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("div",{directives:[{name:"has-permi",rawName:"v-has-permi",value:["system:procurement:allow"],expression:"['system:procurement:allow']"}],staticStyle:{display:"inline-block","margin-right":"10px"}},[1==e.form.jhStatus?a("el-button",{attrs:{type:"success"},on:{click:e.allowFarmeworkPlan}},[e._v("审 核")]):e._e(),1==e.form.jhStatus?a("el-button",{attrs:{type:"danger"},on:{click:e.rejectFarmeworkPlan}},[e._v("驳 回")]):e._e()],1),0==e.form.jhStatus?a("el-button",{attrs:{type:"primary"},on:{click:e.sumbitFarmeworkPlan}},[e._v("提 交")]):e._e(),a("el-button",{on:{click:e.cancelFramework}},[e._v("关 闭")])],1)],1)],1)},i=[],n=a("5530"),r=(a("4de4"),a("caad"),a("14d9"),a("a434"),a("b0c0"),a("d3b7"),a("2532"),a("159b"),a("8c4c")),o=a("023f"),s=a("37b4"),c=a("0e64"),u=a("5f87"),d={dicts:["ppm_procurement_plan","procurement_method"],name:"Plan",data:function(){return{activeName:"first",fullscreenLoading:!1,openFrameworkDetails:!1,hidden:!1,loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,deviceOpen:!1,selectedIndex:null,total:0,framewokPlanList:[],device:[],deviceLoding:!1,title:"",open:!1,file:{fileUrls:[],fileName:[]},upload:{isUploading:!1,headers:{Authorization:"Bearer "+Object(u["a"])()},url:"/prod-api/ppm/file/upload",fileList:[],fileSecuss:[]},queryParams:{pageNum:1,pageSize:10,oid:null,jhCode:null,jhName:null,jhYu:null,dept:null,jhStatus:null,jhPerson:null,jhPmethod:null},form:{hid:""},supplierOptions:[],annexFileList:[],annexUploadHeaders:{},annexUploadData:{},items:[],rules:{jhName:[{required:!0,message:"计划名称值不可为空"}],businessType:[{required:!0,message:"业务类型值不可为空"}],jhYu:[{required:!0,message:"计划预算值不可为空"},{type:"number",message:"计划预算只能是数字"}],hid:[{required:!0,message:"供应商值不可为空"}],jhFounder:[{required:!0,message:"创建人不可为空"}]}}},created:function(){this.queryParams.jhStatus=0,this.getList()},methods:{OpenClose:function(){this.file.fileUrls=[],this.file.fileName=[],this.form={},this.upload.fileList=[],this.upload.fileSecuss=[],this.device=[],this.items=[]},removeFile:function(e,t){var a=this;if(this.$modal.loading("文件删除中"),this.form.jhId){if("success"==e.status){var l=e;l["jhid"]=this.form.jhId,l["anName"]=l["name"],l["anUrl"]=l["url"],Object(c["b"])(l,"success").then((function(e){a.$modal.closeLoading(),a.$modal.msgSuccess("删除成功！！")})).catch((function(e){a.$modal.closeLoading(),a.$modal.msgError("服务器出错，请联系管理员！！！")}))}}else this.upload.fileSecuss=this.upload.fileSecuss.filter((function(t){return!t["name"].includes(e["name"].substring(0,e["name"].indexOf(".")))}))},beforeRemove:function(e,t){return this.$confirm("确定移除 ".concat(e.name,"？"))},beforeUpload:function(e){var t=e.size/1024/1024<2;return t||this.$modal.msgError("文件大小不可超过2MB"),t},uploadError:function(e,t,a){this.upload.isUploading=!1,this.$modal.msgError(e)},exceedingMaximumLimit:function(e,t){this.$modal.msgError("最多上传文件5个！！")},submitUpload:function(){this.$refs.upload.submit()},handleFileSuccess:function(e,t,a){var l=this;if(200==e.code)if(this.form.jhId){var i=e.data.data;i["jhid"]=this.form.jhId,i["anName"]=i["name"],i["anUrl"]=i["url"],Object(c["b"])(i,"insert").then((function(e){if(200==e.code)return l.$modal.msgSuccess(e.msg),1;l.$modal.msgSuccess("文件上传失败")})).catch((function(e){l.$modal.msgError("服务器出错，请联系管理员！！！")}))}else this.upload.fileSecuss.push(e.data.data),this.$modal.msgSuccess("文件上成功，需要点击提交按钮才可生效！！");this.upload.isUploading=!1},handleFileUploadProgress:function(e,t,a){this.upload.isUploading=!0},downloadFile:function(){0!=this.file.fileUrls.length&&0!=this.file.fileName.length||this.$modal.msgError("没有附件可下载，请上传附件！！")},deleteItems:function(e,t){this.items.splice(t,1)},handleClick:function(e,t){switch(console.log(e,t),e.name){case"first":this.queryParams.jhStatus=0,this.getList();break;case"second":this.queryParams.jhStatus=1,this.getList();break;case"third":this.queryParams.jhStatus=2,this.getList();break;default:this.queryParams.jhStatus=0,this.getList();break}},allowFarmeworkPlan:function(e){var t=this,a=this.form.jhId||e.jhId;this.$modal.confirm("确定要通过编号为"+a+"的审核吗").then((function(){t.$modal.loading("审核中....."),Object(r["f"])(a,2).then((function(e){t.$modal.closeLoading(),t.$modal.msgSuccess("审核成功！！"),t.openFrameworkDetails=!1,t.getList()})).catch((function(e){t.$modal.closeLoading(),t.$modal.msgError("服务器出错，请联系管理员！！！")}))}))},rejectFarmeworkPlan:function(){var e=this;this.$modal.confirm("确定要驳回编号为"+this.form.jhId+"的审核吗").then((function(){e.$modal.loading("驳回中......."),Object(r["f"])(e.form.jhId,0).then((function(t){e.$modal.closeLoading(),e.$modal.msgSuccess("驳回成功！！"),e.openFrameworkDetails=!1,e.getList()})).catch((function(t){e.$modal.closeLoading(),e.$modal.msgError("服务器出错，请联系管理员！！！")}))}))},sumbitFarmeworkPlan:function(){var e=this;this.$modal.confirm("确定要提交编号为"+this.form.jhId+"的框架计划吗").then((function(){e.$modal.loading("提交中......."),Object(r["f"])(e.form.jhId,1).then((function(t){e.$modal.closeLoading(),e.$modal.msgSuccess("提交成功！！"),e.openFrameworkDetails=!1,e.getList()})).catch((function(t){e.$modal.closeLoading(),e.$modal.msgError("服务器出错，请联系管理员！！！")}))}))},click:function(){},showFrameworkDetails:function(e){var t=this,a=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});Object(r["e"])(e.jhId).then((function(e){t.form=e.data,e.data.comPubAttachments.anUrl&&e.data.comPubAttachments.anName&&(t.file.fileUrls=e.data.comPubAttachments.anUrl.split(","),t.file.fileName=e.data.comPubAttachments.anName.split(",")),a.close(),t.openFrameworkDetails=!0})).catch((function(e){a.close(),t.$modal.msgError("服务器出错，请联系管理员！！！")}))},getList:function(){var e=this;this.loading=!0,Object(r["c"])(this.queryParams).then((function(t){e.loading=!1,e.framewokPlanList=t.rows,e.total=t.total})).catch((function(t){e.$modal.msgError("服务器出错，请联系管理员！！！")}))},cancel:function(){this.open=!1,this.items=[],this.reset()},reset:function(){this.form={jhId:null,oid:null,jhCode:null,jhName:null,jhYu:null,dept:null,jhStatus:null,jhPerson:null,jhPmethod:null},this.resetForm("form"),this.file.fileName=[],this.file.fileUrls=[],this.upload.fileList=[]},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleAdd:function(){this.reset(),this.open=!0,this.getSupplier(),this.title="添加框架计划"},getSupplier:function(){var e=this;Object(s["c"])(null).then((function(t){e.supplierOptions=t.rows})).catch((function(t){e.$modal.msgError("服务器出错，请联系管理员！！！")}))},cancelFramework:function(){this.reset(),this.openFrameworkDetails=!1},handleUpdate:function(e){var t=this;this.reset();var a=e.jhId||this.ids;this.$modal.loading("加载中......."),Object(r["e"])(a).then((function(e){t.$modal.closeLoading(),t.form=e.data,t.items=e.data.items,e.data.comPubAttachments.anUrl&&e.data.comPubAttachments.anName&&(t.file.fileUrls=e.data.comPubAttachments.anUrl.split(","),t.file.fileName=e.data.comPubAttachments.anName.split(","),t.file.fileUrls.forEach((function(e,a){t.upload.fileList.push({name:t.file.fileName[a],url:t.file.fileUrls[a]})}))),t.open=!0,t.title="修改框架计划"})).catch((function(e){t.$modal.closeLoading(),t.$modal.msgError("服务器出错，请联系管理员！！！")})),this.getSupplier()},cancelDevice:function(){this.deviceOpen=!1,this.reset()},search:function(e,t){this.selectedIndex=t,this.deviceOpen=!0,0==this.device.length&&this.getMaterialList()},getMaterialList:function(){var e=this;this.deviceLoding=!0,Object(o["a"])(this.queryParams).then((function(t){e.device=t.rows,e.total=t.total,e.deviceLoding=!1})).catch((function(t){e.deviceLoding=!1,e.$modal.msgError("服务器出错，请联系管理员！！！")}))},selectedMateria:function(e){var t=this.items[this.selectedIndex];t=Object(n["a"])(Object(n["a"])({},t),{},{tid:e.tid}),this.items.splice(this.selectedIndex,1,t),this.deviceOpen=!1},submitForm:function(){var e=this;console.log("hid",this.form.hid),this.$refs["form"].validate((function(t){if(t)if(null!=e.form.jhId)e.$modal.loading("修改中....."),Object(r["g"])(e.form).then((function(t){e.$modal.closeLoading(),e.$modal.msgSuccess("修改成功"),e.open=!1,e.getList()})).catch((function(t){e.$modal.closeLoading(),e.$modal.msgError("修改失败，请联系管理员！！！")}));else{if(0==e.items.length)return e.$modal.msgError("请至少添加一条项目信息"),!1;if(e.items.some((function(e){return!e.tid})))return void e.$modal.msgError("所有项目设备不能为空");e.$modal.loading("添加中......."),e.form["items"]=e.items,Object(r["a"])(e.form).then((function(t){e.$modal.msgSuccess("添加成功"),e.open=!1,e.$modal.closeLoading(),setTimeout((function(){e.getList()}),1e3)})).catch((function(t){e.$modal.msgError("服务器发生错误请联系管理员!!"),e.$modal.closeLoading()}))}}))},handleDelete:function(e){var t=this,a=e.jhId||this.ids;this.$modal.confirm('删除框架计划将删除所有行项目，是否继续删除框架计划编号为"'+a+'"的数据项？').then((function(){return t.$modal.loading("删除中......."),Object(r["b"])(a).then((function(){t.getList(),t.$modal.closeLoading(),t.$modal.msgSuccess("删除成功")})).catch((function(e){t.$modal.closeLoading(),t.$modal.msgError("删除失败，请联系管理员！！！")}))}))},insertItems:function(){this.items.push({})}}},m=d,p=(a("847a"),a("96b8"),a("d060"),a("2877")),f=Object(p["a"])(m,l,i,!1,null,"6f1e09d1",null);t["default"]=f.exports}}]);