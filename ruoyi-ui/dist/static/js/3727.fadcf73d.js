(self["webpackChunkruoyi"]=self["webpackChunkruoyi"]||[]).push([[3727],{52554:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return f}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"tcl"},[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"合格供应商",name:"first"}},[a("el-form",{ref:"elForm1",attrs:{model:e.formData,rules:e.rules,size:"medium","label-width":"100px"}},[a("el-row",{attrs:{type:"flex",justify:"start",align:"middle",gutter:15}},[a("el-form-item",{attrs:{label:"供应商名称",prop:"field101"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请输入供应商名称",clearable:""},model:{value:e.formData.field101,callback:function(t){e.$set(e.formData,"field101",t)},expression:"formData.field101"}})],1),a("el-form-item",{attrs:{label:"机构类型",prop:"field102"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请输入机构类型",clearable:""},model:{value:e.formData.field102,callback:function(t){e.$set(e.formData,"field102",t)},expression:"formData.field102"}})],1),a("el-form-item",{attrs:{size:"medium"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.query1}},[e._v("查询")]),a("el-button",{on:{click:e.resetForm1}},[e._v("重置")])],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{stripe:"",data:e.supplierList}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center",width:"80"}}),a("el-table-column",{attrs:{label:"供应商名称",align:"center",prop:"hName"}}),a("el-table-column",{attrs:{label:"企业性质",align:"center",prop:"hQuality"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.hQuality?t.row.hQuality:"---")+" ")]}}])}),a("el-table-column",{attrs:{label:"机构类型",align:"center",prop:"hInstitution"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.hInstitution?a("el-tag",{attrs:{size:"small","disable-transitions":""}},[e._v(e._s(t.row.hInstitution)+" ")]):a("span",[e._v("---")])]}}])}),a("el-table-column",{attrs:{label:"统一社会信用代码",align:"center",prop:"hCreditCode"}}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{attrs:{to:"detail?hid="+t.row.hid+"&zr_id=0"}},[a("el-button",{directives:[{name:"hasRole",rawName:"v-hasRole",value:["common","controller"],expression:"['common','controller']"}],attrs:{size:"small",type:"primary"}},[e._v("查看 ")])],1)]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1),a("el-tab-pane",{attrs:{label:"不合格供应商",name:"second"}},[a("el-form",{ref:"elForm",attrs:{model:e.formData,rules:e.rules,size:"medium","label-width":"100px"}},[a("el-row",{attrs:{type:"flex",justify:"start",align:"middle",gutter:15}},[a("el-form-item",{attrs:{label:"供应商名称",prop:"field103"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请输入供应商名称",clearable:""},model:{value:e.formData.field103,callback:function(t){e.$set(e.formData,"field103",t)},expression:"formData.field103"}})],1),a("el-form-item",{attrs:{label:"机构类型",prop:"field104"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请输入机构类型",clearable:""},model:{value:e.formData.field104,callback:function(t){e.$set(e.formData,"field104",t)},expression:"formData.field104"}})],1),a("el-form-item",{attrs:{size:"medium"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.query2}},[e._v("查询")]),a("el-button",{on:{click:e.resetForm2}},[e._v("重置")])],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{stripe:"",data:e.noSupplierList}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center",width:"80"}}),a("el-table-column",{attrs:{label:"供应商名称",align:"center",prop:"hName"}}),a("el-table-column",{attrs:{label:"企业性质",align:"center",prop:"hQuality"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.hQuality?t.row.hQuality:"---")+" ")]}}])}),a("el-table-column",{attrs:{label:"机构类型",align:"center",prop:"hInstitution"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.hInstitution?a("el-tag",{attrs:{size:"small","disable-transitions":""}},[e._v(e._s(t.row.hInstitution)+" ")]):a("span",[e._v("---")])]}}])}),a("el-table-column",{attrs:{label:"统一社会信用代码",align:"center",prop:"hCreditCode"}}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{attrs:{to:"detail?hid="+t.row.hid+"&zr_id=0"}},[a("el-button",{directives:[{name:"hasRole",rawName:"v-hasRole",value:["common","controller"],expression:"['common','controller']"}],attrs:{size:"small",type:"primary"}},[e._v("查看 ")])],1)]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total1>0,expression:"total1>0"}],attrs:{total:e.total1,page:e.queryParams1.pageNum,limit:e.queryParams1.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams1,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams1,"pageSize",t)},pagination:e.getList1}})],1),a("el-tab-pane",{attrs:{label:"供应商不良记录",name:"third"}},[a("el-form",{ref:"elForm",attrs:{model:e.formData,rules:e.rules,size:"medium","label-width":"100px"}},[a("el-row",{attrs:{type:"flex",justify:"start",align:"middle",gutter:15}},[a("el-form-item",{attrs:{label:"供应商名称",prop:"field105"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请输入供应商名称",clearable:""},model:{value:e.formData.field105,callback:function(t){e.$set(e.formData,"field105",t)},expression:"formData.field105"}})],1),a("el-form-item",{attrs:{label:"机构类型",prop:"field106"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请输入机构类型",clearable:""},model:{value:e.formData.field106,callback:function(t){e.$set(e.formData,"field106",t)},expression:"formData.field106"}})],1),a("el-form-item",{attrs:{size:"medium"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.query3}},[e._v("查询")]),a("el-button",{on:{click:e.resetForm3}},[e._v("重置")])],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{stripe:"",data:e.supplierBadList}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center",width:"80"}}),a("el-table-column",{attrs:{label:"供应商名称",align:"center",prop:"hName"}}),a("el-table-column",{attrs:{label:"企业性质",align:"center",prop:"hQuality"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.hQuality?t.row.hQuality:"---")+" ")]}}])}),a("el-table-column",{attrs:{label:"机构类型",align:"center",prop:"hInstitution"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.hInstitution?a("el-tag",{attrs:{size:"small","disable-transitions":""}},[e._v(e._s(t.row.hInstitution)+" ")]):a("span",[e._v("---")])]}}])}),a("el-table-column",{attrs:{label:"状态",align:"center",prop:"fState"},scopedSlots:e._u([{key:"default",fn:function(t){return[2==e.supplierBadList[t.$index].fState?a("el-tag",{attrs:{size:"small",type:"danger"}},[e._v("不合格供应商 ")]):a("el-tag",{attrs:{size:"small",type:"info"}},[e._v("黑名单")])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{attrs:{to:"detail?hid="+t.row.hid+"&zr_id=0"}},[a("el-button",{directives:[{name:"hasRole",rawName:"v-hasRole",value:["common","controller"],expression:"['common','controller']"}],attrs:{size:"small",type:"primary"}},[e._v("查看 ")])],1)]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total2>0,expression:"total2>0"}],attrs:{total:e.total2,page:e.queryParams2.pageNum,limit:e.queryParams2.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams2,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams2,"pageSize",t)},pagination:e.getList2}})],1),a("el-tab-pane",{attrs:{label:"供应商准入",name:"fourth"}},[a("el-form",{ref:"elForm",attrs:{model:e.formData,rules:e.rules,size:"medium","label-width":"100px"}},[a("el-row",{attrs:{type:"flex",justify:"start",align:"top",gutter:15}},[a("el-form-item",{attrs:{label:"提交时间",prop:"field107"}},[a("el-date-picker",{style:{width:"100%"},attrs:{format:"yyyy-MM-dd","value-format":"yyyy-MM-dd",placeholder:"年/月/日",clearable:""},model:{value:e.formData.field107,callback:function(t){e.$set(e.formData,"field107",t)},expression:"formData.field107"}})],1),a("el-form-item",{attrs:{label:"发起人",prop:"field108"}},[a("el-input",{style:{width:"100%"},attrs:{placeholder:"请输入发起人",clearable:""},model:{value:e.formData.field108,callback:function(t){e.$set(e.formData,"field108",t)},expression:"formData.field108"}})],1),a("el-form-item",{attrs:{size:"medium"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.query4}},[e._v("查询")]),a("el-button",{on:{click:e.resetForm4}},[e._v("重置")])],1)],1)],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{stripe:"",data:e.supplierAccessList}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center"}}),a("el-table-column",{attrs:{label:"业务编号",align:"center",prop:"zrBnumber"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.zrBnumber)+" ")]}}])}),a("el-table-column",{attrs:{label:"供应商名称",align:"center",prop:"hName"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.bsSupplier.hName)+" "),2==t.row.bsSupplier.fStatus?a("el-tag",{staticStyle:{"margin-left":"20px"},attrs:{size:"small",type:"danger"}},[e._v(" 已驳回 ")]):e._e()]}}])}),a("el-table-column",{attrs:{label:"发起人",align:"center",prop:"zrPromoter"}}),a("el-table-column",{attrs:{label:"提交时间",align:"center",prop:"zrTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.zrTime,"{y}-{m}-{d} {h}:{i}:{s}")))])]}}])}),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("router-link",{attrs:{to:"process?zr_id="+t.row.zrId}},[0==t.row.bsSupplier.fStatus?a("el-button",{directives:[{name:"hasRole",rawName:"v-hasRole",value:["controller"],expression:"['controller']"}],attrs:{size:"small"}},[e._v("审核 ")]):e._e()],1),a("router-link",{attrs:{to:"detail?zr_id="+t.row.zrId+"&hid=0"}},[a("el-button",{directives:[{name:"hasRole",rawName:"v-hasRole",value:["common","controller"],expression:"['common','controller']"}],staticStyle:{"margin-left":"10px"},attrs:{size:"small",type:"primary"}},[e._v("查看 ")])],1)]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total3>0,expression:"total3>0"}],attrs:{total:e.total3,page:e.queryParams3.pageNum,limit:e.queryParams3.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams3,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams3,"pageSize",t)},pagination:e.getList3}})],1)],1)],1)])},r=[],l=a(18246),i=a(84996),o=a(78957),n=a(95093),m=a.n(n),u={components:{},name:"Supplier",data(){return{activeName:"first",loading:!0,ids:[],single:!0,multiple:!0,showSearch:!0,total:0,total1:0,total2:0,total3:0,supplierList:[],noSupplierList:[],supplierBadList:[],supplierAccessList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:10,hName:"",hInstitution:""},queryParams1:{pageNum:1,pageSize:10,hName:"",hInstitution:""},queryParams2:{pageNum:1,pageSize:10,hName:"",hInstitution:""},queryParams3:{pageNum:1,pageSize:10,zrPromoter:"",zrTime:""},form:{},formData:{field101:void 0,field102:null,field103:void 0,field104:null,field105:void 0,field106:null,field107:void 0,field108:null},rules:{field102:[],field103:[],field101:[],field104:[],field105:[],field106:[],field107:[],field108:[]}}},created(){null!=sessionStorage.getItem("tag_item")&&(this.activeName=sessionStorage.getItem("tag_item"),sessionStorage.removeItem("tag_item"),null!=sessionStorage.getItem("num")&&null!=sessionStorage.getItem("size")&&(this.queryParams.pageNum=JSON.parse(sessionStorage.getItem("num")),this.queryParams.pageSize=JSON.parse(sessionStorage.getItem("size")),sessionStorage.removeItem("num"),sessionStorage.removeItem("size")),null!=sessionStorage.getItem("num1")&&null!=sessionStorage.getItem("size1")&&(this.queryParams1.pageNum=JSON.parse(sessionStorage.getItem("num1")),this.queryParams1.pageSize=JSON.parse(sessionStorage.getItem("size1")),sessionStorage.removeItem("num1"),sessionStorage.removeItem("size1")),null!=sessionStorage.getItem("num2")&&null!=sessionStorage.getItem("size2")&&(this.queryParams2.pageNum=JSON.parse(sessionStorage.getItem("num2")),this.queryParams2.pageSize=JSON.parse(sessionStorage.getItem("size2")),sessionStorage.removeItem("num2"),sessionStorage.removeItem("size2")),null!=sessionStorage.getItem("num3")&&null!=sessionStorage.getItem("size3")&&(this.queryParams3.pageNum=JSON.parse(sessionStorage.getItem("num3")),this.queryParams3.pageSize=JSON.parse(sessionStorage.getItem("size3")),sessionStorage.removeItem("num3"),sessionStorage.removeItem("size3"))),this.getList(),this.getList1(),this.getList2(),this.getList3()},beforeRouteLeave(e,t,a){sessionStorage.setItem("tag_item",this.activeName),"first"==this.activeName?(sessionStorage.setItem("num",this.queryParams.pageNum),sessionStorage.setItem("size",this.queryParams.pageSize)):"second"==this.activeName?(sessionStorage.setItem("num1",this.queryParams1.pageNum),sessionStorage.setItem("size1",this.queryParams1.pageSize)):"third"==this.activeName?(sessionStorage.setItem("num2",this.queryParams2.pageNum),sessionStorage.setItem("size2",this.queryParams2.pageSize)):"fourth"==this.activeName&&(sessionStorage.setItem("num3",this.queryParams3.pageNum),sessionStorage.setItem("size3",this.queryParams3.pageSize)),a(!0)},methods:{parseTime:o.pe,dateFormat(e,t){let a=e[t.property];return void 0===a?"":m()(a).format("YYYY-MM-DD HH:mm:ss")},query1(){this.loading=!0,this.queryParams.hName=this.formData.field101,this.queryParams.hInstitution=this.formData.field102,this.queryParams.pageNum=1,(0,l.bP)(this.queryParams).then((e=>{this.supplierList=e.rows,this.total=e.total,this.loading=!1}))},query2(){this.loading=!0,this.queryParams1.hName=this.formData.field103,this.queryParams1.hInstitution=this.formData.field104,this.queryParams1.pageNum=1,(0,l.S)(this.queryParams1).then((e=>{this.noSupplierList=e.rows,this.total1=e.total,this.loading=!1}))},query3(){this.loading=!0,this.queryParams2.hName=this.formData.field105,this.queryParams2.hInstitution=this.formData.field106,this.queryParams2.pageNum=1,(0,l.Ld)(this.queryParams2).then((e=>{this.supplierBadList=e.rows,this.total2=e.total,this.loading=!1}))},query4(){this.loading=!0,""==this.formData.field107||void 0==this.formData.field107?this.queryParams3.zrTime=null:this.queryParams3.zrTime=this.formData.field107,this.queryParams3.zrPromoter=this.formData.field108,this.queryParams3.pageNum=1,(0,i.J$)(this.queryParams3).then((e=>{console.log(e),this.supplierAccessList=e.rows,this.total3=e.total,this.loading=!1}))},resetForm1(){this.formData.field101=void 0,this.formData.field102=null},resetForm2(){this.formData.field103=void 0,this.formData.field104=null},resetForm3(){this.formData.field105=void 0,this.formData.field106=null},resetForm4(){this.formData.field107=void 0,this.formData.field108=null},handleClick(e,t){console.log(e,t)},getList(){this.loading=!0,(0,l.bP)(this.queryParams).then((e=>{this.supplierList=e.rows,this.total=e.total,this.loading=!1}))},getList1(){this.loading=!0,(0,l.S)(this.queryParams1).then((e=>{this.noSupplierList=e.rows,this.total1=e.total,this.loading=!1}))},getList2(){this.loading=!0,(0,l.Ld)(this.queryParams2).then((e=>{this.supplierBadList=e.rows,this.total2=e.total,this.loading=!1}))},getList3(){this.loading=!0,(0,i.J$)(this.queryParams3).then((e=>{this.supplierAccessList=e.rows,this.total3=e.total,this.loading=!1}))}}},d=u,p=a(81656),c=(0,p.A)(d,s,r,!1,null,null,null),f=c.exports},35358:function(e,t,a){var s={"./af":25177,"./af.js":25177,"./ar":61509,"./ar-dz":41488,"./ar-dz.js":41488,"./ar-kw":58676,"./ar-kw.js":58676,"./ar-ly":42353,"./ar-ly.js":42353,"./ar-ma":24496,"./ar-ma.js":24496,"./ar-ps":6947,"./ar-ps.js":6947,"./ar-sa":82682,"./ar-sa.js":82682,"./ar-tn":89756,"./ar-tn.js":89756,"./ar.js":61509,"./az":95533,"./az.js":95533,"./be":28959,"./be.js":28959,"./bg":47777,"./bg.js":47777,"./bm":54903,"./bm.js":54903,"./bn":61290,"./bn-bd":17357,"./bn-bd.js":17357,"./bn.js":61290,"./bo":31545,"./bo.js":31545,"./br":11470,"./br.js":11470,"./bs":44429,"./bs.js":44429,"./ca":7306,"./ca.js":7306,"./cs":56464,"./cs.js":56464,"./cv":73635,"./cv.js":73635,"./cy":64226,"./cy.js":64226,"./da":93601,"./da.js":93601,"./de":77853,"./de-at":26111,"./de-at.js":26111,"./de-ch":54697,"./de-ch.js":54697,"./de.js":77853,"./dv":60708,"./dv.js":60708,"./el":54691,"./el.js":54691,"./en-au":53872,"./en-au.js":53872,"./en-ca":28298,"./en-ca.js":28298,"./en-gb":56195,"./en-gb.js":56195,"./en-ie":66584,"./en-ie.js":66584,"./en-il":65543,"./en-il.js":65543,"./en-in":9033,"./en-in.js":9033,"./en-nz":79402,"./en-nz.js":79402,"./en-sg":43004,"./en-sg.js":43004,"./eo":32934,"./eo.js":32934,"./es":97650,"./es-do":20838,"./es-do.js":20838,"./es-mx":17730,"./es-mx.js":17730,"./es-us":56575,"./es-us.js":56575,"./es.js":97650,"./et":3035,"./et.js":3035,"./eu":3508,"./eu.js":3508,"./fa":119,"./fa.js":119,"./fi":90527,"./fi.js":90527,"./fil":95995,"./fil.js":95995,"./fo":52477,"./fo.js":52477,"./fr":85498,"./fr-ca":26435,"./fr-ca.js":26435,"./fr-ch":37892,"./fr-ch.js":37892,"./fr.js":85498,"./fy":37071,"./fy.js":37071,"./ga":41734,"./ga.js":41734,"./gd":70217,"./gd.js":70217,"./gl":77329,"./gl.js":77329,"./gom-deva":32124,"./gom-deva.js":32124,"./gom-latn":93383,"./gom-latn.js":93383,"./gu":95050,"./gu.js":95050,"./he":11713,"./he.js":11713,"./hi":43861,"./hi.js":43861,"./hr":26308,"./hr.js":26308,"./hu":90609,"./hu.js":90609,"./hy-am":17160,"./hy-am.js":17160,"./id":74063,"./id.js":74063,"./is":89374,"./is.js":89374,"./it":88383,"./it-ch":21827,"./it-ch.js":21827,"./it.js":88383,"./ja":23827,"./ja.js":23827,"./jv":89722,"./jv.js":89722,"./ka":41794,"./ka.js":41794,"./kk":27088,"./kk.js":27088,"./km":96870,"./km.js":96870,"./kn":84451,"./kn.js":84451,"./ko":63164,"./ko.js":63164,"./ku":98174,"./ku-kmr":6181,"./ku-kmr.js":6181,"./ku.js":98174,"./ky":78474,"./ky.js":78474,"./lb":79680,"./lb.js":79680,"./lo":15867,"./lo.js":15867,"./lt":45766,"./lt.js":45766,"./lv":69532,"./lv.js":69532,"./me":58076,"./me.js":58076,"./mi":41848,"./mi.js":41848,"./mk":30306,"./mk.js":30306,"./ml":73739,"./ml.js":73739,"./mn":99053,"./mn.js":99053,"./mr":86169,"./mr.js":86169,"./ms":73386,"./ms-my":92297,"./ms-my.js":92297,"./ms.js":73386,"./mt":77075,"./mt.js":77075,"./my":72264,"./my.js":72264,"./nb":22274,"./nb.js":22274,"./ne":8235,"./ne.js":8235,"./nl":92572,"./nl-be":43784,"./nl-be.js":43784,"./nl.js":92572,"./nn":54566,"./nn.js":54566,"./oc-lnc":69330,"./oc-lnc.js":69330,"./pa-in":29849,"./pa-in.js":29849,"./pl":94418,"./pl.js":94418,"./pt":79834,"./pt-br":48303,"./pt-br.js":48303,"./pt.js":79834,"./ro":24457,"./ro.js":24457,"./ru":82271,"./ru.js":82271,"./sd":1221,"./sd.js":1221,"./se":33478,"./se.js":33478,"./si":17538,"./si.js":17538,"./sk":5784,"./sk.js":5784,"./sl":46637,"./sl.js":46637,"./sq":86794,"./sq.js":86794,"./sr":45719,"./sr-cyrl":3322,"./sr-cyrl.js":3322,"./sr.js":45719,"./ss":56e3,"./ss.js":56e3,"./sv":41011,"./sv.js":41011,"./sw":40748,"./sw.js":40748,"./ta":11025,"./ta.js":11025,"./te":11885,"./te.js":11885,"./tet":28861,"./tet.js":28861,"./tg":86571,"./tg.js":86571,"./th":55802,"./th.js":55802,"./tk":59527,"./tk.js":59527,"./tl-ph":29231,"./tl-ph.js":29231,"./tlh":8671,"./tlh.js":8671,"./tr":85096,"./tr.js":85096,"./tzl":79846,"./tzl.js":79846,"./tzm":81765,"./tzm-latn":97711,"./tzm-latn.js":97711,"./tzm.js":81765,"./ug-cn":48414,"./ug-cn.js":48414,"./uk":16618,"./uk.js":16618,"./ur":57777,"./ur.js":57777,"./uz":57609,"./uz-latn":72475,"./uz-latn.js":72475,"./uz.js":57609,"./vi":21135,"./vi.js":21135,"./x-pseudo":64051,"./x-pseudo.js":64051,"./yo":82218,"./yo.js":82218,"./zh-cn":52648,"./zh-cn.js":52648,"./zh-hk":1632,"./zh-hk.js":1632,"./zh-mo":31541,"./zh-mo.js":31541,"./zh-tw":50304,"./zh-tw.js":50304};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=l,e.exports=r,r.id=35358},84996:function(e,t,a){"use strict";a.d(t,{J$:function(){return r},oz:function(){return l}});var s=a(35720);function r(e){return(0,s.Ay)({url:"/basic/access/list",method:"get",params:e})}function l(e){return(0,s.Ay)({url:"/basic/access/"+e,method:"delete"})}}}]);