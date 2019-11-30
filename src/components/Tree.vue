<template>
  <div>
    <h2>Number of trees from plugin</h2>
    <span class="tree" v-for="no in $numberOfTree" :key="no">🌲 - {{ no }}</span>
  </div>
</template>

<script>
export default {
  name: 'Tree'
}
</script>

<style scoped>

</style>
