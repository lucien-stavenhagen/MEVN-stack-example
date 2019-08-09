<template>
  <div class="home">
    <h1>Homey Home</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: ["msg"]
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.home {
  width: 80%;
  margin: auto;
  padding: 10px;
  text-align: center;
  border: 1px solid black;
  border-radius: 4px;
  background-color: cadetblue;
}
</style>
