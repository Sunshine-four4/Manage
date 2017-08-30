<template>
    <div class="scheduling">
        
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/loginSuccess/homepage'}">首页
          </el-breadcrumb-item>
          <el-breadcrumb-item>排班</el-breadcrumb-item>
        </el-breadcrumb>

        <div exampleform-row style="margin-top:-10px">
            <el-input v-model="doctorName" placeholder="医生姓名"  style="width: 200px;"></el-input>

            <el-date-picker v-model="selectData" type="date" placeholder="选择日期" >
            </el-date-picker>
            
            <el-button type="primary" icon="search">搜索</el-button>
            <el-button type="primary" icon="edit" @click="add()">添加</el-button>        
            <el-button type="primary" icon="document">导出</el-button>
            <el-button type="primary" icon="delete" @click="delGroup" :disabled="this.sels.length === 0">批量删除</el-button>
            <!--disabled值动态显示，默认为true,当选中复选框后值为false--> 

        </div>

    <!-- 表格 -->
        <el-table :data="tableData"  border style="width: 100%"  highlight-current-row @selection-change="selsChange" ref="table">
      
            <el-table-column type="selection" width="55">
            </el-table-column>

             <el-table-column type="index" width="50">
             </el-table-column>

            <el-table-column prop="date"  label="日期" sortable width="180" >
            </el-table-column>
            
            <el-table-column prop="name" label="医生姓名" width="180">
            </el-table-column>

            <el-table-column prop="appointment" label="预约时间段" :formatter="formatter">
            </el-table-column>

            <el-table-column label="操作">

                <template scope="scope">
                    <el-button size="small" @click="setCurrent(scope.$index,scope)">编辑</el-button>
                    <el-button size="small" type="danger" @click="deleteRow(scope.$index,tableData)">删除</el-button>
                </template>

            </el-table-column>
    
        </el-table>

    <!-- 分页 -->
        <el-form  style="clear:both"> 

             <el-col :span="3">
               <el-form-item style="width: 100px;height:28px;">
                   <el-select  placeholder="10条/页" >
                   <el-option label="10条/页" class="selected"></el-option>
                   <el-option label="20条/页"></el-option>
                   <el-option label="30条/页"></el-option>
                   <el-option label="50条/页"></el-option>
                   </el-select>
               </el-form-item>
             </el-col>

           <el-col :span="3">
             <div class="block">
                  <el-pagination layout="prev, next ,jumper" :total="50"></el-pagination>
             </div>
           </el-col> 

        </el-form>


      <!-- 修改医生信息 begin-->

      <el-dialog title="修改医生信息" v-model="dialogUpdateVisible"  >
   
          <el-form  :model="update"  ref="update" label-width="100px">

              <el-form-item label="日期">
                  <el-input v-model="update.date"></el-input>
              </el-form-item>
              <!-- <el-form-item label="日期" >
               <el-date-picker v-model="tableData[i].date" type="date" placeholder="选择日期" >
              </el-date-picker>
              </el-form-item> -->


              <el-form-item label="医生姓名" >
                  <el-input v-model="update.name"></el-input>
              </el-form-item>
              <el-form-item label="预约时间段" >
                  <el-input v-model="update.appointment"></el-input>
              </el-form-item>
          </el-form>

          <div slot="footer" class="dialog-footer">
              <el-button @click="dialogUpdateVisible = false">取 消</el-button>
              <el-button type="primary" @click="sure()">确 定</el-button>
          </div>
   
      </el-dialog>

      <!-- 添加 -->
      <el-dialog title="添加医生信息" v-model="addVisble" >
       
              <el-form id="#update" :model="update"   label-width="100px">
                  <el-form-item label="日期" >
                      <el-input v-model="update.date"></el-input>
                  </el-form-item>
                  <el-form-item label="医生姓名" >
                      <el-input v-model="update.name"></el-input>
                  </el-form-item>
                  <el-form-item label="预约时间段" >
                      <el-input v-model="update.appointment"></el-input>
                  </el-form-item>
              </el-form>

              <div slot="footer" class="dialog-footer">
                  <el-button @click="addVisble = false">取 消</el-button>
                  <el-button type="primary" @click="addSure()">确 定</el-button>
              </div>
       
      </el-dialog>

    </div>
