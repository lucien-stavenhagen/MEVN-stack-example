<template>
  <div class="container">
    <div class="jumbotron text-center">
      <h2>New User Account Page</h2>
      <router-link to="/login">
        <h5>login</h5>
      </router-link>
    </div>
    <form @submit.prevent="doNewUser">
      <div class="form-group">
        <label for="exampleInputEmail1">Username:</label>
        <input
          v-model="newuser.username"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password:</label>
        <input
          v-model="newuser.password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "AddUser",
  computed: {
    ...mapGetters(["getProxy", "getUsersProxyStubs"]),
    getNewUserEndpoint() {
      return `${this.getProxy}${this.getUsersProxyStubs.newusersroute}`;
    }
  },
  methods: {
    doNewUser() {
      fetch(this.getNewUserEndpoint, {
        method: "POST",
        body: JSON.stringify(this.newuser),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(() => {
          this.$router.push("/login");
        })
        .catch(err => {
          this.$router.push(`/adduserfailed/${err.message}`);
        });
    }
  },
  data() {
    return {
      newuser: {
        username: "",
        password: ""
      }
    };
  }
};
</script>

<style scoped>
</style>