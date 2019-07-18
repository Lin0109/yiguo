<template>
	<div class="classify">
		<header>
			<form class="searchBox">
				<i class="icon"></i>
				<input type="search" name="search" placeholder="请输入商品名称">
			</form>
			<span class="searchTxt">搜索</span>
			<p class="line"></p>
		</header>
		<section>
			<div class="nav">
				<ul>
					<li v-for="(item,index) in list" @click="selected=index" :class="{active:selected==index}">{{item}}</li>
				</ul>
			</div>
			<div class="list">
				<ul v-show='selected==0'>
					<li v-for="(item,index) in listDetail01">
						<router-link to='/classify'>
							<img :src="item.src">
							<p>{{item.name}}</p>
						</router-link>
					</li>
				</ul>
				<ul v-show='selected==1'>
					<li v-for="(item,index) in listDetail02">
						<router-link to='/classify'>
							<img :src=item.src>
							<p>{{item.name}}</p>
						</router-link>
					</li>
				</ul>
				<ul v-show='selected==2'>
					<li v-for="(item,index) in listDetail03">
						<router-link to='/classify'>
							<img :src=item.src>
							<p>{{item.name}}</p>
						</router-link>
					</li>
				</ul>
				<ul v-show='selected==3'>
					<li v-for="(item,index) in listDetail04">
						<router-link to='/classify'>
							<img :src=item.src>
							<p>{{item.name}}</p>
						</router-link>
					</li>
				</ul>
				<ul v-show='selected==4'>
					<li v-for="(item,index) in listDetail05">
						<router-link to='/classify'>
							<img :src=item.src>
							<p>{{item.name}}</p>
						</router-link>
					</li>
				</ul>
				<ul v-show='selected==5'>
					<li v-for="(item,index) in listDetail06">
						<router-link to='/classify'>
							<img :src=item.src>
							<p>{{item.name}}</p>
						</router-link>
					</li>
				</ul>
				<ul v-show='selected==6'>
					<li v-for="(item,index) in listDetail07">
						<router-link to='/classify'>
							<img :src=item.src>
							<p>{{item.name}}</p>
						</router-link>
					</li>
				</ul>
				<ul v-show='selected==7'>
					<li v-for="(item,index) in listDetail08">
						<router-link to='/classify'>
							<img :src=item.src>
							<p>{{item.name}}</p>
						</router-link>
					</li>
				</ul>
				<ul v-show='selected==8'>
					<li v-for="(item,index) in listDetail09">
						<router-link to='/classify'>
							<img :src=item.src>
							<p>{{item.name}}</p>
						</router-link>
					</li>
				</ul>
				<ul v-show='selected==9'>
					<li v-for="(item,index) in listDetail10">
						<router-link to='/classify'>
							<img :src=item.src>
							<p>{{item.name}}</p>
						</router-link>
					</li>
				</ul>
				<ul v-show='selected==10'>
					<li v-for="(item,index) in listDetail11">
						<router-link to='/classify'>
							<img :src=item.src>
							<p>{{item.name}}</p>
						</router-link>
					</li>
				</ul>
				<ul v-show='selected==11'>
					<li v-for="(item,index) in listDetail12">
						<router-link to='/classify'>
							<img :src=item.src>
							<p>{{item.name}}</p>
						</router-link>
					</li>
				</ul>
			</div>
		</section>
	</div>
</template>

<style type="text/css" scoped>
	.classify header{
		width: 100%;
		max-width: 750px;
		height: 38px;
		position: fixed;
		background-color: white;
		text-align: left;
		padding: .5em .8em;
		border-bottom: 1px solid #ddd;
		box-sizing: border-box;
		z-index: 5;
		position: relative;
	}
	.classify header form{
		width: 296px;
		height: 26px;
	}
	.classify header input{
		background-color: #f4f4f4;
		border: none;
		border-radius: 20px;
		padding: .3em 3em;
		line-height: 1.5;
		width: 100%;
	}
	.classify header .icon{
		position: absolute;
		top: .75em;
		left: 1.5em;
		display: block;
		width: 20px;
		height: 20px;
		background: url(../assets/img/home-search.png) no-repeat 50%;
		background-size: 100% 100%;
	}

	.classify header .searchTxt{
		display: block;
		position: absolute;
		top: 10px;
		right: 15px;
		color: #11B57C;
		font-size: 1.2em;
	}

	section{
		width: 100%;
		max-width: 750px;
		box-sizing: border-box;
		padding-bottom: calc(100vh - 84px);
		position: relative;
	}
	section::after{
		display: block;
		content: '';
		clear: both;
		visibility: hidden;
	}
	section .nav{
		position: absolute;
		top: 0px;
		width: 22%;
		height: 100%;
		display: block;
		overflow-y: scroll;
		background: #f4f4f4;
	}
	section .nav ul li{
		width: 98%;
		height: 49px;
		line-height: 49px;
	}
	section .nav ul li.active{
		border-left: 3px solid #11B57C;
		color: #11B57C;
		border-right: 1px solid white;
		background-color: white;
	}
	section .list{
		width: 77%;
		height: 100%;
		position: absolute;
		top: 0px;
		right: 0px;
		overflow-y: scroll;
	}
	section .list ul{
		padding: 8px;
		float: left;
	}
	section .list ul li{
		width: 30%;
		float: left;
		padding: 3px;
	}
	section .list ul li a{
		display: inline-block;
		color: #808080;
	}
	section .list ul li img{
		width: 85%;
	}
	section .nav::-webkit-scrollbar{
		display: none;
	}
	.list::-webkit-scrollbar {
		width: 0 !important;
	}
</style>

<script type="text/javascript">
	export default{
		data(){
			return{
				selected:0,
				list:[],
				listDetail01:[],
				listDetail02:[],
				listDetail03:[],
				listDetail04:[],
				listDetail05:[],
				listDetail06:[],
				listDetail07:[],
				listDetail08:[],
				listDetail09:[],
				listDetail10:[],
				listDetail11:[],
				listDetail12:[]
			}
		},
		mounted(){
			this.$http.get('./data/classify.json')
			.then((res)=>{
				this.list = res.data.list;
				this.listDetail01 = res.data.listDetail01;
				this.listDetail02 = res.data.listDetail02;
				this.listDetail03 = res.data.listDetail03;
				this.listDetail04 = res.data.listDetail04;
				this.listDetail05 = res.data.listDetail05;
				this.listDetail06 = res.data.listDetail06;
				this.listDetail07 = res.data.listDetail07;
				this.listDetail08 = res.data.listDetail08;
				this.listDetail09 = res.data.listDetail09;
				this.listDetail10 = res.data.listDetail10;
				this.listDetail11 = res.data.listDetail11;
				this.listDetail12 = res.data.listDetail12;
			})
			.catch(function (error) {
			    console.log(error);
			})
			.then(function () {
			    // always executed
			});
		}
	}
</script>