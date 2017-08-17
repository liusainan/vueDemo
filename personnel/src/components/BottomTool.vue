<template>
  <div id="bottom-tool">
    <div class="fixedBottom">
      <ul>
        <router-link :to="'/'">
          <li class="home"><a href=""><i></i><span>首页</span></a></li>
        </router-link> 
        <router-link :to="'fb'">
          <li class="fbBtn"><a href=""><span>发布</span></a></li>
        </router-link> 
        <router-link :to="'mine'">
          <li class="mine"><a href=""><i></i><span>我的</span></a></li>
        </router-link> 
      </ul>
    </div>
  </div>
</template>

<style type="text/css">
.fixedBottom{
  height: 50px;
  background:#fff;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow:0 0 5px rgba(0, 0, 0, .2); 
  transform: translate3d(0,0,0);
}
.fixedBottom ul {
  width: 100%;
  padding: 0;
  margin: 0;
}
.fixedBottom ul li{
  width: 33%;
  float: left;
  text-align: center;
  list-style-type: none;
}
.fixedBottom ul li a{
  display: inline-block;
  font-size: 0.65rem;
  color: #999;
  outline: none;
  text-decoration: none;
}
.fixedBottom ul li a i{
  display: inline-block;
  width: 100%;
  height: 20px;
  background: url(../assets/icon_tab_home_s.png) center center no-repeat;
  background-size: 20px auto;
  margin-top: 6px;
}
.fixedBottom ul li.fbBtn a {
    height: 74px;
    width: 100%;
    background: url(../assets/fb.png) center center no-repeat;
    background-size: 46px auto;
}
.fixedBottom ul li.fbBtn span {
    margin-top: 55px;
    display: inline-block;
}
.fixedBottom ul li.mine a i {
    background: url(../assets/icon_tab_me_n.png) center center no-repeat;
    background-size: 20px auto;
}
.fixedBottom ul li.fbBtn {
    position: relative;
    top: -24px;
}
</style>
