<script setup lang="ts">
import CardPlatform from '../CardPlatform.vue'
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
    <div class="relative inset-x-0 -top-16 grid justify-center sm:grid-cols-2 md:flex md:flex-wrap">
      <!-- Inicio Mobile -->
      <div
        class="group block h-[168px] w-[300px] items-center bg-gray p-4 transition-all duration-300 hover:bg-secondary sm:hidden"
      >
        <div class="flex justify-center">
          <img
            src="/assets/autoescalavel.svg"
            alt="Ícone"
            class="group-hover:brightness-0 group-hover:invert"
          />
        </div>
        <div>
          <h3
            class="mt-2 text-center text-xl font-light leading-[24.2px] text-header group-hover:text-white"
          >
            Autoescalável
          </h3>
          <p
            class="mt-2 text-center font-light leading-[16.94px] text-darkness group-hover:text-white"
          >
            Infraestrutura Cloud 100% autoescalável, em AWS Lambda. 99,99% de disponibilidade.
          </p>
        </div>
      </div>

      <div
        class="group block h-[168px] w-[300px] items-center bg-gray p-4 transition-all duration-300 hover:bg-secondary sm:hidden"
      >
        <div class="flex justify-center">
          <img
            src="/assets/alta-performance.svg"
            alt="Ícone"
            class="group-hover:brightness-0 group-hover:invert"
          />
        </div>
        <div>
          <h3
            class="mt-2 text-center text-xl font-light leading-3 text-header group-hover:text-white md:leading-[24.2px] lg:leading-[24.2px] xl:leading-[24.2px] 2xl:leading-[24.2px]"
          >
            Alta Performance
          </h3>
          <p
            class="mt-3.5 text-center font-light leading-[16.94px] text-darkness group-hover:text-white md:mt-2"
          >
            Alta performance que oferece velocidade e eficiência em cada link. Tempo de resposta
            médio de 70ms para cada acesso.
          </p>
        </div>
      </div>

      <div
        class="group block h-[168px] w-[300px] items-center bg-gray p-4 transition-all duration-300 hover:bg-secondary sm:hidden"
      >
        <div class="flex justify-center">
          <img
            src="/assets/security.svg"
            alt="Ícone"
            class="group-hover:brightness-0 group-hover:invert"
          />
        </div>
        <div>
          <h3
            class="mt-2 text-center text-xl font-light leading-3 text-header group-hover:text-white md:leading-[24.2px] lg:leading-[24.2px] xl:leading-[24.2px] 2xl:leading-[24.2px]"
          >
            Segurança
          </h3>
          <p
            class="mt-3.5 text-center font-light leading-[16.94px] text-darkness group-hover:text-white md:mt-2"
          >
            Segurança em primeiro lugar. Proteção completa para seus dados. Compliance com ISO 27001
            e PCI-DSS.
          </p>
        </div>
      </div>

      <div
        class="group block h-[168px] w-[300px] items-center bg-gray p-4 transition-all duration-300 hover:bg-secondary sm:hidden"
      >
        <div class="flex justify-center">
          <img
            src="/assets/analytics.svg"
            alt="Ícone"
            class="group-hover:brightness-0 group-hover:invert"
          />
        </div>
        <div>
          <h3
            class="mt-2 text-center text-xl font-light leading-3 text-header group-hover:text-white md:leading-[24.2px] lg:leading-[24.2px] xl:leading-[24.2px] 2xl:leading-[24.2px]"
          >
            Analytics
          </h3>
          <p
            class="mt-3.5 text-center font-light leading-[16.94px] text-darkness group-hover:text-white md:mt-2"
          >
            Métricas avançadas para cada link, Insights poderosos ao seu alcance. Análises
            detalhadas para otimizar seu negócio.
          </p>
        </div>
      </div>
      <!-- Fim Mobile -->

      <CardPlatform
        icon="/assets/autoescalavel.svg"
        name="Autoescalável"
        description="Infraestrutura Cloud 100% autoescalável, em AWS Lambda. 99,99% de disponibilidade."
      />
      <CardPlatform
        icon="/assets/alta-performance.svg"
        name="Alta Performance"
        description="Alta performance que oferece velocidade e eficiência em cada link. Tempo de resposta médio de 70ms para cada acesso."
      />
      <CardPlatform
        icon="/assets/security.svg"
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

  <div class="container -mb-5 mt-0 grid grid-cols-1 md:grid-cols-3 lg:mb-14">
    <Statistics icon="/assets/url.svg" total="+10.000.000" title="Links encurtados" />
    <Statistics icon="/assets/target.svg" total="+100.000.000" title="Cliques" />
    <Statistics icon="/assets/customers.svg" total="+100.000" title="Clientes" />
  </div>
</template>
