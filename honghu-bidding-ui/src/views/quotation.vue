<template>
  <div class="app-container">
    <div style="height: 158px" class="tou">
      <h2 style="text-align: center;padding: 52px 0 16px;font-size: 26px">报价单</h2>
      <el-button type="primary" icon="el-icon-arrow-left" @click="cancel" style="margin-left: 20px">返回</el-button>
    </div>
    <div style="width: 1700px;padding: 20px 85px">
      <h3 style="margin-bottom: 10px">基本信息</h3>
      <el-statistic
          ref="statistic"
          format="DD天HH小时mm分钟ss秒"
          :value="dao"
          title="距离开始报价："
          time-indices
          value-style="color: red"
      >
      </el-statistic>
      <el-form :inline="true" ref="form" :model="info" label-width="400px">
        <el-descriptions class="margin-top" size="medium" :column="2" border>
          <el-descriptions-item label-style="text-align: center">
            <template slot="label">
              采购项目编号
            </template>
            {{ gfId }}
          </el-descriptions-item>
          <el-descriptions-item label-style="text-align: center">
            <template slot="label">
              采购项目名称
            </template>
            {{ info.gName }}
          </el-descriptions-item>
          <el-descriptions-item label-style="text-align: center">
            <template slot="label">
              开始时间
            </template>
            {{ info.gSpawnTime }}
          </el-descriptions-item>
          <el-descriptions-item label-style="text-align: center" content-style="color: red;font-weight:bold">
            <template slot="label">
              报价截止时间
            </template>
            {{ info.gDeadline }}
          </el-descriptions-item>
          <el-descriptions-item label-style="text-align: center">
            <template slot="label">
              报价状态
            </template>
            {{ state == 0 ? '未报价' : (state == 1 ? '已报价' : '撤销报价') }}
          </el-descriptions-item>
          <el-descriptions-item label-style="text-align: center">
            <template slot="label">
              报价金额
            </template>
            <el-input v-model="quotationInfo.bjTotal"
                      @input="payHandleInput(quotationInfo)" clearable :readonly="is_read"/>
          </el-descriptions-item>
        </el-descriptions>
      </el-form>

      <h3 style="margin: 60px 0 10px">物料信息</h3>
      <el-table
          :data="device"
          style="width: 100%"
          stripe
          v-loading="loading">
        <el-table-column
            type="index"
            label="序号"
            width="120px">
        </el-table-column>
        <el-table-column
            property="tid"
            label="物料编码">
        </el-table-column>
        <el-table-column
            property="tName"
            label="物料名称">
        </el-table-column>
        <el-table-column
            property="category"
            label="类别">
        </el-table-column>
        <el-table-column
            property="tUnit"
            label="计量单位">
        </el-table-column>
        <el-table-column
            property="tModel"
            label="规格型号">
        </el-table-column>
        <el-table-column
            property="vPerson"
            label="采购人">
        </el-table-column>
        <el-table-column
            property="tPrice"
            label="含税单价">
          <template slot-scope="scope">
            {{ (scope.row.tPrice * 1.13).toFixed(2) }}
          </template>
        </el-table-column>
        <el-table-column
            property="vCount"
            label="数量">
        </el-table-column>
        <el-table-column
            label="小计">
          <template slot-scope="scope">
            {{ ((scope.row.tPrice * 1.13) * scope.row.vCount).toFixed(2) }}
          </template>
        </el-table-column>
      </el-table>
      <p style="font-size: 18px;font-weight: bolder;text-align: right;margin-top: 20px;color: red">总计:{{
          result.toFixed(2)
        }}</p>
      <pagination
          v-show="total>0"
          :total="total"
          :page.sync="nobid.pageNum"
          :limit.sync="nobid.pageSize"
          @pagination="listDevice"
          style="text-align: right"
      />
    </div>
    <el-row style="text-align: center;margin-top: 20px">
      <el-button type="primary" @click="yes" v-if="state == 0 || state == 2">确定</el-button>
    </el-row>
  </div>
</template>

