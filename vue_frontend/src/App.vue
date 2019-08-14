<template>
  <div class="app">
    <MenuBar msg="Posts App" />
    <router-view></router-view>
  </div>
</template>

<script>
import MenuBar from "./components/layout/MenuBar.vue";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    MenuBar
  },
  methods: {
    ...mapActions(["checkLocalStorageForLogin"])
  },
  created() {
    this.checkLocalStorageForLogin();
  }
};
</script>

<style scoped>
</style>
