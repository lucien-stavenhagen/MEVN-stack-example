<template>
  <div>
    <div class="posts-container">
      <div v-bind:key="post._id" v-for="post in getAllPosts">
        <SinglePost v-bind:post="post"></SinglePost>
      </div>
    </div>
  </div>
</template>

<script>
import SinglePost from "./SinglePost";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ListPosts",
  components: {
    SinglePost
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
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.posts-container {
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 2px;
  border: 1px black solid;
  border-radius: 4px;
  background-color: cadetblue;
}
</style>
