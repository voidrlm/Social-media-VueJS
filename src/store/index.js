import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    selectedUserFromNavbar: {},
  },
  mutations: {
    setUserFromNavbar(state, selectedUserFromNavbar) {
      return (state.selectedUserFromNavbar = selectedUserFromNavbar);
    },
  },
  actions: {
    setUserFromNavbar(context, selectedUserFromNavbar) {
      context.commit("setUserFromNavbar", selectedUserFromNavbar);
    },
  },
  getters: {
    selectedUserFromNavbar: (state) => state.selectedUserFromNavbar,
  },
});

export default store;
