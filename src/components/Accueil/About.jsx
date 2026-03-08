import React from 'react';
import { motion } from 'framer-motion';
import {
  FaReact,
  FaAngular,
  FaLaravel,
  FaPython,
  FaNodeJs,
  FaCertificate,
  FaUsers,
  FaGraduationCap,
  FaExternalLinkAlt,
  FaDownload,
  FaJava,
  FaPhp,
  FaGitAlt,
  FaDatabase,
  FaMicrochip,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiFlutter,
  SiMysql,
  SiArduino,
  SiJavascript,
} from 'react-icons/si';

import awsCloudPdf from '../../assets/pdf/aws-cloud-foundations.pdf';
import jobFairPdf from '../../assets/pdf/job-fair-10.pdf';
import odysseePdf from '../../assets/pdf/odyssee-des-genies.pdf';
import arduinoHackathonPdf from '../../assets/pdf/arduino-hackathon.pdf';
import hackvisionPdf from '../../assets/pdf/hackvision.pdf';
import ibmPmPdf from '../../assets/pdf/ibm-project-management.pdf';
import scrumPdf from '../../assets/pdf/scrum-fundamentals.pdf';
import aticSpeakerPdf from '../../assets/pdf/atic-speaker.pdf';

const cvFile = '/yesmine cherif.pdf';

const technicalSkills = [
  { icon: <FaReact />, name: 'React / React Native', color: 'text-cyan-500' },
  { icon: <FaAngular />, name: 'Angular', color: 'text-red-600' },
  { icon: <FaLaravel />, name: 'Laravel', color: 'text-rose-600' },
  { icon: <FaNodeJs />, name: 'Node.js', color: 'text-green-600' },
  { icon: <FaPython />, name: 'Python / Flask', color: 'text-yellow-500' },
  { icon: <SiFlutter />, name: 'Flutter', color: 'text-sky-500' },
  { icon: <FaJava />, name: 'Java / OOP', color: 'text-orange-600' },
  { icon: <SiSpringboot />, name: 'Spring Boot', color: 'text-emerald-600' },
  { icon: <FaPhp />, name: 'PHP', color: 'text-indigo-500' },
  { icon: <FaDatabase />, name: 'SQL / Bases de données', color: 'text-blue-600' },
  { icon: <SiMysql />, name: 'MySQL', color: 'text-cyan-700' },
  { icon: <SiJavascript />, name: 'JavaScript', color: 'text-amber-500' },
  { icon: <FaGitAlt />, name: 'Git / GitHub', color: 'text-orange-500' },
  { icon: <FaMicrochip />, name: 'IoT / Embarqué', color: 'text-violet-600' },
  { icon: <SiArduino />, name: 'Arduino', color: 'text-teal-600' },
];

const certificates = [
  {
    title: 'Scrum Fundamentals Certified',
    category: 'Certification',
    description: 'Certification ScrumStudy en fondamentaux Scrum.',
    file: scrumPdf,
    accent: 'from-indigo-500/15 to-purple-500/15 border-indigo-200',
  },
  {
    title: 'Project Management Fundamentals',
    category: 'Certification',
    description: 'Certification IBM SkillsBuild en fondamentaux de la gestion de projet.',
    file: ibmPmPdf,
    accent: 'from-blue-500/15 to-cyan-500/15 border-blue-200',
  },
  {
    title: 'AWS Academy Graduate – Cloud Foundations',
    category: 'Certification',
    description: 'Formation AWS Academy orientée cloud foundations.',
    file: awsCloudPdf,
    accent: 'from-amber-500/15 to-orange-500/15 border-amber-200',
  },
  {
    title: 'Speaker – ATIC AfroTech Intelligence Congress',
    category: 'Attestation',
    description: 'Reconnaissance en tant qu’intervenante / speaker au bootcamp ATIC.',
    file: aticSpeakerPdf,
    accent: 'from-pink-500/15 to-rose-500/15 border-pink-200',
  },
  {
    title: 'Hackathon HACKVISION',
    category: 'Attestation',
    description: 'Participation active au hackathon HACKVISION.',
    file: hackvisionPdf,
    accent: 'from-fuchsia-500/15 to-pink-500/15 border-fuchsia-200',
  },
  {
    title: 'Hackathon Arduino & Robot suiveur',
    category: 'Attestation',
    description: 'Participation à un hackathon Arduino et création d’un robot suiveur de ligne.',
    file: arduinoHackathonPdf,
    accent: 'from-emerald-500/15 to-teal-500/15 border-emerald-200',
  },
  {
    title: 'L’Odyssée des Génies',
    category: 'Attestation',
    description: 'Participation à la 2ᵉ édition de la compétition.',
    file: odysseePdf,
    accent: 'from-sky-500/15 to-indigo-500/15 border-sky-200',
  },
  {
    title: 'Comité d’organisation – Job Fair 10',
    category: 'Attestation',
    description: 'Contribution à l’organisation de la 10ᵉ édition du Job Fair.',
    file: jobFairPdf,
    accent: 'from-orange-500/15 to-yellow-500/15 border-orange-200',
  },
];

