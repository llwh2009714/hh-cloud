<template>
  <div class="box">
    <el-tabs>
      <el-tab-pane label="招标公示" class="font">
        <!--招标公示-->
        <el-table
            :data="tenderList"
            stripe
            style="width: 100%"
            :default-sort = "{prop: 'uUpdateTime', order: 'descending'}">
          <el-table-column
              align="center"
              type="index"
              label="编号"
              width="180">
          </el-table-column>
          <el-table-column
              align="center"
              prop="uTitle"
              label="公告标题"
              width="500">
          </el-table-column>
          <el-table-column
              align="center"
              label="剩余天数">
            <template slot-scope="scope">
              <!-- 使用计算属性来计算剩余天数 -->
              <span style="color: red;font-size: 16px;font-weight: bold;">{{
                  calculateRemainingDays(scope.row.uEndTime)
                }}</span>天
            </template>
          </el-table-column>
          <el-table-column
              align="center"
              prop="fjStatus"
              label="操作"
              width="250">
            <template slot-scope="scope">
              <router-link :to="'/detail?uid='+scope.row.uid+'&type=bidNotice'">
                <el-button size="small" type="primary">我要投标</el-button>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column
              align="center"
              prop="uUpdateTime"
              label="公示时间" sortable>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="中标结果" class="font">
        <!--中标结果-->
        <el-table
            :data="tableData"
            stripe
            style="width: 100%">
          <el-table-column
              align="center"
              type="index"
              label="编号"
              width="180">
          </el-table-column>
          <el-table-column
              align="center"
              prop="uTitle"
              label="项目名称"
              width="500">
            <template slot-scope="scope">
              <span>{{scope.row.bidTender.sName || '——'}}</span>
            </template>
          </el-table-column>
          <el-table-column
              align="center"
              prop="fjStatus"
              label="招标单位">
            <template slot-scope="scope">
              <span>{{scope.row.bidTender.sUnit || '——'}}</span>
            </template>
          </el-table-column>
          <el-table-column
              align="center"
              prop="fjStatus"
              label="操作"
              width="250">
            <template slot-scope="scope">
              <router-link :to="'/detail?uid='+scope.row.uid+'&type=winning&sid='+scope.row.bidTender.sid">
                <el-button size="small" type="primary">查看详情</el-button>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column
              align="center"
              label="结束时间">
            <template slot-scope="scope">
              <span>{{scope.row.bidTender.updateTime || '——'}}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import {getList, findAllByEndTime} from '@/api/home'

export default {
  name: 'MoreList',
  data() {
    return {
      tenderList: [],
      tableData: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        orderNum: null,
        uid: null,
        sid: null,
        uTitle: null,
        uProject: null,
        uMoney: null,
        uGetTime: null,
        uAcceptTime: null,
        uEndTime: null,
        uKaiTime: null,
        fjAnnex: null,
        fjStatus: null,
        fjRemark: null,
        uUpdateTime: null,
      },
    }
  },
  created() {
    this.Info();
  },
  methods: {
    //查询招标公示
    Info() {
      this.queryParams.fjStatus = 5;//已发布状态
      this.queryParams.uEndTime = '2020-11-11';//只要非空即可
      getList(this.queryParams).then(res => {
        this.tenderList = res.data.rows;
        console.log(this.tenderList,"this.tenderList");
        this.total = res.total;
      })
      //终止
      findAllByEndTime().then(res => {
        this.tableData = res.data.data;
      })
    },
    calculateRemainingDays(uEndTime) {
      // 将字符串转换为日期对象
      const updateTime = new Date(uEndTime);
      // 计算当前日期与公示时间的差值，并返回剩余天数
      return Math.ceil(Math.abs(Date.now() - updateTime) / (1000 * 60 * 60 * 24));
    },
  }
}
</script>
<style>
.font {
  font-size: 16px;
}

.tenderInfo {
  font-size: 14px;
}
</style>
