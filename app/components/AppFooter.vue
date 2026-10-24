<template>
  <footer class="border-t border-gray-100 bg-white px-5 py-6 sm:px-6 sm:py-7 lg:px-10">
    <div class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:gap-4 md:flex-row">
      <NuxtLink to="/" class="text-lg font-bold tracking-tight text-[#1E293B]">
        Portfolio<span class="text-[#2563EB]">.</span>
      </NuxtLink>

      <p class="text-center text-xs leading-6 text-[#6B7280] sm:text-sm">
        &copy; {{ new Date().getFullYear() }} Portfolio. Dibuat dengan Nuxt dan
        Tailwind CSS.
      </p>

      <a href="#home" class="text-sm font-semibold text-[#2563EB] transition hover:text-blue-700">
        Kembali ke Atas ↑
      </a>
    </div>
  </footer>
</template>