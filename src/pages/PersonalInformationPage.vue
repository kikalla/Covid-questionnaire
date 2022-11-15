<template>
  <section class="px-48 pt-24">
    <page-header pageNumber="1/4"></page-header>
    <div class="flex justify-between">
      <div>
        <personal-form></personal-form>
        <p class="text-[#626262] mt-24">
          *-ით მონიშნული ველების შევსება სავალდებულოა
        </p>
      </div>
      <img
        src="@/assets/personalInformation.png"
        alt="photo"
        class="relative bottom-28"
      />
    </div>
  </section>
</template>

<script setup>
import pageHeader from "@/components/PageHeader.vue";
import PersonalForm from "@/components/PersonalForm.vue";
</script>
