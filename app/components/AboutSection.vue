<template>
  <section id="about" class="scroll-mt-24 bg-[#F3F4F6] px-5 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="mb-10 sm:mb-12 lg:mb-14">
        <p class="mb-2 text-xs font-bold tracking-[0.2em] text-[#2563EB] uppercase sm:mb-3 sm:text-sm">
          About Me
        </p>

        <h2 class="max-w-2xl text-2xl leading-tight font-bold tracking-tight text-[#111827] min-[400px]:text-3xl sm:text-4xl">
          Mengenal saya lebih dekat<span class="text-[#2563EB]">.</span>
        </h2>
      </div>

      <div class="grid gap-8 sm:gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div class="min-w-0">
          <h3 class="text-lg leading-relaxed font-semibold text-[#1E293B] sm:text-xl lg:text-2xl">
            Saya membangun aplikasi web dengan fokus pada fungsi,
            struktur, dan pengalaman pengguna.
          </h3>

          <div class="mt-4 space-y-4 text-sm leading-7 text-[#6B7280] sm:mt-6 sm:text-base sm:leading-8">
            <p>
              Saya adalah seorang Full-Stack Developer yang tertarik pada
              pengembangan aplikasi web dan mobile, mulai dari membangun antarmuka
              hingga mengembangkan logika dan pengolahan data di sisi server.
            </p>

            <p>
              Bagi saya, pengembangan perangkat lunak bukan hanya tentang
              membuat aplikasi berjalan, tetapi juga menyusun kode yang
              terstruktur, menjaga kualitas implementasi, dan menghadirkan
              solusi yang sesuai dengan kebutuhan pengguna.
            </p>
          </div>
        </div>

        <div class="grid grid-cols-1 gap-3 min-[400px]:grid-cols-2 sm:gap-4">
          <article class="rounded-2xl border border-gray-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/60 sm:p-5 lg:p-6">
            <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] sm:mb-5 sm:h-12 sm:w-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-5 w-5 sm:h-6 sm:w-6">
                <rect x="3" y="4" width="18" height="13" rx="2" />
                <path d="M8 21h8M12 17v4M8 9l-2 2 2 2M16 9l2 2-2 2" />
              </svg>
            </div>

            <h3 class="text-sm leading-snug font-bold text-[#1E293B] sm:text-base">
              Full-Stack Development
            </h3>

            <p class="mt-2 text-xs leading-6 text-[#6B7280] sm:mt-3 sm:text-sm">
              Mengembangkan aplikasi dari antarmuka hingga logika backend
              dan integrasi database.
            </p>
          </article>

          <article class="rounded-2xl border border-gray-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/60 sm:p-5 lg:p-6">
            <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] sm:mb-5 sm:h-12 sm:w-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-5 w-5 sm:h-6 sm:w-6">
                <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 4l-4 16" />
              </svg>
            </div>

            <h3 class="text-sm leading-snug font-bold text-[#1E293B] sm:text-base">
              Clean Code
            </h3>

            <p class="mt-2 text-xs leading-6 text-[#6B7280] sm:mt-3 sm:text-sm">
              Mengutamakan struktur kode yang jelas, modular, dan lebih
              mudah dipelihara.
            </p>
          </article>

          <article class="rounded-2xl border border-gray-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/60 sm:p-5 lg:p-6">
            <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] sm:mb-5 sm:h-12 sm:w-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-5 w-5 sm:h-6 sm:w-6">
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M3 9h18M8 4v5M7 14h4M7 17h7" />
              </svg>
            </div>

            <h3 class="text-sm leading-snug font-bold text-[#1E293B] sm:text-base">
              Problem Solving
            </h3>

            <p class="mt-2 text-xs leading-6 text-[#6B7280] sm:mt-3 sm:text-sm">
              Merancang solusi digital berdasarkan permasalahan dan
              kebutuhan yang ingin diselesaikan.
            </p>
          </article>

          <article class="rounded-2xl border border-gray-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-200/60 sm:p-5 lg:p-6">
            <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2563EB] sm:mb-5 sm:h-12 sm:w-12">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-5 w-5 sm:h-6 sm:w-6">
                <path d="M12 3 4 7v5c0 5 3.5 7.5 8 9 4.5-1.5 8-4 8-9V7l-8-4Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>

            <h3 class="text-sm leading-snug font-bold text-[#1E293B] sm:text-base">
              Quality & Reliability
            </h3>

            <p class="mt-2 text-xs leading-6 text-[#6B7280] sm:mt-3 sm:text-sm">
              Memperhatikan konsistensi implementasi, pengujian, dan
              keandalan fitur aplikasi.
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
