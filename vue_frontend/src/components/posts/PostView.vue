<template>
  <div class="card bg-light text-dark">
    <div class="card-body">
      <a href="#" v-on:click="viewSingle(post._id)">
        <h5 class="card-title">{{post.title}}</h5>
      </a>

      <p class="card-text">
        <span>id (debug): {{post._id}}</span>
        <br/>
        <span>author: {{post.author}}</span>
        <br />
        <span>entered on: {{post.date}}</span>
        <br />
        <span>category: {{post.category}}</span>
      </p>
      <hr />
      <p>{{post.posttext}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostView",
  props: ["post"],
  methods: {
    viewSingle(id) {
      this.$router.push(`/singlepost/${id}`);
    }
  }
};
</script>

<style scoped>
</style>
