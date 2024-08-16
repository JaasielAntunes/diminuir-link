<script setup lang="ts">
import LinkElement from '../LinkElement.vue'
</script>

<template>
  <footer class="container bg-footer pt-3">
    <div class="m-7 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:py-8">
      <div>
        <h2 class="mb-6 text-lg font-medium capitalize leading-[21.78px] text-white">sobre</h2>
        <p class="text-sm font-light leading-[16.94px] text-vector">
          Lorem ipsum dolor sqssit amet, consectetur adipiscing elit, sed do eiusmd tempor
          incididunt ut labore et pariatur, o. eiusmod tempor icididunt ut labore et pariatur.
        </p>
      </div>
      <div>
        <LinkElement
          :titulo="'segurança'"
          :links="['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum']"
        />
      </div>
      <div>
        <LinkElement
          :titulo="'links importantes'"
          :links="['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum']"
        />
      </div>
      <div>
        <h2 class="mb-6 text-lg font-medium capitalize leading-[21.78px] text-white">contato</h2>
        <address class="mb-3 text-sm font-light not-italic leading-[16.94px] text-vector">
          Endereço: <br />
          R. Gomes de Carvalho, 1105 - Vila Olimpia São Paulo, SP<br />
        </address>
        <span class="text-sm font-light not-italic leading-[16.94px] text-vector"
          >E-mail: <br />
          <a href="mailto:contato@diminuir.link">contato@diminuir.link</a></span
        >
      </div>
    </div>
    <div class="container">
      <hr class="mt-16 border-blue_dark" />
      <div class="flex flex-col items-center justify-between py-6 sm:flex-row">
        <span class="text-lg font-light leading-[21.78px] text-white sm:text-center">
          © 2024 copyright
          <a href="#" class="font-normal text-secondary">diminuir.link</a>
        </span>
        <div class="mt-4 flex items-center space-x-4 sm:mt-0">
          <a href="#"><img src="/assets/facebook.svg" alt="Facebook" /></a>
          <a href="#"><img src="/assets/x.svg" alt="X" /></a>
          <a href="#"><img src="/assets/instagram.svg" alt="Instagram" /></a>
          <a href="#"><img src="/assets/linkedin.svg" alt="Linkedin" /></a>
        </div>
      </div>
    </div>
  </footer>
</template>
