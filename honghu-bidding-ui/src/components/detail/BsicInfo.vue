<template>
  <div>
    <el-form>
      <div class="box">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">鸿鹄招投标系统</el-breadcrumb-item>
          <el-breadcrumb-item v-if="infos">{{ infos.uTitle }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="grid-content">
          <h1 style="text-align: center" v-if="infos">{{ infos.uProject }}</h1>
          <el-row>
            <el-col :span="18">
              <div class="left-box">
                <p>招标单位 : <span class="span" v-if="infos">{{ infos.bidTender.sUnit }}</span></p>
                <p> 招标编号 : <span class="span" v-if="infos">{{ infos.bidTender.sCode }}</span></p>
                <p>公告截止时间 : <span class="span" v-if="infos">{{ infos.uEndTime }}</span></p>
              </div>
            </el-col>
            <el-col :span="6">
              <div class="right-box">
                <el-image
                    style="width: 290px;height: 78px;margin-top: 50px;margin-left: 70px;"
                    src="../images/arrow_02.png"
                ></el-image>
                <el-button class="btn-tb" @click="biao('tb')" v-if="types === 'bidNotice'" id="tb">我要投标</el-button>
                <el-button class="btn-tb" v-if="types === 'winning'" id="tb">投标截至</el-button>
                <el-dialog
                    :visible.sync="dialogVisible"
                    width="650px">
                  <Login @update:visible="handleDialogVisibleChange"></Login>
                </el-dialog>
              </div>
            </el-col>
          </el-row>
        </div>
        <!--    v-html="processedContent(infos.fjRemark)" v-if="infos"-->
        <div class="grid-content" style="height: auto">
          <el-tabs v-model="activeName" type="border-card">
            <el-tab-pane label="招标公告" id="t1" name="bidNotice">
              <el-empty :image-size="200" v-if="infos == null"></el-empty>
              <editor v-model="infos.fjRemark" v-if="infos" :min-height="192"/>
              <el-button type="primary" size="small" @click="biao('xz')">下载<i class="el-icon-download el-icon--right"></i>
              </el-button>
              <div v-for="(it,index) in files"
                   style="font-size: 13px;color: #409EFF;margin: 10px 10px;">
                {{ index + 1 }}、{{ it.name }}
              </div>
            </el-tab-pane>
            <el-tab-pane label="中标候选人公示" id="t2" name="candidate">
              <el-empty :image-size="200" v-if="candidateList.length == 0"></el-empty>
              <el-table v-if="candidateList.length > 0" :data="candidateList" :default-sort = "{prop: 'zRanking', order: 'ascending'}">
                <el-table-column label="序号" type="index" align="center" />
                <el-table-column label="供应商名称" align="center" prop="hName">
                  <template slot-scope="scope">
                    <span>{{ scope.row.hName || '——' }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="最终报价(万元)" align="center" prop="zFinal">
                  <template slot-scope="scope">
                    <span>{{ scope.row.zFinal || '——' }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="最终得分" align="center" prop="zFraction">
                  <template slot-scope="scope">
                    <span>{{ scope.row.zFraction || '——' }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="是否推荐" align="center" prop="zRecommend" >
                  <template slot-scope="scope">
                    <span>{{scope.row.zRecommend == 0?'是':'否'}}</span>
                  </template>
                </el-table-column>
                <el-table-column label="排名" align="center" prop="zRanking" sortable>
                  <template slot-scope="scope">
                    <span>{{ scope.row.zRanking || '——' }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="是否中标" align="center" prop="zBidder" >
                  <template slot-scope="scope">
                    <span>{{scope.row.zBidder == 0?'是':'否'}}</span>
                  </template>
                </el-table-column>
                <el-table-column label="详情" type="expand" width="180">
                  <template slot-scope="scope">
                    <el-form label-position="left" inline class="demo-table-expand">
                      <el-form-item label="供应商详情">
                        <el-form-item label="供应商名称">
                          <span>{{ scope.row.hName || '——' }}</span>
                        </el-form-item>
                        <el-form-item label="机构类型">
                          <span>{{ scope.row.bsSuppliers[0].hInstitution || '——' }}</span>
                        </el-form-item>
                        <el-form-item label="成立日期">
                          <span>{{ scope.row.bsSuppliers[0].hStartTime || '——' }}</span>
                        </el-form-item>
                        <el-form-item label="法人">
                          <span>{{ scope.row.bsSuppliers[0].hJuridical || '——' }}</span>
                        </el-form-item>
                        <el-form-item label="单位联系地址">
                          <span>{{ scope.row.bsSuppliers[0].hAddress || '——' }}</span>
                        </el-form-item>
                        <el-form-item label="经营范围">
                          <span>{{ scope.row.bsSuppliers[0].hRange || '——' }}</span>
                        </el-form-item>
                        <el-form-item label="注册资本">
                          <span>{{ scope.row.bsSuppliers[0].hCapital || '——' }}万元</span>
                        </el-form-item>
                        <el-form-item label="公司简介">
                          <span>{{ scope.row.bsSuppliers[0].hDesc || '——' }}</span>
                        </el-form-item>
                      </el-form-item>
                    </el-form>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="中标结果公示" id="t3" name="winning">
              <el-empty :image-size="200" v-if="winningList == null"></el-empty>
              <editor v-model="winningList.resultDesc" v-if="winningList" :min-height="192"/>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <HomeFloor></HomeFloor>
    </el-form>

    <el-dialog
        title="上传投标书"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
      <span>
          <el-form>
            <el-form-item label="附件" prop="fjAnnex">
                      <el-upload ref="upload" class="upload-demo" :limit="1" accept=".doc, .docx, .rar, .txt, .png, .jpg, .zip"
                                 :max-size="104857600"
                                 :action="upload.url"
                                 :on-change="changeFileLength"
                                 :headers="upload.headers" :file-list="upload.fileList" :before-remove="beforeRemove"
                                 :on-progress="handleFileUploadProgress"
                                 :before-upload="beforeUpload"
                                 :on-success="handleFileSuccess" :auto-upload="false">
                        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
<!--                                                <el-button style="margin-left: 10px;" size="small" type="success" :loading="upload.isUploading"-->
<!--                                                           @click="submitUpload">上传文件-->
<!--                                                </el-button>-->
                        <div slot="tip" class="el-upload__tip">只能上传.doc, .docx, .rar, .txt, .png, .jpg文件，且不超过5MB</div>
                      </el-upload>
            </el-form-item>
          </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitUpload">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>
<script>
import {getList, findAllByEndTime, findTwoInfo, downloadZip} from '@/api/home'
import {addSubmission,listSubmission,updateTender} from "@/api/submission";
import Login from '@/components/login/Login.vue'
import Editor from "@/components/Editor/index.vue";
import HomeFloor from "@/components/home/HomeFloor.vue";
import {getToken} from "@/utils/auth";
import modal from "@/plugins/modal";
import {listCandidate,suppCand} from "@/api/system/candidate";
import {getSupplier} from "@/api/system/supplier";
import {listResults,selectResultAndCandidate} from "@/api/system/winningResult";

export default {
  name: 'NoticeDetail',
  components: {HomeFloor, Editor, 'Login': Login},
  data() {
    return {
      types:null,
      sid:null,
      activeName:'bidNotice',
      centerDialogVisible: false,
      loading: false,
      infos: null,
      notices: null,
      supplier:null,
      submission:{
        sid:null,
        hid:null,
        fjFiles:null
      },
      queryParams: {
        uid: null,
        uTitle: null
      },
      //中标候选人
      queryParams2: {
        pageNum: 1,
        pageSize: 10,
        sid: null,
        zBname: null,
        zFinal: null,
        zFraction: null,
        zRecommend: null,
        zRanking: null,
        zSign: null,
        zCensor: null,
        zReview: null,
        zSummary: null,
        zBidder: null,
        zSendTime: null
      },
      queryParams3:{
        sid:0,
        sCode:null,
        sName:null,
        sWay: null,
        sMust:null,
        sSway:null,
        sType: null,
        sBudget:null,
        sUnit:null,
        sPerson:null,
        sPhone:null,
        email:null,
        sAddress:null,
        fjFiles:null,
        sProjectState:null,
        sLeader:null,
      },
      candidateList:[],
      winningList:null,
      files:[],
      dialogVisible: false,
      fullscreenLoading: false,
      //附件
      fileList:[],
      // 收集——上传文件的列表
      uploadFiles: [],
      // 收集——上传文件的个数
      filesLength: 0,
      //收集已上传的文件名
      fileNameList:[],
      urls:[],
      fjList:[],
      //未上传前文件列表
      noFiles:[],
      //未上传清除后文件列表
      noFiles2:[],
      // 上传参数
      upload: {
        // 上传的文件列表
        fileList: [],
        // 是否禁用上传
        isUploading: false,
        // 设置上传的请求头部
        headers: {
          Authorization: "Bearer " + getToken()
        },
        // 上传的地址
        url: process.env.VUE_APP_BASE_API + "/bidding/documents/upload1",
      }
    }
  },
  created() {
    this.types = this.$route.query.type;
    this.activeName = this.$route.query.type;
    if(this.activeName === 'winning'){
      this.queryParams2.sid = this.$route.query.sid;
      if(this.queryParams2.sid !== null){
        suppCand(this.queryParams2.sid).then(res=>{
          this.candidateList = res.data.data;
        });
        this.resultInfo(this.queryParams2.sid);
      }
    }
    this.queryParams.uid = this.$route.query.uid;//拿到参数----公告ID
    this.Info(this.queryParams.uid);
    this.openFullScreen1();
    this.hqInfo();
  },
  methods: {
    resultInfo(sid){
      selectResultAndCandidate(sid).then(res=>{
           this.winningList = res.data.data;
           console.log(res,"res resultand");
      });
    },
    hqInfo() {
      getList(this.queryParams).then(r => {
        console.log(r, "res");
        console.log(r.data.rows[0], "res");
        this.notices = r.data.rows[0];
        this.notices["results"] = r.data.rows[0].results;
        this.submission.sid = this.notices.sid;
      });
    },
    Info(uid) {
      findTwoInfo(uid).then(res => {
        this.infos = res.data.data;
        this.files =  JSON.parse(this.infos.fjAnnex);
      });
    },
    openFullScreen1() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    },
    biao(type) {
      if (sessionStorage.getItem('token') == null) {
        this.dialogVisible = true;
      } else {
        if (type === 'tb') {
          //投标
          this.submission.hid = JSON.parse(sessionStorage.getItem("bsSupplier")).hid;//拿到供应商id
          //判断该供应商是否已投标
          listSubmission(this.submission).then(res=>{
            if(res.data.rows.length  === 0){
              //1.打开上传标书
              this.centerDialogVisible = true;
            }else{
              modal.alertError("该项目您已参与投标，请勿反复投标！");
            }
          });
        } else if (type === 'xz') {
          //拿到登录后的供应商Id
          // console.log(JSON.parse(sessionStorage.getItem("bsSupplier")).hid)
          //拿到招标项目Id
          //下载
          this.notices.fjAnnex = null;
          this.notices.fjRemark = null;
          this.notices.hid = JSON.parse(sessionStorage.getItem("bsSupplier")).hid;//拿到供应商id
          var url = `http://localhost:8080/bidding/tenderFile/downloadZip?obj=${encodeURIComponent(JSON.stringify(this.notices))}`;
          const a = document.createElement('a')
          a.setAttribute('target', '_blank')
          a.setAttribute('href', url)
          a.click()
        }
      }
    },
    handleDialogVisibleChange(newValue) {
      this.dialogVisible = newValue;
    },
    // 文件提交处理
    submitUpload() {
      this.$refs.upload.submit();
    },
    // 文件上传中处理
    handleFileUploadProgress(event, file, fileList) {
      this.upload.isUploading = true;
    },
    // 修改当前文件列表长度
    changeFileLength(file, fileList){
      this.noFiles.push(file);
      this.filesLength = fileList.length;
    },
    // 文件上传成功处理
    handleFileSuccess(response, file, fileList) {
      const url =response.data.data.url;
      this.urls.push({id: this.urls.length + 1, url});
      this.fjList.push({id: this.fjList.length + 1, ...file });
      this.uploadFiles.push(file);
      //每上传完一个文件都会执行该函数，所以必须等上传完成后再提交表单
      if (this.uploadFiles.length == this.filesLength){
        //清空未上传文件列表
        this.noFiles2=[];
        let fjLists = this.fjList.map(obj=>{
          let newObj = obj;
          delete newObj.percentage;
          delete newObj.raw;
          delete newObj.status;
          delete newObj.response;
          obj.url = '';
          return newObj;
        });
        const result = fjLists.map((item, index) => {
          item.url = this.urls[index].url;
          return item;
        });
        this.submission.sid = this.notices.sid;//招标项目id
        this.submission.fjFiles = JSON.stringify(result);//投标书
        //添加投递标书供应商
        if(this.submission.sid != null && this.submission.fjFiles!=null){
          addSubmission(this.submission).then(res=>{
            this.submission.fjFiles = null;//投标书清空
            this.submission.hid = null;//投标书清空
            if(this.submission.sid !== null){
              //查询投标供应商人数
              listSubmission(this.submission).then(re=>{
                console.log(re,"listSubmission");
                if(re.data.rows.length > 2){
                  //修改项目状态
                  this.queryParams3.sid = re.data.rows[0].sid;
                  this.queryParams3.sProjectState = 4;//中标中
                  updateTender(this.queryParams3).then(re=>{});
                }
              });
            }
            modal.msgSuccess("投标成功！");
            this.submission.sid = null;//招标项目id清空
            this.upload.fileList = [];
          });
        }
      }
      this.centerDialogVisible = false;
      this.upload.isUploading = false;
    },
    beforeRemove(file, fileList) {
      this.noFiles2 =  this.noFiles.filter(f=>f.name !== file.name);
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    beforeUpload(file) {
      const isLt5M = file.size / 1024 / 1024 < 100;
      if (!isLt5M) {
        this.$message.error('文件大小不能超过100MB');
      }
      return isLt5M;
    }
  }
}
</script>
<style>
.box {
  width: 1400px;
  margin: 10px auto;
}

.grid-content {
  height: 220px;
  width: 1400px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}

.left-box {
  width: 800px;
  height: auto;
  margin-top: 40px;
  margin-left: 60px;
  font-size: 15px;

  .span {
    color: #409EFF;
  }

  p {
    margin: 10px 0;
  }
}

.btn-tb {
  position: absolute;
  top: 65px;
  left: 118px;
  color: #409EFF;
  z-index: 999;
}
.btn-tb2{
  position: absolute;
  top: 65px;
  left: 118px;
  color: #409EFF;
}


.right-box {
  position: relative;
}
#t1,#t2,#t3{
  font-size: 17px
}
 .demo-table-expand {
   font-size: 0;
 }
.demo-table-expand label {
  width: 120px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 80%;
}
</style>
