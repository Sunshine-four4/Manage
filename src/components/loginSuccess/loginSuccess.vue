 <template>
	<div class="loginSuccess">
    <!-- 左侧导航栏 -->
		<v-left></v-left>
    <!-- 右侧 -->
    <div class="right">
        <!-- 右侧的头部 -->
        <v-righthead></v-righthead>
    </div>
     <!-- 渲染组件 -->
    <router-view></router-view>
	</div>
</template>

<script>
    import left from '@/components/left/left.vue'
    import righthead from '@/components/righthead/righthead.vue'

    export default {
      name: 'app',
      components:{
        'v-left':left,  
        'v-righthead':righthead
      }
    }
</script>

<style>
    *{
      margin:0px;
      padding:0px;
    }
    .right{
      float:left;
      width:86%;
    }
    .rightcontent{
      clear:both;
    }
</style>

