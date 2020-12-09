<template>
    <!--    <TopNav/>-->
    <main class="doc-content">
        <aside class="aside-nav" v-show="menuVisible">
            <h2>组件列表</h2>
            <nav>
                <RouterLink to="/doc/switch" class="aside-nav-item">Switch组件</RouterLink>
                <RouterLink to="/doc/button" class="aside-nav-item">Button组件</RouterLink>
                <RouterLink to="/doc/dialog" class="aside-nav-item">Dialog组件</RouterLink>
                <RouterLink to="/doc/tabs" class="aside-nav-item">Tabs组件</RouterLink>
            </nav>
        </aside>
        <article class="article-content">
            <RouterView/>
        </article>
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

        return {menuVisible}
    }
}
</script>

<style scoped lang="scss">
.doc-content {

  .aside-nav {
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;
    width: 120px;
    border-right: 1px solid #ccc;
    background: #fff;

    .aside-nav-item {
      display: block;
    }
  }

  .article-content {
    margin-left: 120px;
    width: calc(100% - 120px);
  }

  @media (max-width: 500px) {
    .article-content {
      width: 100%;
      margin: 0;
    }
  }
}
</style>
