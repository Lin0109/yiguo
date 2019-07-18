<template>
	<div class="wrap">
		<router-view></router-view>
		<footer>
			<div class="footer-in">
				<router-link to="/index">
					<i class="icon icon01">
					</i>
					首页
				</router-link>
				<router-link to="/classify">
					<i class="icon icon02"></i>分类
				</router-link>
				<router-link to="/eat">
					<i class="icon icon03"></i>吃饭吧
				</router-link>
				<router-link to="/shoppingCart">
					<i class="num" v-show="this.$store.state.num>=1">{{this.$store.state.num}}</i>
					<i class="icon icon04"></i>购物车
				</router-link>
				<router-link to="/my">
					<i class="icon icon05"></i>我的易果
				</router-link>
			</div>
		</footer>
	</div>
</template>

<style type="text/css" scoped>
	.wrap{
		width: 100%;
		height: 100%;
	}
	footer{
		position: fixed;
		bottom: 0px;
	  	width: 100%;
	  	height: 45px;
	  	max-width: 750px;
	  	padding: 0px 11px;
	  	box-sizing: border-box;
	  	background-color: white;
	  	border-top: 0.5px solid #f4f4f4;
	  	z-index: 5;
	}
	footer .footer-in{
		width: 100%;
		height: 100%;
	}
	footer .footer-in a{
		float: left;
		width: 20%;
		height: 100%;
		text-decoration: none;
		font-size: 11px;
	  	box-sizing: border-box;
		position: relative;
		text-align: center;
		padding-top: 25px;
		color: #8d8a8a;
	}
	footer .footer-in a .num{
		display: block;
		width: 13px;
		height: 13px;
		line-height: 13px;
		background: #fb3d3d;
		color: white;
		font-size: 0.2rem;
		border-radius: 50%;
		position: absolute;
		top: 0px;
		right: 15px;
		z-index: 6;
	}
	footer .footer-in a .icon{
		display: inline-block;
		width: 29.5px;
		height: 21px;
		position: absolute;
		top: 0px;
		left: 50%;
		transform: translate(-50%);
		z-index: 5;
		margin: 2px auto;
	}
	footer .footer-in a.router-link-active{
		color: #11b57c;
	}
	footer .footer-in a .icon01{
		background: url(../assets/img/home01.png) 50% no-repeat;
		background-size: 100% 100%;
	}
	footer .footer-in a .icon02{
		background: url(../assets/img/classify01.png) 50% no-repeat;
		background-size: 100% 100%;
	}
	footer .footer-in a .icon03{
		background: url(../assets/img/eat.png) 50% no-repeat;
		background-size: 100% 100%;
	}
	footer .footer-in a .icon04{
		background: url(../assets/img/shoppingCart01.png) 50% no-repeat;
		background-size: 100% 100%;
	}
	footer .footer-in a .icon05{
		background: url(../assets/img/my01.png) 50% no-repeat;
		background-size: 100% 100%;
	}
	footer .footer-in a.router-link-active .icon01{
		background: url(../assets/img/home02.png) 50% no-repeat;
		background-size: 100% 100%;
	}
	footer .footer-in a.router-link-active .icon02{
		background: url(../assets/img/classify02.png) 50% no-repeat;
		background-size: 100% 100%;
	}
	footer .footer-in a.router-link-active .icon04{
		background: url(../assets/img/shoppingCart02.png) 50% no-repeat;
		background-size: 100% 100%;
	}
	footer .footer-in a.router-link-active .icon05{
		background: url(../assets/img/my02.png) 50% no-repeat;
		background-size: 100% 100%;
	}
</style>