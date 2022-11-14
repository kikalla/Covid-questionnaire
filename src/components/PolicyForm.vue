<template>
  <form
    @submit.prevent="saveCovidPolicy"
    class="h-[850px] overflow-auto relative bottom-10 scrollbar-hide w-[600px]"
  >
    <div class="w-[600px] font-normal text-2xl mt-10">
      <p>
        რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
        რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
        განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი — ჩვენთან
        გადმოსვლის.
      </p>
      <p class="mt-8 w-[600px]">
        პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
        ყოველდღიური კომუნიკაციაც გაიშვიათდა.
      </p>
    </div>
    <p class="font-bold text-2xl mb-5 mt-11 w-[600px]">
      რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც
      ყველა სურვილისამებრ ჩაერთვება
    </p>

    <div class="flex flex-col ml-mt-8">
      <div>
        <input
          required
          v-model="meeting"
          value="once_a_week"
          type="radio"
          name="meeting"
          id="once"
          class="w-6 h-6 align-middle border"
        />
        <label for="once" class="font-normal text-xl ml-5"
          >კვირაში ერთხელ</label
        >
      </div>
      <div class="my-5">
        <input
          required
          v-model="meeting"
          value="twice_a_week"
          type="radio"
          name="meeting"
          id="twice"
          class="w-6 h-6 align-middle border"
        />
        <label for="twice" class="font-normal text-xl ml-5"
          >კვირაში ორჯერ</label
        >
      </div>
      <div class="mb-5">
        <input
          required
          v-model="meeting"
          value="once_in_a_two_weeks"
          type="radio"
          name="meeting"
          id="threeTimes"
          class="w-6 h-6 align-middle border"
        />
        <label for="threeTimes" class="font-normal text-xl ml-5"
          >ორ კვირაში ერთხელ</label
        >
      </div>
      <div>
        <input
          required
          v-model="meeting"
          value="once_in_a_month"
          type="radio"
          name="meeting"
          id="month"
          class="w-6 h-6 align-middle border"
        />
        <label for="month" class="font-normal text-xl ml-5">თვეში ერთხელ</label>
      </div>
    </div>

    <p class="font-bold text-2xl mb-5 mt-11">
      კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?
    </p>

    <div class="flex flex-col ml-mt-8">
      <div class="my-5">
        <input
          required
          v-model="days"
          :value="0"
          type="radio"
          name="work"
          id="one"
          class="w-6 h-6 align-middle border"
        />
        <label for="one" class="font-normal text-xl ml-5">0</label>
      </div>
      <div>
        <input
          required
          v-model="days"
          :value="1"
          type="radio"
          name="work"
          id="one"
          class="w-6 h-6 align-middle border"
        />
        <label for="one" class="font-normal text-xl ml-5">1</label>
      </div>
      <div class="my-5">
        <input
          required
          v-model="days"
          :value="2"
          type="radio"
          name="work"
          id="two"
          class="w-6 h-6 align-middle border"
        />
        <label for="two" class="font-normal text-xl ml-5">2</label>
      </div>
      <div class="mb-5">
        <input
          required
          v-model="days"
          :value="3"
          type="radio"
          name="work"
          id="three"
          class="w-6 h-6 align-middle border"
        />
        <label for="three" class="font-normal text-xl ml-5">3</label>
      </div>
      <div>
        <input
          required
          v-model="days"
          :value="4"
          type="radio"
          name="work"
          id="four"
          class="w-6 h-6 align-middle border"
        />
        <label for="four" class="font-normal text-xl ml-5">4</label>
      </div>
      <div class="mt-5">
        <input
          required
          v-model="days"
          :value="5"
          type="radio"
          name="work"
          id="five"
          class="w-6 h-6 align-middle border"
        />
        <label for="five" class="font-normal text-xl ml-5">5</label>
      </div>
    </div>

    <p class="font-bold text-2xl mb-5 mt-11">რას ფიქრობ ფიზიკურ შეკრებებზე?</p>
    <textarea
      v-model="physicalMeeting"
      class="w-[600px] h-[180px] bg-[#EAEAEA] border border-black p-3 outline-none"
      cols="30"
      rows="10"
    ></textarea>

    <p class="font-bold text-2xl mt-11">
      რას ფიქრობ რას ფიქრობ არსებულ გარემოზე:
    </p>
    <p class="font-bold text-2xl mb-5">
      რა მოგწონს, რას დაამატებდი, რას შეცვლიდი? შეკრებებზე?
    </p>
    <textarea
      v-model="change"
      class="w-[600px] h-[180px] bg-[#EAEAEA] border border-black p-3 outline-none"
      cols="30"
      rows="10"
    ></textarea>

    <button
      type="submit"
      class="p-4 bg-[#208298] text-white rounded-3xl mt-5 font-bold text-lg ml-[460px] hover:scale-[96%]"
    >
      დასრულება
    </button>
  </form>
  <div
    @click="goBack"
    class="absolute top-[955px] left-[890px] z-10 cursor-pointer"
  >
    <img src="@/assets/backArrow.svg" alt="" />
  </div>
</template>

<script setup>
import axios from "axios";
import router from "@/router";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const meeting = ref(null);
const days = ref(null);
const physicalMeeting = ref("");
const change = ref("");

function sendApi() {
  const data = {
    first_name: store.state.firstName,
    last_name: store.state.lastName,
    email: store.state.email,
    had_covid: store.state.hadCovid,
  };
  if (store.state.hadAntibodyTest !== null) {
    data["had_antibody_test"] = store.state.hadAntibodyTest;
  }
  if (store.state.tellUsYourOpinionAboutUs !== "") {
    data["tell_us_your_opinion_about_us"] =
      store.state.tellUsYourOpinionAboutUs;
  }

  if (store.state.antibodies.testDate !== "") {
    data["antibodies.test_date"] = store.state.antibodies.testDate;
  }
  if (store.state.antibodies.number !== "") {
    data["antibodies.number"] = store.state.antibodies.number;
  }

  if (store.state.covidSicknessDate !== "") {
    data["covid_sickness_date"] = store.state.covidSicknessDate;
  }
  if (store.state.hadVaccine !== null) {
    data["had_vaccine"] = store.state.hadVaccine;
  }
  if (store.state.vaccinationStage !== "") {
    data["vaccination_stage"] = store.state.vaccinationStage;
  }
  if (store.state.nonFormalMeetings !== "") {
    data["non_formal_meetings"] = store.state.nonFormalMeetings;
  }

  if (store.state.numberOfDaysFromOffice !== null) {
    data["number_of_days_from_office"] = store.state.numberOfDaysFromOffice;
  }
  if (store.state.whatAboutMeetingsInLive !== "") {
    data["what_about_meetings_in_live"] = store.state.whatAboutMeetingsInLive;
  }
  if (store.state.tellUsYourOpinionAboutUs !== "") {
    data["tell_us_your_opinion_about_us"] =
      store.state.tellUsYourOpinionAboutUs;
  }

  axios
    .post("https://covid19.devtest.ge/api/create", data)
    .then(function () {
      router.push({ path: "/thanks" });
    })
    .catch(function () {
      console.log("error");
    });
}

function saveCovidPolicy() {
  store.commit("saveMeeting", { value: meeting });
  store.commit("saveDays", { value: days });
  store.commit("saveLiveMeeting", { value: physicalMeeting });
  store.commit("saveOpinion", { value: change });
  sendApi();
}

function goBack() {
  router.push({ path: "/vaccinate" });
}
</script>
