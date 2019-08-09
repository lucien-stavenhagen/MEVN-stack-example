import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Home from "./components/Home.vue";
import ListPosts from "./components/ListPosts.vue";
import AddPost from "./components/AddPost.vue";
import store from "./store";

//
// max's video at:
// https://www.youtube.com/watch?v=ZYzAwFi5Xzo
//
Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/posts",
    component: ListPosts
  },
  {
    path: "/newpost",
    component: AddPost
  }
];

const router = new VueRouter({
  routes, //shortcut for routes: routes
  mode: "history" //tells server to always send routes to client, gets rid of # tag
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
