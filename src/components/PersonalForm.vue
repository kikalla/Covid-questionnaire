<template>
  <Form @submit="savePersonalInformation">
    <div class="flex flex-col">
      <label for="name" class="font-bold mb-[15px] text-[22px]">სახელი</label>
      <Field
        v-model="name"
        name="name"
        type="text"
        class="bg-[#EAEAEA] border border-black h-[50px] p-[10px] outline-none w-[500px]"
        placeholder="სახელი"
        rules="required|min:3|alpha"
      />
      <ErrorMessage name="name" class="text-red-600 mt-[10px] ml-[10px]" />
    </div>
    <div class="flex flex-col">
      <label for="lastname" class="font-bold mb-[15px] mt-[45px] text-[22px]"
        >გვარი</label
      >
      <Field
        v-model="lastname"
        name="lastname"
        type="text"
        class="bg-[#EAEAEA] border border-black h-[50px] p-[10px] outline-none w-[500px]"
        placeholder="გვარი"
        rules="required|min:3|alpha"
      />
      <ErrorMessage name="lastname" class="text-red-600 mt-[10px] ml-[10px]" />
    </div>
    <div class="flex flex-col">
      <label for="email" class="font-bold mb-[15px] text-[22px] mt-[45px]"
        >მეილი</label
      >
      <Field
        v-model="email"
        name="email"
        type="text"
        class="bg-[#EAEAEA] border border-black h-[50px] p-[10px] outline-none w-[500px]"
        placeholder="მეილი"
        rules="required|redberry|email"
      />
      <ErrorMessage name="email" class="text-red-600 mt-[10px] ml-[10px]" />
    </div>
    <button type="submit" class="absolute top-[955px] left-[1018px]">
      <img src="/src/assets/arrow.svg" alt="" />
    </button>
  </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { useStore } from "vuex";
import { ref } from "vue";
import router from "../router";
import "../config/vee-validate/messages.js";
import "../config/vee-validate/rules.js";

const store = useStore();
const name = ref("");
const lastname = ref("");
const email = ref("");

function savePersonalInformation() {
  store.commit("saveName", { value: name });
  store.commit("saveLastname", { value: lastname });
  store.commit("saveEmail", { value: email });
  router.push({ path: "/covid-condition" });
}
</script>
