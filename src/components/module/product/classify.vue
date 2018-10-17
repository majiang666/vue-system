<template>
  <div class="classify">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: "classify",
  data:function(){ 
    return {
      msg:"产品分类"
    }
    
  },
  components:{
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .classify{
    margin-top:60px;
    margin-left:200px;
    overflow-y: auto;
    padding:20px;
  }
</style>
