<template>
<div>
  <div class="top">
    <div class="top-left">
      <img src="../../assets/img/logo.png" alt="" width="40">
      <h1>{{msg}}</h1>
    </div>
    <div class="top-right">
      <span class="user">欢迎您，超级管理员，<em @click="showP">{{user}}</em></span>
      <span @click="loginOut">退出</span>
    </div>
  </div>
  <transition name="fade">
  <popup v-show="showPopup" @showVa="showV" :title="titles">
    <div class="userInfo">
      管理员信息
    </div>
  </popup>
  </transition>
</div>
</template>

<script>
import popup from "@/components/module/public/popup";
export default {
  name: "login",
  data:function(){ 
    return {
      msg:"后台管理系统",
      user:"admin",
      showPopup:false,
      titles:"个人信息"
    }
  },
  components:{
    popup
  },
  computed:{
    
  },
  methods:{
    loginOut(){
      sessionStorage.removeItem("accessToken");
      this.$router.push({path:'/'});
    },
     showP(){
       this.showPopup=true
     },
     showV(json){
       this.showPopup = json;
     }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  em{
    font-style: normal;
    color:#f60;
  }
  .top{
    height:60px;
    background: #42a6ef;
    padding:0 20px;
    line-height: 60px;
    position: fixed;
    top:0;
    left:0;
    width:calc(100% - 20px * 2);
  }
  .top h1{
    font-weight:normal;
    font-size:20px;
    color:#fff;
  }
  .top img{
    margin-top:10px;
    float: left;
    margin-right:20px;
  }
  .top-left{
    float:left;
    width:40%;
  }
  .top-right{
    float: right;
  }
  .top-right span{
    color:#fff;
  }
  .user{
    font-size:14px;
    margin-right:20px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .userInfo{
    padding:10px;
  }
</style>
