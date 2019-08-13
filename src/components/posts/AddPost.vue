<template>
  <div class="container">
    <form v-on:submit.prevent="submitPost">
      <div class="form-group">
        <label>Title:</label>
        <input v-model="post.title" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label>Author:</label>
        <input v-model="post.author" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label>Category:</label>
        <input v-model="post.category" type="text" class="form-control" />
      </div>
      <div class="form-group">
        <label>Post text:</label>
        <textarea v-model="post.posttext" type="text" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary">Submit Post</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "AddPost",
  computed: {
    ...mapGetters(["getCredentials", "getProxy", "getPostsProxyStubs"])
  },
  methods: {
    submitPost() {
      const proxy = `${this.getProxy}${this.getPostsProxyStubs.newpost}`;
      const bearer = `Bearer ${this.getCredentials.accessToken}`;
      console.log(proxy);
      console.log(bearer);
      axios
        .post(proxy, this.post, {
          headers: { authorization: bearer }
        })
        .then(doc => {
          this.$router.push("/posts");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  data() {
    return {
      post: {
        title: "",
        author: "",
        category: "",
        posttext: ""
      }
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      if (!vm.$store.getters.isLoggedIn) {
        next("/login");
      } else {
        next();
      }
    });
  }
};
</script>

<style scoped>
</style>
