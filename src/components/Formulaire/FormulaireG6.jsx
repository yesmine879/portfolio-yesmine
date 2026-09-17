import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext.jsx';
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationCircle,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaBriefcase,
  FaGlobe,
  FaArrowRight,
  FaGithub,
  FaGraduationCap,
} from 'react-icons/fa';

// ============================================================
// FORMSPREE
// ============================================================

const FORM_ENDPOINT = 'https://formspree.io/f/xvkgookd';

// ============================================================
// COMPONENT
// ============================================================

const FormulaireG6 = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  // ==========================================================
  // REDUCED MOTION
  // ==========================================================

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    handleChange();
    mediaQuery.addEventListener?.('change', handleChange);

    return () => {
      mediaQuery.removeEventListener?.('change', handleChange);
    };
  }, []);

  // ==========================================================
  // RESET STATUS TIMEOUT
  // ==========================================================

  useEffect(() => {
    if (status !== 'sent') return undefined;

    const timeout = window.setTimeout(() => {
      setStatus('idle');
    }, 5000);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [status]);

  // ==========================================================
  // ANIMATED PARTICLES
  // ==========================================================

  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1.5,
        delay: Math.random() * 5,
        duration: Math.random() * 9 + 8,
      })),
    []
  );

  // ==========================================================
  // FORM CHANGE
  // ==========================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }

    if (status === 'error') {
      setStatus('idle');
    }
  };

  // ==========================================================
  // VALIDATION
  // ==========================================================

  const validate = () => {
    const next = {};

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name) {
      next.name = t('formNameRequired');
    }

    if (!email) {
      next.email = t('formEmailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = t('formEmailInvalid');
    }

    if (!message) {
      next.message = t('formMessageRequired');
    } else if (message.length < 10) {
      next.message = t('formMessageShort');
    }

    setErrors(next);

    return Object.keys(next).length === 0;
  };

  // ==========================================================
  // SUBMIT
  // ==========================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === 'sending') return;

    if (!validate()) return;

    setStatus('sending');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      setStatus('sent');

      setFormData({
        name: '',
        email: '',
        message: '',
      });

      setErrors({});
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  // ==========================================================
  // INPUT STYLE
  // ==========================================================

  const inputClass = (field) =>
    `w-full px-5 py-4 bg-white/[0.045] border rounded-2xl text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:ring-4 ${
      errors[field]
        ? 'border-rose-400/70 focus:border-rose-400/70 focus:ring-rose-500/10'
        : 'border-white/10 focus:border-fuchsia-400/70 focus:ring-fuchsia-500/10'
    }`;

  // ==========================================================
  // MOTION SETTINGS
  // ==========================================================

  const sectionMotion = prefersReducedMotion
    ? {
        initial: { opacity: 1 },
        whileInView: { opacity: 1 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0, y: 35 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.7 },
      };

  const leftMotion = prefersReducedMotion
    ? {
        initial: { opacity: 1 },
        whileInView: { opacity: 1 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0, x: -45 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.7 },
      };

  const rightMotion = prefersReducedMotion
    ? {
        initial: { opacity: 1 },
        whileInView: { opacity: 1 },
        transition: { duration: 0 },
      }
    : {
        initial: { opacity: 0, x: 45 },
        whileInView: { opacity: 1, x: 0 },
        transition: { duration: 0.7 },
      };

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <section
      id="contact"
      className="scroll-mt-28 relative py-24 lg:py-32 overflow-hidden"
    >
      {/* ======================================================
          AMBIENT VIOLET BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 60% at 70% 50%,
              rgba(168, 85, 247, 0.12) 0%,
              transparent 60%
            ),
            radial-gradient(
              ellipse 55% 45% at 15% 80%,
              rgba(236, 72, 153, 0.08) 0%,
              transparent 60%
            ),
            radial-gradient(
              ellipse 50% 40% at 25% 15%,
              rgba(99, 102, 241, 0.08) 0%,
              transparent 60%
            )
          `,
        }}
      />

      {/* ======================================================
          ANIMATED LARGE ORB 1
      ====================================================== */}

      <motion.div
        aria-hidden="true"
        className="absolute w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          top: '-12%',
          left: '62%',
          background:
            'radial-gradient(circle, rgba(168,85,247,0.16) 0%, rgba(168,85,247,0.04) 45%, transparent 72%)',
          filter: 'blur(10px)',
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, -40, 0],
                y: [0, 30, 0],
                scale: [1, 1.08, 1],
              }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 18,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
      />

      {/* ======================================================
          ANIMATED LARGE ORB 2
      ====================================================== */}

      <motion.div
        aria-hidden="true"
        className="absolute w-[380px] h-[380px] rounded-full pointer-events-none"
        style={{
          top: '55%',
          left: '-8%',
          background:
            'radial-gradient(circle, rgba(236,72,153,0.13) 0%, rgba(236,72,153,0.035) 45%, transparent 72%)',
          filter: 'blur(12px)',
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 35, 0],
                y: [0, -25, 0],
                scale: [1, 1.06, 1],
              }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 22,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
      />

      {/* ======================================================
          ANIMATED INDIGO ORB
      ====================================================== */}

      <motion.div
        aria-hidden="true"
        className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{
          top: '5%',
          left: '10%',
          background:
            'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)',
          filter: 'blur(15px)',
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: [0, 20, 0],
                y: [0, 45, 0],
                scale: [1, 1.08, 1],
              }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 26,
                repeat: Infinity,
                ease: 'easeInOut',
              }
        }
      />

      {/* ======================================================
          MAIN ANIMATED PARTICLES
      ====================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-violet-300"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              boxShadow: '0 0 12px rgba(196,181,253,0.45)',
            }}
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    y: [0, -35, 0],
                    x: [0, 10, -5, 0],
                    opacity: [0.15, 0.75, 0.2],
                    scale: [1, 1.35, 1],
                  }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : {
                    duration: p.duration,
                    delay: p.delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
            }
          />
        ))}
      </div>

      {/* ======================================================
          EXTRA SMALL STARS
      ====================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-60"
      >
        {Array.from({ length: 35 }).map((_, i) => (
          <motion.span
            key={`star-${i}`}
            className="absolute w-[2px] h-[2px] rounded-full bg-violet-200"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 61) % 100}%`,
            }}
            animate={
              prefersReducedMotion
                ? undefined
                : {
                    opacity: [0.1, 0.8, 0.1],
                    scale: [0.7, 1.5, 0.7],
                  }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : {
                    duration: 3 + (i % 5),
                    delay: i * 0.15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }
            }
          />
        ))}
      </div>

      {/* ======================================================
          SUBTLE GRID
      ====================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.15) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.15) 1px,
              transparent 1px
            )
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* ======================================================
          SCANNING LIGHT
      ====================================================== */}

      <motion.div
        aria-hidden="true"
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(168,85,247,0.35), transparent)',
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                top: ['0%', '100%'],
                opacity: [0, 0.7, 0],
              }
        }
        transition={
          prefersReducedMotion
            ? undefined
            : {
                duration: 7,
                repeat: Infinity,
                ease: 'linear',
              }
        }
      />

      {/* ======================================================
          DARK VIGNETTE
      ====================================================== */}

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at center, transparent 25%, rgba(3,2,10,0.45) 100%)',
        }}
      />

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ====================================================
            HEADER
        ==================================================== */}

        <motion.div
          {...sectionMotion}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-fuchsia-500/25 bg-fuchsia-500/10 text-fuchsia-300 text-xs md:text-sm font-bold tracking-[0.18em] uppercase mb-6">
            <FaEnvelope className="text-xs" />
            {t('contactEyebrow')}
          </span>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            {t('contactTitle')}
          </h2>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 leading-relaxed">
            {t('contactIntro')}
          </p>
        </motion.div>

        {/* ====================================================
            MAIN GRID
        ==================================================== */}

        <div className="grid lg:grid-cols-[1.12fr_0.88fr] gap-10 items-start">
          {/* ==================================================
              FORM
          ================================================== */}

          <motion.div
            {...leftMotion}
            viewport={{ once: true }}
            className="relative rounded-[30px] border border-fuchsia-500/20 bg-white/[0.055] backdrop-blur-2xl shadow-[0_25px_90px_rgba(0,0,0,0.38)] overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-white/[0.09] via-transparent to-fuchsia-500/[0.045]"
            />

            <div
              aria-hidden="true"
              className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/70 to-transparent"
            />

            <div className="relative p-7 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-500 flex items-center justify-center shadow-lg shadow-fuchsia-500/25">
                  <FaPaperPlane className="text-white text-xl" />
                </div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white">
                    {t('sendMessage')}
                  </h3>

                  <p className="text-slate-400 text-sm mt-1">
                    Quick response · Open to opportunities
                  </p>
                </div>
              </div>

              {/* ==================================================
                  STATUS
              ================================================== */}

              <AnimatePresence mode="wait">
                {status === 'sent' && (
                  <motion.div
                    key="sent"
                    initial={
                      prefersReducedMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: -18 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    exit={
                      prefersReducedMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: -10 }
                    }
                    className="mb-7 rounded-2xl border border-emerald-400/35 bg-emerald-500/10 p-5"
                    role="status"
                    aria-live="polite"
                  >
                    <div className="flex items-start gap-4">
                      <FaCheckCircle className="text-emerald-400 text-2xl mt-1 shrink-0" />

                      <div>
                        <h4 className="text-white font-bold text-lg">
                          Message sent successfully
                        </h4>

                        <p className="text-slate-300 text-sm leading-relaxed">
                          Thank you for your message. I will reply as soon
                          as possible.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    key="error"
                    initial={
                      prefersReducedMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: -18 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    exit={
                      prefersReducedMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: -10 }
                    }
                    className="mb-7 rounded-2xl border border-rose-400/35 bg-rose-500/10 p-5"
                    role="alert"
                    aria-live="assertive"
                  >
                    <div className="flex items-start gap-4">
                      <FaExclamationCircle className="text-rose-400 text-2xl mt-1 shrink-0" />

                      <div>
                        <h4 className="text-white font-bold text-lg">
                          {t('messageNotSent')}
                        </h4>

                        <p className="text-slate-300 text-sm leading-relaxed">
                          {t('messageNotSentDescription')}{' '}
                          <a
                            href="mailto:cherifyesmine685@gmail.com"
                            className="text-fuchsia-300 hover:text-fuchsia-200 underline underline-offset-2"
                          >
                            cherifyesmine685@gmail.com
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ==================================================
                  FORM
              ================================================== */}

              <form
                onSubmit={handleSubmit}
                noValidate
                className="space-y-6"
              >
                {/* NAME */}

                <div>
                  <label
                    htmlFor="contact-name"
                    className="flex items-center gap-2 text-slate-200 font-semibold mb-3"
                  >
                    <FaUser className="text-fuchsia-400" />
                    {t('fullName')}
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Yesmine Cherif"
                    autoComplete="name"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={
                      errors.name ? 'contact-name-error' : undefined
                    }
                    className={inputClass('name')}
                  />

                  {errors.name && (
                    <p
                      id="contact-name-error"
                      className="text-rose-400 text-sm mt-2"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* EMAIL */}

                <div>
                  <label
                    htmlFor="contact-email"
                    className="flex items-center gap-2 text-slate-200 font-semibold mb-3"
                  >
                    <FaEnvelope className="text-fuchsia-400" />
                    {t('emailAddress')}
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    inputMode="email"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={
                      errors.email ? 'contact-email-error' : undefined
                    }
                    className={inputClass('email')}
                  />

                  {errors.email && (
                    <p
                      id="contact-email-error"
                      className="text-rose-400 text-sm mt-2"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* MESSAGE */}

                <div>
                  <label
                    htmlFor="contact-message"
                    className="flex items-center gap-2 text-slate-200 font-semibold mb-3"
                  >
                    <FaCommentDots className="text-fuchsia-400" />
                    {t('yourMessage')}
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder={t('messagePlaceholder')}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={
                      errors.message ? 'contact-message-error' : undefined
                    }
                    className={`${inputClass('message')} resize-none`}
                  />

                  {errors.message && (
                    <p
                      id="contact-message-error"
                      className="text-rose-400 text-sm mt-2"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* BUTTON */}

                <motion.button
                  whileHover={
                    prefersReducedMotion
                      ? undefined
                      : {
                          scale: 1.01,
                          y: -1,
                        }
                  }
                  whileTap={
                    prefersReducedMotion
                      ? undefined
                      : {
                          scale: 0.99,
                        }
                  }
                  type="submit"
                  disabled={status === 'sending'}
                  aria-busy={status === 'sending'}
                  className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 text-white font-bold text-lg shadow-[0_16px_40px_rgba(168,85,247,0.36)] hover:shadow-[0_20px_50px_rgba(236,72,153,0.38)] transition-all disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-4 focus-visible:ring-fuchsia-400/30"
                >
                  {status === 'sending' ? (
                    <>
                      <span
                        aria-hidden="true"
                        className="w-6 h-6 rounded-full border-2 border-white/80 border-t-transparent animate-spin"
                      />
                      {t('sending')}
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      {t('sendMessage')}
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* ==================================================
              RIGHT COLUMN
          ================================================== */}

          <motion.div
            {...rightMotion}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* =================================================
                CONTACT DETAILS
            ================================================= */}

            <div className="relative rounded-[30px] border border-white/10 bg-white/[0.055] backdrop-blur-2xl p-7 md:p-8 shadow-[0_25px_90px_rgba(0,0,0,0.32)] overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent"
              />

              <div className="flex items-center gap-3 mb-7">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-fuchsia-400">
                  <FaGlobe />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white">
                    {t('contactDetails')}
                  </h3>

                  <p className="text-slate-400 text-sm">
                    {t('contactInformation')}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {/* PHONE */}

                <a
                  href="tel:+21658715159"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.035] border border-white/5 hover:border-fuchsia-400/20 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-fuchsia-400/20"
                >
                  <div className="w-11 h-11 rounded-xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 shrink-0">
                    <FaPhone />
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">{t('phone')}</p>
                    <p className="text-white font-semibold">
                      +216 58 715 159
                    </p>
                  </div>
                </a>

                {/* EMAIL */}

                <a
                  href="mailto:cherifyesmine685@gmail.com"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.035] border border-white/5 hover:border-fuchsia-400/20 transition focus:outline-none focus-visible:ring-4 focus-visible:ring-fuchsia-400/20"
                >
                  <div className="w-11 h-11 rounded-xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 shrink-0">
                    <FaEnvelope />
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">{t('emailAddress')}</p>

                    <p className="text-white font-semibold break-all">
                      cherifyesmine685@gmail.com
                    </p>
                  </div>
                </a>

                {/* LOCATION */}

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.035] border border-white/5 hover:border-fuchsia-400/20 transition">
                  <div className="w-11 h-11 rounded-xl bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 shrink-0">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">{t('location')}</p>

                    <p className="text-white font-semibold">
                      {t('sfaxTunisia')}
                    </p>
                  </div>
                </div>

                {/* LINKEDIN */}

                <a
                  href="https://www.linkedin.com/in/yesmine-cherif/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('visitLinkedin')}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.035] border border-white/5 hover:border-cyan-400/25 transition group focus:outline-none focus-visible:ring-4 focus-visible:ring-cyan-400/20"
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

                {/* GITHUB */}

                <a
                  href="https://github.com/yesmine879"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t('visitGithub')}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.035] border border-white/5 hover:border-violet-400/25 transition group focus:outline-none focus-visible:ring-4 focus-visible:ring-violet-400/20"
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

            {/* =================================================
                AVAILABILITY
            ================================================= */}

            <div className="relative rounded-[30px] border border-fuchsia-500/20 bg-gradient-to-br from-fuchsia-500/[0.12] via-violet-500/[0.10] to-transparent backdrop-blur-2xl p-7 md:p-8 shadow-[0_25px_90px_rgba(0,0,0,0.32)] overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 w-40 h-40 rounded-full bg-fuchsia-500/15 blur-2xl"
              />

              <div className="relative">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white flex items-center justify-center">
                    <FaBriefcase />
                  </div>

                  <div>
                    <h4 className="text-2xl font-black text-white">
                      {t('availableFor')}
                    </h4>

                    <p className="text-slate-400 text-sm">
                      {t('currentStatus')}
                    </p>
                  </div>
                </div>

                {/* TAGS */}

                <div className="flex flex-wrap gap-3 mb-6">
                  {['internship', 'workStudy', 'freelance', 'collaboration'].map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-slate-200 text-sm font-semibold"
                    >
                      {t(item)}
                    </span>
                  ))}
                </div>

                <p className="text-slate-300 leading-relaxed mb-6">
                  {t('availabilityDescription')}
                </p>

                {/* EDUCATION */}

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.04] border border-white/5 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-300 flex items-center justify-center shrink-0">
                    <FaGraduationCap />
                  </div>

                  <div>
                    <p className="text-white font-semibold">
                      {t('currentEducation')}
                    </p>

                    <p className="text-slate-400 text-sm">
                      {t('currentEducationPeriod')}
                    </p>
                  </div>
                </div>

                {/* DIRECT EMAIL */}

                <a
                  href="mailto:cherifyesmine685@gmail.com"
                  className="inline-flex items-center gap-2 text-fuchsia-300 hover:text-fuchsia-200 font-bold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-fuchsia-400/20 rounded-lg"
                >
                  {t('contactDirectly')}
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

export default FormulaireG6;
