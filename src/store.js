import Vue from "vue";
import Vuex from "vuex";
import moduleA from "./storemodules/modulea";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    moduleA
  }
});

export default store;
