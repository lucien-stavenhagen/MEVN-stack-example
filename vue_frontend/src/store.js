import Vue from "vue";
import Vuex from "vuex";
import postsModule from "./storemodules/postsmodule";
import usersModule from "./storemodules/usersmodule";
import utilsModule from "./storemodules/utilsmodule";
import imagesModule from "./storemodules/imagesmodule";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    postsModule,
    usersModule,
    imagesModule,
    utilsModule
  }
});

export default store;
