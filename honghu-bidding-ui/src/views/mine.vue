<template>
  <div class="app-container">
    <div style="height: 158px" class="tou">
      <h2 style="text-align: center;padding: 52px 0 16px;font-size: 26px">供应商中心</h2>
      <el-button type="primary" icon="el-icon-arrow-left" @click="cancel" style="margin-left: 20px">返回</el-button>
    </div>
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick" style="padding: 10px 25px 20px">
      <el-tab-pane label="基础资料" name="first">
        <el-form ref="form" :model="bs_supplier">
          <div style="padding: 20px 100px">
            <el-descriptions class="margin-top" size="medium" :column="2" border>
              <el-descriptions-item label-style="text-align: center">
                <template slot="label">
                  供应商名称
                </template>
                <el-input type="text" v-model="bs_supplier.hName" disabled/>
              </el-descriptions-item>
              <el-descriptions-item label-style="text-align: center">
                <template slot="label">
                  统一社会信用代码
                </template>
                <el-input type="text" v-model="bs_supplier.hCreditCode" disabled/>
              </el-descriptions-item>
              <el-descriptions-item label-style="text-align: center">
                <template slot="label">
                  单位注册地
                </template>
                <el-input type="text" v-model="bs_supplier.hIncorporation" clearable/>
              </el-descriptions-item>
              <el-descriptions-item label-style="text-align: center">
                <template slot="label">
                  机构类型
                </template>
                <el-input type="text" v-model="bs_supplier.hInstitution" clearable/>
              </el-descriptions-item>
              <el-descriptions-item label-style="text-align: center">
                <template slot="label">
                  企业性质
                </template>
                <el-input type="text" v-model="bs_supplier.hQuality" clearable/>
              </el-descriptions-item>
              <el-descriptions-item label-style="text-align: center">
                <template slot="label">
                  成立日期
                </template>
                <el-date-picker clearable
                                v-model="bs_supplier.hStartTime"
                                type="date"
                                value-format="yyyy-MM-dd"
                                placeholder="请选择标注获取时间"
                                style="width: 340px">
                </el-date-picker>
              </el-descriptions-item>
              <el-descriptions-item label-style="text-align: center">
                <template slot="label">
                  法人/负责人
                </template>
                <el-input type="text" v-model="bs_supplier.hJuridical" disabled/>
              </el-descriptions-item>
              <el-descriptions-item label-style="text-align: center">
                <template slot="label">
                  法人/负责人身份证号
                </template>
                <el-input type="text" v-model="bs_supplier.hJuridicalIdentity" disabled/>
              </el-descriptions-item>
              <el-descriptions-item label-style="text-align: center">
                <template slot="label">
                  单位联系地址
                </template>
                <el-input type="textarea" v-model="bs_supplier.hAddress"/>
              </el-descriptions-item>
              <el-descriptions-item label-style="text-align: center">
                <template slot="label">
                  公司简介
                </template>
                <el-input type="textarea" v-model="bs_supplier.hDesc"/>
              </el-descriptions-item>
              <el-descriptions-item label-style="text-align: center">
                <template slot="label">
                  营业执照扫描件
                </template>
                <div class="demo-image__preview">
                  <el-image
                      style="width: 100px; height: 100px"
                      fit="contain"
                      :src="hCopies"
                      :preview-src-list="hCopiesList">
                  </el-image>
                </div>
              </el-descriptions-item>
              <el-descriptions-item label-style="text-align: center">
                <template slot="label">
                  法人/负责人身份证扫描件
                </template>
                <div class="demo-image__preview">
                  <el-image
                      style="width: 100px; height: 100px"
                      :src="idCardCopy"
                      fit="contain"
                      :preview-src-list="idCardCopyList">
                  </el-image>
                </div>
              </el-descriptions-item>
            </el-descriptions>
          </div>
          <div style="padding:0 100px;text-align: center">
            <p style="color: red;font-size: 12px;text-align: left">注: 开票信息专用</p>
            <el-descriptions class="margin-top" size="medium" :column="2" border>
              <el-descriptions-item label-style="text-align: center">
                <template slot="label">
                  开户行
                </template>
                <el-input type="text" v-model="bs_supplier.hBank" clearable/>
              </el-descriptions-item>
              <el-descriptions-item label-style="text-align: center">
                <template slot="label">
                  银行账号
                </template>
                <el-input type="text" v-model="bs_supplier.hAccount" clearable/>
              </el-descriptions-item>
              <el-descriptions-item label-style="text-align: center">
                <template slot="label">
                  开户行地址
                </template>
                <el-input type="text" v-model="bs_supplier.hBankAddress" clearable/>
              </el-descriptions-item>
              <el-descriptions-item label-style="text-align: center">
                <template slot="label">
                  单位注册电话
                </template>
                <el-input type="text" v-model="bs_supplier.hSignPhone" clearable/>
              </el-descriptions-item>
              <el-descriptions-item label-style="text-align: center">
                <template slot="label">
                  注册资本（万元）
                </template>
                <el-input v-model="bs_supplier.hCapital" @blur="payHandleBlur(bs_supplier)"
                          @input="payHandleInput(bs_supplier)" clearable/>
              </el-descriptions-item>
              <el-descriptions-item :span="1" label-style="text-align: center">
                <template slot="label">
                  实缴资本（万元）
                </template>
                <el-input v-model="bs_supplier.hActualCapital" @blur="payHandleBlur1(bs_supplier)"
                          @input="payHandleInput1(bs_supplier)" clearable/>
              </el-descriptions-item>
            </el-descriptions>
          </div>
        </el-form>
        <el-row style="text-align: center;margin-top: 20px">
          <el-button type="primary" @click="yes">确定</el-button>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="我的合同" name="second">
        <div style="padding: 20px 100px">
          <el-form :model="contract" ref="queryForm" size="large" :inline="true"
                   label-width="68px" style="margin-bottom: 20px">
            <el-form-item label="合同名称" prop="eHname">
              <el-input
                  v-model="contract.eHname"
                  placeholder="请输入合同名称"
                  clearable
                  @keyup.enter.native="handleQuery"
                  style="width: 400px"
              />
            </el-form-item>
            <el-form-item label="状态" prop="oHstatus" label-width="110px">
              <el-select v-model="contract.oHstatus" placeholder="请选择状态"
                         @keyup.enter.native="handleQuery" style="width: 400px">
                <el-option value="1" label="待供方确认">
                  待供方确认
                </el-option>
                <el-option value="2" label="待签订">
                  待签订
                </el-option>
                <el-option value="3" label="生效合同">
                  生效合同
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" icon="el-icon-search" size="medium" @click="handleQuery"
                         style="margin-left: 30px">搜索
              </el-button>
              <el-button icon="el-icon-refresh" size="medium" @click="resetQuery">重置</el-button>
            </el-form-item>
          </el-form>
          <el-table
              :data="contracts"
              style="width: 100%;border-radius: 10px 10px 0 0"
              stripe
              v-loading="loading">
            <el-table-column
                type="index"
                label="序号">
            </el-table-column>
            <el-table-column
                property="eHcode"
                label="合同编号">
            </el-table-column>
            <el-table-column
                property="eHname"
                label="合同名称">
            </el-table-column>
            <el-table-column
                property="bsSupplier.hName"
                label="供应商">
            </el-table-column>
            <el-table-column
                property="createBy"
                label="申请人">
            </el-table-column>
            <el-table-column
                property="createTime"
                label="创建日期">
            </el-table-column>
            <el-table-column
                property="eDeliveryTime"
                label="交付日期">
            </el-table-column>
            <el-table-column
                property="eAmount"
                label="合同金额">
              <template slot-scope="scope">
                {{ scope.row.eAmount.toFixed(2) }}元
              </template>
            </el-table-column>
            <el-table-column
                property="eType"
                label="合同类型">
            </el-table-column>
            <el-table-column
                property="eStartdate"
                label="合同生效日期">
            </el-table-column>
            <el-table-column
                property="eEnddate"
                label="合同结束日期">
            </el-table-column>
            <el-table-column
                property="oHstatus"
                label="状态">
              <template slot-scope="scope">
                <el-tag size="small" v-if="scope.row.oHstatus == 1" type="danger">待供方确认
                </el-tag>
                <el-tag size="small" v-if="scope.row.oHstatus == 2" type="primary">待签订
                </el-tag>
                <el-tag size="small" v-if="scope.row.oHstatus == 3 && scope.row.eCancel == 0" type="success">生效合同
                </el-tag>
                <el-tag size="small" v-if="scope.row.oHstatus == 3 && scope.row.eCancel == 1" type="info">作废合同
                </el-tag>
              </template>
            </el-table-column>
          </el-table>
          <pagination
              v-show="total1>0"
              :total="total1"
              :page.sync="contract.pageNum"
              :limit.sync="contract.pageSize"
              @pagination="myContract"
              style="text-align: right"
          />
        </div>
      </el-tab-pane>
      <el-tab-pane label="我的报价" name="third">
        <div style="padding: 20px 100px">
          <el-tabs v-model="activeName1" type="card" tab-position="left" @tab-click="handleClick1">
            <el-tab-pane label="可参与项目" name="one">
              <el-form :model="nobid" ref="queryForm1" size="large" :inline="true"
                       label-width="68px" style="margin-bottom: 20px">
                <el-form-item label="采购项目名称" prop="gName" label-width="100px">
                  <el-input
                      v-model="nobid.gName"
                      placeholder="请输入采购项目名称"
                      clearable
                      @keyup.enter.native="handleQuery1"
                      style="width: 400px"
                  />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" icon="el-icon-search" size="medium" @click="handleQuery1"
                             style="margin-left: 30px">搜索
                  </el-button>
                  <el-button icon="el-icon-refresh" size="medium" @click="resetQuery1">重置</el-button>
                </el-form-item>
              </el-form>
              <el-table
                  :data="nobids"
                  style="width: 100%;border-radius: 10px 10px 0 0"
                  stripe
                  v-loading="loading">
                <el-table-column
                    type="index"
                    label="序号"
                    width="120px">
                </el-table-column>
                <el-table-column
                    property="gCode"
                    label="采购项目编号">
                </el-table-column>
                <el-table-column
                    property="gName"
                    label="采购项目名称">
                </el-table-column>
                <el-table-column
                    property="gTimeon"
                    label="开始时间">
                </el-table-column>
                <el-table-column
                    property="gDeadline"
                    label="报价截止时间">
                </el-table-column>
                <el-table-column
                    label="操作">
                  <template slot-scope="scope">
                    <el-button type="primary" @click="join(scope.row)">参与项目</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <pagination
                  v-show="total2>0"
                  :total="total2"
                  :page.sync="nobid.pageNum"
                  :limit.sync="nobid.pageSize"
                  @pagination="listNoBid"
                  style="text-align: right"
              />
            </el-tab-pane>
            <el-tab-pane label="正参与项目" name="two">
              <el-form :model="nobidSupNon" ref="queryForm2" size="large" :inline="true"
                       label-width="68px" style="margin-bottom: 20px">
                <el-form-item label="采购项目名称" prop="gfName" label-width="100px">
                  <el-input
                      v-model="nobidSupNon.gfName"
                      placeholder="请输入采购项目名称"
                      clearable
                      @keyup.enter.native="handleQuery2"
                      style="width: 400px"
                  />
                </el-form-item>
                <el-form-item label="报价状态" prop="gfQstate" label-width="110px">
                  <el-select v-model="nobidSupNon.gfQstate" placeholder="请选择报价状态"
                             @keyup.enter.native="handleQuery2" style="width: 400px">
                    <el-option value="0" label="未报价">
                      未报价
                    </el-option>
                    <el-option value="1" label="已报价">
                      已报价
                    </el-option>
                    <el-option value="2" label="撤销报价">
                      撤销报价
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" icon="el-icon-search" size="medium" @click="handleQuery2"
                             style="margin-left: 30px">搜索
                  </el-button>
                  <el-button icon="el-icon-refresh" size="medium" @click="resetQuery2">重置</el-button>
                </el-form-item>
              </el-form>
              <el-table
                  :data="nobidSupNons"
                  style="width: 100%;border-radius: 10px 10px 0 0"
                  stripe
                  v-loading="loading">
                <el-table-column
                    type="index"
                    label="序号"
                    width="120px">
                </el-table-column>
                <el-table-column
                    property="gfId"
                    label="采购项目编号">
                </el-table-column>
                <el-table-column
                    property="gfName"
                    label="采购项目名称">
                </el-table-column>
                <el-table-column
                    property="gfQtime"
                    label="报价截止时间">
                </el-table-column>
                <el-table-column
                    label="报价状态">
                  <template slot-scope="scope">
                    <el-tag v-if="scope.row.gfQstate == 0">未报价</el-tag>
                    <el-tag type="success" v-if="scope.row.gfQstate == 1">已报价</el-tag>
                    <el-tag type="info" v-if="scope.row.gfQstate == 2">撤销报价</el-tag>
                  </template>
                </el-table-column>
                <el-table-column
                    label="操作">
                  <template slot-scope="scope">
                    <router-link :to="'/quotation?gfId='+scope.row.gfId+'&state='+scope.row.gfQstate">
                      <el-button type="primary" v-if="scope.row.gfQstate == 0 || scope.row.gfQstate == 2">
                        报价
                      </el-button>
                    </router-link>
                    <el-button type="primary" @click="che(scope.row)" v-if="scope.row.gfQstate == 1">
                      报价撤销
                    </el-button>
                    <router-link :to="'/quotation?gfId='+scope.row.gfId+'&state='+scope.row.gfQstate">
                      <el-button type="primary" v-if="scope.row.gfQstate == 1" style="margin-left: 10px">
                        查看报价
                      </el-button>
                    </router-link>
                  </template>
                </el-table-column>
              </el-table>
              <pagination
                  v-show="total3>0"
                  :total="total3"
                  :page.sync="nobidSupNon.pageNum"
                  :limit.sync="nobidSupNon.pageSize"
                  @pagination="listNoSupNonBid"
                  style="text-align: right"
              />
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-tab-pane>
      <el-tab-pane label="我的投标" name="fourth">
        <div style="padding: 20px 100px">
          <el-form :model="submission" ref="queryForm3" size="large" :inline="true"
                   label-width="68px" style="margin-bottom: 20px">
            <el-form-item label="招标项目名称" prop="sName" label-width="100px">
              <el-input
                  v-model="submission.sName"
                  placeholder="请输入招标项目名称"
                  clearable
                  @keyup.enter.native="handleQuery3"
                  style="width: 400px"
              />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" icon="el-icon-search" size="medium" @click="handleQuery3"
                         style="margin-left: 30px">搜索
              </el-button>
              <el-button icon="el-icon-refresh" size="medium" @click="resetQuery3">重置</el-button>
            </el-form-item>
          </el-form>
          <el-table
              :data="submissions"
              style="width: 100%;border-radius: 10px 10px 0 0"
              stripe
              v-loading="loading">
            <el-table-column
                type="index"
                label="序号"
                width="120px">
            </el-table-column>
            <el-table-column
                property="sCode"
                label="招标项目编号">
            </el-table-column>
            <el-table-column
                property="sName"
                label="招标项目名称">
            </el-table-column>
            <el-table-column
                label="招标方式">
              <template slot-scope="scope">
                <span v-if="scope.row.sWay == 1">公开招标</span>
                <span v-if="scope.row.sWay == 2">邀请招标</span>
              </template>
            </el-table-column>
            <el-table-column
                property="createTime"
                label="投标开始时间">
            </el-table-column>
            <el-table-column
                property="uEndTime"
                label="投标截止时间">
            </el-table-column>
            <el-table-column
                property="tdSuccessTime"
                label="成功递交时间">
            </el-table-column>
            <el-table-column
                label="投标状态">
              <template slot-scope="scope">
                <el-tag type="success" v-if="scope.row.tdStatus == 0">成功</el-tag>
              </template>
            </el-table-column>
            <el-table-column
                label="上传标书">
              <template slot-scope="scope">
                <p v-for="i in JSON.parse(scope.row.fjFiles)" v-if="scope.row.fjFiles != null">
                  <a :href="i.url" target="_blank">{{ i.name }}</a>
                </p>
                <p v-if="scope.row.fjFiles == null" style="color: #409EFF">---</p>
              </template>
            </el-table-column>
            <el-table-column
                label="操作">
              <template slot-scope="scope">
                <el-button type="primary" v-if="scope.row.fjFiles != null"
                           @click="download(JSON.parse(scope.row.fjFiles))">
                  下载附件<i class="el-icon-download"></i>
                </el-button>
                <p v-if="scope.row.fjFiles == null" style="color: #409EFF">---</p>
              </template>
            </el-table-column>
          </el-table>
          <pagination
              v-show="total4>0"
              :total="total4"
              :page.sync="submission.pageNum"
              :limit.sync="submission.pageSize"
              @pagination="listSubmission"
              style="text-align: right"
          />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

