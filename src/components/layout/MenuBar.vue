<template>
  <div class="header">
    <h1>{{msg}}</h1>
    <ul>
      <li>
        <router-link class="rlink" to="/">Home</router-link>
      </li>
      <li>
        <router-link class="rlink" to="/posts">Posts</router-link>
      </li>
      <li>
        <router-link class="rlink" to="/newpost">New Post</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MenuBar",
  props: ["msg"]
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.header {
  line-height: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: auto;
  padding: 5px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: #bbbbbb;
}
ul {
  list-style-type: none;
}
li {
  display: inline-block;
  vertical-align: middle;
  padding: 5px;
  margin: 0 1px;
  border: 1px solid black;
  border-radius: 3px;
  background-color: aqua;
}
.rlink {
  text-decoration: none;
}
</style>
