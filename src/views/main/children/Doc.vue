<template>
<!--    <TopNav/>-->
    <main>
        <aside v-show="menuVisible">
            <h2>组件列表</h2>
            <nav>
                <RouterLink to="" class="aside-nav-item">Switch组件</RouterLink>
                <RouterLink to="" class="aside-nav-item">Button组件</RouterLink>
                <RouterLink to="" class="aside-nav-item">Dialog组件</RouterLink>
                <RouterLink to="" class="aside-nav-item">Tabs组件</RouterLink>
            </nav>
        </aside>
    </main>
</template>

<script lang="ts">
import TopNav from '../../../components/TopNav.vue'
import {inject, Ref} from "vue";

export default {
    name: "Doc",
    components: {
        TopNav
    },
    setup() {
        const menuVisible = inject<Ref<boolean>>('menuVisible');
        console.log(menuVisible?.value + '   top nav')

        return {menuVisible}
    }
}
</script>

<style scoped lang="scss">
.aside-nav-item {
  display: block;
}
</style>
