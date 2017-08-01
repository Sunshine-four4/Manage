 <template>
	<div class="righthead">
		<div class="rightTitle">
			电影后台管理系统
		</div>
		<div class="rightUser">
			<el-dropdown split-button type="primary">
				<div class="avatar-wrapper">
                    <span class="user-name">Nick</span>
                    <img class="user-avatar" :src="imgURL" @click="handleClick">
                </div>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item>首页</el-dropdown-item>
			    <el-dropdown-item>切换主题</el-dropdown-item>
			    <el-dropdown-item>修改密码</el-dropdown-item>
			    <el-dropdown-item>退出登录</el-dropdown-item>
			  </el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script type="esmascript">

	export default {
		data() {
		    return {
		    	imgURL:'@/assets/img.jpg'
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
	.rightTitle{
		float: left;
		font-size: 32px;
		text-align: center;
	}
	.el-button{
		background: none;
	    color: #000;
	    border: none;
	}
	.el-dropdown__caret-button{
		position: relative;
		top: -4px;
	}

	.el-button:focus,.el-button:hover{
		background:#eef1f6;
		color: #000;
	}
	.avatar-wrapper .user-name{
	    position: relative;
	    top: -6px;
	}

</style> 