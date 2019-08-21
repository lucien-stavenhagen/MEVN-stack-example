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
    <form v-on:submit.prevent="submitPost">
      <div class="form-group">
        <label for="exampleFormControlSelect2">Would you like an image?</label>
        <select class="form-control" id="exampleFormControlSelect2" v-on:change="setImage">
          <option selected value="None">None</option>
          <option
            v-bind:key="image.id"
            v-for="image in images"
            v-bind:value="image.path"
          >{{image.name}}</option>
        </select>
        <img v-if="post.imagelink !== 'None'" v-bind:src="post.imagelink" class="thumbnail-img" />
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
    ...mapGetters([
      "getCredentials",
      "getProxy",
      "getPostsProxyStubs",
      "getImagesProxyRoute"
    ]),
    newPostEndPoint() {
      return `${this.getProxy}${this.getPostsProxyStubs.newpostroute}`;
    },
    getImagesEndPoint() {
      return `${this.getProxy}${this.getImagesProxyRoute.getimagesroute}`;
    },
    bearerToken() {
      return `Bearer ${this.getCredentials.accessToken}`;
    }
  },
  methods: {
    submitPost() {
      fetch(this.newPostEndPoint, {
        method: "POST",
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
    setImage(event) {
      this.post.imagelink = event.target.value;
    }
  },
  data() {
    return {
      post: {
        title: "",
        author: "",
        category: "",
        posttext: "",
        imagelink: "None"
      },
      images: []
    };
  },
  created() {
    fetch(this.getImagesEndPoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(images => {
        this.images = [...this.images, ...images.images];
      })
      .catch(err => console.log(err));
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
.thumbnail-img {
  margin-top: 3px;
  max-width: 100%;
  border: 3px solid rgba(0, 0, 0, 0.7);
  border-radius: 2px;
  width: auto;
}
</style>
