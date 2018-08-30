<template>
  <div class="index">
    <div class="mianbao">首页 > 资讯管理</div>
    <search  v-on:showInfo="showWord"></search>
    <button class="add" @click="showList">添加数据</button>
    <div class="list-mean">
      <table width="100%" cellspacing="0" cellpadding="0">
        <thead>
          <th width="10%">序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>工作</th>
          <th width="10%">操作</th>
        </thead>
        <tbody>
          <tr v-for="(item,index) in dataList" :key="item.id">
            <td>{{index + 1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.age}}</td>
            <td>{{item.work}}</td>
            <td><a href="javascript:;" @click="delData(index)">删除</a></td>
          </tr>
        </tbody>
      </table>
    </div>
    <transition name="fade">
      <popup v-show="showPopup" @showVa="showV" :title="titles">
        <div class="userInfo">
          <p>姓名：<input type="text" placeholder="请输入姓名" v-model="name"></p>
          <p>年龄：<input type="text" placeholder="请输入年龄" v-model="age"></p>
          <p>工作：<input type="text" placeholder="请输入工作" v-model="work"></p>
          <button class="subBtn" @click="subData">提交</button>
        </div>
      </popup>
    </transition>
    <tips :title="tipsTxt" v-if="tipsTag"></tips>
  </div>
</template>

<script>
import search from '@/components/module/public/search';
import popup from '@/components/module/public/popup';
import tips from '@/components/module/public/tips';
export default {
  name: "list",
  data:function(){ 
    return {
      name:"",
      age:"",
      work:"",
      showPopup:false,
      tipsTxt:"",
      titles:"添加数据",
      tipsTag:false,
      dataList:[
        {
          id:"12121210",
          name:"张三",
          age:18,
          work:"吃饭"
        },
        {
          id:"12121211",
          name:"李四",
          age:26,
          work:"睡觉"
        },
        {
          id:"12121212",
          name:"赵六",
          age:30,
          work:"fuck you!"
        }
      ]
    }
  },
  mounted:function(){
    // 为给定 ID 的 user 创建请求
    // axios.get('https://api.github.com/users/octocat/gists')
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    // });

  },
  methods:{
    subData(){
      if(this.name == ""){
        this.tipsTag = true;
        this.tipsTxt = "请输入姓名";
        setTimeout(() => {
           this.tipsTag = false;
         },2000);
        return;
      }else if(this.age == ""){
        this.tipsTag = true;
        this.tipsTxt = "请输入年龄";
        setTimeout(() => {
           this.tipsTag = false;
         },2000);
        return;
      }else if(this.work == ""){
        this.tipsTag = true;
        this.tipsTxt = "请输入工作";
        setTimeout(() => {
           this.tipsTag = false;
         },2000);
        return;
      }
      let params = {};
      params.name = this.name;
      params.age = this.age;
      params.work = this.work;
      console.log(params);
      this.dataList.push(params);
      this.name="";
      this.age="";
      this.work="";
      this.showPopup = false;
    },
    showWord(data){
      console.log(data)
    },
    showV(json){
      console.log(json);
       this.showPopup = json;
    },
    showList(){
      this.showPopup = true;
    },
    delData(index){
      console.log(index);
      this.dataList.splice(index,1);
    }
  },
  components:{
    search,
    popup,
    tips
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .mianbao{
   margin-bottom:20px;
   border-bottom:solid 1px #dedede;
   padding-bottom:20px;
 }
 .list-mean table{
   border:solid 1px #dedede;
   margin-top:20px;
   border-left:0;
   border-bottom:0;
 }
 .list-mean table td,.list-mean table th{
   border-left:solid 1px #dedede;
   padding:5px;
   text-align: center;
    border-bottom:solid 1px #dedede;
 }
 .list-mean table th{
   background: #f5f5f5;
 }
 button.add{
   width:80px;
   height:30px;
   border:0;
   line-height: 30px;
   text-align: center;
   background: #f60;
   color:#fff;
   margin-top:15px;
 }
 .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .userInfo{
    padding:20px;
  }
  .userInfo input{
    height:26px;
  }
  .userInfo p{
    margin-bottom:10px;
  }
  .subBtn{
    width:80px;
    height:35px;
  }
</style>
