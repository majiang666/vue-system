<template>
    <div class="other">
        {{ msg }}
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            msg:"11111111111111"
        }
    },
  mounted:function(){
    //   this.$nextTick( () => {
   this.bus.$on("test",msg => {
       this.msg = msg;
   });
    //   });
  }
}
</script>

<style>

</style>

