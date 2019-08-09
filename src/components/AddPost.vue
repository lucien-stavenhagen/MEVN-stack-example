<template>
  <div class="container">
    <div class="form-container">
      <form action="#">
        <label>Title:</label>
        <input v-model="post.title" type="text" />
        <label>Author:</label>
        <input v-model="post.author" type="text" />
        <label>Category:</label>
        <input v-model="post.category" type="text" />
        <label>Post text:</label>
        <textarea v-model="post.posttext" type="text" />
        <button type="submit" v-on:click="submitPost">Submit Post</button>
      </form>
    </div>
  </div>
</template>

<script>
const uuidv4 = require("uuid/v4");

export default {
  methods: {
    submitPost() {
      this.$store.dispatch("addPost", this.post);
      this.$router.push("/posts");
    }
  },
  data() {
    return {
      post: {
        id: uuidv4(),
        title: "",
        author: "",
        category: "",
        posttext: ""
      }
    };
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.container {
  width: 80%;
  padding: 30px;
  margin: auto;
  display: flex;
  justify-content: center;
  border: 1px black solid;
  border-radius: 4px;
  background-color: burlywood;
}
.form-container {
  width: 60%;
  padding: 10px;
  border: 3px rgba(0, 0, 0, 0.2) solid;
  border-radius: 2px;
}
input,
textarea {
  display: block;
  border: 1px solid black;
  border-radius: 2px;
  padding: 5px;
}
</style>
