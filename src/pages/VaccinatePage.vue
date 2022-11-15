<template>
  <section class="px-48 pt-24">
    <page-header pageNumber="3/4"></page-header>
    <div class="flex justify-between">
      <div>
        <vaccinate-form></vaccinate-form>
      </div>
      <img
        src="@/assets/vaccinate.png"
        alt="photo"
        class="relative bottom-7 left-12 z-0"
      />
    </div>
  </section>
</template>

<script setup>
import pageHeader from "@/components/PageHeader.vue";
import VaccinateForm from "@/components/VaccinateForm.vue";
</script>
