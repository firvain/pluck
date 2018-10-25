const state = {
  logged: false,
};

const getters = {
  // eslint-disable-next-line
  isLoggedIn: state => state.logged,
};
const mutations = {
  // eslint-disable-next-line
  setLoggedIn(state) { state.logged = true; },
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
