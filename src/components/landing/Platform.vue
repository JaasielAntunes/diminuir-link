<script setup lang="ts">
import CardPlatform from '@/components/CardPlatform.vue'

import Statistics from '../Statistics.vue'
</script>

<template>
  <div class="container relative h-[140px] bg-primary">
    <span
      class="flex justify-center pt-6 text-[26px] font-light uppercase leading-[31.47px] text-white"
    >
      plataforma
    </span>
  </div>

  <div class="container relative">
    <div class="absolute inset-x-0 -top-16 flex flex-wrap justify-center">
      <CardPlatform
        icon="/assets/autoescalavel.svg"
        name="Autoescalável"
        description="Infraestrutura Cloud 100% autoescalável, em AWS Lambda. 99,99% de disponibilidade."
      />
      <CardPlatform
        icon="/assets/alta-perfomance.svg"
        name="Alta Perfomance"
        description="Alta performance que oferece velocidade e eficiência em cada link. Tempo de resposta médio de 70ms para cada acesso."
      />
      <CardPlatform
        icon="/assets/analytics.svg"
        name="Segurança"
        description="Segurança em primeiro lugar. Proteção completa para seus dados. Compliance com ISO 27001 e PCI-DSS."
      />
      <CardPlatform
        icon="/assets/analytics.svg"
        name="Analytics"
        description="Métricas avançadas para cada link, Insights poderosos ao seu alcance. Análises detalhadas para otimizar seu negócio."
      />
    </div>
  </div>

  <div class="container my-8 mt-0 grid grid-cols-1 sm:mt-28 md:mt-28 md:grid-cols-3">
    <Statistics icon="/assets/url.svg" total="+10.000.000" title="Links encurtados" />
    <Statistics icon="/assets/target.svg" total="+100.000.000" title="Cliques" />
    <Statistics icon="/assets/customers.svg" total="+100.000" title="Clientes" />
  </div>
</template>
