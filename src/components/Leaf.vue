<template>
    <div>
        <p> number of leaves from parent </p>
        <span class="leaf" v-for="no in number" :key="no">🌿 - {{ no }} </span>
        <p> number of leaves from inject/provider </p>
        <span class="leafs" v-for="no in leafsNumber" :key="no">🌿 - {{ no }} </span>
    </div>
</template>

<script>
    export default {
        name: 'Leaf',
        inject: ['leafsNumber'],
        data() {
            return {
              number: this.$parent.garden.numberOfFlower
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>