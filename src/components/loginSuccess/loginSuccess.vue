 <template>
	<div class="loginSuccess">
		<v-left></v-left>
    <div class="right">
        <v-righthead></v-righthead>
    </div>
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

