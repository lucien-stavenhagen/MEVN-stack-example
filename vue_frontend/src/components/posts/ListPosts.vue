<template>
  <div class="container">
    <div>
      <div v-bind:key="post._id" v-for="post in getAllPosts">
        <PostView v-bind:post="post"></PostView>
      </div>
    </div>
  </div>
</template>

<script>
import PostView from "./PostView.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ListPosts",
  components: {
    PostView
  },
  computed: {
    ...mapGetters(["getAllPosts", "getPostById"])
  },
  methods: {
    ...mapActions(["fetchPosts"])
  },
  created() {
    this.fetchPosts();
  }
};
</script>
<style scoped>
</style>
