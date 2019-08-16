<template>
  <div class="container">
    <div class="jumbotron mb-1 border border-primary">
      <h1 class="text-center">Blog Page</h1>
      <hr/>
      <h5>Here you will find the blog of Wile E. Coder...</h5>
    </div>
    <div>
      <div v-bind:key="post._id" v-for="post in posts">
        <PostView v-bind:post="post"></PostView>
      </div>
    </div>
  </div>
</template>

<script>
import PostView from "./PostView.vue";
import { mapGetters } from "vuex";


export default {
  name: "ListPosts",
  components: {
    PostView
  },
  computed: {
    ...mapGetters(["getPostsProxyStubs", "getProxy"]),
    getAllPostsRoute() {
      return `${this.getProxy}${this.getPostsProxyStubs.getpostsroute}`;
    }
  },
  methods: {
    getAllPosts() {
      fetch(this.getAllPostsRoute, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
        .then(res => res.json())
        .then(doc => {
          this.posts = [...doc];
        })
        .catch(err => {
          this.posts = [
            {
              _id: "1",
              title: "Error post",
              author: "none",
              date: "none",
              category: "error",
              posttext: err
            }
          ];
        });
    }
  },
  created() {
    this.getAllPosts();
  },
  data() {
    return {
      posts: []
    };
  }
};
</script>
<style scoped>
</style>
