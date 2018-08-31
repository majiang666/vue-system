<template>
<div class="tips">
  {{title}}
</div>
</template>

<script>

export default {
  name: "tips",
  props:["title"],
  data:function(){ 
    return {
      
    }
  },
  methods:{
   
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tips{
    position: fixed;
    height:35px;
    line-height: 35px;
    left:0;
    right:0;
    bottom:10%;
    background: rgba(0, 0, 0, 0.5);
    z-index:9999;
    text-align: center;
    color:#fff;
    width:120px;
    margin:0 auto;
    border-radius: 20px;
  }
  
</style>
