<template>
  <div class="flex justify-between">
    <img src="/src/assets/redberryText.svg" alt="redberry" />
    <img :src="'/src/assets/' + image" alt="1/4" />
  </div>
  <div class="w-[100%] border-2 border-black mt-[20px] mb-[40px]"></div>
</template>

<script>
export default {
  props: ["image"],
};
</script>
