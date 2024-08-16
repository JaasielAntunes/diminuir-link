<script>
import 'vue3-carousel/dist/carousel.css'

import { Carousel, Pagination, Slide } from 'vue3-carousel'

export default {
  components: {
    Carousel,
    Slide,
    Pagination
  }
}
</script>

<template>
  <carousel :items-to-show="1" autoplay="3000" transition="500" wrap-around="true">
    <slide v-for="slide in 4" :key="slide">
      <div class="container mb-16 flex flex-col items-center justify-between md:flex-row">
        <div class="mt-10 md:pr-8 lg:w-1/2">
          <div class="">
            <h3
              class="mb-7 mr-7 text-left text-[42px] font-semibold leading-[50.83px] text-blue_dark"
            >
              Encurtador poderoso e com alto nível de personalização
            </h3>
            <p class="mb-6 text-left text-lg font-light leading-[21.78px] text-darkness">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p class="mb-6 text-left text-lg font-light leading-[21.78px] text-darkness">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
          </div>
          <div class="flex space-x-4">
            <button
              type="button"
              class="flex gap-1 rounded-[10px] bg-secondary p-[10px] text-xs font-semibold capitalize leading-[14.52px] text-white transition-all duration-300 hover:bg-blue_light hover:text-white"
            >
              comece grátis
              <img src="/assets/arrow-right.svg" alt="Ícone Seta" class="ml-1" />
            </button>
            <button
              type="button"
              class="rounded-[10px] border border-secondary bg-low_white p-[10px] text-xs font-semibold capitalize leading-[14.52px] text-secondary transition-all duration-300 hover:bg-slate-200 hover:text-black"
            >
              ver planos
            </button>
          </div>
        </div>

        <div class="mt-8 hidden w-full md:mt-0 md:pl-8 lg:block">
          <img src="/assets/laptop.png" alt="Imagem Soluções" class="size-full bg-cover" />
        </div>
      </div>
    </slide>

    <template #addons>
      <pagination />
    </template>
  </carousel>
</template>
