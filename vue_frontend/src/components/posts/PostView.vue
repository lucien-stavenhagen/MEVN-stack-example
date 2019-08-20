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
        <p class="card-text font-weight-light">
          <img v-if="post.imagelink !== 'null'" v-bind:src="post.imagelink" class="post-image" />
          {{post.posttext}}
        </p>
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostView",
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
