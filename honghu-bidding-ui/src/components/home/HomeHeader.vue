<template>
  <header class="header" style="margin-bottom: 30px">

    <!--头部第二行 搜索区域-->
    <div  class="bottom" style="width: 1400px;display: flex;justify-content: space-between;align-items: center;margin-top: 25px">
      <h1 class="logoArea">
        <router-link class="logo" title="XX招投标平台" to="/">
          <el-image
              style="width: 100px; height: auto;vertical-align: middle"
              src="../images/hh.png"
          ></el-image>
        </router-link>
        XX招投标平台
      </h1>
      <div style="display: flex;align-items: center;">
        <div class="searchArea">
          <el-form>
            <el-input placeholder="请输入内容" v-model="keyword" class="input-with-select">
              <el-button slot="append" icon="el-icon-search" @click="goSearch"></el-button>
            </el-input>
          </el-form>
        </div>
        <div style="text-align: right">
        <a href="#"
           @click="exit"
           class="tui"
           v-show="is_disappear">退出登录</a>
        <router-link :to="'/regist'">
          <a href="#"
             class="zhu">注册</a>
        </router-link>
      </div>
      </div>

    </div>
  </header>
</template>


<script>

import {bus} from "@/main";

export default {
  name: 'homeView',
  data() {
    return {
      keyword: '',
      is_disappear: true
    }
  },
  mounted() {
    if (sessionStorage.getItem('token') == null) {
      this.is_disappear = false
    }
  },
  created() {
    bus.$on('update:login', (data) => {
      this.is_disappear = data
    })
  },
  methods: {
    goSearch() {
      let location = {
        name: 'search',
        params: {keyword: this.keyword || undefined},
      }
      if (this.$route.query) {
        location.query = this.$route.query
      }
      this.$router.push(location)
    },
    exit() {
      if (sessionStorage.getItem('token') != null) {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('bsSupplier')
        this.$message.success("退出成功！")
        this.$router.push({path:'/'});
        this.is_disappear = false
      }
    }
  }
}
</script>
<style lang="less" scoped>

* {
  margin: 0;
  padding: 0;
}

.tui {
  text-decoration: none;
  color: #fff;
  font-size: 12px;
  display: inline-block;
  background-color: #409EFF;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  box-shadow: 0 2px 12px 0 #3a8ee6d6;
  border-radius: 5px;
}

.zhu {
  text-decoration: none;
  color: #fff;
  font-size: 12px;
  display: inline-block;
  background-color: #409EFF;
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  box-shadow: 0 2px 12px 0 #3a8ee6d6;
  border-radius: 5px;
  margin-left: 15px;
}

.tui:hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
}

.zhu:hover {
  background-color: #66b1ff;
  border-color: #66b1ff;
}

.input-with-select {
  width: 400px;
}

.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            cursor: pointer;
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-right: 15px;

      .searchForm {
        overflow: hidden;
      }
    }
  }
}
</style>
