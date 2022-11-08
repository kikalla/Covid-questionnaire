<template>
  <p class="font-bold text-[22px] mb-[20px]">გაქვს გადატანილი Covid-19?</p>
  <div class="flex flex-col ml-[30px]">
    <div>
      <input
        required
        v-model="covid"
        type="radio"
        name="covid"
        value="yes"
        id="yes"
        class="w-[25px] h-[25px] align-middle border"
      />
      <label for="yes" class="font-normal text-xl ml-[20px]">კი</label>
    </div>
    <div class="my-[20px]">
      <input
        required
        v-model="covid"
        type="radio"
        name="covid"
        value="no"
        id="no"
        class="w-[25px] h-[25px] align-middle"
      />
      <label for="no" class="font-normal text-xl ml-[20px]">არა</label>
    </div>
    <div>
      <input
        required
        v-model="covid"
        type="radio"
        name="covid"
        value="have_right_now"
        id="now"
        class="w-[25px] h-[25px] align-middle"
      />
      <label for="now" class="font-normal text-xl ml-[20px]">ახლა მაქვს</label>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const emit = defineEmits(["sendCovidValue"]);
const covid = ref("");

watch(covid, function sendCovidValue() {
  emit("sendCovidValue", covid);
});
</script>
