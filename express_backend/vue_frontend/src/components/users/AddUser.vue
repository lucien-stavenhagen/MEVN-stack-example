<template>
  <div class="container">
    <div class="jumbotron text-center border border-primary">
      <h2>New User Account Page</h2>
      <router-link to="/login">
        <h5>login</h5>
      </router-link>
    </div>
    <form @submit.prevent="doNewUser" novalidate="true">
      <div class="form-group">
        <label for="exampleInputEmail1">Username ({{minlength}} or more characters):</label>
        <input
          v-model="newuser.username"
          type="text"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder
        />
        <b v-if="this.formerrors.nousername">{{this.formerrors.nousername}}</b>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password ({{minlength}} or more characters):</label>
        <input
          v-model="newuser.password"
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
    checkform() {
      //
      // a variation on vue documentation cookbook at
      // https://vuejs.org/v2/cookbook/form-validation.html
      //

      if (
        this.newuser.username.length >= this.minlength &&
        this.newuser.password.length >= this.minlength
      ) {
        return true;
      }
      this.formerrors.nousername = null;
      this.formerrors.nopassword = null;
      if (this.newuser.username.length < this.minlength) {
        this.formerrors.nousername = "Username too short";
      }
      if (this.newuser.password.length < this.minlength) {
        this.formerrors.nopassword = "Password too short";
      }
      return false;
    },
    doNewUser() {
      if (this.checkform()) {
        this.addNewUserToDB();
      }
    },
    addNewUserToDB() {
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
      minlength: 4,
      formerrors: {
        nousername: null,
        nopassword: null
      },
      newuser: {
        username: "",
        password: ""
      }
    };
  }
};
</script>

<style scoped>
b {
  color: red;
}
</style>