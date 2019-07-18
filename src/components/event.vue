<template>
	<div class="event">
		<header>
			<span class="back" @click = "back()"></span>
			<span class="address">广州</span>
			<router-link to='/'>
				<img src="../assets/img/header.jpg" ref="head">
			</router-link>
		</header>
		<nav ref="nav">
			<ul class="nav" :class="{trans:a!==0}">
				<li v-for="(item,index) in list" :class="{active:a==index}" @click="change(index)">{{item}}</li>
			</ul>
		</nav>
		<div class="type" ref="fruits">
			<img src="../assets/img/eventTitle01.jpg">
			<ul>
				<li v-for="(item,index) in fruits">
					<img :src="item.src">
					<p class="name">{{item.name}}</p>
					<p class="price">
						¥<span>{{item.price01}}</span>.{{item.price02}}
					</p>
					<span class="shopping"></span>
				</li>
			</ul>
		</div>
		<div class="type" ref="meat">
			<img src="../assets/img/eventTitle02.jpg">
			<ul>
				<li v-for="(item,index) in meat">
					<img :src="item.src">
					<p class="name">{{item.name}}</p>
					<p class="price">
						¥<span>{{item.price01}}</span>.{{item.price02}}
					</p>
					<span class="shopping"></span>
				</li>
			</ul>
		</div>
		<div class="type" ref="seafood">
			<img src="../assets/img/eventTitle03.jpg">
			<ul>
				<li v-for="(item,index) in seafood">
					<img :src="item.src">
					<p class="name">{{item.name}}</p>
					<p class="price">
						¥<span>{{item.price01}}</span>.{{item.price02}}
					</p>
					<span class="shopping"></span>
				</li>
			</ul>
		</div>
		<div class="type" ref="sweets">
			<img src="../assets/img/eventTitle04.jpg">
			<ul>
				<li v-for="(item,index) in sweets">
					<img :src="item.src">
					<p class="name">{{item.name}}</p>
					<p class="price">
						¥<span>{{item.price01}}</span>.{{item.price02}}
					</p>
					<span class="shopping"></span>
				</li>
			</ul>
		</div>
		<div class="type" ref="vegetables">
			<img src="../assets/img/eventTitle05.jpg">
			<ul>
				<li v-for="(item,index) in vegetables">
					<img :src="item.src">
					<p class="name">{{item.name}}</p>
					<p class="price">
						¥<span>{{item.price01}}</span>.{{item.price02}}
					</p>
					<span class="shopping"></span>
				</li>
			</ul>
		</div>
		<footer>
			<img src="../assets/img/footer.jpg">
		</footer>
		<div class="top" @click = "backToTop()" v-show = flag>
			<img src="../assets/img/top.png">
		</div>
		<div class="home">
			<router-link to='/index'>
				<img src="../assets/img/home.png">
			</router-link>
		</div>
		<div class="shoppingCart">
			<router-link to='/shoppingCart'>
				<img src="../assets/img/shoppingCart03.png">
			</router-link>
		</div>
	</div>
</template>

