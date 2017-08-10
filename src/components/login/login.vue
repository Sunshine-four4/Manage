<template>
    <!-- 登录界面 -->
    <div class="login">
      <el-form ref="AccountFrom" :model="account" :rules="rules" label-position="left" label-width="0px" class="demo-ruleForm login-container">
          <h3 class="title">系统登录</h3>
          <el-form-item prop="username">
            <el-input type="text" v-model="account.username" auto-complete="off" placeholder="账号"></el-input>
          </el-form-item>
          <el-form-item prop="pwd">
            <el-input type="password" v-model="account.pwd" auto-complete="off" placeholder="密码"></el-input>
          </el-form-item>
          <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
          <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click.native.prevent="handleLogin">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
</template>

<script>
    export default{
      data(){
        return {
          logining: false,
          account: {
            username: 'admin',
            pwd: '123456'
          },
          rules: {
            username: [
              {required: true, message: '请输入账号', trigger: 'blur'},
              //{ validator: validaePass }
            ],
            pwd: [
              {required: true, message: '请输入密码', trigger: 'blur'},
              //{ validator: validaePass2 }
            ]
          },
          checked: true
        };
      },
      methods: { 
        // 点击登录进入主页面loginSuccess
        handleLogin() {
          this.$refs.AccountFrom.validate((valid) => {
            if (valid) {
              this.$router.push({ path: '/loginSuccess' });
            }
          })
        }
      }
    }
</script>

<style scoped>
    .login-container {
        width: 500px;
        margin: 0 auto;
        margin-top: 220px;
    }
    
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
    .el-button:hover{
      background-color: #20a0ff
    }
    .login-container .el-input{
      width: 488px;
    }
    .login-container .el-input__inner{
        width: 488px;
    }
</style>
