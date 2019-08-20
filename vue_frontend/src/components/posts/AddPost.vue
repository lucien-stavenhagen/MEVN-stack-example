<template>
  <div class="container">
    <div class="jumbotron border border-primary mb-1">
      <h1 class="text-center">Add New Post</h1>
      <router-link to="/posts">
        <h5 class="text-center">Back to blog</h5>
      </router-link>
      <router-link to="/">
        <h5 class="text-center">Home</h5>
      </router-link>
    </div>
    <form enctype="multipart/form-data" v-on:submit.prevent="submitPost">
      <div class="form-group">
        <label>Image:</label>
        <div class="custom-file">
          <label id="homey-label" class="custom-file-label" for="post-image">Choose Image File...</label>
          <input
            type="file"
            class="custom-file-input"
            name="filename"
            id="post-image"
            v-on:change="previewFile"
          />
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
  name: "AddPost",
  computed: {
    ...mapGetters(["getCredentials", "getProxy", "getPostsProxyStubs"]),
    newPostEndPoint() {
      return `${this.getProxy}${this.getPostsProxyStubs.newpostroute}`;
    },
    bearerToken() {
      return `Bearer ${this.getCredentials.accessToken}`;
    }
  },
  methods: {
    submitPost() {
      const fd = new FormData();
      fd.append("postimage", this.post.postimage);
      fd.append("title", this.post.title);
      fd.append("author", this.post.author);
      fd.append("category", this.post.category);
      fd.append("posttext", this.post.posttext);
      fetch(this.newPostEndPoint, {
        method: "POST",
        body: fd,
        headers: {
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
    previewFile(event) {
      this.post.postimage = event.target.files[0];
      const info = document.getElementById("homey-label");
      info.innerHTML = this.post.postimage.name;
    }
  },
  data() {
    return {
      post: {
        title: "",
        author: "",
        category: "",
        posttext: "",
        postimage: "null",
        imagelink: "null"
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
