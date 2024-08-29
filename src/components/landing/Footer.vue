<script setup lang="ts">
import LinkElement from '../LinkElement.vue'
</script>

<template>
  <section id="terms">
    <footer class="bg-footer pt-3">
      <div class="container">
        <div class="mt-7 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:my-8">
          <div>
            <h2 class="mb-6 text-lg font-medium capitalize leading-[21.78px] text-white">sobre</h2>
            <p class="text-sm font-light leading-[16.94px] text-vector">
              Lorem ipsum dolor sqssit amet, consectetur adipiscing elit, sed do eiusmd tempor
              incididunt ut labore et pariatur, o. eiusmod tempor icididunt ut labore et pariatur.
            </p>
          </div>
          <hr class="block border-blue_dark sm:hidden" />
          <div>
            <LinkElement
              :titulo="'segurança'"
              :links="['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum']"
            />
          </div>
          <hr class="block border-blue_dark sm:hidden" />
          <div>
            <LinkElement
              :titulo="'links importantes'"
              :links="['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum']"
            />
          </div>
          <hr class="block border-blue_dark sm:hidden" />
          <div>
            <h2 class="mb-6 text-lg font-medium capitalize leading-[21.78px] text-white">
              contato
            </h2>
            <address class="mb-3 text-sm font-light not-italic leading-[16.94px] text-vector">
              Endereço: <br />
              R. Gomes de Carvalho, 1105 - Vila Olímpia São Paulo, SP<br />
            </address>
            <span class="text-sm font-light not-italic leading-[16.94px] text-vector"
              >E-mail: <br />
              <a
                href="mailto:contato@diminuir.link"
                class="transition duration-300 hover:text-slate-300"
                >contato@diminuir.link</a
              ></span
            >
          </div>
        </div>
      </div>
      <div class="container">
        <hr class="mt-16 border-blue_dark" />
        <div class="flex flex-col items-center justify-between py-6 sm:flex-row">
          <span class="text-lg font-light leading-[21.78px] text-white sm:text-center">
            © 2024 copyright
            <a
              href="#"
              class="font-normal text-secondary transition duration-200 hover:text-sky-500"
              >diminuir.link</a
            >
          </span>
          <div class="mt-4 flex items-center space-x-4 sm:mt-0">
            <a href="#"
              ><img
                src="/assets/facebook.svg"
                alt="Facebook"
                class="transition duration-200 ease-in-out hover:brightness-125 hover:contrast-125"
            /></a>
            <a href="#"
              ><img
                src="/assets/x.svg"
                alt="X"
                class="transition duration-200 ease-in-out hover:brightness-125 hover:contrast-125"
            /></a>
            <a href="#"
              ><img
                src="/assets/instagram.svg"
                alt="Instagram"
                class="transition duration-200 ease-in-out hover:brightness-125 hover:contrast-125"
            /></a>
            <a href="#"
              ><img
                src="/assets/linkedin.svg"
                alt="Linkedin"
                class="transition duration-200 ease-in-out hover:brightness-125 hover:contrast-125"
            /></a>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>
