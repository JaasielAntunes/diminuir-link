<script setup lang="ts">
import { MenuIcon, XIcon } from 'lucide-vue-next'

import { useMenuToggle } from '@/composables/useMenuToggle'

const { open, menuOpen } = useMenuToggle()
</script>

<template>
  <header class="flex h-16 w-full items-center justify-between bg-primary px-5 shadow-md md:px-6">
    <router-link to="/">
      <img src="/assets/logo.png" class="h-8" alt="Logo" />
    </router-link>

    <nav
      class="absolute left-0 z-20 flex w-full flex-col bg-primary p-6 text-center text-[15px] font-normal uppercase leading-[18.15px] duration-300 lg:static lg:my-0 lg:w-auto lg:flex-row lg:gap-6 lg:p-0"
      :class="[open ? 'top-0' : '-top-full']"
    >
      <a
        href="#platform"
        class="relative py-4 text-white transition-all duration-300 after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-sky-500 after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
        @click="menuOpen"
        >plataforma</a
      >
      <a
        href="#solutions"
        class="relative py-4 text-white transition-all duration-300 after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-sky-500 after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
        @click="menuOpen"
        >soluções</a
      >
      <a
        href="#plans"
        class="relative py-4 text-white transition-all duration-300 after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-sky-500 after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
        @click="menuOpen"
        >planos</a
      >
      <a
        href="#terms"
        class="relative py-4 text-white transition-all duration-300 after:absolute after:block after:h-[3px] after:w-full after:origin-center after:scale-x-0 after:bg-sky-500 after:transition after:duration-300 after:content-[''] after:hover:scale-x-100"
        @click="menuOpen"
        >termos de uso</a
      >

      <div class="mt-3 block items-center gap-[10px] space-x-3 lg:hidden lg:space-x-1">
        <router-link
          to="/login"
          class="h-[38px] w-24 rounded-[10px] bg-white px-[15px] py-[11.5px] text-center text-[12px] font-semibold uppercase leading-[14.52px] text-secondary transition-all duration-300 hover:bg-slate-100 hover:text-black focus:outline-none"
        >
          login
        </router-link>
        <router-link
          to="/register"
          class="h-[38px] w-24 rounded-[10px] bg-secondary px-[15px] py-[11.5px] text-center text-[12px] font-medium uppercase leading-[14.52px] text-white transition-all duration-300 hover:bg-sky-500 hover:text-white focus:outline-none"
        >
          cadastro
        </router-link>
      </div>
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
        class="h-[38px] w-24 rounded-[10px] bg-secondary px-[15px] py-[11.5px] text-center text-[12px] font-medium uppercase leading-[14.52px] text-white transition-all duration-300 hover:bg-sky-500 hover:text-white focus:outline-none"
      >
        cadastro
      </button>
    </div>
    <div class="z-20 cursor-pointer text-4xl text-white lg:hidden">
      <XIcon v-if="open" @click="menuOpen" />
      <MenuIcon v-else @click="menuOpen" />
    </div>
  </header>
</template>
