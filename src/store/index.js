import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    selectedUserFromNavbar: {},
    currentUser: {
      name: "Guest",
      userId: "guest",
      icon: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light",
    },
  },
  mutations: {
    setUserFromNavbar(state, selectedUserFromNavbar) {
      return (state.selectedUserFromNavbar = selectedUserFromNavbar);
    },
    setCurrentUser(state, currentUser) {
      state.currentUser = currentUser;
    },
  },
  actions: {
    setUserFromNavbar(context, selectedUserFromNavbar) {
      context.commit("setUserFromNavbar", selectedUserFromNavbar);
    },
    setCurrentUser(context, currentUser) {
      context.commit("setCurrentUser", currentUser);
    },
  },
  getters: {
    selectedUserFromNavbar: (state) => state.selectedUserFromNavbar,
    currentUser: (state) => state.currentUser,
  },
});

export default store;
