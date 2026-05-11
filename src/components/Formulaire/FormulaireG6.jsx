import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
  FaCheckCircle,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaBriefcase,
  FaGlobe,
  FaArrowRight,
  FaGithub,
  FaGraduationCap,
} from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5 + 3,
        delay: Math.random() * 5,
        duration: Math.random() * 9 + 8,
      })),
    []
  );

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    await new Promise((resolve) => setTimeout(resolve, 1800));

    setSent(true);
    setSending(false);

    setTimeout(() => {
      setSent(false);
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, 4500);
  };

  const inputClass =
    'w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-fuchsia-400/70 focus:ring-4 focus:ring-fuchsia-500/10 focus:bg-white/10';

  return (
    <section
      id="contact"
      className="scroll-mt-28 relative py-24 lg:py-32 overflow-hidden bg-[#050816]"
    >
      {/* Main background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(168,85,247,0.20),transparent_28%),radial-gradient(circle_at_82%_70%,rgba(236,72,153,0.16),transparent_26%),linear-gradient(to_bottom,#09111f,#050816_45%,#040612)]" />

      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-fuchsia-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-[34rem] h-[34rem] -translate-x-1/2 -translate-y-1/2 bg-pink-500/10 rounded-full blur-3xl" />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-violet-300/50"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -35, 0],
              opacity: [0.25, 0.75, 0.25],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-fuchsia-500/25 bg-fuchsia-500/10 text-fuchsia-300 text-xs md:text-sm font-bold tracking-[0.18em] uppercase mb-6">
            <FaEnvelope className="text-xs" />
            Let’s Stay in Touch
          </span>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Contact{' '}
            <span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
            Do you have an opportunity, internship, work-study program, or project?
            Send me a message and I will get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.12fr_0.88fr] gap-10 items-start">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-[30px] border border-fuchsia-500/20 bg-white/[0.055] backdrop-blur-2xl shadow-[0_25px_90px_rgba(0,0,0,0.38)] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.09] via-transparent to-fuchsia-500/[0.045]" />
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/70 to-transparent" />

            <div className="relative p-7 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-500 flex items-center justify-center shadow-lg shadow-fuchsia-500/25">
                  <FaPaperPlane className="text-white text-xl" />
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white">
                    Send Me a Message
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">
                    Quick response · Open to opportunities
                  </p>
                </div>
              </div>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, y: -18 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-7 rounded-2xl border border-emerald-400/35 bg-emerald-500/10 p-5"
                >
                  <div className="flex items-start gap-4">
                    <FaCheckCircle className="text-emerald-400 text-2xl mt-1 shrink-0" />
                    <div>
                      <h4 className="text-white font-bold text-lg">
                        Message sent successfully
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Thank you for your message. I will reply as soon as possible.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="flex items-center gap-2 text-slate-200 font-semibold mb-3">
                    <FaUser className="text-fuchsia-400" />
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Yesmine Cherif"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-slate-200 font-semibold mb-3">
                    <FaEnvelope className="text-fuchsia-400" />
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="cherif.yesmine@iit.ens.tn"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-slate-200 font-semibold mb-3">
                    <FaCommentDots className="text-fuchsia-400" />
                    Your Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project, internship, work-study program, or collaboration..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01, y: -1 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 text-white font-bold text-lg shadow-[0_16px_40px_rgba(168,85,247,0.36)] hover:shadow-[0_20px_50px_rgba(236,72,153,0.38)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {sending ? (
                    <>
                      <span className="w-6 h-6 rounded-full border-2 border-white/80 border-t-transparent animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Contact details card */}
            <div className="relative rounded-[30px] border border-white/10 bg-white/[0.055] backdrop-blur-2xl p-7 md:p-8 shadow-[0_25px_90px_rgba(0,0,0,0.32)] overflow-hidden">
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />

              <div className="flex items-center gap-3 mb-7">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-fuchsia-400">
                  <FaGlobe />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white">Contact Details</h3>
                  <p className="text-slate-400 text-sm">Contact information</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.035] border border-white/5 hover:border-fuchsia-400/20 transition">
                  <div className="w-11 h-11 rounded-xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 shrink-0">
                    <FaPhone />
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">Phone</p>
                    <p className="text-white font-semibold">58 715 159</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.035] border border-white/5 hover:border-fuchsia-400/20 transition">
                  <div className="w-11 h-11 rounded-xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 shrink-0">
                    <FaEnvelope />
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <p className="text-white font-semibold break-all">
                      cherif.yesmine@iit.ens.tn
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.035] border border-white/5 hover:border-fuchsia-400/20 transition">
                  <div className="w-11 h-11 rounded-xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 shrink-0">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">Location</p>
                    <p className="text-white font-semibold">Sfax, Tunisia</p>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/yesmine-cherif/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.035] border border-white/5 hover:border-cyan-400/25 transition group"
                >
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <FaLinkedin />
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">LinkedIn</p>
                    <p className="text-white font-semibold group-hover:text-cyan-300 transition break-all">
                      linkedin.com/in/yesmine-cherif
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/yesmine879"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.035] border border-white/5 hover:border-violet-400/25 transition group"
                >
                  <div className="w-11 h-11 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-300 shrink-0">
                    <FaGithub />
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">GitHub</p>
                    <p className="text-white font-semibold group-hover:text-violet-300 transition break-all">
                      github.com/yesmine879
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability card */}
            <div className="relative rounded-[30px] border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/12 via-violet-500/10 to-transparent backdrop-blur-2xl p-7 md:p-8 shadow-[0_25px_90px_rgba(0,0,0,0.32)] overflow-hidden">
              <div className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-fuchsia-500/15 blur-2xl" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white flex items-center justify-center">
                    <FaBriefcase />
                  </div>

                  <div>
                    <h4 className="text-2xl font-black text-white">Available For</h4>
                    <p className="text-slate-400 text-sm">Opportunities 2026</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  {[
                    'Final-Year Internship',
                    'Work-Study Program',
                    'Freelance',
                    'Collaboration',
                  ].map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-200 text-sm font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  I am open to opportunities in Full Stack development, Data / AI,
                  and modern web projects.
                </p>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/5 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-300 flex items-center justify-center">
                    <FaGraduationCap />
                  </div>

                  <div>
                    <p className="text-white font-semibold">Software Engineering</p>
                    <p className="text-slate-400 text-sm">
                      Computer Science Bachelor · IIT
                    </p>
                  </div>
                </div>

                <a
                  href="mailto:cherif.yesmine@iit.ens.tn"
                  className="inline-flex items-center gap-2 text-fuchsia-300 hover:text-fuchsia-200 font-bold transition"
                >
                  Contact me directly
                  <FaArrowRight className="text-sm" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;