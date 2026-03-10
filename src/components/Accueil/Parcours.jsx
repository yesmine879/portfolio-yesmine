import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaBriefcase,
  FaUsers,
  FaExternalLinkAlt,
  FaCode,
  FaServer,
  FaDatabase,
  FaBrain,
  FaTools,
  FaGlobe,
} from 'react-icons/fa';

import asmStage1Pdf from '../../assets/pdf/Attestation_Stage_ASM_1ere_Annee.pdf';
import asmStage2Pdf from '../../assets/pdf/Attestation_Stage_ASM_2eme_Annee.pdf';
import primatecStagePdf from '../../assets/pdf/Attestation_Stage_Primatec_1ere_Annee.pdf';

const skillsData = [
  {
    title: 'Développement Web',
    icon: <FaGlobe />,
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Laravel', 'Node.js'],
  },
  {
    title: 'Langages',
    icon: <FaCode />,
    items: ['Python', 'Java', 'PHP', 'C', 'C#', 'SQL'],
  },
  {
    title: 'Backend & API',
    icon: <FaServer />,
    items: ['Laravel', 'Spring Boot', 'Flask', 'REST API', 'JSON', 'XML'],
  },
  {
    title: 'Bases de données',
    icon: <FaDatabase />,
    items: ['MySQL', 'Oracle', 'SQL'],
  },
  {
    title: 'IA / Data',
    icon: <FaBrain />,
    items: ['Machine Learning', 'Power BI', 'Analyse de données', 'Big Data'],
  },
  {
    title: 'Outils & Méthodes',
    icon: <FaTools />,
    items: ['Git', 'UML', 'Linux', 'Flutter', 'Scrum', 'Réseaux'],
  },
];

const stagesData = [
  {
    company: 'ASM',
    period: '01/07/2024 – 31/07/2024',
    role: 'Développeuse web',
    description:
      'Participation à la conception, au développement et aux tests d’une application web de gestion des employés avec Laravel, Angular et Node.js.',
    technologies: ['Laravel', 'Angular', 'Node.js'],
    file: asmStage1Pdf,
  },
  {
    company: 'Primatec',
    period: '01/08/2024 – 30/08/2024',
    role: 'Stagiaire Python',
    description:
      'Développement de scripts Python pour automatiser des tâches techniques et contribuer aux activités de développement et de test.',
    technologies: ['Python', 'Automatisation', 'Tests'],
    file: primatecStagePdf,
  },
  {
    company: 'ASM',
    period: '01/07/2025 – 31/08/2025',
    role: 'Développeuse web',
    description:
      'Participation au développement d’une application web de gestion d’événements avec Laravel, Angular et Node.js, incluant interfaces utilisateur, CRUD et validations.',
    technologies: ['Laravel', 'Angular', 'Node.js'],
    file: asmStage2Pdf,
  },
];

