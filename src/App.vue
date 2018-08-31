<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: "login"
};
</script>

<style>
*{
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #666;
  margin:0;
  padding:0;
}
body{
  font-size: 14px;
}
li{
  list-style: none;
}
input,button{
  outline: none;
}
</style>
