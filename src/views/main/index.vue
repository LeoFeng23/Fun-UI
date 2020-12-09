<template>
    <!--    <nav class="top-nav-box">-->
    <TopNav/>
    <!--    </nav>-->
    <div class="page-content">
        <RouterView/>
    </div>
</template>

<script>
import TopNav from '../../components/TopNav.vue'
import {provide, ref} from "vue";
import {router} from "../../router";

export default {
    name: "index",
    components: {TopNav},
    setup() {
        const windowWidth = document.documentElement.clientWidth;
        const menuVisible = ref(windowWidth > 500);
        provide('menuVisible', menuVisible);

        router.afterEach(() => {
            if (windowWidth <= 500) {
                menuVisible.value = false
            }
        })
    }
}
</script>

<style scoped lang="scss">
.page-content {
  margin-top: 60px;
  width: 100%;
}
</style>
