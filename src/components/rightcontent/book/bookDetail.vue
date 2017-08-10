<template>
  <!-- 预约详情 -->
	<div class="bookDetail">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/loginSuccess/book' }">
        <i class="el-icon-arrow-left"></i>
      </el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/loginSuccess/homepage' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>预约/预约详情</el-breadcrumb-item>
    </el-breadcrumb>

		<el-row :gutter="20">
      <el-col :span="6" class="basic-info">
        <el-col :span="24" class="user-img">
          <img :src="Koala" alt="用户头像" >
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
  				  <el-form-item>
  				    <span v-text="name"></span>
  				  </el-form-item>
  				</el-form>

      		<el-form ref="form" :model="form" class="user-basic-info" label-width="80px">
            <el-form-item label="性别：">
            	<span v-text="form.sex"></span>
            </el-form-item>
            <el-form-item label="年龄：">
            	<span v-text="form.age"></span>
            </el-form-item>
      		  <el-form-item label="电话：">
      		  	<span v-text="form.phone"></span>
      		  </el-form-item>
      		</el-form>
        </el-col>

        <el-col :span="24" class="body-info">
          <h2>最新测量信息 <el-button size="small" v-if="!editable" @click="editable = true" style="float:right;" icon="edit">编辑</el-button>
          </h2>

          <div class="user-info-form" v-if="editable">
          	<el-form ref="form" :model="newInfo" label-width="110px">
              <el-form-item label="身高：">
                <el-input v-model="newInfo.height"></el-input>
              </el-form-item>
              <el-form-item label="体重：">
                <el-input v-model="newInfo.weight"></el-input>
              </el-form-item>
              <el-form-item label="体温：">
                <el-input v-model="newInfo.temperature"></el-input>
              </el-form-item>
              <el-form-item label="血压：">
                <el-input v-model="newInfo.bp"></el-input>
              </el-form-item>
              <el-form-item label="心率：">
                <el-input v-model="newInfo.hr"></el-input>
              </el-form-item>
              <el-form-item class="special">
                <el-button type="primary" @click="submitForm()">提交</el-button>
                <el-button @click="resetForm()">取消</el-button>
              </el-form-item>
          	</el-form> 
          </div>

          <div class="user-info-text" v-else>
            <el-form label-position="right" label-width="110px" :model="newInfo">
              <el-form-item label="身高：">
                {{ newInfo.height }}
              </el-form-item>

              <el-form-item label="体重：">
                {{ newInfo.weight }}
              </el-form-item>

              <el-form-item label="体温：">
                {{ newInfo.temperature }}    
              </el-form-item>

              <el-form-item label="血压：">
                {{ newInfo.bp }} 
              </el-form-item>

              <el-form-item label="心率：">
                {{ newInfo.hr }}
              </el-form-item>   
            </el-form>
          </div>
    	  </el-col>
      </el-col>

      <el-col :span="18" class="bookDetailRight">
        <el-col :span="24" class="reserveInformation">
            <h2>预约信息</h2>
            <div class="bookInfo">
              <el-form ref="form" :model="bookInfos" label-width="110px">
                <el-form-item label="订单号：">
                  <span v-text="bookInfos.orderNum"></span>
                </el-form-item>
                <el-form-item label="订单生成时间：">
                  <span v-text="bookInfos.ofTime"></span>
                </el-form-item>
                <el-form-item label="预约渠道：">
                  <span v-text="bookInfos.bookingChannels"></span>
                </el-form-item>
                <el-form-item label="销售渠道：">
                  <span v-text="bookInfos.saleChannels"></span>
                  <el-button type="text" icon="document" size="small" style="float:right;">查看报备</el-button>
                </el-form-item>
              </el-form> 
            </div>
        </el-col>

        <el-col :span="24" class="inquiryInformation">
        	<h2>问诊信息</h2>
	        <div class="inquiryInfo">
              <el-form ref="form" :model="inquiryInfo" label-width="110px">
                <el-form-item label="就诊时间：">
                  <span v-text="inquiryInfo.clinicTime"></span>
                </el-form-item>
                <el-form-item label="就诊类型：">
                  <span v-text="inquiryInfo.clinicType"></span>
                </el-form-item>
                <el-form-item label="就诊医生：">
                  <span v-text="inquiryInfo.clinicDoctor"></span>
                </el-form-item>
                <el-form-item label="主诉：">
                  <span v-text="inquiryInfo.situation"></span>
                </el-form-item>
              </el-form> 
            </div>
        </el-col>

        <el-col :span="24" class="operateButton">
          <el-button type="success" @click="Modificationtime">修改就诊时间</el-button>
          <el-button type="success" @click="Modificationdoctor">修改就诊医生</el-button>
          <el-button type="default" @click="cancel">取消预约</el-button>
        </el-col>
            
        <el-dialog class="Modificationtimeform" title="修改预约时间" :visible.sync="timeFormVisible">
          <el-form ref="form" :model="alterTimeform" label-width="110px">
                <el-form-item label="患者：">
                  <span v-text="alterTimeform.patient"></span>
                </el-form-item>
                <el-form-item label="修改预约时间：">
                  <el-date-picker v-model="alterTimeform.value1" type="date" placeholder="选择日期">
                  </el-date-picker>
                  <el-time-picker is-range v-model="alterTimeform.value2" placeholder="选择时间范围">
                  </el-time-picker>
                </el-form-item>
                <el-col :span="24" class="operateButton">
                  <el-button @click="timeFormVisible = false">取消</el-button>
                  <el-button type="success" @click="submitTable1()">提交</el-button>
                </el-col>
          </el-form>
        </el-dialog>
        <el-dialog class="Modificationdoctorform" title="修改预约医生" :visible.sync="doctorFormVisible">
          <el-form ref="form" :model="alterDoctorform" label-width="110px">
            <el-form-item label="患者：">
              <span v-text="alterDoctorform.patient"></span>
            </el-form-item>
            <el-form-item label="修改预约医生：">
              <el-select v-model="alterDoctorform.room" placeholder="科室">
                <el-option label="儿科" value="children"></el-option>
                <el-option label="外科" value="waike"></el-option>
              </el-select>
              <el-select v-model="alterDoctorform.doctor" placeholder="医生">
                <el-option label="李医生" value="李医生"></el-option>
                <el-option label="王医生" value="王医生"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="修改预约时间：">
              <el-date-picker v-model="alterDoctorform.value1" type="datetime" placeholder="选择日期" :key="alterDoctorform.value1" format="yyyy-MM-dd" @on-change="alterDoctorform.value1=$event">
              </el-date-picker>
              <el-time-picker is-range v-model="alterDoctorform.value2" placeholder="选择时间范围">
              </el-time-picker>
            </el-form-item>
            <el-col :span="24" class="operateButton">
              <el-button @click="doctorFormVisible = false">取消</el-button>
              <el-button type="success" @click="submitTable2()">提交</el-button>
            </el-col>
          </el-form>
        </el-dialog>
      </el-col>
    </el-row>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        timeFormVisible: false,
        doctorFormVisible: false,
        editableT:false,
      	name:'李春华',
        editable:false,
        Koala:"../static/Koala.jpg",
        form:{
          sex:'女',
          age:'18',
          phone:'12337657567',
        },
        newInfo:{
        	height:"175",
        	weight:"50kg",
        	temperature:"37",
        	bp:"100",
        	hr:"300"
        },
        bookInfos:{
          orderNum:"pid10000001",
          ofTime:"2016-09-16 16:32:22",
          bookingChannels:"微信",
          saleChannels:"诊所介绍-张三"
        },
        inquiryInfo:{
          clinicTime:"2016-09-08",
          clinicType:"初诊",
          clinicDoctor:"王医生",
          situation:"发热，感到不舒服，之前几天一直睡不着睡不着睡不着……"
        },
        alterTimeform:{
          patient:"李春华",
          value1: '',
          value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        },
        alterDoctorform:{
          patient:"李春华",
          room:'',
          doctor:'',
          value1: '',
          value2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        }
        
    }
    },
    mounted() {
      var vm = this;
      vm.resetForm();
    },
    methods: {
        //提交表单
        submitForm() {
            var vm = this;
            vm.editable = false;
            var par = {
                "account":  vm.newInfo.account,
                "height": vm.newInfo.height,
                "weight": vm.newInfo.weight,
                "temperature": vm.newInfo.temperature,
                "dbp": vm.newInfo.dbp,
                "sbp": vm.newInfo.sbp,
            };
            console.log('修改信息入参为：',par)
        },
        //重置表单
        resetForm() {
            var vm = this;
            vm.editable = false;
         //   vm.newInfo = JSON.parse( JSON.stringify(vm.newInfo_init) ) ;
        },
        //修改就诊时间弹出框
        Modificationtime() {
          this.timeFormVisible = true;
          
        },
        //修改就诊医生弹出框
        Modificationdoctor() {
          this.doctorFormVisible = true;
          
        },
        //提交修改就诊时间
        submitTable1() {
        var vm = this;
        vm.timeFormVisible = false;
        this.inquiryInfo.clinicTime = this.alterTimeform.value1;
        },
        //提交修改就诊医生
        submitTable2() {
        var vm = this;
        vm.doctorFormVisible = false;
        this.inquiryInfo.clinicDoctor = this.alterDoctorform.doctor;
        },
        //发起退费确定
        handleCreateSubmit(){
          // var vm = this;
          // console.log('新增入参：',vm.temp,vm.list)

          // //这里作演示用，正式新增 请提交到接口
          // vm.list.push(vm.temp)
          // console.log('新增后',vm.list)
          this.returnPremiumVisible = false;
        },
  }
}
</script>

