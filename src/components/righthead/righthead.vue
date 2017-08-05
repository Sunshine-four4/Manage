 <template>
	<div class="righthead">
		<div class="lefttag">
			医院后台管理系统
		</div>
		<div class="rightUser">
			<el-dropdown split-button type="primary">
				<div class="avatar-wrapper">
                    <span class="user-name">Nick</span>
                    <img class="user-avatar" width="30px" :src="Koala" @click="handleClick">
                </div>
			  <el-dropdown-menu slot="dropdown">
			    <el-dropdown-item><el-button type="text" @click="open">首页</el-button></el-dropdown-item>
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
		    	 Koala:"../static/Koala.jpg"
		    }
		},
		methods: {
		    open() {
		       this.$alert('这是一段内容', '标题名称', {
		         confirmButtonText: '确定',
		         callback: action => {
		           this.$message({
		             type: 'info',
		             message: `action: ${ action }`
		           });
		         }
		       });
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