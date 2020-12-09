<template>
    <TopNav/>
    <main class="main-content">
        <h1 class="main-name">FS-UI</h1>
        <article class="main-des">一个很不错的UI组件库</article>
        <span class="">
            <RouterLink class="begin-button begin-button-ref" to="/doc">现在开始</RouterLink>
        </span>
    </main>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";

export default {
    name: "home",
    components: {TopNav}
}
</script>

<style scoped lang="scss">
.main-content {
  padding: 60px 0;
  text-align: center;

  .main-name {
    font-size: 36px;
    margin-bottom: 30px;
  }

  .main-des {
    font-size: 20px;
  }

  .begin-button {
    display: inline-block;
    background: #4ABF8A;
    border-radius: 5px;
    //padding: 2px 30px;

    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;

    font-size: 14px;
    color: #fff;

    &:hover {
      background: #4ECC93;
    }
  }
}
</style>
