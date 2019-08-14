//
// from
// https://webdevchallenges.com/use-protected-routes-in-vue-js/
//
const state = {
  stubs: {
    loginroute: "/api/users/login",
    newusersroute: "/api/users/addnew"
  },
  credentials: {
    accessToken: null,
    loggedinUser: null
  },
  loggingIn: false,
  loginerror: null
};
const getters = {
  isLoggedIn: state => {
    return state.credentials.accessToken !== null;
  },
  getUsersProxyStubs: state => {
    return state.stubs;
  },
  getCredentials: state => {
    return state.credentials;
  }
};
const mutations = {
  loginStart: state => (state.loggingIn = true),
  loginStop: (state, errormsg) => {
    state.loggingIn = false;
    state.loginerror = errormsg;
  },
  updateCredentials: (state, credentials) => {
    state.credentials = {
      accessToken: credentials.token,
      loggedinUser: credentials.username
    };
  },
  logout: (state, tokenname) => {
    localStorage.removeItem(tokenname);
    state.credentials = {
      accessToken: null,
      loggedinUser: null
    };
  }
};
const actions = {
  doLogout({ commit, rootState }) {
    commit("logout", rootState.utilsModule.tokenname);
  },
  checkLocalStorageForLogin({ commit, rootState }) {
    const iftoken = localStorage.getItem(rootState.utilsModule.tokenname);
    if (iftoken) {
      const decoded = JSON.parse(iftoken);
      commit("updateCredentials", {
        token: decoded.token,
        username: decoded.username
      });
    }
  },
  //
  // https://scotch.io/tutorials/handling-authentication-in-vue-using-vuex
  // see implementation of login in his store
  //
  doLogin({ state, commit, rootState }, userData) {
    return new Promise((resolve, reject) => {
      commit("loginStart");
      fetch(`${rootState.utilsModule.proxy}${state.stubs.loginroute}`, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(doc => {
          localStorage.setItem(
            rootState.utilsModule.tokenname,
            JSON.stringify(doc)
          );
          commit("updateCredentials", {
            token: JSON.stringify(doc.token),
            username: userData.username
          });
          commit("loginStop", null);
          resolve(doc);
        })
        .catch(err => {
          commit("loginStop", err.message);
          reject(err);
        });
    });
  }
};

const usersModule = {
  state,
  getters,
  mutations,
  actions
};

export default usersModule;
