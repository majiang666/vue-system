<template>
  <div class="login">
    <button @click="showData">点击传递</button>
    <div style="color:#fff;" v-if="showLoading">loading...</div>
    <div class="login-mean">
      <h1>{{title}}</h1>
      <ul>
        <li><input type="text" placeholder="用户名" v-model="userName"></li>
        <li><input type="password" placeholder="密码" v-model="passWord"></li>
        <li><button @click="jumpIndex">登录</button></li>
      </ul>
    </div>
    <tips :title="tipsTxt" v-if="tipsTag"></tips>
  </div>
</template>

<script>
import tips from '@/components/module/public/tips';
export default {
  name: "login",
  data:function(){ 
    return {
      title:"登录",
      userName:"",
      passWord:"",
      params:{},
      tipsTxt:"",
      tipsTag:false,
      showLoading:false
    }
  },
  components:{
    tips
  },
  methods:{
    showData:function(){
      console.log(this.bus);
      this.$router.push({ path: './other' });
      this.$nextTick( () => {
        this.bus.$emit("test","反反复复反反复复反反复复");
      });
    },
    jumpIndex:function(){
      if(this.userName == ""){
         this.tipsTxt= '请输入用户名';
         this.tipsTag = true;
         var that = this;
         setTimeout(function(){
           that.tipsTag = false;
         },2000);
         return;
      }else if(this.passWord == ""){
        this.tipsTxt= '请输入密码';
        this.tipsTag = true;
        var that = this;
         setTimeout(function(){
           that.tipsTag = false;
         },2000);
        return;
      }
      this.params.userName = this.userName;
      this.params.passWord = this.passWord;
      console.log(this.params);
      this.$router.push('/mean');
      sessionStorage.setItem("accessToken","1");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login{
    position: absolute;
    top:0;
    left:0;
    right:0;
    height:100%;
    background: url(../assets/img/bg.jpg) no-repeat;
    background-size: 100% 100%;
  }
  .login h1{
    text-align: center;
    font-size:30px;
    color:#333;
    font-weight:normal;
    margin-bottom:20px;
  }
  .login-mean{
    width: 450px;
    height:300px;
    background: rgba(255, 255, 255, .8);
    position: absolute;
    top:50%;
    left:0;
    z-index: 999;
    right:0;
    margin:-175px auto 0 auto;
    border-radius: 4px;
    padding:20px;
  }
  .login-mean ul li{
    height:45px;
    margin-bottom:15px;
  }
  .login-mean ul li input{
    height:45px;
    line-height:45px;
    border:0;
    width:calc(100% - 20px);
    border-radius: 4px;
    padding:0 10px;
    font-size:14px;
  }
  .login-mean ul li button{
    height:45px;
    line-height:45px;
    background: #f60;
    border:0;
    width:100%;
    font-size:16px;
    border-radius: 4px;
    color:#fff;
  }
</style>
