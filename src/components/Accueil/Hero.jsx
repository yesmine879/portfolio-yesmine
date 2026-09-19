// src/components/Hero.jsx
import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';

import yesmineImg from '../../assets/images/yesmine cherif.jpg';
import { useLanguage } from '../../context/LanguageContext.jsx';

const STACK = ['Angular', 'Laravel', 'Python', 'Spring Boot', 'MySQL'];

const ROLES = [
  'Full Stack Developer',
  'Data & AI Enthusiast',
  'Software Engineering Student',
];

const FRENCH_ROLES = [
  'Développeuse Full Stack',
  'Passionnée par la data et l’IA',
  'Élève ingénieure en informatique',
];

const ORBS = [
  {
    size: 520,
    top: '-10%',
    left: '62%',
    color: 'rgba(168,85,247,0.16)',
    path: {
      x: [0, -40, 0],
      y: [0, 30, 0],
    },
    duration: 18,
  },
  {
    size: 380,
    top: '55%',
    left: '-8%',
    color: 'rgba(236,72,153,0.13)',
    path: {
      x: [0, 35, 0],
      y: [0, -25, 0],
    },
    duration: 22,
  },
  {
    size: 300,
    top: '5%',
    left: '10%',
    color: 'rgba(99,102,241,0.14)',
    path: {
      x: [0, 20, 0],
      y: [0, 45, 0],
    },
    duration: 26,
  },
];

const fadeUp = (delay = 0) => ({
  initial: {
    opacity: 0,
    y: 28,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.75,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

// --------------------------------------------------
// Headline word animation
// --------------------------------------------------
const HeadlineWord = ({ children, delay, gradient = false }) => (
  <span
    style={{
      display: 'inline-block',
      overflow: 'hidden',
      verticalAlign: 'top',
    }}
  >
    <motion.span
      style={{
        display: 'inline-block',
        color: gradient ? undefined : '#f1f0fb',
        background: gradient
          ? 'linear-gradient(135deg, #e879f9 0%, #a855f7 45%, #818cf8 100%)'
          : undefined,
        WebkitBackgroundClip: gradient ? 'text' : undefined,
        WebkitTextFillColor: gradient ? 'transparent' : undefined,
      }}
      initial={{
        y: '110%',
        filter: 'blur(14px)',
        opacity: 0,
      }}
      animate={{
        y: '0%',
        filter: 'blur(0px)',
        opacity: 1,
      }}
      transition={{
        duration: 1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.span>
  </span>
);

// --------------------------------------------------
// Typewriter
// --------------------------------------------------
const useTypewriter = (
  words,
  {
    typingSpeed = 55,
    deletingSpeed = 30,
    hold = 1300,
    pause = 400,
  } = {}
) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!words?.length) return;

    if (prefersReducedMotion) {
      setText(words[0]);
      return;
    }

    const current = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, typingSpeed);
    } else if (!deleting && text.length === current.length) {
      timeout = setTimeout(() => {
        setDeleting(true);
      }, hold);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, deletingSpeed);
    } else if (deleting && text.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((index) => (index + 1) % words.length);
      }, pause);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [
    text,
    deleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    hold,
    pause,
    prefersReducedMotion,
  ]);

  return text;
};

