import { getPortfolioData } from '../mockData';
import type { Education, Organization, Training, Project } from '../mockData';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, Code, BookOpen, ExternalLink, Github, Download, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const { education, organizations, skills, pubScholarship } = getPortfolioData(lang);
  const [showCVDropdown, setShowCVDropdown] = useState(false);
  const currentLang = lang;

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
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#ffffff] mb-4 font-mono">
            {t('about.title')}
          </h1>
          <div className="w-24 h-1 bg-[#ffffff] mx-auto mb-8" />

          {/* Download CV Button */}
          <div className="relative inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCVDropdown(!showCVDropdown)}
              className="px-8 py-3 border-2 border-[#666] text-[#e0e0e0] font-semibold rounded hover:bg-[#2a2a2a] hover:border-[#888] transition-all duration-300 flex items-center gap-2"
            >
              {t('about.downloadCV')}
              <ChevronDown size={18} className={`transition-transform duration-300 ${showCVDropdown ? 'rotate-180' : ''}`} />
            </motion.button>
            {showCVDropdown && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full mt-2 left-0 right-0 bg-[#2a2a2a] border border-[#444] rounded shadow-lg z-50 overflow-hidden"
              >
                <a
                  href="/assets/cv-en.pdf" // Pastikan path ini benar
                  download
                  onClick={() => setShowCVDropdown(false)}
                  className="flex px-6 py-3 text-[#e0e0e0] hover:bg-[#333] hover:text-[#ffffff] transition-colors duration-300 items-center gap-2"
                >
                  <Download size={16} />
                  <span className="text-sm">{t('hero.downloadCVEn')}</span>
                </a>
                <a
                  href="/assets/cv-id.pdf" // Pastikan path ini benar
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

        {/* Education */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <GraduationCap size={32} className="text-[#ffffff]" />
            <h2 className="text-3xl font-bold text-[#ffffff] font-mono">{t('about.education')}</h2>
          </motion.div>
          <div className="space-y-6">
            {education.map((edu: Education) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="bg-[#2a2a2a] border border-[#444] rounded-lg p-6 hover:border-[#666] transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-[#ffffff] mb-2">{edu.degree}</h3>
                <p className="text-[#e0e0e0] mb-2">{edu.institution}</p>
                <p className="text-[#b0b0b0] text-sm mb-2">
                  {/* CHANGED: Gunakan 'currentLang' untuk format tanggal dinamis */}
                  {new Date(edu.startDate).toLocaleDateString(currentLang, { month: 'short', year: 'numeric' })} -{' '}
                  {new Date(edu.endDate).toLocaleDateString(currentLang, { month: 'short', year: 'numeric' })}
                </p>
                <p className="text-[#e0e0e0]">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Organizations */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <Users size={32} className="text-[#ffffff]" />
            <h2 className="text-3xl font-bold text-[#ffffff] font-mono">{t('about.organizations')}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {organizations.map((org: Organization) => (
              <motion.div
                key={org.id}
                variants={itemVariants}
                className="bg-[#2a2a2a] border border-[#444] rounded-lg p-6 hover:border-[#666] transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-[#ffffff] mb-2">{org.name}</h3>
                <p className="text-[#e0e0e0] font-medium mb-2">{org.role}</p>
                <p className="text-[#b0b0b0] text-sm mb-2">
                  {new Date(org.startDate).toLocaleDateString(currentLang, { month: 'short', year: 'numeric' })} -{' '}
                  {org.endDate === 'Present' ? t('about.present', 'Present') : new Date(org.endDate).toLocaleDateString(currentLang, { month: 'short', year: 'numeric' })}
                </p>
                <p className="text-[#e0e0e0]">{org.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <Code size={32} className="text-[#ffffff]" />
            <h2 className="text-3xl font-bold text-[#ffffff] font-mono">{t('about.skills')}</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]: [string, string[]]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="bg-[#2a2a2a] border border-[#444] rounded-lg p-6 hover:border-[#666] transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-[#ffffff] mb-4 capitalize">{category}</h3>
                <ul className="space-y-2">
                  {items.map((skill: string, index: number) => (
                    <li key={index} className="text-[#e0e0e0] text-sm flex items-start gap-2">
                      <span className="text-[#ffffff] mt-1">•</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PUB Scholarship */}
        <motion.section
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <BookOpen size={32} className="text-[#ffffff]" />
            <h2 className="text-3xl font-bold text-[#ffffff] font-mono">{t('about.pubScholarship')}</h2>
          </motion.div>
          <motion.p variants={itemVariants} className="text-[#e0e0e0] mb-8 text-lg">
            {pubScholarship.description}
          </motion.p>
          <div className="space-y-8">
            {pubScholarship.trainings.map((training: Training) => (
              <motion.div
                key={training.id}
                variants={itemVariants}
                className="bg-[#2a2a2a] border border-[#444] rounded-lg p-6 hover:border-[#666] transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#ffffff] mb-2">{training.title}</h3>
                    <p className="text-[#b0b0b0] text-sm">
                      {/* CHANGED: Gunakan 'currentLang' untuk format tanggal dinamis */}
                      {new Date(training.startDate).toLocaleDateString(currentLang, { month: 'short', year: 'numeric' })} -{' '}
                      {new Date(training.endDate).toLocaleDateString(currentLang, { month: 'short', year: 'numeric' })}
                    </p>
                  </div>
                </div>
                <p className="text-[#e0e0e0] mb-4">{training.description}</p>
                
                {/* Projects */}
                {training.projects && training.projects.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-md font-semibold text-[#ffffff] mb-3">{t('about.projects')}:</h4>
                    <div className="space-y-3">
                      {training.projects.map((project: Project, index: number) => (
                        <div key={index} className="bg-[#1c1c1c] border border-[#333] rounded p-4">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                            <h5 className="text-[#ffffff] font-medium">{project.title}</h5>
                            <div className="flex gap-2">
                              {project.githubUrl && (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#e0e0e0] hover:text-[#ffffff] transition-colors duration-300 flex items-center gap-1 text-sm"
                                >
                                  <Github size={16} />
                                  <span>{t('about.code')}</span>
                                </a>
                              )}
                              {project.liveDemoUrl && (
                                <a
                                  href={project.liveDemoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[#e0e0e0] hover:text-[#ffffff] transition-colors duration-300 flex items-center gap-1 text-sm"
                                >
                                  <ExternalLink size={16} />
                                  <span>{t('about.demo')}</span>
                                </a>
                              )}
                            </div>
                          </div>
                          <p className="text-[#b0b0b0] text-sm mb-2">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech: string, techIndex: number) => (
                              <span
                                key={techIndex}
                                className="text-xs px-2 py-1 bg-[#2a2a2a] border border-[#444] rounded text-[#e0e0e0]"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;