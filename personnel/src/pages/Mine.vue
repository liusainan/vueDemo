<template>
  <div id="mine">
    <div class="mineboxList">
      <dl>
        <a href="">
          <dt><img src="../assets/img1.png" alt=""></dt>
          <dd>
            <p class="name">灰太狼</p>
            <p class="job">UI视觉设计师</p>
            <span class="rightIcon"></span>
          </dd>
        </a>
      </dl>
      <ul>
        <li>
          <a href="/up/dj-mobile/aslk/demo/mineT.html">
            <span class="titleLeft">我发布的帖子</span>
            <span class="rightIcon"></span>
            <span class="numRight">20</span>
          </a>
        </li>
        <li>
          <a href="/up/dj-mobile/aslk/demo/comment.html">
            <span class="titleLeft">我发布的评论</span>
            <span class="rightIcon"></span>
            <span class="numRight">20</span>
          </a>
        </li>
        <li>
          <a href="/up/dj-mobile/aslk/demo/comment2.html">
            <span class="titleLeft">收到的评论<i class="new"></i></span>
            <span class="rightIcon"></span>
            <span class="numRight">20</span>
          </a>
        </li>
        <li>
          <a href="/up/dj-mobile/aslk/demo/zan.html">
            <span class="titleLeft">被赞数</span>
            <span class="rightIcon"></span>
            <span class="numRight">20</span>
          </a>
        </li>
        <li>
          <a href="/up/dj-mobile/aslk/demo/zT.html">
            <span class="titleLeft">我赞过的</span>
            <span class="rightIcon"></span>
            <span class="numRight">20</span>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="">
            <span class="titleLeft">我的积分</span>
            <span class="rightIcon"></span>
            <span class="numRight">20</span>
          </a>
        </li>
      </ul>
    </div>
    <bottom-tool></bottom-tool>
  </div>
</template>

<script>
import BottomTool from '@/components/BottomTool'

export default {
  name: 'Mine',
  components: {
    BottomTool
  }
}
</script>
<style type="text/css">
.mineboxList{
  width: 100%;
  float: left;
  font-size: 0.8rem;
  color: #333;
  padding-bottom: 80px;
}
.mineboxList dl{
  width: 94%;
  background: #fff;
  height: auto;
  padding:15px 3%;
  height: 50px;
}
.mineboxList a{
  display: inline-block;
  height: auto;
  font-size: 0.8rem;
  color: #333;
}
.mineboxList dl a{
  width: 100%;
  display: -webkit-box;
  position: relative;
}
.mineboxList dl dt{
  width: 50px;
  height: 50px;
}
.mineboxList dl dt img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.mineboxList dl dd{
  -webkit-box-flex:1;
  padding-left: 3%;
  padding-right: 13px;
}
.mineboxList dl dd .job{
  color: #666;
  font-size: 0.6rem;
  line-height: 20px;
  display:block;
  white-space:nowrap; 
  overflow:hidden;
  text-overflow:ellipsis;
}
.mineboxList span.rightIcon{
  width: 8px;
  height: 14px;
  display: inline-block;
  background: url(/up/dj-mobile/aslk/i/rightIcon.png) center center no-repeat;
    background-size: 8px auto;
}
.mineboxList dl span.rightIcon {
  position: absolute;
  right: 0;
  top: 30%;
}
.mineboxList ul{
  margin-top: 3%;
  width: 97%;
  padding-left: 3%;
  background: #fff;
}
.mineboxList ul li{
  border-bottom: 1px solid #ebebeb;
  height: 54px;
  line-height: 54px;
  width: 97%;
  padding-right: 3%;
}
.mineboxList ul li a{
  width: 100%;
  position: relative;
  outline: none;
  text-decoration: none;
}
.mineboxList ul li a i.new{
  display: inline-block;
    width: 8px;
    height: 8px;
    background: red;
    border-radius: 50%;
    position: relative;
    top: -8px;
}
.mineboxList ul li a .numRight{
  float: right;
  color: #bdbdbd;
  font-size: 0.65rem;
  margin-right: 13px;
}
.mineboxList ul li a .rightIcon{
  float: right;
  position: relative;
  top: 20px;
}
.mineboxList ul li:last-child{
  border: none;
}
.mineList.postDetail{
  padding-bottom: 100px;
}
</style>