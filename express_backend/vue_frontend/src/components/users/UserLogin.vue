<template>
  <div class="container">
    <div class="jumbotron text-center border border-primary">
      <h2>User Login Page</h2>
      <router-link to="/adduser">
        <h5>Don't have an account?</h5>
      </router-link>
    </div>
    <form class="dologin" @submit.prevent="dologin" novalidate="true">
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
        <b v-if="this.formerrors.nousername">{{this.formerrors.nousername}}</b>
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
        <b v-if="this.formerrors.nopassword">{{this.formerrors.nopassword}}</b>
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
    checkForm() {
      //
      // a variation on vue documentation cookbook at
      // https://vuejs.org/v2/cookbook/form-validation.html
      //

      if (
        this.login.username.length >= this.minlength &&
        this.login.password.length >= this.minlength
      ) {
        return true;
      }
      this.formerrors.nousername = null;
      this.formerrors.nopassword = null;
      if (this.login.username.length < this.minlength) {
        this.formerrors.nousername = `Username must be at least ${this.minlength} characters`;
      }
      if (this.login.password.length < this.minlength) {
        this.formerrors.nopassword = `Password must be at least ${this.minlength} characters`;
      }
      return false;
    },
    dologin() {
      if (this.checkForm()) {
        this.nowDoLogin();
      }
    },
    nowDoLogin() {
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
      minlength: 4,
      formerrors: {
        nousername: null,
        nopassword: null
      },
      login: {
        username: "",
        password: ""
      }
    };
  }
};
</script>

<style scoped>
b {
  color: crimson;
}
</style>