<script>
import {getNobid, listDev} from "@/api/system/supplier";
import Pagination from "@/components/Pagination/index.vue";
import {addQuotation, oneQuo} from "@/api/system/quotation";
import {updatePro} from "@/api/system/nobidSupNonPro";

export default {
  name: "quotation",
  components: {Pagination},
  data() {
    return {
      is_read: false,
      loading: true,
      gfId: this.$route.query.gfId,
      state: this.$route.query.state,
      device: [],
      total: 0,
      result: 0,
      info: {
        gName: null,
        gSpawnTime: null,
        gDeadline: null,
        gTimeon: null
      },
      nobid: {
        gid: null,
        pageNum: 1,
        pageSize: 10
      },
      quotationInfo: {
        gfId: this.$route.query.gfId,
        bjSecond: 1,
        bjTotal: null,
        bjHid: JSON.parse(sessionStorage.getItem('bsSupplier')).hid,
        isDelete: 0
      },
      dao: Date.now()
    }
  },
  created() {
    this.getNobidPro()
  },
  methods: {
    cancel() {
      this.$router.back()
    },
    getNobidPro() {
      getNobid({"code": this.gfId}).then(res => {
        console.log(res)
        this.nobid.gid = res.data.data.gid
        this.info.gName = res.data.data.gName
        this.info.gSpawnTime = res.data.data.gSpawnTime
        this.info.gDeadline = res.data.data.gDeadline
        this.info.gTimeon = res.data.data.gTimeon
        this.dao = Date.now() + (new Date(res.data.data.gTimeon).getTime() - Date.now())
        this.ti()
        if (this.state === 1) {
          oneQuo({"gfId": this.gfId, "bjHid": JSON.parse(sessionStorage.getItem('bsSupplier')).hid}).then(res => {
            this.quotationInfo.bjTotal = res.data.data.bjTotal
            this.is_read = true
          })
        }
        this.listDevice()
      })
    },
    ti() {
      if (this.dao <= Date.now()) {
        this.$notify({
          title: "提示",
          message: "报价已经开始了",
          duration: 0
        });
      }
    },
    listDevice() {
      this.loading = true
      listDev(this.nobid).then(response => {
        this.device = response.data.rows
        this.total = response.data.total
        this.lCalculateTotalSubtotal()
        this.loading = false
      })
    },
    // 计算产品总价格方法
    lCalculateTotalSubtotal() {
      this.result = this.device.reduce((total, row) => {
        let totalValue = (row.tPrice * 1.13) * row.vCount ? parseFloat((row.tPrice * 1.13) * row.vCount) : 0
        // 将每行的小计相加得到总价格
        return total + totalValue
      }, 0)
    },
    payHandleInput(row) {
      // 只保留数字和一个小数点
      row.bjTotal = row.bjTotal.replace(/[^\d.]/g, '')
      // 只能输入一个小数点
      let dotIndex = row.bjTotal.indexOf('.')
      if (dotIndex !== -1) {
        row.bjTotal = row.bjTotal.slice(0, dotIndex + 1) + row.bjTotal.slice(dotIndex + 1).replace(/\./g, '')
      }
      // 只能输入到小数点后两位
      let parts = row.bjTotal.split('.')
      if (parts[1] && parts[1].length > 2) {
        row.bjTotal = parts[0] + '.' + parts[1].slice(0, 2)
      }
    },
    yes() {
      if (this.quotationInfo.bjTotal == null || this.quotationInfo.bjTotal === '') {
        this.$message.info("请填写您的报价金额")
        return
      }
      let now = new Date()
      if (new Date(this.info.gTimeon) < now) {
        if (new Date(this.info.gDeadline) < now) {
          this.$message.info("报价已经结束了~")
          return;
        }
        addQuotation(this.quotationInfo).then(res => {
          if (res.data.code == 200) {
            updatePro({
              "gfId": this.gfId,
              "hid": JSON.parse(sessionStorage.getItem('bsSupplier')).hid,
              "gfQstate": 1
            }).then(response => {
              if (response.data.code == 200) {
                this.$message.success("报价成功！")
                this.cancel()
              }
            })
          }
        })
      } else {
        this.$message.info("还没到报价开始时间~")
      }
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
</style>
