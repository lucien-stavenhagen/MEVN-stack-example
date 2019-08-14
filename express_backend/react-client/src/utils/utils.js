exports.proxyurl_api = "http://localhost:4001/api";
const auth_token_name = "token";
const getTokenFromLocal = () => {
  const auth_token = JSON.parse(localStorage.getItem(auth_token_name));
  const retval = {
    loggedin: false,
    token: null,
    username: null
  };
  if (auth_token !== null) {
    return {
      loggedin: true,
      token: auth_token.token,
      username: auth_token.username
    };
  } else {
    return retval;
  }
};
const saveAuthInfoToLocal = auth_data => {
  localStorage.setItem(auth_token_name, JSON.stringify(auth_data));
};

const clearAllAuthFromLocal = () => localStorage.clear();

exports.getTokenFromLocal = getTokenFromLocal;
exports.saveAuthInfoToLocal = saveAuthInfoToLocal;
exports.clearAllAuthFromLocal = clearAllAuthFromLocal;
