<template>
  <div class="container">
    <div class="jumbotron text-center">
      <h2>Login failed: {{message}}</h2>
      <router-link to="/login">Back to Login</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoginFailed",
  props: ["message"]
};
</script>
<style scoped>
</style>