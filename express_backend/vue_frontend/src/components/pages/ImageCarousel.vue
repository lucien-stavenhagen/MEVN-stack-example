<template>
  <div class="container">
    <div
      v-if="images.length > 0"
      id="carouselExampleControls"
      class="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            v-bind:src="images[0].path"
            class="rounded border border-dark d-block w-100"
            alt="..."
          />
        </div>
        <div
          class="carousel-item"
          v-bind:key="image.id"
          v-for="image in images.slice(1,images.length)"
        >
          <img v-bind:src="image.path" class="rounded border border-dark d-block w-100" alt="..." />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
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
  name: "ImageCarousel",
  props: ["images"]
};
</script>
<style scoped>
</style>