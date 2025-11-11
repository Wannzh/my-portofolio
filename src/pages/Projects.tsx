import { getPortfolioData } from '../mockData';
import type { Project } from '../mockData';
import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Filter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || 'en';
  const { projects, pubScholarship } = getPortfolioData(lang);

  const [filter, setFilter] = useState('All');
  const [loading, setLoading] = useState(false);

  const categories = ['All', 'Full-Stack', 'Backend', 'Frontend'];
  const categoryKeys: { [key: string]: string } = {
    'All': 'all',
    'Full-Stack': 'fullStack',
    'Backend': 'backend',
    'Frontend': 'frontend'
  };

  // Merge top-level projects with training projects (dedupe by id) and then filter
  const mergedProjects = useMemo(() => {
    const trainingProjects: Project[] =
      pubScholarship?.trainings?.flatMap((t) => t.projects || []) ?? [];

    const map = new Map<number, Project>();
    // prefer top-level project data when duplicate id exists
    projects.forEach((p) => map.set(p.id, p));
    trainingProjects.forEach((p) => {
      if (!map.has(p.id)) map.set(p.id, p);
    });

    return Array.from(map.values());
  }, [projects, pubScholarship]);

  // UseMemo for filtering
  const filteredProjects = useMemo(() => {
    if (filter === 'All') return mergedProjects;
    return mergedProjects.filter((project: Project) => project.category === filter);
  }, [mergedProjects, filter]);

  // Add loading state when filter changes
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 400); // Simulate loading
    return () => clearTimeout(timer);
  }, [filter, lang]);

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
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* CHANGED: Teks di-hardcode diganti */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#ffffff] mb-4 font-mono">
            {t('projects.title')}
          </h1>
          <div className="w-24 h-1 bg-[#ffffff] mx-auto mb-8" />
          {/* CHANGED: Teks di-hardcode diganti */}
          <p className="text-[#e0e0e0] text-lg max-w-2xl mx-auto">
            {t('projects.description')}
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Filter size={20} className="text-[#e0e0e0]" />
            {/* CHANGED: Teks di-hardcode diganti */}
            <span className="text-[#e0e0e0] font-mono">{t('projects.filterBy')}</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded border-2 font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-[#ffffff] text-[#1c1c1c] border-[#ffffff]'
                    : 'bg-transparent text-[#e0e0e0] border-[#444] hover:border-[#666]'
                }`}
              >
                {/* CHANGED: Gunakan pemetaan kunci untuk menerjemahkan teks tombol */}
                {t(`projects.${categoryKeys[category]}`)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid with loading state */}
        {loading ? (
          <div className="flex justify-center items-center py-24">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#e0e0e0]" />
          </div>
        ) : (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project: Project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-[#2a2a2a] border border-[#444] rounded-lg overflow-hidden hover:border-[#666] transition-all duration-300 flex flex-col"
                >
                  {/* Project Image Placeholder */}
                  <div className="h-48 bg-linear-to-br from-[#333] to-[#1c1c1c] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <pattern id={`pattern-${project.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="10" cy="10" r="1" fill="#ffffff" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#pattern-${project.id})`} />
                      </svg>
                    </div>
                    <div className="text-6xl text-[#666] z-10">{'<>'}</div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-[#1c1c1c] border border-[#666] rounded text-xs text-[#ffffff] font-mono">
                          {t('projects.featured')}
                        </span>
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-[#ffffff] mb-3">{project.title}</h3>
                    <p className="text-[#e0e0e0] mb-4 flex-1">{project.description}</p>

                    {/* Tech Stack */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech: string, index: number) => (
                          <span
                            key={index}
                            className="text-xs px-2 py-1 bg-[#1c1c1c] border border-[#444] rounded text-[#e0e0e0]"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="text-xs px-2 py-1 bg-[#1c1c1c] border border-[#444] rounded text-[#e0e0e0]">
                            +{project.techStack.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#1c1c1c] border border-[#666] rounded text-[#e0e0e0] hover:bg-[#333] hover:text-[#ffffff] transition-all duration-300"
                      >
                        <Github size={16} />
                        <span className="text-sm font-medium">{t('projects.code')}</span>
                      </a>
                      {project.liveDemoUrl && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#ffffff] text-[#1c1c1c] rounded hover:bg-[#e0e0e0] transition-all duration-300"
                        >
                          <ExternalLink size={16} />
                          <span className="text-sm font-medium">{t('projects.demo')}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-[#b0b0b0] text-lg">{t('projects.noProjects')}</p>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Projects;