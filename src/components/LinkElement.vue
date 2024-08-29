<script lang="ts">
export default {
  props: {
    titulo: {
      type: String,
      required: true
    },
    links: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <div>
    <h2 class="mb-6 text-lg font-medium capitalize leading-[21.78px] text-white">
      {{ titulo }}
    </h2>
    <div class="space-y-4">
      <div v-for="(link, index) in links" :key="index">
        <a href="#" class="flex items-center space-x-2">
          <div class="size-1.5 bg-vector"></div>
          <span
            class="text-sm font-light leading-[16.94px] text-vector transition duration-300 hover:text-slate-300"
            >{{ link }}</span
          >
        </a>
      </div>
    </div>
  </div>
</template>
