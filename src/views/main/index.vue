<template>
    <TopNav/>
    <RouterView/>
</template>

<script>
import TopNav from '../../components/TopNav.vue'
import {provide, ref} from "vue";

export default {
    name: "index",
    components: {TopNav},
    setup() {
        const menuVisible = ref(false);
        provide('menuVisible', menuVisible);
    }
}
</script>

<style scoped>

</style>
