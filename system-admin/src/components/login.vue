<template>
	<div class="login">
		<div class="header">
			<div class="am-g">
				<h1>后台管理系统</h1>
				<p>Hello,world!<br/>基于amazeUI，练习后台管理系统</p>
			</div>
			<hr />
		</div>
		<div class="am-g">
			<div class="am-u-lg-6 am-u-md-8 am-u-sm-centered">
				<h3>登录</h3>
				<hr><br>
				<form method="post" class="am-form">
					<label for="email">用户名:</label>
					<input type="email" placeholder="用户名" v-model="userName">
					<br>
					<label for="password">密码:</label>
					<input type="password" placeholder="密码" @keyup.enter="jumpIndex" v-model="passWord">
					<br>
					<label for="remember-me">
						<input id="remember-me" type="checkbox">
						记住密码
					</label>
					<br />
					<div class="am-cf">
						<input type="button" @click="jumpIndex" value="登 录" class="am-btn am-btn-primary am-btn-sm am-fl">
						<input type="button" name="" value="忘记密码 ^_^? " class="am-btn am-btn-default am-btn-sm am-fr">
					</div>
				</form>
				<hr>
				<p>© 2018 AllMobilize, Inc. Licensed under MIT license.</p>
			</div>
		</div>
		<tips :title="titles" @tipsFlag="tFlag" v-if="tipFlag"></tips>
	</div>
</template>

<script>
import tips from '@/components/module/public/tips';
export default {
	name: "login",
	data:function(){ 
		return {
			userName:"",
			passWord:"",
			params:{},
			titles:"",
			tipFlag:false
		}
	},
	components:{
		tips //引入提示模块
	},
	methods:{
		tFlag:function(v){
			this.tipFlag = v;
		},
		jumpIndex:function(){
			//校验用户名、密码
			if(this.userName == ""){
				this.titles = "请输入用户名"
				this.tipFlag = true;
				setTimeout(() => {
					this.tipFlag = false;
				}, 2000);
				return;
			}else if(this.passWord == ""){
				this.titles = "请输入密码"
				this.tipFlag = true;
				setTimeout(() => {
					this.tipFlag = false;
				}, 2000);
				return;
			}
			this.params.userName = this.userName;
			this.params.passWord = this.passWord;
			// console.log(this.params);
			this.$ajax.get('http://localhost:8080/data/login.json',this.params)
			.then((data) => {
				// console.log(data);
				if(this.userName == data.data.bean.userName && this.passWord == data.data.bean.password){
					this.$router.push('/mean/home');
					sessionStorage.setItem("accessToken","1");
				}else{
					this.titles = "用户名或密码错误"
					this.tipFlag = true;
					setTimeout(() => {
						this.tipFlag = false;
					}, 2000);
				}
			}).catch((error) => {
				console.log(error);
			})
			
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.header {
        text-align: center;
    }
    .header h1 {
        font-size: 200%;
        color: #333;
        margin-top: 30px;
    }
    .header p {
        font-size: 14px;
    }
</style>
