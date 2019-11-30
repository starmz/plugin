<template>
    <div class="garden">
        <h1>Gardern</h1>
        <Flower/>
        <Tree/>
    </div>
</template>

<script>
import Flower from "./Flower";
import Tree from "./Tree";
    export default {
        name: 'Garden',
        components: {
            Flower,
            Tree
        },
        provide () {
            return {
                leavesNumber: this.garden.numberOfLeaf
            }
        },
        data () {
            return {
                garden: {
                    numberOfFlower: 10,
                    numberOfLeaf: 20
                }
            }
        }
    }
</script>

<style scoped>
    .garden {
        background-color: brown;
        padding: 5px;
    }
</style>