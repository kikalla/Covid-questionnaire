<template>
  <div>
    <p class="font-bold text-2xl mb-5 mt-12">
      ანტისხეულების ტესტი გაქვს გაკეთებული?
    </p>
    <div class="flex flex-col ml-8">
      <div>
        <input
          required
          v-model="antibodyTestValue"
          :value="true"
          type="radio"
          name="test"
          id="true"
          class="w-6 h-6 align-middle border"
        />
        <label for="true" class="font-normal text-xl ml-5">კი</label>
      </div>
      <div class="my-5">
        <input
          required
          v-model="antibodyTestValue"
          :value="false"
          type="radio"
          name="test"
          id="false"
          class="w-6 h-6 align-middle border"
        />
        <label for="false" class="font-normal text-xl ml-5">არა</label>
      </div>
    </div>
  </div>
  <div v-if="antibodyTestValue">
    <p class="font-bold text-2xl mb-5 mt-12">
      თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
      რაოდენობა
    </p>
    <div class="flex flex-col ml-8">
      <div>
        <label for="test-data"></label>
        <input
          v-model="antibodyTestDate"
          id="test-data"
          type="text"
          placeholder="რიცხვი"
          class="bg-[#EAEAEA] border border-black h-12 p-3 outline-none w-[500px]"
        />
      </div>
      <div class="my-5">
        <label for="number"></label>
        <input
          v-model="antibodyTestNumber"
          id="number"
          type="text"
          placeholder="ანტისხეულების რაოდენობა"
          class="bg-[#EAEAEA] border border-black h-12 p-3 outline-none w-[500px]"
        />
      </div>
    </div>
  </div>
  <div v-if="antibodyTestValue === false">
    <p class="font-bold text-xl mb-5 mt-12">
      მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19
    </p>
    <div class="flex flex-col ml-8">
      <div class="my-5">
        <label for="number"></label>
        <input
          required
          v-model="covidDate"
          id="number"
          type="date"
          placeholder="დდ/თთ/წწ"
          class="bg-[#EAEAEA] border border-black h-12 p-3 outline-none w-[500px]"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const emit = defineEmits([
  "sendTestValue",
  "sendTestDate",
  "sendTestNumber",
  "sendCovidDate",
]);
const antibodyTestValue = ref(null);
const antibodyTestDate = ref("");
const antibodyTestNumber = ref("");
const covidDate = ref("");

watch(antibodyTestValue, function sendAntibodyTest() {
  emit("sendTestValue", antibodyTestValue);
});
watch(antibodyTestDate, function sendAntibodyTest() {
  emit("sendTestDate", antibodyTestDate);
});
watch(antibodyTestNumber, function sendAntibodyTest() {
  emit("sendTestNumber", antibodyTestNumber);
});
watch(covidDate, function sendAntibodyTest() {
  emit("sendCovidDate", covidDate);
});
</script>
<style>
input[type="date"]::-webkit-inner-spin-button,
input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
  appearance: none;
}
</style>
