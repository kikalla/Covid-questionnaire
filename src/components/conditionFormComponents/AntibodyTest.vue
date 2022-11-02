<template>
  <div>
    <p class="font-bold text-[22px] mb-[20px] mt-[50px]">
      ანტისხეულების ტესტი გაქვს გაკეთებული?
    </p>
    <div class="flex flex-col ml-[30px]">
      <div>
        <input
          required
          v-model="antibodyTestValue"
          :value="true"
          type="radio"
          name="test"
          id="true"
          class="w-[25px] h-[25px] align-middle border"
        />
        <label for="true" class="font-normal text-xl ml-[20px]">კი</label>
      </div>
      <div class="my-[20px]">
        <input
          required
          v-model="antibodyTestValue"
          :value="false"
          type="radio"
          name="test"
          id="false"
          class="w-[25px] h-[25px] align-middle border"
        />
        <label for="false" class="font-normal text-xl ml-[20px]">არა</label>
      </div>
    </div>
  </div>
  <div v-if="antibodyTestValue">
    <p class="font-bold text-[22px] mb-[20px] mt-[50px]">
      თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების
      რაოდენობა
    </p>
    <div class="flex flex-col ml-[30px]">
      <div>
        <label for="test-data"></label>
        <input
          v-model="antibodyTestDate"
          id="test-data"
          type="text"
          placeholder="რიცხვი"
          class="bg-[#EAEAEA] border border-black h-[50px] p-[10px] outline-none w-[500px]"
        />
      </div>
      <div class="my-[20px]">
        <label for="number"></label>
        <input
          v-model="antibodyTestNumber"
          id="number"
          type="text"
          placeholder="ანტისხეულების რაოდენობა"
          class="bg-[#EAEAEA] border border-black h-[50px] p-[10px] outline-none w-[500px]"
        />
      </div>
    </div>
  </div>
  <div v-if="antibodyTestValue === false">
    <p class="font-bold text-[22px] mb-[20px] mt-[50px]">
      მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19
    </p>
    <div class="flex flex-col ml-[30px]">
      <div class="my-[20px]">
        <label for="number"></label>
        <input
          required
          v-model="covidDate"
          id="number"
          type="date"
          placeholder="დდ/თთ/წწ"
          class="bg-[#EAEAEA] border border-black h-[50px] p-[10px] outline-none w-[500px]"
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
