const state = {
  stubs: {
    getimagesroute: "/api/images/getall",
    uploadroute: "/api/images/upload",
    deleteroute: "/api/images/delete"
  }
};
const getters = {
  getImagesProxyRoute: state => {
    return state.stubs;
  }
};
const mutations = {};
const actions = {};
const imagesModule = {
  state,
  getters,
  mutations,
  actions
};

export default imagesModule;
