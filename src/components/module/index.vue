<template>
  <div class="index">
    <div class="index-info">{{msg}}</div>
  </div>
</template>

<script>

export default {
  name: "index",
  data:function(){ 
    return {
      msg:"hi，欢迎光临，后台管理系统"
    }
    
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .index{
    margin-top:60px;
    margin-left:200px;
    overflow-y: auto;
    padding:20px;
  }
  .index .index-info{
    text-align: center;
    font-size:30px;
    line-height: 500px;
  }
</style>
