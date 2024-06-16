"use strict";(self["webpackChunkruoyi"]=self["webpackChunkruoyi"]||[]).push([[9541],{59541:function(t,a,e){e.r(a),e.d(a,{default:function(){return c}});var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticStyle:{padding:"30px","background-color":"#f3f3f3"}},[t._m(0),e("el-form",{ref:"vForm",staticStyle:{height:"680px"},attrs:{model:t.formData,"label-position":"left","label-width":"150px",size:"medium"}},[e("div",{staticClass:"static-content-item"},[e("el-divider",{attrs:{direction:"horizontal","content-position":"left"}})],1),e("div",{staticClass:"card-container"},[e("el-card",{staticStyle:{"{width":"100% !important}"},attrs:{shadow:"hover","body-style":{padding:"30px 20px 0px"}}},[e("div",{staticClass:"clear-fix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("基本信息")]),e("i",{staticClass:"float-right el-icon-arrow-down"})]),e("el-row",[e("el-col",{staticClass:"grid-cell",attrs:{span:12}},[e("el-form-item",{staticClass:"label-right-align",attrs:{label:"合同编号",prop:"eHcode"}},[e("el-input",{attrs:{type:"text",clearable:"",readonly:!0},model:{value:t.formData.eHcode,callback:function(a){t.$set(t.formData,"eHcode",a)},expression:"formData.eHcode"}})],1)],1),e("el-col",{staticClass:"grid-cell",attrs:{span:12}},[e("el-form-item",{staticClass:"label-right-align",attrs:{label:"合同名称",prop:"eHname"}},[e("el-input",{attrs:{type:"text",clearable:"",readonly:!0},model:{value:t.formData.eHname,callback:function(a){t.$set(t.formData,"eHname",a)},expression:"formData.eHname"}})],1)],1)],1),e("el-row",[e("el-col",{staticClass:"grid-cell",attrs:{span:12}},[e("el-form-item",{staticClass:"label-right-align",attrs:{label:"供应商名称",prop:"hName"}},[e("el-input",{attrs:{readonly:!0,type:"text",clearable:""},model:{value:t.formData.hName,callback:function(a){t.$set(t.formData,"hName",a)},expression:"formData.hName"}})],1)],1),e("el-col",{staticClass:"grid-cell",attrs:{span:12}},[e("el-form-item",{staticClass:"label-right-align",attrs:{label:"风险项",prop:"rmItem"}},[e("el-select",{staticClass:"readonly-select",attrs:{placeholder:"请选择风险项",disabled:""},model:{value:t.formData.rmItem,callback:function(a){t.$set(t.formData,"rmItem",a)},expression:"formData.rmItem"}},t._l(t.rm_items,(function(t){return e("el-option",{key:t.dictValue,attrs:{label:t.dictLabel,value:Number(t.dictValue)}})})),1)],1)],1)],1),e("el-row",[e("el-col",{staticClass:"grid-cell",attrs:{span:12}},[e("el-form-item",{staticClass:"label-right-align",attrs:{label:"发生日期",prop:"rmHappenDate"}},[e("el-date-picker",{attrs:{clearable:"",type:"date","value-format":"yyyy-MM-dd",placeholder:"请选择发生日期",readonly:!0},model:{value:t.formData.rmHappenDate,callback:function(a){t.$set(t.formData,"rmHappenDate",a)},expression:"formData.rmHappenDate"}})],1)],1),e("el-col",{staticClass:"grid-cell",attrs:{span:12}},[e("el-form-item",{staticClass:"label-right-align",attrs:{label:"风险说明",prop:"rmIllustrate"}},[e("el-input",{attrs:{type:"textarea",placeholder:"请输入风险说明",readonly:!0},model:{value:t.formData.rmIllustrate,callback:function(a){t.$set(t.formData,"rmIllustrate",a)},expression:"formData.rmIllustrate"}})],1)],1)],1)],1)],1),e("div",{staticClass:"static-content-item"},[e("el-alert",{attrs:{title:"",type:"info",closable:!1,center:!1,"show-icon":!1,effect:"light"}})],1),e("div",{staticClass:"card-container"},[e("el-card",{staticStyle:{"{width":"100% !important}"},attrs:{"body-style":{padding:"30px 20px 10px"},shadow:"hover"}},[e("div",{staticClass:"clear-fix",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("风险处理信息")]),e("i",{staticClass:"float-right el-icon-arrow-down"})]),e("el-row",[e("el-col",{staticClass:"grid-cell",attrs:{span:24}},[e("el-row",[e("el-col",{staticClass:"grid-cell",attrs:{span:12}},[e("el-form-item",{staticClass:"label-right-align",attrs:{label:"处理结果",prop:"call"}},[e("el-input",{staticStyle:{width:"200%"},attrs:{type:"textarea",rows:8,placeholder:"请输入处理结果",readonly:2==t.formData.rmStatus||3==t.formData.rmStatus},model:{value:t.formData.rmHandingResult,callback:function(a){t.$set(t.formData,"rmHandingResult",a)},expression:"formData.rmHandingResult"}})],1)],1)],1)],1)],1)],1)],1),e("div",{staticClass:"static-content-item"},[e("el-alert",{attrs:{title:"",type:"info",closable:!1,center:!0,"show-icon":!1,effect:"light"}})],1),e("div",{staticClass:"static-content-item"},[e("el-alert",{attrs:{title:"",type:"info",closable:!1,center:!1,"show-icon":!1,effect:"light"}})],1),e("el-row",{staticStyle:{"text-align":"center",width:"135%"}},[e("el-col",{staticClass:"grid-cell",attrs:{span:18}},[e("el-button",{directives:[{name:"show",rawName:"v-show",value:1==this.formData.rmStatus,expression:"this.formData.rmStatus == 1"}],attrs:{type:"success"},on:{click:t.submit}},[t._v("提交 ")]),e("el-button",{directives:[{name:"show",rawName:"v-show",value:1==this.formData.rmStatus,expression:"this.formData.rmStatus == 1"}],attrs:{type:"info"},on:{click:t.ignore}},[t._v("忽略")]),e("el-button",{on:{click:t.fh}},[t._v("返回")])],1)],1)],1)],1)])},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"top"},[e("h1",[t._v("合同风险处理")])])}],s=e(61015),i={data(){return{formattedDate:null,rm_items:[],formData:{rm_id:this.$route.query.rm_id,eHcode:null,eHname:null,hName:null,rmItem:null,rmStatus:null,rmIllustrate:null,rmHappenDate:null,rmHandingPerson:"admin",rmHandingResult:null}}},components:{},created(){this.getInfo(),this.getDicts("bs_risk_monitoring_item").then((t=>{this.rm_items=t.data}))},methods:{getInfo(){(0,s.xT)(this.formData.rm_id).then((t=>{console.log(t),this.formData.eHcode=t.data.bsContract.eHcode,this.formData.eHname=t.data.bsContract.eHname,this.formData.hName=t.data.bsSupplier.hName,this.formData.rmItem=t.data.rmItem,this.formData.rmIllustrate=t.data.rmIllustrate,this.formData.rmHappenDate=t.data.rmHappenDate,this.formData.rmStatus=t.data.rmStatus,this.formData.rmHandingResult=t.data.rmHandingResult}))},fh(){this.$router.back()},getNow(){const t=new Date,a=t.getFullYear(),e=String(t.getMonth()+1).padStart(2,"0"),r=String(t.getDate()).padStart(2,"0");this.formattedDate=`${a}-${e}-${r}`},ignore(){this.formData.rmStatus=3,this.getNow(),(0,s.sk)({rmId:this.formData.rm_id,rmStatus:this.formData.rmStatus,rmHandingPerson:this.formData.rmHandingPerson,rmHandingDate:this.formattedDate}).then((t=>{console.log(t),this.$modal.msgSuccess("忽略成功")}))},submit(){this.formData.rmStatus=2,this.getNow(),(0,s.sk)({rmId:this.formData.rm_id,rmStatus:this.formData.rmStatus,rmHandingPerson:this.formData.rmHandingPerson,rmHandingDate:this.formattedDate,rmHandingResult:this.formData.rmHandingResult}).then((t=>{console.log(t),this.$modal.msgSuccess("提交成功")}))}}},o=i,n=e(81656),m=(0,n.A)(o,r,l,!1,null,"098436fc",null),c=m.exports},61015:function(t,a,e){e.d(a,{Bw:function(){return l},sk:function(){return o},xT:function(){return s},yr:function(){return i}});var r=e(35720);function l(t){return(0,r.Ay)({url:"/basic/monitor/list",method:"get",params:t})}function s(t){return(0,r.Ay)({url:"/basic/monitor/"+t,method:"get"})}function i(t){return(0,r.Ay)({url:"/basic/monitor",method:"post",data:t})}function o(t){return(0,r.Ay)({url:"/basic/monitor",method:"put",data:t})}}}]);