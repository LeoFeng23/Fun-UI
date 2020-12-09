<template>
    <nav class="top-nav">
        <div class="toggle-menu-nav iconfont icon-toggle" @click="toggleMenu"></div>
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
import {inject, Ref} from 'vue'

export default {
    name: "TopNav",
    setup() {
        const menuVisible = inject<Ref<boolean>>('menuVisible');
        const toggleMenu = () => {
            if (menuVisible) {
                menuVisible.value = !menuVisible?.value
            }
        }

        return {
            toggleMenu
        }
    }
}
</script>

<style scoped lang="scss">
@import "../assets/iconfont/iconfont.css";

.top-nav {
  height: 60px;
  background: #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;

  .toggle-menu-nav {
    padding: 5px;
    position: absolute;
    left: 3%;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    &.icon-toggle {
      font-size: 30px;
    }
  }

  .logo {
    user-select: none;

    &:hover {
      cursor: pointer;
    }
  }

  .menu-nav {
    display: flex;
    padding-right: 50px;

    .menu-nav-item {
      box-sizing: border-box;
      margin: 0 20px;
    }
  }

  @media (max-width: 500px) {
    .logo {
      margin: 0 auto;
    }

    .menu-nav {
      display: none;
    }

    .toggle-menu-nav {
      display: block;
    }
  }
}
</style>
