// src/components/Projets.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaLaptopCode, FaGamepad, FaRobot } from 'react-icons/fa';

const Projets = () => {
  const [activeTab, setActiveTab] = useState('academiques');

  const projetsAcademiques = [
    { titre: "Gestion de commandes (.NET)", techno: ".NET • C# • SQL Server", github: "https://github.com/tonpseudo/gestion-commandes-dotnet" },
    { titre: "Gestion d'événements (Laravel/Angular)", techno: "Laravel • Angular • Node.js • MySQL", github: "#" },
    { titre: "Gestion Materiel", techno: "Laravel • Angular • MySQL", github: "#" },
    { titre: "CRUD simple", techno: "Spring boot", github: "https://github.com/yesmine879/CRUD" },
  ];

  const projetsPersonnels = [
    { titre: "Chatbot Interactif", techno: "Python • NLP • Tkinter", github: "#" },
    { titre: "Angry Birds Clone", techno: "Java • Swing • Physique 2D", github: "#" },
    { titre: "Site Pâtisserie & Burger", techno: "Laravel • Angular • MySQL", github: "#" },
  ];

  const projetsTechniques = [
    { titre: "Robot suiveur de ligne", techno: "Arduino • C++ • Capteurs IR", github: "#" },
  ];

  const currentProjects = activeTab === 'academiques' ? projetsAcademiques :
                          activeTab === 'personnels' ? projetsPersonnels : projetsTechniques;

  return (
    <section id="projets" className="relative py-24 lg:py-36 overflow-hidden bg-gray-50">
      {/* Fond très léger et moderne */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"></div>
      
      {/* Bulles décoratives douces */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">

        {/* Titre */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Mes Projets
          </h2>
          <p className="text-2xl text-gray-600">Académiques • Personnels • Techniques</p>
        </motion.div>

        {/* Onglets */}
        <div className="flex justify-center mb-12 flex-wrap gap-4">
          {['academiques', 'personnels', 'techniques'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white scale-105'
                  : 'bg-white border border-gray-300 text-gray-700 hover:border-indigo-400 hover:bg-indigo-50'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Grille des projets */}
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((projet, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl p-8 border border-gray-200 hover:border-indigo-400 hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
            >
              <div className="flex justify-center mb-6">
                {activeTab === 'techniques' ? <FaRobot className="text-6xl text-orange-500" /> :
                 activeTab === 'personnels' ? <FaGamepad className="text-6xl text-violet-600" /> :
                 <FaLaptopCode className="text-6xl text-indigo-600" />}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 text-center mb-4 group-hover:text-indigo-600 transition">
                {projet.titre}
              </h3>
              <p className="text-gray-600 text-center mb-6">{projet.techno}</p>

              <div className="flex justify-center gap-8 mt-8">
                <a
                  href={projet.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition font-medium"
                >
                  <FaGithub className="text-2xl" /> Code
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-gray-600 hover:text-orange-500 transition font-medium"
                >
                  <FaExternalLinkAlt className="text-xl" /> Démo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 italic">
            Tous les liens GitHub seront mis à jour très bientôt
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projets;