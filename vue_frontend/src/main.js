import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
//import Home from "./components/Home.vue";
//import ListPosts from "./components/posts/ListPosts.vue";
//import AddPost from "./components/posts/AddPost.vue";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {mapActions} from 'vuex';
//
// max's video at:
// https://www.youtube.com/watch?v=ZYzAwFi5Xzo
//
Vue.config.productionTip = false;

Vue.use(VueRouter);
//
//https://webdevchallenges.com/use-protected-routes-in-vue-js/
//

const routes = [
  {
    path: "/",
    component: () => import("./components/pages/Home.vue")
  },
  {
    path: "/adduser",
    component: () => import("./components/users/AddUser.vue")
  },
  {
    path: "/adduserfailed/:message",
    component: () => import("./components/users/AddUserFailed.vue"),
    props: true
  },
  {
    path: "/login",
    component: () => import("./components/users/UserLogin.vue")
  },
  {
    path: "/loginfailed/:message",
    component: () => import("./components/users/LoginFailed.vue"),
    props: true
  },
  {
    path: "/logout/:username",
    component: () => import("./components/users/UserLogout.vue"),
    props: true
  },
  {
    path: "/posts",
    component: () => import("./components/posts/ListPosts.vue")
  },
  {
    path: "/singlepost/:id",
    component: () => import("./components/posts/SinglePost.vue"),
    props: true
  },
  {
    path: "/newpost",
    component: () => import("./components/posts/AddPost.vue")
  },
  {
    path: "/newpostfailed/:message",
    component: () => import("./components/posts/FailedPost.vue"),
    props: true
  },

  {
    path: "*",
    redirect: "/login"
  }
];

const router = new VueRouter({
  routes, //ES6 shortcut for routes: routes
  mode: "history" //tells server to always send routes to client, gets rid of # tag
});

new Vue({
  router,
  store,
  render: h => h(App),
  methods: {
    ...mapActions(["checkLocalStorageForLogin",'fetchPosts'])
  },
  created() {
    this.checkLocalStorageForLogin();
  }

}).$mount("#app");
