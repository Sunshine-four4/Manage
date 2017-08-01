<template>
  <div id="app">
    <v-left></v-left>
    <div class="right">
        <v-righthead></v-righthead>
        <v-rightnav></v-rightnav>
    <!--   <div class="rightcontent">24</div> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
    import left from '@/components/left/left.vue'
    import righthead from '@/components/righthead/righthead.vue'
    import rightnav from '@/components/rightnav/rightnav.vue'
    export default {
      name: 'app',
      components:{
        'v-left':left,
        'v-righthead':righthead,
        'v-rightnav':rightnav
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
