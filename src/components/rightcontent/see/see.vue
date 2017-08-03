<template>
	<div class="formedit">
		<el-row :gutter="20">
          <el-col :span="6" class="basic-info">
              <el-col :span="24" class="user-img">
                <img :src="Koala" alt="用户头像" >
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
				  <el-form-item>
				    <span v-html="name"></span>
				  </el-form-item>
				  <el-form-item>
				    <i class=" el-icon-document "></i>
				    <span class="record">
				    <router-link to="/homepage">查看档案</router-link>
				    </span>
				  </el-form-item>
				</el-form>

				<el-form ref="form" :model="form" class="user-basic-info"label-width="80px">
                  <el-form-item label="性别：" style="display: inline-block;">
                    <span v-html="sex"></span>
                  </el-form-item>
                  <el-form-item label="年龄：" style="display: inline-block;">
                    <span v-html="age"></span>
                  </el-form-item>
        		  <el-form-item label="电话：">
        		  	<span v-html="phone"></span>
        		  </el-form-item>
        		  <el-form-item label="备注：">
        		  	<span v-html="remarks"></span>
        		  </el-form-item>
        		</el-form>
              </el-col>

              <el-col :span="24" class="body-info">
                  <h2>本次测量信息 <el-button size="small" v-if="!editable" @click="editable = true" style="float:right;" icon="edit">编辑</el-button> </h2>

                  <div class="user-info-form" v-if="editable">
                      <el-form ref="form" :model="personalInfo" label-width="100px">
                          <el-form-item label="身高：">
                            <el-input v-model="personalInfo.height"></el-input>
                          </el-form-item>
                          <el-form-item label="体重：">
                            <el-input v-model="personalInfo.weight"></el-input>
                          </el-form-item>
                          <el-form-item label="体温：">
                            <el-input v-model="personalInfo.temperature"></el-input>
                          </el-form-item>
                          <el-form-item label="舒张压：">
                            <el-input v-model="personalInfo.dbp"></el-input>
                          </el-form-item>
                          <el-form-item label="收缩压：">
                            <el-input v-model="personalInfo.sbp"></el-input>
                          </el-form-item>
                          <el-form-item>
                            <el-button type="primary" @click="submitForm()">提交</el-button>
                            <el-button @click="resetForm()">取消</el-button>
                          </el-form-item>
                      </el-form> 
                  </div>

                  <div class="user-info-text" v-else>
                        <el-form label-position="right" label-width="100px" :model="personalInfo">

                              <el-form-item label="身高：">
                                {{ personalInfo.height }}
                              </el-form-item>
                              <el-form-item label="体重：">
                                {{ personalInfo.weight }}
                               
                              </el-form-item>
                              <el-form-item label="体温：">
                                {{ personalInfo.temperature }}
                                   
                              </el-form-item>
                              <el-form-item label="舒张压：">
                                {{ personalInfo.dbp }}
                               
                              </el-form-item>
                              <el-form-item label="收缩压：">
                                {{ personalInfo.sbp }}
                               
                              </el-form-item>

                             
                        </el-form>
                    </div>
          </el-col>

          <el-col :span="24" class="past-case">
          	<h2>过往病历</h2>
          	<el-date-picker
		      v-model="value6"
		      type="daterange"
		      placeholder="选择日期范围">
		    </el-date-picker>
		    <div class="sub-title">急性坏疽性阑尾炎伴穿孔</div>
		    <span>2017-04-25 11:55:40</span>
		    <div>
		    	<i class="el-icon-document"></i>
		    	<span slot="title">
			 		<router-link to="/homepage">详情</router-link>
			 	</span>
			    <i class="el-icon-document"></i>
			    <span slot="title">
					<router-link to="/homepage">复制病例</router-link>
				</span>
		    </div>
		    <div class="sub-title">副伤寒</div>
		    <span>2017-04-25 11:55:40</span>
		    <div>
		    	<i class="el-icon-document"></i>
		    	<span slot="title">
			 		<router-link to="/homepage">详情</router-link>
			 	</span>
			    <i class="el-icon-document"></i>
			    <span slot="title">
					<router-link to="/homepage">复制病例</router-link>
				</span>
		    </div>
          </el-col>
          </el-col>

          <el-col :span="16" class="inquiry-info">
            <el-col :span="24" class="user-inquiry-info">
               <h2>问诊信息</h2>
               <el-form :inline="true" :model="formInline" class="demo-form-inline">
	               <el-col :span="9" style="padding:0 !important">
					  <el-form-item label="就诊时间：">
					    <span v-html="formInline.clinic_time"></span>
					  </el-form-item>
				   </el-col>
				   <el-col :span="5" style="padding:0 !important">
					  <el-form-item label="就诊医生：">
					    <span v-html="formInline.clinic_doctor"></span>
					  </el-form-item>
				   </el-col>
				   <el-col :span="5" style="padding:0 !important">
					  <el-form-item>
					    <el-radio-group v-model="formInline.clinictype">
					      <el-radio label="初诊"></el-radio>
					      <el-radio label="复诊"></el-radio>
					    </el-radio-group>
					  </el-form-item>
				   </el-col>
				   <el-col :span="5" style="padding:0 !important">
					  <el-form-item label="结算类型">
					    <el-select v-model="formInline.accounttype" placeholder="默认">
					      <el-option label="类型一" value="type1"></el-option>
					      <el-option label="类型二" value="type2"></el-option>
					    </el-select>
					  </el-form-item>
				  </el-col>
				</el-form>

				 <el-tabs v-model="activeName" @tab-click="handleClick">
				    <el-tab-pane label="用户管理" name="first">用户管理11</el-tab-pane>
				    <el-tab-pane label="配置管理" name="second">配置管理22</el-tab-pane>
				    <el-tab-pane label="角色管理" name="third">角色管理33</el-tab-pane>
				    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿44</el-tab-pane>
				 </el-tabs>
            </el-col>
          </el-col>
        </el-row>
	</div>
