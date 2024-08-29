<script setup lang="ts">
const props = defineProps<{
  icon: string
  total: string
  title: string
}>()
</script>

<template>
  <div class="hidden cursor-default text-center md:mb-14 md:block lg:mb-0">
    <img v-if="icon" :src="icon" alt="Ícone URL" class="mx-auto mb-3 size-12" />
    <p class="text-4xl font-normal leading-[45.99px] text-secondary">
      {{ total }}
    </p>
    <p class="text-base font-light leading-[29.05px] text-darkness sm:text-2xl">
      {{ title }}
    </p>
  </div>
</template>
