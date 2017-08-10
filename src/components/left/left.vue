<template>
	<!-- 左侧导航栏 -->
 	<div class="left">
		<el-menu default-active="1-4-1" class="el-menu-vertical-demo">
			<router-link to="/loginSuccess/homepage">
		 		<el-menu-item index="1">
				 	<i class="el-icon-menu"></i>
				 	<span slot="title">
				 		首页
				 	</span>
				</el-menu-item>
			</router-link>
			<router-link to="/loginSuccess/schedual">
		 		<el-menu-item index="2">
			 		<i class="el-icon-menu"></i>
			 		<span slot="title">
			 		  	排班
			 		</span>
			 	</el-menu-item>
		 	</router-link>
		 	<router-link to="/loginSuccess/book">
		 		<el-menu-item index="3">
			 		<i class="el-icon-setting"></i>
			 		<span slot="title">
			 		 预约
			 		</span>
			 	</el-menu-item>
		 	</router-link>
		 	<router-link to="/loginSuccess/see">
		 		<el-menu-item index="4">
		 		   	<i class="el-icon-setting"></i>
		 		   	<span slot="title">
		 		   	问诊
		 		   	</span>
		 		</el-menu-item>
	 		</router-link>
	 		<router-link to="/loginSuccess/info">
		 		<el-submenu index="5">
			 		<template slot="title">
				 		<i class="el-icon-message"></i>
				 		<span slot="title">信息</span>
			 		</template>
			 		<el-menu-item-group>
			 		    <el-menu-item index="1-1"><router-link to="/loginSuccess/info">个人信息</router-link></el-menu-item>
			    		<el-menu-item index="1-2"><router-link to="/loginSuccess/department">科室信息</router-link></el-menu-item>
			 		</el-menu-item-group>
		 		</el-submenu>
	 		</router-link>
	 		<router-link to="/loginSuccess/permission">
		 		<el-submenu index="6">
			 		<template slot="title">
			 		    <i class="el-icon-message"></i>
			 		    <span slot="title">系统</span>
			 		</template>
			 		<el-menu-item-group>
			 		    <el-menu-item index="1-1"><router-link to="/loginSuccess/permission">权限管理</router-link></el-menu-item>
			 		    <el-menu-item index="1-2"><router-link to="/loginSuccess/log">登录日志</router-link></el-menu-item>
			 		</el-menu-item-group>
		 		</el-submenu>
	 		</router-link>
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

	.left .el-menu-item.is-active:hover {
	    background: #000 !important;
	}
	
	.left .el-menu-item:hover {
	    background: #000 !important;
	}

	.left a{
		display: block;
		text-decoration: none;
	}
	
	.left .el-submenu .el-menu-item:hover, .el-submenu__title:hover {
	    background-color: #000 !important;
	}

</style>