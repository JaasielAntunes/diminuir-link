<script setup lang="ts"></script>

<template>
  <div class="container relative">
    <div class="absolute inset-x-0 -top-16 flex flex-wrap justify-center">
      <!-- Inicio Mobile -->
      <div
        class="group block h-[168px] w-[300px] grid-cols-[auto_1fr] items-center bg-gray p-4 transition-all duration-300 hover:bg-secondary sm:hidden"
      >
        <div class="mr-5 flex justify-center">
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
        class="group block h-[168px] w-[300px] grid-cols-[auto_1fr] items-center bg-gray p-4 transition-all duration-300 hover:bg-secondary sm:hidden"
      >
        <div class="mr-5 flex justify-center">
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
      <!-- Fim Mobile -->

      <!-- <CardPlatform
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
      /> -->
    </div>
  </div>
</template>
