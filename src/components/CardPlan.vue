<script setup lang="ts">
defineProps({
  title: String,
  price: String,
  options: Array
})
</script>

<template>
  <div class="rounded-2xl bg-white transition-all duration-300 hover:bg-slate-200">
    <div
      class="rounded-t-2xl bg-secondary p-1 text-lg font-medium transition-all duration-300 hover:bg-blue_light"
    >
      <h3 class="my-2 text-center text-lg font-medium leading-[21.78px] text-white">
        {{ title }}
      </h3>
    </div>
    <div class="my-3 text-center text-2xl font-semibold text-secondary">
      {{ price }}
    </div>
    <div class="flex flex-col p-3">
      <div v-for="(option, index) in options" :key="index" class="mb-3 flex items-center">
        <input type="checkbox" class="size-5" />
        <span class="ml-1 text-base font-light leading-[19.36px]">{{ option }}</span>
      </div>
    </div>
  </div>
</template>
