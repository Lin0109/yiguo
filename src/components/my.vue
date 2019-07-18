<template>
	<div class="my">
		<component :is="this.$store.state.isLogin"></component>
		<div class="listTab">
			<ul>
				<li>
					<router-link to='/my'>
						<div class="icon">
							<img src="../assets/img/unpaid.png">
						</div>
						待支付
					</router-link>
				</li>
				<li>
					<router-link to='/my'>
						<div class="icon">
							<img src="../assets/img/take.png">
						</div>
						待收货
					</router-link>
				</li>
				<li>
					<router-link to='/my'>
						<div class="icon">
							<img src="../assets/img/evaluate.png">
						</div>
						评价送悠币
					</router-link>
				</li>
				<li>
					<router-link to='/my'>
						<div class="icon">
							<img src="../assets/img/changing.png">
						</div>
						在线退换货
					</router-link>
				</li>
				<li>
					<span class="line"></span>
					<router-link to='/my'>
						<div class="icon">
							<img src="../assets/img/allorder.png">
						</div>
						全部订单
					</router-link>
				</li>
			</ul>
		</div>
		<div class="listTab02">
			<ul>
				<li>
					<router-link to='/my'>
						<img src="../assets/img/coupons.png">
						<p>优惠券</p>
					</router-link>
				</li>
				<li>
					<router-link to='/my'>
						<img src="../assets/img/yellowcard.png">
						<p>充值卡</p>
					</router-link>
				</li>
				<li>
					<router-link to='/my'>
						<img src="../assets/img/delivery.png">
						<p>礼品兑换券</p>
					</router-link>
				</li>
				<li>
					<router-link to='/my'>
						<img src="../assets/img/address.png">
						<p>收货地址</p>
					</router-link>
				</li>
				<li>
					<router-link to='/my'>
						<img src="../assets/img/help.png">
						<p>帮助中心</p>
					</router-link>
				</li>
				<li>
					<router-link to='/my'>
						<img src="../assets/img/teamOrder.png">
						<p>我的团购</p>
					</router-link>
				</li>
				<li>
					<router-link to='/my'>
						<img src="../assets/img/account-icon.png">
						<p>账户余额</p>
					</router-link>
				</li>
				<li>
					<router-link to='/my'>
						<img src="../assets/img/service.png">
						<p>在线客服</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<style type="text/css" scoped>
	.my{
  		background-color: #f4f4f4;
  		height: 100%;
	}

	.listTab{
		width: 100%;
		height: 82px;
		margin-top: 9px;
		margin-bottom: 9px;
		background-color: white;
		overflow: hidden;
	}
	.listTab ul{
		overflow: hidden;
	}
	.listTab ul li{
		float: left;
		width: 20%;
		position: relative;
	}
	.listTab ul li a{
		padding-top: 4.5em;
		padding-bottom: 1em;
		position: relative;
		width: 100%;
		display: inline-block;
	}
	.listTab ul li a img{
		position: absolute;
		top: 30%;
		transform: translateX(-50%);
		width: 22px;
	}
	.listTab ul li .line{
		position: absolute;
		display: inline-block;
		width: 4px;
		padding-bottom: calc(100% + 7px);
		background: url(../assets/img/line02.png) no-repeat;
		background-size: 100% 100%;
	}

	.listTab02,.listTab02 ul{
		overflow: hidden;
	}
	.listTab02 ul li{
		width: 25%;
		float: left;
		background-color: white;
	}
	.listTab02 ul li a{
		width: 100%;
		display: inline-block;
		padding-top: 20px;
		padding-bottom: 15px;
	}
	.listTab02 ul li a img{
		width: 27px;
	}
	.listTab02 ul li::after{
		content: '';
		display: block;
		width: 100%;
		height: 1px;
		background-color: #ddd;
	}
</style>

<script type="text/javascript">
	import unLogin from '../components/unLogin.vue'
	import Logined from '../components/logined.vue'
	export default{
		components:{
			unLogin,
			Logined
		}
	}
</script>