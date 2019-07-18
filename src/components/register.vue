<template>
	<div class="register">
		<header>
			<span class="back" @click = "back()"></span>
		</header>
		<p class="re">
			<input type="text" name="telephone" placeholder="请输入您的手机号" ref="tel">
			<span class="code">获取验证码</span>
		</p>
		<p class="re">
			<input type="text" name="code" placeholder="请输入您的验证码" ref="code">
		</p>
		<p class="re">
			<input type="password" name="pass01" placeholder="请设置您的密码" ref="pass01">
		</p>
		<p class="re">
			<input type="password" name="pass02" placeholder="请再次输入您的密码" ref="pass02">
		</p>
		<p class="check">
			<input type="checkbox" name="" ref="check">
			我已阅读
			<span>《易果服务协议》《隐私条款》</span>
			并同意
		</p>
		<button @click="check()">注册</button>
	</div>
</template>

<style type="text/css" scoped>
	.register{
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
	.re{
		padding-left: 20px;
		text-align: left;
	}
	.re:nth-child(4) input{
		border: none;
	}
	.re:first-child{
		border-top: 1px solid #d9dfd5;
	}
	.re:nth-child(4){
		border-bottom: 1px solid #d9dfd5;
	}
	.re{
		background-color: white;
		position: relative;
	}
	.re input{
		width: 100%;
		height: 60px;
		border: none;
		padding: 15px 0px;
		font-size: 16px;
		border-bottom: 1px solid #e7e7e7;
		box-sizing: border-box;
	}
	.code{
		width: 72px;
		height: 30px;
		line-height: 30px;
		position: absolute;
		top: 15px;
		right: 15px;
		background: #008842;
		text-align: center;
		color: white;
		border-radius: 5px;
	}
	.check{
		padding-top: 12px;
		color: #8d8a8a;
		position: relative;
		text-align: center;
	}
	.check input{
		position: relative;
		top: 3px;
	}
	.check span{
		color: #008842;
	}
	button{
		width: 50%;
		height: 40px;
		background: #008842;
		border: none;
		margin-top: 25px;
		border-radius: 5px;
		font-size: 16px;
		color: white;
		line-height: 40px;
	}
</style>

<script type="text/javascript">
	import { Toast } from 'mint-ui';
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			},
			check(){
				var flag = (/^1[3-9]\d{9}$/.test(this.$refs.tel.value));
				if (this.$refs.tel.value == ''){
					Toast("手机号不能为空");
				} else if(this.$refs.code.value == ''){
					Toast("验证码不能为空")
				} else if(this.$refs.pass01.value == '') {
					Toast("请设置您的密码")
				} else if(this.$refs.pass02.value ==''){
					Toast("请再次输入您的密码")
				} else if(this.$refs.check.checked == false){
					Toast("请阅读协议并同意")
				} else if (flag == false) {
					Toast("请输入正确的手机号")
				} else if(this.$refs.pass02.value != this.$refs.pass01.value){
					Toast("两次密码不一致")
				} else{
					this.$store.commit('changeLogin');
					this.$router.push("/my")
				}
			}
		}
	}
</script>