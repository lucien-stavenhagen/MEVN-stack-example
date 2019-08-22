<template>
  <div>
    <div class="container">
      <div class="jumbotron text-center mb-1 border border-primary">
        <h1>Image Gallery</h1>
      </div>
      <div class="container p-0 mb-1">
        <button
          v-if="!switchview.toggle"
          class="btn btn-primary"
          v-on:click="switchViews"
        >{{switchview.carousel}}</button>
        <button v-else class="btn btn-primary" v-on:click="switchViews">{{switchview.gridview}}</button>
      </div>
      <div v-if="this.$store.getters.isLoggedIn" class="container p-0 mb-1">
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
          <button class="btn btn-primary mt-1" type="submit">Upload</button>
        </form>
      </div>
      <div v-else class="container bg-light rounded border border-primary mb-1 align-middle">
        <p class="p-0 m-2">
          <router-link to="/login">Login here to manage gallery</router-link>
        </p>
      </div>
    </div>
    <ImageCarousel v-if="switchview.toggle" v-bind:images="images" />
    <ImageView v-else v-bind:images="images" v-on:delete-image="imgClicked($event)" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ImageView from "./ImageView";
import ImageCarousel from "./ImageCarousel";
export default {
  name: "ImageGallery",
  components: {
    ImageView,
    ImageCarousel
  },
  data() {
    return {
      images: [],
      newimage: {},
      switchview: {
        toggle: false,
        gridview: "Switch To Grid View",
        carousel: "Switch To Carousel View"
      }
    };
  },
  computed: {
    ...mapGetters(["getImagesProxyRoute", "getProxy", "getCredentials"]),
    getImagesEndPoint() {
      return `${this.getProxy}${this.getImagesProxyRoute.getimagesroute}`;
    },
    uploadEndPoint() {
      return `${this.getProxy}${this.getImagesProxyRoute.uploadroute}`;
    },
    deleteImageEndPoint() {
      return `${this.getProxy}${this.getImagesProxyRoute.deleteroute}`;
    },
    bearerToken() {
      return `Bearer ${this.getCredentials.accessToken}`;
    }
  },
  methods: {
    imgClicked(image) {
      if (confirm("Are you sure?")) {
        fetch(this.deleteImageEndPoint, {
          method: "POST",
          body: JSON.stringify({ filename: image.name }),
          headers: {
            "Content-Type": "application/json",
            authorization: this.bearerToken
          }
        })
          .then(res => res.json())
          .then(() => {
            this.utilityFetchImages();
          })
          .catch(err => console.log(err));
      }
    },
    switchViews() {
      this.switchview.toggle = !this.switchview.toggle;
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
        body: fd,
        headers: {
          authorization: this.bearerToken
        }
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