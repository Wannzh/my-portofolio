# Contact Form Setup Guide - Web3Forms Integration

## Langkah Setup

### 1. Dapatkan Web3Forms Access Key
1. Kunjungi https://web3forms.com/ (gratis)
2. Signup / login
3. Buat akun atau login dengan akun yang ada
4. Copy **Access Key** dari dashboard Anda
5. Paste ke file `.env.local` di project root:
   ```
   VITE_WEB3FORMS_KEY=your_access_key_here
   ```
   Ganti `your_access_key_here` dengan key asli Anda.

### 2. Update Email Tujuan (Opsional)
Di `src/pages/Contact.tsx`, jika ingin mengubah penerima email:
- Default Web3Forms akan mengirim ke email yang terdaftar di akun Anda
- Untuk ubah, tambah `to_email: "your-email@example.com"` di body JSON pada handleSubmit

### 3. Test Form Locally
```bash
pnpm dev
```
- Buka http://localhost:5173/
- Navigate ke Contact section
- Isi form dan submit
- Seharusnya Anda dapat toast "Message Sent!" dan email dikirim ke inbox Anda

### 4. Deploy
- Pastikan `.env.local` **TIDAK** di-commit ke git (sudah ada di `.gitignore` biasanya)
- Di platform deploy (Vercel, Netlify, dsb), set environment variable:
  - Nama: `VITE_WEB3FORMS_KEY`
  - Value: Access key Anda (dari step 1)

## Fitur Implemented

✅ **Real email sending via Web3Forms (serverless)**
- Tidak perlu backend setup
- CORS-friendly
- Free tier tersedia

✅ **Loading state & disabled button saat sending**
- User tidak bisa double-submit

✅ **Success & error toasts**
- Bilingual (en/id)
- Auto-hide setelah 5 detik

✅ **Form validation**
- Min 10 characters untuk message
- Max 5000 characters (counter visible)
- Trim whitespace
- Required fields check

✅ **Aria-live status message**
- Accessibility: screen reader announce status

✅ **Honeypot field**
- Anti-spam: hidden field reject jika diisi bot

✅ **Message character counter**
- User lihat current/max length

## Troubleshooting

### "Failed to send message. Please try again"
- Cek apakah `VITE_WEB3FORMS_KEY` di `.env.local` benar
- Cek browser console untuk error details
- Pastikan internet connection aktif

### Email tidak sampai
- Cek folder Spam/Junk di inbox
- Login ke web3forms.com dashboard dan lihat submission history

### CORS Error
- Web3Forms support CORS jadi tidak perlu setup tambahan
- Pastikan `Content-Type: application/json` (sudah ada di code)

## Optional: Tambah reCAPTCHA

1. Daftar reCAPTCHA v3 di https://www.google.com/recaptcha/admin
2. Di Web3Forms dashboard, enable reCAPTCHA integration
3. Paste site key & secret
4. Web3Forms auto-handle verification

---

Selesai! Contact form Anda sekarang live dan siap menerima pesan dari pengunjung. 🚀
