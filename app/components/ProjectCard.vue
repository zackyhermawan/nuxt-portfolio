<script setup lang="ts">
import type { Project } from '~/data/project';

const props = withDefaults(defineProps<{
  project: Project
  limitTechnologies?: number
}>(), {
  limitTechnologies: 0
})

const displayedTechnologies = computed(() => {
  if (props.limitTechnologies <= 0) {
    return props.project.technologies
  }

  return props.project.technologies.slice(0, props.limitTechnologies)
})

const remainingTechnologies = computed(() => {
  if (props.limitTechnologies <= 0) {
    return 0
  }

  return Math.max(
    0,
    props.project.technologies.length - props.limitTechnologies
  )
})
</script>

<template>
  <article class="group overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 sm:rounded-2xl">
    <NuxtLink :to="`/projects/${project.slug}`" class="block">
      <div class="aspect-[16/10] overflow-hidden bg-[#F3F4F6]">
        <img :src="project.thumbnail" :alt="`Preview ${project.title}`" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy"/>
      </div>
    </NuxtLink>

    <div class="p-4 sm:p-6 lg:p-7">
      <p class="text-xs font-semibold text-[#2563EB] sm:text-sm">
        {{ project.category }}
      </p>

      <h3 class="mt-2 text-lg leading-snug font-bold text-[#111827] transition group-hover:text-[#2563EB] sm:mt-3 sm:text-xl">
        {{ project.title }}
      </h3>

      <p class="mt-2 text-sm leading-6 text-[#6B7280] sm:mt-3 sm:leading-7">
        {{ project.summary }}
      </p>

      <div class="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
        <span v-for="technology in displayedTechnologies" :key="technology" class="rounded-md bg-[#F3F4F6] px-2.5 py-1.5 text-[11px] font-medium text-[#1E293B] sm:px-3 sm:text-xs">
          {{ technology }}
        </span>

        <span v-if="remainingTechnologies > 0" class="rounded-md bg-[#F3F4F6] px-2.5 py-1.5 text-[11px] font-medium text-[#6B7280] sm:px-3 sm:text-xs">
          +{{ remainingTechnologies }}
        </span>
      </div>

      <NuxtLink :to="`/projects/${project.slug}`" class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] transition hover:gap-3 sm:mt-7">
        Lihat Detail Proyek
        <span aria-hidden="true">↗</span>
      </NuxtLink>
    </div>
  </article>
</template>