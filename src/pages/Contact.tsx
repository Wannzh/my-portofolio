import { getPortfolioData } from '../mockData';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';
// Removed outdated import
import { toast } from '../hooks/use-toast';
import { Toaster } from '../components/ui/toaster';
// CHANGED: Impor hook useTranslation
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const { personalInfo } = getPortfolioData(lang);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '' // Anti-spam honeypot field
  });

  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Honeypot check (anti-spam)
    if (formData.honeypot) {
      setStatusMessage(t('contact.spamDetected') || 'Spam detected');
      return;
    }

    // Trim and validate inputs
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      toast({
        title: t('contact.errorTitle') || 'Error',
        description: t('contact.errorEmpty') || 'Please fill all fields',
        duration: 5000
      });
      setStatusMessage(t('contact.errorEmpty') || 'Please fill all fields');
      return;
    }

    if (message.length < 10) {
      toast({
        title: t('contact.errorTitle') || 'Error',
        description: t('contact.errorMessageTooShort') || 'Message must be at least 10 characters',
        duration: 5000
      });
      setStatusMessage(t('contact.errorMessageTooShort') || 'Message must be at least 10 characters');
      return;
    }

    setIsLoading(true);
    setStatusMessage(t('contact.sending') || 'Sending...');

    try {
      // Send via Web3Forms
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE',
          name: name,
          email: email,
          message: message,
          subject: `New contact message from ${name}`,
          from_name: 'My Portfolio Contact Form',
          redirect: false,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: t('contact.successTitle'),
          description: t('contact.successDescription'),
          duration: 5000
        });
        setStatusMessage(t('contact.successDescription') || 'Message sent successfully!');
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
          honeypot: ''
        });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: t('contact.errorTitle') || 'Error',
        description: t('contact.errorSendFailed') || 'Failed to send message. Please try again or contact directly.',
        duration: 5000
      });
      setStatusMessage(t('contact.errorSendFailed') || 'Failed to send message');
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <Toaster />
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* CHANGED: Teks di-hardcode diganti */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#ffffff] mb-4 font-mono">
            {t('contact.title')}
          </h1>
          <div className="w-24 h-1 bg-[#ffffff] mx-auto mb-8" />
          {/* CHANGED: Teks di-hardcode diganti */}
          <p className="text-[#e0e0e0] text-lg max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              {/* CHANGED: Teks di-hardcode diganti */}
              <h2 className="text-2xl font-bold text-[#ffffff] mb-6 font-mono">{t('contact.contactInfo')}</h2>
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <div className="p-3 bg-[#2a2a2a] border border-[#444] rounded">
                <Mail size={24} className="text-[#ffffff]" />
              </div>
              <div>
                {/* CHANGED: Teks di-hardcode diganti */}
                <h3 className="text-lg font-semibold text-[#ffffff] mb-1">{t('contact.email')}</h3>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-[#e0e0e0] hover:text-[#ffffff] transition-colors duration-300"
                >
                  {personalInfo.email}
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <div className="p-3 bg-[#2a2a2a] border border-[#444] rounded">
                <MapPin size={24} className="text-[#ffffff]" />
              </div>
              <div>
                {/* CHANGED: Teks di-hardcode diganti */}
                <h3 className="text-lg font-semibold text-[#ffffff] mb-1">{t('contact.location')}</h3>
                <p className="text-[#e0e0e0]">{personalInfo.location}</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              {/* CHANGED: Teks di-hardcode diganti */}
              <h3 className="text-lg font-semibold text-[#ffffff] mb-4">{t('contact.connectWithMe')}</h3>
              <div className="flex gap-4">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#2a2a2a] border border-[#444] rounded hover:border-[#666] hover:bg-[#333] transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={24} className="text-[#e0e0e0] hover:text-[#ffffff]" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#2a2a2a] border border-[#444] rounded hover:border-[#666] hover:bg-[#333] transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} className="text-[#e0e0e0] hover:text-[#ffffff]" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#2a2a2a] border border-[#444] rounded-lg p-8"
          >
            {/* CHANGED: Teks di-hardcode diganti */}
            <h2 className="text-2xl font-bold text-[#ffffff] mb-6 font-mono">{t('contact.sendMessage')}</h2>
            
            {/* Status Message (aria-live for accessibility) */}
            {statusMessage && (
              <div
                aria-live="polite"
                role="status"
                className="mb-4 p-3 bg-[#1c1c1c] border border-[#666] rounded text-[#e0e0e0] text-sm"
              >
                {statusMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#e0e0e0] mb-2">
                  {/* CHANGED: Teks di-hardcode diganti */}
                  {t('contact.name')} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1c1c1c] border border-[#444] rounded text-[#e0e0e0] focus:outline-none focus:border-[#666] transition-colors duration-300"
                  // CHANGED: Teks di-hardcode diganti
                  placeholder={t('contact.namePlaceholder')}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#e0e0e0] mb-2">
                  {/* CHANGED: Teks di-hardcode diganti */}
                  {t('contact.email')} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1c1c1c] border border-[#444] rounded text-[#e0e0e0] focus:outline-none focus:border-[#666] transition-colors duration-300"
                  // CHANGED: Teks di-hardcode diganti
                  placeholder={t('contact.emailPlaceholder')}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#e0e0e0] mb-2">
                  {/* CHANGED: Teks di-hardcode diganti */}
                  {t('contact.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={5000}
                  rows={6}
                  className="w-full px-4 py-3 bg-[#1c1c1c] border border-[#444] rounded text-[#e0e0e0] focus:outline-none focus:border-[#666] transition-colors duration-300 resize-none"
                  // CHANGED: Teks di-hardcode diganti
                  placeholder={t('contact.messagePlaceholder')}
                />
                <div className="text-xs text-[#888] mt-1">
                  {formData.message.length} / 5000
                </div>
              </div>

              {/* Honeypot (hidden anti-spam field) */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-[#ffffff] text-[#1c1c1c] font-semibold rounded hover:bg-[#e0e0e0] transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {/* CHANGED: Teks di-hardcode diganti */}
                <span>{isLoading ? (t('contact.sending') || 'Sending...') : t('contact.sendBtn')}</span>
                {!isLoading && <Send size={18} />}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;