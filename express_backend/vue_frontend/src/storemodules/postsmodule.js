const state = {
  stubs: {
    getpostsroute: "/api/posts",
    newpostroute: "/api/posts/create",
    editpostroute: "/api/posts/edit",
    deletepostroute: "/api/posts/delete"
  },
  tinyconfig: {
    api_key: "6eglrf0j0kw7retx71a85oklrxxhrp34vpaau6qiuhtac051",
    menubar: "file edit view insert format tools table help",
    plugins:
      "print preview fullpage paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons",
    toolbar:
      "undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | insertfile image media link anchor codesample",

    image_list: [],
    height: 800
  }
};
const getters = {
  getPostsProxyStubs: state => {
    return state.stubs;
  },
  getTinyConfig: state => {
    return state.tinyconfig;
  }
};
const mutations = {
  mutateTinyImageMenu: (state, images) => {
    images.forEach(image => {
      state.tinyconfig.image_list.push({
        title: image.name,
        value: image.path
      });
    });
  }
};
const actions = {
  dispatchTinyImageMenu({ commit }, images) {
    commit("mutateTinyImageMenu", images);
  }
};

const postsModule = {
  state,
  getters,
  mutations,
  actions
};

export default postsModule;
