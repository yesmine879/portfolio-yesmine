import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaCode, FaGraduationCap } from 'react-icons/fa';
import yesmineImg from '../../assets/images/yesmine.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  const navItems = [
    { id: 'accueil', label: 'Accueil', icon: <FaCode /> },
    { id: 'about', label: 'À propos', icon: null },
    { id: 'parcours', label: 'Parcours', icon: null },
    { id: 'projets', label: 'Projets', icon: null },
    { id: 'contact', label: 'Contact', icon: null },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
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
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.2, 0.35, 0.5],
        rootMargin: '-120px 0px -35% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);

    if (section) {
      const navbarOffset = 88;
      const top = section.offsetTop - navbarOffset;

      window.scrollTo({
        top,
        behavior: 'smooth',
      });

      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gray-900/90 backdrop-blur-2xl border-b border-pink-500/20 shadow-lg'
          : 'bg-gray-900/70 backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between gap-3">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex min-w-0 items-center gap-3 sm:gap-4"
          >
            <div className="relative shrink-0">
              <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 p-0.5">
                <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gray-900">
                  <span className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-400">
                    YC
                  </span>
                </div>
              </div>
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 opacity-40 blur-xl -z-10"></div>
            </div>

            <div className="hidden sm:block min-w-0">
              <h1 className="truncate text-base sm:text-xl font-bold text-white">
                Yesmine Cherif
              </h1>
              <p className="text-[10px] sm:text-xs text-pink-400 font-medium flex items-center gap-1">
                <FaGraduationCap /> 3ᵉ Licence Informatique • IIT
              </p>
            </div>
          </motion.div>

          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-5 py-3 rounded-2xl text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-gray-300 hover:text-pink-300'
                }`}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/40 to-pink-600/40 backdrop-blur-md border border-pink-500/30"
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {item.icon}
                  {item.label}
                </span>
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <motion.div whileHover={{ scale: 1.05 }} className="group relative">
              <img
                src={yesmineImg}
                alt="Yesmine Cherif"
                className="w-9 h-9 sm:w-11 sm:h-11 rounded-full ring-4 ring-purple-500/50 group-hover:ring-pink-500 transition-all duration-500 object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 opacity-0 group-hover:opacity-70 blur-xl transition-opacity duration-500 -z-10"></div>
            </motion.div>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 sm:p-3 rounded-xl bg-white/5 backdrop-blur-md border border-pink-500/20 text-gray-300 hover:text-pink-400 transition"
              aria-label="Ouvrir le menu"
            >
              {isOpen ? <FaTimes className="w-5 h-5 sm:w-6 sm:h-6" /> : <FaBars className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 260 }}
              className="fixed inset-y-0 right-0 z-50 w-[85%] max-w-[320px] bg-gray-900/95 backdrop-blur-3xl border-l border-pink-500/30 lg:hidden"
            >
              <div className="flex h-full flex-col p-6 sm:p-8">
                <div className="mb-8 flex items-center gap-4">
                  <img
                    src={yesmineImg}
                    alt="Yesmine Cherif"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ring-4 ring-pink-500/50 object-cover"
                  />
                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                      Yesmine Cherif
                    </h3>
                    <p className="text-sm sm:text-base text-pink-400">
                      Étudiante en Informatique • IIT
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center gap-3 rounded-2xl px-4 py-4 text-base sm:text-lg transition ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-white border border-pink-500/20'
                          : 'text-gray-300 hover:text-pink-400 hover:bg-white/5'
                      }`}
                    >
                      {item.icon && <span>{item.icon}</span>}
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;