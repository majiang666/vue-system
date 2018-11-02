<template>
<div>
	<top></top>
	<div class="am-cf admin-main">
		<leftBar @curTab="showNav"></leftBar>
		<div class=" admin-content">
			<div class="daohang">
				<ul>
					<router-link tag="li" to="/mean/home">
						<button type="button" class="am-btn am-btn-default am-radius am-btn-xs">首页</button>
					</router-link>
					<router-link tag="li"  v-for="nav in mainNav" :key="nav.id" :to="nav.path">
						<button type="button" class="am-btn am-btn-default am-radius am-btn-xs">{{nav.name}}<span class="am-close am-close-spin" data-am-modal-close="" @click="closeTab(nav.name)">×</span></button>
					</router-link>
					<!-- <li><button type="button" class="am-btn am-btn-default am-radius am-btn-xs"> 首页 </button></li>
					<li><button type="button" class="am-btn am-btn-default am-radius am-btn-xs">帮助中心<a href="javascript: void(0)" class="am-close am-close-spin" data-am-modal-close="">×</a></button></li>
					<li><button type="button" class="am-btn am-btn-default am-radius am-btn-xs">奖金管理<a href="javascript: void(0)" class="am-close am-close-spin" data-am-modal-close="">×</a></button></li>
					<li><button type="button" class="am-btn am-btn-default am-radius am-btn-xs">产品管理<a href="javascript: void(0)" class="am-close am-close-spin" data-am-modal-close="">×</a></button></li> -->
				</ul>
			</div>
			<div class="admin">
				<meanBody></meanBody>
				<div class="foods">
					<ul>版权所有@2015</ul>
					<dl><a href="" title="返回头部" class="am-icon-btn am-icon-arrow-up"></a></dl>
				</div>
			</div>
		</div>
	</div>
	</div>
</template>

<script>
import top from '@/components/module/top';
import leftBar from '@/components/module/left';
import meanBody from '@/components/mean';
export default {
  name: "index",
  data:function(){ 
    return {
			msg:"hi，欢迎光临，后台管理系统",
			mainNav:[],
			navArr:[]
    }
	},
	mounted:function(){
		if(this.mainNav == ''){
			this.$router.push('/mean/home');
		}
		// console.log(this.navArr);
	},
	methods:{
		showNav:function(name){
			let mu = this.navArr.find((n) => n.name == name.name);
			if(mu){
					console.log('标签已选择..')
					return;
			}else{
					this.navArr.push(name);
			}
			this.mainNav = this.navArr;
		},
		closeTab:function(name){
			for(var i = 0; i< this.mainNav.length;i++){
				if(this.mainNav[i].name == name){
					this.mainNav.splice(i,1);
				}
			}
		}
	},
  components:{
	leftBar,
	top,
	meanBody
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
</style>
