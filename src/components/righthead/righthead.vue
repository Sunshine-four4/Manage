 <template>
 	<!-- 右侧头部 -->
	<div class="righthead">
		<!-- 标题 -->
		<div class="lefttag">
			医院后台管理系统
		</div>
		<!-- 右侧的头像及下拉导航 -->
		<div class="rightUser">
			<el-dropdown split-button type="primary">
				<div class="avatar-wrapper">
                    <span class="user-name">Nick</span>
                    <img class="user-avatar" width="30px" src="../../assets/Koala.jpg">
                </div>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item>
			    	<el-button type="text" @click="open">首页</el-button>
			    </el-dropdown-item>
			    <el-dropdown-item>切换主题</el-dropdown-item>
			    <el-dropdown-item>修改密码</el-dropdown-item>
			    <el-dropdown-item><el-button type="text" @click="exit">退出登录</el-button></el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script type="esmascript">

	export default {
		methods: {
		    open() {
		       this.$router.push('/loginSuccess/homepage')
		    },
		    exit() {
		       this.$router.push('/login')
		    }
		}
	}
</script>

<style rel="stylesheet">
	.righthead{
		height:38px;
		background:#eef1f6;
		padding:1% 2%;
	}
	.rightUser{
		float:right;
	}
	.lefttag{
		float: left;
		font-size: 32px;
		text-align: center;
	}
	.righthead .el-button{
		background: none;
	    color: #000;
	    border: none;
	}
	.righthead .el-dropdown__caret-button{
		position: relative;
		top: -4px;
	}

	.righthead .el-button:focus,.el-button:hover{
		background:#eef1f6;
		color: #000;
	}
	.righthead .avatar-wrapper .user-name{
	    position: relative;
	    top: -6px;
	}

</style> 