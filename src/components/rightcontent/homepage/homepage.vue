 <template>
	<div class="homepage">
	    <el-row :gutter="20">
		    <el-col :span="16">
			    <el-table :data="tableData1" >
					<el-table-column prop="date" label="今日预约" ></el-table-column>
					<el-table-column prop="name" ></el-table-column>
					<el-table-column prop="doctor"></el-table-column>
					<el-table-column prop="caozuo">
					    <template scope="scope">
					    	<el-button size="small" type="text">详情</el-button> 
					    </template>    
					</el-table-column>
				</el-table>
		    </el-col>	
		    <el-col :span="8"style="float:right;">	
	  		    <el-table :data="tableData2" style="height:280px">
				    <el-table-column prop="date" label="今日排班" ></el-table-column>
				    <el-table-column prop="doctor"></el-table-column>
	  		    </el-table>
	  		</el-col>
        </el-row>
        <el-row :gutter="20" >
	        <el-col :span="16" style="border:solid 1px rgb(223, 230, 236);"> 
            <el-col :span="24" >
            <div class="mon">月度统计(过去30天)</div></el-col>
			    <el-row :gutter="200">
			            
			              <el-col :span="10"style="border-right:solid 1px #eee;">
                        <div  id="chartColumn1" style="width:100%; height:400px;"></div>
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
	export default {
		 data() {
      return {
      	chartColumn1: null,
      	chartColumn2: null,
        tableData1: [{
          date: '08:00~09:00',
          name: '李女士,1351235678',
          doctor: '预约：王医生'
        }, {
          date: '08:00~09:00',
          name: '李女士,1351235678',
          doctor: '预约：王医生'
        }, {
          date: '08:00~09:00',
          name: '李女士,1351235678',
          doctor: '预约：王医生'
        },{
          date: '08:00~09:00',
          name: '李女士,1351235678',
          doctor: '预约：王医生'
        },{
          date: '08:00~09:00',
          name: '李女士,1351235678',
          doctor: '预约：王医生'
        },{
          date: '08:00~09:00',
          name: '李女士,1351235678',
          doctor: '预约：王医生'
        }
        ],
        
        tableData2:[{
          date: '09:00~11:00',
          doctor:'王医生'
      	},{
          date: '09:00~11:00',
          doctor:'王医生'
      	},{
          date: '09:00~11:00',
          doctor:'王医生'
      	},{
          date: '09:00~11:00',
          doctor:'王医生'
      	}

      	],
        tableData4:[{
          date: '12:00:03',
          opor:'王医生修改了排班'
      	},{
          date: '12:30:43',
          opor:'王医生修改了排班'
      	},{
          date: '12:40:03',
          opor:'欧医生修改了排班'
      	},{
          date: '12:00:23',
          opor:'刘医生修改了排班'
      	},{
          date: '12:50:00',
          opor:'陈医生修改了排班'
      	},{
          date: '13:00:03',
          opor:'刘护士登录了系统'
      	}

      	]      
      }
    },
     mounted: function () {
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
