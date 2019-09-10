const state = {
  proxy: process.env.VUE_APP_HOST_NAME || "http://localhost:4001",
  tokenname: "accesstoken"
};

const getters = {
  getProxy: state => {
    return state.proxy;
  }
};
const mutations = {};
const actions = {};

const utilsModule = {
  state,
  getters,
  mutations,
  actions
};

export default utilsModule;
