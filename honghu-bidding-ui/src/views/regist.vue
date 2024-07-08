<template>
  <div>
    <div style="height: 158px" class="tou">
      <h2 style="text-align: center;padding: 52px 0 16px;font-size: 26px">XX招投标平台账号注册</h2>
      <p style="color: #f83e3d;text-align: center;font-weight: 400">
        注册信息请务必认真填写，避免因信息错误影响项目参与</p>
    </div>
    <div style="width: 1400px;margin: 20px auto 0;background-color: #FFFFFF;">
      <el-form ref="form" :model="form" :rules="rules" label-width="560px" style="padding: 30px 0">
        <el-form-item label="供应商名称" prop="hName" class="form-input">
          <el-input v-model="form.hName" placeholder="请输入供应商名称" style="width: 340px"
                    @keyup.enter.native="regist" clearable/>
        </el-form-item>
        <el-form-item label="统一社会信用代码" prop="hCreditCode" class="form-input">
          <el-input v-model="form.hCreditCode" placeholder="请输入统一社会信用代码或公司注册号" style="width: 340px"
                    @keyup.enter.native="regist" clearable/>
        </el-form-item>
        <el-form-item label="单位注册地" prop="hIncorporation" class="form-input">
          <el-input v-model="form.hIncorporation" placeholder="请输入单位注册地" style="width: 340px"
                    @keyup.enter.native="regist" clearable/>
        </el-form-item>
        <el-form-item label="成立日期" prop="hStartTime" class="form-input">
          <el-date-picker clearable
                          v-model="form.hStartTime"
                          type="date"
                          value-format="yyyy-MM-dd"
                          placeholder="请选择标注获取时间"
                          style="width: 340px">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="法人" prop="hJuridical" class="form-input">
          <el-input v-model="form.hJuridical" placeholder="请输入法人" style="width: 340px"
                    @keyup.enter.native="regist" clearable/>
        </el-form-item>
        <el-form-item label="法人身份证号" prop="hJuridicalIdentity" class="form-input">
          <el-input v-model="form.hJuridicalIdentity" placeholder="请输入法人身份证号" style="width: 340px"
                    @keyup.enter.native="regist" clearable/>
        </el-form-item>
        <el-form-item label="经营执照" class="form-input">
          <el-upload
              ref="upload1"
              :action="url"
              :on-change="changeFileLength"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :auto-upload="false"
              :limit="1"
              :on-success="handleFileSuccess"
              accept=".png, .jpg">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="hCopies.dialogVisible">
            <img width="100%" :src="hCopies.dialogImageUrl" alt=""/>
          </el-dialog>
          <p style="color: #999999;line-height: 18px;font-size: 12px">
            注意：<br/>
            1、为避免审核不通过，上传的证件图片务必保证证件内容、登记机关单位印章内容完整清晰可见。<br/>
            2、证件图片格式为JPG、PNG、JPEG中的一种，大小不超过1M。
          </p>
        </el-form-item>
        <el-form-item label="法人身份证扫描件" class="form-input">
          <el-upload
              ref="upload2"
              :action="url"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview1"
              :on-remove="handleRemove1"
              :on-change="changeFileLength1"
              :on-success="handleFileSuccess1"
              :auto-upload="false"
              :limit="2"
              accept=".png, .jpg"
              multiple>
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="hJuridicalCopies.dialogVisible">
            <img width="100%" :src="hJuridicalCopies.dialogImageUrl" alt=""/>
          </el-dialog>
          <p style="color: #999999;line-height: 18px;font-size: 12px">
            注意：<br/>
            1、请依次上传身份证正面照，身份证反面照，上传图片保持清晰完整。<br/>
            2、证件图片格式为JPG、PNG、JPEG中的一种，大小不超过1M。<br/>
            3、图片必须清晰、完整、方向正确，并且不能带有其他无关的标记信息。
          </p>
        </el-form-item>
        <el-form-item label="经办人姓名" prop="ywName" class="form-input">
          <el-input v-model="form.ywName" placeholder="请输入经办人姓名" style="width: 340px"
                    @keyup.enter.native="regist" clearable/>
        </el-form-item>
        <el-form-item label="经办人联系方式" prop="ywPhone" class="form-input">
          <el-input v-model="form.ywPhone" placeholder="请输入经办人联系方式" style="width: 340px"
                    @keyup.enter.native="regist" clearable/>
        </el-form-item>
        <el-form-item label="经办人身份证" prop="ywIdcrad" class="form-input">
          <el-input v-model="form.ywIdcrad" placeholder="请输入经办人身份证" style="width: 340px"
                    @keyup.enter.native="regist" clearable/>
        </el-form-item>
        <el-form-item label="经办人身份证扫描件" class="form-input">
          <el-upload
              ref="upload3"
              :action="url"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview2"
              :on-remove="handleRemove2"
              :on-change="changeFileLength2"
              :on-success="handleFileSuccess2"
              :auto-upload="false"
              :limit="2"
              accept=".png, .jpg"
              multiple>
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="ywScanIdcard.dialogVisible">
            <img width="100%" :src="ywScanIdcard.dialogImageUrl" alt=""/>
          </el-dialog>
          <p style="color: #999999;line-height: 18px;font-size: 12px">
            注意：<br/>
            1、请依次上传身份证正面照，身份证反面照，上传图片保持清晰完整。<br/>
            2、证件图片格式为JPG、PNG、JPEG中的一种，大小不超过1M。<br/>
            3、图片必须清晰、完整、方向正确，并且不能带有其他无关的标记信息。
          </p>
        </el-form-item>
        <el-form-item label="经办人邮箱" prop="ywMailbox" class="form-input">
          <el-input v-model="form.ywMailbox" placeholder="请输入经办人邮箱" style="width: 340px"
                    @keyup.enter.native="regist" clearable/>
        </el-form-item>
        <el-form-item label="登录账号" prop="hLoginAccount" class="form-input">
          <el-input v-model="form.hLoginAccount" placeholder="请输入登录账号" style="width: 340px"
                    @keyup.enter.native="regist" clearable/>
        </el-form-item>
        <el-form-item label="设置登录密码" prop="hPassword" class="form-input">
          <el-input v-model="form.hPassword" type="password" placeholder="请输入密码" style="width: 340px"
                    @keyup.enter.native="regist" clearable/>
        </el-form-item>
        <el-form-item label="确认登录密码" prop="checkPass" class="form-input">
          <el-input v-model="form.checkPass" type="password" placeholder="请再次输入密码" style="width: 340px"
                    @keyup.enter.native="regist" clearable/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer" style="text-align: center;padding-bottom: 50px">
        <el-button type="primary" @click="regist" style="width: 380px">完成注册</el-button>
        <el-button @click="cancel" style="margin-left: 30px">返回</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import {addSupplier} from "@/api/regist";
