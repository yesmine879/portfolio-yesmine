import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import {
  FaReact, FaAngular, FaLaravel, FaPython, FaNodeJs,
  FaCertificate, FaUsers, FaGraduationCap,
  FaExternalLinkAlt, FaDownload, FaJava, FaPhp,
  FaGitAlt, FaDatabase, FaMicrochip, FaArrowRight,
} from 'react-icons/fa';
import {
  SiSpringboot, SiFlutter, SiMysql, SiArduino, SiJavascript,
} from 'react-icons/si';

import codecore from '../../assets/pdf/codecore.pdf';
import awsCloudPdf from '../../assets/pdf/aws-cloud-foundations.pdf';
import jobFairPdf from '../../assets/pdf/job-fair-10.pdf';
import odysseePdf from '../../assets/pdf/odyssee-des-genies.pdf';
import arduinoHackathonPdf from '../../assets/pdf/arduino-hackathon.pdf';
import hackvisionPdf from '../../assets/pdf/hackvision.pdf';
import ibmPmPdf from '../../assets/pdf/ibm-project-management.pdf';
import scrumPdf from '../../assets/pdf/scrum-fundamentals.pdf';
import aticSpeakerPdf from '../../assets/pdf/atic-speaker.pdf';
import math1Pdf from '../../assets/pdf/math1.pdf';
import pianoPdf from '../../assets/pdf/pianofr.pdf';
import nvidia from '../../assets/pdf/my_learning_nvidia.pdf';
const cvFile = '/CV.pdf';

/* ─── Animated Counter ──────────────────────────────────────── */
const AnimatedCounter = ({ value, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseInt(value);
    const duration = 1800;
    const step = duration / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-black text-indigo-600 tabular-nums">
        {count}<span className="text-indigo-400">+</span>
      </div>
      <div className="text-sm font-semibold text-gray-500 uppercase tracking-widest mt-1">{label}</div>
    </div>
  );
};

