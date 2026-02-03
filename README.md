<div align="center">

# 🌐 Personal Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live-Demo-1c1c1c?style=for-the-badge&logo=vercel)](https://portofolio.alwanfdh.my.id)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

[**View Live Demo →**](https://portofolio.alwanfdh.my.id)

</div>

---

## ✨ Features

- 🌍 **Multi-language Support** - English & Indonesian (i18n)
- 🌙 **Dark Theme** - Modern dark mode design
- 📱 **Responsive Design** - Works on all devices
- ⚡ **Fast Performance** - Built with Vite for optimal speed
- 🎨 **Smooth Animations** - Powered by Framer Motion
- 📄 **Downloadable CV** - Available in EN & ID versions
- 📜 **Certificate Viewer** - View & download certificates
- 📬 **Contact Form** - Integrated with EmailJS

---

## 🛠️ Tech Stack

| Category       | Technologies            |
| -------------- | ----------------------- |
| **Framework**  | React 18, TypeScript    |
| **Build Tool** | Vite 5                  |
| **Styling**    | Tailwind CSS, shadcn/ui |
| **Animation**  | Framer Motion           |
| **i18n**       | react-i18next           |
| **Icons**      | Lucide React            |
| **Email**      | EmailJS                 |
| **Deployment** | Netlify / Vercel        |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Wannzh/my-portofolio.git

# Navigate to project directory
cd my-portofolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build for Production

```bash
# Build the project
pnpm build

# Preview production build
pnpm preview
```

---

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui/          # shadcn/ui components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   └── Footer.tsx
├── pages/           # Page components
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Certificates.tsx
│   └── Contact.tsx
├── locales/         # i18n translations
│   ├── en.json
│   └── id.json
├── mockData.ts      # Portfolio data
├── App.tsx          # Main app component
└── main.tsx         # Entry point
```

---

## 📝 Customization

### Update Portfolio Data

Edit `src/mockData.ts` to update:

- Personal information
- Projects
- Skills
- Certificates
- Education

### Update Translations

Edit files in `src/locales/`:

- `en.json` - English translations
- `id.json` - Indonesian translations

### Add Certificates

1. Add PDF files to `public/assets/certificates/`
2. Update `mockData.ts` with certificate info

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

**Made with ❤️ by [Muhamad Alwan Fadhlurrohman](https://portofolio.alwanfdh.my.id)**

</div>
