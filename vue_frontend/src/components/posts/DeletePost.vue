<template>
  <div class="container">
    <div class="jumbotron text-center">
      <h1>Are You Sure?</h1>
      <button v-on:click="yesImSure" class="btn btn-danger m-1">Yes, Blow It Away</button>
      <button v-on:click="noImNotSure" class="btn btn-primary m-1">No, Go Back To Posts List</button>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "DeletePost",
  props: ["id"],
  computed: {
    ...mapGetters(["getProxy", "getPostsProxyStubs", "getCredentials"]),
    deletePostByIdEndpoint() {
      return `${this.getProxy}${this.getPostsProxyStubs.deletepostroute}/${this.id}`;
    },
    bearerToken() {
      return `Bearer ${this.getCredentials.accessToken}`;
    }
  },
  methods: {
    noImNotSure() {
      this.$router.push("/posts");
    },
    yesImSure() {
      axios
        .delete(this.deletePostByIdEndpoint, {
          headers: { authorization: this.bearerToken }
        })
        .then(() => {
          this.$router.push("/posts");
        })
        .catch(err => {
          this.$router.push(`/newpostfailed/${err.message}`);
        });
    }
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