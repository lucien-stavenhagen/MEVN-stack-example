<template>
  <div class="container">
    <div class="jumbotron mb-1 border border-primary">
      <h1 class="text-center">Blog Page</h1>
      <hr />
      <h5>Here you will find the blog of Wile E. Coder...</h5>
    </div>
    <div class="row" v-if="posts.length > 0">
      <div class="col-12 col-md-6" v-bind:key="post._id" v-for="post in visiblePosts">
        <PostView v-bind:post="post"></PostView>
      </div>
    </div>
    <div class="card" v-else>
      <div class="card-body text-center">
        <p class="card-title">No posts found on server.</p>
      </div>
    </div>
    <div class="d-flex flex-sm-row flex-column justify-content-between align-items-center mb-2">
      <button
        v-if="currentPage > 0"
        v-on:click="updatePage(currentPage-1)"
        class="font-weight-lighter btn btn-outline-secondary"
      >&lt;&lt;- Prev</button>
      <button v-else class="invisible" disabled></button>
      <span class="font-weight-lighter align-middle">
        Page {{currentPage+1}}
        <span class="text-muted">of {{Math.ceil(posts.length/pageSize)}}</span>
      </span>
      <button
        v-if="(pageSize < posts.length) && (((currentPage+1) * pageSize) < posts.length)"
        v-on:click="updatePage(currentPage+1)"
        class="font-weight-lighter btn btn-outline-secondary"
      >Next-&gt;&gt;</button>
      <button v-else class="invisible" disabled></button>
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
          this.updateVisiblePosts();
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
    },
    updatePage(pageNumber) {
      this.currentPage = 0 < pageNumber ? pageNumber : 0;
      this.updateVisiblePosts();
    },
    updateVisiblePosts() {
      this.visiblePosts = this.posts.slice(
        this.currentPage * this.pageSize,
        this.currentPage * this.pageSize + this.pageSize
      );
      // no visible posts
      if (this.visiblePosts.length === 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1);
      }
    }
  },
  created() {
    this.getAllPosts();
  },
  data() {
    return {
      posts: [],
      currentPage: 0,
      pageSize: 2,
      visiblePosts: []
    };
  }
};
</script>
<style scoped>
</style>
