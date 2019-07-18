<template>
	<div class="shoppingCart">
		<div class="isLogin" v-show="this.$store.state.isLogin=='unLogin'">
			登录可同步购物车内商品
			<router-link to='/login'>登录</router-link>
		</div>
		<component :is="this.$store.state.flag"></component>
		<section class="like">
			<p class="title">猜你喜欢</p>
			<ul>
				<li v-for="(item,index) in like">
					<img :src="item.src">
					<p class="name">{{item.name}}</p>
					<p class="pri">￥
						{{item.price | keepTwoNum}}
					</p>
					<div class="btn" @click="addShop(item)"></div>
				</li>
			</ul>
		</section>
		<section class="bottom">
			<div class="check">
				<i :class="{sure:this.$store.state.flag=='shopping'}"></i>
				全选
			</div>
			<div class="price">
				<p>
					合计(不算运费):
					<span>{{this.$store.state.sum | keepTwoNum}}</span>
				</p>
			</div>
			<div class="account" ref="ac">
				去结算({{this.$store.state.num}})
			</div>
		</section>
	</div>
</template>

<style type="text/css" scoped>
	.shoppingCart{
		width: 100%;
		max-width: 750px;
		background: #f4f4f4;
		padding-bottom: 100px;
		padding-top: 10px;
	}
	.shoppingCart .isLogin{
		position: fixed;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 38px;
		line-height: 38px;
		border-bottom: 1px solid #f2f2f2;
		background: white;
		color: #808080;
		z-index: 2;
	}
	.shoppingCart .isLogin a{
		display: inline-block;
		width: 52px;
		height: 21px;
		line-height: 21px;
		border: 1px solid #ddd;
		border-radius: 5px;
		margin-top: 8px;
		margin-left: 8px;
	}
	.like{
		background: white;
	}
	.like .title{
		color: #333;
		position: relative;
		padding: 15px 0px;
	}
	.like .title::before{
		content: '';
		display: inline-block;
		width: 20px;
		height: 3px;
		background: url(../assets/img/line.png) 50% no-repeat;
		background-size: 100% 100%;
		position: absolute;
		top: 22px;
		left: 35%;
	}
	.like .title::after{
		content: '';
		display: inline-block;
		width: 20px;
		height: 3px;
		background: url(../assets/img/line.png) 50% no-repeat;
		background-size: 100% 100%;
		transform: rotate(180deg);
		position: absolute;
		top: 22px;
		right: 35%;
	}
	.like ul{
		padding: 0px 7px;
		overflow: hidden;
	}
	.like ul li{
		float: left;
		width: 50%;
		box-sizing: border-box;
		padding: 5px 15px;
		text-align: left;
		position: relative;
	}
	.like ul li img{
		width: 100%;
	}
	.like ul li .name{
		height: 32px;
	}
	.like ul li .pri{
		color: #fb3d3d;
	}
	.like ul li .btn{
		width: 23px;
		height: 23px;
		background: url(../assets/img/add.png) 50% no-repeat;
		background-size: 100% 100%;
		position: absolute;
		right: 15px;
		bottom: 5px;
	}
	.bottom{
		width: 100%;
		max-width: 750px;
		height: 45px;
		position: fixed;
		bottom: 45px;
		border-top: 0.5px solid #f4f4f4;
		background-color: white;
	}
	.bottom .check{
		float: left;
		padding-left: 33px;
		line-height: 45px;
	}
	.bottom .check i{
		display: inline-block;
		width: 17px;
		height: 17px;
		background: url(../assets/img/disable.png) 50% no-repeat;
		background-size: 100% 100%;
		position: absolute;
		bottom: 15px;
		left: 10px;
	}
	.bottom .check .sure{
		background: url(../assets/img/sure.png) 50% no-repeat;
		background-size: 100% 100%;
	}
	.bottom .price{
		position: absolute;
		top: 0px;
		right: 110px;
		line-height: 45px;
	}
	.bottom .price span{
		color: #fb3d3d;
		font-size: 15px;
	}
	.bottom .account{
		width: 105px;
		height: 45px;
		line-height: 45px;
		background-color: #ccc;
		color: white;
		font-size: 15px;
		position: absolute;
		top: 0px;
		right: 0px;
	}
</style>

<script type="text/javascript">
	import emptyShop from './emptyShop.vue'
	import shopping from './shopping.vue'
	export default{
		data(){
			return{
				like:[],
				ar:[]
			}
		},
		mounted(){
			this.$http.get('./data/shopping.json')
			.then(res=>{
				this.like = res.data.like;
			})
			.catch(function (error) {
			    console.log(error);
			})
			if (this.$store.state.num > 0){
				this.$refs.ac.style.backgroundColor = "#fb3d3d";
			}
		},
		components:{
			emptyShop,
			shopping
		},
		filters:{
			keepTwoNum:function(value){
				value = Number(value);
				return value.toFixed(2);
			}
		},
		methods:{
			addShop(item){
				this.$store.state.arr.push({name:item.name,price:item.price,src:item.src,number:1});
				this.$store.state.sum += item.price;
				this.$store.state.num ++;
				this.$store.state.flag = "shopping";
			}
		},
		computed:{
			isChange(){
				return this.$store.state.num
			}
		},
		watch:{
			isChange:function(){
				if (this.$store.state.num == 0) {
					this.$refs.ac.style.backgroundColor = "#ccc";
				}
				if (this.$store.state.num > 0){
					this.$refs.ac.style.backgroundColor = "#fb3d3d";
				}
			}
		}
	}
</script>