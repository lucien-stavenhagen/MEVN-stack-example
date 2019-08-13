<template>
  <div class="container">
    <div class="jumbotron text-center">
      <h1>{{username}} is logged out</h1>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "UserLogout",
  props: ["username"],
  methods: {
    ...mapActions(["doLogout"])
  },
  created() {
    this.doLogout();
  }
};
</script>
<style scoped>
</style>