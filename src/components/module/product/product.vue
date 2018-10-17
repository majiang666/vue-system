<template>
  <div class="product">
    {{msg}}
  </div>
</template>

<script>
export default {
  name: "product",
  data:function(){ 
    return {
      msg:"产品列表"
    }
    
  },
  components:{
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .product{
    margin-top:60px;
    margin-left:200px;
    overflow-y: auto;
    padding:20px;
  }
</style>
