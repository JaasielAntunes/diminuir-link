<script setup lang="ts">
defineProps({
  name: String
})
</script>

<template>
  <label class="flex items-center text-xl font-light leading-[24.2px]">
    <input type="checkbox" class="checkbox mr-2 cursor-pointer" />
    {{ name }}
  </label>
</template>
