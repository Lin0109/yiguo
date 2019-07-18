<template>
	<div class="index">
		<header>
			<div class="address">
				广州
				<i class="arrow"></i>
			</div>
			<div class="search">
				<i class="home-search"></i>
				<input type="search" name="search" placeholder="请输入商品名称">
			</div>
		</header>
		<swiper :options="swiperOption2" class="swiper" v-if="swipeItems.length>0">
	        <swiper-slide v-for="(item,index) in swipeItems" class="mint-swipe-item">
	        	<router-link to='/event'>
		        	<img :src="item.src">
		    	</router-link>
		    </swiper-slide>
		    <div class="swiper-pagination" slot="pagination"></div>
		</swiper>
		<div class="menu">
			<ul>
				<li v-for="(item,index) in menu">
					<router-link  to='/'>
						<img :src="item.src">
						<p>{{item.title}}</p>
					</router-link>
				</li>
			</ul>
		</div>
		<div class="ad">
			<router-link to='/event'>
				<img src="../assets/img/ad01.gif">
			</router-link>
		</div>
		<div class="news">
			<div class="title"></div>
			<swiper :options="swiperOption1" v-if="news.length>0">
		        <swiper-slide class="swiper-news" v-for="(item,index) in news">{{item}}</swiper-slide>
		    </swiper>
		</div>
		<div class="product">
			<router-link to='/'>
				<img src="../assets/img/product-title.jpg">
			</router-link>
		</div>
		<div class="product">
			<router-link to='/'>
				<img src="../assets/img/product01.jpg">
			</router-link>
		</div>
		<div class="product">
			<router-link to='/'>
				<img src="../assets/img/product02.jpg">
			</router-link>
		</div>
		<div class="product">
			<router-link to='/'>
				<img src="../assets/img/product03.jpg">
			</router-link>
		</div>
		<div class="product pro-last">
			<router-link to='/'>
				<img src="../assets/img/product-end.jpg">
			</router-link>
		</div>
		<div class="group-floor">
			<router-link to='' class="floor-img">
				<img src="../assets/img/item-title01.jpg">
			</router-link>
			<div class="pro-list">
			    <swiper :options="swiperOption">
			        <swiper-slide v-for="(item,index) in swiper01">
			        	<router-link to="/index">
				  			<div class="pic">
				  				<img :src="item.src">
				  			</div>
				  			<div class="info">
				  				<p class="item-title">{{item.title}}</p>
				  				<div class="price">¥{{item.price}}</div>
				  				<i class="shopping" @click="addShop(item)"></i>
				  			</div>
				  		</router-link>
			        </swiper-slide>
			        <router-link to='/product' class="more">
				  			查看更多
				  			<i></i>
				  		</router-link>
		      	</swiper>
			</div>
		</div>
		<div class="group-floor">
			<router-link to='' class="floor-img">
				<img src="../assets/img/item-title02.jpg">
			</router-link>
			<div class="pro-list">
				<swiper :options="swiperOption">
			        <swiper-slide v-for="(item,index) in swiper02">
			        	<router-link to="/index">
				  			<div class="pic">
				  				<img :src="item.src">
				  			</div>
				  			<div class="info">
				  				<p class="item-title">{{item.title}}</p>
				  				<div class="price">¥{{item.price}}</div>
				  				<i class="shopping" @click="addShop(item)"></i>
				  			</div>
				  		</router-link>
			        </swiper-slide>
			        <router-link to='/product' class="more">
			  			查看更多
			  			<i></i>
			  		</router-link>
		      	</swiper>
			</div>
			<div class="pro-list">
				<swiper :options="swiperOption">
			        <swiper-slide v-for="(item,index) in swiper03">
			        	<router-link to="/index">
				  			<div class="pic">
				  				<img :src="item.src">
				  			</div>
				  			<div class="info">
				  				<p class="item-title">{{item.title}}</p>
				  				<div class="price">¥{{item.price}}</div>
				  				<i class="shopping" @click="addShop(item)"></i>
				  			</div>
				  		</router-link>
			        </swiper-slide>
			        <router-link to='/product' class="more">
			  			查看更多
			  			<i></i>
			  		</router-link>
		      	</swiper>
			</div>
		</div>
		<div class="new-hot">
			<router-link to='/'>
				<img src="../assets/img/new.jpg">
			</router-link>
			<router-link to='/'>
				<img src="../assets/img/hot.jpg">
			</router-link>
		</div>
		<div class="product-list">
			<ul>
				<li v-for="(item,index) in productList01">
		  			<div class="pic">
		  				<img :src="item.src">
		  			</div>
		  			<div class="info">
		  				<p class="item-title">{{item.title}}</p>
		  				<p>{{item.desc}}</p>
		  			</div>
		  			<div class="price">
		  				<strong>¥{{item.price}}</strong>/{{item.number}}
		  				<i class="shopping" @click="addShop(item)"></i>
		  			</div>
				</li>
			</ul>
		</div>
		<div class="product-list02">
			<div class="title">
				<h3>
					新鲜水果
				</h3>
			</div>
			<ul>
				<li v-for="(item,index) in productList02">
					<router-link to="/index">
			  			<div class="pic">
			  				<img :src="item.src">
			  			</div>
			  			<div class="info">
			  				<p class="item-title">{{item.title}}</p>
			  			</div>
			  			<div class="price">
			  				<strong>¥{{item.price}}</strong>/{{item.number}}
			  				<i class="shopping" @click="addShop(item)"></i>
			  			</div>
		  			</router-link>
				</li>
			</ul>
		</div>
		<div class="product-list02">
			<div class="title">
				<h3>
					水产海鲜
				</h3>
			</div>
			<ul>
				<li v-for="(item,index) in productList03">
					<router-link to="/index">
			  			<div class="pic">
			  				<img :src="item.src">
			  			</div>
			  			<div class="info">
			  				<p class="item-title">{{item.title}}</p>
			  			</div>
			  			<div class="price">
			  				<strong>¥{{item.price}}</strong>/{{item.number}}
			  				<i class="shopping" @click="addShop(item)"></i>
			  			</div>
			  		</router-link>
				</li>
			</ul>
		</div>
		<div class="product-list02">
			<div class="title">
				<h3>
					精选肉类
				</h3>
			</div>
			<ul>
				<li v-for="(item,index) in productList04">
					<router-link to="/index">
			  			<div class="pic">
			  				<img :src="item.src">
			  			</div>
			  			<div class="info">
			  				<p class="item-title">{{item.title}}</p>
			  			</div>
			  			<div class="price">
			  				<strong>¥{{item.price}}</strong>/{{item.number}}
			  				<i class="shopping" @click="addShop(item)"></i>
			  			</div>
			  		</router-link>
				</li>
			</ul>
		</div>
		<div class="product-list02">
			<div class="title">
				<h3>
					安心蔬菜
				</h3>
			</div>
			<ul>
				<li v-for="(item,index) in productList05">
					<router-link to="/index">
			  			<div class="pic">
			  				<img :src="item.src">
			  			</div>
			  			<div class="info">
			  				<p class="item-title">{{item.title}}</p>
			  			</div>
			  			<div class="price">
			  				<strong>¥{{item.price}}</strong>/{{item.number}}
			  				<i class="shopping" @click="addShop(item)"></i>
			  			</div>
			  		</router-link>
				</li>
			</ul>
		</div>
		<div class="page-footer">
			<p>沪IPC备09008015号</p>
			<p>上海易果电子商务有限公司</p>
		</div>
		<div class="top" @click = "backToTop()" v-show = flag>
			<img src="../assets/img/top.png">
		</div>
	</div>
