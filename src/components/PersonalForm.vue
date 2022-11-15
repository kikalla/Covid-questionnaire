<template>
  <Form @submit="savePersonalInformation">
    <div class="flex flex-col">
      <label for="name" class="font-bold mb-4 text-2xl">სახელი</label>
      <Field
        v-model="name"
        name="name"
        type="text"
        class="bg-[#EAEAEA] border border-black h-12 p-3 outline-none w-[31.25rem]"
        placeholder="სახელი"
        rules="required|min:3|alpha"
      />
      <ErrorMessage name="name" class="text-red-600 mt-3 ml-3" />
    </div>
    <div class="flex flex-col">
      <label for="lastname" class="font-bold mb-4 mt-11 text-2xl">გვარი</label>
      <Field
        v-model="lastname"
        name="lastname"
        type="text"
        class="bg-[#EAEAEA] border border-black h-12 p-3 outline-none w-[31.25rem]"
        placeholder="გვარი"
        rules="required|min:3|alpha"
      />
      <ErrorMessage name="lastname" class="text-red-600 mt-3 ml-3" />
    </div>
    <div class="flex flex-col">
      <label for="email" class="font-bold mb-4 text-2xl mt-11">მეილი</label>
      <Field
        v-model="email"
        name="email"
        type="text"
        class="bg-[#EAEAEA] border border-black h-12 p-3 outline-none w-[31.25rem]"
        placeholder="მეილი"
        rules="required|redberry|email"
      />
      <ErrorMessage name="email" class="text-red-600 mt-3 ml-3" />
    </div>
    <button type="submit" class="absolute top-[59.75rem] left-[63.6rem]">
      <img src="@/assets/arrow.svg" alt="" />
    </button>
  </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import { useStore } from "vuex";
import { ref } from "vue";
import router from "@/router";
import "@/config/vee-validate/messages.js";
import "@/config/vee-validate/rules.js";

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
