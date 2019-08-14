<template>
  <div class="container">
    <form class="dologin" @submit.prevent="dologin">
      <div class="form-group">
        <label for="exampleInputEmail1">Username:</label>
        <input
          v-model="login.username"
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
          v-model="login.password"
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
export default {
  name: "UserLogin",
  computed: {},
  methods: {
    dologin: function() {
      this.$store
        .dispatch("doLogin", { ...this.login })
        .then(() => {
          this.$router.push("/posts");
        })
        .catch(err => {
          this.$router.push(`/loginfailed/${err.message}`);
        });
    }
  },
  data() {
    return {
      login: {
        username: "",
        password: ""
      }
    };
  }
};
</script>

<style scoped>
</style>