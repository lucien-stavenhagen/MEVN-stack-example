<template>
  <div class="container">
    <div class="jumbotron text-center border border-primary mb-1">
      <h1>Edit Post</h1>
    </div>
    <form v-on:submit.prevent="editPostById" novalidate="true">
      <div class="form-group">
        <label>Title:</label>
        <input v-model="post.title" type="text" class="form-control" />
        <b v-if="this.formerrors.title">{{this.formerrors.title}}</b>
      </div>
      <div class="form-group">
        <label>Author:</label>
        <input v-model="post.author" type="text" class="form-control" />
        <b v-if="this.formerrors.author">{{this.formerrors.author}}</b>
      </div>
      <div class="form-group">
        <label>Category:</label>
        <input v-model="post.category" type="text" class="form-control" />
        <b v-if="this.formerrors.category">{{this.formerrors.category}}</b>
      </div>
      <div class="form-group">
        <label>Post text:</label>
        <editor
          :api-key="this.getTinyConfig.api_key"
          v-model="post.posttext"
          :init="this.getTinyConfig"
        ></editor>
        <b v-if="this.formerrors.posttext">{{this.formerrors.posttext}}</b>
      </div>
      <button type="submit" class="btn btn-primary">Submit Post</button>
    </form>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "EditPost",
  components: {
    editor: Editor
  },
  props: ["id"],
  computed: {
    ...mapGetters([
      "getProxy",
      "getPostsProxyStubs",
      "getCredentials",
      "getImagesProxyRoute",
      "getTinyConfig"
    ]),
    getPostByIdEndpoint() {
      return `${this.getProxy}${this.getPostsProxyStubs.getpostsroute}/${this.id}`;
    },
    editPostByIdEndpoint() {
      return `${this.getProxy}${this.getPostsProxyStubs.editpostroute}/${this.id}`;
    },
    getImagesEndPoint() {
      return `${this.getProxy}${this.getImagesProxyRoute.getimagesroute}`;
    },
    bearerToken() {
      return `Bearer ${this.getCredentials.accessToken}`;
    }
  },
  methods: {
    ...mapActions(["dispatchTinyImageMenu"]),
    editPostById() {
      if (this.checkForm()) {
        this.nowEditPostById();
      }
    },
    checkForm() {
      if (
        this.post.title.length > 0 &&
        this.post.author.length > 0 &&
        this.post.category.length > 0 &&
        this.post.posttext.length > 0
      ) {
        return true;
      }
      this.formerrors.title = null;
      this.formerrors.author = null;
      this.formerrors.category = null;
      this.formerrors.posttext = null;
      if (this.post.title.length === 0) {
        this.formerrors.title = "Title can't be empty";
      }
      if (this.post.author.length === 0) {
        this.formerrors.author = "Author can't be empty";
      }
      if (this.post.category.length === 0) {
        this.formerrors.category = "Category can't be empty";
      }
      if (this.post.posttext.length === 0) {
        this.formerrors.posttext = "Post text can't be empty";
      }
      return false;
    },
    nowEditPostById() {
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
    },
    setImage(event) {
      this.post.imagelink = event.target.value;
    }
  },
  created() {
    this.getPostById();
    fetch(this.getImagesEndPoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(images => {
        this.images = [...this.images, ...images.images];
        this.dispatchTinyImageMenu(images.images);
      })
      .catch(err => console.log(err));
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
      images: [],
      formerrors: {
        title: null,
        author: null,
        category: null,
        posttext: null
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
b {
  color: indianred;
}
</style>