<template>
  <div class="container">
    <div class="jumbotron text-center">
      <h2>New account setup failed:</h2>
      <h4>{{message}}</h4>
      <router-link to="/login">Back to Login</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "AddUserFailed",
  props: ["message"]
};
</script>
<style scoped>
</style>