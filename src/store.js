import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      first_name: "",
      last_name: "",
      email: "",
    };
  },
  mutations: {
    saveName(state, payload) {
      state.first_name = payload.value;
    },
    saveLastname(state, payload) {
      state.last_name = payload.value;
    },
    saveEmail(state, payload) {
      state.email = payload.value;
    },
  },
});

export default store;
