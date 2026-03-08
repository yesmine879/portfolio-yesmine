import React from 'react';
import { FaGithub, FaLinkedin, FaRocket, FaPaperPlane, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-white"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full text-sm">
              <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
              Tunisie • Disponible pour projets & stages
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Bonjour, je suis<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Yesmine Cherif
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-light text-pink-200">
              Étudiante & Développeuse Web en Formation
            </h2>

            <p className="text-lg text-gray-200 max-w-2xl leading-relaxed">
              Étudiante passionnée en développement web, spécialisée en <strong>React</strong>, <strong>Flutter</strong>, et création de projets interactifs. 
              Basée en Tunisie, je suis motivée à apprendre, explorer de nouvelles technologies, et créer des expériences numériques modernes et fonctionnelles.
            </p>

            {/* BOUTONS CORRIGÉS + NOUVEAU BOUTON CV */}
            <div className="flex flex-wrap gap-5">
              <a
                href="#projets"
                className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:scale-105 transition shadow-2xl shadow-pink-500/30"
              >
                <FaRocket className="text-xl" />
                Voir mes projets
              </a>

              <a
                href="#contact"
                className="bg-white/10 backdrop-blur-md border-2 border-pink-500 px-8 py-4 rounded-full font-semibold flex items-center gap-3 hover:bg-pink-500/20 transition"
              >
                <FaPaperPlane className="text-xl" />
                Me contacter
              </a>

              
            </div>

            {/* Réseaux sociaux */}
            <div className="flex gap-5 pt-6">
              <a href="https://github.com/yesmine879" target="_blank" rel="noopener noreferrer"
                className="p-4 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition hover:scale-110">
                <FaGithub className="text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/yesmine-cherif/" target="_blank" rel="noopener noreferrer"
                className="p-4 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition hover:scale-110">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/60 to-purple-600/60 rounded-3xl blur-3xl animate-pulse"></div>
            <img
              src="src/assets/images/yesmine.jpg"
              alt="Yesmine Cherif"
              className="relative w-80 h-96 md:w-96 md:h-96 rounded-3xl object-cover shadow-2xl ring-8 ring-pink-500/40 hover:ring-pink-500/70 transition-all duration-500 border-4 border-pink-300/30"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;