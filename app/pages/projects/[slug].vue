<script setup lang="ts">
import { computed, onMounted, onBeforeUnmount, ref } from 'vue'
import { projects } from '~/data/project'


const route = useRoute()

const project = computed(() =>
  projects.find((item) => item.slug === route.params.slug)
)

const selectedImage = ref<string | null>(null)

function openImage(image: string) {
  selectedImage.value = image
}

function closeImage() {
  selectedImage.value = null
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    closeImage()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})

useSeoMeta({
  title: () => project.value
    ? `${project.value.title} | Portfolio`
    : 'Project Not Found | Portfolio',
  description: () => project.value?.summary ?? 'Detail proyek portfolio.',
})
</script>


<template>
  <main class="min-h-screen bg-white text-[#111827]">
    <!-- Navbar -->
    <header class="border-b border-gray-100 bg-white">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10"
      >
        <NuxtLink to="/" class="text-xl font-bold tracking-tight text-[#1E293B]">
          Portfolio<span class="text-[#2563EB]">.</span>
        </NuxtLink>

        <NuxtLink
          to="/#projects"
          class="text-sm font-semibold text-[#6B7280] transition hover:text-[#2563EB]"
        >
          ← Kembali ke Proyek
        </NuxtLink>
      </nav>
    </header>

    <!-- Project Detail -->
    <section v-if="project" class="px-6 py-16 lg:px-10 lg:py-24">
      <div class="mx-auto max-w-5xl">
        <NuxtLink
          to="/#projects"
          class="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:gap-3"
        >
          ← Semua Proyek
        </NuxtLink>

        <div class="mt-8">
          <p class="text-sm font-bold uppercase tracking-[0.2em] text-[#2563EB]">
            {{ project.category }}
          </p>

          <h1
            class="mt-4 max-w-4xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            {{ project.title }}
          </h1>

          <p class="mt-6 max-w-3xl text-base leading-8 text-[#6B7280] sm:text-lg">
            {{ project.summary }}
          </p>
        </div>
        
        
        <section v-if="project" class="mt-10">
          <div class="overflow-hidden rounded-2xl border border-gray-200 bg-[#F3F4F6]">
            <img
              :src="project.thumbnail"
              :alt="`Preview ${project.title}`"
              class="aspect-[16/9] w-full object-cover"
            />
          </div>

          <div class="mt-5">

            <div class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              <button
                v-for="(image, index) in project.images"
                :key="image"
                type="button"
                :aria-label="`Perbesar gambar ${index + 1} proyek ${project.title}`"
                class="group relative overflow-hidden rounded-xl border border-gray-200 bg-[#F3F4F6] text-left focus:outline-none focus:ring-2 focus:ring-[#2563EB] cursor-pointer"
                @click="openImage(image)"
              >
                <img
                  :src="image"
                  :alt="`Screenshot ${index + 1} - ${project.title}`"
                  class="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />

                <span
                  class="absolute inset-0 flex items-center justify-center bg-black/0 text-white transition group-hover:bg-black/35"
                >
                  <span
                    class="rounded-full bg-black/0 p-3 opacity-0 transition group-hover:bg-black/40 group-hover:opacity-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      class="h-6 w-6"
                      aria-hidden="true"
                    >
                      <circle cx="11" cy="11" r="7" />
                      <path d="m20 20-4-4M11 8v6M8 11h6" />
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </section>

        <!-- Image Lightbox -->
        <Teleport to="body">
          <div
            v-if="selectedImage"
            class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Pratinjau gambar proyek"
            @click.self="closeImage"
          >
            <button
              type="button"
              class="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20"
              aria-label="Tutup gambar"
              @click="closeImage"
            >
              ×
            </button>

            <img
              :src="selectedImage"
              :alt="`Gambar proyek ${project?.title ?? ''}`"
              class="max-h-[85vh] max-w-full rounded-lg object-contain"
            />
          </div>
        </Teleport>


        <div class="mt-14 grid gap-12 md:grid-cols-[1.5fr_1fr]">
          <!-- Main Information -->
          <div>
            <section>
              <h2 class="text-2xl font-bold">Tentang Proyek</h2>
              <p class="mt-4 leading-8 text-[#6B7280]">
                {{ project.description }}
              </p>
            </section>

            <section class="mt-10">
              <h2 class="text-2xl font-bold">Fitur Utama</h2>

              <ul class="mt-5 space-y-4">
                <li
                  v-for="(feature, index) in project.features"
                  :key="feature"
                  class="flex items-start gap-3"
                >
                  <span
                    class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-[#2563EB]"
                  >
                    {{ index + 1 }}
                  </span>
                  <span class="leading-7 text-[#6B7280]">
                    {{ feature }}
                  </span>
                </li>
              </ul>
            </section>

            <section class="mt-10">
              <h2 class="text-2xl font-bold">Kontribusi Saya</h2>
              <p class="mt-4 leading-8 text-[#6B7280]">
                {{ project.contribution }}
              </p>
            </section>
          </div>

          <!-- Project Sidebar -->
          <aside class="h-fit rounded-2xl border border-gray-200 p-6 sm:p-8">
            <h2 class="text-lg font-bold">Informasi Proyek</h2>

            <div class="mt-6">
              <p class="text-sm text-[#6B7280]">Kategori</p>
              <p class="mt-1 font-semibold">{{ project.category }}</p>
            </div>

            <div class="mt-6">
              <p class="text-sm text-[#6B7280]">Teknologi</p>
              <div class="mt-3 flex flex-wrap gap-2">
                <span
                  v-for="technology in project.technologies"
                  :key="technology"
                  class="rounded-md bg-[#F3F4F6] px-3 py-1.5 text-xs font-medium text-[#1E293B]"
                >
                  {{ technology }}
                </span>
              </div>
            </div>

            <div class="mt-8 flex flex-col gap-3">
              <a
                v-if="project.demoUrl"
                :href="project.demoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-lg bg-[#2563EB] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Live Demo ↗
              </a>

              <a
                v-if="project.repositoryUrl"
                :href="project.repositoryUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="rounded-lg border border-gray-200 px-5 py-3 text-center text-sm font-semibold text-[#1E293B] transition hover:border-[#2563EB] hover:text-[#2563EB]"
              >
                View Repository ↗
              </a>

              <p
                v-if="!project.demoUrl && !project.repositoryUrl"
                class="text-sm leading-6 text-[#6B7280]"
              >
                Link demo atau repository belum ditambahkan.
              </p>
            </div>
          </aside>
        </div>

        <div class="mt-16 border-t border-gray-100 pt-8">
          <NuxtLink
            to="/#projects"
            class="inline-flex items-center gap-2 font-semibold text-[#2563EB] transition hover:gap-3"
          >
            ← Jelajahi Proyek Lainnya
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Project Not Found -->
    <section v-else class="px-6 py-32 text-center">
      <h1 class="text-3xl font-bold">Proyek tidak ditemukan</h1>
      <p class="mt-4 text-[#6B7280]">
        Proyek yang kamu cari tidak tersedia.
      </p>
      <NuxtLink
        to="/#projects"
        class="mt-7 inline-flex rounded-lg bg-[#2563EB] px-6 py-3 font-semibold text-white hover:bg-blue-700"
      >
        Kembali ke Portfolio
      </NuxtLink>
    </section>
  </main>
</template>
