<template>
    <div class="department">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/loginSuccess/homepage' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/loginSuccess/info' }">信息</el-breadcrumb-item>
        <el-breadcrumb-item>科室信息</el-breadcrumb-item>
      </el-breadcrumb>
      <div exampleform-row>
        <!-- <el-select v-model="select" slot="prepend" placeholder="科室类别" style="width: 130px">
          <el-option v-for="item in typeOptions" :key="item.key" :label="item.display_name" :value="item.key">
          </el-option>
        </el-select> -->
        <el-input v-model="tableData.field1" placeholder="科室类别"></el-input>
        
        <el-button type="primary" icon="search" :value="value">搜索</el-button>
        <el-button type="primary" icon="edit" @click="dialogVisible = true">添加</el-button>
        <el-dialog title="提示" :visible.sync="dialogVisible" size="tiny" :before-close="handleClose">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="类型名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item> 
          </el-form> 
        </el-dialog>        
        <el-button type="primary" icon="delete"  @click="removeSelected" :disabled="this.tableData.length === 0">批量删除</el-button>
        <el-button type="primary" icon="document"  @click="export2Excel">导出</el-button>
      </div>

    <!-- 表格 -->
      <el-table  v-loading="listLoading" ref="multipleTable" :data="tableData" border tooltip-effect="dark" style="width: 100%;margin-top:20px;margin-bottom:20px" @selection-change="handleSelectionChange" :label="tableData.num">

      <el-table-column type="selection" width="55" v-model="multipleSelection" @selection-change="handleSelectionChange">
      </el-table-column>
      
      <el-table-column  label="序号" show-overflow-tooltip>
        <template scope="scope">
                {{scope.$index}}
          </template>
      </el-table-column>

      <el-table-column  label="类别" show-overflow-tooltip>
        <template scope="scope">
                {{scope.row.field1}}
          </template>
      </el-table-column>


      <el-table-column label="操作">
        <template scope="scope">
          <el-button size="small" @click="edit(scope.$index,scope)">编辑</el-button>    
          <!-- 编辑修改科室类型-->
           <el-dialog title="修改科室类型" v-model="dialogUpdateVisible">
        
               <el-form :model="update" :rules="rule" ref="update" label-width="100px">
                   <el-form-item label="类型名称" prop="field1">
                     <el-input v-model="update.field1"></el-input>
                   </el-form-item>
               </el-form>

               <div slot="footer" class="dialog-footer">
                   <el-button @click="dialogUpdateVisible = false">取 消</el-button>
                   <el-button type="primary" @click="sure()">确 定</el-button>
               </div>
           </el-dialog>

          <el-button size="small" type="danger" @click="deleteRow(scope.$index,tableData)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>


    <!-- 分页 -->
    <el-form  > 
         <el-col :span="3"><el-form-item style="width: 100px;height:28px;">
             <el-select placeholder="10条/页">
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
  </div>
    </div>
</template>

<script type="ecmascript-6">
    export default{
       data() {
        return {
          dialogVisible:false,
          select:'',
          listLoading:false,
          multipleSelection:[],
          // typeOptions:[
          //   { key: '001', display_name: '内科' },
          //   { key: '002', display_name: '儿科' },
          //   { key: '003', display_name: '骨科' },
          //   { key: '004', display_name: '产科' }
          // ],
          tableData: [{
            num: '0',
            field1: '呼吸内科'
 
            }, 
            {
              num: '1',
              field1: '消化内科'
           
            }, {
              num: '2',
              field1: '心血管内科'
            
            }, {
              num: '3',
              field1: '神经内科'
             
            }, {
               num: '4',
              field1: '肿瘤科'
            
            }, {
               num: '5',
              field1: '内分泌科'
              
            }, {
              num: '6',
              field1: '血液内科'
              
            },
            {
              num: '7',
              field1: '儿科'
              
            },
            {
              num: '8',
              field1: '小儿科'
              
            },
            {
              num: '9',
              field1: '小儿麻痹科'
              
            },
            {
              num: '10',
              field1: '跌打科'
              
            },
            {
              num: '11',
              field1: '妇产科'
              
            }
          ],
          update:{
              field1: ''
          },
          dialogUpdateVisible: false, //编辑对话框的显示状态
          multipleSelection: [],
          ruleForm: {
                    name: ''
          },
          rules: {
            name: [
              { required: true, message: '请输入类型名称', trigger: 'blur' },
              { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ]
          },
        };
      },
      methods: {
        // 删除
        deleteRow(index, rows){
          rows.splice(index, 1)
        },
        handleClose(done) {
	        this.$confirm('确认关闭？').then(_ => {
	            done();
	        }).catch(_ => {});
	      },
        // 添加
	      submitForm(formName) {
          this.$refs[formName].validate((valid) => {
             if (valid) {
             	this.tableData.field1=this.ruleForm.name;
             	// 把数据添加进去表格
             	this.tableData.unshift({field1:this.tableData.field1});
               alert('submit!');
             } else {
               console.log('error submit!!');
               return false;
             }
          });
        },
	      resetForm(formName) {
	        this.$refs[formName].resetFields();
	      },
        // 导出
        export2Excel() {
          alert(2);
          var vm = this;
        //   require.ensure([], () => {
        //     alert(1);
        //     const { export_json_to_excel } = require('@/vendor/Export2Excel');
        //     const tHeader = [ '序号', '类别'];
        //     const filterVal = ['num', 'field1'];
        //     const list = vm.tableData;
        //     const data = vm.formatJson(filterVal, list);
        //     export_json_to_excel(tHeader, data, '导出的列表excel');
        //   })
        // },
        // formatJson(filterVal, jsonData) {
        //   return jsonData.map(v => filterVal.map(j => v[j]))
        },
        // 批量删除
        handleSelectionChange(val){
              this.multipleSelection = val;   
        },
        removeSelected(){
          for (var i = 0; i < this.multipleSelection.length; i++) {
            this.tableData.splice(this.multipleSelection[i],this.multipleSelection.length);
          }    
        },
        // 编辑
        edit(index, rows){
           this.i=index;
          // this.update.field1=rows.row.field1;
           this.dialogUpdateVisible=true;
        },
        // 编辑完成后确认
        sure(){       
          var vm  = this;
          vm.dialogUpdateVisible=false;
          this.tableData[this.i].field1 = this.update.field1 ;
        }
    }
  }
</script>

<style rel="stylesheet">
	.department{
	  float:right;
	  width:82%;
    padding:1% 2% 30%;
    background:#fff;
	}
  .department .el-breadcrumb{
    padding:12px;
  }
  .el-input {
      position: relative;
      font-size: 14px;
      float: left;
      width: 120px;
  }

  .department .el-input{
      margin-top: -7px;
      margin-right: 23px;
  }

  .el-select .el-input{
      margin-top: -8px;
  }
   
  .el-input__inner{
    border-radius: 0!important;
    height:28px!important;
    margin:12px;
    float:left;
  }
  .el-pagination{
    padding-top: 4px;
  }
</style>