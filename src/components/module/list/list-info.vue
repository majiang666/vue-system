<template>
  <div class="index">
    <div class="mianbao">首页 > 资讯管理 > 资讯详情</div>
    
  </div>
</template>

<script>
import listInfo from '@/components/module/list/list-info';
export default {
  name: "listInfo",
  data:function(){ 
    return {
      msg:"list-info"
    }
  },
  mounted:function(){
    console.log(this.$route.query.id)
  },
  methods:{
    
  },
  components:{
    listInfo
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>
