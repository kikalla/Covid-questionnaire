import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      had_covid: "",
      had_antibody_test: null,
      antibodies: {
        test_date: "",
        number: "",
      },
      covid_date: "",
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
    saveCovidStatus(state, payload) {
      state.had_covid = payload.value;
    },
    saveAntibodyTest(state, payload) {
      state.had_antibody_test = payload.value;
    },
    saveAntibodies(state, payload) {
      state.antibodies.test_date = payload.date;
      state.antibodies.number = payload.number;
    },
    saveCovidDate(state, payload) {
      state.covid_date = payload.value;
    },
  },
});

export default store;
