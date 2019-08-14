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
    <button v-on:click="gotoEditPost" class="btn btn-primary">Edit</button>
    <button v-on:click="gotoDeletePost" class="btn btn-danger">Delete</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "SinglePost",
  props: ["id"],
  computed: {
    ...mapGetters(["getProxy", "getPostsProxyStubs"]),
    postByIdEndpoint() {
      return `${this.getProxy}${this.getPostsProxyStubs.getpostsroute}/${this.id}`;
    }
  },
  methods: {
    gotoEditPost() {
      this.$router.push(`/editpost/${this.id}`);
    },
    gotoDeletePost() {
      this.$router.push(`/deletepost/${this.id}`);
    },
    getPostById() {
      fetch(this.postByIdEndpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(doc => {
          this.post = { ...doc };
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
