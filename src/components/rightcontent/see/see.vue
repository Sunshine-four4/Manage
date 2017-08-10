<template>
	<div class="formedit">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/loginSuccess/homepage' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>问诊</el-breadcrumb-item>
    </el-breadcrumb>
		<el-row :gutter="20">
          <el-col :span="24" class="info-top">
              <ul>
                <li>当前有<span>1</span>人等候</li>
                <li>
                  <i class="el-icon-setting "></i>
                  <span class="record">
                  <router-link to="/loginSuccess/see">切换就诊人</router-link>
                  </span>
                </li>
                <li style="float:right;">
                <el-button type="success" @click="recheck()">重新接诊</el-button>
                </li>
                
                <li style="float:right;">
                <el-button type="default" @click="returnPremium">发起退费</el-button>
                </li>
                <li style="float:right;">
                  <i class="el-icon-setting "></i>
                  <span class="record">
                  <router-link to="/loginSuccess/see">打印预览</router-link>
                  </span>
                </li>
              
              </ul>
          </el-col>

          <el-dialog class="returnPremiumform" title="发起退费" :visible.sync="returnPremiumVisible">

              <ul class="returnPremiumtop">
                   <li>
                        <img :src="Koala" alt="用户头像" >
                        <span v-html="clinic_people"></span>
                   </li>
                   <li>
                      	就诊时间：
                        <span v-html="clinic_time"></span>
                   </li>
                   <li>
                    	就诊医生：
                      	<span v-html="clinic_doctor"></span>
                   </li>
              </ul>

              <el-col :span="24" class="returnPremiumcontent">
              	<ul>
              		<li>
              			已缴费医嘱
              		</li>
              		<li>
              			<span style="color:red;">*每次只能修改一张医嘱</span>
              		</li>
              		<li style="float:right;margin-right:0;">
                    <el-button size="small" v-if="!editableT" @click="editableT = true" style="float:right;" icon="edit">修改医嘱</el-button>
              		</li>
              	</ul>

	          	<el-tabs class="maincontentEdit" v-if="editableT" v-model="activeName1" @tab-click="handleClick">
    				    <el-tab-pane label="01 挂号费" name="one">11111111111</el-tab-pane>
    			    	<el-tab-pane label="02 西药" name="two">
    				    	<el-table :data="tableData1" style="width: 100%" label-width="120">
    					      <el-table-column prop="guige" label="名称(规格)">
    					      </el-table-column>
    					      <el-table-column prop="yongliang" label="用量/次">
    					      </el-table-column>
    					      <el-table-column prop="pinci" label="频次">
    					      </el-table-column>
    					      <el-table-column prop="tianshu" label="天数">
    					      </el-table-column>
    					      <el-table-column prop="fayao" label="发药单位">
    					      </el-table-column>
    					      <el-table-column prop="danjia" label="单价(元)">
    					      </el-table-column>
    					      <el-table-column prop="heji" label="合计(元)">
    					      </el-table-column>
    					    </el-table>
    				    </el-tab-pane>
    				    <el-tab-pane label="03 检查费" name="three">
    				    	 33333333333
    				    </el-tab-pane>
                <el-button type="primary" @click="submitTable()">提交</el-button>
                <el-button @click="resetTable()">取消</el-button>
    			    </el-tabs>

              <el-tabs class="maincontentText" v-else v-model="activeName1" @tab-click="handleClick">
                  <el-tab-pane label="01 挂号费" name="one">11111111111</el-tab-pane>
                  <el-tab-pane label="02 西药" name="two">
                    <el-table :model="tableData1" style="width: 100%" label-width="120">
                      <el-table-column prop="guige" label="名称(规格)">
                      </el-table-column>
                      <el-table-column prop="yongliang" label="用量/次">
                      </el-table-column>
                      <el-table-column prop="pinci" label="频次">
                      </el-table-column>
                      <el-table-column prop="tianshu" label="天数">
                      </el-table-column>
                      <el-table-column prop="fayao" label="发药单位">
                      </el-table-column>
                      <el-table-column prop="danjia" label="单价(元)">
                      </el-table-column>
                      <el-table-column prop="heji" label="合计(元)">
                      </el-table-column>
                    </el-table>
                  </el-tab-pane>
                  <el-tab-pane label="03 检查费" name="three">
                     33333333333
                  </el-tab-pane>
              </el-tabs>
              </el-col>

              <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="handleCreateSubmit">确 定</el-button>
                <el-button @click="returnPremiumVisible = false">取 消</el-button>
	          </div>
          </el-dialog>

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
				    <router-link to="/loginSuccess/see">查看档案</router-link>
				    </span>
				  </el-form-item>
				</el-form>

        		<el-form ref="form" :model="form" class="user-basic-info" label-width="80px">
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
                  <h2>本次测量信息 <el-button size="small" v-if="!editable" @click="editable = true" style="float:right;" icon="edit">编辑</el-button>
                  </h2>

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
          </el-col>

                <el-col :span="18" class="inquiry-info">
                  <el-col :span="24" class="user-inquiry-info">
                      <h2>问诊信息</h2>
                      <ul>
                      	<li>
                      		就诊时间：<span v-html="clinic_time"></span>
                      	</li>
    		                <li>
    		                  	就诊时间：<span v-html="clinic_doctor"></span>
    		                </li>
    		                <li>
    		                	<el-radio-group v-model="clinictype">
        	  					      <el-radio label="初诊"></el-radio>
        	  					      <el-radio label="复诊"></el-radio>
      	  					      </el-radio-group>
    		                </li>
		                
    		                <li>
    		                	结算类型：
    		                	<el-select v-model="accounttype" placeholder="默认">
          					      <el-option label="类型一" value="type1"></el-option>
          					      <el-option label="类型二" value="type2"></el-option>
          					    </el-select>
    		                </li>
                      </ul>

                      <el-tabs class="tab-menu" v-model="activeName2" @tab-click="handleClick">
            				    <el-tab-pane label="病历" name="first">病历的内容</el-tab-pane>
            				    <el-tab-pane label="医嘱" name="second">医嘱的内容</el-tab-pane>
            				    <el-tab-pane label="检验检查" name="third">
            				    	 <el-table :data="tableData2" style="width: 100%">
            						      <el-table-column prop="kind" label="类型" width="180">
            						      </el-table-column>
            						      <el-table-column prop="room" label="执行科室" width="180">
            						      </el-table-column>
            						      <el-table-column prop="itemname" label="项目名称" width="180">
            						      </el-table-column>
            						      <el-table-column prop="attention" label="注意事项" width="180">
            						      </el-table-column>
            						      <el-table-column prop="price" label="价格(元)">
            						      </el-table-column>
          						     </el-table>
            				    </el-tab-pane>
            				    <el-tab-pane label="缴费" name="fourth">缴费的内容</el-tab-pane>
            				    <el-tab-pane label="随访" name="fifth">随访的内容</el-tab-pane>
            				    <el-button style="float:right; margin-top:10px;" type="success">查看报告</el-button>
            				  </el-tabs>

                  </el-col>

                  <el-col :span="24" class="past-case">
    	            	<h2>过往病历</h2>
    	            	<el-date-picker v-model="value6" type="daterange" placeholder="选择日期范围"></el-date-picker>
      	  		    	<div>
      	  		    		<ul>
      	  		    			<li>急性坏疽性阑尾炎伴穿孔</li>
      	  		    			<li><span>2017-04-25 11:55:40</span></li>
      	  		    			<li>
      	  		    				<i class="el-icon-document"></i>
      				  		    	<span slot="title" class="record">
      				  			 		<router-link to="/loginSuccess/see">详情</router-link>
      				  			 	</span>
      			  		    	</li>
      	  		    			<li>
      	  		    				<i class="el-icon-document"></i>
      				  			    <span slot="title" class="record">
      				  					<router-link to="/loginSuccess/see">复制病例</router-link>
      				  				</span>
      	  		    			</li>
      	  		    		</ul>

      	  		    		<ul>
      	  		    			<li>急性坏疽性阑尾炎伴穿孔</li>
      	  		    			<li><span>2017-04-25 11:55:40</span></li>
      	  		    			<li>
      	  		    				<i class="el-icon-document"></i>
      				  		    	<span slot="title" class="record">
      				  			 		<router-link to="/loginSuccess/see">详情</router-link>
      				  			 	</span>
      			  		    	</li>
      	  		    			<li>
      	  		    				<i class="el-icon-document"></i>
      				  			    <span slot="title" class="record">
      				  					<router-link to="/homepage">复制病例</router-link>
      				  				</span>
      	  		    			</li>
      	  		    		</ul>
      	  		    	</div>
	      		    
                  </el-col>

                </el-col>
        </el-row>
	</div>
