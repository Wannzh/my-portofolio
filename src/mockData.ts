// Multi-language mock data for the portfolio

// Types are now imported from src/types/portfolio.d.ts
import type { PortfolioData, PersonalInfo, Education, Organization, Skills, Project, Certificate, Training, PubScholarship } from './types/portfolio.d.ts';

// Re-export types for easier imports
export type { PortfolioData, PersonalInfo, Education, Organization, Skills, Project, Certificate, Training, PubScholarship };

const data: Record<string, PortfolioData> = {
  en: {
    personalInfo: {
      name: "Muhamad Alwan Fadhlurrohman",
      title: "Fullstack Developer — Java Spring Boot & React.js Enthusiast",
      email: "contact@alwanfdh.my.id",
      github: "https://github.com/Wannzh",
      linkedin: "https://www.linkedin.com/in/muhamad-alwan-fadhlurrohman-238034315/",
      location: "Bandung, Jawa Barat, Indonesia"
    },
    education: [
      {
        id: 1,
        institution: "PASIM Nasional University Bandung",
        degree: "Bachelor of Informatics Engineering",
        field: "GPA 3.66/4.00",
        startDate: "2023-09",
        endDate: "Present",
        description: "Recipient of the Sustainable Community Empowerment (PUB) Scholarship. 3-Year Acceleration Program."
      }
    ],
    organizations: [
      {
        id: 1,
        name: "PUB Scholarship",
        role: "Head of Recruitment (PPMB)",
        startDate: "2024-12",
        endDate: "2025-09",
        description: "Oversaw the entire recruitment process for PUB scholarship new students (batch 2025), including screening, technical tests, and interviews."
      },
      {
        id: 2,
        name: "PUB Scholarship",
        role: "Head of Education & Training Division",
        startDate: "2024-09",
        endDate: "2025-09",
        description: "Led and managed programming training sessions. Served as an instructor for Algorithm Logic, DBMS, and Web Fundamentals."
      }
    ],
    skills: {
      backend: ["Java", "Spring Boot", "Spring Security", "RESTful APIs", "Hibernate/JPA", "PHP"],
      frontend: ["React", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Bootstrap", "Thymeleaf"],
      database: ["MySQL", "PostgreSQL", "SQL"],
      tools: ["Git & GitHub", "Docker", "Postman", "Swagger", "Render", "Vercel"]
    },
    pubScholarship: {
      title: "PUB (Sustainable Community Empowerment) Scholarship",
      description: "A comprehensive scholarship program that guided my training from basic to advanced programming, covering multiple languages and frameworks with hands-on projects.",
      trainings: [
        {
          id: 1,
          title: "Algorithm Logic (C Language)",
          language: "en",
          startDate: "2023-09",
          endDate: "2024-01",
          description: "Introduction to programming fundamentals, control structures, and basic algorithms using C.",
          projects: [
            {
              id: 101,
              title: "GedeClimb Reserve - Hiking Ticket Booking App (CLI)",
              description: "Developed a command-line hiking ticket booking application using C language. Implemented data persistence using .txt files.",
              githubUrl: "https://github.com/Wannzh/GedeClimb-Reserve-CLI",
              techStack: ["C", "File Handling (TXT)"],
              category: "Backend",
              featured: false
            }
          ]
        },
        {
          id: 2,
          title: "Data Structures & DBMS (C & MySQL)",
          language: "en",
          startDate: "2024-01",
          endDate: "2024-05",
          description: "Advanced concepts including linked lists, stacks, queues, trees, and database design with MySQL.",
          projects: []
        },
        {
          id: 3,
          title: "Basic Web Development (HTML, CSS, JS)",
          language: "en",
          startDate: "2024-05",
          endDate: "2024-09",
          description: "Front-end fundamentals including responsive design, DOM manipulation, and asynchronous data handling.",
          projects: [
            {
              id: 102,
              title: "WanFlix - Movie List Web App",
              description: "Built a movie list web app integrated with the TMDB external API. Practiced asynchronous data handling and responsive UI design.",
              githubUrl: "https://github.com/Wannzh/PROJECT-WISHLIST-MOVIE.git",
              liveDemoUrl: "https://wanflix.pages.dev/",
              techStack: ["HTML5", "CSS3", "JavaScript", "TMDB API"],
              category: "Frontend",
              featured: false
            }
          ]
        },
        {
          id: 4,
          title: "Git & GitHub",
          language: "en",
          startDate: "2024-10",
          endDate: "2024-10",
          description: "Version control with Git and collaborative workflows using GitHub.",
          projects: []
        },
        {
          id: 5,
          title: "Java Fundamentals",
          language: "en",
          startDate: "2024-09",
          endDate: "2025-01",
          description: "Object-oriented programming (OOP) principles, collections framework, and core Java concepts.",
          projects: [
            {
              id: 2,
              title: "GedeClimb Reserve - Hiking Ticket Booking Web App",
              description: "Redeveloped the CLI project into a full-stack web application using Java Spring Boot and Thymeleaf. Implemented login, booking management, and MySQL database integration.",
              githubUrl: "https://github.com/Wannzh/GedeClimb-Reserve-WebApp",
              techStack: ["Java", "Spring Boot", "HTML5", "JavaScript", "MySQL", "Thymeleaf", "Bootstrap CSS"],
              image: "fullstack",
              featured: true,
              category: "Full-Stack"
            }
          ]
        },
        {
          id: 6,
          title: "Advanced Java (Spring Boot)",
          language: "en",
          startDate: "2025-01",
          endDate: "2025-04",
          description: "Building RESTful APIs, Spring Security, and data persistence with Hibernate/JPA.",
          projects: [
            {
              id: 103,
              title: "Loan Management API (Midterm Project)",
              description: "Built a RESTful API for managing customers, loans, and payments independently within 7 days. Implemented business logic for loan statuses.",
              githubUrl: "https://github.com/Wannzh/Loan-Management-API",
              techStack: ["Java", "Spring Boot", "Hibernate/JPA", "MySQL", "REST API", "Swagger"],
              category: "Backend",
              featured: false
            },
            {
              id: 104,
              title: "LocoBooking API (Final Project)",
              description: "Collaborated in a 3-member team to design and build a RESTful train ticket booking API. Responsible for data management, booking reports, and route management.",
              githubUrl: "https://github.com/Wannzh/LocoBooking-API",
              techStack: ["Java", "Spring Boot", "Spring Security", "Hibernate/JPA", "MySQL", "REST API", "Swagger"],
              category: "Backend",
              featured: false
            }
          ]
        },
        {
          id: 7,
          title: "React Fundamentals",
          language: "en",
          startDate: "2025-08",
          endDate: "2025-12",
          description: "Component-based architecture, state management with React Hooks, and modern UI development with Vite.",
          projects: [
            {
              id: 105,
              title: "Mobile Store (Midterm Project)",
              description: "Developed a single-page e-commerce app using React Hooks for state management and applied component-based architecture.",
              githubUrl: "https://github.com/Wannzh/uts-react-fundamental.git",
              liveDemoUrl: "https://mobile-store.alwanfdh.my.id",
              techStack: ["React", "Vite", "JavaScript", "Tailwind CSS"],
              category: "Frontend",
              featured: false
            }
          ]
        }
      ]
    },
    projects: [
      {
        id: 1,
        title: "ZakatNow - Full-Stack Zakat Management Web App",
        description: "Developed a full-stack zakat and donation management web application with JWT-based authentication and Role-Based Access Control (RBAC). Implemented Xendit Payment Gateway (sandbox) and automated email notifications using JavaMail.",
        githubUrl: "https://github.com/Wannzh/zakatNow-app.git",
        liveDemoUrl: "https://zakatnow.alwanfdh.my.id/",
        techStack: ["Java Spring Boot", "React", "PostgreSQL", "Tailwind CSS", "JavaMail", "Xendit API", "JWT", "Render", "Vercel"],
        image: "fullstack",
        featured: true,
        category: "Full-Stack"
      },
      {
        id: 2,
        title: "GedeClimb Reserve - Hiking Ticket Booking Web App",
        description: "Redeveloped the CLI project into a full-stack web application using Java Spring Boot and Thymeleaf. Implemented login, booking management, and MySQL database integration.",
        githubUrl: "https://github.com/Wannzh/GedeClimb-Reserve-WebApp",
        techStack: ["Java", "Spring Boot", "HTML5", "JavaScript", "MySQL", "Thymeleaf", "Bootstrap CSS"],
        image: "fullstack",
        featured: true,
        category: "Full-Stack"
      },
      
    ],
    certificates: [
      {
        id: 1,
        title: "Algorithm Logic (C Language)",
        issuer: "PUB Scholarship",
        year: "2024",
        description: "Training on programming fundamentals and basic algorithms using C.",
        type: "Training",
        fileUrl: "#" // Ganti '#' dengan URL sertifikat Anda
      },
      {
        id: 2,
        title: "Data Structures & DBMS",
        issuer: "PUB Scholarship",
        year: "2024",
        description: "Training on advanced C data structures and MySQL database fundamentals.",
        type: "Training",
        fileUrl: "#" // Ganti '#' dengan URL sertifikat Anda
      },
      {
        id: 3,
        title: "Basic Web Development",
        issuer: "PUB Scholarship",
        year: "2024",
        description: "Training on HTML, CSS, and JavaScript for web fundamentals.",
        type: "Training",
        fileUrl: "#" // Ganti '#' dengan URL sertifikat Anda
      },
      {
        id: 4,
        title: "Git & GitHub",
        issuer: "PUB Scholarship",
        year: "2024",
        description: "Training on version control and collaborative workflows.",
        type: "Training",
        fileUrl: "#" // Ganti '#' dengan URL sertifikat Anda
      },
      {
        id: 5,
        title: "Java Fundamentals",
        issuer: "PUB Scholarship",
        year: "2025",
        description: "Training on Object-Oriented Programming (OOP) and core Java.",
        type: "Training",
        fileUrl: "#" // Ganti '#' dengan URL sertifikat Anda
      },
      {
        id: 6,
        title: "Advanced Java (Spring Boot)",
        issuer: "PUB Scholarship",
        year: "2025",
        description: "Training on building RESTful APIs with the Spring Boot framework.",
        type: "Training",
        fileUrl: "#" // Ganti '#' dengan URL sertifikat Anda
      },
      {
        id: 7,
        title: "React Fundamentals",
        issuer: "PUB Scholarship",
        year: "2025",
        description: "Training on modern frontend development using the React library.",
        type: "Training",
        fileUrl: "#" // Ganti '#' dengan URL sertifikat Anda
      }
    ]
  },
  id: {
    personalInfo: {
      name: "Muhamad Alwan Fadhlurrohman",
      title: "Fullstack Developer — Ahli Java Spring Boot & React.js",
      email: "contact@alwanfdh.my.id",
      github: "https://github.com/Wannzh",
      linkedin: "https://www.linkedin.com/in/muhamad-alwan-fadhlurrohman-238034315/",
      location: "Bandung, Jawa Barat, Indonesia"
    },
    education: [
      {
        id: 1,
        institution: "Universitas Nasional PASIM Bandung",
        degree: "S1 Teknik Informatika",
        field: "IPK 3.66/4.00",
        startDate: "2023-09",
        endDate: "Sekarang",
        description: "Penerima Beasiswa Pemberdayaan Umat Berkelanjutan (PUB). Program Akselerasi 3 Tahun."
      }
    ],
    organizations: [
      {
        id: 1,
        name: "Beasiswa PUB",
        role: "Ketua PPMB",
        startDate: "2024-12",
        endDate: "2025-09",
        description: "Bertanggung jawab dalam keseluruhan proses rekrutmen mahasiswa penerima beasiswa PUB angkatan 2025, termasuk seleksi berkas, tes teknis, dan wawancara."
      },
      {
        id: 2,
        name: "Beasiswa PUB",
        role: "Kepala Divisi Pendidikan & Pelatihan",
        startDate: "2024-09",
        endDate: "2025-09",
        description: "Memimpin dan mengelola pelatihan pemrograman. Bertugas sebagai instruktur Logika Algoritma, DBMS, dan Web Dasar."
      }
    ],
    skills: {
      backend: ["Java", "Spring Boot", "Spring Security", "RESTful APIs", "Hibernate/JPA", "PHP"],
      frontend: ["React", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Bootstrap", "Thymeleaf"],
      database: ["MySQL", "PostgreSQL", "SQL"],
      tools: ["Git & GitHub", "Docker", "Postman", "Swagger", "Render", "Vercel"]
    },
    pubScholarship: {
      title: "Beasiswa PUB (Pemberdayaan Masyarakat Berkelanjutan)",
      description: "Program beasiswa komprehensif yang membimbing pelatihan saya dari pemrograman dasar hingga lanjutan, mencakup berbagai bahasa dan framework dengan proyek langsung.",
      trainings: [
        {
          id: 1,
          title: "Logika Algoritma (Bahasa C)",
          language: "id",
          startDate: "2023-09",
          endDate: "2024-01",
          description: "Pengenalan fundamental pemrograman, struktur kontrol, dan algoritma dasar menggunakan C.",
          projects: [
            {
              id: 101,
              title: "GedeClimb Reserve - Aplikasi Booking Pendakian (CLI)",
              description: "Mengembangkan aplikasi pemesanan tiket pendakian berbasis CLI menggunakan bahasa C. Mengimplementasikan penyimpanan data menggunakan file .txt sebagai database sederhana.",
              githubUrl: "https://github.com/Wannzh/GedeClimb-Reserve-CLI",
              techStack: ["C", "File Handling (TXT)"],
              category: "Backend",
              featured: false
            }
          ]
        },
        {
          id: 2,
          title: "Struktur Data & DBMS (C & MySQL)",
          language: "id",
          startDate: "2024-01",
          endDate: "2024-05",
          description: "Konsep lanjutan struktur data C dan dasar-dasar perancangan database dengan MySQL.",
          projects: []
        },
        {
          id: 3,
          title: "Pelatihan WEB Dasar (HTML, CSS, JS)",
          language: "id",
          startDate: "2024-05",
          endDate: "2024-09",
          description: "Fundamental frontend termasuk desain responsif, manipulasi DOM, dan data asinkron.",
          projects: [
            {
              id: 102,
              title: "WanFlix - Web List Film",
              description: "Mengembangkan aplikasi web wishlist film dengan integrasi API eksternal TMDB. Menerapkan manipulasi DOM dan desain responsif.",
              githubUrl: "https://github.com/Wannzh/PROJECT-WISHLIST-MOVIE.git",
              liveDemoUrl: "https://wanflix.pages.dev/",
              techStack: ["HTML5", "CSS3", "JavaScript", "TMDB API"],
              category: "Frontend",
              featured: false
            }
          ]
        },
        {
          id: 4,
          title: "Git & GitHub",
          language: "id",
          startDate: "2024-10",
          endDate: "2024-10",
          description: "Version control dengan Git dan alur kerja kolaboratif menggunakan GitHub.",
          projects: []
        },
        {
          id: 5,
          title: "Java Fundamental",
          language: "id",
          startDate: "2024-09",
          endDate: "2025-01",
          description: "Prinsip-prinsip Object-Oriented Programming (OOP) dan konsep inti Java.",
          projects: [
            {
              id: 2,
              title: "GedeClimb Reserve - Aplikasi Web Booking Pendakian",
              description: "Mengembangkan kembali proyek versi CLI menjadi aplikasi web full-stack dengan Java Spring Boot dan Thymeleaf. Mengimplementasikan fitur login, manajemen data pemesanan, dan integrasi database MySQL.",
              githubUrl: "https://github.com/Wannzh/GedeClimb-Reserve-WebApp",
              techStack: ["Java", "Spring Boot", "HTML5", "JavaScript", "MySQL", "Thymeleaf", "Bootstrap CSS"],
              image: "fullstack",
              featured: true,
              category: "Full-Stack"
            }
          ]
        },
        {
          id: 6,
          title: "Java Lanjutan (Spring Boot)",
          language: "id",
          startDate: "2025-01",
          endDate: "2025-04",
          description: "Membangun RESTful API, Spring Security, dan persistensi data dengan Hibernate/JPA.",
          projects: [
            {
              id: 103,
              title: "Loan Management API (UTS)",
              description: "Membangun RESTful API untuk mengelola data nasabah, pinjaman, dan pembayaran dalam waktu 7 hari. Menerapkan logika bisnis seperti status pinjaman.",
              githubUrl: "https://github.com/Wannzh/Loan-Management-API",
              techStack: ["Java", "Spring Boot", "Hibernate/JPA", "MySQL", "REST API", "Swagger"],
              category: "Backend",
              featured: false
            },
            {
              id: 104,
              title: "LocoBooking API (UAS)",
              description: "Berkolaborasi dengan 3 anggota tim dalam merancang dan membangun API pemesanan tiket kereta. Bertanggung jawab pada manajemen data, laporan, tiket, dan rute.",
              githubUrl: "https://github.com/Wannzh/LocoBooking-API",
              techStack: ["Java", "Spring Boot", "Spring Security", "Hibernate/JPA", "MySQL", "REST API", "Swagger"],
              category: "Backend",
              featured: false
            }
          ]
        },
        {
          id: 7,
          title: "React Fundamental",
          language: "id",
          startDate: "2025-08",
          endDate: "2025-12",
          description: "Arsitektur berbasis komponen, manajemen state dengan React Hooks, dan pengembangan UI modern dengan Vite.",
          projects: [
            {
              id: 105,
              title: "Mobile Store (UTS)",
              description: "Membangun aplikasi e-commerce satu halaman dengan pengelolaan state menggunakan React Hooks dan menerapkan konsep component-based development.",
              githubUrl: "https://github.com/Wannzh/uts-react-fundamental.git",
              liveDemoUrl: "https://mobile-store.alwanfdh.my.id",
              techStack: ["React", "Vite", "JavaScript", "Tailwind CSS"],
              category: "Frontend",
              featured: false
            }
          ]
        }
      ]
    },
    projects: [
      {
        id: 1,
        title: "ZakatNow - Aplikasi Pengelolaan Zakat Full-Stack",
        description: "Mengembangkan aplikasi web full-stack untuk pengelolaan zakat dan donasi dengan sistem autentikasi berbasis JWT dan Role-Based Access Control (RBAC). Mengimplementasikan Payment Gateway Xendit (sandbox) dan notifikasi email otomatis.",
        githubUrl: "https://github.com/Wannzh/zakatNow-app.git",
        liveDemoUrl: "https://zakatnow.alwanfdh.my.id/",
        techStack: ["Java Spring Boot", "React", "PostgreSQL", "Tailwind CSS", "JavaMail", "Xendit API", "JWT", "Render", "Vercel"],
        image: "fullstack",
        featured: true,
        category: "Full-Stack"
      },
      {
        id: 2,
        title: "GedeClimb Reserve - Aplikasi Web Booking Pendakian",
        description: "Mengembangkan kembali proyek versi CLI menjadi aplikasi web full-stack dengan Java Spring Boot dan Thymeleaf. Mengimplementasikan fitur login, manajemen data pemesanan, dan integrasi database MySQL.",
        githubUrl: "https://github.com/Wannzh/GedeClimb-Reserve-WebApp",
        techStack: ["Java", "Spring Boot", "HTML5", "JavaScript", "MySQL", "Thymeleaf", "Bootstrap CSS"],
        image: "fullstack",
        featured: true,
        category: "Full-Stack"
      },
      
    ],
    certificates: [
      {
        id: 1,
        title: "Logika Algoritma (Bahasa C)",
        issuer: "Beasiswa PUB",
        year: "2024",
        description: "Pelatihan fundamental pemrograman dan algoritma dasar menggunakan C.",
        type: "Training",
        fileUrl: "#" // Ganti '#' dengan URL sertifikat Anda
      },
      {
        id: 2,
        title: "Struktur Data & DBMS",
        issuer: "Beasiswa PUB",
        year: "2024",
        description: "Pelatihan struktur data C lanjutan dan fundamental database MySQL.",
        type: "Training",
        fileUrl: "#" // Ganti '#' dengan URL sertifikat Anda
      },
      {
        id: 3,
        title: "Pelatihan WEB Dasar",
        issuer: "Beasiswa PUB",
        year: "2024",
        description: "Pelatihan fundamental web dengan HTML, CSS, dan JavaScript.",
        type: "Training",
        fileUrl: "#" // Ganti '#' dengan URL sertifikat Anda
      },
      {
        id: 4,
        title: "Git & GitHub",
        issuer: "Beasiswa PUB",
        year: "2024",
        description: "Pelatihan version control dan alur kerja kolaboratif.",
        type: "Training",
        fileUrl: "#" // Ganti '#' dengan URL sertifikat Anda
      },
      {
        id: 5,
        title: "Java Fundamental",
        issuer: "Beasiswa PUB",
        year: "2025",
        description: "Pelatihan Object-Oriented Programming (OOP) dan inti Java.",
        type: "Training",
        fileUrl: "#" // Ganti '#' dengan URL sertifikat Anda
      },
      {
        id: 6,
        title: "Java Lanjutan (Spring Boot)",
        issuer: "Beasiswa PUB",
        year: "2025",
        description: "Pelatihan membangun RESTful API dengan framework Spring Boot.",
        type: "Training",
        fileUrl: "#" // Ganti '#' dengan URL sertifikat Anda
      },
      {
        id: 7,
        title: "React Fundamental",
        issuer: "Beasiswa PUB",
        year: "2025",
        description: "Pelatihan pengembangan frontend modern menggunakan library React.",
        type: "Training",
        fileUrl: "#" // Ganti '#' dengan URL sertifikat Anda
      }
    ]
  }
};

// Helper to get data by language
export function getPortfolioData(lang: string = 'en'): PortfolioData {
  return data[lang] || data['en'];
}
