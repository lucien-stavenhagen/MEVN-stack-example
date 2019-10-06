<template>
  <div class="card bg-light text-dark">
    <div class="card-body">
      <a href="#" v-on:click="viewSingle(post._id)">
        <h5 class="card-title">{{post.title}}</h5>
      </a>
      <small>
        <p class="card-text font-weight-light">
          <span>
            <i>id (debug):</i>
            {{post._id}}
          </span>
          <br />
          <span>
            <i>author:</i>
            {{post.author}}
          </span>
          <br />
          <span>
            <i>entered on:</i>
            {{post.date}}
          </span>
          <br />
          <span>
            <i>category:</i>
            {{post.category}}
          </span>
        </p>
        <hr />
        <editor
          :api-key="this.getTinyConfig.api_key"
          v-bind:initial-value="post.posttext"
          :init="{height: 400}"
          :disabled="true"
        ></editor>
      </small>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "PostView",
  components: {
    editor: Editor
  },
  computed: {
    ...mapGetters(["getTinyConfig"])
  },
  props: ["post"],
  methods: {
    viewSingle(id) {
      this.$router.push(`/singlepost/${id}`);
    }
  }
};
</script>

<style scoped>
.post-image {
  max-width: 60%;
  width: auto;
  margin-right: 5px;
  border-radius: 5px;
  border: 3px solid rgba(0, 0, 0, 0.7);
  float: left;
}
</style>
