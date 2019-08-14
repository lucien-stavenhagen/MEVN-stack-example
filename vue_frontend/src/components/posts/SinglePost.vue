<template>
  <div class="container">
    <div class="card bg-light text-dark">
      <div class="card-body">
        <router-link to="/posts">
          <h2 class="card-title">{{post.title}}</h2>
        </router-link>
        <p class="card-text">
          <span>author: {{post.author}}</span>
          <br />
          <span>category: {{post.category}}</span>
        </p>
        <hr />
        <p>{{post.posttext}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SinglePost",
  props: ["id"],
  methods: {},
  computed: {
    ...mapGetters(["getPostById"])
  },
  created() {
    this.post = {
      ...this.getPostById(this.id)
    };
  },
  data() {
    return {
      post: {}
    };
  }
};
</script>

<style scoped>
</style>
