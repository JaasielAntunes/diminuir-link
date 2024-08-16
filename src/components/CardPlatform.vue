<script setup lang="ts">
const props = defineProps<{
  icon: string
  name: string
  description: string
}>()
</script>

<template>
  <div
    class="group hidden h-[140px] w-[300px] grid-cols-[auto_1fr] items-center bg-slate-300 p-4 transition-all duration-300 hover:bg-secondary sm:grid"
  >
    <div v-if="icon" class="mr-5">
      <img :src="icon" alt="Ícone" class="group-hover:brightness-0 group-hover:invert" />
    </div>
    <div>
      <h3 class="text-left text-xl font-light leading-[24.2px] text-header group-hover:text-white">
        {{ name }}
      </h3>
      <p class="mt-2 text-sm font-light leading-[16.94px] text-darkness group-hover:text-white">
        {{ description }}
      </p>
    </div>
  </div>
</template>
