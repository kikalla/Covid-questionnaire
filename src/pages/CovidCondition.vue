<template>
  <section class="px-48 pt-24">
    <page-header pageNumber="2/4"></page-header>
    <div class="flex justify-between">
      <div>
        <condition-form></condition-form>
      </div>
      <img
        src="@/assets/feever.png"
        alt="photo"
        class="relative bottom-left-12 left-12 z-0"
      />
    </div>
  </section>
</template>

<script setup>
import pageHeader from "@/components/PageHeader.vue";
import ConditionForm from "@/components/ConditionForm.vue";
</script>
