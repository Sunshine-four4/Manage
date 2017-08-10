 <template>
  <!-- 首页 -->
	<div class="homepage">
      <!-- 面包屑 -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/loginSuccess/homepage'}">首页
        </el-breadcrumb-item>
      </el-breadcrumb>
  
	    <el-row :gutter="20">
		    <el-col :span="16">
			    <el-table :data="tableData1" >
					<el-table-column prop="date" label="今日预约" ></el-table-column>
					<el-table-column prop="name" ></el-table-column>
					<el-table-column prop="doctor"></el-table-column>
					<el-table-column prop="caozuo">
					    <template scope="scope">
					    	<router-link to="/loginSuccess/book">
                  <el-button size="small" type="text">详情</el-button>
                </router-link>
					    </template>    
					</el-table-column>
				</el-table>
		    </el-col>	
		    <el-col :span="8"style="float:right;">	
	  		  <el-table :data="tableData2" style="height:280px">
  				  <el-table-column prop="date" label="今日排班" >    
            </el-table-column>
  				  <el-table-column prop="doctor"></el-table-column>
	  		  </el-table>
	  		</el-col>
      </el-row>
      <el-row :gutter="20" >
	      <el-col :span="16" style="border:solid 1px rgb(223, 230, 236);width:64.9%;margin-left:10px"> 
            <el-col :span="26" >
              <div class="mon">月度统计(过去30天)</div>
            </el-col>
			      <el-row :gutter="200">
			        <el-col :span="10"style="border-right:solid 1px #eee;">
                  <div id="chartColumn1" style="width:100%; height:400px;"></div>
              </el-col>
              <el-col :span="10">
                  <div  id="chartColumn2" style="width:100%; height:400px;"></div>
              </el-col>
          </el-row>   
		    </el-col>	
		    <el-col :span="8"style="float:right;">	
	  		    <el-table :data="tableData4" style="height:460px;">
				    <el-table-column prop="date" label="最新动态" ></el-table-column>
				    <el-table-column prop="opor"></el-table-column>
	  		    </el-table>
	  		</el-col>
      </el-row>
	</div>
</template>

<script type="esmascript">

 import echarts from 'echarts'
 import {api} from '../../../global/api.js'
 
	export default {
		 data() {
      return {
      	chartColumn1: null,
      	chartColumn2: null,
        tableData1:null,
        tableData2:null,
        tableData4:null
      }
    }, 
    methods:{
        //获取dataJson数据
        getJson(){ 
          this.$http.get(api.homepage).then(
            function(response){
                // alert("请求成功");
                console.log(response.data);
                this.tableData1=response.data.tableData1;
                this.tableData2=response.data.tableData2;
                this.tableData4=response.data.tableData4;
                
            },function(){
                alert("请求不成功");
            }
          )
        }
    },   
     mounted: function () {
           this.getJson();
      	 	 var _this = this;
      	 	 this.chartColumn1 = echarts.init(document.getElementById('chartColumn1'));
      	 	 this.chartColumn2= echarts.init(document.getElementById('chartColumn2'));
      	 	 this.chartColumn1.setOption({
        title: { text: '门诊人次' },
        tooltip: {},
        xAxis: [{
          formatter: '{b}\n{c}',
          show:false,
          data: ["所有人次", "我的人次"]
        }],
        yAxis: {show: false},
        series: [{
          type:'bar',
          itemStyle: {
          	normal:{
          		color:'rgba(100, 149, 237,1)',
          		label:{
          			position: 'bottom',
          			formatter: '{b}\n{c}', 
                show:true,
          			textStyle:{color:'#000'}
          		}}},
          data: [165, 23]
        }]
      });
      	 	 this.chartColumn2.setOption({
        title: { text: '收费总额' },
        tooltip: {},
        xAxis:[ {
          show:false,
          data: ['所有收费', '我的收费']
         
        }],
        yAxis: { 
        	show: false
        },
        series: [{
          type: 'bar',
          data: [10000, 4000],
          itemStyle: {
          	normal: {
          		color:'rgba(218, 165 ,32,1)',
          		label:{
          			show:true, 
          			position: 'bottom',
          			formatter: '{b}\n{c}',
          			right:'50px',
          			textStyle:{color:'#000'}
          		}}}
        }]
      });
	}
}
</script>

<style rel="stylesheet">
        .el-breadcrumb{
          padding: 10px 0 20px 0;
        }

      	.homepage{
        	float: left;
          width:82%;
          padding:1% 2% 1%;
          background:white; 
        }  
        
        .homepage .el-row{
        	padding-bottom: 20px;
        }
        .homepage .el-table{
          font-size: 15px;
        /*  border-left:solid 1px #eee;*/
         /* border-radius: 8px!important;*/
         box-shadow: 1px 1px  5px #eee!important;
        }
        .homepage .mon{
          height:20px;
          background:#eef1f6;
          padding:10px;
          border-bottom:solid 1px rgb(223, 230, 236);
          margin-left: -20px;
          margin-right: -20px;
          font-weight: bold;
          font-size: 15px;
        }
</style> 
