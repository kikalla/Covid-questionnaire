<template>
  <p class="font-bold text-2xl mb-5 mt-12">აირჩიე რა ეტაპზე ხარ*</p>
  <div class="flex flex-col ml-8">
    <div>
      <input
        required
        v-model="vaccinateStage"
        type="radio"
        name="vaccinationStage"
        value="first_dosage_and_registered_on_the_second"
        id="firstRegistered"
        class="w-6 h-6 align-middle border"
      />
      <label for="firstRegistered" class="font-normal text-xl ml-5"
        >პირველი დოზა და დარეგისტრირებული ვარ მეორეზე</label
      >
    </div>
    <div class="my-5">
      <input
        required
        v-model="vaccinateStage"
        type="radio"
        name="vaccinationStage"
        value="fully_vaccinated"
        id="fullyVaccinated"
        class="w-6 h-6 align-middle"
      />
      <label for="fullyVaccinated" class="font-normal text-xl ml-5"
        >სრულად აცრილი ვარ</label
      >
    </div>
    <div>
      <input
        required
        v-model="vaccinateStage"
        type="radio"
        name="vaccinationStage"
        value="first_dosage_and_not_registered_yet"
        id="firstNotRegistered"
        class="w-6 h-6 align-middle"
      />
      <label for="firstNotRegistered" class="font-normal text-xl ml-5"
        >პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე</label
      >
    </div>
    <div
      v-if="vaccinateStage === 'first_dosage_and_not_registered_on_the_second'"
      class="w-[8 mt-12 ml-6 font-normal text-xl"
    >
      <p>რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი</p>
      <a class="text-[#1289AE]" href="https://booking.moh.gov.ge/"
        >https://booking.moh.gov.ge/
      </a>
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