const softBlocks = [
  {
    icon: <FaCertificate />,
    title: 'Certifications',
    text: 'Scrum, gestion de projet, cloud foundations et validation continue des compétences.',
    color: 'text-indigo-600',
    bg: 'from-indigo-500/10 to-purple-500/10 border-indigo-200',
  },
  {
    icon: <FaUsers />,
    title: 'Vie associative',
    text: 'IEEE Student Branch IIT Sfax, organisation d’événements et participation à l’écosystème étudiant.',
    color: 'text-orange-600',
    bg: 'from-orange-500/10 to-pink-500/10 border-orange-200',
  },
];

const About = () => {
  const scrollToContact = (e) => {
    e.preventDefault();

    const el = document.getElementById('contact');
    if (!el) return;

    const navbarOffset = 96;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <section id="about" className="scroll-mt-32 relative py-24 lg:py-32 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>

      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-indigo-300/30 to-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tr from-pink-300/30 to-orange-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            À propos de moi
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-4xl mx-auto leading-relaxed">
            Étudiante en Génie Logiciel & Systèmes d’Information, passionnée par le
            développement web, mobile, backend et les projets techniques à impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-gray-200 shadow-xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
              <FaGraduationCap className="text-indigo-600 text-4xl" />
              Yesmine Cherif
            </h3>

            <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                Actuellement en{' '}
                <span className="text-indigo-600 font-bold text-xl">
                  3ᵉ année de Génie Logiciel et Systèmes d’Information
                </span>
                <br />
                à l’<span className="text-indigo-600 font-bold">IIT Sfax</span>.
              </p>

              <p>
                Je suis une développeuse full-stack en formation, avec un intérêt
                particulier pour les interfaces modernes, les applications web robustes,
                les solutions backend bien structurées et les environnements techniques évolutifs.
              </p>

              <p>
                Grâce à mes stages et projets, j’ai travaillé sur des applications CRUD,
                des dashboards administrateur, des projets Laravel + Angular + Node.js,
                de l’automatisation en Python, ainsi que des projets académiques en
                machine learning, mobile et systèmes embarqués.
              </p>

              <p>
                Mon objectif est de construire des solutions utiles, bien pensées,
                performantes et visuellement soignées, tout en continuant à progresser
                sur des stacks modernes et professionnelles.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
            Technologies & Compétences
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6">
            {technicalSkills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-white rounded-3xl p-5 md:p-6 text-center border border-gray-200 hover:border-indigo-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group min-h-[170px] flex flex-col items-center justify-center"
              >
                <div
                  className={`${skill.color} text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform`}
                >
                  {skill.icon}
                </div>
                <p className="text-sm md:text-base font-bold text-gray-800 group-hover:text-indigo-600 transition leading-snug">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {softBlocks.map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`bg-gradient-to-br ${block.bg} backdrop-blur-xl rounded-2xl p-7 border flex items-start gap-5 hover:shadow-lg transition`}
              >
                <div className={`${block.color} text-4xl flex-shrink-0 mt-1`}>
                  {block.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{block.title}</h4>
                  <p className="text-gray-600 text-base leading-relaxed">{block.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4"
        >
          <div className="text-center mb-10">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Certifications & Attestations
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Une sélection de certifications, attestations de participation et
              reconnaissances académiques ou associatives consultables directement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {certificates.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`bg-gradient-to-br ${item.accent} rounded-3xl p-6 border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-white/70 text-gray-700 border border-white/60 mb-3">
                      {item.category}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 leading-snug">
                      {item.title}
                    </h4>
                  </div>
                  <FaCertificate className="text-2xl text-indigo-600 flex-shrink-0" />
                </div>

                <p className="text-gray-600 leading-relaxed min-h-[72px]">
                  {item.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-white text-indigo-600 font-semibold border border-indigo-100 hover:bg-indigo-50 transition"
                  >
                    <FaExternalLinkAlt />
                    Voir le PDF
                  </a>

                  <a
                    href={item.file}
                    download
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
                  >
                    <FaDownload />
                    Télécharger
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-2xl md:text-3xl text-gray-700 font-medium mb-10">
            Disponible pour stages PFE, projets freelances ou collaborations
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="px-12 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-bold text-white text-lg md:text-xl hover:scale-105 hover:shadow-2xl transition shadow-xl"
            >
              Me contacter
            </a>

            <a
              href={cvFile}
              download
              className="px-12 py-5 bg-white border-4 border-indigo-600 rounded-full font-bold text-indigo-600 text-lg md:text-xl hover:bg-indigo-50 transition shadow-lg inline-flex items-center gap-3"
            >
              <FaDownload />
              Télécharger mon CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;