<template>
  <form
    @submit.prevent="saveCovidPolicy"
    class="h-[850px] overflow-auto relative bottom-[40px] scrollbar-hide w-[600px]"
  >
    <div class="w-[600px] font-normal text-[22px] mt-[40px]">
      <p>
        რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
        რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა წლების
        განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი — ჩვენთან
        გადმოსვლის.
      </p>
      <p class="mt-[30px] w-[600px]">
        პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
        ყოველდღიური კომუნიკაციაც გაიშვიათდა.
      </p>
    </div>
    <p class="font-bold text-[22px] mb-[20px] mt-[45px] w-[600px]">
      რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც
      ყველა სურვილისამებრ ჩაერთვება
    </p>

    <div class="flex flex-col ml-[30px]">
      <div>
        <input
          required
          v-model="meeting"
          value="once_a_week"
          type="radio"
          name="meeting"
          id="once"
          class="w-[25px] h-[25px] align-middle border"
        />
        <label for="once" class="font-normal text-xl ml-[20px]"
          >კვირაში ერთხელ</label
        >
      </div>
      <div class="my-[20px]">
        <input
          required
          v-model="meeting"
          value="twice_a_week"
          type="radio"
          name="meeting"
          id="twice"
          class="w-[25px] h-[25px] align-middle border"
        />
        <label for="twice" class="font-normal text-xl ml-[20px]"
          >კვირაში ორჯერ</label
        >
      </div>
      <div class="mb-[20px]">
        <input
          required
          v-model="meeting"
          value="once_in_a_two_weeks"
          type="radio"
          name="meeting"
          id="threeTimes"
          class="w-[25px] h-[25px] align-middle border"
        />
        <label for="threeTimes" class="font-normal text-xl ml-[20px]"
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
          class="w-[25px] h-[25px] align-middle border"
        />
        <label for="month" class="font-normal text-xl ml-[20px]"
          >თვეში ერთხელ</label
        >
      </div>
    </div>

    <p class="font-bold text-[22px] mb-[20px] mt-[45px]">
      კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?
    </p>

    <div class="flex flex-col ml-[30px]">
      <div class="my-[20px]">
        <input
          required
          v-model="days"
          :value="0"
          type="radio"
          name="work"
          id="one"
          class="w-[25px] h-[25px] align-middle border"
        />
        <label for="one" class="font-normal text-xl ml-[20px]">0</label>
      </div>
      <div>
        <input
          required
          v-model="days"
          :value="1"
          type="radio"
          name="work"
          id="one"
          class="w-[25px] h-[25px] align-middle border"
        />
        <label for="one" class="font-normal text-xl ml-[20px]">1</label>
      </div>
      <div class="my-[20px]">
        <input
          required
          v-model="days"
          :value="2"
          type="radio"
          name="work"
          id="two"
          class="w-[25px] h-[25px] align-middle border"
        />
        <label for="two" class="font-normal text-xl ml-[20px]">2</label>
      </div>
      <div class="mb-[20px]">
        <input
          required
          v-model="days"
          :value="3"
          type="radio"
          name="work"
          id="three"
          class="w-[25px] h-[25px] align-middle border"
        />
        <label for="three" class="font-normal text-xl ml-[20px]">3</label>
      </div>
      <div>
        <input
          required
          v-model="days"
          :value="4"
          type="radio"
          name="work"
          id="four"
          class="w-[25px] h-[25px] align-middle border"
        />
        <label for="four" class="font-normal text-xl ml-[20px]">4</label>
      </div>
      <div class="mt-[20px]">
        <input
          required
          v-model="days"
          :value="5"
          type="radio"
          name="work"
          id="five"
          class="w-[25px] h-[25px] align-middle border"
        />
        <label for="five" class="font-normal text-xl ml-[20px]">5</label>
      </div>
    </div>

    <p class="font-bold text-[22px] mb-[20px] mt-[45px]">
      რას ფიქრობ ფიზიკურ შეკრებებზე?
    </p>
    <textarea
      v-model="physicalMeeting"
      class="w-[600px] h-[180px] bg-[#EAEAEA] border border-black p-[10px] outline-none"
      cols="30"
      rows="10"
    ></textarea>

    <p class="font-bold text-[22px] mt-[45px]">
      რას ფიქრობ რას ფიქრობ არსებულ გარემოზე:
    </p>
    <p class="font-bold text-[22px] mb-[20px]">
      რა მოგწონს, რას დაამატებდი, რას შეცვლიდი? შეკრებებზე?
    </p>
    <textarea
      v-model="change"
      class="w-[600px] h-[180px] bg-[#EAEAEA] border border-black p-[10px] outline-none"
      cols="30"
      rows="10"
    ></textarea>

    <button
      type="submit"
      class="p-[17px] bg-[#208298] text-white rounded-3xl mt-[20px] font-bold text-lg ml-[460px] hover:scale-[96%]"
    >
      დასრულება
    </button>
  </form>
  <div
    @click="goBack"
    class="absolute top-[955px] left-[890px] z-10 cursor-pointer"
  >
    <img src="/src/assets/backArrow.svg" alt="" />
  </div>
</template>

<script setup>
import router from "../router";
import { ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const meeting = ref(null);
const days = ref(null);
const physicalMeeting = ref("");
const change = ref("");

function sendApi() {
  fetch("https://covid19.devtest.ge/api/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: store.state.first_name,
      last_name: store.state.last_name,
      email: store.state.email,
      had_covid: store.state.had_covid,
      had_antibody_test: store.state.had_antibody_test,
      test_date: store.state.antibodies.test_date,
      number: store.state.antibodies.number,
      covid_sickness_date: store.state.covid_sickness_date,
      had_vaccine: store.state.had_vaccine,
      vaccination_stage: store.state.vaccination_stage,
      non_formal_meetings: store.state.non_formal_meetings,
      number_of_days_from_office: store.state.number_of_days_from_office,
      what_about_meetings_in_live: store.state.what_about_meetings_in_live,
      tell_us_your_opinion_about_us: store.state.tell_us_your_opinion_about_us,
    }),
  });
}

function saveCovidPolicy() {
  store.commit("saveMeeting", { value: meeting });
  store.commit("saveDays", { value: days });
  store.commit("saveLiveMeeting", { value: physicalMeeting });
  store.commit("saveOpinion", { value: change });
  sendApi();
  router.push({ path: "/thanks" });
}

function goBack() {
  router.push({ path: "/vaccinate" });
}
</script>
