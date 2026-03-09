import React from 'react';
import { FaGithub, FaLinkedin, FaRocket, FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import yesmineImg from '../../assets/images/yesmine.jpg';

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
      className="scroll-mt-24 relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900"
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center min-h-[calc(100vh-96px)]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8 text-white order-2 lg:order-1"
          >
            <div className="inline-flex max-w-full items-center gap-2 bg-white/10 backdrop-blur-md px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm">
              <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse shrink-0"></span>
              <span className="truncate">Tunisie • Disponible pour projets & stages</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight break-words">
              Bonjour, je suis
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Yesmine Cherif
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-pink-200 leading-snug">
              Étudiante & Développeuse Web en Formation
            </h2>

            <p className="text-base sm:text-lg text-gray-200 max-w-2xl leading-relaxed">
              Étudiante passionnée en développement web, spécialisée en <strong>React</strong>,{' '}
              <strong>Flutter</strong>, et création de projets interactifs. Basée en Tunisie, je suis
              motivée à apprendre, explorer de nouvelles technologies, et créer des expériences
              numériques modernes et fonctionnelles.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5">
              <a
                href="#projets"
                onClick={(e) => scrollToSection(e, 'projets')}
                className="justify-center sm:justify-start bg-gradient-to-r from-pink-500 to-purple-600 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold flex items-center gap-3 hover:scale-105 transition shadow-2xl shadow-pink-500/30 text-sm sm:text-base"
              >
                <FaRocket className="text-lg sm:text-xl" />
                Voir mes projets
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="justify-center sm:justify-start bg-white/10 backdrop-blur-md border-2 border-pink-500 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-pink-500/20 transition text-sm sm:text-base"
              >
                <FaPaperPlane className="text-lg sm:text-xl" />
                Me contacter
              </a>
            </div>

            <div className="flex gap-4 sm:gap-5 pt-2 sm:pt-4">
              <a
                href="https://github.com/yesmine879"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition hover:scale-110"
              >
                <FaGithub className="text-xl sm:text-2xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/yesmine-cherif/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 sm:p-4 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition hover:scale-110"
              >
                <FaLinkedin className="text-xl sm:text-2xl" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/60 to-purple-600/60 rounded-3xl blur-3xl animate-pulse"></div>

            <img
              src={yesmineImg}
              alt="Yesmine Cherif"
              className="relative w-[240px] h-[300px] sm:w-[300px] sm:h-[380px] md:w-[360px] md:h-[430px] rounded-3xl object-cover shadow-2xl ring-8 ring-pink-500/40 hover:ring-pink-500/70 transition-all duration-500 border-4 border-pink-300/30"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;