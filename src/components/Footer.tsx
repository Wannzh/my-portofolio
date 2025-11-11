import { getPortfolioData } from '../mockData';
import { Github, Linkedin, Mail } from 'lucide-react';
// Removed outdated import
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const { personalInfo } = getPortfolioData(lang);

  return (
    <footer className="bg-[#1c1c1c] border-t border-[#333] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-[#b0b0b0] text-sm font-mono">
            © {currentYear} {personalInfo.name}. {t('footer.copyright')}
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e0e0e0] hover:text-[#ffffff] transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#e0e0e0] hover:text-[#ffffff] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-[#e0e0e0] hover:text-[#ffffff] transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Built with */}
          <div className="text-[#b0b0b0] text-sm font-mono">
            {t('footer.builtWith')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;