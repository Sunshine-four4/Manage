<template>
    <div class="searchmovie">
    	<el-breadcrumb separator="/">
    	          <el-breadcrumb-item :to="{ path: '/loginSuccess/homepage'}">首页
    	          </el-breadcrumb-item>
    	          <el-breadcrumb-item>预约</el-breadcrumb-item>
    	        </el-breadcrumb>
    	<el-col :span="24" class="bookContent">
    		<el-tabs type="border-card">
			  <el-tab-pane label="今日预约" class="todayBook">
			  	<el-col :span="24" class="bookContentLeft">
			  		<el-select v-model="roomtype1" placeholder="全部科室" style="padding-bottom:10px;" >
				      <el-option label="外科" value="type1"></el-option>
				      <el-option label="妇科" value="type2"></el-option>
				      <el-option label="小儿科" value="type3"></el-option>
				    </el-select>

				    <el-tabs type="border-card">
					  <el-tab-pane label="刘医生">
					  	<div class="doctor">
					  		<span><b>刘医生</b></span>
					  		<el-button-group>
							  <el-button size="small" type="primary">出诊</el-button>
							  <el-button size="small">09:00~11:00</el-button>
							</el-button-group>
					  	</div>
					  	<div class="patient">
					  		<el-table :data="visitInfos" style="width:100%">
						      <el-table-column prop="visitTime">
						      </el-table-column>
						      <el-table-column prop="visitPeople">
						      </el-table-column>
						      <el-table-column prop="visitState">
						      	<template scope="scope">
					            	<el-tag :type="scope.row.visitState === '已就诊' ? 'success' : 'warning'">{{ scope.row.visitState }}
					            	</el-tag>
						      	</template>
						      </el-table-column>
						      <el-table-column prop="visitSign">
						      	<template scope="scope">
							        <el-button @click="qianDao(scope.$index,scope)" type="text" icon="time" size="small">签到</el-button>
						        </template>
						      </el-table-column>
						      <el-table-column prop="visitMeasurment">
						      	<template scope="scope">
							        <el-button  @click="ceLiang(scope.$index,scope)" type="text" icon="edit" size="small">测量</el-button>
						        </template>
						      </el-table-column>
						      <el-table-column prop="visitDetail">
						      	<template scope="scope">
							        <el-button @click="handleEdit(scope.row)" type="text" icon="document" size="small">详情</el-button>
						        </template>
						      </el-table-column>
						      <el-table-column prop="visitDelect">
						      	<template scope="scope">
							        <el-button type="text" icon="close" size="small" @click="deleteRow(scope.$index,visitInfos)">取消</el-button>
						        </template>
						      </el-table-column>
						    </el-table>
						    <el-dialog title="签到" v-model="dialogUpdateVisible1"  >
						        签到信息
						    </el-dialog>
						    <el-dialog title="测量" v-model="dialogUpdateVisible2"  >
						        测量信息
						    </el-dialog>
						    </el-table>
					  	</div>
					  </el-tab-pane>
					  <el-tab-pane label="刘医生">bbbb</el-tab-pane>
					  <el-tab-pane label="张医生">ccccc</el-tab-pane>
					  <el-tab-pane label="李医生">ddddd</el-tab-pane>
					</el-tabs>
			  	</el-col>
			  </el-tab-pane>
			  <el-tab-pane label="所有预约">
			  	<el-col :span="24" class="allBooktop">
			  		<ul>
			  			<li>
			  				<span>就诊时间：</span>
			  				<el-date-picker v-model="daterange" type="daterange" placeholder="选择日期范围">
    						</el-date-picker>
			  			</li>
			  			<li>
			  				<span>患者：</span>
			  				<el-input style="width:inherit;" v-model="input" placeholder="请输入患者姓名"></el-input>
			  			</li>
			  			<li>
			  				<span>科室：</span>
			  				<el-select v-model="roomtype2" placeholder="全部科室">
						      <el-option label="外科" value="type1"></el-option>
						      <el-option label="妇科" value="type2"></el-option>
						      <el-option label="小儿科" value="type3"></el-option>
						    </el-select>
			  			</li>
			  			<li>
			  				<span>医生：</span>
			  				<el-select v-model="Doctors" placeholder="请选择">
						      <el-option label="李医生" value="type1"></el-option>
						      <el-option label="刘医生" value="type2"></el-option>
						      <el-option label="王医生" value="type3"></el-option>
						    </el-select>
			  			</li>
			  			<li>
			  				<span>就诊状态：</span>
			  				<el-select v-model="clinictype" placeholder="请选择">
						      <el-option label="初诊" value="type1"></el-option>
						      <el-option label="复诊" value="type2"></el-option>
						    </el-select>
						    <el-button type="success" size="small" icon="search"></el-button>
			  			</li>
			  		</ul>
		  		</el-col>
		  		<el-col :span="24" class="allBookMiddle">
			  		<el-table :data="appointmentData" style="width: 100%" label-width="180">
				      <el-table-column type="index"label="序号">
				      </el-table-column>
				      <el-table-column prop="bookTime" label="预约就诊时间">
				      </el-table-column>
				      <el-table-column prop="patientName" label="患者姓名">
				      </el-table-column>
				      <el-table-column prop="clinicDoctor" label="就诊医生">
				      </el-table-column>
				      <el-table-column prop="chief" label="主诉">
				      </el-table-column>
				      <el-table-column prop="payStatus" label="支付状态">
				      	<template scope="scope">
			            	<el-tag :type="scope.row.payStatus === '已支付' ? 'success' : 'warning'">{{ scope.row.payStatus }}
			            	</el-tag>
				      	</template>
				      </el-table-column>
				      <el-table-column prop="clinicStatus" label="就诊状态">
				      	<template scope="scope">
			            	<el-tag :type="scope.row.clinicStatus === '已就诊' ? 'success' : 'warning'">{{ scope.row.clinicStatus }}
			            	</el-tag>
				      	</template>
				      </el-table-column>
				      <el-table-column prop="operation" label="操作">
				      	<template scope="scope">
					        <el-button @click="handleClick" type="text" icon="document" size="small">查看</el-button>
					        <el-button type="text" icon="close" size="small">取消</el-button>
				        </template>
				      </el-table-column>
				    </el-table>
		  		</el-col>
			  	<el-col :span="24" class="allBookBottom">
			  		<el-pagination
				      @size-change="handleSizeChange"
				      @current-change="handleCurrentChange"
				      :current-page="currentPage4"
				      :page-sizes="[5, 10, 20, 30]"
				      :page-size="6"
				      layout="total, sizes, prev, pager, next, jumper"
				      :total="6">
				    </el-pagination>
			  	</el-col>
			  </el-tab-pane>
			  <el-tab-pane label="可预约查询">
			  	<el-col :span="24" class="allBooktop">
			  		<ul>
			  			<li>
			  				<el-pagination layout="prev, pager, next"></el-pagination>
			  			</li>
			  			<li>
			  				<el-date-picker v-model="value1" type="date"
			  				placeholder="选择日期" :picker-options="pickerOptions0">
						    </el-date-picker>
						    <el-button type="success" size="small" icon="edit"></el-button>
			  			</li>
			  			<li>
			  				<span>科室：</span>
			  				<el-select v-model="roomtype2" placeholder="全部科室">
						      <el-option label="外科" value="type1"></el-option>
						      <el-option label="妇科" value="type2"></el-option>
						      <el-option label="小儿科" value="type3"></el-option>
						    </el-select>
			  			</li>
			  			<li>
			  				<span>出诊医生：</span>
			  				<el-select v-model="Doctors" placeholder="所有">
						      <el-option label="李医生" value="type1"></el-option>
						      <el-option label="刘医生" value="type2"></el-option>
						      <el-option label="王医生" value="type3"></el-option>
						    </el-select>
						    <el-button type="success" size="small" icon="search"></el-button>
			  			</li>
			  			<li>
			  				<el-button type="success" size="small" icon="plus"></el-button>
			  			</li>
			  		</ul>
			  	</el-col>

			  	<el-col :span="24">
			  		<el-table :data="timeData" style="width: 100%" label-width="180">
				      <el-table-column prop="Today" label="今天">
				      </el-table-column>
				      <el-table-column prop="Tomorrow" label="明天">
				      </el-table-column>
				      <el-table-column prop="Tuesday" label="周二">
				      </el-table-column>
				      <el-table-column prop="Wednesday" label="周三">
				      </el-table-column>
				      <el-table-column prop="Thursday" label="周四">
				      </el-table-column>
				      <el-table-column prop="Friday" label="周五">
				      </el-table-column>
				      <el-table-column prop="Saturday" label="周六">
				      </el-table-column>
				    </el-table>
			  	</el-col>
			  </el-tab-pane>
			</el-tabs>
    	</el-col>
    </div>
