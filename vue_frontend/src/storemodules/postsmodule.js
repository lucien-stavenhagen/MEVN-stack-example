import axios from "axios";

const state = {
  stubs: {
    getpostsroute: "/api/posts",
    newpostroute: "/api/posts/create"
  },
  //proxy: "https://jsonplaceholder.typicode.com",
  //getposts: "/posts",
  posts: []
};
const getters = {
  getPostsProxyStubs: state => {
    return state.stubs;
  },
  getAllPosts: state => {
    return [...state.posts];
  },
  getPostById: state => id => {
    return state.posts.find(postid => postid._id === id);
  }
};
const mutations = {
  initPosts: (state, postsFromDB) => {
    state.posts = [...postsFromDB];
  }
};
//
// deconstruct the context
// object param to extract commit
// method
//
const actions = {
  fetchPosts({ state, commit, rootState }) {
    axios
      .get(`${rootState.utilsModule.proxy}${state.stubs.getpostsroute}`)
      .then(response => {
        commit("initPosts", response.data);
      })
      .catch(err => {
        commit("initPosts", [
          {
            _id: "1",
            title: "Error post",
            author: "none",
            date: "none",
            category: "error",
            posttext: err
          }
        ]);
      });
  }
};

const postsModule = {
  state,
  getters,
  mutations,
  actions
};

export default postsModule;
