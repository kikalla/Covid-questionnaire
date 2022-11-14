import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      hadCovid: "",
      hadAntibodyTest: null,
      antibodies: {
        testDate: "",
        number: "",
      },
      covidSicknessDate: "",
      hadVaccine: null,
      vaccinationStage: "",
      nonFormalMeetings: "",
      numberOfDaysFromOffice: null,
      whatAboutMeetingsInLive: "",
      tellUsYourOpinionAboutUs: "",
    };
  },
  mutations: {
    saveName(state, payload) {
      state.firstName = payload.value;
    },
    saveLastname(state, payload) {
      state.lastName = payload.value;
    },
    saveEmail(state, payload) {
      state.email = payload.value;
    },
    saveCovidStatus(state, payload) {
      state.hadCovid = payload.value;
    },
    saveAntibodyTest(state, payload) {
      state.hadAntibodyTest = payload.value;
    },
    saveAntibodies(state, payload) {
      state.antibodies.testDate = payload.date;
      state.antibodies.number = payload.number;
    },
    saveCovidDate(state, payload) {
      state.covidSicknessDate = payload.value;
    },
    saveVaccine(state, payload) {
      state.hadVaccine = payload.value;
    },
    saveVaccinationStage(state, payload) {
      state.vaccinationStage = payload.value;
    },
    saveMeeting(state, payload) {
      state.nonFormalMeetings = payload.value;
    },
    saveDays(state, payload) {
      state.numberOfDaysFromOffice = payload.value;
    },
    saveLiveMeeting(state, payload) {
      state.whatAboutMeetingsInLive = payload.value;
    },
    saveOpinion(state, payload) {
      state.tellUsYourOpinionAboutUs = payload.value;
    },
  },
});

export default store;
