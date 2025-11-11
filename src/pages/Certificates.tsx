import { getPortfolioData } from "../mockData";
import type { Certificate } from "../mockData";
import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Download, Filter } from "lucide-react";
import { useTranslation } from "react-i18next";

const Certificates = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "en";
  const { certificates } = getPortfolioData(lang);

  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(false);

  const types = ["All", "Training", "Bootcamp", "Other"];
  const typeKeys: { [key: string]: string } = {
    All: "all",
    Training: "training",
    Bootcamp: "bootcamp",
    Other: "other",
  };

  // UseMemo for filtering
  const filteredCertificates = useMemo(() => {
    if (filter === "All") return certificates;
    return certificates.filter((cert: Certificate) => cert.type === filter);
  }, [certificates, filter]);

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
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
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
            {t("certificates.title")}
          </h1>
          <div className="w-24 h-1 bg-[#ffffff] mx-auto mb-8" />
          {/* CHANGED: Teks di-hardcode diganti */}
          <p className="text-[#e0e0e0] text-lg max-w-2xl mx-auto">
            {t("certificates.description")}
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
            <span className="text-[#e0e0e0] font-mono">
              {t("certificates.filterBy")}
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded border-2 font-medium transition-all duration-300 ${
                  filter === type
                    ? "bg-[#ffffff] text-[#1c1c1c] border-[#ffffff]"
                    : "bg-transparent text-[#e0e0e0] border-[#444] hover:border-[#666]"
                }`}
              >
                {/* CHANGED: Gunakan pemetaan kunci untuk menerjemahkan teks tombol */}
                {t(`certificates.${typeKeys[type]}`)}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Certificates Grid with loading state */}
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
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredCertificates.map((cert: Certificate) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-[#2a2a2a] border border-[#444] rounded-lg p-6 hover:border-[#666] transition-all duration-300 flex flex-col"
                >
                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#1c1c1c] border border-[#666] rounded">
                      <Award size={24} className="text-[#ffffff]" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-2 py-1 bg-[#1c1c1c] border border-[#444] rounded text-xs text-[#e0e0e0] font-mono">
                        {t(`certificates.${typeKeys[cert.type || "other"]}`)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#ffffff] mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-[#e0e0e0] text-sm mb-2">{cert.issuer}</p>
                  <p className="text-[#b0b0b0] text-sm mb-3 font-mono">
                    {cert.year}
                  </p>
                  <p className="text-[#e0e0e0] text-sm mb-4 flex-1">
                    {cert.description}
                  </p>

                  {/* Download Button */}
                  <button
                    onClick={() => {
                      if (cert.fileUrl === "*") {
                        window.open(cert.fileUrl, "_self");
                      } else {
                        window.open(cert.fileUrl, "_blank");
                      }
                    }}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-[#ffffff] text-[#1c1c1c] rounded hover:bg-[#e0e0e0] transition-colors duration-300 font-medium"
                  >
                    <Download size={16} />
                    <span className="text-sm">
                      {t("certificates.viewCertificate")}
                    </span>
                  </button>
                </motion.div>
              ))}
            </motion.div>

            {filteredCertificates.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-[#b0b0b0] text-lg">
                  {t("certificates.noCertificates")}
                </p>
              </motion.div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Certificates;
