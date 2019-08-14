import axios from "axios";

const state = {
  stubs: {
    getpostsroute: "/api/posts",
    newpostroute: "/api/posts/create"
  }
};
const getters = {
  getPostsProxyStubs: state => {
    return state.stubs;
  }
};
const mutations = {};
const actions = {};

const postsModule = {
  state,
  getters,
  mutations,
  actions
};

export default postsModule;