// --------------------------------------------------
// Hero particle network
// --------------------------------------------------
const ParticleNetwork = ({ prefersReducedMotion }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    const parent = canvas.parentElement;

    if (!parent) return;

    let width = 0;
    let height = 0;
    let particles = [];
    let rafId = null;

    const DENSITY = 9000;
    const MAX_DIST = 130;

    const DOT_COLOR = '196,181,253';
    const LINE_COLOR = '168,85,247';

    const getDimensions = () => ({
      width: parent.clientWidth,
      height: parent.clientHeight,
    });

    const createParticles = () => {
      const count = Math.max(
        24,
        Math.min(90, Math.floor((width * height) / DENSITY))
      );

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.6,
      }));
    };

    const resize = () => {
      const dimensions = getDimensions();

      width = dimensions.width;
      height = dimensions.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connections first
      ctx.shadowBlur = 0;

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distanceSquared = dx * dx + dy * dy;
          const maxDistanceSquared = MAX_DIST * MAX_DIST;

          if (distanceSquared < maxDistanceSquared) {
            const distance = Math.sqrt(distanceSquared);

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);

            ctx.strokeStyle = `rgba(${LINE_COLOR}, ${
              0.18 * (1 - distance / MAX_DIST)
            })`;

            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      ctx.shadowColor = `rgba(${DOT_COLOR}, 0.45)`;
      ctx.shadowBlur = 5;

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1;
        }

        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1;
        }

        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.r,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(${DOT_COLOR}, 0.55)`;
        ctx.fill();
      }

      ctx.shadowBlur = 0;

      rafId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const handleResize = () => {
      resize();
    };

    let resizeObserver;

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(parent);
    } else {
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full pointer-events-none"
    />
  );
};

// --------------------------------------------------
// Hero
// --------------------------------------------------
const Hero = () => {
  const { language, t } = useLanguage();
  const containerRef = useRef(null);

  const prefersReducedMotion = useReducedMotion();
  const typedRole = useTypewriter(
    language === 'fr' ? FRENCH_ROLES : ROLES
  );

  const { scrollY } = useScroll();

  const imgY = useTransform(
    scrollY,
    [0, 500],
    [0, 60]
  );

  const scrollIndicatorOpacity = useTransform(
    scrollY,
    [0, 200],
    [1, 0]
  );

  // --------------------------------------------------
  // Cursor spotlight
  // --------------------------------------------------
  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(30);

  const spotSpringX = useSpring(spotlightX, {
    stiffness: 60,
    damping: 20,
  });

  const spotSpringY = useSpring(spotlightY, {
    stiffness: 60,
    damping: 20,
  });

  const spotlightBackground = useTransform(
    [spotSpringX, spotSpringY],
    ([x, y]) =>
      `radial-gradient(
        circle 480px at ${x}% ${y}%,
        rgba(168,85,247,0.08),
        transparent 70%
      )`
  );

  const handleSectionMove = (event) => {
    if (prefersReducedMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();

    spotlightX.set(
      ((event.clientX - rect.left) / rect.width) * 100
    );

    spotlightY.set(
      ((event.clientY - rect.top) / rect.height) * 100
    );
  };

  // --------------------------------------------------
  // Portrait tilt
  // --------------------------------------------------
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  const springTiltX = useSpring(tiltX, {
    stiffness: 150,
    damping: 18,
  });

  const springTiltY = useSpring(tiltY, {
    stiffness: 150,
    damping: 18,
  });

  const handlePortraitMove = (event) => {
    if (prefersReducedMotion) return;

    const rect = event.currentTarget.getBoundingClientRect();

    const px =
      (event.clientX - rect.left) / rect.width - 0.5;

    const py =
      (event.clientY - rect.top) / rect.height - 0.5;

    tiltY.set(px * 14);
    tiltX.set(py * -14);
  };

  const resetPortraitTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  // --------------------------------------------------
  // Scroll to section
  // --------------------------------------------------
  const scrollToSection = (event, id) => {
    event.preventDefault();

    const element = document.getElementById(id);

    if (!element) return;

    const offsetPosition =
      element.getBoundingClientRect().top +
      window.scrollY -
      88;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    window.history.pushState(null, '', `#${id}`);
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleSectionMove}
      className="relative min-h-screen overflow-hidden scroll-mt-24"
    >
      {/* Base ambient gradients */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 60% at 70% 50%,
              rgba(168,85,247,0.10) 0%,
              transparent 60%
            ),
            radial-gradient(
              ellipse 50% 40% at 20% 80%,
              rgba(236,72,153,0.08) 0%,
              transparent 55%
            )
          `,
        }}
      />

      {/* Drifting gradient orbs */}
      {!prefersReducedMotion &&
        ORBS.map((orb, index) => (
          <motion.div
            key={index}
            aria-hidden="true"
            className="absolute pointer-events-none"
            style={{
              width: orb.size,
              height: orb.size,
              top: orb.top,
              left: orb.left,
              borderRadius: '9999px',
              background: `radial-gradient(
                circle,
                ${orb.color} 0%,
                transparent 70%
              )`,
              filter: 'blur(20px)',
            }}
            animate={orb.path}
            transition={{
              duration: orb.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

      {/* Reduced motion fallback */}
      {prefersReducedMotion && (
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 40% 30% at 85% 10%, rgba(99,102,241,0.08) 0%, transparent 50%)',
          }}
        />
      )}

      {/* Particle network */}
      <ParticleNetwork prefersReducedMotion />

      {/* Scanning line */}
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden="true"
          className="absolute left-0 right-0 pointer-events-none"
          style={{
            height: '1px',
            background:
              'linear-gradient(90deg, transparent 0%, rgba(196,181,253,0.7) 50%, transparent 100%)',
            boxShadow:
              '0 0 12px 1px rgba(168,85,247,0.5)',
          }}
          animate={{
            top: ['0%', '100%'],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      )}

      {/* Cursor spotlight */}
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background: spotlightBackground,
          }}
        />
      )}

      {/* Fine grid */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.02) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.02) 1px,
              transparent 1px
            )
          `,
          backgroundSize: '64px 64px',
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : {
                opacity: [0.6, 1, 0.6],
              }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Vignette */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 30% 45%, rgba(10,10,15,0.35) 0%, transparent 60%)',
        }}
      />

      {/* ==================================================
          MAIN CONTENT
      ================================================== */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pb-16 pt-28 sm:px-10 lg:px-16">

        {/* Status badge */}
        <motion.div
          {...fadeUp(0)}
          className="mb-10"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest"
            style={{
              background: 'rgba(168,85,247,0.12)',
              border: '1px solid rgba(168,85,247,0.25)',
              color: '#c084fc',
              letterSpacing: '0.12em',
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full animate-pulse"
              style={{
                background: '#a855f7',
              }}
            />

            {t('heroBadge')}
          </span>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1fr_auto] lg:gap-24">

          {/* ==================================================
              LEFT CONTENT
          ================================================== */}
          <div className="max-w-2xl space-y-8">

            {/* Role */}
            <div className="flex items-center gap-4">
              <motion.span
                initial={{
                  width: 0,
                }}
                animate={{
                  width: 28,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  height: 1,
                  background: 'rgba(168,85,247,0.6)',
                  display: 'inline-block',
                }}
              />

              <p
                className="text-sm font-medium uppercase tracking-widest"
                style={{
                  color: '#a78bfa',
                  letterSpacing: '0.18em',
                  minHeight: '1.4em',
                }}
              >
                {typedRole}

                {!prefersReducedMotion && (
                  <motion.span
                    aria-hidden="true"
                    animate={{
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: 0.7,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                    style={{
                      display: 'inline-block',
                      marginLeft: 2,
                      color: '#c084fc',
                    }}
                  >
                    |
                  </motion.span>
                )}
              </p>
            </div>

            {/* Name */}
            <h1
              className="font-extrabold leading-[1.04] tracking-tight"
              style={{
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                fontFamily: '"Syne", sans-serif',
              }}
            >
              <HeadlineWord delay={0.15}>
                Yesmine
              </HeadlineWord>

              <br />

              <HeadlineWord
                delay={0.3}
                gradient
              >
                Cherif
              </HeadlineWord>
            </h1>

            {/* Description */}
            <motion.p
              {...fadeUp(0.5)}
              className="text-lg leading-relaxed"
              style={{
                color: '#94a3b8',
                maxWidth: '52ch',
              }}
            >
              {t('heroDescription')}
            </motion.p>

            {/* Tech stack */}
            <motion.div
              {...fadeUp(0.58)}
              className="flex flex-wrap gap-2.5"
            >
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full px-3.5 py-1.5 text-xs font-semibold"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    color: '#cbd5e1',
                    letterSpacing: '0.04em',
                  }}
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              {...fadeUp(0.66)}
              className="flex flex-col gap-4 pt-2 sm:flex-row"
            >
              <motion.a
                href="#projects"
                onClick={(event) =>
                  scrollToSection(event, 'projects')
                }
                className="site-text-control group flex w-full items-center justify-center gap-3 rounded-2xl px-7 py-4 text-sm font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] sm:w-auto sm:min-w-[178px]"
                style={{
                  background:
                    'linear-gradient(135deg, #a855f7, #818cf8)',
                }}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: -3,
                        boxShadow:
                          '0 12px 32px rgba(168,85,247,0.4)',
                      }
                }
                whileTap={
                  prefersReducedMotion
                    ? undefined
                    : {
                        scale: 0.97,
                      }
                }
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {t('viewProjects')}

                {!prefersReducedMotion && (
                  <motion.span
                    className="text-base"
                    animate={{
                      y: [0, 3, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.6,
                      ease: 'easeInOut',
                    }}
                  >
                    <HiArrowDown />
                  </motion.span>
                )}
              </motion.a>

              <motion.a
                href="/CV.pdf"
                download="CV_Yesmine_Cherif.pdf"
                onClick={(e) => {
                  e.preventDefault();
                  fetch('/CV.pdf')
                    .then((res) => res.blob())
                    .then((blob) => {
                      const url = window.URL.createObjectURL(blob);
                      const a = document.createElement('a');
                      a.style.display = 'none';
                      a.href = url;
                      a.download = 'CV_Yesmine_Cherif.pdf';
                      document.body.appendChild(a);
                      a.click();
                      window.URL.revokeObjectURL(url);
                      document.body.removeChild(a);
                    })
                    .catch(() => {
                      const a = document.createElement('a');
                      a.href = '/CV.pdf';
                      a.download = 'CV_Yesmine_Cherif.pdf';
                      document.body.appendChild(a);
                      a.click();
                      document.body.removeChild(a);
                    });
                }}
                className="site-text-control flex w-full items-center justify-center gap-3 rounded-2xl px-7 py-4 text-sm font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f] sm:w-auto sm:min-w-[178px]"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(168,85,247,0.35)',
                  color: '#c4b5fd',
                }}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: -3,
                        background:
                          'rgba(168,85,247,0.08)',
                        borderColor:
                          'rgba(168,85,247,0.55)',
                      }
                }
                whileTap={
                  prefersReducedMotion
                    ? undefined
                    : {
                        scale: 0.97,
                      }
                }
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
              >
                <HiDownload className="text-base" />
                {t('downloadCv')}
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              {...fadeUp(0.72)}
              className="flex flex-wrap items-center gap-5 pt-1"
            >
              <motion.a
                href="https://github.com/yesmine879"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('visitGithub')}
                className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
                style={{
                  color: '#64748b',
                }}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        color: '#c4b5fd',
                        y: -2,
                      }
                }
              >
                <FaGithub className="text-2xl" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/yesmine-cherif/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('visitLinkedin')}
                className="rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
                style={{
                  color: '#64748b',
                }}
                whileHover={
                  prefersReducedMotion
                    ? undefined
                    : {
                        color: '#c4b5fd',
                        y: -2,
                      }
                }
              >
                <FaLinkedin className="text-2xl" />
              </motion.a>

              <span
                className="ml-0 text-xs sm:ml-2"
                style={{
                  color: '#475569',
                  letterSpacing: '0.04em',
                }}
              >
                {t('availability')}
              </span>
            </motion.div>
          </div>

          {/* ==================================================
              RIGHT IMAGE
          ================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hidden justify-center lg:flex"
            style={{
              perspective: 1000,
            }}
          >
            <motion.div style={{ y: imgY }}>
              <motion.div
                className="relative"
                onMouseMove={handlePortraitMove}
                onMouseLeave={resetPortraitTilt}
                style={{
                  rotateX: springTiltX,
                  rotateY: springTiltY,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Glow ring */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 rounded-[2.5rem] opacity-60 blur-2xl animate-pulse"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(168,85,247,0.4), rgba(236,72,153,0.25))',
                    animationDuration: '3s',
                  }}
                />

                {/* Outer frame */}
                <div
                  className="relative rounded-[2.25rem] p-[2px]"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(168,85,247,0.6), rgba(129,140,248,0.4), rgba(236,72,153,0.5))',
                  }}
                >
                  <div
                    className="rounded-[2.1rem] p-3"
                    style={{
                      background: 'rgba(15,10,30,0.7)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    <img
                      src={yesmineImg}
                      alt="Yesmine Cherif — Full Stack Developer"
                      className="rounded-[1.75rem] object-cover"
                      style={{
                        width: '340px',
                        height: '420px',
                      }}
                    />
                  </div>
                </div>

                {/* Education badge */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 0.95,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute -right-6 top-10 flex items-center gap-3 rounded-2xl px-4 py-3"
                  style={{
                    background: 'rgba(15,10,30,0.85)',
                    border:
                      '1px solid rgba(168,85,247,0.3)',
                    backdropFilter: 'blur(16px)',
                    boxShadow:
                      '0 8px 32px rgba(0,0,0,0.4)',
                    transform: 'translateZ(40px)',
                  }}
                >
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-lg font-bold"
                    style={{
                      background:
                        'rgba(168,85,247,0.2)',
                      color: '#c084fc',
                    }}
                  >
                    🎓
                  </div>

                  <div>
                    <p
                      className="text-xs font-semibold"
                      style={{
                        color: '#e2e8f0',
                      }}
                    >
                      Engineering Cycle
                    </p>

                    <p
                      className="text-xs"
                      style={{
                        color: '#64748b',
                      }}
                    >
                      IIT Sfax · 2026–Present
                    </p>
                  </div>
                </motion.div>

                {/* Collaboration badge */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: 1.05,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute -left-6 bottom-12 flex items-center gap-3 rounded-2xl px-4 py-3"
                  style={{
                    background: 'rgba(15,10,30,0.85)',
                    border:
                      '1px solid rgba(74,222,128,0.25)',
                    backdropFilter: 'blur(16px)',
                    boxShadow:
                      '0 8px 32px rgba(0,0,0,0.4)',
                    transform: 'translateZ(40px)',
                  }}
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full animate-pulse"
                    style={{
                      background: '#4ade80',
                    }}
                  />

                  <p
                    className="text-xs font-semibold"
                    style={{
                      color: '#86efac',
                    }}
                  >
                    {t('openToCollaboration')}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.4,
            duration: 0.8,
          }}
          style={{
            opacity: scrollIndicatorOpacity,
            color: '#334155',
          }}
          className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span
            className="text-xs uppercase tracking-widest"
            style={{
              letterSpacing: '0.16em',
              fontSize: '0.65rem',
            }}
          >
            Scroll
          </span>

          {!prefersReducedMotion && (
            <motion.div
              animate={{
                y: [0, 6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.6,
                ease: 'easeInOut',
              }}
            >
              <HiArrowDown className="text-base" />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
