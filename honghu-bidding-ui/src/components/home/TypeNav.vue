<template>
  <div class="type-nav">
    <div class="container">
      <nav class="nav">
        <el-button type="primary">
          <el-link type="primary" href="/">首页</el-link>
        </el-button>
        <el-button type="primary">
          <el-link type="primary">招标信息</el-link>
        </el-button>
        <el-button type="primary">
          <el-link type="primary">采购信息</el-link>
        </el-button>
        <el-button type="primary">
          <el-link type="primary">政策法规</el-link>
        </el-button>
        <el-button type="primary">
          <el-link type="primary">公告信息</el-link>
        </el-button>
        <el-button type="primary">
          <el-link type="primary">帮助中心</el-link>
        </el-button>
        <el-button type="primary">
          <el-link type="primary">联系我们</el-link>
        </el-button>
        <el-button type="primary">
          <el-link type="primary">办理CA</el-link>
        </el-button>
        <el-button type="primary" @click="dian">
          <el-link type="primary">供应商中心</el-link>
        </el-button>
      </nav>
      <el-dialog
          :visible.sync="dialogVisible"
          width="650px">
        <Login @update:visible="handleDialogVisibleChange"></Login>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import Login from '@/components/login/Login.vue'

export default {
  name: 'TypeNav',
  components: {
    Login
  },
  data() {
    return {
      dialogVisible: false
    }
  },
  methods: {
    dian() {
      if (sessionStorage.getItem("token") == null) {
        this.dialogVisible = true
      } else {
        this.$router.push("/mine")
      }
    },
    handleDialogVisibleChange(newValue) {
      this.dialogVisible = newValue;
    }
  }
}
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #fff;

  .container {
    width: 1400px;
    margin: 0 auto;
    display: flex;
    position: relative;
    background-color: #409EFF;
    box-shadow: 0 2px 12px 0 #3a8ee6d6;

    a {
      height: 36px;
      margin: 0 20px;
      line-height: 45px;
      font-size: 16px;
      color: #FFF;
    }
  }
}
</style>