</template>

<script type="ecmascript-6">
import {api} from '../../../global/api.js'

export default {
	data(){
		return {
			i:0,
			dialogUpdateVisible1: false,
			dialogUpdateVisible2: false,
			roomtype1:'',
			roomtype2:'',
			Doctors:'',
			clinictype:'',
			daterange:'',
			visitInfos:null,
			appointmentData:null,
			currentPage4: 4
		}
	},
	mounted:function(){
        this.getData();
      },
      methods: {
        // 获取schedul.json
        getData(){ 
          	console.log("aaaaaaa",api);
            this.$http.get(api.book).then(
                function(response){
                    // alert("请求成功");
                    console.log(response.data);
                    this.visitInfos=response.data.visitInfos;
                    this.appointmentData=response.data.appointmentData;
                    this.timeData=response.data.timeData;
                    
                },function(){
                    alert("请求不成功");
                }
            )
        },
        //取消 
        deleteClick(){
        },

       //分页         
       handleSizeChange(val) {
	        console.log(`每页 ${val} 条`);
	    },
       handleCurrentChange(val) {
    		console.log(`当前页: ${val}`);
        },
        //签到
        qianDao(index, rows){
          	console.log(rows);
	        this.i=index;//获取数组下标
	        this.dialogUpdateVisible1=true;//编辑状态为真，显示弹框
      	},
      //测量
        ceLiang(index, rows){
	        console.log(rows);
	        this.i=index;//获取数组下标
	        this.dialogUpdateVisible2=true;//编辑状态为真，显示弹框
      	},
        // 单个删除
	    deleteRow(index, rows){
	        rows.splice(index, 1)
	    },
    }    
}
</script>

