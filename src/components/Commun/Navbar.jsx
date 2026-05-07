// src/components/Navbar.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBars,
  FaTimes,
  FaCode,
  FaGraduationCap,
  FaUser,
  FaFolderOpen,
  FaEnvelope,
  FaRoute,
  FaHome,
} from 'react-icons/fa';

import yesmineImg from '../../assets/images/yesmine cherif.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  const navItems = [
    { id: 'accueil', label: 'Accueil', icon: <FaHome /> },
    { id: 'about', label: 'À propos', icon: <FaUser /> },
    { id: 'parcours', label: 'Parcours', icon: <FaRoute /> },
    { id: 'projets', label: 'Projets', icon: <FaFolderOpen /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          const currentId = visibleSections[0].target.id;
          setActiveSection(currentId);

          if (window.location.hash !== `#${currentId}`) {
            window.history.replaceState(null, '', `#${currentId}`);
          }
        }
      },
      {
        threshold: [0.18, 0.3, 0.45],
        rootMargin: '-110px 0px -38% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    const section = document.getElementById(hash);
    if (!section) return;

    const navbarOffset = 90;
    const top = section.offsetTop - navbarOffset;

    setTimeout(() => {
      window.scrollTo({
        top,
        behavior: 'smooth',
      });

      setActiveSection(hash);
    }, 100);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();

    const section = document.getElementById(id);
    if (!section) return;

    const navbarOffset = 90;
    const top = section.offsetTop - navbarOffset;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });

    window.history.pushState(null, '', `#${id}`);
    setActiveSection(id);
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#071226]/90 backdrop-blur-2xl border-b border-fuchsia-500/20 shadow-[0_18px_55px_rgba(0,0,0,0.35)]'
          : 'bg-[#071226]/72 backdrop-blur-xl border-b border-white/5'
      }`}
    >
      {/* Glow top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Brand */}
          <motion.a
            href="#accueil"
            onClick={(e) => handleNavClick(e, 'accueil')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex min-w-0 items-center gap-4"
          >
            <div className="relative shrink-0">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-500 p-[2px] shadow-lg shadow-fuchsia-500/25">
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#071226]">
                  <span className="text-xl font-black bg-gradient-to-br from-fuchsia-300 to-violet-300 bg-clip-text text-transparent">
                    YC
                  </span>
                </div>
              </div>

              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-violet-600 to-fuchsia-600 opacity-30 blur-xl -z-10 group-hover:opacity-55 transition-opacity duration-500" />
            </div>

            <div className="hidden sm:block min-w-0">
              <h1 className="truncate text-2xl lg:text-3xl font-black text-white leading-none tracking-tight">
                Yesmine Cherif
              </h1>

              <p className="mt-2 text-[11px] lg:text-xs text-fuchsia-300 font-semibold flex items-center gap-1.5">
                <FaGraduationCap />
                3ᵉ Licence Informatique · IIT
              </p>
            </div>
          </motion.a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center justify-center gap-2 rounded-3xl border border-white/8 bg-white/[0.035] p-2 backdrop-blur-2xl">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    color: isActive ? '#FFFFFF' : '#CBD5E1',
                  }}
                  className="relative overflow-hidden px-4 xl:px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300"
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 shadow-[0_10px_30px_rgba(168,85,247,0.32)]"
                      transition={{
                        type: 'spring',
                        stiffness: 420,
                        damping: 34,
                      }}
                    />
                  )}

                  {!isActive && (
                    <span className="absolute inset-0 rounded-2xl bg-white/0 hover:bg-white/[0.06] transition-colors duration-300" />
                  )}

                  <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
                    <span className={isActive ? 'text-white' : 'text-fuchsia-300'}>
                      {item.icon}
                    </span>
                    {item.label}
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3 shrink-0">
            

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="lg:hidden h-11 w-11 rounded-2xl bg-white/[0.06] backdrop-blur-xl border border-white/10 text-slate-200 hover:text-white hover:border-fuchsia-400/35 hover:bg-fuchsia-500/10 transition flex items-center justify-center"
              aria-label="Ouvrir le menu"
            >
              <FaBars className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 32, stiffness: 260 }}
              className="fixed inset-y-0 right-0 z-50 w-[86%] max-w-[360px] bg-[#071226]/96 backdrop-blur-3xl border-l border-fuchsia-500/25 lg:hidden overflow-hidden"
            >
              {/* Mobile bg */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.16),transparent_30%)]" />

              <div className="relative z-10 flex h-full flex-col p-6">
                {/* Mobile header */}
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-500 p-[2px] shadow-lg shadow-fuchsia-500/25 shrink-0">
                      <img
                        src={yesmineImg}
                        alt="Yesmine Cherif"
                        className="h-full w-full rounded-2xl object-cover"
                      />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xl font-black text-white leading-tight">
                        Yesmine Cherif
                      </h3>

                      <p className="text-sm text-fuchsia-300 mt-1">
                        Full Stack · Data & AI
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="h-11 w-11 rounded-2xl bg-white/[0.06] border border-white/10 text-slate-200 hover:text-white hover:bg-fuchsia-500/10 transition flex items-center justify-center shrink-0"
                    aria-label="Fermer le menu"
                  >
                    <FaTimes className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile nav */}
                <div className="flex flex-col gap-3">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;

                    return (
                      <motion.a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => handleNavClick(e, item.id)}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          background: isActive
                            ? 'linear-gradient(135deg, rgba(124,58,237,0.42), rgba(236,72,153,0.36))'
                            : 'rgba(255,255,255,0.045)',
                          color: isActive ? '#FFFFFF' : '#CBD5E1',
                          border: isActive
                            ? '1px solid rgba(236,72,153,0.35)'
                            : '1px solid rgba(255,255,255,0.08)',
                        }}
                        className="flex items-center gap-4 rounded-2xl px-5 py-4 text-base font-bold transition-all"
                      >
                        <span
                          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                            isActive
                              ? 'bg-white/15 text-white'
                              : 'bg-white/[0.04] text-fuchsia-300'
                          }`}
                        >
                          {item.icon}
                        </span>

                        {item.label}
                      </motion.a>
                    );
                  })}
                </div>

                {/* Mobile bottom */}
                <div className="mt-auto pt-8">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                    <p className="text-white font-bold mb-2">
                      Disponible · Opportunités 2026
                    </p>

                    <p className="text-slate-400 text-sm leading-relaxed">
                      Stage PFE, alternance, collaboration ou projet full stack.
                    </p>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;