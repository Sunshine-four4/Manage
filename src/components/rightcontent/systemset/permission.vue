<template>
<div class="permission">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/loginSuccess/homepage' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/loginSuccess/permission' }">系统</el-breadcrumb-item>
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      </el-breadcrumb>

      <!--  //新增角色 -->
      <el-button type="primary" style="float:right;margin-bottom:15px" @click="dialogVisible = true">新建角色</el-button>
      <el-dialog title="新建角色" :visible.sync="dialogVisible" size="tiny" :before-close="handleClose">
        <el-form>
            <el-form-item label="角色名称：">
                <el-input v-model="juese"></el-input>
            </el-form-item>
            <el-form-item label="对应用户：">
                <el-input v-model="yonghu"></el-input>
            </el-form-item>
        </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false,add()" >确 定</el-button>
            </span>
      </el-dialog> 

        <!--  //权限管理表--> 
      <el-table  :data="tableData3">
        <el-table-column prop="juese" label="角色" ></el-table-column>
        <el-table-column prop="yonghu" label="对应用户"></el-table-column>
        <el-table-column label="操作" prop="caozuo">
            <template scope="scope">
           <!--  //设置权限 -->
          <el-button size="small" type="text"v-if="scope.$index!=0" @click="permission=true,getData(scope.$index)"><i class="el-icon-setting"></i>设置权限</el-button> 
              <el-dialog :title="setpermission() " :visible.sync="permission" size="tiny" :before-close="handleClose">
                    <el-checkbox-group v-model="checkedoption">
                        <el-checkbox v-for="Option in Options" :label="Option" :key="Option" style="margin:15px;">{{Option}}</el-checkbox>
                    </el-checkbox-group>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="permission = false">取 消</el-button>
                    <el-button type="primary" @click="permission = false" >确 定</el-button>
                </span>
              </el-dialog> 

               <!--  //设置成员 -->
                <el-button size="small" type="text" v-if="scope.$index!=0" @click="menber=true,getData(scope.$index)"><i class="el-icon-setting"></i>设置成员</el-button>
                   <el-dialog :title="setmenber()" :visible.sync="menber" size="tiny" :before-close="handleClose">
          <el-collapse accordion>
              <el-collapse-item>
                  <template slot="title">
                    <el-checkbox label="医生"></el-checkbox>
                  </template>
                    <div><el-checkbox label="司徒怀德"></el-checkbox></div>
                    <div><el-checkbox label="李小莉"></el-checkbox></div>
              </el-collapse-item>
              <el-collapse-item>
                  <template slot="title">
                    <el-checkbox label="护士"></el-checkbox>
                  </template>
                    <div><el-checkbox label="司徒怀德"></el-checkbox></div>
                    <div><el-checkbox label="李小莉"></el-checkbox></div>
              </el-collapse-item>
              <el-collapse-item>
                  <template slot="title">
                    <el-checkbox label="收费员"></el-checkbox>
                  </template>
                    <div><el-checkbox label="司徒怀德"></el-checkbox></div>
                    <div><el-checkbox label="李小莉"></el-checkbox></div>
              </el-collapse-item>
              <el-collapse-item>
                  <template slot="title">
                    <el-checkbox label="行政"></el-checkbox>
                  </template>
                    <div><el-checkbox label="司徒怀德"></el-checkbox></div>
                    <div><el-checkbox label="李小莉"></el-checkbox></div>
              </el-collapse-item>
              <el-collapse-item>
                  <template slot="title">
                    <el-checkbox label="财务"></el-checkbox>
                  </template>
                    <div><el-checkbox label="司徒怀德"></el-checkbox></div>
                    <div><el-checkbox label="李小莉"></el-checkbox></div>
              </el-collapse-item>
          </el-collapse>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="menber = false">取 消</el-button>
                    <el-button type="primary" @click="menber = false" >确 定</el-button>
                  </span>
                </el-dialog>

               <!-- //编辑 -->
                <el-button size="small" type="text" v-if="scope.$index!=0" @click="edit=true,getData(scope.$index)"><i class="el-icon-edit"></i>编辑</el-button> 
                <el-dialog :title="editing()" v-model="edit"  size="tiny" :before-close="handleClose">
                    <el-form    label-width="100px">
                        <el-form-item label="角色">
                            <el-input v-model="juse"></el-input>
                        </el-form-item>
                        <el-form-item label="对应用户" >
                            <el-input v-model="yonghu"></el-input>
                        </el-form-item>
                       
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="edit = false">取 消</el-button>
                        <el-button type="primary" @click="edited()">确 定</el-button>
                    </div>
                </el-dialog>

                <!-- //删除 -->
                <el-button size="small" type="text" v-if="scope.$index!=0" @click=" delet=true,getData(scope.$index)"><i class="el-icon-delete"></i>删除</el-button>
                <el-dialog :title="dele()" :visible.sync="delet" size="tiny" :before-close="handleClose">
                  <i style="font-size:50px;color:red;float:left;"class="el-icon-warning" ></i>
                  <div>删除后无法恢复</div>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="delet = false">取 消</el-button>
                    <el-button type="primary" @click="delet = false,deleteRow()">确 定</el-button>
                  </span>
                </el-dialog> 

               <!--  //拥有所有权限 -->
                <el-button size="small" type="text" v-if="scope.$index==0" @click="own=true">拥有所有权限</el-button>
            </template>
        </el-table-column>  
      </el-table>
      <el-row>
      <el-form style="margin-top:50px"> 

       <!--  选择每页的显示数目 -->
      <el-col :span="3"><div>
         <el-form-item >
             <el-select  v-model="selecting" placeholder="10条/页">
             <el-option label="10条/页" value="shi" class="selected"></el-option>
             <el-option label="20条/页" value="ershi"></el-option>
             <el-option label="30条/页" value="sanshi"></el-option>
             <el-option label="50条/页" value="wushi"></el-option>
             </el-select>
         </el-form-item>
         </div></el-col>

          <!--  显示页码和跳转页 --> 
       <el-col :span="3"><div>
       <div class="block" style="margin-top:2px;">
              <el-pagination layout="prev, pager,next ,jumper" :total="100"></el-pagination>
       </div> 
       </div></el-col>
     </el-form>
    </el-row>   
