import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaRocket,
  FaDownload,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import yesmineImg from '../../assets/images/yesmine cherif.jpg';

const Hero = () => {
  const scrollToSection = (e, id) => {
    e.preventDefault();

    const el = document.getElementById(id);
    if (!el) return;

    const navbarOffset = 88;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="accueil"
      className="scroll-mt-24 relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-950 via-fuchsia-950 to-rose-950"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.25),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.22),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-96px)]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 text-white order-2 lg:order-1"
          >
            {/* Badge */}
            <div className="inline-flex max-w-full items-center gap-3 bg-white/10 border border-white/10 backdrop-blur-xl px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm shadow-lg shadow-pink-500/10">
              <span className="flex items-center gap-2 truncate">
                <FaMapMarkerAlt className="text-pink-300 shrink-0" />
                <span className="truncate">
                  Mobilité France • Alternance 2026 • Disponible immédiatement
                </span>
              </span>
            </div>

            {/* Title */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
              >
                Bonjour, je suis
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-300 to-purple-400">
                  Yesmine Cherif
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
                className="text-xl sm:text-2xl md:text-3xl font-medium text-pink-100"
              >
                Développeuse Full Stack | Data & IA
              </motion.h2>
            </div>

            {/* Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              className="max-w-2xl"
            >
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Étudiante en Génie Logiciel, spécialisée en développement{' '}
                <strong className="text-white">Full Stack</strong> et en{' '}
                <strong className="text-white">Intelligence Artificielle</strong>. J’ai
                réalisé plusieurs projets concrets, notamment une plateforme de gestion
                de la satisfaction client avec <strong className="text-white">Angular</strong>,{' '}
                <strong className="text-white">Laravel</strong> et{' '}
                <strong className="text-white">Keycloak</strong>, intégrant des
                fonctionnalités d’analyse de données.
              </p>

              <p className="mt-4 text-base sm:text-lg text-gray-200 leading-relaxed">
                Actuellement à la recherche d’une{' '}
                <strong className="text-white">
                  alternance en développement logiciel, data ou IA
                </strong>{' '}
                pour la rentrée 2026.
              </p>

              <p className="mt-5 text-sm sm:text-base text-pink-200">
                <strong className="text-white">Tech Stack :</strong> Angular • Laravel •
                Python • Spring Boot • MySQL
              </p>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5"
            >
              <a
                href="#projets"
                onClick={(e) => scrollToSection(e, 'projets')}
                className="justify-center sm:justify-start bg-gradient-to-r from-pink-500 to-purple-600 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold flex items-center gap-3 hover:scale-[1.03] transition-all duration-300 shadow-2xl shadow-pink-500/20 text-sm sm:text-base"
              >
                <FaRocket className="text-lg sm:text-xl" />
                Voir mes projets
              </a>

              <a
                href="/cv-yesmine-cherif.pdf"
                download
                className="justify-center sm:justify-start bg-white/10 backdrop-blur-md border border-pink-400/40 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-white/15 hover:scale-[1.03] transition-all duration-300 text-sm sm:text-base"
              >
                <FaDownload className="text-lg sm:text-xl" />
                Télécharger mon CV
              </a>
            </motion.div>

            {/* Note */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.7 }}
              className="text-xs sm:text-sm text-gray-300"
            >
              Réponse rapide garantie • Ouverte aux opportunités en France
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="flex gap-4 sm:gap-5 pt-2"
            >
              <a
                href="https://github.com/yesmine879"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 sm:p-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="text-xl sm:text-2xl text-white" />
              </a>

              <a
                href="https://www.linkedin.com/in/yesmine-cherif/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 sm:p-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="text-xl sm:text-2xl text-white" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="absolute w-[260px] h-[320px] sm:w-[320px] sm:h-[400px] md:w-[390px] md:h-[470px] bg-gradient-to-tr from-pink-500/45 to-purple-600/45 rounded-[2rem] blur-3xl animate-pulse" />

            <div className="relative rounded-[2rem] p-[6px] bg-gradient-to-br from-pink-400/80 via-fuchsia-500/70 to-purple-500/80 shadow-[0_20px_80px_rgba(236,72,153,0.22)]">
              <div className="rounded-[1.7rem] bg-white/10 backdrop-blur-sm p-2 border border-white/10">
                <img
                  src={yesmineImg}
                  alt="Yesmine Cherif"
                  className="w-[240px] h-[300px] sm:w-[300px] sm:h-[380px] md:w-[360px] md:h-[430px] rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;