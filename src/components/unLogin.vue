<template>
	<div class="header">
		<div class="header-img">
			<img src="../assets/img/no-pic.jpg">
			<router-link to='/login'>
				<p>登录/注册</p>
			</router-link>
		</div>
		<div class="setting">
			<router-link to='/my'></router-link>
		</div>
		<div class="acount">
			<p class="list">
				<span class="num">-</span>
				<span class="txt">卡包余额</span>
			</p>
			<p class="list">
				<span class="num">-</span>
				<span class="txt">悠币</span>
			</p>
		</div>
	</div>
</template>

<style type="text/css" scoped>
	.header{
		position: relative;
		width: 100%;
		box-sizing: border-box;
		overflow: hidden;
	}
	.header .header-img{
		position: relative;
		display: inline-block;
		width: 100%;
		padding-left: 13px;
		padding-top: 26px;
		padding-bottom: 35px;
		box-sizing: border-box;
		background: #2dd282  url(../assets/img/bgimg.jpg) no-repeat 100%;
		background-size: 100%;
	}
	.header .header-img img{
		width: 65px;
		height: 65px;
		border-radius: 50%;
		float: left;
		border: 4px solid rgba(255,255,255,.5);
		box-sizing: border-box;
	}
	.header .header-img a{
		padding-top: 27px;
		padding-left: 18px;
		float: left;
	}
	.header .header-img a p{
		float: left;
		font-size: 14px;
		color: white;
	}

	.header .setting{
		position: absolute;
		top: 10px;
		right: 14px;
		width: 16px;
	}
	.header .setting a{
		display: block;
		width: 100%;
		padding-bottom: 100%;
		background: url(../assets/img/setting.png) no-repeat;
		background-size: 100% 100%;
	}

	.acount{
		width: 100%;
		background-color: white;
		float: left;
		padding: 1em;
		box-sizing: border-box;
	}
	.acount .list{
		width: 50%;
		height: 100%;
		float: left;
		text-align: center;
	}
	.acount .list span{
		display: inline-block;
		width: 100%;
	}
</style>