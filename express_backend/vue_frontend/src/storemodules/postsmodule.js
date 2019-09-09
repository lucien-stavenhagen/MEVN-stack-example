
const state = {
  stubs: {
    getpostsroute: "/api/posts",
    newpostroute: "/api/posts/create",
    editpostroute: "/api/posts/edit",
    deletepostroute: "/api/posts/delete"
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