/* ─── SVG Certificate Preview ───────────────────────────────── */
const CertPreview = ({ title, issuer, date, accent, bg1, bg2, logo }) => {
  const id = issuer.replace(/\s/g, '-');
  const shortTitle = title.length > 30 ? title.substring(0, 28) + '…' : title;
  const titlePart2 = title.length > 30 ? title.substring(28, 56) + (title.length > 56 ? '…' : '') : '';
  return (
    <svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <linearGradient id={`bg-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={bg1} />
          <stop offset="100%" stopColor={bg2} />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill={`url(#bg-${id})`} />
      <rect x="8" y="8" width="304" height="184" fill="none" stroke={accent} strokeWidth="2" rx="6" opacity="0.55" />
      <rect x="14" y="14" width="292" height="172" fill="none" stroke={accent} strokeWidth="0.8" rx="3" opacity="0.3" />
      <circle cx="14" cy="14" r="3.5" fill={accent} opacity="0.5" />
      <circle cx="306" cy="14" r="3.5" fill={accent} opacity="0.5" />
      <circle cx="14" cy="186" r="3.5" fill={accent} opacity="0.5" />
      <circle cx="306" cy="186" r="3.5" fill={accent} opacity="0.5" />
      <line x1="40" y1="30" x2="280" y2="30" stroke={accent} strokeWidth="0.7" opacity="0.35" />
      <rect x="100" y="20" width="120" height="17" rx="8.5" fill={accent} opacity="0.12" />
      <text x="160" y="31.5" textAnchor="middle" fill={accent} fontSize="6.5" fontWeight="800" fontFamily="'Courier New', monospace" letterSpacing="2">
        {issuer.length > 18 ? issuer.substring(0, 17) + '…' : issuer}
      </text>
      <circle cx="160" cy="90" r="32" fill="white" opacity="0.5" />
      <circle cx="160" cy="90" r="32" fill="none" stroke={accent} strokeWidth="1.8" opacity="0.65" />
      <circle cx="160" cy="90" r="24" fill="none" stroke={accent} strokeWidth="0.7" strokeDasharray="3,2" opacity="0.45" />
      <text x="160" y="97" textAnchor="middle" fontSize="22" fontFamily="serif" fill={accent} opacity="0.9">{logo}</text>
      <text x="160" y="143" textAnchor="middle" fill="#1e1b4b" fontSize="7.5" fontFamily="Georgia, 'Times New Roman', serif" fontStyle="italic" opacity="0.5" letterSpacing="1">This certifies that</text>
      <text x="160" y="155" textAnchor="middle" fill="#1e1b4b" fontSize="11" fontFamily="Georgia, 'Times New Roman', serif" fontWeight="700">Yesmine Cherif</text>
      <text x="160" y="168" textAnchor="middle" fill="#374151" fontSize="8" fontFamily="Georgia, serif" opacity="0.85">{shortTitle}</text>
      {titlePart2 && <text x="160" y="178" textAnchor="middle" fill="#374151" fontSize="7.5" fontFamily="Georgia, serif" opacity="0.7">{titlePart2}</text>}
      <text x="160" y="192" textAnchor="middle" fill={accent} fontSize="6.5" fontFamily="monospace" letterSpacing="0.8" opacity="0.75">{date}</text>
      <line x1="40" y1="184" x2="280" y2="184" stroke={accent} strokeWidth="0.7" opacity="0.35" />
    </svg>
  );
};

/* ─── Data ──────────────────────────────────────────────────── */
const certificates = [
  { title: 'CodeCore Challenge 2026', issuer: 'CODECORE', category: 'Hackathon', date: '2026', tags: ['Hackathon', 'Organisation', 'Tech'], file: codecore, accent: '#d97706', bg1: '#fffbeb', bg2: '#fef3c7', logo: '🏆' },
  { title: 'Scrum Fundamentals Certified', issuer: 'SCRUMSTUDY', category: 'Certification', date: '2024', tags: ['Scrum', 'Agile', 'Project'], file: scrumPdf, accent: '#4f46e5', bg1: '#eef2ff', bg2: '#e0e7ff', logo: '✦' },
  { title: 'Project Management Fundamentals', issuer: 'IBM SKILLSBUILD', category: 'Certification', date: '2024', tags: ['IBM', 'Management', 'Planning'], file: ibmPmPdf, accent: '#0369a1', bg1: '#f0f9ff', bg2: '#e0f2fe', logo: '◈' },
  { title: 'AWS Cloud Foundations', issuer: 'AWS ACADEMY', category: 'Certification', date: '2024', tags: ['AWS', 'Cloud', 'Infrastructure'], file: awsCloudPdf, accent: '#ea580c', bg1: '#fff7ed', bg2: '#ffedd5', logo: '☁' },
  { title: 'Getting Started with Deep Learning', issuer: 'NVIDIA', category: 'Certification', date: '2024', tags: ['Deep Learning', 'AI', 'Neural Nets'], file: nvidia, accent: '#16a34a', bg1: '#f0fdf4', bg2: '#dcfce7', logo: '⬡' },
  { title: 'Speaker – ATIC AfroTech Congress', issuer: 'ATIC CONGRESS', category: 'Attestation', date: '2024', tags: ['Speaker', 'Tech', 'AfroTech'], file: aticSpeakerPdf, accent: '#db2777', bg1: '#fdf2f8', bg2: '#fce7f3', logo: '🎤' },
  { title: 'Hackathon HACKVISION', issuer: 'HACKVISION', category: 'Attestation', date: '2023', tags: ['Hackathon', 'Innovation', 'Dev'], file: hackvisionPdf, accent: '#7c3aed', bg1: '#faf5ff', bg2: '#ede9fe', logo: '◉' },
  { title: 'Hackathon Arduino & Robot Suiveur', issuer: 'IIT SFAX', category: 'Attestation', date: '2023', tags: ['Arduino', 'IoT', 'Robotique'], file: arduinoHackathonPdf, accent: '#0d9488', bg1: '#f0fdfa', bg2: '#ccfbf1', logo: '⚙' },
  { title: "L'Odyssée des Génies", issuer: 'COMPÉTITION', category: 'Attestation', date: '2023', tags: ['Compétition', 'Sciences', 'Innovation'], file: odysseePdf, accent: '#0284c7', bg1: '#f0f9ff', bg2: '#dbeafe', logo: '★' },
  { title: 'Labyrinthe des Nombres', issuer: 'IIT SFAX MATH', category: 'Attestation', date: '2023', tags: ['Mathématiques', 'Concours', 'IIT'], file: math1Pdf, accent: '#c026d3', bg1: '#fdf4ff', bg2: '#fae8ff', logo: '∑' },
  { title: "Comité d'organisation – Job Fair 10", issuer: 'IIT SFAX', category: 'Attestation', date: '2023', tags: ['Organisation', 'Emploi', 'Événement'], file: jobFairPdf, accent: '#b45309', bg1: '#fffbeb', bg2: '#fef9c3', logo: '◆' },
  { title: 'Festival National de Piano', issuer: 'FESTIVAL NATIONAL', category: 'Certificat', date: 'Mars 2022', tags: ['Piano', 'Musique', 'Art'], file: pianoPdf, accent: '#6d28d9', bg1: '#f5f3ff', bg2: '#ede9fe', logo: '♪' },
];

const technicalSkills = [
  { icon: <FaReact />, name: 'React / React Native', color: 'text-cyan-500', level: 90 },
  { icon: <FaAngular />, name: 'Angular', color: 'text-red-600', level: 80 },
  { icon: <FaLaravel />, name: 'Laravel', color: 'text-rose-600', level: 85 },
  { icon: <FaNodeJs />, name: 'Node.js', color: 'text-green-600', level: 82 },
  { icon: <FaPython />, name: 'Python / Flask', color: 'text-yellow-500', level: 78 },
  { icon: <SiFlutter />, name: 'Flutter', color: 'text-sky-500', level: 70 },
  { icon: <FaJava />, name: 'Java / OOP', color: 'text-orange-600', level: 75 },
  { icon: <SiSpringboot />, name: 'Spring Boot', color: 'text-emerald-600', level: 72 },
  { icon: <FaPhp />, name: 'PHP', color: 'text-indigo-500', level: 80 },
  { icon: <FaDatabase />, name: 'SQL / Bases de données', color: 'text-blue-600', level: 85 },
  { icon: <SiMysql />, name: 'MySQL', color: 'text-cyan-700', level: 83 },
  { icon: <SiJavascript />, name: 'JavaScript', color: 'text-amber-500', level: 88 },
  { icon: <FaGitAlt />, name: 'Git / GitHub', color: 'text-orange-500', level: 87 },
  { icon: <FaMicrochip />, name: 'IoT / Embarqué', color: 'text-violet-600', level: 65 },
  { icon: <SiArduino />, name: 'Arduino', color: 'text-teal-600', level: 68 },
];

const softBlocks = [
  {
    icon: <FaCertificate />,
    title: 'Certifications',
    text: 'Scrum, gestion de projet, cloud foundations et validation continue des compétences.',
    color: 'text-indigo-600',
    bg: 'from-indigo-500/10 to-purple-500/10 border-indigo-200',
    stat: '12',
  },
  {
    icon: <FaUsers />,
    title: 'Vie associative',
    text: "IEEE Student Branch IIT Sfax, organisation d'événements et participation à l'écosystème étudiant.",
    color: 'text-orange-600',
    bg: 'from-orange-500/10 to-pink-500/10 border-orange-200',
    stat: '5+',
  },
];

const CERTS_PER_PAGE = 4;

/* ─── Skill Card with animated bar ─────────────────────────── */
const SkillCard = ({ skill, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="relative bg-white rounded-2xl p-5 md:p-6 text-center border border-gray-200 hover:border-indigo-400 hover:shadow-2xl transition-all duration-300 group overflow-hidden min-h-[170px] flex flex-col items-center justify-center"
    >
      {/* Glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-purple-50/0 group-hover:from-indigo-50/80 group-hover:to-purple-50/60 transition-all duration-500 rounded-2xl" />

      <div className={`relative ${skill.color} text-4xl md:text-5xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
        {skill.icon}
      </div>
      <p className="relative text-sm md:text-base font-bold text-gray-800 group-hover:text-indigo-600 transition leading-snug mb-3">
        {skill.name}
      </p>

      {/* Level bar */}
      <div className="relative w-full h-1 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.05 + 0.3, ease: 'easeOut' }}
        />
      </div>
      <p className="relative text-[10px] font-bold text-gray-300 mt-1">{skill.level}%</p>
    </motion.div>
  );
};

/* ─── CertCard ──────────────────────────────────────────────── */
const CertCard = ({ item, isActive, onClick }) => (
  <motion.div
    onClick={onClick}
    whileHover={{ y: -8, scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="relative cursor-pointer rounded-2xl overflow-hidden group"
    style={{
      border: `2px solid ${isActive ? item.accent : item.accent + '44'}`,
      boxShadow: isActive
        ? `0 20px 60px ${item.accent}40`
        : '0 2px 12px rgba(0,0,0,0.07)',
      background: 'white',
    }}
  >
    <div className="relative w-full" style={{ aspectRatio: '320 / 200' }}>
      <CertPreview
        title={item.title} issuer={item.issuer} date={item.date}
        accent={item.accent} bg1={item.bg1} bg2={item.bg2} logo={item.logo}
      />

      {isActive && (
        <motion.div
          initial={{ scale: 0 }} animate={{ scale: 1 }}
          className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-lg z-20"
          style={{ backgroundColor: item.accent }}
        >
          <svg viewBox="0 0 20 20" fill="white" className="w-4 h-4">
            <path fillRule="evenodd" clipRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" />
          </svg>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10"
        style={{ background: `${item.accent}e8` }}
      >
        <a href={item.file} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
          className="flex items-center gap-2 bg-white rounded-xl px-5 py-2.5 font-bold text-sm shadow-xl hover:scale-105 transition-transform"
          style={{ color: item.accent }}>
          <FaExternalLinkAlt className="text-xs" /> Voir le PDF
        </a>
        <a href={item.file} download onClick={e => e.stopPropagation()}
          className="flex items-center gap-2 border-2 border-white rounded-xl px-5 py-2.5 font-bold text-sm text-white hover:bg-white/20 transition">
          <FaDownload className="text-xs" /> Télécharger
        </a>
      </motion.div>
    </div>

    <div className="bg-white px-5 pt-4 pb-5">
      <p className="text-xs font-black tracking-widest uppercase mb-1" style={{ color: item.accent }}>{item.issuer}</p>
      <h4 className="text-[15px] font-bold text-gray-900 leading-snug mb-1 line-clamp-2">{item.title}</h4>
      <p className="text-xs font-semibold text-gray-400 mb-3">{item.date}</p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {item.tags.map((tag, ti) => (
          <span key={ti} className="text-xs px-2.5 py-0.5 rounded-full border font-medium"
            style={{ color: item.accent, borderColor: item.accent + '55', backgroundColor: item.accent + '10' }}>
            {tag}
          </span>
        ))}
      </div>
      <a href={item.file} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-white text-sm transition hover:opacity-90 hover:shadow-md"
        style={{ backgroundColor: item.accent }}>
        MORE DETAILS <FaArrowRight className="text-xs" />
      </a>
    </div>
  </motion.div>
);

/* ─── Floating orb ──────────────────────────────────────────── */
const FloatingOrb = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
    animate={{ y: [0, -30, 0], x: [0, 15, 0], scale: [1, 1.08, 1] }}
    transition={{ duration: 8 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
  />
);

/* ─── About ─────────────────────────────────────────────────── */
const About = () => {
  const [activePage, setActivePage] = useState(0);
  const [activeCard, setActiveCard] = useState(-1);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const totalPages = Math.ceil(certificates.length / CERTS_PER_PAGE);
  const visibleCerts = certificates.slice(activePage * CERTS_PER_PAGE, activePage * CERTS_PER_PAGE + CERTS_PER_PAGE);
  const handlePage = (pi) => { setActivePage(pi); setActiveCard(-1); };

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 96, behavior: 'smooth' });
  };

  /* Stagger container variants */
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 180, damping: 22 } },
  };

  return (
    <section ref={sectionRef} id="about" className="scroll-mt-32 relative py-24 lg:py-32 overflow-hidden bg-gray-50">

      {/* ── Layered background ── */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(#4f46e5 1px,transparent 1px),linear-gradient(90deg,#4f46e5 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      </motion.div>

      {/* Animated floating orbs */}
      <FloatingOrb className="top-20 left-10 w-96 h-96 bg-gradient-to-br from-indigo-300/25 to-purple-300/15" delay={0} />
      <FloatingOrb className="bottom-20 right-10 w-80 h-80 bg-gradient-to-tr from-pink-300/25 to-orange-300/20" delay={2.5} />
      <FloatingOrb className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-200/10" delay={5} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-indigo-600/10 border border-indigo-200 text-indigo-700 text-xs font-black tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Développeuse Full-Stack
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            À propos{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">de moi</span>
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              />
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-4xl mx-auto leading-relaxed">
            Étudiante en Génie Logiciel & Systèmes d'Information, passionnée par le développement web, mobile, backend et les projets techniques à impact.
          </p>
        </motion.div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-20"
        >
          {[
            { value: 12, label: 'Certifications' },
            { value: 15, label: 'Technologies' },
            { value: 8, label: 'Projets' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white/80 backdrop-blur rounded-2xl p-5 border border-gray-200 shadow-sm hover:shadow-lg hover:border-indigo-300 transition-all"
            >
              <AnimatedCounter value={stat.value} label={stat.label} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Bio ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <motion.div
            whileHover={{ boxShadow: '0 30px 80px rgba(79,70,229,0.12)' }}
            transition={{ duration: 0.3 }}
            className="bg-white/90 backdrop-blur-2xl rounded-3xl p-8 md:p-10 border border-gray-200 shadow-xl"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-4">
              <motion.div
                animate={{ rotate: [0, 10, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
              >
                <FaGraduationCap className="text-indigo-600 text-4xl" />
              </motion.div>
              Yesmine Cherif
            </h3>
            <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>Actuellement en <span className="text-indigo-600 font-bold text-xl">3ᵉ année de Génie Logiciel et Systèmes d'Information</span><br />à l'<span className="text-indigo-600 font-bold">IIT Sfax</span>.</p>
              <p>Je suis une développeuse full-stack en formation, avec un intérêt particulier pour les interfaces modernes, les applications web robustes, les solutions backend bien structurées et les environnements techniques évolutifs.</p>
              <p>Grâce à mes stages et projets, j'ai travaillé sur des applications CRUD, des dashboards administrateur, des projets Laravel + Angular + Node.js, de l'automatisation en Python, ainsi que des projets académiques en machine learning, mobile et systèmes embarqués.</p>
              <p>Mon objectif est de construire des solutions utiles, bien pensées, performantes et visuellement soignées, tout en continuant à progresser sur des stacks modernes et professionnelles.</p>
            </div>

            {/* Decorative bottom bar */}
            <div className="mt-8 h-0.5 w-full bg-gradient-to-r from-indigo-200 via-purple-200 to-transparent rounded-full" />
          </motion.div>
        </motion.div>

        {/* ── Skills ── */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs font-black tracking-[0.3em] uppercase text-indigo-400 mb-3"
            >
              03 / Stack
            </motion.p>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">Technologies & Compétences</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6">
            {technicalSkills.map((skill, i) => (
              <SkillCard key={i} skill={skill} index={i} />
            ))}
          </div>
        </motion.div>

        {/* ── Soft blocks ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {softBlocks.map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, type: 'spring', stiffness: 160 }}
                whileHover={{ scale: 1.02, boxShadow: '0 20px 60px rgba(0,0,0,0.1)' }}
                className={`bg-gradient-to-br ${block.bg} backdrop-blur-xl rounded-2xl p-7 border flex items-start gap-5 transition-all duration-300`}
              >
                <motion.div
                  className={`${block.color} text-4xl flex-shrink-0 mt-1`}
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 6, delay: i * 2 }}
                >
                  {block.icon}
                </motion.div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-xl font-bold text-gray-900">{block.title}</h4>
                    <span className="text-2xl font-black" style={{ color: i === 0 ? '#4f46e5' : '#ea580c' }}>
                      {block.stat}
                    </span>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed">{block.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ══ CERTIFICATIONS ══ */}
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

          {/* Header row */}
          <div className="flex items-start justify-between mb-10 flex-wrap gap-6">
            <div>
              <p className="text-xs font-black tracking-[0.35em] uppercase text-gray-400 mb-2">04 / CERTS</p>
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Certifications<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">& Attestations</span>
              </h3>
              <p className="text-sm text-gray-500 mt-3 max-w-sm leading-relaxed">
                Certifications, attestations de participation et reconnaissances académiques ou associatives — consultables directement.
              </p>
            </div>

            {/* Pagination */}
            <div className="flex items-center gap-2 pt-2">
              {Array.from({ length: totalPages }).map((_, pi) => (
                <motion.button
                  key={pi}
                  onClick={() => handlePage(pi)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 rounded-lg font-bold text-base border-2 transition-all duration-200 ${
                    activePage === pi
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-200'
                      : 'bg-white border-gray-300 text-gray-600 hover:border-indigo-400 hover:text-indigo-600'
                  }`}
                >
                  {pi + 1}
                </motion.button>
              ))}
            </div>
          </div>

          {/* CERTIFIED label + cards */}
          <div className="flex gap-4 items-stretch">
            <div className="hidden lg:flex items-center justify-center select-none flex-shrink-0 pr-2">
              <span
                className="font-black uppercase text-gray-200 tracking-[0.18em]"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontSize: '3.8rem', lineHeight: 1 }}
              >
                CERTIFIED
              </span>
            </div>

            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePage}
                  initial={{ opacity: 0, x: 50, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -50, filter: 'blur(4px)' }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
                >
                  {visibleCerts.map((item, i) => {
                    const globalIdx = activePage * CERTS_PER_PAGE + i;
                    return (
                      <motion.div
                        key={globalIdx}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.09, type: 'spring', stiffness: 200 }}
                      >
                        <CertCard
                          item={item}
                          isActive={activeCard === globalIdx}
                          onClick={() => setActiveCard(activeCard === globalIdx ? -1 : globalIdx)}
                        />
                      </motion.div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              {/* Progress bar */}
              <div className="mt-8 flex items-center gap-3">
                <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                    animate={{ width: `${((activePage + 1) / totalPages) * 100}%` }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                </div>
                <span className="text-xs font-bold text-gray-400 tabular-nums">
                  {Math.min((activePage + 1) * CERTS_PER_PAGE, certificates.length)} / {certificates.length}
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          {/* Divider */}
          <div className="flex items-center gap-4 max-w-md mx-auto mb-12">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-indigo-200" />
            <span className="text-xs font-black tracking-widest text-indigo-300 uppercase">Contact</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-indigo-200" />
          </div>

          <p className="text-2xl md:text-3xl text-gray-700 font-medium mb-10">
            Disponible pour stages PFE, projets freelances ou collaborations
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="#contact"
              onClick={scrollToContact}
              whileHover={{ scale: 1.05, boxShadow: '0 25px 60px rgba(79,70,229,0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden px-12 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-bold text-white text-lg md:text-xl shadow-xl group"
            >
              <motion.span
                className="absolute inset-0 bg-white/20 rounded-full"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.4 }}
              />
              <span className="relative">Me contacter</span>
            </motion.a>

            <motion.a
              href={cvFile}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-12 py-5 bg-white border-4 border-indigo-600 rounded-full font-bold text-indigo-600 text-lg md:text-xl hover:bg-indigo-50 transition shadow-lg inline-flex items-center gap-3"
            >
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <FaDownload />
              </motion.span>
              Télécharger mon CV
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
