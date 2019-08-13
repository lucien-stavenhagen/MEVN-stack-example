import axios from "axios";

const state = {
  stubs: {
    getposts: "/api/posts",
    newpost: "/api/posts/create"
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
    return [state.posts.find(postid => postid.id === id)];
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
      .get(`${rootState.utilsModule.proxy}${state.stubs.getposts}`)
      .then(response => {
        commit("initPosts", response.data);
      })
      .catch(err => {
        commit("initPosts", [
          {
            id: 1,
            title: "uh oh",
            category: "oh damn",
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
