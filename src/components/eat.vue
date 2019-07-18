<template>
	<div class="eat">
		<header>
			<span class="back" @click = "back()"></span>
			<ul>
				<li>
					<img src="../assets/img/eat01.png">
					<p>做美食</p>
				</li>
				<li>
					<img src="../assets/img/eat02.png">
					<p>涨知识</p>
				</li>
				<li>
					<img src="../assets/img/eat03.png">
					<p>生活家</p>
				</li>
				<li>
					<img src="../assets/img/eat04.png">
					<p>爱试吃</p>
				</li>
			</ul>
		</header>
		<section class="article">
			<ul>
				<li v-for="(item,index) in article">
					<span class="type">{{item.type}}</span>
					<span class="viewCount">{{item.viewCount}}</span>
					<img :src="item.src">
					<p class="title">
						{{item.title}}
					</p>
					<p class="time">
						<i class="authorImg"></i>
						<span class="author">易果君</span>
						<span class="timeNew">{{item.time}}</span>
					</p>
				</li>
			</ul>
		</section>
	</div>
</template>

<style type="text/css" scoped>
	.eat{
		width: 100%;
		max-width: 750px;
		height: 100%;
		background: #f4f4f4;
	}
	header{
		height: 87px;
		background: white;
		position: relative;
	}
	header .back{
		display: block;
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background-color: rgba(200,200,200,0.8);
		background-image: url(../assets/img/icon_back.svg);
		background-repeat: no-repeat;
		background-size: 60% 60%;
		background-position: 8px center;
		position: absolute;
		top: 50%;
		left: 15px;
		transform: translateY(-50%);
	}
	header ul{
		margin-left: 50px;
		overflow: hidden;
	}
	header ul li{
		float: left;
		width: 25%;
		padding: 10px 0px;
	}
	header ul li img{
		width: 44px;
		height: 38px;
	}
	header ul li p{
		font-size: 14px;
		color: #808080;
		margin-top: 10px;
	}

	.article ul{
		overflow: hidden;
	}
	.article ul li{
		margin-top: 6px;
		padding: 8px 10px 0px 10px;
		background: white;
		position: relative;
		float: left;
	}
	.article ul li img{
		width: 100%;
	}
	.article ul li .type{
		position: absolute;
		top: 18px;
		left: 10px;
		width: 52px;
		height: 23px;
		line-height: 23px;
		border-radius: 0px 15px 15px 0px;
		background: #ff6b22;
		color: white;
		font-size: 13px;
	}
	.article ul li .viewCount{
		width: 62px;
		height: 18px;
		line-height: 18px;
		padding-left: 12px;
		box-sizing: border-box;
		position: absolute;
		top: 20px;
		right: 20px;
		background: rgba(255,255,255,.85);
		color: #656565;
		border-radius: 15px;
	}
	.article ul li .viewCount::before{
		content: '';
		display: inline-block;
		position: absolute;
		top: 5px;
		left: 6px;
		width: 12px;
		height: 9px;
		background: url(../../data/img/icon.png) no-repeat;
		background-position: 0px 0px;
		background-size: 100px;
	}
	.article ul li .title{
		padding: 16px 0px;
		font-size: 18px;
		text-align: left;
		border-bottom: 1px solid #f4f4f4;
	}
	.article ul li .time{
		padding: 0px 0px 0px 45px;
		text-align: left;
		color: #8d8a8a;
		font-size: 13px;
	}
	.article ul li .authorImg{
		display: inline-block;
		width: 25px;
		height: 27px;
		position: absolute;
		bottom: 10px;
		left: 15px;
		background: url(../assets/img/author.jpg) 50% no-repeat;
		background-size: 100% 100%;
	}
	.article ul li .author{
		line-height: 50px;
	}
	.article ul li .timeNew{
		float: right;
		line-height: 50px;
	}
</style>

<script type="text/javascript">
	export default{
		data(){
			return{
				article:[]
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		},
		mounted(){
			this.$http.get('./data/eat.json')
			.then((res)=>{
				this.article = res.data.article;
			})
			.catch(function(error){
				console.log(error);
			})
		}
	}
</script>