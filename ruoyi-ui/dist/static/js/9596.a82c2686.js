"use strict";(self["webpackChunkruoyi"]=self["webpackChunkruoyi"]||[]).push([[9596,2074,593,4618],{89596:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-container"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:6,xs:24}},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[e._v("个人信息")])]),s("div",[s("div",{staticClass:"text-center"},[s("userAvatar")],1),s("ul",{staticClass:"list-group list-group-striped"},[s("li",{staticClass:"list-group-item"},[s("svg-icon",{attrs:{"icon-class":"user"}}),e._v("用户名称 "),s("div",{staticClass:"pull-right"},[e._v(e._s(e.user.userName))])],1),s("li",{staticClass:"list-group-item"},[s("svg-icon",{attrs:{"icon-class":"phone"}}),e._v("手机号码 "),s("div",{staticClass:"pull-right"},[e._v(e._s(e.user.phonenumber))])],1),s("li",{staticClass:"list-group-item"},[s("svg-icon",{attrs:{"icon-class":"email"}}),e._v("用户邮箱 "),s("div",{staticClass:"pull-right"},[e._v(e._s(e.user.email))])],1),s("li",{staticClass:"list-group-item"},[s("svg-icon",{attrs:{"icon-class":"tree"}}),e._v("所属部门 "),e.user.dept?s("div",{staticClass:"pull-right"},[e._v(e._s(e.user.dept.deptName)+" / "+e._s(e.postGroup))]):e._e()],1),s("li",{staticClass:"list-group-item"},[s("svg-icon",{attrs:{"icon-class":"peoples"}}),e._v("所属角色 "),s("div",{staticClass:"pull-right"},[e._v(e._s(e.roleGroup))])],1),s("li",{staticClass:"list-group-item"},[s("svg-icon",{attrs:{"icon-class":"date"}}),e._v("创建日期 "),s("div",{staticClass:"pull-right"},[e._v(e._s(e.user.createTime))])],1)])])])],1),s("el-col",{attrs:{span:18,xs:24}},[s("el-card",[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[e._v("基本资料")])]),s("el-tabs",{model:{value:e.activeTab,callback:function(t){e.activeTab=t},expression:"activeTab"}},[s("el-tab-pane",{attrs:{label:"基本资料",name:"userinfo"}},[s("userInfo",{attrs:{user:e.user}})],1),s("el-tab-pane",{attrs:{label:"修改密码",name:"resetPwd"}},[s("resetPwd")],1)],1)],1)],1)],1)],1)},n=[],i=s(70593),o=s(34618),a=s(62074),l=s(75385),u={name:"Profile",components:{userAvatar:i["default"],userInfo:o["default"],resetPwd:a["default"]},data(){return{user:{},roleGroup:{},postGroup:{},activeTab:"userinfo"}},created(){this.getUser()},methods:{getUser(){(0,l.VM)().then((e=>{this.user=e.data,this.roleGroup=e.roleGroup,this.postGroup=e.postGroup}))}}},c=u,p=s(81656),d=(0,p.A)(c,r,n,!1,null,null,null),m=d.exports},62074:function(e,t,s){s.r(t),s.d(t,{default:function(){return c}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-form",{ref:"form",attrs:{model:e.user,rules:e.rules,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"旧密码",prop:"oldPassword"}},[s("el-input",{attrs:{placeholder:"请输入旧密码",type:"password","show-password":""},model:{value:e.user.oldPassword,callback:function(t){e.$set(e.user,"oldPassword",t)},expression:"user.oldPassword"}})],1),s("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[s("el-input",{attrs:{placeholder:"请输入新密码",type:"password","show-password":""},model:{value:e.user.newPassword,callback:function(t){e.$set(e.user,"newPassword",t)},expression:"user.newPassword"}})],1),s("el-form-item",{attrs:{label:"确认密码",prop:"confirmPassword"}},[s("el-input",{attrs:{placeholder:"请确认新密码",type:"password","show-password":""},model:{value:e.user.confirmPassword,callback:function(t){e.$set(e.user,"confirmPassword",t)},expression:"user.confirmPassword"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.submit}},[e._v("保存")]),s("el-button",{attrs:{type:"danger",size:"mini"},on:{click:e.close}},[e._v("关闭")])],1)],1)},n=[],i=s(75385),o={data(){const e=(e,t,s)=>{this.user.newPassword!==t?s(new Error("两次输入的密码不一致")):s()};return{user:{oldPassword:void 0,newPassword:void 0,confirmPassword:void 0},rules:{oldPassword:[{required:!0,message:"旧密码不能为空",trigger:"blur"}],newPassword:[{required:!0,message:"新密码不能为空",trigger:"blur"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}],confirmPassword:[{required:!0,message:"确认密码不能为空",trigger:"blur"},{required:!0,validator:e,trigger:"blur"}]}}},methods:{submit(){this.$refs["form"].validate((e=>{e&&(0,i.cO)(this.user.oldPassword,this.user.newPassword).then((e=>{this.$modal.msgSuccess("修改成功")}))}))},close(){this.$tab.closePage()}}},a=o,l=s(81656),u=(0,l.A)(a,r,n,!1,null,null,null),c=u.exports},70593:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"user-info-head",on:{click:function(t){return e.editCropper()}}},[s("img",{staticClass:"img-circle img-lg",attrs:{src:e.options.img,title:"点击上传头像"}})]),s("el-dialog",{attrs:{title:e.title,visible:e.open,width:"800px","append-to-body":""},on:{"update:visible":function(t){e.open=t},opened:e.modalOpened,close:e.closeDialog}},[s("el-row",[s("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[e.visible?s("vue-cropper",{ref:"cropper",attrs:{img:e.options.img,info:!0,autoCrop:e.options.autoCrop,autoCropWidth:e.options.autoCropWidth,autoCropHeight:e.options.autoCropHeight,fixedBox:e.options.fixedBox,outputType:e.options.outputType},on:{realTime:e.realTime}}):e._e()],1),s("el-col",{style:{height:"350px"},attrs:{xs:24,md:12}},[s("div",{staticClass:"avatar-upload-preview"},[s("img",{style:e.previews.img,attrs:{src:e.previews.url}})])])],1),s("br"),s("el-row",[s("el-col",{attrs:{lg:2,sm:3,xs:3}},[s("el-upload",{attrs:{action:"#","http-request":e.requestUpload,"show-file-list":!1,"before-upload":e.beforeUpload}},[s("el-button",{attrs:{size:"small"}},[e._v(" 选择 "),s("i",{staticClass:"el-icon-upload el-icon--right"})])],1)],1),s("el-col",{attrs:{lg:{span:1,offset:2},sm:2,xs:2}},[s("el-button",{attrs:{icon:"el-icon-plus",size:"small"},on:{click:function(t){return e.changeScale(1)}}})],1),s("el-col",{attrs:{lg:{span:1,offset:1},sm:2,xs:2}},[s("el-button",{attrs:{icon:"el-icon-minus",size:"small"},on:{click:function(t){return e.changeScale(-1)}}})],1),s("el-col",{attrs:{lg:{span:1,offset:1},sm:2,xs:2}},[s("el-button",{attrs:{icon:"el-icon-refresh-left",size:"small"},on:{click:function(t){return e.rotateLeft()}}})],1),s("el-col",{attrs:{lg:{span:1,offset:1},sm:2,xs:2}},[s("el-button",{attrs:{icon:"el-icon-refresh-right",size:"small"},on:{click:function(t){return e.rotateRight()}}})],1),s("el-col",{attrs:{lg:{span:2,offset:6},sm:2,xs:2}},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){return e.uploadImg()}}},[e._v("提 交")])],1)],1)],1)],1)},n=[],i=s(71029),o=s(17756),a=s(75385),l=s(61981),u={components:{VueCropper:o.VueCropper},data(){return{open:!1,visible:!1,title:"修改头像",options:{img:i.A.getters.avatar,autoCrop:!0,autoCropWidth:200,autoCropHeight:200,fixedBox:!0,outputType:"png"},previews:{},resizeHandler:null}},methods:{editCropper(){this.open=!0},modalOpened(){this.visible=!0,this.resizeHandler||(this.resizeHandler=(0,l.sg)((()=>{this.refresh()}),100)),window.addEventListener("resize",this.resizeHandler)},refresh(){this.$refs.cropper.refresh()},requestUpload(){},rotateLeft(){this.$refs.cropper.rotateLeft()},rotateRight(){this.$refs.cropper.rotateRight()},changeScale(e){e=e||1,this.$refs.cropper.changeScale(e)},beforeUpload(e){if(-1==e.type.indexOf("image/"))this.$modal.msgError("文件格式错误，请上传图片类型,如：JPG，PNG后缀的文件。");else{const t=new FileReader;t.readAsDataURL(e),t.onload=()=>{this.options.img=t.result}}},uploadImg(){this.$refs.cropper.getCropBlob((e=>{let t=new FormData;t.append("avatarfile",e),(0,a.F4)(t).then((e=>{this.open=!1,this.options.img="/prod-api"+e.imgUrl,alert(this.options.img),i.A.commit("SET_AVATAR",this.options.img),this.$modal.msgSuccess("修改成功"),this.visible=!1}))}))},realTime(e){this.previews=e},closeDialog(){this.options.img=i.A.getters.avatar,this.visible=!1,window.removeEventListener("resize",this.resizeHandler)}}},c=u,p=s(81656),d=(0,p.A)(c,r,n,!1,null,"9db64348",null),m=d.exports},34618:function(e,t,s){s.r(t),s.d(t,{default:function(){return c}});var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-form",{ref:"form",attrs:{model:e.user,rules:e.rules,"label-width":"80px"}},[s("el-form-item",{attrs:{label:"用户昵称",prop:"nickName"}},[s("el-input",{attrs:{maxlength:"30"},model:{value:e.user.nickName,callback:function(t){e.$set(e.user,"nickName",t)},expression:"user.nickName"}})],1),s("el-form-item",{attrs:{label:"手机号码",prop:"phonenumber"}},[s("el-input",{attrs:{maxlength:"11"},model:{value:e.user.phonenumber,callback:function(t){e.$set(e.user,"phonenumber",t)},expression:"user.phonenumber"}})],1),s("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[s("el-input",{attrs:{maxlength:"50"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}})],1),s("el-form-item",{attrs:{label:"性别"}},[s("el-radio-group",{model:{value:e.user.sex,callback:function(t){e.$set(e.user,"sex",t)},expression:"user.sex"}},[s("el-radio",{attrs:{label:"0"}},[e._v("男")]),s("el-radio",{attrs:{label:"1"}},[e._v("女")])],1)],1),s("el-form-item",[s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:e.submit}},[e._v("保存")]),s("el-button",{attrs:{type:"danger",size:"mini"},on:{click:e.close}},[e._v("关闭")])],1)],1)},n=[],i=s(75385),o={props:{user:{type:Object}},data(){return{rules:{nickName:[{required:!0,message:"用户昵称不能为空",trigger:"blur"}],email:[{required:!0,message:"邮箱地址不能为空",trigger:"blur"},{type:"email",message:"请输入正确的邮箱地址",trigger:["blur","change"]}],phonenumber:[{required:!0,message:"手机号码不能为空",trigger:"blur"},{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}}},methods:{submit(){this.$refs["form"].validate((e=>{e&&(0,i.eg)(this.user).then((e=>{this.$modal.msgSuccess("修改成功")}))}))},close(){this.$tab.closePage()}}},a=o,l=s(81656),u=(0,l.A)(a,r,n,!1,null,null,null),c=u.exports},75385:function(e,t,s){s.d(t,{C$:function(){return v},CZ:function(){return c},F4:function(){return h},IK:function(){return i},TK:function(){return l},VM:function(){return d},bz:function(){return u},cO:function(){return f},e8:function(){return p},ed:function(){return _},eg:function(){return m},nu:function(){return a},rr:function(){return g},wz:function(){return o}});var r=s(35720),n=s(78957);function i(e){return(0,r.Ay)({url:"/system/user/list",method:"get",params:e})}function o(e){return(0,r.Ay)({url:"/system/user/"+(0,n.AL)(e),method:"get"})}function a(e){return(0,r.Ay)({url:"/system/user",method:"post",data:e})}function l(e){return(0,r.Ay)({url:"/system/user",method:"put",data:e})}function u(e){return(0,r.Ay)({url:"/system/user/"+e,method:"delete"})}function c(e,t){const s={userId:e,password:t};return(0,r.Ay)({url:"/system/user/resetPwd",method:"put",data:s})}function p(e,t){const s={userId:e,status:t};return(0,r.Ay)({url:"/system/user/changeStatus",method:"put",data:s})}function d(){return(0,r.Ay)({url:"/system/user/profile",method:"get"})}function m(e){return(0,r.Ay)({url:"/system/user/profile",method:"put",data:e})}function f(e,t){const s={oldPassword:e,newPassword:t};return(0,r.Ay)({url:"/system/user/profile/updatePwd",method:"put",params:s})}function h(e){return(0,r.Ay)({url:"/system/user/profile/avatar",method:"post",data:e})}function g(e){return(0,r.Ay)({url:"/system/user/authRole/"+e,method:"get"})}function v(e){return(0,r.Ay)({url:"/system/user/authRole",method:"put",params:e})}function _(){return(0,r.Ay)({url:"/system/user/deptTree",method:"get"})}},61981:function(e,t,s){s.d(t,{Cq:function(){return i},Xs:function(){return l},nx:function(){return a},pD:function(){return n},pu:function(){return o},sg:function(){return r}});s(28743),s(78957);function r(e,t,s){let r,n,i,o,a;const l=function(){const u=+new Date-o;u<t&&u>0?r=setTimeout(l,t-u):(r=null,s||(a=e.apply(i,n),r||(i=n=null)))};return function(...n){i=this,o=+new Date;const u=s&&!r;return r||(r=setTimeout(l,t)),u&&(a=e.apply(i,n),i=n=null),a}}function n(e,t){const s=Object.create(null),r=e.split(",");for(let n=0;n<r.length;n++)s[r[n]]=!0;return t?e=>s[e.toLowerCase()]:e=>s[e]}const i="export default ",o={html:{indent_size:"2",indent_char:" ",max_preserve_newlines:"-1",preserve_newlines:!1,keep_array_indentation:!1,break_chained_methods:!1,indent_scripts:"separate",brace_style:"end-expand",space_before_conditional:!0,unescape_strings:!1,jslint_happy:!1,end_with_newline:!0,wrap_line_length:"110",indent_inner_html:!0,comma_first:!1,e4x:!0,indent_empty_lines:!0},js:{indent_size:"2",indent_char:" ",max_preserve_newlines:"-1",preserve_newlines:!1,keep_array_indentation:!1,break_chained_methods:!1,indent_scripts:"normal",brace_style:"end-expand",space_before_conditional:!0,unescape_strings:!1,jslint_happy:!0,end_with_newline:!0,wrap_line_length:"110",indent_inner_html:!0,comma_first:!1,e4x:!0,indent_empty_lines:!0}};function a(e){return e.replace(/( |^)[a-z]/g,(e=>e.toUpperCase()))}function l(e){return/^[+-]?(0|([1-9]\d*))(\.\d+)?$/g.test(e)}}}]);