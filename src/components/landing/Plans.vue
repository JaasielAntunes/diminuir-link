<script setup lang="ts">
import { ref } from 'vue'

import CardPlan from '../CardPlan.vue'

const activeButton = ref('anual')

function toggleActive(button: any) {
  activeButton.value = button
}

const cards = ref([
  {
    id: 1,
    title: 'Grátis',
    price: 'R$ 0,00',
    options: [
      '10 links por mês',
      '2 QRCodes',
      'Cliques limitados',
      '7 dias de estatísticas',
      'Domínios exclusivos',
      'Remoção de anúncios'
    ]
  },
  {
    id: 2,
    title: 'Básico',
    price: 'R$ 27,00',
    options: [
      '100 links por mês',
      '20 QRCodes',
      'Cliques limitados',
      '30 dias de estatísticas',
      'Domínios exclusivos',
      'Remoção de anúncios'
    ]
  },
  {
    id: 3,
    title: 'Professional',
    price: 'R$ 98,00',
    options: [
      '500 links por mês',
      '30 QRCodes',
      'Cliques ilimitados',
      '6 meses de estatísticas',
      'Domínios exclusivos',
      'Remoção de anúncios'
    ]
  },
  {
    id: 4,
    title: 'Premium',
    price: 'R$ 673,00',
    options: [
      '3000 links por mês',
      '300 QRCodes',
      'Cliques ilimitados',
      '1 ano de estatísticas',
      'Domínios exclusivos',
      'Remoção de anúncios'
    ]
  }
])
</script>

<template>
  <div class="container border-b-4 border-blue_dark bg-primary pt-2">
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
              ? 'bg-border_secondary text-white hover:bg-blue_light'
              : 'bg-transparent text-low_white transition duration-300 hover:text-white',
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
              ? 'bg-border_secondary text-white hover:bg-blue_light'
              : 'bg-transparent text-low_white transition duration-300 hover:text-white',
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
          :options="card.options"
        />
      </div>
    </div>
  </div>
</template>
