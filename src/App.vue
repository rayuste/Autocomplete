<template>
  <div id="app">
    <SearchBar/>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'

export default {
  name: 'app',
  components: {
    SearchBar
  }
}
</script>

<style>
#app {
  margin-top: 60px;
  margin: 0px auto;
  width: 100%;
}
</style>
