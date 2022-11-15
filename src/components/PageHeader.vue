<template>
  <div class="flex justify-between">
    <img src="@/assets/redberryText.svg" alt="redberry" />
    <div class="font-bold text-3xl">{{ pageNumber }}</div>
  </div>
  <div class="w-full border-2 border-black mt-5 mb-10"></div>
</template>

<script>
export default {
  props: {
    pageNumber: {
      type: String,
      required: true,
    },
  },
};
</script>
