<template>
  <div class="container">
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
import axios from "axios";

export default {
  name: "ListPosts",
  components: {
    PostView
  },
  computed: {
    ...mapGetters(["getPostsProxyStubs", "getProxy"])
  },
  methods: {
    getAllPosts() {
      console.log(`${this.getProxy}${this.getPostsProxyStubs.getpostsroute}`);
      axios
        .get(`${this.getProxy}${this.getPostsProxyStubs.getpostsroute}`)
        .then(doc => {
          this.posts = [...doc.data];
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
