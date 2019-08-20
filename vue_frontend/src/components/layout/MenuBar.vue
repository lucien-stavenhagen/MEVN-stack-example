<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <img class="navbar-brand" style="max-height:50px; max-width:50px" :src="icon" />
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li v-if="isLoggedIn" class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            data-toggle="dropdown"
          >Welcome {{this.getCredentials.loggedinUser}}</a>
          <div class="dropdown-menu">
            <a v-if="isLoggedIn" class="dropdown-item" href="#" v-on:click="myLogout">Logout</a>
          </div>
        </li>
        <li v-else class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/images">Gallery</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/posts">Posts</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="isLoggedIn" class="nav-link" to="/newpost">New Post</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import icon from "../../assets/logo.png";
export default {
  name: "MenuBar",
  computed: {
    ...mapGetters(["isLoggedIn", "getCredentials"])
  },
  methods: {
    myLogout() {
      this.$router.push(`/logout/${this.getCredentials.loggedinUser}`);
    }
  },
  data() {
    return {
      icon
    };
  }
};
</script>

<style scoped>
</style>
