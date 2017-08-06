<template>
 	<div class="left">
		<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
	 		<el-menu-item index="1">
			 	<i class="el-icon-menu"></i>
			 	<span slot="title">
			 		<router-link to="/homepage">首页</router-link>
			 	 </span>
			</el-menu-item>
	 		<el-menu-item index="2">
		 		<i class="el-icon-menu"></i>
		 		<span slot="title">
		 		  	<router-link to="/schedual">排班</router-link>
		 		</span>
		 	</el-menu-item>
	 		<el-menu-item index="3">
		 		<i class="el-icon-setting"></i>
		 		<span slot="title">
		 		 <router-link to="/book">预约</router-link>
		 		</span>
		 	</el-menu-item>
	 		<el-menu-item index="4">
	 		   	<i class="el-icon-setting"></i>
	 		   	<span slot="title">
	 		   	<router-link to="/see">问诊</router-link>
	 		   	</span>
	 		</el-menu-item>
	 		<el-submenu index="5">
		 		<template slot="title">
			 		<i class="el-icon-message"></i>
			 		<span slot="title"><router-link to="/info">信息</router-link></span>
		 		</template>
		 		<el-menu-item-group>
		 		    <el-menu-item index="1-1"><router-link to="/info">个人信息</router-link></el-menu-item>
		    		<el-menu-item index="1-2"><router-link to="/department">科室信息</router-link></el-menu-item>
		 		</el-menu-item-group>
	 		</el-submenu>
	 		<el-submenu index="6">
		 		<template slot="title">
		 		    <i class="el-icon-message"></i>
		 		    <span slot="title"><router-link to="/permission">系统</router-link></span>
		 		</template>
		 		<el-menu-item-group>
		 		    <el-menu-item index="1-1"><router-link to="/permission">权限管理</router-link></el-menu-item>
		 		    <el-menu-item index="1-2"><router-link to="/log">登录日志</router-link></el-menu-item>
		 		</el-menu-item-group>
	 		</el-submenu>
		</el-menu>
 	</div>
</template>

<script type="esmascript">
	export default{
	}
</script>

<style rel="stylesheet">
	.left{
	    float:left;
	    width:14%;
	    background-color:#eee;
	}
	.left li{
		 background:#324D56 !important;
	}
	.left .el-menu li a,.left .el-menu span,.left .el-menu i{
		
		font-family: "黑体";
		color:#94A1AA;
	}
	body{
		background:#324D56;
	}

</style>