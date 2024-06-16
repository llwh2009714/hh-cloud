"use strict";(self["webpackChunkruoyi"]=self["webpackChunkruoyi"]||[]).push([[5092,905],{89596:function(e,s,r){r.r(s),r.d(s,{default:function(){return p}});var t=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"app-container"},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6,xs:24}},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("个人信息")])]),r("div",[r("div",{staticClass:"text-center"},[r("userAvatar")],1),r("ul",{staticClass:"list-group list-group-striped"},[r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"user"}}),e._v("用户名称 "),r("div",{staticClass:"pull-right"},[e._v(e._s(e.user.userName))])],1),r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"phone"}}),e._v("手机号码 "),r("div",{staticClass:"pull-right"},[e._v(e._s(e.user.phonenumber))])],1),r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"email"}}),e._v("用户邮箱 "),r("div",{staticClass:"pull-right"},[e._v(e._s(e.user.email))])],1),r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"tree"}}),e._v("所属部门 "),e.user.dept?r("div",{staticClass:"pull-right"},[e._v(e._s(e.user.dept.deptName)+" / "+e._s(e.postGroup))]):e._e()],1),r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"peoples"}}),e._v("所属角色 "),r("div",{staticClass:"pull-right"},[e._v(e._s(e.roleGroup))])],1),r("li",{staticClass:"list-group-item"},[r("svg-icon",{attrs:{"icon-class":"date"}}),e._v("创建日期 "),r("div",{staticClass:"pull-right"},[e._v(e._s(e.user.createTime))])],1)])])])],1),r("el-col",{attrs:{span:18,xs:24}},[r("el-card",[r("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[r("span",[e._v("基本资料")])]),r("el-tabs",{model:{value:e.activeTab,callback:function(s){e.activeTab=s},expression:"activeTab"}},[r("el-tab-pane",{attrs:{label:"基本资料",name:"userinfo"}},[r("userInfo",{attrs:{user:e.user}})],1),r("el-tab-pane",{attrs:{label:"修改密码",name:"resetPwd"}},[r("resetPwd")],1)],1)],1)],1)],1)],1)},a=[],l=r(70593),i=r(34618),o=r(62074),n=r(75385),u={name:"Profile",components:{userAvatar:l["default"],userInfo:i["default"],resetPwd:o["default"]},data:function(){return{user:{},roleGroup:{},postGroup:{},activeTab:"userinfo"}},created:function(){this.getUser()},methods:{getUser:function(){var e=this;(0,n.VM)().then((function(s){e.user=s.data,e.roleGroup=s.roleGroup,e.postGroup=s.postGroup}))}}},c=u,d=r(81656),m=(0,d.A)(c,t,a,!1,null,null,null),p=m.exports},62074:function(e,s,r){r.r(s),r.d(s,{default:function(){return c}});var t=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("el-form",{ref:"form",attrs:{model:e.user,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"旧密码",prop:"oldPassword"}},[r("el-input",{attrs:{placeholder:"请输入旧密码",type:"password","show-password":""},model:{value:e.user.oldPassword,callback:function(s){e.$set(e.user,"oldPassword",s)},expression:"user.oldPassword"}})],1),r("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[r("el-input",{attrs:{placeholder:"请输入新密码",type:"password","show-password":""},model:{value:e.user.newPassword,callback:function(s){e.$set(e.user,"newPassword",s)},expression:"user.newPassword"}})],1),r("el-form-item",{attrs:{label:"确认密码",prop:"confirmPassword"}},[r("el-input",{attrs:{placeholder:"请确认新密码",type:"password","show-password":""},model:{value:e.user.confirmPassword,callback:function(s){e.$set(e.user,"confirmPassword",s)},expression:"user.confirmPassword"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.submit}},[e._v("保存")]),r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:e.close}},[e._v("关闭")])],1)],1)},a=[],l=(r(83515),r(75385)),i={data:function(){var e=this,s=function(s,r,t){e.user.newPassword!==r?t(new Error("两次输入的密码不一致")):t()};return{user:{oldPassword:void 0,newPassword:void 0,confirmPassword:void 0},rules:{oldPassword:[{required:!0,message:"旧密码不能为空",trigger:"blur"}],newPassword:[{required:!0,message:"新密码不能为空",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}],confirmPassword:[{required:!0,message:"确认密码不能为空",trigger:"blur"},{required:!0,validator:s,trigger:"blur"}]}}},methods:{submit:function(){var e=this;this.$refs["form"].validate((function(s){s&&(0,l.cO)(e.user.oldPassword,e.user.newPassword).then((function(s){e.$modal.msgSuccess("修改成功")}))}))},close:function(){this.$tab.closePage()}}},o=i,n=r(81656),u=(0,n.A)(o,t,a,!1,null,null,null),c=u.exports},34618:function(e,s,r){r.r(s),r.d(s,{default:function(){return c}});var t=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("el-form",{ref:"form",attrs:{model:e.user,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"用户昵称",prop:"nickName"}},[r("el-input",{attrs:{maxlength:"30"},model:{value:e.user.nickName,callback:function(s){e.$set(e.user,"nickName",s)},expression:"user.nickName"}})],1),r("el-form-item",{attrs:{label:"手机号码",prop:"phonenumber"}},[r("el-input",{attrs:{maxlength:"11"},model:{value:e.user.phonenumber,callback:function(s){e.$set(e.user,"phonenumber",s)},expression:"user.phonenumber"}})],1),r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{attrs:{maxlength:"50"},model:{value:e.user.email,callback:function(s){e.$set(e.user,"email",s)},expression:"user.email"}})],1),r("el-form-item",{attrs:{label:"性别"}},[r("el-radio-group",{model:{value:e.user.sex,callback:function(s){e.$set(e.user,"sex",s)},expression:"user.sex"}},[r("el-radio",{attrs:{label:"0"}},[e._v("男")]),r("el-radio",{attrs:{label:"1"}},[e._v("女")])],1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.submit}},[e._v("保存")]),r("el-button",{attrs:{type:"danger",size:"mini"},on:{click:e.close}},[e._v("关闭")])],1)],1)},a=[],l=r(75385),i={props:{user:{type:Object}},data:function(){return{rules:{nickName:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}],email:[{required:!0,message:"邮箱地址不能为空",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],phonenumber:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}}},methods:{submit:function(){var e=this;this.$refs["form"].validate((function(s){s&&(0,l.eg)(e.user).then((function(s){e.$modal.msgSuccess("修改成功")}))}))},close:function(){this.$tab.closePage()}}},o=i,n=r(81656),u=(0,n.A)(o,t,a,!1,null,null,null),c=u.exports}}]);