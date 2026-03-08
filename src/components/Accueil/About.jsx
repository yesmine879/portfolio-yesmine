import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaAngular, 
  FaLaravel, 
  FaPython, 
  FaRobot, 
  FaNodeJs,
  FaCertificate, 
  FaUsers, 
  FaGraduationCap 
} from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="relative py-24 lg:py-36 overflow-hidden bg-gray-50">
      {/* Fond subtil avec effet dégradé très léger */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
      
      {/* Bulles décoratives douces */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-indigo-300/30 to-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tr from-pink-300/30 to-orange-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">

        {/* Titre principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            À propos de moi
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-4xl mx-auto leading-relaxed">
            Étudiante passionnée en Génie Logiciel & Systèmes d’Information<br />
            en quête de challenges techniques et de projets innovants
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* === Présentation & Parcours === */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="space-y-10"
          >
            {/* Carte principale */}
            <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-10 border border-gray-200 shadow-xl">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
                <FaGraduationCap className="text-indigo-600 text-4xl" />
                Yesmine Cherif
              </h3>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Actuellement en <span className="text-indigo-600 font-bold text-xl">3ᵉ année de Génie Logiciel et Systèmes d’Information</span><br />
                  à l’<span className="text-indigo-600 font-bold">IIT Sfax</span>.
                </p>

                <p>
                  Je suis une développeuse full-stack en formation, passionnée par le développement web, mobile et les systèmes embarqués. 
                  J’aime créer des applications modernes, fluides et esthétiques tout en respectant les bonnes pratiques.
                </p>

                <p>
                  Grâce à mes stages chez <span className="text-orange-500 font-semibold">Primatec</span> et <span className="text-orange-500 font-semibold">ASM</span>, 
                  j’ai acquis une expérience concrète : génération automatique de code Python, applications CRUD complètes avec Laravel + Angular + Node.js, 
                  dashboards administrateur, gestion d’événements…
                </p>
              </div>
            </div>

            {/* Certifications & Associations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-xl rounded-2xl p-7 border border-indigo-200 flex items-start gap-5 hover:shadow-lg transition">
                <FaCertificate className="text-4xl text-indigo-600 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Certifications</h4>
                  <p className="text-gray-600 text-base leading-tight">
                    • Scrum Fundamentals Certified<br />
                    • Project Management Fundamentals (IBM)
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl p-7 border border-orange-200 flex items-start gap-5 hover:shadow-lg transition">
                <FaUsers className="text-4xl text-orange-600 flex-shrink-0" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Vie associative</h4>
                  <p className="text-gray-600 text-base leading-tight">
                    • IEEE Student Branch IIT Sfax<br />
                    • Organisation Team OSI
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* === Compétences techniques === */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="space-y-10"
          >
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 text-center lg:text-left mb-12">
              Technologies & Compétences
            </h3>

            <div className="grid grid-cols-2 gap-8">
              {[
                { icon: <FaReact />, name: "React / React Native", color: "text-cyan-500" },
                { icon: <FaAngular />, name: "Angular", color: "text-red-600" },
                { icon: <FaLaravel />, name: "Laravel", color: "text-rose-600" },
                { icon: <FaNodeJs />, name: "Node.js", color: "text-green-600" },
                { icon: <FaPython />, name: "Python / Flask", color: "text-yellow-500" },
                { icon: <FaRobot />, name: "Arduino & IoT", color: "text-emerald-600" }
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-8 text-center border border-gray-200 hover:border-indigo-400 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                >
                  <div className={`${skill.color} text-6xl mb-5 group-hover:scale-110 transition-transform`}>
                    {skill.icon}
                  </div>
                  <p className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Photo (à ajouter plus tard si tu veux) */}
            <div className="flex justify-center mt-12">
              
            </div>
          </motion.div>
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <p className="text-2xl md:text-3xl text-gray-700 font-medium mb-10">
            Disponible pour stages PFE, projets freelances ou collaborations
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#contact"
              className="px-12 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-bold text-white text-xl hover:scale-105 hover:shadow-2xl transition shadow-xl"
            >
              Me contacter
            </a>
            <a
              href="public/yesmine cherif.pdf"
              download
              className="px-12 py-6 bg-white border-4 border-indigo-600 rounded-full font-bold text-indigo-600 text-xl hover:bg-indigo-50 transition shadow-lg"
            >
              Télécharger mon CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;