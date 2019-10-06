<template>
  <div class="container">
    <div v-if="images.length > 0" class="gallery">
      <div v-bind:key="image.id" v-for="image in images">
        <img class="img-thumbnail" v-bind:src="image.path" />
        <button
          v-if="$store.getters.isLoggedIn"
          class="btn btn-outline-danger btn-sm"
          v-on:click="$emit('delete-image',image)"
        >Delete</button>
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
  props: ["images"],
  computed: {},
  methods: {}
};
</script>
<style scoped>
.gallery {
  display: grid;
  justify-content: space-around;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

@media screen and (max-width: 1200px) {
  .gallery {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (max-width: 768px) {
  .gallery {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 576px) {
  .gallery {
    grid-template-columns: 1fr;
  }
}
</style>