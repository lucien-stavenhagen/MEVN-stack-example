<template>
  <div>
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
    </div>
    <ImageView v-bind:images="images" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ImageView from "./ImageView";

export default {
  name: "ImageGallery",
  components: {
    ImageView
  },
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
    imgClicked() {
      console.log("image clicked");
    },
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
</style>