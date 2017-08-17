<template>
  <div id="list">
  	<scroll-loader 
	  	:minHeight="minHeight" 
	  	:getUnderData="getUnderData" 
	  	class="container-main" 
	  	v-if="lists && lists.length>0" 
	  	:style="{maxHeight: maxHeight-50 + 'px'}"
	  	@scroll-to-bottom="refreshBottom"
  	>
	    <div class="homeList index">
		    <dl v-for="item in lists">
		        <a data-id="1" href="/up/dj-mobile/aslk/demo/mine.html">
		            <dt><img :src="item.postPicUrl" alt=""></dt>
		        </a>
		        <dd>
		            <p class="text">{{item.postTile}}</p>
		            <p><span><img :src="item.userHeadImg" alt=""><i class="name">{{item.userName}}</i></span></p>
		            <p><span class=""><i class="zan"></i><em>{{item.praiseTimes}}</em></span></p>
		        </dd>
		    </dl>
		</div>
	</scroll-loader>
  </div>
</template>

<script type="text/javascript">

import ScrollLoader from './scrollLoader.vue';

export default {
  data () {
    return {
		underTimes: 0,
		underId: 6,
        maxHeight: 0,
        minHeight: window.innerHeight-50,
        lists: [{
          'userHeadImg': 'https://f1.dajieimg.com/group1/M00/00/11/CgogqlEt30eANrHNAAARmZq2y0U017m.gif',
          'postTile': '测试标题',
          'praiseTimes': 1,
          'userName': '回宿舍',
          'postDetailUrl': '/up/dj-mobile/aslk/demo/mine.html',
          'postId': 1,
          'postPicUrl': 'https://assets.dajieimg.com/up/dj-mobile/aslk/i/img1.png'
        }, {
          'userHeadImg': 'https://f1.dajieimg.com/group1/M00/00/11/CgogqlEt30eANrHNAAARmZq2y0U017m.gif',
          'postTile': '测试标题',
          'praiseTimes': 1,
          'userName': '回宿舍',
          'postDetailUrl': '/up/dj-mobile/aslk/demo/mine.html',
          'postId': 1,
          'postPicUrl': 'https://assets.dajieimg.com/up/dj-mobile/aslk/i/img1.png'
        }]
      }
  	},
    components: {
    	ScrollLoader
    },
    mounted () {
      this.minHeight = document.getElementById('list').offsetHeight;
      this.maxHeight = document.getElementById('list').offsetHeight;
    },
    methods: {
	    getUnderData(){
	      var me = this;
	      //意义同getUpperData()
	      return new Promise(function(resolve){
	        setTimeout(function(){
	          //模拟加载完毕
	          if(me.underTimes>3){
	            return resolve([]);
	          }
	          
	          //加载数据
	          resolve(
	            [{
		          'userHeadImg': 'https://f1.dajieimg.com/group1/M00/00/11/CgogqlEt30eANrHNAAARmZq2y0U017m.gif',
		          'postTile': '测试标题',
		          'praiseTimes': me.underId,
		          'userName': '回宿舍',
		          'postDetailUrl': '/up/dj-mobile/aslk/demo/mine.html',
		          'postId': me.underId,
		          'postPicUrl': 'https://assets.dajieimg.com/up/dj-mobile/aslk/i/img1.png'
		        }, {
		          'userHeadImg': 'https://f1.dajieimg.com/group1/M00/00/11/CgogqlEt30eANrHNAAARmZq2y0U017m.gif',
		          'postTile': '测试标题',
		          'praiseTimes': me.underId,
		          'userName': '回宿舍',
		          'postDetailUrl': '/up/dj-mobile/aslk/demo/mine.html',
		          'postId': me.underId,
		          'postPicUrl': 'https://assets.dajieimg.com/up/dj-mobile/aslk/i/img1.png'
		        }]
	          )
	        }, 1000);
	        me.underId = me.underId+2;
	        me.underTimes++;
	      })
	    },
	    refreshBottom (data){
	    	var me = this;
	    	me.lists = me.lists.concat(data); //直接合并
	    }

    }
}
</script>

<style type="text/css">
.homeList{
	width: 94%;
	padding: 3% 3% 80px;
	float: left;
}
.homeList dl{
	margin: 0;
	width: 49%;
	float: left;
	background: #fff;
	margin-bottom: 2%;
	/* border-radius: 5px; */
}
.homeList dl:nth-child(odd){
	margin-right: 2%;
}
.homeList dl dt{
	width: 99%;
	overflow: hidden;
}
.homeList dl dt{
	border-top: 1px solid #eff0f1;
	border-left: 1px solid #eff0f1;
	border-right: 1px solid #eff0f1;
	/* border-radius: 5px 5px 0 0; */
}
.homeList dl dd{
	margin: 0;
	border-left: 1px solid #eff0f1;
	border-right: 1px solid #eff0f1;
	border-bottom: 1px solid #eff0f1;
	/* border-radius: 0 0 5px 5px; */
}
.homeList dl dt img{
	width: 100%;
	height: auto;
	/* border-radius: 5px 5px 0 0; */
}
.homeList dl dd{
	padding: 3% 4.5% 5%;
	width: 90%;
	line-height: 25px;
	float: left;
}
.homeList dl dd p{
	margin: 0;
	padding: 0;
	width: 60%;
	float: left;
	color: #666666;
	font-size: 0.6rem;
	white-space:nowrap; 
	overflow:hidden; 
	line-height: 27px;
	text-overflow:ellipsis;
}
.homeList dl dd p.text{
	width: 100%;
	font-size: 0.7rem;
	color: #333333;
	white-space:nowrap; 
	overflow:hidden; 
	text-overflow:ellipsis;
	padding-bottom: 4px;
}
.homeList dl dd p span img{
	width: 25px;
	float: left;
	height: 25px;
	border-radius: 50%;
}
.homeList dl dd p span i.name{
	font-style: normal;
	margin-left: 5px;
}
.homeList dl dd p:last-child{
	width: 40%;
	text-align: right;
}
.homeList dl dd p span i.zan{
	display: inline-block;
	width: 14px;
	height: 14px;
	background:url(../assets/z.png) no-repeat;
	background-size: 100% auto;
	position: relative;
	top: 2px;
}
.homeList dl dd p span em{
	font-style: normal;
	color: #bbb;
	padding-left: 4%;
	display: inline-block;
}
.homeList dl dd p span.click em{
	color: #0db6d7;
}
</style>
