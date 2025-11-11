import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center"
        >
          {/* Subtle industrial monochrome SVG */}
          <svg
            width="320"
            height="240"
            viewBox="0 0 320 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="opacity-80"
          >
            <rect x="8" y="8" width="304" height="224" rx="12" stroke="#2b2b2b" fill="#121212" />
            <g stroke="#3b3b3b" strokeWidth="2" opacity="0.9">
              <path d="M32 200h256" />
              <path d="M32 168h256" />
              <path d="M32 136h256" />
            </g>
            <g fill="#2f2f2f" stroke="#444" strokeWidth="1">
              <rect x="48" y="48" width="64" height="40" rx="6" />
              <rect x="144" y="48" width="128" height="24" rx="6" />
              <rect x="48" y="104" width="224" height="16" rx="4" />
            </g>
            <g transform="translate(48,160)" fill="#222" opacity="0.95">
              <rect x="0" y="0" width="36" height="24" rx="4" stroke="#444" />
              <rect x="52" y="0" width="36" height="24" rx="4" stroke="#444" />
              <rect x="104" y="0" width="88" height="24" rx="4" stroke="#444" />
            </g>
            <circle cx="272" cy="72" r="18" fill="#232323" stroke="#444" />
            <g stroke="#555" strokeWidth="1.2">
              <path d="M256 60 l10 -12" />
              <path d="M288 84 l6 8" />
            </g>
          </svg>
        </motion.div>

        {/* Content */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-4 font-mono"
          >
            {t('notFound.title', 'Page not found')}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-[#e0e0e0] mb-6"
          >
            {t('notFound.description', "The page you're looking for doesn't exist or is not available.")}
          </motion.p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Link
              to="/"
              className="px-4 py-2 bg-white text-[#1c1c1c] font-semibold rounded hover:bg-[#e6e6e6] transition-colors"
            >
              {t('nav.home', 'Home')}
            </Link>

            <Link
              to="/about"
              className="px-4 py-2 bg-transparent border border-[#333] text-[#e0e0e0] rounded hover:bg-[#222] transition-colors"
            >
              {t('nav.about', 'About')}
            </Link>

            <Link
              to="/projects"
              className="px-4 py-2 bg-transparent border border-[#333] text-[#e0e0e0] rounded hover:bg-[#222] transition-colors"
            >
              {t('projects.title', 'Projects')}
            </Link>

            <Link
              to="/certificates"
              className="px-4 py-2 bg-transparent border border-[#333] text-[#e0e0e0] rounded hover:bg-[#222] transition-colors"
            >
              {t('certificates.title', 'Certificates')}
            </Link>

            <Link
              to="/contact"
              className="px-4 py-2 bg-transparent border border-[#333] text-[#e0e0e0] rounded hover:bg-[#222] transition-colors"
            >
              {t('nav.contact', 'Contact')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