</template>

<script>
  export default {
    data() {
      return {
        returnPremiumVisible: false,
        editableT:false,
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
	    tableData1:[{
	    	guige:'大蒜素注射液',
	    	yongliang:'60mg',
	    	pinci:'每天1次',
	    	tianshu:'3',
	    	fayao:'2盒',
	    	danjia:'18.50',
	    	heji:'54.50'
	    },
	    {
	    	guige:'大蒜素注射液',
	    	yongliang:'60mg',
	    	pinci:'每天1次',
	    	tianshu:'3',
	    	fayao:'2盒',
	    	danjia:'18.50',
	    	heji:'54.50'
	    }
	    ],
	    tableData2:[{
	    	kind:'检查',
	    	room:'外科',
	    	itemname:'【项目】耳纤维内镜检查',
	    	attention:'注意事项文字描述',
	    	price:'80'
	    }],
	    clinic_people:"李春华(22岁)",
        clinic_time:"2016-09-20,09:00~10:00",
        clinic_doctor:"李医生",
        clinictype:'',
        accounttype:'',
        activeName1: 'two',
    	activeName2: 'third',
        
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
      //发起退费弹出框
      returnPremium() {
        this.returnPremiumVisible = true;
        
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
      //提交修改医嘱
      submitTable() {
        var vm = this;
        vm.editableT = false;
        var par = [
        {
          "guige":vm.tableData1.guige,
          "yongliang":vm.tableData1.yongliang,
          "pinci":vm.tableData1.pinci,
          "tianshu":vm.tableData1.tianshu,
          "fayao":vm.tableData1.fayao,
          "danjia":vm.tableData1.danjia,
          "heji":vm.tableData1.heji,

        },
        {
          "guige":vm.tableData1.guige,
          "yongliang":vm.tableData1.yongliang,
          "pinci":vm.tableData1.pinci,
          "tianshu":vm.tableData1.tianshu,
          "fayao":vm.tableData1.fayao,
          "danjia":vm.tableData1.danjia,
          "heji":vm.tableData1.heji,
        }
        ];
        console.log('修改信息入参为：',par)
      },

      //重置医嘱
    resetTable() {
        var vm = this;
        vm.editableT = false;
        vm.tableData1 = JSON.parse( JSON.stringify(vm.tableData1_init) ) ;
    },
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
        //vm.personalInfo = JSON.parse( JSON.stringify(vm.personalInfo_init) ) ;
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
	  	padding:1% 2% 1%;
	  	float:right;
      background: #fff;
	}
  .el-breadcrumb{
    padding: 10px 0 20px 0;
  }
  .info-top li{
    margin-right: 10px;
    list-style: none;
    display: inline-block;
  }
  .returnPremiumtop li{
  	margin-right: 40px;
    list-style: none;
    display: inline-block;
  }
  .returnPremiumcontent{
  	padding: 10px;
  	margin: 10px 0;
  	border: 1px solid #dee1e2;
  }
  .maincontentEdit{
  	/*padding: 10px;*/
  	margin: 10px 0;
  	border: 1px solid #dee1e2;
  }
  .returnPremiumcontent li{
  	margin-right: 80px;
    list-style: none;
    display: inline-block;
  }
  .returnPremiumform img{
      max-width: 30px;
      max-height: 30px;
      border-radius: 50%;
  }
  .returnPremiumform .el-dialog--small {
    width: 65%;
  }

	.user-img,.body-info,.past-case,.user-inquiry-info{
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
    .user-info-form,.user-info-text{
        padding: 20px;
    }
    .inquiry-info{
    	padding: 20px;
        /*text-align: center;*/
        background: #f6f6f7;
    }
    .user-inquiry-info li{
		margin-right: 30px;
	    list-style: none;
	    display: inline-block;
	}
	.user-inquiry-info .el-select > .el-input{
		width: 80px;
	}
    .inquiry-info span{
    	font-size: 14px;
    }
	.inquiry-info .tab-menu{
		margin-bottom: 10px;
	}
	.past-case li{
		margin: 10px;
		list-style: none;
	  display: inline-block;
	}
	.past-case .el-date-editor{
		margin: 2% 4%;
	}

  .record a{
    color:blue;
    text-decoration: none
  }
 </style>