<style type="text/css" scoped>
	.event{
		width: 100%;
		max-width: 750px;
	}
	.event a{
		height: 100%;
		display: block;
	}
	header .back{
		display: block;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background-color: rgba(0,0,0,0.8);
		background-image: url(../assets/img/icon_back.svg);
		background-repeat: no-repeat;
		background-size: 60% 60%;
		background-position: 8px center;
		position: fixed;
		top: 9px;
		left: 9px;
		z-index: 2;
	}
	header .address{
		position: fixed;
		top: 9px;
		right: 9px;
		width: 60px;
		height: 35px;
		line-height: 35px;
		color: white;
		background-color: rgba(0,0,0,0.8);
		border-radius: 25px;
		box-sizing: border-box;
		padding-left: 24px;
		text-align: left;
		z-index: 2;
	}
	header .address::before{
		content: '';
		display: block;
		width: 15px;
		height: 16px;
		background: url(../assets/img/address01.png) 50% no-repeat;
		background-size: 100% 100%;
		position: absolute;
		left: 6px;
		top: 10px;
	}
	header a{
		display: block;
	}
	header img,.type img,footer img{
		width: 100%;
	}
	nav{
		width: 100%;
		height: 46px;
		overflow-x: scroll;
		z-index: 5;
		background: white;
	}
	nav ul{
		width: 110%;
		height: 46px;
		float: left;
	}
	.trans{
		transform: translateX(-9%);
		transition-duration: 0.5s;
	}
	nav ul li{
		float: left;
		width: 20%;
		height: 46px;
		line-height: 46px;
		color: rgb(128, 128, 128);
	}
	nav ul li.active{
		color: rgb(0, 184, 120);
		border-bottom: 2px solid rgb(0, 184, 120);
		box-sizing: border-box;
	}
	nav::-webkit-scrollbar {
		height: 0 !important;
	}

	.type ul{
		margin: 0px 8px 5px 8px;
		overflow: hidden;
		padding: 5px;
	}
	.type ul li{
		float: left;
		width: 32%;
		margin-left: 2%;
		box-shadow: 0 0 5px rgba(0,0,0,.2);
		text-align: left;
		position: relative;
	}
	.type ul li:first-child,
	.type ul li:nth-child(4),
	.type ul li:nth-child(7),
	.type ul li:nth-child(10){
		margin-left: 0px;
	}
	.type ul li p{
		padding-left: 8px;
		padding-top: 10px;
	}
	.type ul li .name{
		-webkit-line-clamp: 2;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		height: 32px;
	}
	.type ul li .price{
		padding-bottom: 10px;
		color: rgb(251, 61, 61);
		font-size: 10px;
	}
	.type ul li .price span{
		font-size: 15px;
	}
	.type ul li .shopping{
		display: block;
		width: 20px;
		padding-bottom: 20px;
		border-radius: 50%;
		background:url(../assets/img/shoppingCart.png) 50% no-repeat;
		background-size: 100%;
		background-color: #01b27a;
		margin: 5px;
		position: absolute;
		bottom: 5px;
		right: 7px;
	}

	.top{
		position: fixed;
		bottom: 20px;
		right: 15px;
		width: 38px;
		height: 38px;
		z-index: 5;
	}
	.top img{
		width: 100%;
		height: 100%;
	}

	.home{
		width: 32px;
		height: 32px;
		position: fixed;
		bottom: 20px;
		left: 8px;
		background: rgba(0,0,0,0.8);
		border-radius: 50%;
	}
	.home img,.shoppingCart img{
		width: 60%;
		line-height: 100%;
		transform: translateY(40%);
	}

	.shoppingCart{
		width: 32px;
		height: 32px;
		position: fixed;
		bottom: 20px;
		left: 48px;
		background: rgba(0,0,0,0.8);
		border-radius: 50%;
	}
</style>

<script type="text/javascript">
	export default{
		data(){
			return{
				flag : false,
				a: 0,
				list:[],
				fruits:[],
				meat:[],
				seafood:[],
				sweets:[],
				vegetables:[]
			}
		},
		mounted(){
			this.$http.get('./data/event.json')
			.then((res)=>{
				this.list = res.data.list;
				this.fruits = res.data.fruits;
				this.meat = res.data.meat;
				this.seafood = res.data.seafood;
				this.sweets = res.data.sweets;
				this.vegetables = res.data.vegetables;
			})
			.catch(function(error){
				console.log(error);
			})
			window.addEventListener('scroll',this.scrollToTop);
		},
		beforeDestroy(){
			window.removeEventListener('scroll',this.scrollToTop);
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			backToTop(){
				document.documentElement.scrollTop = document.body.scrollTop = 0;
			},
			scrollToTop(el){
				var scrollTop = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop;
				var headTop = this.$refs.head.clientHeight;
				var nav = this.$refs.nav;
				if (scrollTop > 400) {
					this.flag = true;
				}else{
					this.flag = false;
				}
				if (scrollTop > headTop) {
					nav.style.position = "fixed";
					nav.style.top = '0px';
					this.$refs.fruits.style.marginTop = "47px";
				}
				if (scrollTop < headTop) {
					nav.style.position = "relative";
					this.$refs.fruits.style.marginTop = "0px";
				}
				if (scrollTop > this.$refs.vegetables.offsetTop-46) {
					this.a = 4;
				}else if (scrollTop > this.$refs.sweets.offsetTop-46) {
					this.a = 3;
				}else if (scrollTop > this.$refs.seafood.offsetTop-46) {
					this.a = 2;
				}else if (scrollTop > this.$refs.meat.offsetTop-46) {
					this.a = 1;
				}else{
					this.a = 0;
				}
			},
			change(index){
				var type = document.getElementsByClassName('type');
				var top = type[index].offsetTop-44;
				type[index].marginTop = "45px";
				window.pageYOffset = top;//safari
				document.documentElement.scrollTop = top;//firefox
				document.body.scrollTop = top;//chrome
				this.a = index;
			}
		}
	}
</script>;