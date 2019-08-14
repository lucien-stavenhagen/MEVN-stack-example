<template>
  <div class="container">
    <form v-on:submit.prevent="editPostById">
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
  name: "EditPost",
  props: ["id"],
  computed: {
    ...mapGetters(["getProxy", "getPostsProxyStubs", "getCredentials"]),
    getPostByIdEndpoint() {
      return `${this.getProxy}${this.getPostsProxyStubs.getpostsroute}/${this.id}`;
    },
    editPostByIdEndpoint() {
      return `${this.getProxy}${this.getPostsProxyStubs.editpostroute}/${this.id}`;
    },
    bearerToken() {
      return `Bearer ${this.getCredentials.accessToken}`;
    }
  },
  methods: {
    editPostById() {
      axios
        .patch(
          this.editPostByIdEndpoint,
          { ...this.post },
          { headers: { authorization: this.bearerToken } }
        )
        .then(() => {
          this.$router.push("/posts");
        })
        .catch(err => {
          this.$router.push(`/newpostfailed/${err.message}`);
        });
    },
    getPostById() {
      axios
        .get(this.getPostByIdEndpoint)
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