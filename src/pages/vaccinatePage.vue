<template>
  <section class="px-[200px] pt-[100px]">
    <page-header image="3-4.png"></page-header>
    <div class="flex justify-between">
      <div>
        <vaccinate-form></vaccinate-form>
      </div>
      <img
        src="../assets/vaccinate.png"
        alt="photo"
        class="relative bottom-[30px] left-[50px] z-0"
      />
    </div>
  </section>
</template>

<script setup>
import pageHeader from "../components/PageHeader.vue";
import VaccinateForm from "../components/VaccinateForm.vue";
</script>