</template>

<script>
  export default {
    data() {
      return {
      	name:'<b>李春华</b>',
      	sex:'<b>女</b>',
      	age:'<b>18</b>',
      	phone:'<b>12337657567</b>',
      	remarks:'<b>各项指标良好！</b>',
        editable:false,
        Koala:"../static/Koala.jpg",
        personalInfo:{
        	height:"175",
        	weight:"50kg",
        	temperature:"37",
        	dbp:"100",
        	sbp:"300"
        },
        value6: '',
	    value7: '',
        formInline:{

	        clinic_time:"2016-09-20,09:00~10:00",
	        clinic_doctor:"李医生",
	        clinictype:'',
	        accounttype:'',
        },
        activeName: 'second',
        
    }
    },
    // computed: {
    //     ...mapGetters({
    //         personalInfo_init:'userInfo'
    //     })
    // },
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
            "account":  vm.personalInfo.account,
            "height": vm.personalInfo.height,
            "weight": vm.personalInfo.weight,
            "temperature": vm.personalInfo.temperature,
            "dbp": vm.personalInfo.dbp,
            "sbp": vm.personalInfo.sbp,
        };

        console.log('修改信息入参为：',par)
    },
    //重置表单
    resetForm() {
        var vm = this;
        vm.editable = false;
        vm.personalInfo = JSON.parse( JSON.stringify(vm.personalInfo_init) ) ;
    },
    //tab选项卡
     handleClick(tab, event) {
        console.log(tab, event);
      }
  }
}
</script>

<style>
	.formedit{
	  	width:82%;
	  	margin:0 2%;
	  	float:right;	
	}
	.user-img,.body-info,.past-case,.user-inquiry-info{
		border: 1px solid #dee1e2;
		background: #fff;
		border-radius: 10px;
		margin-bottom: 10px;
	}  
	.basic-info{
        /*width: 80%;*/
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
    .user-info-form,.user-info-text{
        padding: 20px;
    }
    .inquiry-info{
    	padding: 20px;
        /*text-align: center;*/
        background: #f6f6f7;
    }
    .inquiry-info span{
    	font-size: 12px;
    }
    .inquiry-info .el-input{
    	font-size: 10px;
    }
    .inquiry-info .el-input__inner {
    	width: 70px;
	}


 </style>