</template>

<script type="ecmascript-6">
  import {api} from '../../../global/api.js'

  export default{
       data() {
          return {
              i:0,
              selectData: '',
              doctorName:'',
              select:'',
              data:'',
              dialogUpdateVisible: false, //编辑对话框的显示状态
              addVisble:false, //添加对话框的显示状态
              sels: [],//删除选中的值的显示
              tableData: [{   
                date: '2016-05-02',
                name: '王医生',
                appointment: '9.00-11.00'
             
              }, {
                
                date: '2016-05-04',
                name: '李护士',
                appointment: '9.00-11.00'
               
              }, {
                
                date: '2016-05-01',
                name: '王小虎',
                appointment: '9.00-11.00'
                
              }, {
                
                date: '2016-05-04',
                name: '陈医生',
                appointment: '9.00-11.00'
                
              }, {
                
                date: '2016-05-03',
                name: '黄护士',
                appointment: '9.00-11.00'
               
              }],

              update:{

                date:'',
                name:'',
                appointment:''
              }               
          }
      },
      mounted:function(){
        this.getData();
      },
      methods: {
          // 获取schedul.json
          getData(){ 
                    this.$http.get(api.schedual).then(
                        function(response){
                            // alert("请求成功");
                            console.log(response.data);
                            this.tableData=response.data.tableData;
                            
                        },function(){
                            alert("请求不成功");
                        })

                    },    
          // 单个删除
          deleteRow(index, rows){
            rows.splice(index, 1)
          },

          // 编辑
            setCurrent(index, rows){
              console.log(rows);
            this.i=index;//获取数组下标
            this.update.date=rows.row.date;
            this.update.name=rows.row.name;
            this.update.appointment=rows.row.appointment;
            this.dialogUpdateVisible=true;//编辑状态为真，显示弹框
          },
          formatter(row, column) {
            return row.appointment;
          },
          filterTag(value, row) {
            return row.tag === value;
          },

          //修改确定
          sure(){       
          var vm = this;
          vm.dialogUpdateVisible=false;
          this.tableData[this.i].date=this.update.date;
          this.tableData[this.i].name=this.update.name;
          this.tableData[this.i].appointment=this.update.appointment;
          },

          //添加
          add(){
          this.update.date="";//初始化为空
          this.update.name="";
          this.update.appointment="";
          var vm = this;
          vm.addVisble=true;         
          },

          //添加确定
          addSure(){
          var vm=this;
          this.addVisble=false;//关闭添加编辑状态
          this.tableData.unshift({date:vm.update.date,name:vm.update.name,appointment:vm.update.appointment});//push内容进表格
          },

          selsChange: function (sels) {
            this.sels = sels;
          },
          //批量删除
          delGroup: function () {
            var ids = this.sels.map(item => item.id).toString();
            this.$confirm('确认删除选中记录吗？', '提示', {
              type: 'warning'
            }).then(() => {
              // this.listLoading = true;
              //NProgress.start();
              let para = {ids: ids};
              reqBatchDeleteBook(para).then((res) => {
                this.listLoading = false;
                //NProgress.done();
                this.$message({
                  message: '删除成功',
                  type: 'success'
                });
                // this.getBooks();
              });
            }).catch(() => {

            });
          },
          handleCurrentChange(row, event, column) {  
            this.$refs.table.toggleRowSelection(row);  
          },
       
        }
         
     
    }
</script>

<style rel="stylesheet">
    .el-breadcrumb{
      padding: 10px 0 20px 0;
    }
    .scheduling .el-input__inner{
      border-radius: 0!important;
      height:28px!important;
     }
    .scheduling .el-pagination{
      padding-top: 4px;
     }
     .scheduling .el-table{
      padding-top: 10px;
      padding-bottom: 10px;
     }
     .scheduling{
      float:left;
      width:82%;
      padding:1% 2% 30%;
      background:#fff;
      margin-top: -1px;
    }
    
    .scheduling .el-input{
      margin-right: 12px;
    }

    .scheduling .el-button{
      margin-top: 8px;
      margin-left: 12px;
  }

</style>