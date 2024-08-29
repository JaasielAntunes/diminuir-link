<script setup lang="ts">
import { usePlanData } from '@/composables/usePlanData'

import CardPlan from '../CardPlan.vue'

const { activeButton, toggleActive, cards } = usePlanData()
</script>

<template>
  <section id="plans" class="border-b-4 border-blue_dark bg-primary pt-2">
    <h1 class="my-5 text-center text-[26px] font-light uppercase leading-[31.47px] text-white">
      planos
    </h1>

    <div class="mt-7 flex items-center justify-center">
      <div class="rounded-[10px] bg-border">
        <button
          type="button"
          @click="toggleActive('anual')"
          :class="[
            activeButton === 'anual'
              ? 'bg-border_secondary text-white transition duration-200 hover:bg-sky-500'
              : 'bg-transparent text-low_white transition duration-200 hover:text-white',
            'rounded-[5px] px-3 py-1 text-lg font-medium leading-[21.78px]'
          ]"
        >
          Anual
        </button>
        <button
          type="button"
          @click="toggleActive('mensal')"
          :class="[
            activeButton === 'mensal'
              ? 'bg-border_secondary text-white transition duration-200 hover:bg-sky-500'
              : 'bg-transparent text-low_white transition duration-200 hover:text-white',
            'rounded-[5px] px-3 py-1 text-lg font-medium leading-[21.78px]'
          ]"
        >
          Mensal
        </button>
      </div>
    </div>

    <div class="container mx-auto mb-20 mt-10">
      <div class="grid grid-cols-1 gap-9 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        <CardPlan
          v-for="card in cards"
          :key="card.id"
          :title="card.title"
          :price="card.price"
          :checkbox="card.checkbox"
          :options="card.options"
        />
      </div>
    </div>
  </section>
</template>
