<script setup lang="ts">
import Label from '../Label.vue'
</script>

<template>
  <div
    class="flex h-80 w-full items-center justify-center border-y-4 border-blue_dark bg-cover bg-center sm:h-72 md:h-[370px]"
    style="background-image: url('/assets/hero-bg.svg')"
  >
    <div class="mt-4 rounded-[10px] px-5">
      <div class="relative mr-8 flex w-80 sm:w-full">
        <input
          type="url"
          pattern="https://.*"
          placeholder="Digite sua URL aqui..."
          class="flex-1 rounded-lg py-[13px] pl-1.5 text-2xl font-extralight leading-[29.05px] text-slate-700 outline-none placeholder:opacity-50 focus:bg-slate-100 sm:pl-4"
          required
        />
        <button
          type="submit"
          class="absolute -right-5 left-auto my-[3px] rounded-lg bg-secondary px-1.5 py-[15px] text-[15px] font-normal uppercase leading-[18.15px] text-white transition duration-300 hover:bg-sky-500 sm:right-[3px]"
        >
          encurtar
        </button>
      </div>
      <div class="flex justify-center">
        <div
          class="mt-2 grid h-44 w-64 grid-cols-1 justify-between gap-2 space-y-1 rounded-[50px] bg-border px-[30px] py-[18px] transition duration-200 hover:bg-sky-500 sm:h-24 sm:w-full sm:grid-cols-2 md:flex md:h-16 md:gap-6"
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
