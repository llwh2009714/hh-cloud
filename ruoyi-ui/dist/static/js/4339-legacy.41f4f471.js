"use strict";(self["webpackChunkruoyi"]=self["webpackChunkruoyi"]||[]).push([[4339],{34339:function(e,t,o){o.r(t),o.d(t,{default:function(){return v}});var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login"},[o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules}},[o("h3",{staticClass:"title"},[e._v("登 录")]),o("el-form-item",{attrs:{prop:"username"}},[o("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}},[o("svg-icon",{staticClass:"el-input__icon input-icon",attrs:{slot:"prefix","icon-class":"user"},slot:"prefix"})],1)],1),o("el-form-item",{attrs:{prop:"password"}},[o("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}},[o("svg-icon",{staticClass:"el-input__icon input-icon",attrs:{slot:"prefix","icon-class":"password"},slot:"prefix"})],1)],1),e.captchaEnabled?o("el-form-item",{attrs:{prop:"code"}},[o("el-input",{staticStyle:{width:"63%"},attrs:{"auto-complete":"off",placeholder:"验证码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.code,callback:function(t){e.$set(e.loginForm,"code",t)},expression:"loginForm.code"}},[o("svg-icon",{staticClass:"el-input__icon input-icon",attrs:{slot:"prefix","icon-class":"validCode"},slot:"prefix"})],1),o("div",{staticClass:"login-code"},[o("img",{staticClass:"login-code-img",attrs:{src:e.codeUrl},on:{click:e.getCode}})])],1):e._e(),o("el-checkbox",{staticStyle:{margin:"0px 0px 25px 0px"},model:{value:e.loginForm.rememberMe,callback:function(t){e.$set(e.loginForm,"rememberMe",t)},expression:"loginForm.rememberMe"}},[e._v("记住密码")]),o("el-form-item",{staticStyle:{width:"100%"}},[o("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,size:"medium",type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e.loading?o("span",[e._v("登 录 中...")]):o("span",[e._v("登 录")])]),e.register?o("div",{staticStyle:{float:"right"}},[o("router-link",{staticClass:"link-type",attrs:{to:"/register"}},[e._v("立即注册")])],1):e._e()],1)],1)],1)},i=[],n=(o(28743),o(47149)),s=o(18987),a=o(57703),l=o.n(a),c="MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAKoR8mX0rGKLqzcWmOzbfj64K8ZIgOdH\nnzkXSOVOZbFu/TJhZ7rFAN+eaGkl3C4buccQd/EjEsj9ir7ijT7h96MCAwEAAQ==",u="MIIBVAIBADANBgkqhkiG9w0BAQEFAASCAT4wggE6AgEAAkEAqhHyZfSsYourNxaY\n7Nt+PrgrxkiA50efORdI5U5lsW79MmFnusUA355oaSXcLhu5xxB38SMSyP2KvuKN\nPuH3owIDAQABAkAfoiLyL+Z4lf4Myxk6xUDgLaWGximj20CUf+5BKKnlrK+Ed8gA\nkM0HqoTt2UZwA5E2MzS4EI2gjfQhz5X28uqxAiEA3wNFxfrCZlSZHb0gn2zDpWow\ncSxQAgiCstxGUoOqlW8CIQDDOerGKH5OmCJ4Z21v+F25WaHYPxCFMvwxpcw99Ecv\nDQIgIdhDTIqD2jfYjPTY8Jj3EDGPbH2HHuffvflECt3Ek60CIQCFRlCkHpi7hthh\nYhovyloRYsM+IS9h/0BzlEAuO0ktMQIgSPT3aFAgJYwKpqRYKlLDVcflZFCKY7u3\nUP8iWi1Qw0Y=";function m(e){var t=new(l());return t.setPublicKey(c),t.encrypt(e)}function d(e){var t=new(l());return t.setPrivateKey(u),t.decrypt(e)}var g={name:"Login",data:function(){return{codeUrl:"",loginForm:{username:"",password:"",rememberMe:!1,code:"",uuid:""},loginRules:{username:[{required:!0,trigger:"blur",message:"请输入您的账号"}],password:[{required:!0,trigger:"blur",message:"请输入您的密码"}],code:[{required:!0,trigger:"change",message:"请输入验证码"}]},loading:!1,captchaEnabled:!0,register:!0,redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},created:function(){this.getCode(),this.getCookie()},methods:{getCode:function(){var e=this;(0,n.Pz)().then((function(t){e.captchaEnabled=void 0===t.captchaEnabled||t.captchaEnabled,e.captchaEnabled&&(e.codeUrl="data:image/gif;base64,"+t.img,e.loginForm.uuid=t.uuid)}))},getCookie:function(){var e=s.A.get("username"),t=s.A.get("password"),o=s.A.get("rememberMe");this.loginForm={username:void 0===e?this.loginForm.username:e,password:void 0===t?this.loginForm.password:d(t),rememberMe:void 0!==o&&Boolean(o)}},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){t&&(e.loading=!0,e.loginForm.rememberMe?(s.A.set("username",e.loginForm.username,{expires:30}),s.A.set("password",m(e.loginForm.password),{expires:30}),s.A.set("rememberMe",e.loginForm.rememberMe,{expires:30})):(s.A.remove("username"),s.A.remove("password"),s.A.remove("rememberMe")),e.$store.dispatch("Login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/"}).catch((function(){}))})).catch((function(){e.loading=!1,e.captchaEnabled&&e.getCode()})))}))}}},p=g,f=o(81656),h=(0,f.A)(p,r,i,!1,null,null,null),v=h.exports}}]);