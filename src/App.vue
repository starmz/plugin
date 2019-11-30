<template>
  <div id="app">
    <Garden/>
  </div>
</template>

<script>
import Garden from './components/Garden.vue'

export default {
  name: 'app',
  components: {
    Garden
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}
</style>
