import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.certificates'), path: '/certificates' },
    { name: t('nav.contact'), path: '/contact' }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShowLangMenu(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1c1c1c]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <Link to="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold text-[#ffffff] font-mono"
            >
              &lt;MAF /&gt;
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative group"
              >
                <span
                  className={`text-sm font-medium transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-[#ffffff]'
                      : 'text-[#e0e0e0] hover:text-[#ffffff]'
                  }`}
                >
                  {link.name}
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#ffffff]"
                  initial={{ width: 0 }}
                  animate={{ width: isActive(link.path) ? '100%' : 0 }}
                  transition={{ duration: 0.3 }}
                />
                {!isActive(link.path) && (
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ffffff] group-hover:w-full transition-all duration-300" />
                )}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-2 px-3 py-2 bg-[#2a2a2a] border border-[#444] rounded hover:border-[#666] transition-colors duration-300"
              >
                <Globe size={16} className="text-[#e0e0e0]" />
                <span className="text-sm text-[#e0e0e0] font-mono">{i18n.language.toUpperCase()}</span>
              </button>
              {showLangMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-40 bg-[#2a2a2a] border border-[#444] rounded shadow-lg z-50"
                >
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`w-full px-4 py-3 text-left text-sm transition-colors duration-300 flex items-center gap-3 ${
                      i18n.language === 'en' ? 'bg-[#333] text-[#ffffff]' : 'text-[#e0e0e0] hover:bg-[#333]'
                    }`}
                  >
                    <span className="text-lg">🇬🇧</span>
                    <span>English</span>
                  </button>
                  <button
                    onClick={() => changeLanguage('id')}
                    className={`w-full px-4 py-3 text-left text-sm transition-colors duration-300 flex items-center gap-3 ${
                      i18n.language === 'id' ? 'bg-[#333] text-[#ffffff]' : 'text-[#e0e0e0] hover:bg-[#333]'
                    }`}
                  >
                    <span className="text-lg">🇮🇩</span>
                    <span>Indonesia</span>
                  </button>
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#e0e0e0] hover:text-[#ffffff] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#1c1c1c]/98 backdrop-blur-md border-t border-[#333]"
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 rounded transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'bg-[#2a2a2a] text-[#ffffff]'
                    : 'text-[#e0e0e0] hover:bg-[#2a2a2a] hover:text-[#ffffff]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* Mobile Language Switcher */}
            <div className="pt-3 border-t border-[#333]">
              <p className="px-4 py-2 text-xs text-[#b0b0b0] font-mono">Language</p>
              <div className="flex gap-2">
                <button
                  onClick={() => {
                    changeLanguage('en');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex-1 px-4 py-2 rounded transition-colors duration-300 flex items-center justify-center gap-2 ${
                    i18n.language === 'en' ? 'bg-[#2a2a2a] text-[#ffffff]' : 'text-[#e0e0e0] hover:bg-[#2a2a2a]'
                  }`}
                >
                  <span className="text-lg">🇬🇧</span>
                  <span className="text-sm">EN</span>
                </button>
                <button
                  onClick={() => {
                    changeLanguage('id');
                    setIsMobileMenuOpen(false);
                  }}
                  className={`flex-1 px-4 py-2 rounded transition-colors duration-300 flex items-center justify-center gap-2 ${
                    i18n.language === 'id' ? 'bg-[#2a2a2a] text-[#ffffff]' : 'text-[#e0e0e0] hover:bg-[#2a2a2a]'
                  }`}
                >
                  <span className="text-lg">🇮🇩</span>
                  <span className="text-sm">ID</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;