<style rel="stylesheet">
	.searchmovie{
	  	width:82%;
	  	padding:1% 2% 15%;
	  	float:right;
      	background: #f6f6f7;
	}

	.searchmovie .bookContent .el-tabs--border-card{
		background: #fff;
		border: none;
		box-shadow: none;
		margin-top: 1%;
	}
	.searchmovie .bookContent .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active{
		background-color: #1fd083;
		border-radius: 5px;
	}
	.bookContent{
		padding-bottom: 30%;
	}
	
	.bookContentLeft{
		background: #fff;
		/*border: 1px solid #d1dbe5;*/
	}
	.bookContentLeft .el-tabs__item{
		display: inherit;
	}
	.searchmovie .bookContent .bookContentLeft .el-tabs--border-card > .el-tabs__header {
    background-color: #fff;
	}
	.searchmovie .bookContent .bookContentLeft .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active{
		background-color: #e4f0fc;
		border-radius: 0px;
	}
	.searchmovie .bookContent .bookContentLeft  .el-tabs__nav-wrap {
		float: left;
	}
	.searchmovie .bookContent .bookContentLeft .el-tabs__header{
		border-bottom: none;
	}
	.searchmovie .bookContent .bookContentLeft .el-tabs__nav{
		width: 200px;
		border: 1px solid #d1dbd5;
		border-radius: 5px;
		padding-bottom: 100%;

	}
	.searchmovie .bookContent .bookContentLeft .el-tabs__content{
		border: 1px solid #d1dbd5;
		margin-left: 25%;
		background: #fff;
		/*height: 500px;*/
	}
	.patient a{
		text-decoration: inherit;
	}
	.bookContentLeft .doctor{
		padding-bottom: 10px;
		border-bottom: 1px solid #d1dbd5;
	}
	.bookContentLeft .patient li{
		/*margin-right: 60px;*/
		margin: 10px;
	    list-style: none;
	    display: inline-block;
	}
	.allBooktop,.allBookMiddle,.allBookBottom{
		margin-bottom: 20px;
		box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);
	}
	.allBooktop li{
		margin: 10px;
		list-style: none;
	    display: inline-block;
	}

</style>