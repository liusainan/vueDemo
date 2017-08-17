<template>
  <div id="fb">
	<div class="fbList">
		<form id="fbPostForm">
			<!-- 编辑 -->
				<input type="hidden" name="postId">
				<input type="hidden" name="editFlag">
			<!-- 编辑 E-->
			<p>
				<input name="postTitle" type="text" placeholder="标题...">
			</p>
			<p>
				<span class="title">内容</span>
			</p>
			<p>
				<textarea v-model="countText" name="postContent" placeholder="请输入您的内容"></textarea>
				<span :class="textClass">{{textSum}}/{{textMax}}</span>
			</p>
			<div class="postImgBox">
				<input type="hidden" name="mediaIds">
				<ul>
					<li v-for="item in imgArr"><img :src="item" alt=""><a href="" class="del" @click.prevent="delPhoto"></a></li>
					<li class="add" @click="addPhoto"><i></i><span>添加照片</span></li>
				</ul>
			</div>
		</form>
	</div>
	<div class="fixedBottom btnBox">
	<!-- 发布 -->
	<!-- <ul>
		<li id="submit" class="fb disabledBtn">
			<a href="">发布</a>
		</li>
	</ul> -->
	<!-- 编辑 -->
	<ul>
		<li class="qx">
			<a href="" @click.prevent="goBack">取消</a>
		</li>
		<li id="submit" class="fb">
			<a href="">发布</a>
		</li>
	</ul>
</div>
  </div>
</template>

<script>

export default {
  name: 'Fb',
  data (){
  	return {
  		imgArr: [],
  		textMax: 100,
  		countText: '',
  		textClass: 'num'
  	}
  },
  computed: {
  	textSum () {
  		this.textClass = this.countText.length > this.textMax ? 'num red' :  'num'
  		return this.countText.length
  	}
  },
  methods: {
  	addPhoto () {
  		this.imgArr.push('/static/img/img1.56d0cfc.png');
  	},
  	delPhoto () {
  		this.imgArr.pop();
  	},
  	goBack () {
  		this.$router.back(-1);
  	}
  }
}
</script>
<style type="text/css">
.fbList{
	float: left;
	width: 94%;
	padding:3% 3% 60px;
	background:#fff;
	min-height: 94%;
    position: absolute;
    top: 0;
    left: 0;
}
.fbList p{
	float: left;
	width: 100%;
	font-size: 0.8rem;
}
.fbList p input{
	border: 0;
    vertical-align: bottom;
	height: 50px;
	line-height: 50px;
	appearance:none;   
    -moz-appearance:none;   
    -webkit-appearance:none;
    border-bottom: 1px solid #ebebeb;
    width: 100%;
    border-radius: 0;
}
.fbList p span.title{
	line-height: 40px;
	height: 40px;
	color: #999;
}
.fbList p textarea{
	width: 94%;
	height: 150px;
	padding: 5px 3%;
	font-size: 0.7rem;
	border: 1px solid #ebebeb;
	resize: none;
	background:#fafafa;
	border-radius: 0;
}
.fbList p span.num{
	float: right;
	position: relative;
	top: -23px;
	margin-right: 3%;
	color: #bbb;
	font-size: 0.7rem;
}
.fbList p span.num.red{
	color: red;
}
.fbList ul{
	width: 100%;
	float: left;
}
.fbList ul li{
	float: left;
	width:23%;
	margin-right: 2.3%; 
	position: relative;
	margin-bottom: 3%;
	height: 80px;
}
.fbList ul li:nth-child(4n+0){
	margin-right: 0;
}
.fbList ul li img{
	width: 100%;
	height: 100%;
	float: left;
}
.fbList ul li a{
	position: absolute;
	right: -6px;
	top: -10px;
	display: inline-block;
	height: 20px;
	width: 20px;
	background: url(../assets/delT.png) center center no-repeat;
	background-size: 15px auto;
}
.fbList ul li.add{
	width: 23%;
	height: 80px;
	position: relative;
	background:#fafafa;
}
.fbList ul li.add i{
	display: inline-block;
	width: 100%;
	height: 30px;
	background: url(../assets/add.png) center center no-repeat;
	background-size: 30px auto;
	position: relative;
	top: 20px;
	
}
.fbList ul li.add span{
	color: #bbbbbb;
	text-align: center;
	font-size: 0.6rem;
	position: relative;
	top:10px;
	display: inline-block;
	width: 100%;
}
.fixedBottom{
	height: 50px;
	background:#fff;
	position: fixed;
	bottom: 0;
	width: 100%;
	box-shadow:0 0 5px rgba(0, 0, 0, .2); 
	transform: translate3d(0,0,0);
}
.fixedBottom.btnBox ul{
	height: 50px;
	width: 98%;
	display: -webkit-box;
	margin-right: 2%;
}
.fixedBottom.btnBox ul li{
	-webkit-box-flex:1;
	margin-left: 2%;
	float: none;
	position: relative;
	top: 4px;
	height: 40px;
	line-height: 40px;
	border: 1px solid #dbdbdb;
	background:#fafafa;
	color: #5a5f6d;
	border-radius: 5px;
	text-align: center;
}
.fixedBottom.btnBox ul li a{
	display: inline-block;
	font-size: 0.8rem;
	line-height: 40px;
	height: 40px;
	width: 100%;
	color: #999;
    outline: none;
    text-decoration: none;
}
.fixedBottom.btnBox ul li.fb{
	background: #0db6d7;
	border-color: #0db6d7;
}
.fixedBottom.btnBox ul li.fb a{
	color: #fff;
}
.disabledBtn {
    pointer-events: none;
    background: #ebebeb !important;
    color: #999 !important;
    border: none !important;
}
</style>
