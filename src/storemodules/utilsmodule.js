const state = {
  proxy: "http://localhost:4001",
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
