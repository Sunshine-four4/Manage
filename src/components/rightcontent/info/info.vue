<template>
    <div class="personalInfo">
    <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/loginSuccess/homepage'}">首页
          </el-breadcrumb-item>
          <el-breadcrumb-item>个人信息</el-breadcrumb-item>
        </el-breadcrumb>
  <!-- 左侧上传图片 -->
        <div class="left" >
            <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <h5><span style="margin-left:40px">医生名字</span></h5>
        </div>
        
        <div class="right">
          <!-- 右侧-个人信息 -->
          <el-col :span="24" class="right1" >
              <h3>个人信息 <el-button size="small"  @click="edit1()"  icon="edit" style="float:right">编辑</el-button>
              </h3>
  <!--个人信息编辑后-->
              <div class="user-info-form" v-if="editableRight1">
                  <el-dialog title="编辑个人信息" v-model="editableRight1" >
                       <el-form ref="form" :model="updata1">
                        <el-form-item label="用户类型：">
                          医生
                        </el-form-item>
                      
                       <el-form-item label="所属科室：">
                              <el-select v-model="value" placeholder="请选择">
                                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                  </el-option>
                              </el-select>
                       </el-form-item>

                        <el-form-item label="姓名：">
                          <el-input v-model="updata1.PerName"></el-input>
                        </el-form-item>

                        <el-form-item label="性别：">
                          <el-radio  v-model="updata1.sex" label="男">男</el-radio>
                           <el-radio  v-model="updata1.sex" label="女">女</el-radio>
                        </el-form-item>

                        <el-form-item label="年龄：">
                          <el-input v-model="updata1.age"></el-input>
                        </el-form-item>

                        <el-form-item label="职称：">
                          <el-input v-model="updata1.subtitle"></el-input>
                        </el-form-item> 

                       <el-form-item label="电话：">
                          <el-input v-model="updata1.phone"></el-input>
                        </el-form-item>

                        <el-form-item>
                          <el-button type="primary" @click="submitForm1()">提交</el-button>
                          <el-button @click="resetForm()">取消</el-button>
                        </el-form-item>
                      </el-form> 
                  </el-dialog>
              </div>
  <!-- 个人信息编辑前 -->
              <el-col :span="24" class="user-info-text" >
                  <el-form  :model="personalInfo" >
                       <el-form-item label="姓名：" >
                          {{ personalInfo.PerName }}
                        </el-form-item>

                        <el-form-item label="性别：" >
                          {{ personalInfo.sex }}
                        </el-form-item>
                      
                        <el-form-item label="年龄：" >
                          {{ personalInfo.age }}
                        </el-form-item>
                      
                        <el-form-item label="所属科室：" >
                          {{ value }}
                        </el-form-item>
                      
                        <el-form-item label="职称：">
                          {{ personalInfo.subtitle }}
                        </el-form-item>

                        <el-form-item label="电话：">
                          {{ personalInfo.phone }}
                        </el-form-item>      
                  </el-form>
              </el-col>
          </el-col>
          <!-- 右侧-账户信息 -->
          <el-col :span="24" class="right2" >
                <h3>账户信息 <el-button size="small"  @click="edit2()"  icon="edit" style="float:right">编辑</el-button>
                </h3>
  <!--账户信息编辑后-->
              <div class="user-info-form" v-if="editableRight2">
                  <el-dialog title="编辑个人信息" v-model="editableRight2"  >
                       <el-form ref="form" :model="updata2" >

                        <el-form-item label="登录账号：">
                          <el-input v-model="updata2.login"></el-input>
                        </el-form-item>

                        <el-form-item label="关联邮箱：">
                          <el-input v-model="updata2.email"></el-input>
                        </el-form-item> 

                        <el-form-item>
                          <el-button type="primary" @click="submitForm2()">提交</el-button>
                          <el-button @click="resetForm()">取消</el-button>
                        </el-form-item>
                      </el-form> 
                  </el-dialog>
              </div>
  <!-- 账户信息编辑前 -->
              <div class="user-info-text" >

                  <el-form  :model="personalInfo" >
                        <el-form-item label="登录账号：" >
                          {{ personalInfo.login }}
                        </el-form-item>

                        <el-form-item label="关联邮箱：" >
                          {{ personalInfo.email }}
                        </el-form-item>
                       
                  </el-form>
              </div>
          </el-col>
          <!-- 右侧-医生信息 -->
          <el-col :span="24" class="right3" >
                <h3>医生信息 <el-button size="small"  @click="edit3()"  icon="edit" style="float:right">编辑</el-button>
                </h3>
  <!--医生信息编辑后-->
              <div class="user-info-form" v-if="editableRight3">
                  <el-dialog title="医生信息" v-model="editableRight3"  >
                       <el-form ref="form" :model="updata3" style="width:100%">
                       <el-form-item label="姓名：" >
                          {{ personalInfo.PerName }}
                        </el-form-item>

                       <el-form-item label="挂号类型：" >
                          {{ personalInfo.ptype }}
                       </el-form-item>

                       <el-form-item label="出诊科室：">
                              <el-select v-model="value" placeholder="请选择">
                                  <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                                  </el-option>
                              </el-select>
                       </el-form-item> 

                        <el-form-item label="擅长疾病：">
                          <el-input v-model="updata3.featured"></el-input>
                        </el-form-item>
                      
                        <el-form-item label="个人介绍：">
                          <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="updata3.textarea">
                          </el-input>
                        </el-form-item>

                        <el-form-item>
                          <el-button type="primary" @click="submitForm3()">提交</el-button>
                          <el-button @click="resetForm()">取消</el-button>
                        </el-form-item>
                      </el-form> 
                  </el-dialog>
              </div>
  <!-- 医生信息编辑前 -->
              <div class="user-info-text" >

                  <el-form  :model="personalInfo" style="width:100%">
                        <el-form-item label="挂号类型：" >
                          {{ personalInfo.ptype }}
                        </el-form-item>

                        <el-form-item label="出诊科室：" >
                          {{ value }}
                        </el-form-item>

                        <el-form-item label="擅长疾病：" >
                          {{ personalInfo.featured }}
                        </el-form-item>

                        <el-form-item label="个人介绍：" >
                          {{ personalInfo.textarea }}
                        </el-form-item>
                       
                  </el-form>
              </div>
          </el-col>
        </div>
    </div>
