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
      backend: ["Java", "Spring Boot", "Spring Security", "RESTful APIs", "Hibernate/JPA", "Python", "FastAPI", "Node.js", "Express", "PHP"],
      frontend: ["React", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Bootstrap", "Thymeleaf"],
      database: ["MySQL", "PostgreSQL", "SQL"],
      tools: ["Git & GitHub", "Docker", "Postman", "Swagger", "Render", "Vercel", "PlatformIO"]
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
            },
            {
              id: 3,
              title: "Greeceri Store - Full-Stack E-Commerce (Final Project)",
              description: "Developed a complete full-stack e-commerce platform for fresh grocery shopping. Built the frontend with React + Vite and backend with Java Spring Boot. Integrated Xendit payment gateway and Google OAuth for seamless user authentication.",
              githubUrl: "https://github.com/Wannzh/greeceri-store-fe.git",
              liveDemoUrl: "https://www.greeceri.store/",
              techStack: ["React", "Vite", "Tailwind CSS", "Java Spring Boot", "PostgreSQL", "Xendit API", "Google OAuth"],
              category: "Full-Stack",
              featured: true
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
      {
        id: 3,
        title: "Greeceri Store - Full-Stack E-Commerce Platform",
        description: "A complete full-stack e-commerce platform for fresh grocery shopping. Built the frontend with React + Vite and backend with Java Spring Boot. Features include Xendit payment gateway integration and Google OAuth for seamless user authentication.",
        githubUrl: "https://github.com/Wannzh/greeceri-store-fe.git",
        liveDemoUrl: "https://www.greeceri.store/",
        techStack: ["React", "Vite", "Tailwind CSS", "Java Spring Boot", "PostgreSQL", "Xendit API", "Google OAuth", "REST API"],
        image: "fullstack",
        featured: true,
        category: "Full-Stack"
      },
      {
        id: 4,
        title: "SmartLED Controller - IoT Android App",
        description: "IoT MQTT Controller is an Android application for controlling ESP8266-based IoT devices (Wemos D1 Mini) using MQTT protocol. The app enables users to turn LEDs on/off in real-time and displays IoT device connection status.",
        githubUrl: "https://github.com/Wannzh/iot-mqtt-controller-android.git",
        techStack: ["Java", "Android Studio", "Eclipse Paho MQTT Client", "Material Components"],
        image: "mobile",
        featured: false,
        category: "Mobile"
      },
      {
        id: 5,
        title: "SmartLED Controller - ESP8266 Firmware",
        description: "IoT project for controlling LEDs using WEMOS D1 Mini (ESP8266-based) development board via MQTT protocol. Developed with PlatformIO and Arduino framework.",
        githubUrl: "https://github.com/Wannzh/iot-mqtt-controller-esp8266.git",
        techStack: ["ESP8266", "Arduino Framework", "PlatformIO", "PubSubClient", "MQTT"],
        image: "iot",
        featured: false,
        category: "IoT"
      },
      {
        id: 6,
        title: "QuickPOS - Freelance Point of Sale System",
        description: "Professional freelance project developed independently. A web-based Point of Sale (POS) application built using FastAPI with layered architecture. Uses .txt files as data storage (file-based storage) for lightweight deployment.",
        githubUrl: "https://github.com/Wannzh/pos-web-python.git",
        techStack: ["Python 3.10+", "FastAPI", "HTML", "CSS", "Jinja2 Templates", "Lucide Icons"],
        image: "fullstack",
        featured: false,
        category: "Full-Stack"
      },
      {
        id: 7,
        title: "DigiLib - Freelance Digital Library System",
        description: "Professional freelance project developed collaboratively with a 2-member team. A comprehensive digital library management system built as a final thesis project for SMA Negeri 2 Plus Sipirok. Features include user management, book catalog, borrowing/returning transactions, and digital reports. Responsible for backend architecture and API development.",
        githubUrl: "https://github.com/Wannzh/Perpustakaan.git",
        techStack: ["Java 21", "Spring Boot", "Spring Data JPA", "Spring Security", "MySQL", "Maven", "React.js", "Axios", "Tailwind CSS", "React Router DOM", "Vite"],
        image: "fullstack",
        featured: true,
        category: "Full-Stack"
      },
      {
        id: 8,
        title: "AnimeVault API - Anime Gallery REST Service",
        description: "A lightweight REST API providing anime information data in JSON format. Built with Express.js and designed for frontend consumption with clean endpoint structure.",
        githubUrl: "https://github.com/Wannzh/API-GALERI-ANIME.git",
        techStack: ["Node.js", "Express", "REST API", "JSON"],
        image: "backend",
        featured: false,
        category: "Backend"
      },
      {
        id: 9,
        title: "ShoeCatalog API - Product Catalog REST Service",
        description: "A simple REST API application serving shoe catalog data to clients. All product information is stored in local static files and distributed through HTTP endpoints.",
        githubUrl: "https://github.com/Wannzh/API-SEPATU.git",
        techStack: ["Node.js", "Express", "REST API", "JSON"],
        image: "backend",
        featured: false,
        category: "Backend"
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
        fileUrl: "*" // Ganti '*' dengan URL sertifikat Anda
      },
      {
        id: 2,
        title: "Data Structures & DBMS",
        issuer: "PUB Scholarship",
        year: "2024",
        description: "Training on advanced C data structures and MySQL database fundamentals.",
        type: "Training",
        fileUrl: "*" // Ganti '*' dengan URL sertifikat Anda
      },
      {
        id: 3,
        title: "Basic Web Development",
        issuer: "PUB Scholarship",
        year: "2024",
        description: "Training on HTML, CSS, and JavaScript for web fundamentals.",
        type: "Training",
        fileUrl: "*" // Ganti '*' dengan URL sertifikat Anda
      },
      {
        id: 4,
        title: "Git & GitHub",
        issuer: "PUB Scholarship",
        year: "2024",
        description: "Training on version control and collaborative workflows.",
        type: "Training",
        fileUrl: "*" // Ganti '*' dengan URL sertifikat Anda
      },
      {
        id: 5,
        title: "Java Fundamentals",
        issuer: "PUB Scholarship",
        year: "2025",
        description: "Training on Object-Oriented Programming (OOP) and core Java.",
        type: "Training",
        fileUrl: "*" // Ganti '*' dengan URL sertifikat Anda
      },
      {
        id: 6,
        title: "Advanced Java (Spring Boot)",
        issuer: "PUB Scholarship",
        year: "2025",
        description: "Training on building RESTful APIs with the Spring Boot framework.",
        type: "Training",
        fileUrl: "*" // Ganti '*' dengan URL sertifikat Anda
      },
      {
        id: 7,
        title: "React Fundamentals",
        issuer: "PUB Scholarship",
        year: "2025",
        description: "Training on modern frontend development using the React library.",
        type: "Training",
        fileUrl: "*" // Ganti '*' dengan URL sertifikat Anda
      },
      {
        id: 8,
        title: "Use Generative AI for Software Development (MDL-504)",
        issuer: "IBM SkillsBuild",
        year: "2025",
        description: "Bootcamp certification on leveraging Generative AI technologies for software development workflows and productivity enhancement.",
        type: "Bootcamp",
        fileUrl: "/assets/certificates/IBM_SkillsBuild_Generative_AI_for_Software_Development.pdf"
      },
      {
        id: 9,
        title: "IBM Granite Models for Software Development (MDL-567)",
        issuer: "IBM SkillsBuild",
        year: "2025",
        description: "Bootcamp certification on utilizing IBM Granite foundation models for software development tasks and applications.",
        type: "Bootcamp",
        fileUrl: "/assets/certificates/IBM_SkillsBuild_Granite_Models_for_Software_Development.pdf"
      },
      {
        id: 10,
        title: "Code Generation and Optimization Using IBM Granite (MDL-566)",
        issuer: "IBM SkillsBuild",
        year: "2025",
        description: "Bootcamp certification on code generation and optimization techniques using IBM Granite AI models.",
        type: "Bootcamp",
        fileUrl: "/assets/certificates/IBM_SkillsBuild_Code_Generation_and_Optimization.pdf"
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
      backend: ["Java", "Spring Boot", "Spring Security", "RESTful APIs", "Hibernate/JPA", "Python", "FastAPI", "Node.js", "Express", "PHP"],
      frontend: ["React", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Bootstrap", "Thymeleaf"],
      database: ["MySQL", "PostgreSQL", "SQL"],
      tools: ["Git & GitHub", "Docker", "Postman", "Swagger", "Render", "Vercel", "PlatformIO"]
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
            },
            {
              id: 3,
              title: "Greeceri Store - E-Commerce Full-Stack (UAS)",
              description: "Mengembangkan platform e-commerce full-stack lengkap untuk belanja sayuran dan bahan makanan segar. Membangun frontend dengan React + Vite dan backend dengan Java Spring Boot. Mengintegrasikan payment gateway Xendit dan Google OAuth untuk autentikasi pengguna yang praktis.",
              githubUrl: "https://github.com/Wannzh/greeceri-store-fe.git",
              liveDemoUrl: "https://www.greeceri.store/",
              techStack: ["React", "Vite", "Tailwind CSS", "Java Spring Boot", "PostgreSQL", "Xendit API", "Google OAuth"],
              category: "Full-Stack",
              featured: true
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
      {
        id: 3,
        title: "Greeceri Store - Platform E-Commerce Full-Stack",
        description: "Platform e-commerce full-stack lengkap untuk belanja sayuran dan bahan makanan segar. Membangun frontend dengan React + Vite dan backend dengan Java Spring Boot. Dilengkapi integrasi payment gateway Xendit dan Google OAuth untuk autentikasi pengguna yang praktis.",
        githubUrl: "https://github.com/Wannzh/greeceri-store-fe.git",
        liveDemoUrl: "https://www.greeceri.store/",
        techStack: ["React", "Vite", "Tailwind CSS", "Java Spring Boot", "PostgreSQL", "Xendit API", "Google OAuth", "REST API"],
        image: "fullstack",
        featured: true,
        category: "Full-Stack"
      },
      {
        id: 4,
        title: "SmartLED Controller - Aplikasi IoT Android",
        description: "IoT MQTT Controller adalah aplikasi Android untuk mengontrol perangkat IoT berbasis ESP8266 (Wemos D1 Mini) menggunakan protokol MQTT. Aplikasi ini memungkinkan pengguna menyalakan dan mematikan LED secara real-time serta menampilkan status koneksi perangkat IoT.",
        githubUrl: "https://github.com/Wannzh/iot-mqtt-controller-android.git",
        techStack: ["Java", "Android Studio", "Eclipse Paho MQTT Client", "Material Components"],
        image: "mobile",
        featured: false,
        category: "Mobile"
      },
      {
        id: 5,
        title: "SmartLED Controller - Firmware ESP8266",
        description: "Proyek IoT untuk mengontrol LED menggunakan papan development WEMOS D1 Mini (berbasis ESP8266) melalui protokol MQTT. Proyek ini dikembangkan dengan PlatformIO dan Arduino framework.",
        githubUrl: "https://github.com/Wannzh/iot-mqtt-controller-esp8266.git",
        techStack: ["ESP8266", "Arduino Framework", "PlatformIO", "PubSubClient", "MQTT"],
        image: "iot",
        featured: false,
        category: "IoT"
      },
      {
        id: 6,
        title: "QuickPOS - Sistem Point of Sale Freelance",
        description: "Proyek freelance profesional yang dikerjakan secara mandiri. Aplikasi Point of Sale (POS) berbasis web yang dibangun menggunakan FastAPI dengan arsitektur berlapis (layered architecture). Menggunakan file .txt sebagai data storage (file-based storage) untuk deployment yang ringan.",
        githubUrl: "https://github.com/Wannzh/pos-web-python.git",
        techStack: ["Python 3.10+", "FastAPI", "HTML", "CSS", "Jinja2 Templates", "Lucide Icons"],
        image: "fullstack",
        featured: false,
        category: "Full-Stack"
      },
      {
        id: 7,
        title: "DigiLib - Sistem Perpustakaan Digital Freelance",
        description: "Proyek freelance profesional yang dikembangkan secara kolaboratif dengan tim 2 orang. Sistem manajemen perpustakaan digital komprehensif yang dikembangkan sebagai penyelesaian Tugas Akhir untuk SMA Negeri 2 Plus Sipirok. Mencakup pengelolaan pengguna, katalog buku, transaksi peminjaman/pengembalian, dan laporan digital. Bertanggung jawab pada arsitektur backend dan pengembangan API.",
        githubUrl: "https://github.com/Wannzh/Perpustakaan.git",
        techStack: ["Java 21", "Spring Boot", "Spring Data JPA", "Spring Security", "MySQL", "Maven", "React.js", "Axios", "Tailwind CSS", "React Router DOM", "Vite"],
        image: "fullstack",
        featured: true,
        category: "Full-Stack"
      },
      {
        id: 8,
        title: "AnimeVault API - REST Service Galeri Anime",
        description: "REST API ringan yang menyediakan data informasi anime dalam format JSON. Dibangun dengan Express.js dan dirancang untuk konsumsi frontend dengan struktur endpoint yang bersih.",
        githubUrl: "https://github.com/Wannzh/API-GALERI-ANIME.git",
        techStack: ["Node.js", "Express", "REST API", "JSON"],
        image: "backend",
        featured: false,
        category: "Backend"
      },
      {
        id: 9,
        title: "ShoeCatalog API - REST Service Katalog Produk",
        description: "Aplikasi REST API sederhana yang menyajikan data katalog sepatu kepada klien. Seluruh informasi produk disimpan dalam file statis lokal dan didistribusikan melalui endpoint HTTP.",
        githubUrl: "https://github.com/Wannzh/API-SEPATU.git",
        techStack: ["Node.js", "Express", "REST API", "JSON"],
        image: "backend",
        featured: false,
        category: "Backend"
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
        fileUrl: "*" // Ganti '*' dengan URL sertifikat Anda
      },
      {
        id: 2,
        title: "Struktur Data & DBMS",
        issuer: "Beasiswa PUB",
        year: "2024",
        description: "Pelatihan struktur data C lanjutan dan fundamental database MySQL.",
        type: "Training",
        fileUrl: "*" // Ganti '*' dengan URL sertifikat Anda
      },
      {
        id: 3,
        title: "Pelatihan WEB Dasar",
        issuer: "Beasiswa PUB",
        year: "2024",
        description: "Pelatihan fundamental web dengan HTML, CSS, dan JavaScript.",
        type: "Training",
        fileUrl: "*" // Ganti '*' dengan URL sertifikat Anda
      },
      {
        id: 4,
        title: "Git & GitHub",
        issuer: "Beasiswa PUB",
        year: "2024",
        description: "Pelatihan version control dan alur kerja kolaboratif.",
        type: "Training",
        fileUrl: "*" // Ganti '*' dengan URL sertifikat Anda
      },
      {
        id: 5,
        title: "Java Fundamental",
        issuer: "Beasiswa PUB",
        year: "2025",
        description: "Pelatihan Object-Oriented Programming (OOP) dan inti Java.",
        type: "Training",
        fileUrl: "*" // Ganti '*' dengan URL sertifikat Anda
      },
      {
        id: 6,
        title: "Java Lanjutan (Spring Boot)",
        issuer: "Beasiswa PUB",
        year: "2025",
        description: "Pelatihan membangun RESTful API dengan framework Spring Boot.",
        type: "Training",
        fileUrl: "*" // Ganti '*' dengan URL sertifikat Anda
      },
      {
        id: 7,
        title: "React Fundamental",
        issuer: "Beasiswa PUB",
        year: "2025",
        description: "Pelatihan pengembangan frontend modern menggunakan library React.",
        type: "Training",
        fileUrl: "*" // Ganti '*' dengan URL sertifikat Anda
      },
      {
        id: 8,
        title: "Use Generative AI for Software Development (MDL-504)",
        issuer: "IBM SkillsBuild",
        year: "2025",
        description: "Sertifikasi bootcamp tentang pemanfaatan teknologi Generative AI untuk alur kerja dan peningkatan produktivitas pengembangan perangkat lunak.",
        type: "Bootcamp",
        fileUrl: "/assets/certificates/IBM_SkillsBuild_Generative_AI_for_Software_Development.pdf"
      },
      {
        id: 9,
        title: "IBM Granite Models for Software Development (MDL-567)",
        issuer: "IBM SkillsBuild",
        year: "2025",
        description: "Sertifikasi bootcamp tentang penggunaan model foundation IBM Granite untuk tugas dan aplikasi pengembangan perangkat lunak.",
        type: "Bootcamp",
        fileUrl: "/assets/certificates/IBM_SkillsBuild_Granite_Models_for_Software_Development.pdf"
      },
      {
        id: 10,
        title: "Code Generation and Optimization Using IBM Granite (MDL-566)",
        issuer: "IBM SkillsBuild",
        year: "2025",
        description: "Sertifikasi bootcamp tentang teknik pembuatan dan optimasi kode menggunakan model AI IBM Granite.",
        type: "Bootcamp",
        fileUrl: "/assets/certificates/ibm-code-generation-mdl566.pdf"
      }
    ]
  }
};

// Helper to get data by language
export function getPortfolioData(lang: string = 'en'): PortfolioData {
  return data[lang] || data['en'];
}
