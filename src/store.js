import Vue from "vue";
import Vuex from "vuex";
import postsModule from "./storemodules/postsmodule";
import usersModule from "./storemodules/usersmodule";
import utilsModule from "./storemodules/utilsmodule";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    postsModule,
    usersModule,
    utilsModule
  }
});

export default store;
