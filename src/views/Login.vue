<template>
  <div class="flex flex-col justify-center p-4 sm:h-screen">
    <div class="mx-auto w-full max-w-md rounded-2xl border border-slate-300 bg-slate-300 p-8">
      <div class="mb-8 text-center">
        <router-link to="/">
          <img src="/assets/logo.png" class="inline-block" alt="Logo" />
        </router-link>
        <h3 class="mt-4 text-3xl font-semibold text-slate-700">Login</h3>
      </div>

      <form>
        <div class="space-y-6">
          <div>
            <label class="mb-2 block text-sm text-slate-800">Email *</label>
            <input
              maxlength="35"
              name="email"
              type="email"
              class="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none focus:bg-slate-50"
              placeholder="Informe seu email"
              required
            />
          </div>
          <div>
            <label class="mb-2 block text-sm text-slate-800">Senha *</label>
            <input
              maxlength="20"
              minlength="5"
              name="password"
              type="password"
              class="w-full rounded-md border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 outline-none focus:bg-slate-50"
              placeholder="Informe sua senha"
              required
            />
          </div>
        </div>

        <div class="!mt-6">
          <button
            type="submit"
            class="w-full rounded-md bg-blue-500 px-4 py-3 text-sm font-semibold tracking-wider text-white transition duration-300 hover:bg-blue-700 focus:outline-none"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
