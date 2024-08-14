<script setup lang="ts">
import Label from '../Label.vue'
</script>

<template>
  <div
    class="container flex h-80 w-full items-center justify-center border-y-4 border-blue_dark bg-cover bg-center sm:h-72 md:h-[370px]"
    style="background-image: url('/assets/hero-bg.svg')"
  >
    <div class="mt-4 rounded-[10px] bg-opacity-90 px-12">
      <div class="relative mr-10 flex w-[27rem] sm:w-full">
        <input
          placeholder="Digite sua URL aqui..."
          class="text-gray-700 flex-1 rounded-lg py-[18px] pl-4 text-2xl font-extralight leading-[29.05px] outline-none placeholder:opacity-50 focus:bg-slate-100"
        />
        <button
          type="button"
          class="absolute right-1.5 my-2 rounded-lg bg-secondary p-4 text-[15px] font-normal uppercase leading-[18.15px] text-white transition-all duration-300 hover:bg-blue_dark"
        >
          encurtar
        </button>
      </div>
      <div class="flex justify-center">
        <div
          class="mt-2 grid h-44 w-64 grid-cols-1 justify-between gap-2 space-y-1 rounded-[50px] bg-border px-[30px] py-[18px] sm:h-24 sm:w-full sm:grid-cols-2 md:flex md:h-16 md:gap-6"
        >
          <Label name="Personalizar Link" />
          <Label name="Link com Senha" />
          <Label name="Definir Datas" />
          <Label name="Gerar QRCode" />
        </div>
      </div>
    </div>
  </div>
</template>
