<template>
  <div class="list-container">
    <div class="sortList clearfix">
      <div class="center">
        <!--轮播图-->
        <el-carousel trigger="click" height="500px">
          <el-carousel-item v-for="item in imgList" :key="item">
            <el-image style="width: 1400px" :src="item" fit="fill"></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ListContainer',
  data() {
    // var checkAge = (rule, value, callback) => {
    //   if (!value) {
    //     return callback(new Error('年龄不能为空'));
    //   }
    //   setTimeout(() => {
    //     if (!Number.isInteger(value)) {
    //       callback(new Error('请输入数字值'));
    //     } else {
    //       if (value < 18) {
    //         callback(new Error('必须年满18岁'));
    //       } else {
    //         callback();
    //       }
    //     }
    //   }, 1000);
    // };
    return {
      //轮播图片
      imgList: ['../images/ztb3.png', '../images/ztb2.png', '../images/ztb1.png'],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        zrId: null,
        hName: null,
        hCreditCode: null,
        hIncorporation: null,
        hInstitution: null,
        hQuality: null,
        hStartTime: null,
        hJuridical: null,
        hJuridicalIdentity: null,
        hAddress: null,
        hRange: null,
        hDesc: null,
        hCopies: null,
        hJuridicalCopies: null,
        hExpiration: null,
        hBank: null,
        hAccount: null,
        hBankAddress: null,
        hSignPhone: null,
        hSignAddress: null,
        hCapital: null,
        hActualCapital: null,
        hProve: null,
        fStatus: null,
        fOpinion: null,
        fState: null,
        fClassify: null,
        fLoginAccount: null,
        fPassword: null
      },
    };
  },
  methods: {}
}
</script>


<style lang="less" scoped>
.form-input {
  width: 500px;
  display: inline-block;
}

.form-input2 {
  width: 400px;
  display: inline-block;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.list-container {
  width: 1400px;
  margin: 0 auto;

  .sortList {
    height: 500px;
    //padding-left: 210px;

    .center {
      box-sizing: border-box;
      width: 1400px;
      height: 100%;
      padding: 5px;
      float: left;
      position: relative;
    }
  }
}

.demo-ruleForm {
  width: 360px;
}
</style>
