<template>
  <div class="container">
    <div class="jumbotron text-center mb-1 border border-primary">
      <h1>Image Gallery</h1>
    </div>
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
import { mapGetters } from "vuex";

export default {
  name: "ImageGallery",
  data() {
    return {
      images: []
    };
  },
  computed: {
    ...mapGetters(["getImagesProxyRoute", "getProxy"]),
    getImagesEndPoint() {
      return `${this.getProxy}${this.getImagesProxyRoute.getimagesroute}`;
    }
  },
  methods: {},
  created() {
    fetch(this.getImagesEndPoint)
      .then(res => res.json())
      .then(doc => (this.images = [...doc.images]))
      .catch();
  }
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
.gallery img {
  max-width: 100%;
  width: auto;
}
</style>