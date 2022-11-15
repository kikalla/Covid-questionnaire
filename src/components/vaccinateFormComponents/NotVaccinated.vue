<template>
  <p class="font-bold text-2xl mb-5 mt-12">რას ელოდები?</p>
  <div class="flex flex-col ml-8">
    <div>
      <input
        required
        v-model="vaccinateStage"
        type="radio"
        name="vaccinationStage"
        value="registered_and_waiting"
        id="waiting"
        class="w-6 h-6 align-middle border"
      />
      <label for="waiting" class="font-normal text-xl ml-5"
        >დარეგისტრირებული ვარ და ველოდები რიცხვს</label
      >
    </div>
    <div class="my-5">
      <input
        required
        v-model="vaccinateStage"
        type="radio"
        name="vaccinationStage"
        value="not_planning"
        id="notPlanning"
        class="w-6 h-6 align-middle"
      />
      <label for="notPlanning" class="font-normal text-xl ml-5"
        >არ ვგეგმავ</label
      >
    </div>
    <div>
      <input
        required
        v-model="vaccinateStage"
        type="radio"
        name="vaccinationStage"
        value="had_covid_and_planning_to_be_vaccinated"
        id="planning"
        class="w-6 h-6 align-middle"
      />
      <label for="planning" class="font-normal text-xl ml-5"
        >გადატანილი მაქვს და ვგეგმავ აცრას</label
      >
    </div>
    <div class="w-[31.25rem] mt-12 ml-6 font-normal text-xl">
      <p v-if="vaccinateStage === 'planning_vaccination'">
        ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის
        გაკეთება.
      </p>
      <div class="mt-5">
        <p v-if="vaccinateStage === 'planning_vaccination'">
          რეგისტრაციის ბმული
        </p>
        <a
          v-if="
            vaccinateStage && !vaccinateStage.includes('registered_and_waiting')
          "
          class="text-[#1289AE]"
          href="https://booking.moh.gov.ge/"
          >👉 https://booking.moh.gov.ge/
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const emit = defineEmits(["sendVaccinateStage"]);
const vaccinateStage = ref("");

watch(vaccinateStage, function sendVaccinateStage() {
  emit("sendVaccinateStage", vaccinateStage);
});
</script>
