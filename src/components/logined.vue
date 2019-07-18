<template>
	<header class="logined">
		<div class="info">
			<img src="../assets/img/avatar.jpg">
			<div class="detail">
				<p class="name">13144885373</p>
				<p class="type">
					<i></i>
					普卡
				</p>
				<p class="add">再积累3000.00实付金额可升至银卡会员</p>
			</div>
			<span>签到送好礼</span>
			<p class="sum">
				当前累计商品实付金额0.00
			</p>
		</div>
		<div class="setting">
			<router-link to="/my"></router-link>
		</div>
		<div class="acount">
			<p class="list">
				<span class="num">
					0<em>.00</em>
				</span>
				<span class="txt">卡包余额</span>
			</p>
			<p class="list">
				<span class="num">100</span>
				<span class="txt">悠币</span>
			</p>
		</div>
	</header>
</template>

<style type="text/css" scoped>
	.logined{
		width: 100%;
		max-width: 750px;
		position: relative;
		overflow: hidden;
		border-bottom: 0.5px solid #2dd282;
	}
	.info{
		height: 135px;
		background: #2dd282  url(../assets/img/bgimg.jpg) no-repeat 100%;
		background-size: 100%;
		position: relative;
		color: white;
		text-align: left;
	}
	.info img{
		width: 65px;
		height: 65px;
		border: 2px solid rgba(255,255,255,.5);
		border-radius: 50%;
		box-sizing: border-box;
		position: absolute;
		top: 26px;
		left: 13px;
	}
	.info span{
		position: absolute;
		right: 0px;
		top: 45px;
		width: 108px;
		height: 26px;
		line-height: 26px;
		background: #c5f9e5;
		color: #12b67c;
		border-radius: 3px 0px 0px 3px;
		box-sizing: border-box;
		padding-left: 30px;
	}
	.info span::before{
		content: '';
		background: url(../assets/img/gift.png) 50% no-repeat;
		background-size: 100% 100%;
		width: 14px;
		height: 15px;
		display: inline-block;
		position: absolute;
		top: 6px;
		left: 9px;
	}
	.info span::after{
		content: '';
		display: inline-block;
		width: 4px;
		height: 8px;
		background: url(../assets/img/arrow02.png) 50% no-repeat;
		background-size: 100% 100%;
		position: absolute;
		top: 9px;
		right: 9px;
	}
	.detail{
		padding-top: 26px;
		padding-left: 90px;
		position: relative;
	}
	.detail p{
		width: 70%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.detail .name{
		font-size: 15px;
		padding-left: 5px;
		padding-bottom: 6px;
	}
	.detail .type{
		width: 50px;
		height: 18px;
		padding-left: 19px;
		border: 1px solid rgba(39,127,85,1);
		background: #37b177;
		border-radius: 20px;
		box-sizing: border-box;
		position: relative;
		padding-bottom: 12px;
	}
	.detail .type i{
		display: inline-block;
		width: 16px;
		height: 16px;
		background: url(../assets/img/pticon.png) 50% no-repeat;
		background-size: 100% 100%;
		position: absolute;
		left: 0px;
		top: 0px;
	}
	.detail .add{
		padding-top: 8px;
	}
	.sum{
		position: absolute;
		bottom: 0px;
		width: 100%;
		height: 40px;
		line-height: 40px;
		color: white;
		text-align: left;
		padding-left: 27px;
		box-sizing: border-box;
		background: rgba(0,0,0,0.1);
		letter-spacing: 1px;
	}
	.sum::before{
		content: '';
		display: inline-block;
		width: 13px;
		height: 13px;
		background: url(../assets/img/total-icon.png) 50% no-repeat;
		background-size: 100% 100%;
		position: absolute;
		bottom: 13px;
		left: 10px;
	}
	.sum::after{
		content: '';
		display: inline-block;
		width: 10px;
		height: 5px;
		background: url(../assets/img/arrow.png) no-repeat 50%;
		background-size: 100% 100%;
		transform: rotate(-90deg);
		position: absolute;
		bottom: 17px;
		right: 12px;
	}
	header .setting{
		position: absolute;
		top: 10px;
		right: 14px;
		width: 16px;
	}
	header .setting a{
		display: block;
		width: 16px;
		padding-bottom: 18px;
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
	.acount .list .num{
		font-size: 16px;
		color: #0e9f4e;
	}
	.acount .list .num em{
		font-size: 12px;
	}
</style>