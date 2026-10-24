<script setup lang="ts">
import { projects } from '~/data/project';
</script>

<template>
    <section ion id="projects" class="scroll-mt-24 bg-[#F3F4F6] px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
        <div class="mx-auto max-w-7xl">
            <div class="mb-10 flex flex-col gap-4 sm:mb-12 sm:gap-5 md:flex-row md:items-end md:justify-between lg:mb-14">
                <div class="min-w-0">
                    <p class="mb-2 text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase sm:mb-3 sm:text-sm">
                        Featured Projects
                    </p>

                    <h2 class="max-w-2xl text-2xl leading-tight font-bold tracking-tight text-[#111827] min-[400px]:text-3xl sm:text-4xl">
                        Karya yang telah saya bangun<span class="text-[#2563EB]">.</span>
                    </h2>

                    <p class="mt-4 max-w-2xl text-sm leading-7 text-[#6B7280] sm:mt-5 sm:text-base sm:leading-8">
                        Beberapa proyek yang merepresentasikan proses, kemampuan,
                        dan solusi yang saya kembangkan.
                    </p>
                </div>

                <p class="shrink-0 text-xs font-medium text-[#6B7280] sm:text-sm">
                    {{ projects.length }} proyek ditampilkan
                </p>
            </div>

            <div class="grid gap-5 sm:gap-7 md:grid-cols-2">
                <ProjectCard v-for="project in projects" :key="project.slug" :project="project" :limit-technologies="3"/>
            </div>
      
            <div class="mt-9 flex justify-center sm:mt-12">
                <a href="https://github.com/zackyhermawan?tab=repositories" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 rounded-lg border border-[#1E293B] px-5 py-3 text-sm font-semibold text-[#1E293B] transition hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white sm:gap-3 sm:px-7 sm:py-3.5 sm:text-base">
                    View More on GitHub
                    <span aria-hidden="true">↗</span>
                </a>
            </div>
        </div>
    </section>
</template>