<script setup lang="ts">
import { MenuIcon, XIcon } from 'lucide-vue-next'
import { ref } from 'vue'

const open = ref(false)

const menuOpen = () => {
  open.value = !open.value
}
</script>

<template>
  <header
    class="container flex h-16 items-center justify-between bg-primary px-5 shadow-md md:px-6"
  >
    <RouterLink to="/">
      <img src="/assets/logo.png" class="h-8" alt="Logo" />
    </RouterLink>

    <nav
      class="absolute left-0 flex w-full flex-col bg-primary px-6 text-center text-[15px] font-normal uppercase leading-[18.15px] duration-300 md:static md:my-0 md:w-auto md:flex-row md:gap-6"
      :class="[open ? 'top-0' : 'top-[-390%]']"
    >
      <RouterLink
        to="/platform"
        class="py-5 text-white transition-all duration-300 hover:text-slate-300"
        @click="menuOpen"
        >plataforma</RouterLink
      >
      <RouterLink
        to="/solutions"
        class="py-5 text-white transition-all duration-300 hover:text-slate-300"
        @click="menuOpen"
        >soluções</RouterLink
      >
      <RouterLink
        to="/plans"
        class="py-5 text-white transition-all duration-300 hover:text-slate-300"
        @click="menuOpen"
        >planos</RouterLink
      >
      <RouterLink
        to="/terms"
        class="py-5 text-white transition-all duration-300 hover:text-slate-300"
        @click="menuOpen"
        >termos de uso</RouterLink
      >
    </nav>
    <div class="hidden items-center gap-[10px] space-x-3 md:space-x-1 lg:flex">
      <button
        type="button"
        class="h-[38px] w-24 rounded-[10px] bg-white px-[15px] py-[11.5px] text-center text-[12px] font-semibold uppercase leading-[14.52px] text-secondary transition-all duration-300 hover:bg-slate-300 hover:text-black focus:outline-none"
      >
        login
      </button>
      <button
        type="button"
        class="h-[38px] w-24 rounded-[10px] bg-secondary px-[15px] py-[11.5px] text-center text-[12px] font-medium uppercase leading-[14.52px] text-white transition-all duration-300 hover:bg-blue_dark hover:text-white focus:outline-none"
      >
        cadastro
      </button>
    </div>
    <div class="z-20 cursor-pointer text-4xl text-white md:hidden">
      <XIcon v-if="open" @click="menuOpen" />
      <MenuIcon v-else @click="menuOpen" />
    </div>
  </header>
</template>
