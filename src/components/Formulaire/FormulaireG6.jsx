// src/components/Formulaire/ContactForm.jsx  (ou ContactForm.jsx)

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaCommentDots, FaPaperPlane, FaCheckCircle, FaExclamationTriangle, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    nom: false,
    email: false,
    message: false,
  });

  const [sended, setSended] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    // Simulation d'envoi (2 secondes)
    await new Promise(resolve => setTimeout(resolve, 2000));

    setSended(true);
    setSending(false);

    // Réinitialisation
    setTimeout(() => {
      setSended(false);
      setFormData({ nom: "", email: "", message: "" });
    }, 5000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-36 overflow-hidden">
      {/* Fond violet magnifique comme tout ton site */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900"></div>
      <div className="absolute top-10 left-10 w-96 h-96 bg-purple-600/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-600/40 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 z-10">

        {/* Titre */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Contactez-moi
          </h2>
          <p className="text-2xl text-pink-200">Je suis ouverte à toute opportunité !</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-2xl rounded-3xl p-10 border-2 border-pink-500/30 shadow-2xl"
          >
            {sended && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 bg-green-500/20 border border-green-500/50 rounded-2xl p-6 text-center"
              >
                <FaCheckCircle className="text-5xl text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white">Message envoyé !</h3>
                <p className="text-pink-200">Je vous répondrai dans les plus brefs délais</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label className="flex items-center gap-3 text-pink-200 text-lg font-medium mb-3">
                  <FaUser className="text-pink-400" /> Nom complet
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  onBlur={() => setTouched({ ...touched, nom: true })}
                  required
                  className="w-full px-6 py-4 bg-white/10 border-2 border-pink-500/40 rounded-2xl text-white placeholder-pink-300 focus:border-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-500/20 transition-all"
                  placeholder="Yesmine Cherif"
                />
              </div>

              <div>
                <label className="flex items-center gap-3 text-pink-200 text-lg font-medium mb-3">
                  <FaEnvelope className="text-pink-400" /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={() => setTouched({ ...touched, email: true })}
                  required
                  className="w-full px-6 py-4 bg-white/10 border-2 border-pink-500/40 rounded-2xl text-white placeholder-pink-300 focus:border-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-500/20 transition-all"
                  placeholder="cherifyesmine685@gmail.com"
                />
              </div>

              <div>
                <label className="flex items-center gap-3 text-pink-200 text-lg font-medium mb-3">
                  <FaCommentDots className="text-pink-400" /> Votre message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={() => setTouched({ ...touched, message: true })}
                  required
                  rows="6"
                  className="w-full px-6 py-4 bg-white/10 border-2 border-pink-500/40 rounded-2xl text-white placeholder-pink-300 focus:border-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-500/20 transition-all resize-none"
                  placeholder="Parlez-moi de votre projet, stage, ou juste bonjour !"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={sending}
                className="w-full py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-2xl text-white font-bold text-xl shadow-2xl shadow-pink-500/50 flex items-center justify-center gap-3 transition-all"
              >
                {sending ? (
                  <div className="animate-spin rounded-full h-8 w-8 border-4 border-white border-t-transparent"></div>
                ) : (
                  <>
                    <FaPaperPlane />
                    Envoyer le message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Infos contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-white"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-pink-500/30">
              <h3 className="text-3xl font-bold text-pink-300 mb-8">Mes coordonnées</h3>
              <div className="space-y-6 text-lg">
                <div className="flex items-center gap-4">
                  <FaPhone className="text-pink-400 text-2xl" />
                  <span>58 715 159</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-pink-400 text-2xl" />
                  <span>cherifyesmine685@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-pink-400 text-2xl" />
                  <span>Hay L Ons 3021, Sfax, Tunisie</span>
                </div>
                <div className="flex items-center gap-4">
                  <FaLinkedin className="text-cyan-400 text-2xl" />
                  <a href="https://linkedin.com/in/yesmine-cherif" target="_blank" className="hover:text-pink-300 transition">
                    linkedin.com/in/yesmine-cherif
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600/50 to-pink-600/50 backdrop-blur-xl rounded-3xl p-8 border border-pink-500/40 text-center">
              <h4 className="text-2xl font-bold text-white mb-4">Disponible pour :</h4>
              <div className="flex flex-wrap gap-4 justify-center text-pink-200">
                <span className="px-6 py-3 bg-white/10 rounded-full">Stage PFE</span>
                <span className="px-6 py-3 bg-white/10 rounded-full">Projet freelance</span>
                <span className="px-6 py-3 bg-white/10 rounded-full">Collaboration</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;