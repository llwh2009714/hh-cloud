<template>
  <div>
    <!--登录-->
    <h2 style="text-align: center;margin-bottom: 20px">供应商登录</h2>
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="150px"
             class="demo-ruleForm">
      <el-form-item label="账号" prop="userName">
        <el-input v-model="ruleForm.userName" placeholder="请输入账号" style="width: 380px" autocomplete="off"
                  @keyup.enter.native="submitForm('ruleForm')" clearable/>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass" placeholder="请输入密码" autocomplete="off"
                  style="width: 380px" @keyup.enter.native="submitForm('ruleForm')" clearable/>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <el-input type="text" auto-complete="false"
                  v-model="ruleForm.code" placeholder="点击图片更换验证码"
                  style="width: 50%" @keyup.enter.native="submitForm('ruleForm')" clearable/>
        <el-image class="codeImg" :src="imgUrl" @click="resetImg" style="height: 40px"/>
      </el-form-item>
      <el-row style="text-align: right">
        <router-link :to="'/regist'">
          <el-button type="text" style="margin-bottom: -20px;margin-right: 78px">
            没账户？注册一下
          </el-button>
        </router-link>
      </el-row>
      <el-row style="text-align: center">
        <el-button type="primary" @click="submitForm('ruleForm')" style="width: 75%;margin-bottom: -10px">登录
        </el-button>
      </el-row>
      <el-row style="text-align: center">
        <el-button @click="resetForm('ruleForm')" style="width: 75%">重置</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import {login} from "@/api/login";
import {bus} from "@/main";

export default {
  data() {
    return {
      imgUrl: "/prod-api" + '/basic/supplier/code?time=' + new Date(),
      ruleForm: {
        pass: '',
        userName: '',
        code: ''
      },
      rules: {
        userName: [
          {required: true, message: "账号不能为空", trigger: "blur"}
        ],
        pass: [
          {required: true, message: "密码不能为空", trigger: "blur"}
        ],
        code: [
          {required: true, message: "验证码不能为空", trigger: "blur"}
        ]
      },
    }
  }, methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          login(this.ruleForm).then(res => {
            console.log(res)
            if (res.data.msg == 'code error') {
              this.$message.error('验证码错误！')
              this.resetImg()
              this.ruleForm.code = ''
            } else if (res.data.code == 200) {
              sessionStorage.setItem('token', res.data.data.token)
              sessionStorage.setItem('bsSupplier', JSON.stringify(res.data.data.bsSupplier))
              this.$emit('update:visible', false);
              bus.$emit('update:login', true);
              this.resetForm('ruleForm')
              this.$message.success(res.data.data.msg)
              this.resetImg()
            } else {
              this.$message.error(res.data.msg)
              this.resetForm('ruleForm')
              this.resetImg()
            }
          });
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    resetImg() {
      this.imgUrl = "/prod-api" + '/basic/supplier/code?time=' + new Date();
    }
  }
}
</script>

<style>
.codeImg {
  margin-right: 80px;
  float: right;
}
</style>