</template>

<style type="text/css">
	.top{
		position: fixed;
		bottom: 8%;
		right: 15px;
		width: 38px;
		height: 38px;
		z-index: 5;
	}
	.top img{
		width: 100%;
		height: 100%;
	}
</style>
<style type="text/css" scoped>
	header{
		height: 36px;
		line-height: 36px;
		padding-left: 65px;
		padding-right: 12px;
		padding-top: 5px;
		padding-bottom: 5px;
		background: linear-gradient(90deg,#39da85,#01b27a);
		position: fixed;
		top: 0px;
		z-index: 2;
		width: 100%;
		max-width: 750px;
		box-sizing: border-box;
	}
	.news .swiper-container{
		height: 16px;
	}
	.swiper{
		padding: 0px;
	}
	.item-title{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.index{
		width: 100%;
		max-width: 750px;
		margin-top: 36px;
		margin-bottom: 50px;
	}
	.address{
		position: absolute;
		top: 0px;
		left: 0px;
		color: white;
		padding-left: 15px;
		font-size: 13px;
	}
	.address .arrow{
		display: inline-block;
		width: 7px;
		height: 4px;
		margin-left: 3px;
		margin-bottom: 3px;
		background: url(../assets/img/arrow.png);
		background-size: 100% 100%;
	}
	.search{
		width: 100%;
		height: 26px;
		line-height: 26px;
		position: relative;
		box-sizing: border-box;
		padding-left: 28px;
		padding-right: 12px;
		font-size: 11px;
		background: white;
		border-radius: 20px;
		text-align: left;
		color: #999;
	}
	.search input{
		border: none;
	}
	.search .home-search{
		display: inline-block;
		position: absolute;
		left: 5px;
		top: 3px;
		width: 20px;
		height: 20px;
		background: url(../assets/img/home-search.png) 50% no-repeat;
		background-size: 100%;
	}
	.swiper a{
		display: block;
	}
	.swiper img,.product a img{
		width: 100%;
	}
	.swiper-pagination-bullet-active{
		background: #cdd1c1;
	}
	.index .menu{
		padding: 5px 15px;
		overflow: hidden;
	}
	.index .menu ul{
		overflow: hidden;
	}
	.index .menu ul li{
		overflow: hidden;
		float: left;
		width: 25%;
		padding-bottom: 10px;
	}
	.index .menu a{
		width: 100%;
		display: block;
		text-decoration: none;
		margin-bottom: 12px;
	}
	.index .menu a img{
		width: 60px;
		height: 60px;
	}
	.index .menu a p{
		font-size: 12px;
		color: rgb(51, 51, 51);
	}
	.ad{
		background:#d6d6d7 url("../assets/img/ad.png") no-repeat 50%;
	}
	.ad a{
		display: block;
	}
	.ad img{
		width: 100%;
	}
	.news{
		padding-left: 100px;
		padding-right: 10px;
		padding-top: 10px;
		padding-bottom: 10px;
		position: relative;
		text-align: left;
	}
	.news .title{
		display: inline-block;
		position: absolute;
		top: 11px;
		left: 20px;
		width: 65px;
		height: 16px;
		background: url(../assets/img/news.png) no-repeat;
		background-size: 100%;
	}
	.news .title::after{
		content: '';
		display: block;
		width: 1px;
		height: 100%;
		background-color: #999;
		position: absolute;
		right: -10px;
	}
	.news .swiper-news{
		padding-left: 5px;
	}
	.product a{
		width: 100%;
		display: inline-block;
	}
	.pro-last{
		margin-top:-5px;
	}
	.group-floor{
		width: 100%;
		padding-bottom: 10px;
	}
	.group-floor a{
		display: inline-block;
		width: 100%;
	}
	.group-floor a img,.new-hot a img,
	.product-list ul li .pic img,
	.product-list02 ul li .pic img{
		width: 100%;
	}
	.pro-list{
		margin-top: 10px;
		margin-left: 10px;
	}
	.pro-list .mint-swipe-items-wrap{
		padding-bottom: 46%;
	}
	.pro-list .swiper-container{
		padding: 1px;
	}
	.pro-list .swiper-slide{
		float: left;
		box-shadow: 0 0 5px rgba(0,0,0,.1);
	}
	.pro-list .swiper-slide .info{
		text-align: left;
		padding: 8px;
	}
	.pro-list .swiper-slide .item-title,
	.pro-list .swiper-slide .price{
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		line-height: 15px;
		padding-bottom: 5px;
	}
	.pro-list .swiper-slide .price{
		color: red;
	}
	.pro-list .swiper-slide .info .shopping{
		display: block;
		width: 20px;
		padding-bottom: 20px;
		border-radius: 50%;
		background:url(../assets/img/shoppingCart.png) 50% no-repeat;
		background-size: 100%;
		background-color: #01b27a;
		margin: 5px;
		position: absolute;
		bottom: 3px;
		right: 5px;
	}
	.more{
		padding:10% 10px;
		color: #999999;
		font-size: 0.8rem;
	}
	.more i{
		display: block;
		width: 100%;
		padding-bottom: 100%;
		background: url(../assets/img/more.png) no-repeat 50%;
		background-size: 100%;
	}
	.new-hot{
		overflow: hidden;
	}
	.new-hot a{
		width: 50%;
		display: inline-block;
		float: left;
	}
	.product-list,.product-list02{
		padding-bottom: 2px;
		background: #fafafa;
	}
	.product-list ul,.product-list02 ul{
		margin: 0 10px;
		overflow: hidden;
	}
	.product-list ul li{
		border-radius: 15px;
		background: white;
		box-shadow: 0 0 5px rgba(0,0,0,.1);
		overflow: hidden;
	}
	.product-list ul li{
		margin: 5px;
		float: left;
		text-align: left;
		width: 97%;
	}
	.product-list ul li .pic{
		float: left;
		width: 30%;
	}
	.product-list ul li .info,
	.product-list ul li .price{
		float: left;
		width: 60%;
		padding: 2%;
	}
	.product-list ul li .info p{
		color: #8d8a8a;
		margin-bottom: 5px;
	}
	.product-list ul li .info .item-title{
		color: #333;
	}
	.product-list ul li .price strong{
		font-size: 1.1rem;
		color: #fb3d3d;
	}
	.product-list ul li .price .shopping,
	.product-list02 ul li .price .shopping{
		display: block;
		float: right;
		width: 22px;
		padding-bottom: 22px;
		border-radius: 50%;
		background:url(../assets/img/shoppingCart.png) 50% no-repeat;
		background-size: 100%;
		background-color: #01b27a;
		margin: 5px;
	}

	.product-list02 .title h3{
		padding: 20px 0;
		margin-bottom: 3px;
		font-weight: 600;
		position: relative;
	}
	.product-list02 .title h3::before,
	.product-list02 .title h3::after{
		content: '';
		display: block;
		position: absolute;
		top: 45%;
		width: 20%;
		padding-bottom: 2%;
		background: url(../assets/img/line.png) no-repeat 50%;
	}
	.product-list02 .title h3::before{
		left: 20%;
	}
	.product-list02 .title h3::after{
		right: 20%;
		transform: rotate(180deg);
	}
	.product-list02 ul li{
		width: 50%;
		float: left;
		padding: 5px;
		box-sizing: border-box;
	}
	.product-list02 ul li a{
		background: white;
		box-shadow: 0 0 5px rgba(0,0,0,.1);
		border-radius: 5px;
		display: block;
	}
	.product-list02 ul li .item .info,
	.product-list02 ul li .item .price{
		padding: 5px;
	}
	.product-list02 ul li .item .price strong{
		color: #fb3d3d;
	}
	.product-list02 ul li .item .price .shopping{
		display: block;
		float: right;
		width: 15%;
		padding-bottom: 15%;
		border-radius: 50%;
		background:url(../assets/img/shoppingCart.png) 50% no-repeat;
		background-size: 100%;
		background-color: #01b27a;
	}
	.product-list02 ul li .info,
	.product-list02 ul li .price{
		padding: 5px;
		text-align: left;
		padding-left: 10px;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.product-list02 ul li .price strong{
		color: #fb3d3d;
	}
	.page-footer{
		line-height: 1.5;
		text-align: center;
		color: #8d8a8a;
	}
</style>

<script type="text/javascript">
	import { swiper, swiperSlide } from "vue-awesome-swiper"
	export default{
		data(){
			return{
				flag : false,
				swipeItems:[],
				menu:[],
				swiper01:[],
				swiper02:[],
				swiper03:[],
				news:[],
				productList01:[],
				productList02:[],
				productList03:[],
				productList04:[],
				productList05:[],
				swiperOption: {
        			slidesPerView: 3,
					spaceBetween:10,
					freeMode: true,
					slidesOffsetAfter: 50
				},
				swiperOption1: {
					direction: 'vertical',
					height:18,
					centeredSlides: true,
					loop: true,
					autoplay:{
						delay: 2500
					},
					observer: true,
          			observeParents: true,
				},
				swiperOption2:{
					loop: true,
					pagination: {
						el:'.swiper-pagination',
						clickable: true
					},
					autoplay:{
						delay: 2500
					},
					observer: true,
          			observeParents: true,
				}
			}
		},
		mounted(){
			this.$http.get('./data/index.json')
			.then((res)=>{
				this.swipeItems = res.data.swipeItems;
				this.menu = res.data.menu;
				this.news = res.data.news;
				this.swiper01 = res.data.swiper01;
				this.swiper02 = res.data.swiper02;
				this.swiper03 = res.data.swiper03;
				this.productList01 = res.data.productList01;
				this.productList02 = res.data.productList02;
				this.productList03 = res.data.productList03;
				this.productList04 = res.data.productList04;
				this.productList05 = res.data.productList05;
			})
			.catch(function (error) {
			    console.log(error);
			})
			.then(function () {
			});
			window.addEventListener('scroll',this.scrollToTop);
		},
		beforeDestroy(){
			window.removeEventListener('scroll',this.scrollToTop);
		},
		methods:{
			backToTop(){
				document.documentElement.scrollTop = document.body.scrollTop = 0;
			},
			addShop(item){
				this.$store.state.arr.push({name:item.title,price:item.price,src:item.src,number:1});
				this.$store.state.sum += item.price;
				this.$store.state.num ++;
				this.$store.state.flag = "shopping";
			},
			scrollToTop(el){
				var scrollTop = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop;
				if (scrollTop > 800) {
					this.flag = true;
				}else{
					this.flag = false;
				}
			}
		}
	}
</script>