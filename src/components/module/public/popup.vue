<template>
<div class="popup" @click="closePopup">
  <div class="popup-mean" @click.stop>
    <h1>{{title}}</h1>
    <slot></slot>
  </div>
</div>
</template>

<script>

export default {
  name: "popup",
  props:["title"],
  data:function(){ 
    return {
      showValue:false
    }
  },
  methods:{
     closePopup(){
       this.$emit("showVa",this.showValue)
     }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .popup{
    position: fixed;
    width:100%;
    height:100%;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: rgba(0, 0, 0, 0.5);
    z-index:9999;
  }
  .popup-mean{
    width:500px;
    height:300px;
    background: #fff;
    position: absolute;
    top:50%;
    left:50%;
    margin-top:-150px;
    margin-left:-250px;
    border-radius: 10px;
  }
  .popup-mean h1{
    height:45px;
    line-height: 45px;
    font-size:18px;
    color:#333;
    font-weight:normal;
    border-bottom:solid 1px #dedede;
    text-align: center;
  }
</style>
