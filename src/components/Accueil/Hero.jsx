// src/components/Hero.jsx
import React, { useRef } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiArrowDown, HiDownload } from 'react-icons/hi';
import { motion, useScroll, useTransform } from 'framer-motion';
import yesmineImg from '../../assets/images/yesmine cherif.jpg';

const STACK = ['Angular', 'Laravel', 'Python', 'Spring Boot', 'MySQL'];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
});

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 500], [0, 60]);

  const scrollToSection = (e, id) => {
    e.preventDefault();

    const el = document.getElementById(id);
    if (!el) return;

    const offsetPosition =
      el.getBoundingClientRect().top + window.pageYOffset - 88;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="scroll-mt-24 relative min-h-screen overflow-hidden"
      style={{ background: '#0a0a0f' }}
    >
      {/* Ambient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 70% 50%, rgba(168,85,247,0.13) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 20% 80%, rgba(236,72,153,0.10) 0%, transparent 55%),
            radial-gradient(ellipse 40% 30% at 85% 10%, rgba(99,102,241,0.08) 0%, transparent 50%)
          `,
        }}
      />

      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Main layout */}
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16 flex flex-col justify-center min-h-screen pb-16 pt-28">
        {/* Top badge */}
        <motion.div {...fadeUp(0)} className="mb-10">
          <span
            className="inline-flex items-center gap-2 text-xs tracking-widest font-semibold uppercase px-4 py-2 rounded-full"
            style={{
              background: 'rgba(168,85,247,0.12)',
              border: '1px solid rgba(168,85,247,0.25)',
              color: '#c084fc',
              letterSpacing: '0.12em',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: '#a855f7' }}
            />
            Available • Work-Study 2026 
          </span>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-center">
          {/* Left content */}
          <div className="space-y-8 max-w-2xl">
            {/* Role label */}
            <motion.p
              {...fadeUp(0.08)}
              className="text-sm font-medium tracking-widest uppercase"
              style={{ color: '#a78bfa', letterSpacing: '0.18em' }}
            >
              Full Stack Developer · Data & AI
            </motion.p>

            {/* Name */}
            <motion.h1
              {...fadeUp(0.15)}
              className="font-extrabold leading-[1.04] tracking-tight"
              style={{
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                fontFamily: '"Syne", sans-serif',
              }}
            >
              <span style={{ color: '#f1f0fb' }}>Yesmine</span>
              <br />

              <span
                style={{
                  background:
                    'linear-gradient(135deg, #e879f9 0%, #a855f7 45%, #818cf8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Cherif
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              {...fadeUp(0.22)}
              className="text-lg leading-relaxed"
              style={{ color: '#94a3b8', maxWidth: '52ch' }}
            >
              Software Engineering student passionate about{' '}
              <strong style={{ color: '#e2e8f0', fontWeight: 600 }}>
                Full Stack Development
              </strong>{' '}
              and{' '}
              <strong style={{ color: '#e2e8f0', fontWeight: 600 }}>
                Artificial Intelligence
              </strong>
              . I have designed business-oriented platforms using Angular,
              Laravel, and Keycloak, with integrated data analysis modules.
            </motion.p>

            {/* Tech stack pills */}
            <motion.div {...fadeUp(0.28)} className="flex flex-wrap gap-2.5">
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-semibold px-3.5 py-1.5 rounded-full"
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

            {/* CTA buttons */}
            <motion.div
              {...fadeUp(0.34)}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="group flex items-center justify-center gap-3 font-semibold text-sm px-8 py-4 rounded-2xl transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #a855f7, #818cf8)',
                  color: '#fff',
                  boxShadow: '0 0 0 0 rgba(168,85,247,0)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    '0 8px 32px rgba(168,85,247,0.35)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    '0 0 0 0 rgba(168,85,247,0)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                View My Projects
                <HiArrowDown className="text-base transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>

              <a
                href="/cv-yesmine-cherif.pdf"
                download
                className="flex items-center justify-center gap-3 font-semibold text-sm px-8 py-4 rounded-2xl transition-all duration-300"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(168,85,247,0.35)',
                  color: '#c4b5fd',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(168,85,247,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(168,85,247,0.55)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(168,85,247,0.35)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <HiDownload className="text-base" />
                Download My CV
              </a>
            </motion.div>

            {/* Social links + tagline */}
            <motion.div {...fadeUp(0.4)} className="flex items-center gap-5 pt-1">
              <a
                href="https://github.com/yesmine879"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-all duration-300"
                style={{ color: '#64748b' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#c4b5fd';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#64748b';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaGithub className="text-2xl" />
              </a>

              <a
                href="https://www.linkedin.com/in/yesmine-cherif/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-all duration-300"
                style={{ color: '#64748b' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#c4b5fd';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#64748b';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <FaLinkedin className="text-2xl" />
              </a>

              <span
                className="text-xs ml-2"
                style={{ color: '#475569', letterSpacing: '0.04em' }}
              >
                Guaranteed response · Open to opportunities in France
              </span>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="hidden lg:flex justify-center"
          >
            <motion.div style={{ y: imgY }}>
              <div className="relative">
                {/* Glow ring */}
                <div
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
                  {/* Inner glass */}
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
                      style={{ width: '340px', height: '420px' }}
                    />
                  </div>
                </div>

                {/* Floating badge — education */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.7,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute -right-6 top-10 flex items-center gap-3 px-4 py-3 rounded-2xl"
                  style={{
                    background: 'rgba(15,10,30,0.85)',
                    border: '1px solid rgba(168,85,247,0.3)',
                    backdropFilter: 'blur(16px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-lg font-bold shrink-0"
                    style={{
                      background: 'rgba(168,85,247,0.2)',
                      color: '#c084fc',
                    }}
                  >
                    🎓
                  </div>

                  <div>
                    <p
                      className="text-xs font-semibold"
                      style={{ color: '#e2e8f0' }}
                    >
                      Software Engineering
                    </p>

                    <p className="text-xs" style={{ color: '#64748b' }}>
                      Class of 2026
                    </p>
                  </div>
                </motion.div>

                {/* Floating badge — open to work */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.85,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute -left-6 bottom-12 flex items-center gap-3 px-4 py-3 rounded-2xl"
                  style={{
                    background: 'rgba(15,10,30,0.85)',
                    border: '1px solid rgba(74,222,128,0.25)',
                    backdropFilter: 'blur(16px)',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0 animate-pulse"
                    style={{ background: '#4ade80' }}
                  />

                  <p
                    className="text-xs font-semibold"
                    style={{ color: '#86efac' }}
                  >
                    Open to Work
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: '#334155' }}
        >
          <span
            className="text-xs tracking-widest uppercase"
            style={{ letterSpacing: '0.16em', fontSize: '0.65rem' }}
          >
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.6,
              ease: 'easeInOut',
            }}
          >
            <HiArrowDown className="text-base" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;