<template>
    <div class="scheduling">
      <div exampleform-row>
        <el-input v-model="input1" placeholder="医生姓名"  style="width: 200px;"></el-input>

        <el-select v-model="select" slot="prepend" placeholder="日期" style="width: 130px">
            <el-option label="2015" value="1"></el-option>
            <el-option label="2016" value="2"></el-option>
            <el-option label="2017" value="3"></el-option>
        </el-select>
        
        <el-button type="primary" icon="search">搜索</el-button>
        <el-button type="primary" icon="edit" @click="add()">添加</el-button>        
        <el-button type="primary" icon="document">导出</el-button>

      </div>

    <!-- 表格 -->
      <el-table :data="tableData"  border style="width: 100%" :model="tableData">

      
          <el-table-column prop="date"  label="日期" sortable width="180" >
          <!-- {{tableData.date}} -->
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
    <el-form> 
         <el-col :span="3"><el-form-item style="width: 100px;height:28px;">
             <el-select  placeholder="10条/页" >
             <el-option label="10条/页" value="shi" class="selected"></el-option>
             <el-option label="20条/页" value="ershi"></el-option>
             <el-option label="30条/页" value="sanshi"></el-option>
             <el-option label="50条/页" value="wushi"></el-option>
             </el-select>
         </el-form-item></el-col>
       <el-col :span="3"><div class="block">
       <el-pagination layout="prev, next ,jumper" :total="50"></el-pagination>
       </div></el-col> 
  </el-form>
   



 <!-- 修改医生信息 begin-->

    <el-dialog title="修改医生信息" v-model="dialogUpdateVisible"  :close-on-click-modal="false" :close-on-press-escape="false"  >
 
        <el-form id="#update" :model="tableData[i]"  ref="update" label-width="100px">
            <el-form-item label="日期" prop="name">
                <el-input v-model="tableData[i].date"></el-input>
            </el-form-item>
            <el-form-item label="医生姓名" prop="phone">
                <el-input v-model="tableData[i].name"></el-input>
            </el-form-item>
            <el-form-item label="预约时间段" prop="email">
                <el-input v-model="tableData[i].appointment"></el-input>
            </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogUpdateVisible = false">取 消</el-button>
            <el-button type="primary" @click="sure()">确 定</el-button>
        </div>
 
    </el-dialog>

<!-- 添加 -->
<el-dialog title="添加医生信息" v-model="addVisble"  :close-on-click-modal="false" :close-on-press-escape="false"  >
 
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
    export default{
       data() {
          return {
              i:0,
              input1:'',
              select:'',
              dialogUpdateVisible: false, //编辑对话框的显示状态
              addVisble:false, //添加对话框的显示状态
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
             
            }
            ],
            update:{
              date:'',
              name:'',
              appointment:''
            }
            
          }
      },
      methods: {
          // 单个删除
          deleteRow(index, rows){
            console.log(rows);
            rows.splice(index, 1)
          },

          // 编辑
            setCurrent(index, rows){
              this.i=index;
            this.update.date=rows.row.date;
            this.update.name=rows.row.name;
            this.update.appointment=rows.row.appointment;
            this.dialogUpdateVisible=true;
          },
          formatter(row, column) {
            return row.appointment;
          },
          filterTag(value, row) {
            return row.tag === value;
          },

          //确定
          sure(){       
          var vm = this;
          console.log(vm.tableData);
          vm.dialogUpdateVisible=false;
          var par = {
              "date":  vm.update.date,
              "name": vm.update.name,
              "appointment": vm.update.appointment   
          };
          console.log('修改信息入参为：',par)
          },

          //添加
          add(){
          var vm = this;
          vm.addVisble=true;         
          },

          //添加确定
          addSure(){
          var vm=this;
          this.addVisble=false;
          this.tableData.unshift({date:vm.update.date,name:vm.update.name,appointment:vm.update.appointment});
          }

       }
     
    }
</script>

<style rel="stylesheet">
  .scheduling .el-input__inner{
    border-radius: 0!important;
    height:28px!important;
   }
  .scheduling .el-pagination{
    padding-top: 4px;
   }
  .scheduling{
    float:left;
      width:86%;
   }
   
</style>