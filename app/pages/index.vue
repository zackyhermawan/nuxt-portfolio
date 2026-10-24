<script setup lang="ts">
import AboutSection from '~/components/AboutSection.vue';
import AppFooter from '~/components/AppFooter.vue';
import ContactSection from '~/components/ContactSection.vue';
import NavbarSection from '~/components/NavbarSection.vue';
import ProjectSection from '~/components/ProjectSection.vue';
import SkillSection from '~/components/SkillSection.vue';
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant'
  })
})
</script>

<template>
  <main class="min-h-screen bg-white text-[#111827]">
    <NavbarSection />

    <HeroSection />

    <AboutSection/>

    <SkillSection/>

    <ProjectSection/>

    <ContactSection/>

    <AppFooter/>
  </main>
</template>