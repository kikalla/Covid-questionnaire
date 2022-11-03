<template>
  <section class="px-[200px] pt-[100px]">
    <page-header image="4-4.png"></page-header>
    <div class="flex justify-between">
      <div>
        <policy-form></policy-form>
      </div>
      <img
        src="../assets/covidPolicy.png"
        alt="photo"
        class="absolute top-[210px] left-[950px] z-0"
      />
    </div>
  </section>
</template>

<script setup>
import pageHeader from "../components/PageHeader.vue";
import PolicyForm from "../components/PolicyForm.vue";
</script>
