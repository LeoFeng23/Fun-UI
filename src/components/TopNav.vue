<template>
    <nav class="top-nav">
        <div class="logo">
            logo
        </div>
        <nav class="menu-nav">
            <div class="menu-nav-item">
                <RouterLink to="">菜单一</RouterLink>
            </div>
            <div class="menu-nav-item">
                <RouterLink to="">菜单二</RouterLink>
            </div>
        </nav>
    </nav>
</template>

<script lang="ts">
export default {
    name: "TopNav"
}
</script>

<style scoped lang="scss">
.top-nav {
  height: 60px;
  background: #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px 0 30px;
  min-width: 800px;

  .menu-nav {
    display: flex;

    .menu-nav-item {
      box-sizing: border-box;
      margin: 0 20px;
    }
  }
}
</style>
