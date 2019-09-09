<template>
  <div class="app">
    <MenuBar msg="Posts App" />
    <router-view></router-view>
  </div>
</template>

<script>
import MenuBar from "./components/layout/MenuBar.vue";

export default {
  name: "App",
  components: {
    MenuBar
  },
};
</script>

<style scoped>
</style>
