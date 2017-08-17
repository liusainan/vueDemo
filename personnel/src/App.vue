<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style type="text/css">
html{
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  border: 0;
  height: 100%;
  max-height: 100%;
  position: relative;
  background: #f5f8fa;
  font-size: 20px;
}
p,ul,li,dl{
  margin: 0;
  padding: 0;
}
ul,li{
  list-style-type: none;
}
a{
  outline: none;
  text-decoration: none;
}
</style>