import {getSupplier, listNoBid, listSubmission, updateSupplier} from "@/api/system/supplier";
import {listContract} from "@/api/system/cm";
import Pagination from "@/components/Pagination/index.vue";
import {addPro, check, listPro, updatePro} from "@/api/system/nobidSupNonPro";
import {updateQuotation} from "@/api/system/quotation";

export default {
  name: "mine",
  components: {Pagination},
  data() {
    return {
      // 遮罩层
      loading: true,
      activeName: 'first',
      activeName1: 'one',
      contracts: [],
      nobids: [],
      nobidSupNons: [],
      submissions: [],
      total1: 0,
      total2: 0,
      total3: 0,
      total4: 0,
      submission: {
        hid: JSON.parse(sessionStorage.getItem('bsSupplier')).hid,
        sName: null,
        pageNum: 1,
        pageSize: 10
      },
      nobid: {
        gName: null,
        pageNum: 1,
        pageSize: 10
      },
      nobidSupNon: {
        hid: JSON.parse(sessionStorage.getItem('bsSupplier')).hid,
        gfName: null,
        gfQstate: null,
        pageNum: 1,
        pageSize: 10
      },
      contract: {
        hid: JSON.parse(sessionStorage.getItem('bsSupplier')).hid,
        pageNum: 1,
        pageSize: 10,
        eHname: null,
        oHstatus: null
      },
      bs_supplier: {
        hid: JSON.parse(sessionStorage.getItem('bsSupplier')).hid,
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
        hJuridicalCopies: null,
        hExpiration: null,
        hBank: null,
        hAccount: null,
        hBankAddress: null,
        hSignPhone: '',
        hCapital: null,
        hActualCapital: null,
        hProve: null,
        fState: null,
        fStatus: null
      },
      //营业执照
      hCopies: '',
      hCopiesList: [],
      //法人身份证
      idCardCopy: '',
      idCardCopyList: [],
    }
  },
  created() {
    if (sessionStorage.getItem('token') == null) {
      this.$router.push('/')
    }
    if (sessionStorage.getItem('m1') != null) {
      //标签页
      this.activeName = sessionStorage.getItem('m1')
      sessionStorage.removeItem('m1')

      if (sessionStorage.getItem('n1') != null && sessionStorage.getItem('s1') != null) {
        this.contract.pageNum = JSON.parse(sessionStorage.getItem('n1'))
        this.contract.pageSize = JSON.parse(sessionStorage.getItem('s1'))

        sessionStorage.removeItem('n1')
        sessionStorage.removeItem('s1')
      }
      if (sessionStorage.getItem('m2') != null && sessionStorage.getItem('n2') != null && sessionStorage.getItem('s2') != null) {
        this.nobid.pageNum = JSON.parse(sessionStorage.getItem('n2'))
        this.nobid.pageSize = JSON.parse(sessionStorage.getItem('s2'))
        this.activeName1 = sessionStorage.getItem('m2')

        sessionStorage.removeItem('n2')
        sessionStorage.removeItem('s2')
        sessionStorage.removeItem('m2')
      }
      if (sessionStorage.getItem('m3') != null && sessionStorage.getItem('n3') != null && sessionStorage.getItem('s3') != null) {
        this.nobidSupNon.pageNum = JSON.parse(sessionStorage.getItem('n3'))
        this.nobidSupNon.pageSize = JSON.parse(sessionStorage.getItem('s3'))
        this.activeName1 = sessionStorage.getItem('m3')

        sessionStorage.removeItem('n3')
        sessionStorage.removeItem('s3')
        sessionStorage.removeItem('m3')
      }
      if (sessionStorage.getItem('n4') != null && sessionStorage.getItem('s4') != null) {
        this.submission.pageNum = JSON.parse(sessionStorage.getItem('n4'))
        this.submission.pageSize = JSON.parse(sessionStorage.getItem('s4'))

        sessionStorage.removeItem('n4')
        sessionStorage.removeItem('s4')
      }
    }
    this.query()
    this.myContract()
    this.listNoBid()
    this.listNoSupNonBid()
    this.listSubmission()
  },
  beforeRouteLeave(to, from, next) {
    sessionStorage.setItem('m1', this.activeName)
    if (this.activeName == 'second') {
      //  合同
      sessionStorage.setItem('n1', this.contract.pageNum)
      sessionStorage.setItem('s1', this.contract.pageSize)
    } else if (this.activeName == 'third' && this.activeName1 == 'one') {
      //  报价
      sessionStorage.setItem('m2', this.activeName1)
      sessionStorage.setItem('n2', this.nobid.pageNum)
      sessionStorage.setItem('s2', this.nobid.pageSize)
    } else if (this.activeName == 'third' && this.activeName1 == 'two') {
      //  报价
      sessionStorage.setItem('m3', this.activeName1)
      sessionStorage.setItem('n3', this.nobidSupNon.pageNum)
      sessionStorage.setItem('s3', this.nobidSupNon.pageSize)
    } else if (this.activeName == 'fourth') {
      //  投标
      sessionStorage.setItem('n4', this.submission.pageNum)
      sessionStorage.setItem('s4', this.submission.pageSize)
    }
    next(true)
  },
  methods: {
    download(fileUrls) {
      if (fileUrls.length == 0) {
        this.$message.error("没有附件可下载，请上传附件！！")
        return;
      }
      let files = fileUrls.map(function (obj) {
        return obj.url
      })
      let urls = files.join(',')
      let name = encodeURIComponent(urls);
      // var url = `http://localhost:8080/basic/supplier/downloadZip?url=${name}`;
      var url = `http://47.95.66.70/prod-api/basic/supplier/downloadZip?url=${name}`;
      const a = document.createElement('a')
      a.setAttribute('target', '_blank')
      a.setAttribute('href', url)
      a.click()
    },
    handleClick(tab, event) {
      console.log(tab, event)
    },
    handleClick1(tab, event) {
      console.log(tab, event)
    },
    cancel() {
      this.$router.back()
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.contract.pageNum = 1;
      this.myContract();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.$refs.queryForm.resetFields()
      this.handleQuery();
    },
    /** 搜索按钮操作 */
    handleQuery1() {
      this.nobid.pageNum = 1;
      this.listNoBid();
    },
    /** 重置按钮操作 */
    resetQuery1() {
      this.$refs.queryForm1.resetFields()
      this.handleQuery1();
    },
    /** 搜索按钮操作 */
    handleQuery2() {
      this.nobidSupNon.pageNum = 1;
      this.listNoSupNonBid();
    },
    /** 重置按钮操作 */
    resetQuery2() {
      this.$refs.queryForm2.resetFields()
      this.handleQuery2();
    },
    /** 搜索按钮操作 */
    handleQuery3() {
      this.submission.pageNum = 1;
      this.listSubmission();
    },
    /** 重置按钮操作 */
    resetQuery3() {
      this.$refs.queryForm3.resetFields()
      this.handleQuery3();
    },
    listSubmission() {
      this.loading = true;
      listSubmission(this.submission).then(res => {
        console.log(res)
        this.submissions = res.data.rows;
        this.total4 = res.data.total;
        this.loading = false;
      })
    },
    listNoSupNonBid() {
      this.loading = true;
      listPro(this.nobidSupNon).then(res => {
        this.nobidSupNons = res.data.rows;
        this.total3 = res.data.total;
        this.loading = false;
      })
    },
    listNoBid() {
      this.loading = true;
      listNoBid(this.nobid).then(res => {
        this.nobids = res.data.rows;
        this.total2 = res.data.total;
        this.loading = false;
      })
    },
    myContract() {
      this.loading = true;
      listContract(this.contract).then(res => {
        console.log(res)
        this.contracts = res.data.rows;
        this.total1 = res.data.total;
        this.loading = false;
      })
    },
    join(param) {
      check({"hid": this.bs_supplier.hid, "gf_id": param.gCode}).then(res => {
        console.log(res)
        if (res.data.msg == 'yes') {
          //可以参加
          addPro({
            "gfId": param.gCode,
            "hid": this.bs_supplier.hid,
            "gfName": param.gName,
            "gfQtime": param.gDeadline,
            "gfQstate": 0
          }).then(response => {
            if (response.data.code == 200) {
              this.$message.success("参加成功！")
              this.listNoSupNonBid()
            }
          })
        } else {
          this.$message.info("您正在参加该项目哦")
        }
      })
    },
    /** 基础资料 */
    query() {
      getSupplier(this.bs_supplier.hid).then(response => {
        console.log(response)
        this.bs_supplier.hName = response.data.data.hName
        this.bs_supplier.hCreditCode = response.data.data.hCreditCode
        this.bs_supplier.hIncorporation = response.data.data.hIncorporation
        this.bs_supplier.hInstitution = response.data.data.hInstitution
        this.bs_supplier.hQuality = response.data.data.hQuality
        this.bs_supplier.hStartTime = response.data.data.hStartTime
        this.bs_supplier.hJuridical = response.data.data.hJuridical
        this.bs_supplier.hJuridicalIdentity = response.data.data.hJuridicalIdentity
        this.bs_supplier.hAddress = response.data.data.hAddress
        this.bs_supplier.hDesc = response.data.data.hDesc
        this.bs_supplier.hBank = response.data.data.hBank
        this.bs_supplier.hBankAddress = response.data.data.hBankAddress
        this.bs_supplier.hSignPhone = response.data.data.hSignPhone
        this.bs_supplier.hCapital = response.data.data.hCapital
        this.bs_supplier.hActualCapital = response.data.data.hActualCapital
        this.bs_supplier.fState = response.data.data.fState
        this.bs_supplier.hAccount = response.data.data.hAccount
        this.bs_supplier.fStatus = response.data.data.fStatus
        this.hCopies = JSON.parse(response.data.data.hCopies)[0].url
        this.hCopiesList.push(JSON.parse(response.data.data.hCopies)[0].url)
        this.idCardCopy = JSON.parse(response.data.data.hJuridicalCopies)[0].url
        for (let i = 0; i < JSON.parse(response.data.data.hJuridicalCopies).length; i++) {
          this.idCardCopyList.push(JSON.parse(response.data.data.hJuridicalCopies)[i].url)
        }
      });
    },
    payHandleBlur(row) {
      if (row.hCapital) {
        row.hCapital = parseFloat(row.hCapital).toFixed(0)
      }
    },
    payHandleInput(row) {
      // 只保留数字和一个小数点
      row.hCapital = row.hCapital.replace(/[^\d]/g, '')
      // 只能输入一个小数点
      let dotIndex = row.hCapital.indexOf('.')
      if (dotIndex !== -1) {
        row.hCapital = row.hCapital.slice(0, dotIndex + 1) + row.hCapital.slice(dotIndex + 1).replace(/\./g, '')
      }
      // 只能输入到小数点后两位
      let parts = row.hCapital.split('.')
      if (parts[1] && parts[1].length > 2) {
        row.hCapital = parts[0] + '.' + parts[1].slice(0, 2)
      }
    },
    payHandleBlur1(row) {
      if (row.hActualCapital) {
        row.hActualCapital = parseFloat(row.hActualCapital).toFixed(0)
      }
    },
    payHandleInput1(row) {
      // 只保留数字和一个小数点
      row.hActualCapital = row.hActualCapital.replace(/[^\d]/g, '')
      // 只能输入一个小数点
      let dotIndex = row.hActualCapital.indexOf('.')
      if (dotIndex !== -1) {
        row.hActualCapital = row.hActualCapital.slice(0, dotIndex + 1) + row.hActualCapital.slice(dotIndex + 1).replace(/\./g, '')
      }
      // 只能输入到小数点后两位
      let parts = row.hActualCapital.split('.')
      if (parts[1] && parts[1].length > 2) {
        row.hActualCapital = parts[0] + '.' + parts[1].slice(0, 2)
      }
    },
    yes() {
      const test = /^1[3456789]\d{9}$/;
      if (this.bs_supplier.hSignPhone != null && this.bs_supplier.hSignPhone != '' && !test.test(this.bs_supplier.hSignPhone)) {
        this.$message.warning('联系方式格式错误')
        return;
      }
      updateSupplier(this.bs_supplier).then(res => {
        if (res.data.code == 200) {
          this.$message.success(res.data.msg)
        }
        this.query()
      })
    },
    che(row) {
      this.$confirm("是否撤销该报价?", '消息', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        updateQuotation({"gfId": row.gfId, "bjHid": row.hid, "isDelete": 1}).then(res => {
          if (res.data.code == 200) {
            updatePro({"gfId": row.gfId, "hid": row.hid, "gfQstate": 2}).then(response => {
              if (response.data.code == 200) {
                this.$message.success("撤销成功")
                this.listNoSupNonBid()
              }
            })
          }
        })
      }).catch(() => {
        return false
      });
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

.app-container {
  background-color: #FFFFFF;
}
</style>
