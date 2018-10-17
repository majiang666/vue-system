<template>
<div>
    <top></top>
    <left></left>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
  
</template>

<script>
import userInfo from '@/components/module/userInfo';
import top from "../components/module/top";
import left from "../components/module/left";
import index from "../components/module/index";
export default {
  name: "mean",
  data:function(){ 
    return {
      msg:"mean"
    }
  },
  components:{
    top,
    left,
    index,
    userInfo
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
