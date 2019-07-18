<template>
	<section class="login">
		<header>
			<span class="back" @click = "back()"></span>
		</header>
		<p class="in">
			<i class="username"></i>
			<input type="text" name="username" placeholder="请输入您的用户名" ref="username">
		</p>
		<p class="in">
			<i class="password"></i>
			<input type="password" name="password" placeholder="请输入您的密码" ref="password">
		</p>
		<p class="in">
			<i class="code"></i>
			<input type="text" name="code" placeholder="请输入验证码" ref="code">
			<span @click = "createCode()">{{this.checkCode}}</span>
		</p>
		<p>
			<router-link to='/login' class="forget">
				忘记密码？
			</router-link>
		</p>
		<button class="loginSure" @click = "login();createCode();">登录</button>
		<button class="register">
			<router-link to='/register'>立即注册</router-link>
		</button>
		<footer>
			<router-link to='/index'>
				<img src="../assets/img/yiguo_logo.png">
			</router-link>
		</footer>
	</section>
</template>

<style type="text/css" scoped>
	.login{
		width: 100%;
		max-width: 750px;
		height: 100%;
		background: #f8f8f8;
	}
	header{
		height: 42px;
		position: relative;
	}
	header .back{
		display: block;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background-color: rgba(0,136,66,0.9);
		background-image: url(../assets/img/icon_back.svg);
		background-repeat: no-repeat;
		background-size: 60% 60%;
		background-position: 8px center;
		position: absolute;
		top: 5px;
		left: 8px;
	}
	p{
		padding-left: 20px;
		text-align: left;
	}
	.in:nth-child(4) input{
		border: none;
	}
	.in:nth-child(2){
		border-top: 1px solid #d9dfd5;
	}
	.in:nth-child(4){
		border-bottom: 1px solid #d9dfd5;
	}
	.in:nth-child(4) span{
		display: block;
		width: 68px;
		height: 30px;
		position: absolute;
		top: 14px;
		right: 16px;
		background: #008842;
		color: white;
		font-size: 16px;
		line-height: 30px;
		text-align: center;
		letter-spacing: 5px;
	}
	.in{
		background-color: white;
		position: relative;
	}
	input{
		width: 100%;
		height: 60px;
		border: none;
		padding: 15px 0px;
		padding-left: 30px;
		font-size: 16px;
		border-bottom: 1px solid #e7e7e7;
		box-sizing: border-box;
	}
	i{
		position: absolute;
		top: 20px;
		display: inline-block;
		width: 18px;
		height: 20px;
	}
	.username{
		background: url(../assets/img/icon_username.png) 50% no-repeat;
		background-size: 100% 100%;
	}
	.password{
		background: url(../assets/img/icon_password.png) 50% no-repeat;
		background-size: 100% 100%;
	}
	.code{
		background: url(../assets/img/icon_code.png) 50% no-repeat;
		background-size: 100% 100%;
	}
	.forget{
		display: block;
		padding: 20px 0px;
		font-size: 15px;
		color: #008842;
	}
	button{
		width: 40%;
		height: 40px;
		border: 1px solid #008842;
		border-radius: 5px;
		font-size: 16px;
		float: left;
	}
	.loginSure{
		background: #008842;
		margin-left: 8%;
		margin-right: 2%;
		color: white;
		line-height: 36px;
	}
	.register{
		background: white;
		margin-left: 2%;
		margin-right: 8%;
	}
	.loginSure a{
	}
	.register a{
		color: #008842;
		display: inline-block;
		width: 100%;
		height: 100%;
		line-height: 36px;
	}
	footer{
		position: absolute;
		bottom: 15px;
		left: 50%;
		transform: translateX(-50%);
		padding: 10px;
	}
	footer img{
		width: 105px;
		height: 35px;
	}
</style>

<script type="text/javascript">
	import { Toast } from 'mint-ui';
	export default{
		data(){
			return{
				checkCode : ''
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			createCode(){
				var Code = "";
				var codeLength = 4;
				var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
				for(var i=0;i<codeLength;i++){
					var index = Math.floor(Math.random()*36);
					Code += random[index];
				}
				this.checkCode = Code;
			},
			login(){
				this.$http.get('./data/login.php',{
					params:{
						username: this.$refs.username.value,
						password: this.$refs.password.value,
						code: this.$refs.code.value.toUpperCase(),
						checkCode: this.checkCode.toUpperCase()
					}
				})
				.then((res)=>{
					if (res.data == '正在登录中'){
						this.$store.commit('changeLogin');
						this.$router.push("/my")
					} else{
						Toast(res.data);
					}
				})
				.catch(()=>{

				})
				.finally((f)=>{
					console.log("请求结束了")
				})
			}
		}
	}
</script>