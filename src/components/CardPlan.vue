<script setup lang="ts">
defineProps({
  title: String,
  price: String,
  checkbox: String,
  options: Array<{ label: string; checked: boolean }>
})
</script>

<template>
  <div class="cursor-pointer rounded-2xl bg-white transition-all duration-300 hover:bg-slate-200">
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
        <img :src="option.checked ? checkbox : '/assets/unchecked.svg'" alt="Checkbox" />
        <span class="ml-2 text-base font-light leading-[19.36px]">{{ option.label }}</span>
      </div>
    </div>
  </div>
</template>
