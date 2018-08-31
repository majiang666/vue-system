<template>
  <div class="search">
    <select name="" id="" v-model="searchClassify">
      <option value="0">全部分类</option>
      <option value="1">分类1</option>
      <option value="2">分类2</option>
    </select>
    搜索内容：
    <input type="text" v-model="searchTxt">
    <button @click="searchBtn">搜索</button>
  </div>
</template>

<script>
export default {
  name: "search",
  data:function(){ 
    return {
      searchTxt:"",
      searchClassify:"0"
    } 
  },
  methods:{
    searchBtn(){
      let data = {};
      data.searchTxt = this.searchTxt;
      data.searchClassify = this.searchClassify;
      this.$emit("showInfo",data)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .search select{
    width:100px;
    height:26px;
    border:solid 1px #dedede;
  }
  .search input{
    width:150px;
    height:26px;
    border:solid 1px #dedede;
    margin:0 10px;
  }
  .search button{
    width:60px;
    height:26px;
    background: #42a6ef;
    border:0;
    color:#fff;
    line-height: 26px;
    vertical-align: middle;
  }
</style>
