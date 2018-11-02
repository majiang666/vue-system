<template>
<div class="nav-navicon admin-main admin-sidebar">
    <div class="sideMenu am-icon-dashboard" style="color:#aeb2b7; margin: 10px 0 0 0;"> 欢迎系统管理员：admin</div>
    <div class="sideMenu">
		<div v-for="item in navList" :key="item.id">
			<h3 @click="leftMenu()" :class="item.icon"><em></em> <a href="javascript:;">{{item.name}}</a></h3>
			<ul>
				<!-- <li><router-link to="/mean/list">商品列表</router-link></li> -->
				<!-- <li class="func" dataType='html' dataLink='msn.htm' iconImg='images/msn.gif'>添加新商品</li> -->
				<li @click="curNav(itemChild.name,itemChild.path,index)" v-for="(itemChild,index) in item.childrenList" :key="itemChild.id"><router-link :to="itemChild.path">{{itemChild.name}}</router-link></li>
				<!-- <li>用户评论</li>
				<li>商品回收站</li>
				<li>库存管理 </li> -->
			</ul>
		</div>
      <!-- <h3 class="am-icon-cart-plus"><em></em> <a href="#">订单管理</a></h3>
      <ul>
        <li>订单列表</li>
        <li>合并订单</li>
        <li>订单打印</li>
        <li>添加订单</li>
        <li>发货单列表</li>
        <li>换货单列表</li>
      </ul>
      <h3 class="am-icon-users"><em></em> <a href="#">会员管理</a></h3>
      <ul>
        <li>会员列表 </li>
        <li>未激活会员</li>
        <li>团队系谱图</li>
        <li>会员推荐图</li>
        <li>推荐列表</li>
      </ul>
      <h3 class="am-icon-volume-up"><em></em> <a href="#">信息通知</a></h3>
      <ul>
        <li>站内消息 /留言 </li>
        <li>短信</li>
        <li>邮件</li>
        <li>微信</li>
        <li>客服</li>
      </ul>
      <h3 class="am-icon-gears"><em></em> <a href="#">系统设置</a></h3>
      <ul>
        <li>数据备份</li>
        <li>邮件/短信管理</li>
        <li>上传/下载</li>
        <li>权限</li>
        <li>网站设置</li>
        <li>第三方支付</li>
        <li>提现 /转账 出入账汇率</li>
        <li>平台设置</li>
        <li>声音文件</li>
      </ul> -->
    </div>
    <!-- sideMenu End --> 
</div>
</template>

<script>
export default {
  name: "left",
  data:function(){
    return {
		navList:[]
    }
  },
  methods:{
    leftMenu:function(){
      this.$nextTick(function(){
        $(".sideMenu").slide({
          titCell:"h3", //鼠标触发对象
          targetCell:"ul", //与titCell一一对应，第n个titCell控制第n个targetCell的显示隐藏
          effect:"slideDown", //targetCell下拉效果
          delayTime:500 , //效果时间
          triggerTime:150, //鼠标延迟触发时间（默认150）
          defaultPlay:true,//默认是否执行效果（默认true）
          returnDefault:false, //鼠标从.sideMen移走后返回默认状态（默认false）
          trigger:"click"
        });
      })
	},
	navdata:function(){
		this.$ajax.get('http://localhost:8080/data/nav.json',{}).then((data) => {
			this.navList = data.data.navList;
		}).catch((error) => {
			console.log(error);
		})
	},
	curNav:function(name,path,index){
		let namePath = {
			"id":index,
			"name":name,
			"path":path
		}
		this.$emit("curTab",namePath);
	}
  },
  mounted:function(){
	this.navdata();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.sideMenu h3:before{
		margin-right:5px;
	}
</style>