</template>
<script type="ecmascript-6">
import {api} from '../../../global/api.js'

export default {  
 data() {
      return {
            imageUrl:'', //图片路径
            dialogVisible: false,
            editableRight1:false,
            editableRight2:false,
            editableRight3:false,
            updata1:{
                "sex":"",
                "PerName":"",
                "age":"",
                "subordinate":"",
                "subtitle":"",
                "phone":""
              },
            updata2:{  
                "login":"",
                "email":"",
              },
              updata3:{
                "ptype":"",
                "Vistation":"",
                "featured":"",
                "textarea":""
              },
            personalInfo:{
                "sex":"",
                "PerName":"",
                "age":"",
                "subordinate":"",
                "subtitle":"",
                "phone":"",
                "login":"",
                "email":"",
                "ptype":"",
                "Vistation":"",
                "featured":"",
                "textarea":""
              },
            options:null,
            value: '',
            accountInfo:null
            }
    },
    mounted:function(){
        this.getData();
      },
    methods:{
      // 获取personalInfo.json
        getData(){ 
                    this.$http.get(api.personalInfo).then(
                        function(response){
                            // alert("请求成功");
                            // console.log(response.data);
                            this.personalInfo=response.data.personalInfo;
                            this.options=response.data.options;
                        },function(){
                            alert("请求不成功");
                        })

                    }, 
        // 编辑1
        edit1(){ 
            this.updata1.PerName=this.personalInfo.PerName;
            this.updata1.sex=this.personalInfo.sex;
            this.updata1.age=this.personalInfo.age;
            this.updata1.subordinate=this.personalInfo.subordinate;
            this.updata1.subtitle=this.personalInfo.subtitle;
            this.updata1.phone=this.personalInfo.phone;
            this.editableRight1 = true;
           
        },
        // 编辑2
        edit2(){
            this.updata2.login=this.personalInfo.login;
            this.updata2.email=this.personalInfo.email;
            this.editableRight2 = true;
            
        },
        // 编辑3
        edit3(){      
            this.updata3.featured=this.personalInfo.featured;
            this.updata3.textarea=this.personalInfo.textarea;
            this.editableRight3 = true;
        },
        // 提交1
        submitForm1() {
            var vm = this;
            vm.editableRight1 = false;
            this.personalInfo.sex=this.updata1.sex;
            this.personalInfo.age=this.updata1.age;
            this.personalInfo.PerName=this.updata1.PerName;
            this.personalInfo.subordinate=this.updata1.subordinate;
            this.personalInfo.subtitle=this.updata1.subtitle;
            this.personalInfo.phone=this.updata1.phone;
            
        },
        // 提交2
         submitForm2() {
            var vm = this;
            vm.editableRight2 = false;
            this.personalInfo.login=this.updata2.login;
            this.personalInfo.email=this.updata2.email;                
        },
        // 提交3
         submitForm3() {
            var vm = this;
            vm.editableRight3 = false;
            this.personalInfo.featured=this.updata3.featured;
            this.personalInfo.textarea=this.updata3.textarea;
        },
      //重置表单
        resetForm() {
            var vm = this;
            vm.editableRight1 = false;
            vm.editableRight2 = false;
            vm.editableRight3 = false;
            // vm.personalInfo = JSON.parse( JSON.stringify(vm.personalInfo_init) ) ;
        },
        // 头像
        handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file) {
          const isJPG = file.type === 'image/jpeg';
          const isLt2M = file.size / 1024 / 1024 < 2;

          if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
          }
          if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
          }
          return isJPG && isLt2M;
        }
   }  
}

</script>
<style rel="stylesheet">
.personalInfo{
    background: #fff;
    width: 82%;
    padding:1% 2% 10%;
    float: left;
}
.personalInfo .left{
    margin-top: 10px;
    width:20%; 
    float:left;
  }
.personalInfo .right{
    width:80%;
    float: left;

}
.personalInfo .right1{
    box-shadow: 4px 4px 2px #E7E7E7;
}
.personalInfo .right1  .user-info-text .el-form-item{
    width: 50%;
    float: left;

}
.personalInfo .right2{
    box-shadow: 4px 4px 2px #E7E7E7;
    padding-top: 10px;
}
.personalInfo .right3{
    box-shadow: 4px 4px 2px #E7E7E7;
    padding-top: 10px;
}
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}


</style>