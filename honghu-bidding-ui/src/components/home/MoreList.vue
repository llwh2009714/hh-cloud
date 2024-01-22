<template>
  <div class="box">
    <el-row>
      <el-col :span="14">
        <div class="bg-purple">
          <div class="box-bottom">
            <div class="shixin">今日开标</div>
            <el-tag type="warning" class="right" effect="dark" size="medium">更多</el-tag>
          </div>
          <!--今日开标-->
          <el-table
              :data="tableData"
              stripe
              style="width: 100%;top: -25px">
            <el-table-column
                align="center"
                prop="uKaiTime"
                label="开标时间" sortable>
            </el-table-column>
            <el-table-column
                align="center"
                prop="uTitle"
                label="公告标题"
                width="500">
            </el-table-column>
            <el-table-column
                align="center"
                prop="uUpdateTime"
                label="公示时间" sortable>
            </el-table-column>
          </el-table>
<!--          <el-empty :image-size="200" v-if="tableData.length === 0"></el-empty>-->
        </div>
      </el-col>
      <el-col :span="10">
        <div class=" bg-purple-light" style="margin-left: 15px">
          <div class="box-bottom">
            <div class="shixin">通知公告</div>
            <el-tag type="warning" class="right" effect="dark" size="medium">更多</el-tag>
          </div>
          <el-empty :image-size="200" v-if="noticeList.length === 0"></el-empty>
          <!--通知公告-->
          <el-row v-for="item in noticeList" :key="item.index">
            <el-col :span="12">
              <div class="bg-info">{{ item.name }}</div>
            </el-col>
            <el-col :span="10">
              <div class="bg-info bg-info2">{{ item.date }}</div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {getList} from "@/api/home";

export default {
  name: 'MoreList',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02 18:00',
          name: '宁夏煤业烯烃二分公司聚乙烯装置乙烯吸附剂....',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04 18:00',
          name: '宁夏煤业烯烃二分公司聚乙烯装置乙烯吸附剂....',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01 18:00',
          name: '宁夏煤业烯烃二分公司聚乙烯装置乙烯吸附剂....',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-01 18:00',
          name: '宁夏煤业烯烃二分公司聚乙烯装置乙烯吸附剂....',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-01 18:00',
          name: '宁夏煤业烯烃二分公司聚乙烯装置乙烯吸附剂....',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-01 18:00',
          name: '宁夏煤业烯烃二分公司聚乙烯装置乙烯吸附剂....',
          address: '上海市普陀区金沙江路 1519 弄'
        }
      ],
      noticeList: [
        // {"name": "关于举办2023年第三季度供应商培训的通知", "date": "2023-12-26 05:04:17"},
        // {"name": "关于举办2023年第二季度供应商培训的通知", "date": "2023-12-25 09:00:56"},
        // {"name": "关于举办2023年第一季度供应商招标的通知", "date": "2023-12-25 08:04:43"},
        // {"name": "关于举办2023年第四季度供应商投标的通知", "date": "2023-12-24 08:04:28"},
        // {"name": "关于举办2023年三季度供应商风险监控通知", "date": "2023-12-24 05:04:44"},
        // {"name": "关于举办2020年第二季度供应商采买的通知", "date": "2023-12-23 09:04:33"},
        // {"name": "关于举办2022年第三季度供应商预约的通知", "date": "2023-12-23 05:04:21"},
      ],
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
    this.info();
  },
  methods:{
    info(){
      this.queryParams.fjStatus = 5;//已发布状态
      this.queryParams.uKaiTime = '2020-11-11';//只要非空即可
      getList(this.queryParams).then(res => {
        this.tableData = res.data.rows;
        console.log(this.tableData,"dddddddd");
        this.total = res.total;
      })
    }
  }
}
</script>
<style>
.box {
  width: 1400px;
  margin: 20px auto;
}

.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.grid-content {
  height: auto;
  padding-bottom: 10px;
  width: 800px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}

.bg-purple-light {
  width: 570px;
}

.box-bottom {
  border-bottom: 2px solid #409EFF;
  margin-bottom: 10px;
}

.shixin {
  width: 100px;
  height: 56px;
  background-color: #409EFF;
  color: #ffffff;
  text-align: center;
  line-height: 56px;
}

.right {
  float: right;
  position: relative;
  top: -40px;
  right: 20px;
}

.bg-info {
  width: 310px;
  height: 30px;
//border: 1px solid #000; margin-left: 10px; text-align: center;
  line-height: 30px;
  font-size: 14px;
}
</style>
