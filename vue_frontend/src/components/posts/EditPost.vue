<template>
  <div class="container">
    <div class="jumbotron text-center border border-primary mb-1">
      <h1>Edit Post</h1>
    </div>
    <form v-on:submit.prevent="editPostById">
      <div class="form-group">
        <div v-if="post.imagelink !== 'null'" class="thumbnail-view">
          <label>Image:</label>
          <img v-bind:src="post.imagelink" />
        </div>
      </div>
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
      fetch(this.editPostByIdEndpoint, {
        method: "PATCH",
        body: JSON.stringify(this.post),
        headers: {
          "Content-Type": "application/json",
          authorization: this.bearerToken
        }
      })
        .then(res => res.json())
        .then(() => {
          this.$router.push("/posts");
        })
        .catch(err => {
          this.$router.push(`/newpostfailed/${err.message}`);
        });
    },
    getPostById() {
      fetch(this.getPostByIdEndpoint, {
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
            posttext: err,
            imagelink: "null"
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
.thumbnail-view {
  max-width: 100%;
  width: auto;
}
img {
  display: block;
  max-width: 100%;
  width: auto;
  border-radius: 2px;
  border: 3px solid rgba(0, 0, 0, 0.7);
}
</style>