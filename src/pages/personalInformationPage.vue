<template>
  <section class="px-[200px] pt-[100px]">
    <page-header image="1-4.png"></page-header>
    <div class="flex justify-between">
      <div>
        <personal-form></personal-form>
        <p class="text-[#626262] mt-[100px]">
          *-ით მონიშნული ველების შევსება სავალდებულოა
        </p>
      </div>
      <img
        src="../assets/personalInformation.png"
        alt="photo"
        class="relative bottom-[110px]"
      />
    </div>
  </section>
</template>

<script setup>
import pageHeader from "../components/PageHeader.vue";
import PersonalForm from "../components/PersonalForm.vue";
</script>
