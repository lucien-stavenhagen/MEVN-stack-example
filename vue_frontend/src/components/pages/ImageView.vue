<template>
  <div class="container">
    <div v-if="images.length > 0" class="gallery">
      <div v-bind:key="image.id" v-for="image in images">
        <div class="img-container">
          <img v-bind:src="image.path" />
        </div>
      </div>
    </div>
    <div class="card" v-else>
      <div class="card-body text-center">
        <p class="card-title">No images found on server.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ImageView",
  props: ["images"]
};
</script>
<style scoped>
.gallery {
  display: grid;
  grid-gap: 3px;
  justify-content: space-around;
  grid-template-columns: 1fr 1fr 1fr;
}
.img-container {
  border-radius: 2px;
  border: 3px solid rgba(0, 0, 0, 0.7);
}
.img-container:hover {
  cursor: pointer;
}
.gallery img {
  max-width: 100%;
  width: auto;
}
</style>