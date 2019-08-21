<template>
  <div class="container">
    <div class="jumbotron text-center mb-1 border border-primary">
      <h1>Image Gallery</h1>
    </div>
    <div class="container p-0 mb-1">
      <form enctype="multipart/form-data" v-on:submit.prevent="uploadImage">
        <div class="custom-file">
          <input
            type="file"
            class="custom-file-input"
            id="inputGroupFile01"
            aria-describedby="inputGroupFileAddon01"
            v-on:change="displayName"
          />
          <label id="image-label" class="custom-file-label" for="inputGroupFile01">Upload Image...</label>
        </div>
        <button class="btn btn-primary" type="submit">Upload</button>
      </form>
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
      images: [],
      newimage: {}
    };
  },
  computed: {
    ...mapGetters(["getImagesProxyRoute", "getProxy"]),
    getImagesEndPoint() {
      return `${this.getProxy}${this.getImagesProxyRoute.getimagesroute}`;
    },
    uploadEndPoint() {
      return `${this.getProxy}${this.getImagesProxyRoute.uploadroute}`;
    }
  },
  methods: {
    displayName(event) {
      this.newimage = event.target.files[0];
      const el = document.getElementById("image-label");
      el.innerHTML = event.target.files[0].name;
    },
    uploadImage() {
      console.log("upload called");
      console.log(this.newimage);
      const fd = new FormData();
      fd.set("newimage", this.newimage);
      fetch(this.uploadEndPoint, {
        method: "POST",
        body: fd
      })
        .then(res => res.json())
        .then(() => this.utilityFetchImages())
        .catch(err => console.log(err));
    },
    utilityFetchImages() {
      fetch(this.getImagesEndPoint)
        .then(res => res.json())
        .then(doc => (this.images = [...doc.images]))
        .catch();
    }
  },
  created() {
    this.utilityFetchImages();
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