</div>
    </div>

</template>

<script type="ecmascript-6">
import {api} from '../../../global/api.js'
    const perOptions = ['排班', '预约', '问诊', '收费',
                         '处方', '患者', '诊所', '统计',
                         '药品', '药品管理', '库存管理',
                         '药品调价', '项目', '模板', '系统'
    ];
    export default{  
      data(){
        return {
          checkedoption:[],
          Options:perOptions,
          ind:"null",
          juse:"null",
          juese:"",
          yonghu:"",
          caozuo:"",
          selecting:"",
          dialogVisible: false,
          permission:false,
          menber:false,
          edit:false,
          own:false,
          delet:false,
          tableData3:null
          // tableData3:[
          // {
          //   juese:"管理员",
          //   yonghu:"王管理"
          // },
          //   {
          //     juese:"医生",
          //   yonghu:"刘利伟 何颖成 黄洪峰 黄振华 胡苏 梁景炜 李辉 刘林 刘易林 李耀明 王展鹏 温智光 林水运 杨超峰 杨楚新 杨海裕 钟南"
            
          // },
          // {
          //   juese:"药师",
          //   yonghu:"刘利伟 何颖成 黄洪峰 黄振华 胡苏 梁景炜 李辉 刘林 刘易林 李耀明 王展鹏 温智光"
            
          // },
          // {
          //   juese:"护士",
          //   yonghu:"杨楚新 杨海裕 钟南"
            
          // },
          // {
          //   juese:"收费员",
          //   yonghu:"松林 吴少萍 吴宗胜 谢凤 张玉婷 周柳莹"
            
          // },
          // {
          //   juese:"财务",
          //   yonghu:"谢凤 张玉婷 周柳莹"
            
          // }
          // ]
          }
    },
    mounted:function(){
        this.getJson();
    },
    methods:{
    	getJson(){ 
            this.$http.get(api.permission).then(
                function(response){
                    // alert("请求成功");
                    console.log(response.data);
                    this.tableData3=response.data.tableData3;
                    
                },function(){
                    alert("请求不成功");
                })
        },
         //增加角色
        add:function(){
          this.tableData3.push({juese:this.juese,yonghu:this.yonghu})
        },
        
        //获取当前点击的角色，用户，下标
        getData(index){
          this.ind=index;
          this.juse=this.tableData3[index].juese;
          this.yonghu=this.tableData3[index].yonghu;
         
        },
        
        //删除角色
        deleteRow(){
           this.tableData3.splice(this.ind,1); 
        },

        //显示设置权限的当前角色
        setpermission(){
          var juese=this.juse;
          return "设置权限-"+juese;
          
        },

         //显示设置成员的当前角色
        setmenber(){
          var juese=this.juse;
          return "设置成员-"+juese;
          
        },

         //显示编辑信息的当前角色
       editing(){
          var juese=this.juse;
          return "编辑信息-"+juese;
          
       },

       //编辑后保存数据
        edited(){
          // var vm=this;
          this.tableData3[this.ind].juese=this.juse;
          this.tableData3[this.ind].yonghu=this.yonghu;
          this.edit=false;
         

        },

         //显示删除的当前角色
        dele(){
          var juese=this.juse;
          return "确认删除“"+juese+"”角色？？"
        },
        handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    
       },
      
  }
</script>

<style rel="stylesheet">

  .permission{
  	/*width:83.75%;*/
  	float: left;
    width:82%;
    padding:0 2% 30%;
    background:white; 
    position:relative;
    
  }  
  .permission .el-table{
    font-size: 15px;
    border-radius: 8px!important;
    box-shadow: 1px 1px  5px #eee!important;
  }
  .permission .el-table .el-button{
    padding-left:15px;
    font-size: 14px !important;
  }
  .permission .el-input__inner{
    border-radius: 0!important;
    height:28px!important;
   }
  .permission .el-table th{
    background:#eef1f6;
    border:solid thin #dfe6ec!important;
   } 
  .permission .el-table td{
    height: 70px!important;
   /* border:solid thin #dfe6ec!important;*/
      }
  .permission .selected{
       background:20a0ff; 
   }
</style>
