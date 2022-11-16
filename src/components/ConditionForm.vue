<template>
  <form @submit.prevent="saveCovidCondition">
    <had-covid @sendCovidValue="saveCovidValue"></had-covid>
    <antibody-test
      @sendTestValue="saveTestValue"
      @sendTestDate="saveTestDate"
      @sendTestNumber="saveTestNumber"
      @sendCovidDate="saveCovidDate"
      v-if="covid === 'yes'"
    ></antibody-test>
    <div
      @click="goBack"
      class="absolute top-[60rem] left-[55.5rem] z-10 cursor-pointer"
    >
      <img src="@/assets/backArrow.svg" alt="" />
    </div>
    <button
      type="submit"
      class="absolute top-[60rem] left-[63.6rem] z-10 cursor-pointer"
    >
      <img src="@/assets/arrow.svg" alt="" />
    </button>
  </form>
</template>

<script setup>
import HadCovid from "@/components/conditionFormComponents/HadCovid.vue";
import AntibodyTest from "@/components/conditionFormComponents/AntibodyTest.vue";
import { ref } from "vue";
import router from "@/router";
import { useStore } from "vuex";
import moment from "moment";

const store = useStore();

const covid = ref("");
const antibodyTestValue = ref(null);
const antibodyTestDate = ref("");
const antibodyTestNumber = ref("");
const covidDate = ref("");

function saveCovidValue(recivedCovid) {
  covid.value = recivedCovid.value;
  if (covid.value === "no" && "have_right_now") {
    antibodyTestValue.value = null;
    antibodyTestDate.value = "";
    antibodyTestNumber.value = "";
    covidDate.value = "";
  }
}
function saveTestValue(recivedTest) {
  antibodyTestValue.value = recivedTest.value;
  if (antibodyTestValue.value === true) {
    covidDate.value = "";
  } else {
    antibodyTestDate.value = "";
    antibodyTestNumber.value = "";
  }
}
function saveTestDate(recivedTestDate) {
  antibodyTestDate.value = recivedTestDate.value;
}
function saveTestNumber(recivedTestNumber) {
  antibodyTestNumber.value = recivedTestNumber.value;
}
function saveCovidDate(recivedCovidDate) {
  covidDate.value = recivedCovidDate.value;
}

function goBack() {
  router.push({ path: "/personal-information" });
}

function saveCovidCondition() {
  store.commit("saveCovidStatus", { value: covid });
  store.commit("saveAntibodyTest", { value: antibodyTestValue });
  store.commit("saveAntibodies", {
    date: antibodyTestDate,
    number: antibodyTestNumber,
  });
  store.commit("saveCovidDate", {
    value: moment(covidDate.value).format("DD/MM/YYYY"),
  });
  router.push({ path: "/vaccinate" });
}
</script>
