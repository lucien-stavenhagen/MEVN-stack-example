<template>
  <div class="container">
    <div class="jumbotron text-center mb-1 border border-primary">
      <h1>Single Post View</h1>
      <p class="text-muted">(Click on post title to return to post index)</p>
    </div>
    <div v-bind:key="this.force_rerender_me" class="card bg-light text-dark">
      <div class="card-body">
        <router-link to="/posts">
          <h2 class="card-title">{{post.title}}</h2>
        </router-link>
        <p class="card-text font-weight-light">
          <span>
            <i>author:</i>
            {{post.author}}
          </span>
          <br />
          <span>
            <i>entered on:</i>
            {{post.date}}
          </span>
          <br />
          <span>
            <i>category:</i>
            {{post.category}}
          </span>
        </p>
        <hr />
        <editor
          :api-key="this.getTinyConfig.api_key"
          v-bind:initial-value="post.posttext"
          :init="{height: 800}"
          :disabled="true"
        ></editor>
      </div>
    </div>
    <button v-on:click="gotoEditPost" class="btn btn-primary">Edit</button>
    <button v-on:click="gotoDeletePost" class="btn btn-danger">Delete</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Editor from "@tinymce/tinymce-vue";
export default {
  name: "SinglePost",
  components: {
    editor: Editor
  },
  props: ["id"],
  computed: {
    ...mapGetters(["getProxy", "getPostsProxyStubs", "getTinyConfig"]),
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
          this.force_rerender_me++;
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
      post: {},
      force_rerender_me: 0
    };
  }
};
</script>

<style scoped>
.post-image {
  max-width: 60%;
  width: auto;
  margin-right: 5px;
  border-radius: 5px;
  border: 3px solid rgba(0, 0, 0, 0.7);
  float: left;
}
</style>
