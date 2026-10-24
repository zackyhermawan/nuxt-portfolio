<script setup lang="ts">
const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 sm:py-5 lg:px-10">
      <a href="/" class="text-lg font-bold tracking-tight text-[#1E293B] sm:text-xl">
        Portfolio<span class="text-[#2563EB]">.</span>
      </a>

      <div class="hidden items-center gap-5 md:flex lg:gap-8">
        <a href="#about" @click.prevent="scrollToSection('about')" class="text-sm text-[#6B7280] transition hover:text-[#2563EB]">
          About Me
        </a>

        <a href="#skills" @click.prevent="scrollToSection('skills')" class="text-sm text-[#6B7280] transition hover:text-[#2563EB]">
          Tech Stack
        </a>

        <a href="#projects" @click.prevent="scrollToSection('projects')" class="text-sm text-[#6B7280] transition hover:text-[#2563EB]">
          Projects
        </a>

        <a href="#contact" @click.prevent="scrollToSection('contact')" class="rounded-lg bg-[#2563EB] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 lg:px-5">
          Contact Me ↗
        </a>
      </div>

      <a href="#contact" @click.prevent="scrollToSection('contact')" class="rounded-lg bg-[#2563EB] px-3.5 py-2 text-xs font-semibold text-white sm:px-4 sm:text-sm md:hidden">
        Contact
      </a>
    </nav>
  </header>
</template>
