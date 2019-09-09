<template>
  <div class="container">
    <div class="jumbotron text-center">
      <h1>Post Operation failed:</h1>
      <h3>{{message}}</h3>
    </div>
  </div>
</template>
<script>
export default {
  name: "FailedPost",
  props: ["message"]
};
</script>
<style scoped>
</style>