const Parcours = () => {
  return (
    <section
      id="parcours"
      className="scroll-mt-28 relative py-20 lg:py-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-fuchsia-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-pink-300 font-semibold tracking-[0.2em] uppercase text-sm mb-3">
            Parcours
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Mon parcours académique et professionnel
          </h2>
          <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Étudiante en Génie Logiciel et Systèmes d’Information, passionnée par le
            développement web, les systèmes d’information et l’intelligence artificielle.
          </p>
        </motion.div>

        <div className="grid xl:grid-cols-12 gap-8">
          {/* Colonne gauche */}
          <div className="xl:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/8 backdrop-blur-xl p-7 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaGraduationCap className="text-pink-400" />
                Formation académique
              </h3>

              <div className="space-y-6">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <p className="text-pink-300 font-semibold text-sm mb-2">2023 – 2026</p>
                  <h4 className="text-white font-semibold text-lg leading-snug">
                    Institut International de Technologie (IIT Sfax)
                  </h4>
                  <p className="text-slate-300 mt-2 text-sm leading-relaxed">
                    Licence en Génie Logiciel et Systèmes d’Information
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <p className="text-pink-300 font-semibold text-sm mb-2">2023</p>
                  <h4 className="text-white font-semibold text-lg leading-snug">
                    Lycée Abou Kacem Chebbi – Sfax
                  </h4>
                  <p className="text-slate-300 mt-2 text-sm leading-relaxed">
                    Baccalauréat en Mathématiques
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/8 backdrop-blur-xl p-7 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FaUsers className="text-cyan-400" />
                Expérience associative
              </h3>

              <div className="space-y-4">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <h4 className="text-white font-semibold text-lg">Officer — IEEE Student Branch</h4>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                    Participation à des projets et événements techniques.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <h4 className="text-white font-semibold text-lg">Organisation Team — OSI</h4>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                    Planification, coordination d’activités étudiantes, travail en équipe
                    et communication.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-3xl border border-white/10 bg-white/8 backdrop-blur-xl p-7 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Centres d’intérêt</h3>

              <div className="flex flex-wrap gap-3">
                {[
                  'Technologie',
                  'Programmation',
                  'Projets personnels',
                  'Compétitions',
                  'Piano',
                  'Musique',
                ].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-full bg-pink-500/15 border border-pink-400/20 text-pink-200 text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Colonne droite */}
          <div className="xl:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="rounded-3xl border border-white/10 bg-white/8 backdrop-blur-xl p-7 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-7">Compétences</h3>

              <div className="grid md:grid-cols-2 gap-5">
                {skillsData.map((skill) => (
                  <div
                    key={skill.title}
                    className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/7 transition"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-pink-500/15 text-pink-300 flex items-center justify-center text-lg">
                        {skill.icon}
                      </div>
                      <h4 className="text-white font-semibold text-lg">{skill.title}</h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 rounded-full bg-slate-800/80 border border-white/10 text-slate-200 text-sm"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/8 backdrop-blur-xl p-7 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-7 flex items-center gap-3">
                <FaBriefcase className="text-pink-400" />
                Stages
              </h3>

              <div className="space-y-5">
                {stagesData.map((stage, index) => (
                  <div
                    key={`${stage.company}-${index}`}
                    className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:bg-white/7 transition"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h4 className="text-white font-semibold text-xl">
                            {stage.company}
                          </h4>
                          <span className="px-3 py-1 rounded-full bg-pink-500/15 border border-pink-400/20 text-pink-200 text-xs font-semibold">
                            {stage.role}
                          </span>
                        </div>

                        <p className="text-pink-300 text-sm font-medium mb-3">{stage.period}</p>

                        <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-4">
                          {stage.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {stage.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 rounded-full bg-slate-800/80 border border-white/10 text-slate-200 text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="lg:pl-4">
                        <a
                          href={stage.file}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-medium transition shadow-lg"
                        >
                          Voir l’attestation
                          <FaExternalLinkAlt className="text-sm" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-3xl border border-fuchsia-400/20 bg-gradient-to-br from-fuchsia-500/10 to-cyan-500/10 backdrop-blur-xl p-7 shadow-2xl"
            >
              <h3 className="text-2xl font-bold text-white mb-5">Projet de fin d’études</h3>

              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h4 className="text-white font-semibold text-xl">
                    Plateforme de gestion des réclamations et de la satisfaction client
                  </h4>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/20 text-cyan-200 text-xs font-semibold">
                    En cours
                  </span>
                </div>

                <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-4">
                  Développement d’une plateforme web orientée gestion des réclamations et
                  suivi de la satisfaction client, avec intégration d’Angular, Laravel,
                  Keycloak, Power BI et de fonctionnalités liées à l’intelligence artificielle.
                </p>

                <div className="flex flex-wrap gap-2">
                  {['Angular', 'Laravel', 'Keycloak', 'Power BI', 'IA'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-full bg-slate-800/80 border border-white/10 text-slate-200 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parcours;