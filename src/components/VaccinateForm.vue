<template>
  <form @submit.prevent="saveVaccineValues">
    <p class="font-bold text-2xl mb-5">უკვე აცრილი ხარ?</p>
    <div class="ml-7">
      <input
        required
        v-model="vaccinate"
        type="radio"
        name="vaccine"
        :value="true"
        id="yes"
        class="w-6 h-6 align-middle border"
      />
      <label for="yes" class="font-normal text-xl ml-5">კი</label>
    </div>
    <div class="my-5 ml-7">
      <input
        required
        v-model="vaccinate"
        type="radio"
        name="vaccine"
        :value="false"
        id="no"
        class="w-6 h-6 align-middle border"
      />
      <label for="no" class="font-normal text-xl ml-5">არა</label>
    </div>
    <already-vaccinated
      v-if="vaccinate"
      @sendVaccinateStage="saveVaccinateStage"
    ></already-vaccinated>
    <not-vaccinated
      v-if="vaccinate === false"
      @sendVaccinateStage="saveVaccinateStage"
    ></not-vaccinated>
    <div
      @click="goBack"
      class="absolute top-[955px] left-[890px] z-10 cursor-pointer"
    >
      <img src="@/assets/backArrow.svg" alt="" />
    </div>
    <button
      type="submit"
      class="absolute top-[955px] left-[1018px] z-10 cursor-pointer"
    >
      <img src="@/assets/arrow.svg" alt="" />
    </button>
  </form>
</template>

<script setup>
import AlreadyVaccinated from "@/components/vaccinateFormComponents/AlreadyVaccinated.vue";

import NotVaccinated from "@/components/vaccinateFormComponents/NotVaccinated.vue";

import { ref } from "vue";
import router from "@/router";
import { useStore } from "vuex";

const store = useStore();

const vaccinate = ref(null);
const vaccinateStage = ref("");

function saveVaccinateStage(recivedVaccinateStage) {
  vaccinateStage.value = recivedVaccinateStage.value;
}

function goBack() {
  router.push({ path: "/covid-condition" });
}

function saveVaccineValues() {
  store.commit("saveVaccine", { value: vaccinate });
  store.commit("saveVaccinationStage", { value: vaccinateStage });
  router.push({ path: "/covid-policy" });
}
</script>
