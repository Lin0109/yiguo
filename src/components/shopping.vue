<template>
	<div class="goods" :class="{mTop:this.$store.state.isLogin=='unLogin'}">
		<ul class="goodsList">
			<li v-for="(item,index) in goods.$store.state.arr">
				<i class="check"></i>
				<img :src="item.src">
				<div class="info">
					<p class="name">{{item.name}}</p>
					<p class="price">￥{{item.price}}</p>
				</div>
				<span class="del" @click="del(index)"></span>
				<div class="number">
					<i class="min" @click="min(index)">-</i>
					{{item.number}}
					<i class="add" @click="add(index)">+</i>
				</div>
			</li>
		</ul>
	</div>
</template>

<style type="text/css" scoped>
	.goods{
		margin-top: 0px;
	}
	.mTop{
		margin-top: 40px;
	}
	.goodsList li{
		margin-bottom: 9px;
		background-color: white;
		position: relative;
		height: 106px;
	}
	.goodsList li .check{
		display: block;
		width: 17px;
		height: 17px;
		position: absolute;
		left: 10px;
		top: 50%;
		transform: translateY(-50%);
		background: url(../../data/img/sure.png) 50% no-repeat;
		background-size: 100% 100%;
	}
	.goodsList li img{
		height: 80%;
		position: absolute;
		top: 10px;
		left: 35px;
	}
	.goodsList li .info{
		padding: 12px 55px 14px 125px;
		text-align: left;
	}
	.goodsList li .info .name{
		height: 35px;
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-bottom: 30px;
	}
	.goodsList li .info .price{
		color: #fb3d3d;
	}
	.goodsList li .del{
		width: 14px;
		height: 15px;
		position: absolute;
		top: 22px;
		right: 14px;
		background: url(../../data/img/del.png) 50% no-repeat;
		background-size: 100% 100%;
	}
	.goodsList li .number{
		width: 74px;
		height: 19px;
		line-height: 19px;
		position: absolute;
		right: 14px;
		bottom: 20px;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
	.goodsList li .min{
		position: absolute;
		left: 0px;
		width: 19px;
		height: 19px;
		border-right: 1px solid #ddd;
	}
	.goodsList li .add{
		position: absolute;
		right: 0px;
		width: 19px;
		height: 19px;
		border-left: 1px solid #ddd;
	}
</style>

<script type="text/javascript">
	export default{
		data(){
			return{
				goods: this
			}
		},
		methods:{
			min(index){
				if (this.$store.state.arr[index].number > 1) {
					this.$store.state.arr[index].number --;
					this.$store.state.num --;
				this.$store.state.sum-=this.$store.state.arr[index].price;
				}
			},
			add(index){
				this.$store.state.arr[index].number ++;
				this.$store.state.num ++;
				this.$store.state.sum+=this.$store.state.arr[index].price;
			},
			del(index){
				this.$store.state.sum-=this.$store.state.arr[index].number*this.$store.state.arr[index].price;
				this.$store.state.num-=this.$store.state.arr[index].number;
				this.$store.state.arr.splice(index,1);
				if(this.$store.state.arr.length == 0){
					this.$store.state.flag = "emptyShop";
				}
			}
		}
	}
</script>