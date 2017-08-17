<template>
  <div id="index">
    <list></list>
    <bottom-tool></bottom-tool>
  </div>
</template>

<script>
import BottomTool from '@/components/BottomTool'
import List from '@/components/List'

export default {
  name: 'Index',
  components: {
    List,
    BottomTool
  }
}
</script>
<style type="text/css">
</style>
