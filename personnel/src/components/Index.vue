<template>
  <div id="index">
    <toolbar></toolbar>
    <note-list></note-list>
    <editor></editor>
  </div>
</template>

<script>
import Toolbar from './Toolbar'
import NoteList from './NoteList'
import Editor from './Editor'

export default {
  name: 'Index',
  components: {
    Toolbar,
    NoteList,
    Editor
  }
}
</script>
<style type="text/css">
html, #index {
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
}
</style>
