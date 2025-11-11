import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { getPortfolioData } from '../mockData';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const { personalInfo } = getPortfolioData(lang);
  const [showCVDropdown, setShowCVDropdown] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Industrial SVG Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.5" />
            </pattern>
            <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#ffffff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Metallic Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-[#1c1c1c] via-[#2a2a2a] to-[#1c1c1c] opacity-90" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4"
          >
            <span className="inline-block px-4 py-2 bg-[#2a2a2a] border border-[#444] rounded text-sm text-[#e0e0e0] font-mono">
              {t('hero.greeting')}
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold text-[#ffffff] mb-6 font-mono"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl text-[#e0e0e0] mb-8 max-w-4xl mx-auto"
          >
            {t('hero.title')}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base sm:text-lg text-[#b0b0b0] mb-12 max-w-2xl mx-auto"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-8 py-3 bg-[#ffffff] text-[#1c1c1c] font-semibold rounded hover:bg-[#e0e0e0] transition-colors duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              {t('hero.contactMe')}
              <Mail size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/projects')}
              className="px-8 py-3 border-2 border-[#e0e0e0] text-[#e0e0e0] font-semibold rounded hover:bg-[#2a2a2a] hover:border-[#ffffff] hover:text-[#ffffff] transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              {t('hero.viewProjects')}
              <ArrowRight size={18} />
            </motion.button>

            {/* Download CV Button with Dropdown */}
            <div className="relative w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowCVDropdown(!showCVDropdown)}
                className="px-8 py-3 border-2 border-[#666] text-[#e0e0e0] font-semibold rounded hover:bg-[#2a2a2a] hover:border-[#888] transition-all duration-300 flex items-center gap-2 w-full justify-center"
              >
                {t('hero.downloadCV')}
                <ChevronDown size={18} className={`transition-transform duration-300 ${showCVDropdown ? 'rotate-180' : ''}`} />
              </motion.button>
              {showCVDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full mt-2 w-full bg-[#2a2a2a] border border-[#444] rounded shadow-lg z-50 overflow-hidden"
                >
                  <a
                    href="/assets/cv-en.pdf"
                    download
                    onClick={() => setShowCVDropdown(false)}
                    className="flex px-6 py-3 text-[#e0e0e0] hover:bg-[#333] hover:text-[#ffffff] transition-colors duration-300 items-center gap-2"
                  >
                    <Download size={16} />
                    <span className="text-sm">{t('hero.downloadCVEn')}</span>
                  </a>
                  <a
                    href="/assets/cv-id.pdf"
                    download
                    onClick={() => setShowCVDropdown(false)}
                    className="flex px-6 py-3 text-[#e0e0e0] hover:bg-[#333] hover:text-[#ffffff] transition-colors duration-300 items-center gap-2 border-t border-[#444]"
                  >
                    <Download size={16} />
                    <span className="text-sm">{t('hero.downloadCVId')}</span>
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex gap-6 justify-center"
          >
            <motion.a
              whileHover={{ scale: 1.2, y: -3 }}
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e0e0e0] hover:text-[#ffffff] transition-colors duration-300"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -3 }}
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e0e0e0] hover:text-[#ffffff] transition-colors duration-300"
            >
              <Linkedin size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-[#e0e0e0] rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#e0e0e0] rounded-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;