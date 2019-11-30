<template>
    <div>
        <h2>number of flowers from parent</h2>
        <span class="flower" v-for="no in number" :key="no">🌷 - {{ no }}</span>
        <Leaf/>
    </div>
</template>

<script>
    import Leaf from './Leaf.vue'
    export default {
        name: 'Flower',
        components: {
            Leaf
        },
        data() {
            return {
              number: this.$parent.garden.numberOfFlower
            }
        }
    }
</script>

<style scoped>
    .flower {
        padding: 5px;
    }
</style>