<template>
  <div class="card bg-light text-dark">
    <div class="card-body">
      <h5 class="card-title">{{post.title}}</h5>
      <p class="card-text">
        <span>author: {{post.author}}</span>
        <br />
        <span>category: {{post.category}}</span>
        <br />
        <span>{{post.posttext}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostView",
  props: ["post"]
};
</script>

<style scoped>
</style>