<style>
	.bookDetail{
  	width:82%;
  	padding:1% 2% 1%;
  	float:right;
    background: #fff;
	}
  .bookDetail span{
    /*font-weight: bold;*/
    font-size: 14px;
  }

	.user-img,.body-info,.reserveInformation,.inquiryInformation{
		border: 1px solid #dee1e2;
		background: #fff;
		border-radius: 10px;
		margin-bottom: 10px;
	}  
	.basic-info{
    padding: 20px;
    text-align: center;
    /*border: 1px solid #dee1e2;*/
    background: #f6f6f7;
  }
  .basic-info img{
    max-width: 200px;
    max-height: 200px;
    border-radius: 50%;
  }
  .user-basic-info{
  	border-top: 1px solid #dee1e2;
    text-align: initial;
    padding:0 40px !important;
  }
  .body-info{
    padding-bottom: 20px;
    border: 1px solid #dee1e2;
  }
  h2{
      margin: 0;
      font-weight: normal;
      padding: 10px 20px;
      border-bottom: 1px solid #dee1e2;
      .i_edit{
          float: right;
          font-size: 16px;
          color: #7ab8ed;
      }
  }
  .user-info-form .special .el-form-item__content{
      margin-left: inherit !important;
  }

  .user-info-form,.user-info-text{
      padding: 20px;
  }
  .bookDetailRight{
  	   padding: 20px;
      background: #f6f6f7;
  }
  .operateButton{
    text-align: center;
    margin-bottom: 10px;
  }
 </style>