<template>
  <section class="px-48 pt-24">
    <page-header pageNumber="4/4"></page-header>
    <div class="flex justify-between">
      <div>
        <policy-form></policy-form>
      </div>
      <img
        src="@/assets/covidPolicy.png"
        alt="photo"
        class="absolute top-52 left-[59.375rem] z-0"
      />
    </div>
  </section>
</template>

<script setup>
import pageHeader from "@/components/PageHeader.vue";
import PolicyForm from "@/components/PolicyForm.vue";
</script>
