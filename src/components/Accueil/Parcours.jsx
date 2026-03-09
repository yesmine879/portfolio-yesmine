import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaUsers,
} from 'react-icons/fa';

const Parcours = () => {
  return (
    <section id="parcours" className="scroll-mt-32 relative py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900"></div>
      <div className="absolute top-10 left-10 w-96 h-96 bg-pink-500/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-600/40 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Mon Parcours
          </h2>
          <p className="text-2xl text-pink-100 font-medium">
            Étudiante en 3ᵉ année Génie Logiciel et Systèmes d’Information • IIT Sfax
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8">Contact</h3>
              <div className="space-y-5 text-gray-100 text-lg">
                <div className="flex items-center gap-4">
                  <FaPhone className="text-pink-400" /> 58 715 159
                </div>
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-pink-400" /> cherif.yesmine@iit.ens.tn
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-pink-400" /> Hay L Ons 3021, Sfax, Tunisie
                </div>
                <div className="flex items-center gap-4">
                  <FaLinkedin className="text-cyan-400" /> linkedin.com/in/yesmine-cherif
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-pink-500/30">
              <h4 className="text-2xl font-bold text-white mb-6">Langues</h4>
              <ul className="space-y-4 text-gray-200 text-lg">
                <li>
                  • Français : <span className="text-pink-300 font-medium">Courant</span>
                </li>
                <li>
                  • Anglais : <span className="text-pink-300 font-medium">Intermédiaire</span>
                </li>
                <li>
                  • Arabe : <span className="text-pink-300 font-medium">Langue maternelle</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/30">
              <h4 className="text-2xl font-bold text-white mb-6">Compétences</h4>
              <ul className="text-gray-200 text-base space-y-2 leading-relaxed">
                <li>• Langages : Python, Java, C, C#, PHP, JavaScript</li>
                <li>• Frontend : HTML, CSS, React, Angular, Flutter</li>
                <li>• Backend : Laravel, Flask, Spring Boot, Node.js</li>
                <li>• Bases de données : MySQL, Oracle, SQL</li>
                <li>• Outils : Git, Big Data, BI, Linux, Réseaux</li>
                <li>• Autres : IA, UML, Modélisation, Arduino & IoT</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-10"
          >
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-10 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                <FaGraduationCap className="text-pink-400 text-4xl" />
                Formation académique
              </h3>
              <div className="space-y-8 text-gray-100">
                <div>
                  <p className="text-2xl font-bold text-pink-300">2023 – 2026</p>
                  <p className="text-xl mt-2">Institut International de Technologie (IIT Sfax)</p>
                  <p className="text-lg">3ᵉ année Génie Logiciel et Systèmes d’Information</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-pink-300">2023</p>
                  <p className="text-xl mt-2">Lycée Abou Kacem Chebbi – Sfax</p>
                  <p className="text-lg">Baccalauréat Mathématiques</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-10 border border-purple-500/30 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                <FaBriefcase className="text-purple-400 text-4xl" />
                Stage professionnel
              </h3>
              <div className="space-y-8 text-gray-100">
                <div>
                  <p className="text-xl font-bold text-pink-300">Primatec • 06/2024</p>
                  <p className="mt-2">Python • Développement de scripts pour génération automatique de code</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-pink-300">ASM • 07/2024</p>
                  <p className="mt-2">Laravel, Angular, Node.js • CRUD complet pour gestion des employés</p>
                </div>
                <div>
                  <p className="text-xl font-bold text-pink-300">ASM • 07/2025 (prévu)</p>
                  <p className="mt-2">Gestion d’événements + Dashboard administrateur</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-10"
          >
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-10 border border-yellow-500/40 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                <FaCertificate className="text-yellow-400 text-4xl" />
                Formation complémentaire
              </h3>
              <ul className="space-y-4 text-gray-200 text-lg">
                <li>• Leadership & Communication</li>
                <li>• Scrum Fundamentals Certified (ScrumStudy)</li>
                <li>• Project Management Fundamentals (IBM SkillsBuild)</li>
                <li>• LABYRINTHE DES NOMBRES (Unité des Mathématiques)</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-10 border border-pink-500/40 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
                <FaUsers className="text-pink-400 text-4xl" />
                Expérience associative
              </h3>
              <ul className="space-y-4 text-gray-200 text-lg">
                <li>• Membre actif – IEEE Student Branch IIT Sfax</li>
                <li>• Membre – Organisation Team OSI</li>
                <li className="text-pink-200 font-medium pt-4">
                  Travail en équipe • Organisation • Gestion du stress • Collaboration
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30">
              <h4 className="text-2xl font-bold text-white mb-6">Centres d’intérêt</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  'Technologie & Programmation',
                  'Projets personnels',
                  'Compétitions / Challenges',
                  'Pianiste',
                  'Musique',
                ].map((item) => (
                  <span
                    key={item}
                    className="px-6 py-3 bg-pink-600/30 rounded-full text-pink-200 font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Parcours;