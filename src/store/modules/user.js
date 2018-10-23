const state = {
  logged: false,
};

const getters = {
  // eslint-disable-next-line
  isLoggedIn: state => state.logged,
};

export default {
  namespaced: true,
  state,
  getters,
};
