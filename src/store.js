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
      covid_sickness_date: "",
      had_vaccine: null,
      vaccination_stage: "",
      non_formal_meetings: "",
      number_of_days_from_office: null,
      what_about_meetings_in_live: "",
      tell_us_your_opinion_about_us: "",
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
      state.covid_sickness_date = payload.value;
    },
    saveVaccine(state, payload) {
      state.had_vaccine = payload.value;
    },
    saveVaccinationStage(state, payload) {
      state.vaccination_stage = payload.value;
    },
    saveMeeting(state, payload) {
      state.non_formal_meetings = payload.value;
    },
    saveDays(state, payload) {
      state.number_of_days_from_office = payload.value;
    },
    saveLiveMeeting(state, payload) {
      state.what_about_meetings_in_live = payload.value;
    },
    saveOpinion(state, payload) {
      state.tell_us_your_opinion_about_us = payload.value;
    },
  },
});

export default store;
