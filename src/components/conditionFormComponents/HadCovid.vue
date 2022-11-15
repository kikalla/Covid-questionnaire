<template>
  <p class="font-bold text-2xl mb-5">გაქვს გადატანილი Covid-19?</p>
  <div class="flex flex-col ml-8">
    <div>
      <input
        required
        v-model="covid"
        type="radio"
        name="covid"
        value="yes"
        id="yes"
        class="w-6 h-6 align-middle border"
      />
      <label for="yes" class="font-normal text-xl ml-5">კი</label>
    </div>
    <div class="my-5">
      <input
        required
        v-model="covid"
        type="radio"
        name="covid"
        value="no"
        id="no"
        class="w-6 h-6 align-middle"
      />
      <label for="no" class="font-normal text-xl ml-5">არა</label>
    </div>
    <div>
      <input
        required
        v-model="covid"
        type="radio"
        name="covid"
        value="have_right_now"
        id="now"
        class="w-6 h-6 align-middle"
      />
      <label for="now" class="font-normal text-xl ml-5">ახლა მაქვს</label>
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
