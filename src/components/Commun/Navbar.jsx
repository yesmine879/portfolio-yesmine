import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import {
  FaBars,
  FaTimes,
  FaGraduationCap,
  FaUser,
  FaFolderOpen,
  FaEnvelope,
  FaRoute,
  FaHome,
  FaUsers,
} from 'react-icons/fa';

import yesmineImg from '../../assets/images/yesmine cherif.jpg';
import { useLanguage } from '../../context/LanguageContext.jsx';

/* =========================================================
   NAVIGATION ITEMS
   =========================================================
   Toutes les entrées sont des SECTIONS de la Home.
========================================================= */

const navItems = [
  {
    id: 'home',
    icon: <FaHome />,
    type: 'section',
  },
  {
    id: 'about',
    icon: <FaUser />,
    type: 'section',
  },
  {
    id: 'journey',
    icon: <FaRoute />,
    type: 'section',
  },
  {
    id: 'activities',
    icon: <FaUsers />,
    type: 'section',
  },
  {
    id: 'projects',
    icon: <FaFolderOpen />,
    type: 'section',
  },
  {
    id: 'contact',
    icon: <FaEnvelope />,
    type: 'section',
  },
];

const NAVBAR_OFFSET = 95;

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  /* =========================================================
     DETECT SCROLL + ACTIVE SECTION
  ========================================================= */

  useEffect(() => {
    let ticking = false;
    let frameId = null;
    let sectionOffsets = [];

    const measureSections = () => {
      sectionOffsets = navItems
        .map((item) => {
          const section = document.getElementById(item.id);
          return section ? { id: item.id, top: section.offsetTop } : null;
        })
        .filter(Boolean);
    };

    const updateScrollState = () => {
      const scrollY = window.scrollY;

      setScrolled((previous) => {
        const next = scrollY > 15;
        return previous === next ? previous : next;
      });

      let currentSection = 'home';

      sectionOffsets.forEach((section) => {
        if (scrollY + NAVBAR_OFFSET + 40 >= section.top) {
          currentSection = section.id;
        }
      });

      setActiveSection((previous) =>
        previous === currentSection ? previous : currentSection
      );

      ticking = false;
      frameId = null;
    };

    const handleScroll = () => {
      if (!ticking) {
        frameId = window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    const handleResize = () => {
      measureSections();
      handleScroll();
    };

    measureSections();
    updateScrollState();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    window.addEventListener('resize', handleResize, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  /* =========================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ========================================================= */

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  /* =========================================================
     CLOSE MOBILE MENU WITH ESCAPE
  ========================================================= */

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  /* =========================================================
     HANDLE INITIAL URL HASH
  ========================================================= */

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');

    if (!hash) return;

    const section = document.getElementById(hash);

    if (!section) return;

    const timer = setTimeout(() => {
      const top =
        section.getBoundingClientRect().top +
        window.scrollY -
        NAVBAR_OFFSET;

      window.scrollTo({
        top: Math.max(0, top),
        behavior: 'auto',
      });

      setActiveSection(hash);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  /* =========================================================
     NAVIGATION CLICK
  ========================================================= */

  const handleNavClick = (event, item) => {
    event.preventDefault();

    const section = document.getElementById(item.id);

    /*
      Si la section n'existe pas sur la page actuelle,
      on retourne à la Home avec le bon hash.
    */
    if (!section) {
      if (window.location.pathname !== '/') {
        window.location.href = `/#${item.id}`;
        return;
      }

      console.warn(
        `Section "${item.id}" not found in the page.`
      );

      return;
    }

    /*
      Calcul de la position en tenant compte
      de la hauteur de la navbar.
    */
    const top =
      section.getBoundingClientRect().top +
      window.scrollY -
      NAVBAR_OFFSET;

    /*
      Scroll fluide vers la section.
    */
    window.scrollTo({
      top: Math.max(0, top),
      behavior: 'smooth',
    });

    /*
      Met immédiatement le bouton en actif.
    */
    setActiveSection(item.id);

    /*
      Met à jour l'URL sans recharger la page.
    */
    window.history.pushState(
      null,
      '',
      `#${item.id}`
    );

    /*
      Ferme le menu mobile.
    */
    setIsOpen(false);
  };

  /* =========================================================
     GO HOME
  ========================================================= */

  const handleBrandClick = (event) => {
    event.preventDefault();

    const homeSection = document.getElementById('home');

    if (!homeSection) {
      window.location.href = '/';
      return;
    }

    const top =
      homeSection.getBoundingClientRect().top +
      window.scrollY -
      NAVBAR_OFFSET;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: 'smooth',
    });

    setActiveSection('home');

    window.history.pushState(
      null,
      '',
      '#home'
    );

    setIsOpen(false);
  };

  /* =========================================================
     GET NAV LABEL
  ========================================================= */

  const getNavLabel = (item) => {
    return t(`nav.${item.id}`);
  };

  /* =========================================================
     RENDER
  ========================================================= */

  return (
    <motion.nav
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.55,
        ease: 'easeOut',
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? 'bg-[#071226]/78 border-b border-fuchsia-500/20 shadow-[0_12px_32px_rgba(0,0,0,0.28)]'
          : 'bg-[#071226]/72 border-b border-white/5'
      }`}
    >
      {/* =====================================================
          TOP GLOW LINE
      ===================================================== */}

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">

          {/* =================================================
              BRAND
          ================================================= */}

          <motion.a
            href="#home"
            onClick={handleBrandClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex min-w-0 shrink-0 items-center gap-4 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071226]"
            aria-label={t('goHome')}
          >
            {/* Logo */}

            <div className="relative shrink-0">
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-500 p-[2px] shadow-lg shadow-fuchsia-500/25">
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-[#071226]">
                  <span className="bg-gradient-to-br from-fuchsia-300 to-violet-300 bg-clip-text text-xl font-black text-transparent">
                    YC
                  </span>
                </div>
              </div>

              <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-br from-violet-600 to-fuchsia-600 opacity-30 blur-xl transition-opacity duration-500 group-hover:opacity-55" />
            </div>

            {/* Name */}

            <div className="hidden min-w-0 sm:block">
              <h1 className="truncate text-2xl font-black leading-none tracking-tight text-white lg:text-3xl">
                Yesmine Cherif
              </h1>

              <p className="mt-2 flex items-center gap-1.5 text-[11px] font-semibold text-fuchsia-300 lg:text-xs">
                <FaGraduationCap />

                {t('engineeringCycle')}
              </p>
            </div>
          </motion.a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div className="hidden items-center justify-center gap-2 rounded-3xl border border-white/10 bg-white/[0.035] p-2 lg:flex">

            {navItems.map((item) => {
              const isActive =
                activeSection === item.id;

              return (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) =>
                    handleNavClick(event, item)
                  }
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  aria-current={
                    isActive ? 'page' : undefined
                  }
                  className="relative overflow-hidden rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 xl:px-5"
                  style={{
                    color: isActive
                      ? '#FFFFFF'
                      : '#CBD5E1',
                  }}
                >
                  {/* Active background */}

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

                  {/* Hover background */}

                  {!isActive && (
                    <span className="absolute inset-0 rounded-2xl bg-white/0 transition-colors duration-300 hover:bg-white/[0.06]" />
                  )}

                  {/* Content */}

                  <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">

                    <span
                      className={
                        isActive
                          ? 'text-white'
                          : 'text-fuchsia-300'
                      }
                    >
                      {item.icon}
                    </span>

                    {getNavLabel(item)}

                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* =================================================
              LANGUAGE + MOBILE BUTTON
          ================================================= */}

          <div className="flex shrink-0 items-center gap-3">

            {/* Language */}

            <div
              className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/[0.06] p-1 text-xs font-black text-slate-300"
              role="group"
              aria-label={t('language')}
            >
              {['en', 'fr'].map((code, index) => (
                <React.Fragment key={code}>
                  {index > 0 && (
                    <span className="h-5 w-px bg-white/15" aria-hidden="true" />
                  )}

                  <button
                    type="button"
                    onClick={() => setLanguage(code)}
                    aria-pressed={language === code}
                    className={`rounded-lg px-4 py-1.5 transition-all duration-200 ${
                      language === code
                        ? 'bg-fuchsia-500 text-white shadow-sm'
                        : 'px-4 hover:text-white'
                    }`}
                  >
                    {code.toUpperCase()}
                  </button>
                </React.Fragment>
              ))}
            </div>

            {/* Mobile button */}

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label={t('openNavigation')}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-slate-200 backdrop-blur-xl transition hover:border-fuchsia-400/35 hover:bg-fuchsia-500/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400 lg:hidden"
            >
              <FaBars className="h-5 w-5" />
            </button>

          </div>
        </div>
      </div>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            />

            {/* Sidebar */}

            <motion.aside
              id="mobile-navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                damping: 32,
                stiffness: 260,
              }}
              role="dialog"
              aria-modal="true"
              aria-label={t('mobileNavigation')}
              className="fixed inset-y-0 right-0 z-50 w-[86%] max-w-[360px] overflow-hidden border-l border-fuchsia-500/25 bg-[#071226]/96 backdrop-blur-3xl lg:hidden"
            >

              {/* Background glow */}

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(236,72,153,0.18),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(124,58,237,0.16),transparent_30%)]" />

              <div className="relative z-10 flex h-full flex-col p-6">

                {/* =================================================
                    MOBILE HEADER
                ================================================= */}

                <div className="mb-8 flex items-start justify-between gap-4">

                  <div className="flex min-w-0 items-center gap-4">

                    {/* Profile */}

                    <div className="h-16 w-16 shrink-0 rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-500 p-[2px] shadow-lg shadow-fuchsia-500/25">
                      <img
                        src={yesmineImg}
                        alt="Yesmine Cherif"
                        className="h-full w-full rounded-2xl object-cover"
                      />
                    </div>

                    {/* Name */}

                    <div className="min-w-0">

                      <h3 className="text-xl font-black leading-tight text-white">
                        Yesmine Cherif
                      </h3>

                      <p className="mt-1 text-sm text-fuchsia-300">
                        {t('profileRole')}
                      </p>

                    </div>

                  </div>

                  {/* Close */}

                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label={t('closeNavigation')}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-slate-200 transition hover:bg-fuchsia-500/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
                  >
                    <FaTimes className="h-5 w-5" />
                  </button>

                </div>

                {/* =================================================
                    MOBILE NAVIGATION
                ================================================= */}

                <div className="flex flex-col gap-3">

                  {navItems.map((item) => {
                    const isActive =
                      activeSection === item.id;

                    return (
                      <motion.a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(event) =>
                          handleNavClick(event, item)
                        }
                        whileTap={{ scale: 0.98 }}
                        aria-current={
                          isActive
                            ? 'page'
                            : undefined
                        }
                        style={{
                          background: isActive
                            ? 'linear-gradient(135deg, rgba(124,58,237,0.42), rgba(236,72,153,0.36))'
                            : 'rgba(255,255,255,0.045)',

                          color: isActive
                            ? '#FFFFFF'
                            : '#CBD5E1',

                          border: isActive
                            ? '1px solid rgba(236,72,153,0.35)'
                            : '1px solid rgba(255,255,255,0.08)',
                        }}
                        className="flex items-center gap-4 rounded-2xl px-5 py-4 text-base font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400"
                      >

                        <span
                          className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                            isActive
                              ? 'bg-white/15 text-white'
                              : 'bg-white/[0.04] text-fuchsia-300'
                          }`}
                        >
                          {item.icon}
                        </span>

                        {getNavLabel(item)}

                      </motion.a>
                    );
                  })}

                </div>

                {/* =================================================
                    MOBILE BOTTOM
                ================================================= */}

                <div className="mt-auto pt-8">

                  <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">

                    <p className="mb-2 font-bold text-white">
                      {t('academicStatus')}
                    </p>

                    <p className="text-sm leading-relaxed text-slate-400">
                      {t('engineeringCycle')}
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
