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
    <button class="btn btn-primary">Edit</button>
    <button class="btn btn-danger">Delete</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "SinglePost",
  props: ["id"],
  computed: {
    ...mapGetters(["getProxy","getPostsProxyStubs"])
  },
  methods: {
    getPostById() {
      console.log(`${this.getProxy}${this.getPostsProxyStubs.getpostsroute}/${this.id}`)
      axios
        .get(`${this.getProxy}${this.getPostsProxyStubs.getpostsroute}/${this.id}`)
        .then(doc => {
          this.post = { ...doc.data };
        })
        .catch(err => {
          this.post = {
            _id: "2",
            title: "Single Error post",
            author: "none",
            date: "none",
            category: "error",
            posttext: err
          };
        });
    }
  },
  created() {
    this.getPostById();
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
