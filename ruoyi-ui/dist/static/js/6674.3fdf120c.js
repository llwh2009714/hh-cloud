"use strict";(self["webpackChunkruoyi"]=self["webpackChunkruoyi"]||[]).push([[6674],{26674:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("h4",{staticClass:"form-header h4"},[e._v("基本信息")]),r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[r("el-row",[r("el-col",{attrs:{span:8,offset:2}},[r("el-form-item",{attrs:{label:"用户昵称",prop:"nickName"}},[r("el-input",{attrs:{disabled:""},model:{value:e.form.nickName,callback:function(t){e.$set(e.form,"nickName",t)},expression:"form.nickName"}})],1)],1),r("el-col",{attrs:{span:8,offset:2}},[r("el-form-item",{attrs:{label:"登录账号",prop:"userName"}},[r("el-input",{attrs:{disabled:""},model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}})],1)],1)],1)],1),r("h4",{staticClass:"form-header h4"},[e._v("角色信息")]),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"table",attrs:{"row-key":e.getRowKey,data:e.roles.slice((e.pageNum-1)*e.pageSize,e.pageNum*e.pageSize)},on:{"row-click":e.clickRow,"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{label:"序号",type:"index",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s((e.pageNum-1)*e.pageSize+t.$index+1))])]}}])}),r("el-table-column",{attrs:{type:"selection","reserve-selection":!0,width:"55"}}),r("el-table-column",{attrs:{label:"角色编号",align:"center",prop:"roleId"}}),r("el-table-column",{attrs:{label:"角色名称",align:"center",prop:"roleName"}}),r("el-table-column",{attrs:{label:"权限字符",align:"center",prop:"roleKey"}}),r("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])})],1),r("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.pageNum,limit:e.pageSize},on:{"update:page":function(t){e.pageNum=t},"update:limit":function(t){e.pageSize=t}}}),r("el-form",{attrs:{"label-width":"100px"}},[r("el-form-item",{staticStyle:{"text-align":"center","margin-left":"-120px","margin-top":"30px"}},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v("提交")]),r("el-button",{on:{click:function(t){return e.close()}}},[e._v("返回")])],1)],1)],1)},o=[],s=r(75385),a={name:"AuthRole",data(){return{loading:!0,total:0,pageNum:1,pageSize:10,roleIds:[],roles:[],form:{}}},created(){const e=this.$route.params&&this.$route.params.userId;e&&(this.loading=!0,(0,s.rr)(e).then((e=>{this.form=e.user,this.roles=e.roles,this.total=this.roles.length,this.$nextTick((()=>{this.roles.forEach((e=>{e.flag&&this.$refs.table.toggleRowSelection(e)}))})),this.loading=!1})))},methods:{clickRow(e){this.$refs.table.toggleRowSelection(e)},handleSelectionChange(e){this.roleIds=e.map((e=>e.roleId))},getRowKey(e){return e.roleId},submitForm(){const e=this.form.userId,t=this.roleIds.join(",");(0,s.C$)({userId:e,roleIds:t}).then((e=>{this.$modal.msgSuccess("授权成功"),this.close()}))},close(){const e={path:"/system/user"};this.$tab.closeOpenPage(e)}}},l=a,u=r(81656),i=(0,u.A)(l,n,o,!1,null,null,null),c=i.exports},75385:function(e,t,r){r.d(t,{C$:function(){return y},CZ:function(){return c},F4:function(){return h},IK:function(){return s},TK:function(){return u},VM:function(){return d},bz:function(){return i},cO:function(){return p},e8:function(){return m},ed:function(){return b},eg:function(){return f},nu:function(){return l},rr:function(){return g},wz:function(){return a}});var n=r(35720),o=r(78957);function s(e){return(0,n.Ay)({url:"/system/user/list",method:"get",params:e})}function a(e){return(0,n.Ay)({url:"/system/user/"+(0,o.AL)(e),method:"get"})}function l(e){return(0,n.Ay)({url:"/system/user",method:"post",data:e})}function u(e){return(0,n.Ay)({url:"/system/user",method:"put",data:e})}function i(e){return(0,n.Ay)({url:"/system/user/"+e,method:"delete"})}function c(e,t){const r={userId:e,password:t};return(0,n.Ay)({url:"/system/user/resetPwd",method:"put",data:r})}function m(e,t){const r={userId:e,status:t};return(0,n.Ay)({url:"/system/user/changeStatus",method:"put",data:r})}function d(){return(0,n.Ay)({url:"/system/user/profile",method:"get"})}function f(e){return(0,n.Ay)({url:"/system/user/profile",method:"put",data:e})}function p(e,t){const r={oldPassword:e,newPassword:t};return(0,n.Ay)({url:"/system/user/profile/updatePwd",method:"put",params:r})}function h(e){return(0,n.Ay)({url:"/system/user/profile/avatar",method:"post",data:e})}function g(e){return(0,n.Ay)({url:"/system/user/authRole/"+e,method:"get"})}function y(e){return(0,n.Ay)({url:"/system/user/authRole",method:"put",params:e})}function b(){return(0,n.Ay)({url:"/system/user/deptTree",method:"get"})}}}]);