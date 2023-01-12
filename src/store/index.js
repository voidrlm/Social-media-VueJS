import Vue from "vue";
import Vuex from "vuex";
import { encrypt } from "../services/encryptDecrypt";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentUser: {},
    selectedUserFromNavbar: {},
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      return (state.currentUser = currentUser);
    },
    setUserFromNavbar(state, selectedUserFromNavbar) {
      return (state.selectedUserFromNavbar = selectedUserFromNavbar);
    },
  },
  actions: {
    setCurrentUser(context, currentUser) {
      window.$cookies.set("uauth", encrypt(currentUser));
      if (context.currentUser === currentUser) return;
      context.commit("setCurrentUser", currentUser);
    },
    setUserFromNavbar(context, selectedUserFromNavbar) {
      context.commit("setCurrentUser", selectedUserFromNavbar);
    },

    resetState() {
      // context.dispatch("setCurrentUser", {});
    },
  },
  getters: {
    selectedUserFromNavbar: (state) => state.selectedUserFromNavbar,
    currentUser: (state) => state.currentUser,
  },
});

export default store;
