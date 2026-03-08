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
        rootMargin: '-100px 0px -35% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);

    if (section) {
      const navbarOffset = 100;
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
          ? 'bg-gray-900/90 backdrop-blur-2xl border-b border-pink-500/20'
          : 'bg-gray-900/70 backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 p-0.5">
                <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-400">
                    YC
                  </span>
                </div>
              </div>
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 opacity-40 blur-xl -z-10"></div>
            </div>

            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">Yesmine Cherif</h1>
              <p className="text-xs text-pink-400 font-medium flex items-center gap-1">
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
                className={`relative px-6 py-3 rounded-2xl text-sm font-medium transition-all ${
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

          <div className="flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.08 }} className="group relative">
              <img
                src={yesmineImg}
                alt="Yesmine Cherif"
                className="w-11 h-11 rounded-full ring-4 ring-purple-500/50 group-hover:ring-pink-500 transition-all duration-500 object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 opacity-0 group-hover:opacity-70 blur-xl transition-opacity duration-500 -z-10"></div>
            </motion.div>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-xl bg-white/5 backdrop-blur-md border border-pink-500/20 text-gray-300 hover:text-pink-400"
            >
              {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30 }}
            className="fixed inset-y-0 right-0 w-80 bg-gray-900/95 backdrop-blur-3xl border-l border-pink-500/30 lg:hidden z-50"
          >
            <div className="p-8">
              <div className="flex items-center gap-4 mb-10">
                <img
                  src={yesmineImg}
                  alt="Yesmine Cherif"
                  className="w-20 h-20 rounded-2xl ring-4 ring-pink-500/50 object-cover"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white">Yesmine Cherif</h3>
                  <p className="text-pink-400">Étudiante en Informatique • IIT</p>
                </div>
              </div>

              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="block py-4 text-lg text-gray-300 hover:text-pink-400 transition"
                >
                  {item.icon && <span className="mr-3">{item.icon}</span>}
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        />
      )}
    </motion.nav>
  );
};

export default Navbar;