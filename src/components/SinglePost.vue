<template>
  <div class="container">
    <h1>title: {{post.title}}</h1>
    <h2>author: {{post.author}}</h2>
    <h3>category: {{post.category}}</h3>
    <h3>id: {{post._id}}</h3>
    <p>posttext: {{post.posttext}}</p>
  </div>
</template>

<script>
export default {
  name: "SinglePost",
  props: ["post"]
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.container {
  width: 95%;
  margin: 4px auto;
  padding: 5px;
  border: 1px black solid;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
