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
		 		  	<router-link to="/example">实例表格</router-link>
		 		</span>
		 	</el-menu-item>
	 		<el-menu-item index="3">
		 		<i class="el-icon-setting"></i>
		 		<span slot="title">
		 		 <router-link to="/hotmovie">热映电影</router-link>
		 		</span>
		 	</el-menu-item>
	 		<el-menu-item index="4">
	 		   	<i class="el-icon-setting"></i>
	 		   	<span slot="title">
	 		   	<router-link to="/searchmovie">电影搜索</router-link>
	 		   	</span>
	 		</el-menu-item>
	 		<el-submenu index="5">
		 		<template slot="title">
			 		<i class="el-icon-message"></i>
			 		<span slot="title"><router-link to="/formedit">综合实例</router-link></span>
		 		</template>
		 		<el-menu-item-group>
		 		    <el-menu-item index="1-1"><router-link to="/formedit">form表单编辑</router-link></el-menu-item>
		    		<el-menu-item index="1-2"><router-link to="/textedit">富文本编辑</router-link></el-menu-item>
		 		    <el-menu-item index="1-3"><router-link to="/smallcomponent">小组件</router-link></el-menu-item>
		 		</el-menu-item-group>
		 		<el-submenu index="1-4">
		 		    <span slot="title"><router-link to="/401">第二级菜单</router-link></span>
		 		    <el-menu-item index="1-4-1"><router-link to="/401">没权限重定向401</router-link></el-menu-item>
		 		   	<el-menu-item index="1-4-2"><router-link to="/404">地址错误404</router-link></el-menu-item>
		 		</el-submenu>
	 		</el-submenu>
	 		<el-submenu index="6">
		 		<template slot="title">
		 		    <i class="el-icon-message"></i>
		 		    <span slot="title">系统设置</span>
		 		</template>
		 		<el-menu-item-group>
		 		    <el-menu-item index="1-1"><router-link to="/permission">权限管理</router-link></el-menu-item>
		 		    <el-menu-item index="1-2"><router-link to="/log">登录日志</router-link></el-menu-item>
		 		</el-menu-item-group>
	 		</el-submenu>
		</el-menu>
		<router-view></router-view> 
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
</style>