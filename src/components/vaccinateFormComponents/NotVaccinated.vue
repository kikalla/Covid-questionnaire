<template>
  <p class="font-bold text-[22px] mb-[20px] mt-[50px]">რას ელოდები?</p>
  <div class="flex flex-col ml-[30px]">
    <div>
      <input
        required
        v-model="vaccinateStage"
        type="radio"
        name="vaccinationStage"
        value="registered_and_waiting"
        id="waiting"
        class="w-[25px] h-[25px] align-middle border"
      />
      <label for="waiting" class="font-normal text-xl ml-[20px]"
        >დარეგისტრირებული ვარ და ველოდები რიცხვს</label
      >
    </div>
    <div class="my-[20px]">
      <input
        required
        v-model="vaccinateStage"
        type="radio"
        name="vaccinationStage"
        value="not_planning"
        id="notPlanning"
        class="w-[25px] h-[25px] align-middle"
      />
      <label for="notPlanning" class="font-normal text-xl ml-[20px]"
        >არ ვგეგმავ</label
      >
    </div>
    <div>
      <input
        required
        v-model="vaccinateStage"
        type="radio"
        name="vaccinationStage"
        value="planning_vaccination"
        id="planning"
        class="w-[25px] h-[25px] align-middle"
      />
      <label for="planning" class="font-normal text-xl ml-[20px]"
        >გადატანილი მაქვს და ვგეგმავ აცრას</label
      >
    </div>
    <div class="w-[500px] mt-[50px] ml-[25px] font-normal text-xl">
      <p v-if="vaccinateStage === 'planning_vaccination'">
        ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის
        გაკეთება.
      </p>
      <div class="mt-[20px]">
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
