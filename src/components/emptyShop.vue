<template>
	<div class="empty" :class="{mTop:this.$store.state.isLogin=='unLogin'}">
		<i class="icon"></i>
		<p>购物车空空的，快去逛逛吧！</p>
		<router-link to='/index'>去逛逛</router-link>
	</div>
</template>

<style type="text/css" scoped>
	.empty{
		background: white;
		padding-bottom: 50px;
		border-bottom: 1px solid #f4f4f4;
	}
	.mTop{
		margin-top: 39px;
	}
	.empty .icon{
		display: block;
		width: 100%;
		height: 150px;
		background: url(../assets/img/emptyShoppingCart.png) 50% no-repeat;
		background-size: auto 100%;
		box-sizing: border-box;
	}
	.empty p{
		padding-top: 35px;
		padding-bottom: 16px;
		color: #808080;
	}
	.empty a{
		display: block;
		width: 132px;
		height: 36px;
		line-height: 36px;
		border: 1px solid #11b57c;
		border-radius: 5px;
		color: #11b57c;
		margin: 0 auto;
	}
</style>