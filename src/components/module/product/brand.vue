<template>
  <div class="brand">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: "brand",
  data:function(){ 
    return {
      msg:"品牌"
    }
    
  },
  components:{
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .brand{
    margin-top:60px;
    margin-left:200px;
    overflow-y: auto;
    padding:20px;
  }
</style>
