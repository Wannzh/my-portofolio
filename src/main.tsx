import React from 'react'
import ReactDOM from 'react-dom/client'

// --- TAMBAHKAN INI ---
// Impor file konfigurasi i18next Anda.
// Ini akan menjalankan kode inisialisasi (initReactI18next)
// (Ganti menjadi './i18n.js' jika Anda tidak mengubah namanya)
import './i18n.ts' 
// --------------------

import App from './App.tsx'
import './index.css' // Impor CSS Anda

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)