import {onlyHCreditCode} from "@/api/system/supplier";

export default {
  data() {
    return {
      hCopies: {
        dialogImageUrl: '',
        dialogVisible: false,
        // 收集——上传文件的列表
        uploadFiles: [],
        // 收集——上传文件的个数
        filesLength: 0,
      },
      hJuridicalCopies: {
        dialogImageUrl: '',
        dialogVisible: false,
        // 收集——上传文件的列表
        uploadFiles: [],
        // 收集——上传文件的个数
        filesLength: 0,
      },
      ywScanIdcard: {
        dialogImageUrl: '',
        dialogVisible: false,
        // 收集——上传文件的列表
        uploadFiles: [],
        // 收集——上传文件的个数
        filesLength: 0,
      },
      // 上传的地址
      // url: process.env.VUE_APP_BASE_API + "/basic/supplier/upload1",
      url: "/prod-api" + "/basic/supplier/upload1",
      form: {
        zrId: null,
        hName: null,
        hCreditCode: null,
        hIncorporation: null,
        hStartTime: null,
        hJuridical: null,
        hJuridicalIdentity: null,
        hLoginAccount: null,
        hPassword: null,
        hCopies: null,
        hJuridicalCopies: null,
        checkPass: null,
        ywName: null,
        ywPhone: null,
        ywIdcrad: null,
        ywMailbox: null,
        ywScanIdcard: null
      },
      rules: {
        hName: [
          {required: true, message: "供应商名称不能为空", trigger: "blur"}
        ],
        hCreditCode: [
          {required: true, message: "统一社会信用代码不能为空", trigger: "blur"},
          {
            pattern: /^[A-Z0-9]{18}$/,
            message: '请输入正确的统一社会信用代码',
            trigger: 'blur'
          }
        ],
        hIncorporation: [
          {required: true, message: "单位注册地不能为空", trigger: "blur"}
        ],
        hStartTime: [
          {required: true, message: "成立日期不能为空", trigger: "blur"}
        ],
        hJuridical: [
          {required: true, message: "法人不能为空", trigger: "blur"}
        ],
        hJuridicalIdentity: [
          {required: true, message: "法人身份证号不能为空", trigger: "blur"},
          {
            pattern: /(^\d{17}(\d|X|x)$)/,
            message: '请输入正确的身份证号',
            trigger: 'blur'
          }
        ],
        ywPhone: [
          {required: true, message: "经办人联系方式不能为空", trigger: "blur"},
          {
            pattern: /^1[3456789]\d{9}$/,
            message: '请输入正确的手机号码',
            trigger: 'blur'
          }
        ],
        ywName: [
          {required: true, message: "经办人姓名不能为空", trigger: "blur"}
        ],
        ywIdcrad: [
          {required: true, message: "经办人身份证不能为空", trigger: "blur"},
          {
            pattern: /(^\d{17}(\d|X|x)$)/,
            message: '请输入正确的身份证号',
            trigger: 'blur'
          }

        ],
        ywMailbox: [
          {required: true, message: "经办人邮箱不能为空", trigger: "blur"},
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: 'blur'
          }
        ],
        hLoginAccount: [
          {required: true, message: "登录账号不能为空", trigger: "blur"},
          {
            pattern: /^[a-zA-Z0-9_]{4,16}$/,
            message: '账号必须由4-16位字母、数字或下划线组成',
            trigger: 'blur'
          }
        ],
        hPassword: [
          {required: true, message: "密码不能为空", trigger: "blur"},
          {
            min: 6,
            max: 16,
            message: '密码长度在6到16位之间',
            trigger: 'blur'
          }
        ],
        checkPass: [
          {
            required: true,
            message: '请再次输入密码',
            trigger: 'blur'
          },
          {
            validator: (rule, value, callback) => {
              if (value !== this.form.hPassword) {
                callback(new Error('两次输入密码不一致!'));
              } else {
                callback();
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  }, methods: {
    reset() {
      this.form = {
        zrId: null,
        hName: null,
        hCreditCode: null,
        hIncorporation: null,
        hStartTime: null,
        hJuridical: null,
        hJuridicalIdentity: null,
        hLoginAccount: null,
        hPassword: null,
        hCopies: null,
        hJuridicalCopies: null,
        checkPass: null,
        ywName: null,
        ywPhone: null,
        ywIdcrad: null,
        ywMailbox: null,
        ywScanIdcard: null
      }
      this.hCopies = {
        dialogImageUrl: '',
        dialogVisible: false,
        // 收集——上传文件的列表
        uploadFiles: [],
        // 收集——上传文件的个数
        filesLength: 0,
      }
      this.hJuridicalCopies = {
        dialogImageUrl: '',
        dialogVisible: false,
        // 收集——上传文件的列表
        uploadFiles: [],
        // 收集——上传文件的个数
        filesLength: 0,
      }
      this.ywScanIdcard = {
        dialogImageUrl: '',
        dialogVisible: false,
        // 收集——上传文件的列表
        uploadFiles: [],
        // 收集——上传文件的个数
        filesLength: 0,
      }
    },
    // 取消按钮
    cancel() {
      this.reset();
      this.$router.back()
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
      this.hCopies.filesLength = fileList.length
    },
    handlePictureCardPreview(file) {
      this.hCopies.dialogImageUrl = file.url;
      this.hCopies.dialogVisible = true;
    },
    // 修改当前文件列表长度
    changeFileLength(file, fileList) {
      this.hCopies.filesLength = fileList.length
    },
    // 文件上传成功处理
    handleFileSuccess(response, file, fileList) {
      this.hCopies.uploadFiles.push(file);
      //每上传完一个文件都会执行该函数，所以必须等上传完成后再提交表单
      if (this.hCopies.uploadFiles.length === this.hCopies.filesLength) {
        let hhh = fileList.map(obj => {
          let newObj = obj;
          delete newObj.url;
          newObj.url = obj.response.data.url;
          delete newObj.name;

          newObj.name = obj.response.data.name;
          delete newObj.response;
          delete newObj.raw;
          delete newObj.percentage;
          delete newObj.status;
          delete newObj.uid;
          return newObj;
        })
        this.form.hCopies = JSON.stringify(hhh)
        this.$refs.upload2.submit();
      }
    },

    //法人身份证
    handleRemove1(file, fileList) {
      console.log(file, fileList);
      this.hJuridicalCopies.filesLength = fileList.length
    },
    handlePictureCardPreview1(file) {
      this.hJuridicalCopies.dialogImageUrl = file.url;
      this.hJuridicalCopies.dialogVisible = true;
    },
    changeFileLength1(file, fileList) {
      this.hJuridicalCopies.filesLength = fileList.length
    },
    // 文件上传成功处理
    handleFileSuccess1(response, file, fileList) {
      this.hJuridicalCopies.uploadFiles.push(file);
      //每上传完一个文件都会执行该函数，所以必须等上传完成后再提交表单
      if (this.hJuridicalCopies.uploadFiles.length === this.hJuridicalCopies.filesLength) {
        let hhh = fileList.map(obj => {
          let newObj = obj;
          delete newObj.url;
          newObj.url = obj.response.data.url;
          delete newObj.name;

          newObj.name = obj.response.data.name;
          delete newObj.response;
          delete newObj.raw;
          delete newObj.percentage;
          delete newObj.status;
          delete newObj.uid;
          return newObj;
        })
        this.form.hJuridicalCopies = JSON.stringify(hhh)
        this.$refs.upload3.submit();
      }
    },

    //业务经办人身份证
    handleRemove2(file, fileList) {
      console.log(file, fileList);
      this.ywScanIdcard.filesLength = fileList.length
    },
    handlePictureCardPreview2(file) {
      this.ywScanIdcard.dialogImageUrl = file.url;
      this.ywScanIdcard.dialogVisible = true;
    },
    changeFileLength2(file, fileList) {
      this.ywScanIdcard.filesLength = fileList.length
    },
    // 文件上传成功处理
    handleFileSuccess2(response, file, fileList) {
      this.ywScanIdcard.uploadFiles.push(file);
      //每上传完一个文件都会执行该函数，所以必须等上传完成后再提交表单
      if (this.ywScanIdcard.uploadFiles.length === this.ywScanIdcard.filesLength) {
        let hhh = fileList.map(obj => {
          let newObj = obj;
          delete newObj.url;
          newObj.url = obj.response.data.url;
          delete newObj.name;
          newObj.name = obj.response.data.name;
          delete newObj.response;
          delete newObj.raw;
          delete newObj.percentage;
          delete newObj.status;
          delete newObj.uid;
          return newObj;
        })
        this.form.ywScanIdcard = JSON.stringify(hhh)
        addSupplier(this.form).then(res => {
          if (res.data.code === 200) {
            this.$message({
              message: '注册成功！',
              type: 'success'
            });
            this.reset()
          }
        })
      }
    },
    regist() {
      this.$refs.form.validate(valid => {
        if (valid) {
          onlyHCreditCode({"hCreditCode": this.form.hCreditCode}).then(res => {
            if (res.data.data != null) {
              this.$message.error('该统一社会信用代码已存在')
            } else {
              if (this.hCopies.filesLength === 1 && this.hJuridicalCopies.filesLength === 2 && this.ywScanIdcard.filesLength === 2) {
                this.$refs.upload1.submit();
              } else {
                this.$message.error('缺少上传图片，请复查');
              }
            }
          })
        }
      })
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.tou {
  background: url('/public/images/bj.2c9500fa.png') 50%;
  background-size: 1920px 188px;
}

body {
  background-color: #F9F9F9;
}
</style>
