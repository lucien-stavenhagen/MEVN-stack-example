import axios from "axios";

const state = {
  proxy: "http://localhost:4001",
  getposts: "/api/posts",
  //proxy: "https://jsonplaceholder.typicode.com",
  //getposts: "/posts",
  posts: []
};
const getters = {
  getAllPosts: state => {
    return [...state.posts];
  },
  getPostById: state => id => {
    return [state.posts.find(postid => postid.id === id)];
  }
};
const mutations = {
  addPostMut: (state, newpost) => {
    state.posts = [...state.posts, newpost];
  },
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
  addPost: ({ commit }, newpost) => {
    commit("addPostMut", newpost);
  },
  fetchPosts({ commit }) {
    axios
      .get(`${state.proxy}${state.getposts}`)
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

const moduleA = {
  state,
  getters,
  mutations,
  actions
};

export default moduleA;
