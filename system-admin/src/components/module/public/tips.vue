<template>
<div class="tips">
  <div class="am-alert am-alert-warning">
    <button type="button" class="am-close" @click="closeWin()">&times;</button>
    <p>{{title}}</p>
  </div>
</div>
</template>

<script>
export default {
    name: "tips",
    props:["title"],//父级传递过来提示内容
    data:function(){ 
      return {
      
      }
    },
    methods:{
      closeWin:function(){
        this.$emit("tipsFlag",false);//关闭提示
      }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tips{
    position: fixed;
    top:10px;
    right:0;
    min-width:200px;
  }
  .tips p{
    color:#fff;
  }
</style>
