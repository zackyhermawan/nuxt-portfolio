export interface Project {
  slug: string
  title: string
  category: string
  summary: string
  description: string
  thumbnail: string
  images: string[]
  technologies: string[]
  features: string[]
  contribution: string
  demoUrl: string
  repositoryUrl: string
}


export const projects: Project[] = [
  {
    slug: 'ai-chat-with-pdf',
    title: 'AI PDF Document Assistant (RAG System)',
    category: 'Fullstack & AI Integration',
    summary: 'Aplikasi AI berbasis Retrieval-Augmented Generation (RAG) untuk melakukan tanya-jawab interaktif dengan dokumen PDF.',
    description: 'Aplikasi fullstack yang memungkinkan pengguna mengunggah dokumen PDF dan melakukan tanya-jawab secara berdasarkan isi dokumen tersebut. Sistem ini memanfaatkan teknik Retrieval-Augmented Generation (RAG) dengan memproses teks dokumen menjadi text chunks, merubahnya menjadi vector embeddings, dan menyimpannya ke dalam PostgreSQL pgvector. Backend dibangun modular dengan Node.js dan Express untuk menangani pemrosesan dokumen dan integrasi LLM via OpenRouter, sementara frontend menyediakan antarmuka chat.',
    thumbnail: '/images/projects/ai-chat-pdf/ai-chat-pdf.jpeg',
    images: [
      
    ],
    technologies: [
      'Node.js',
      'Express.js',
      'TypeScript',
      'PostgreSQL',
      'pgvector',
      'RAG',
      'Embeddings',
      'Vector',
      'Redis',
      'BullMQ',
      'JWT',
      'Bcrypt',
      'Docker & Docker Compose',
      'OpenRouter API',
      'Vue 3',
      'Pinia',
      'Axios',
      'Tailwind CSS'
    ],
    features: [
      'Upload dokumen PDF',
      'Text Chunking & generasi Vector Embeddings otomatis',
      'Pencarian kemiripan vektor (Similarity Search) dengan pgvector',
      'Interaksi Chatbot AI berbasis konteks isi dokumen (RAG)',
      'Response generation yang cepat dan efisien',
      'Background processing menggunakan worker queue',
      'Kontainerisasi lingkungan database & backend menggunakan Docker Compose'
    ],
    contribution: 'Merancang arsitektur end-to-end aplikasi: mengonfigurasi Docker untuk PostgreSQL pgvector, membuat pipeline backend Node.js/Express untuk parsing PDF, chunking, dan pemanggilan LLM API, serta mengimplementasikan antarmuka chat interaktif pada frontend.',
    demoUrl: '',
    repositoryUrl: 'https://github.com/zackyhermawan/ai-chat-with-pdf'
  },
  {
    slug: 'company-profile',
    title: 'Corporate & Business Landing Page',
    category: 'Frontend Development',
    summary: 'Landing page company profile contractor modern dengan desain responsif.',
    description: 'Proyek ini merupakan landing page company profile contractor interaktif yang dirancang untuk meningkatkan kredibilitas bisnis dan mengonversi pengunjung menjadi klien. Dibangun dengan fokus pada kecepatan muat halaman, estetika visual yang bersih, serta navigasi yang intuitif di berbagai perangkat (desktop, tablet, dan mobile). Memiliki integrasi formulir kontak langsung serta CTA (Call-to-Action) yang responsif.',
    thumbnail: '/images/projects/company-profile/company-profile.png',
    images: [
      '/images/projects/company-profile/1.png',
      '/images/projects/company-profile/2.png',
      '/images/projects/company-profile/3.png',
      '/images/projects/company-profile/4.png',
      '/images/projects/company-profile/5.png',
      '/images/projects/company-profile/6.png',
    ],
    technologies: [
      'Javascript', 
      'Vue.js', 
      'Tailwind CSS'
    ],
    features: [
      'Halaman Beranda profesional',
      'Halaman Tentang (profile perusahaan, tata kelola, sertifikat, partner)',
      'Halaman Layanan',
      'Halaman Kontak'
    ],
    contribution: 'Merancang dan mengimplementasikan seluruh antarmuka pengguna dari awal, menyusun arsitektur komponen modular, mengoptimalkan aset media untuk performa, serta mengintegrasikan navigasi.',
    demoUrl: '',
    repositoryUrl: 'https://github.com/zackyhermawan/frontend-company-profile-contractor',
  },
  {
    slug: 'ai-customer-support-ticket-system',
    title: 'AI Customer Support Ticket System',
    category: 'Fullstack & AI Automation',
    summary: 'Sistem manajemen tiket dukungan pelanggan cerdas berbasis AI untuk analisis sentimen, prioritas, kategori dan draf balasan empatik.',
    description: 'Aplikasi fullstack yang dirancang untuk mengoptimalkan alur kerja tim dukungan pelanggan (customer support). Platform ini dilengkapi dengan fitur AI terintegrasi yang mampu menganalisis pesan keluhan pelanggan, mendeteksi tingkat urgensi, sentimen, serta kategori dan fitur untuk menghasilkan draf balasan balasan empatik dalam bentuk JSON terstruktur via Groq API. Admin dapat meninjau, menyesuaikan, dan mengirim draf rekomendasi AI tersebut dengan satu klik, sehingga mempercepat waktu respons dan menjaga kualitas layanan.',
    thumbnail: '/images/projects/ai-customer-support/ai-customer-support.png',
    images: [
      '/images/projects/ai-customer-support/1.png',
      '/images/projects/ai-customer-support/2.png',
      '/images/projects/ai-customer-support/3.png'
    ],
    technologies: [
      'Node.js',
      'Express.js',
      'TypeScript',
      'Groq API',
      'PostgreSQL',
      'Prisma ORM',
      'Zod Validation',
      'Docker & Docker Compose',
      'Redis',
      'BullMQ',
      'Socket.IO',
      'JWT',
      'Bcryptjs',
      'Vue 3',
      'Pinia',
      'Axios',
      'Chart.js dan Vue Chart.js',
      'Tailwind CSS'
    ],
    features: [
      'Sistem ticketing & manajemen status keluhan pelanggan secara real-time',
      'Analisis AI otomatis untuk kategorisasi tiket, sentimen, dan tingkat urgensi',
      'Membuat draf balasan AI yang empatik berbasis konteks masalah',
      'Pemrosesan tugas latar belakang menggunakan Redis dan BullMQ',
      'Sistem Audit Log untuk melacak riwayat aktivitas admin & perubahan status tiket',
      'Validasi skema request & response yang ketat untuk keamanan data',
      'Dashboard admin interaktif',
    ],
    contribution: 'Merancang arsitektur backend Node.js & Express, menyusun prompt engineering untuk Groq API agar menghasilkan keluaran JSON terstruktur yang konsisten, mengimplementasikan skema database dengan Prisma ORM, serta membangun antarmuka dashboard admin yang responsif.',
    demoUrl: '', 
    repositoryUrl: 'https://github.com/zackyhermawan/ai-customer-support-ticketing-system' 
  },
  {
    slug: 'spk-penilaian-kinerja-karyawan-saw',
    title: 'Employee Performance Evaluation DSS',
    category: 'Fullstack Web Development',
    summary: 'Sistem Pendukung Keputusan berbasis metode SAW untuk evaluasi kinerja teknisi di Bengkel Las Berkah Logam.',
    description: 'Sistem Pendukung Keputusan (SPK) terintegrasi yang dibangun untuk membantu manajemen Bengkel Las Berkah Logam mengevaluasi kinerja karyawan Teknisi Las & Teknisi Fabrikasi secara objektif dan terstruktur. Menggunakan metode Simple Additive Weighting (SAW), sistem ini mengolah nilai mentah penilaian, mengkonversi nilai mentah ke rating scale, melakukan normalisasi matriks, dan menghasilkan pemeringkatan otomatis, dan memberikan rekomendasi pembinaan bagi karyawan yang memiliki nilai rendah pada kriteria.',
    thumbnail: '/images/projects/spk-penilaian/spk-penilaian.png',
    images: [
      '/images/projects/spk-penilaian/1.png',
      '/images/projects/spk-penilaian/2.png',
      '/images/projects/spk-penilaian/3.png',
      '/images/projects/spk-penilaian/4.png',
      '/images/projects/spk-penilaian/5.png',
      '/images/projects/spk-penilaian/6.png',
      '/images/projects/spk-penilaian/7.png',
    ],
    technologies: [
      'Vue 3',
      'Pinia',
      'Axios',
      'Chart.js dan Vue Chart.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'Docker & Docker Compose',
      'TypeScript',
      'PostgreSQL',
      'Prisma ORM',
      'Zod Validation',
      'JWT',
      'Bcrypt',
    ],
    features: [
      'Algoritma matematika metode SAW',
      'Manajemen dinamis data master',
      'Input nilai dengan inisialisasi default null untuk fleksibilitas penilaian owner',
      'Perhitungan pemeringkatan kinerja karyawan secara otomatis',
      'Sistem autentikasi dengan JWT & hashing password menggunakan Bcrypt'
    ],
    contribution: 'Merancang dan mengimplementasikan seluruh arsitektur backend & database menggunakan Node.js, Express, dan Prisma ORM, menyusun algoritma kalkulasi SAW, serta membangun antarmuka web dengan Vue.js.',
    demoUrl: '',
    repositoryUrl: 'https://github.com/zackyhermawan/spk-penilaian-kinerja-karyawan-menggunakan-metode-saw'
  },
]
