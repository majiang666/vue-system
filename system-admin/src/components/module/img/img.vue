<template>
  <div class="img-mode">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: "pic",
  data:function(){ 
    return {
      msg:"图片模板"
    }
    
  },
  components:{
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .img-mode{
    margin-top:60px;
    margin-left:200px;
    overflow-y: auto;
    padding:20px;
  }
</style>
