// src/components/About.jsx
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from 'framer-motion';
import {
  FaReact,
  FaAngular,
  FaLaravel,
  FaPython,
  FaNodeJs,
  FaJava,
  FaPhp,
  FaGitAlt,
  FaDatabase,
  FaDocker,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaGraduationCap,
  FaDownload,
  FaExpand,
  FaExternalLinkAlt,
  FaTimes,
  FaSearch,
  FaCheck,
  FaLink,
  FaChevronLeft,
  FaChevronRight,
  FaAward,
  FaTrophy,
  FaUsers,
} from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext.jsx';
import {
  SiSpringboot,
  SiFlutter,
  SiMysql,
  SiPostgresql,
  SiJavascript,
  SiTailwindcss,
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
import delfB2Pdf from '../../assets/pdf/delf-b2-nau.pdf';
import projectsValleyPdf from '../../assets/pdf/projects-valley.pdf';

const cvFile = '/CV.pdf';

const NAVBAR_OFFSET = 95;

/* ─── Shared palette ─────────────────────────────────────────── */
const C = {
  bg: 'rgba(10,10,15,0.90)',
  head: '#f1f0fb',
  text: '#e2e8f0',
  muted: '#94a3b8',
  dim: '#64748b',
  violet: '#a855f7',
  violetSoft: '#c084fc',
  lilac: '#c4b5fd',
  indigo: '#818cf8',
};

const frenchSkillGroups = {
  'Frontend Development': ['Développement front-end', 'Interfaces web et applications métier'],
  'Backend Development': ['Développement back-end', 'API REST, microservices, authentification'],
  'Programming Languages': ['Langages de programmation', 'Fondamentaux algorithmiques et orientés objet'],
  Databases: ['Bases de données', 'Modélisation, requêtes et ORM'],
  'Data & Artificial Intelligence': ['Data et intelligence artificielle', 'Analyse, modèles et visualisation'],
  'Tools, DevOps & Mobile': ['Outils, DevOps et mobile', 'Versionnement, conteneurs et applications mobiles'],
};

/* ─── UI strings not covered by the global t() dictionary ─────
   These are small, component-local labels (aria-labels, tooltips,
   modal chrome, category badges). Kept here—rather than forcing
   them into LanguageContext—so this file stays self-contained.
   If you'd rather centralize them in LanguageContext.jsx, just
   move this object's contents into your translation JSON under
   an "aboutContent.ui" namespace and swap UI_TEXT[language] below
   for t('aboutContent.ui'). */
const UI_TEXT = {
  en: {
    viewCertificateLabel: (title) => `View ${title} certificate`,
    viewCertificateHint: 'View certificate',
    linkCopiedLabel: 'Certificate link copied',
    copyLinkLabel: 'Copy certificate link',
    linkCopiedTitle: 'Link copied',
    copyLinkTitle: 'Copy link',
    viewPdf: 'View PDF',
    download: 'Download',
    closeViewer: 'Close certificate viewer',
    previewUnavailable: "Inline preview isn't available on this device.",
    openPdf: 'Open the PDF',
    previous: 'Previous',
    next: 'Next',
    navHint: 'Arrow keys to navigate · Esc to close',
    categories: {
      Certification: 'Certification',
      Hackathon: 'Hackathon',
      Participation: 'Participation',
    },
  },
  fr: {
    viewCertificateLabel: (title) => `Voir le certificat ${title}`,
    viewCertificateHint: 'Voir le certificat',
    linkCopiedLabel: 'Lien du certificat copié',
    copyLinkLabel: 'Copier le lien du certificat',
    linkCopiedTitle: 'Lien copié',
    copyLinkTitle: 'Copier le lien',
    viewPdf: 'Voir le PDF',
    download: 'Télécharger',
    closeViewer: 'Fermer la visionneuse de certificats',
    previewUnavailable: "L'aperçu intégré n'est pas disponible sur cet appareil.",
    openPdf: 'Ouvrir le PDF',
    previous: 'Précédent',
    next: 'Suivant',
    navHint: 'Flèches pour naviguer · Échap pour fermer',
    categories: {
      Certification: 'Certification',
      Hackathon: 'Hackathon',
      Participation: 'Participation',
    },
  },
};

const ORBS = [
  {
    size: 540,
    top: '-6%',
    left: '66%',
    color: 'rgba(168,85,247,0.16)',
    path: { x: [0, -40, 0], y: [0, 30, 0] },
    duration: 18,
  },
  {
    size: 420,
    top: '38%',
    left: '-10%',
    color: 'rgba(236,72,153,0.12)',
    path: { x: [0, 35, 0], y: [0, -25, 0] },
    duration: 22,
  },
  {
    size: 360,
    top: '78%',
    left: '58%',
    color: 'rgba(99,102,241,0.14)',
    path: { x: [0, 25, 0], y: [0, 40, 0] },
    duration: 26,
  },
];

/* ─── Animated particle constellation ───────────────────────── */
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
    let rafId = 0;
    let elapsed = 0;

    const DENSITY = 9000;
    const MAX_DIST = 140;
    const MAX_DPR = 2;

    const LAYERS = [
      {
        share: 0.5,
        speed: [0.16, 0.32],
        radius: [0.5, 1.0],
        alpha: [0.25, 0.45],
      },
      {
        share: 0.32,
        speed: [0.32, 0.55],
        radius: [0.9, 1.6],
        alpha: [0.4, 0.62],
      },
      {
        share: 0.18,
        speed: [0.55, 0.85],
        radius: [1.4, 2.3],
        alpha: [0.55, 0.85],
      },
    ];

    const rand = (a, b) => a + Math.random() * (b - a);

    const spawn = (layer, y) => ({
      x: Math.random() * width,
      y: y != null ? y : rand(-40, height),
      vx: rand(-0.12, 0.12),
      vy: rand(layer.speed[0], layer.speed[1]),
      r: rand(layer.radius[0], layer.radius[1]),
      baseAlpha: rand(layer.alpha[0], layer.alpha[1]),
      twinkleSpeed: rand(0.6, 1.6),
      twinklePhase: rand(0, Math.PI * 2),
      depth:
        layer === LAYERS[2]
          ? 2
          : layer === LAYERS[1]
            ? 1
            : 0,
    });

    const resize = () => {
      const rect = parent.getBoundingClientRect();

      width = Math.max(1, Math.floor(rect.width));
      height = Math.max(1, Math.floor(rect.height));

      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const total = Math.max(
        40,
        Math.min(150, Math.floor((width * height) / DENSITY))
      );

      particles = [];

      LAYERS.forEach((layer) => {
        const count = Math.round(total * layer.share);

        for (let i = 0; i < count; i += 1) {
          particles.push(spawn(layer));
        }
      });
    };

    const step = (t) => {
      elapsed = t || 0;

      ctx.clearRect(0, 0, width, height);
      ctx.shadowBlur = 0;

      /* Connections */
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared < MAX_DIST * MAX_DIST) {
            const distance = Math.sqrt(distanceSquared);
            const proximity = 1 - distance / MAX_DIST;

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(168,85,247,${0.16 * proximity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      /* Particles */
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        const twinkle =
          0.75 +
          0.25 *
            Math.sin(
              elapsed * 0.0016 * p.twinkleSpeed + p.twinklePhase
            );

        const alpha = p.baseAlpha * twinkle;

        if (p.depth === 2) {
          ctx.save();
          ctx.shadowColor = 'rgba(196,181,253,0.9)';
          ctx.shadowBlur = 6;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196,181,253,${alpha})`;
        ctx.fill();

        if (p.depth === 2) {
          ctx.restore();
        }
      }

      rafId = requestAnimationFrame(step);
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(parent);

    rafId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
    />
  );
};

/* ─── Counter ────────────────────────────────────────────────── */
const AnimatedCounter = ({ value, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    const end = parseInt(value, 10);

    if (!Number.isFinite(end) || end <= 0) {
      setCount(end || 0);
      return undefined;
    }

    let start = 0;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);

      if (start >= end) {
        clearInterval(timer);
      }
    }, 1500 / end);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div
        className="text-4xl md:text-5xl font-black tabular-nums"
        style={{
          background:
            'linear-gradient(135deg, #e879f9 0%, #a855f7 45%, #818cf8 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        {count}
      </div>

      <div
        className="text-xs font-semibold mt-1"
        style={{
          color: C.dim,
          letterSpacing: '0.14em',
        }}
      >
        {label}
      </div>
    </div>
  );
};

/* ─── Monogram for technologies without a dedicated icon ────── */
const Mono = ({ children, color }) => (
  <span
    className="inline-flex items-center justify-center rounded-md font-black shrink-0"
    style={{
      width: 18,
      height: 18,
      fontSize: 9,
      color,
      background: `${color}22`,
      letterSpacing: '-0.02em',
    }}
  >
    {children}
  </span>
);

/* ─── Skills ─────────────────────────────────────────────────── */
const skillGroups = [
  {
    group: 'Frontend Development',
    note: 'Web interfaces and business applications',
    items: [
      { icon: <FaAngular />, name: 'Angular', color: '#f87171' },
      { icon: <FaReact />, name: 'React / React Native', color: '#22d3ee' },
      { icon: <Mono color="#e2e8f0">N</Mono>, name: 'Next.js', color: '#e2e8f0' },
      { icon: <SiJavascript />, name: 'JavaScript', color: '#fbbf24' },
      { icon: <SiTailwindcss />, name: 'Tailwind CSS', color: '#38bdf8' },
      { icon: <FaHtml5 />, name: 'HTML5', color: '#fb923c' },
      { icon: <FaCss3Alt />, name: 'CSS3', color: '#60a5fa' },
    ],
  },
  {
    group: 'Backend Development',
    note: 'REST APIs, microservices, authentication',
    items: [
      { icon: <FaLaravel />, name: 'Laravel', color: '#fb7185' },
      { icon: <FaNodeJs />, name: 'Node.js', color: '#4ade80' },
      { icon: <Mono color="#f472b6">Ne</Mono>, name: 'NestJS', color: '#f472b6' },
      { icon: <SiSpringboot />, name: 'Spring Boot', color: '#34d399' },
      { icon: <FaPhp />, name: 'PHP', color: '#a5b4fc' },
      { icon: <Mono color="#c4b5fd">{'{}'}</Mono>, name: 'REST APIs', color: '#c4b5fd' },
      { icon: <Mono color="#38bdf8">Kc</Mono>, name: 'Keycloak', color: '#38bdf8' },
    ],
  },
  {
    group: 'Programming Languages',
    note: 'Algorithmic and object-oriented foundations',
    items: [
      { icon: <FaPython />, name: 'Python', color: '#fcd34d' },
      { icon: <FaJava />, name: 'Java', color: '#fb923c' },
      { icon: <Mono color="#c084fc">C#</Mono>, name: 'C#', color: '#c084fc' },
      { icon: <Mono color="#93c5fd">C+</Mono>, name: 'C++', color: '#93c5fd' },
      { icon: <Mono color="#a5b4fc">C</Mono>, name: 'C', color: '#a5b4fc' },
      { icon: <Mono color="#c4b5fd">.N</Mono>, name: '.NET', color: '#c4b5fd' },
    ],
  },
  {
    group: 'Databases',
    note: 'Modeling, queries, and ORM',
    items: [
      { icon: <SiMysql />, name: 'MySQL', color: '#22d3ee' },
      { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#60a5fa' },
      { icon: <Mono color="#e2e8f0">Pr</Mono>, name: 'Prisma', color: '#e2e8f0' },
      { icon: <FaDatabase />, name: 'SQL', color: '#93c5fd' },
    ],
  },
  {
    group: 'Data & Artificial Intelligence',
    note: 'Analysis, models, and visualization',
    items: [
      { icon: <Mono color="#fbbf24">ML</Mono>, name: 'Machine Learning', color: '#fbbf24' },
      { icon: <Mono color="#f472b6">DA</Mono>, name: 'Data Analysis', color: '#f472b6' },
      { icon: <Mono color="#facc15">BI</Mono>, name: 'Power BI', color: '#facc15' },
      { icon: <FaPython />, name: 'Python (Data)', color: '#fcd34d' },
    ],
  },
  {
    group: 'Tools, DevOps & Mobile',
    note: 'Versioning, containers, and mobile apps',
    items: [
      { icon: <FaGitAlt />, name: 'Git', color: '#fb923c' },
      { icon: <Mono color="#e2e8f0">GH</Mono>, name: 'GitHub', color: '#e2e8f0' },
      { icon: <Mono color="#fb923c">GL</Mono>, name: 'GitLab', color: '#fb923c' },
      { icon: <FaDocker />, name: 'Docker', color: '#38bdf8' },
      { icon: <FaLinux />, name: 'Linux', color: '#e2e8f0' },
      { icon: <Mono color="#c084fc">UML</Mono>, name: 'UML', color: '#c084fc' },
      { icon: <SiFlutter />, name: 'Flutter', color: '#22d3ee' },
    ],
  },
];

/* Languages: name + proficiency level, translated per UI language.
   Rendered via languages.map(...) below using lang.name[language]
   and lang.level[language]. */
const languages = [
  {
    name: { en: 'Arabic', fr: 'Arabe' },
    level: { en: 'Native language', fr: 'Langue maternelle' },
  },
  {
    name: { en: 'French', fr: 'Français' },
    level: {
      en: 'Fluent · DELF B2 in preparation',
      fr: 'Courant · Préparation DELF B2',
    },
  },
  {
    name: { en: 'English', fr: 'Anglais' },
    level: {
      en: 'Professional working proficiency',
      fr: 'Niveau professionnel',
    },
  },
];

/* ─── Certificates ───────────────────────────────────────────── */
/* Each entry's title/issuer/tags are language maps; `category` stays
   a fixed English key used internally for filtering and icon lookup
   (its display label is translated separately via UI_TEXT.categories). */
const certificates = [
  {
    title: {
      en: 'AWS Academy Graduate — Cloud Foundations',
      fr: 'Diplômée AWS Academy — Cloud Foundations',
    },
    issuer: { en: 'AWS Academy', fr: 'AWS Academy' },
    category: 'Certification',
    date: '2024',
    tags: {
      en: ['Cloud', 'AWS'],
      fr: ['Cloud', 'AWS'],
    },
    file: awsCloudPdf,
    accent: '#f59e0b',
  },
  {
    title: {
      en: 'Getting Started with Deep Learning',
      fr: 'Introduction au Deep Learning',
    },
    issuer: { en: 'NVIDIA', fr: 'NVIDIA' },
    category: 'Certification',
    date: '2024',
    tags: {
      en: ['Deep Learning', 'AI'],
      fr: ['Deep Learning', 'IA'],
    },
    file: nvidia,
    accent: '#4ade80',
  },
  {
    title: {
      en: 'Scrum Fundamentals Certified',
      fr: 'Certification Scrum Fundamentals',
    },
    issuer: { en: 'ScrumStudy', fr: 'ScrumStudy' },
    category: 'Certification',
    date: '2024',
    tags: {
      en: ['Scrum', 'Agile'],
      fr: ['Scrum', 'Agile'],
    },
    file: scrumPdf,
    accent: '#818cf8',
  },
  {
    title: {
      en: 'Project Management Fundamentals',
      fr: 'Fondamentaux de la gestion de projet',
    },
    issuer: { en: 'IBM SkillsBuild', fr: 'IBM SkillsBuild' },
    category: 'Certification',
    date: '2024',
    tags: {
      en: ['Project Management'],
      fr: ['Gestion de projet'],
    },
    file: ibmPmPdf,
    accent: '#38bdf8',
  },
  {
    title: {
      en: 'DELF B2 Preparation Training Certificate',
      fr: 'Attestation de formation — Préparation DELF B2',
    },
    issuer: { en: 'NAU', fr: 'NAU' },
    category: 'Certification',
    date: '2026',
    tags: {
      en: ['French', 'DELF B2'],
      fr: ['Français', 'DELF B2'],
    },
    file: delfB2Pdf,
    accent: '#34d399',
  },
  {
    title: {
      en: 'CodeCore Challenge',
      fr: 'Défi CodeCore',
    },
    issuer: { en: 'CodeCore', fr: 'CodeCore' },
    category: 'Hackathon',
    date: '2026',
    tags: {
      en: ['Hackathon', 'Organization'],
      fr: ['Hackathon', 'Organisation'],
    },
    file: codecore,
    accent: '#fbbf24',
  },
  {
    title: {
      en: 'HACKVISION Hackathon',
      fr: 'Hackathon HACKVISION',
    },
    issuer: { en: 'HackVision', fr: 'HackVision' },
    category: 'Hackathon',
    date: '2023',
    tags: {
      en: ['Hackathon', 'Innovation'],
      fr: ['Hackathon', 'Innovation'],
    },
    file: hackvisionPdf,
    accent: '#a855f7',
  },
  {
    title: {
      en: 'Arduino Hackathon — Line-Following Robot',
      fr: 'Hackathon Arduino — Robot suiveur de ligne',
    },
    issuer: { en: 'IIT Sfax', fr: 'IIT Sfax' },
    category: 'Hackathon',
    date: '2023',
    tags: {
      en: ['Arduino', 'Robotics'],
      fr: ['Arduino', 'Robotique'],
    },
    file: arduinoHackathonPdf,
    accent: '#2dd4bf',
  },
  {
    title: {
      en: 'Speaker — ATIC Bootcamp',
      fr: 'Intervenante — Bootcamp ATIC',
    },
    issuer: { en: 'ATIC Congress', fr: 'Congrès ATIC' },
    category: 'Participation',
    date: '2024',
    tags: {
      en: ['Speaker', 'Tech'],
      fr: ['Intervenante', 'Tech'],
    },
    file: aticSpeakerPdf,
    accent: '#f472b6',
  },
  {
    title: {
      en: 'Organizer — Job Fair 10',
      fr: 'Organisatrice — Job Fair 10',
    },
    issuer: { en: 'IIT Sfax', fr: 'IIT Sfax' },
    category: 'Participation',
    date: '2023',
    tags: {
      en: ['Organization', 'Career'],
      fr: ['Organisation', 'Carrière'],
    },
    file: jobFairPdf,
    accent: '#fb923c',
  },
  {
    title: {
      en: 'Participant — Projects Valley',
      fr: 'Participante — Projects Valley',
    },
    issuer: { en: 'Projects Valley', fr: 'Projects Valley' },
    category: 'Participation',
    date: '2024',
    tags: {
      en: ['Participation'],
      fr: ['Participation'],
    },
    file: projectsValleyPdf,
    accent: '#f97316',
  },
  {
    title: {
      en: 'L\u2019Odyssée des Génies',
      fr: 'L\u2019Odyssée des Génies',
    },
    issuer: { en: 'National Competition', fr: 'Compétition nationale' },
    category: 'Participation',
    date: '2023',
    tags: {
      en: ['Competition', 'Sciences'],
      fr: ['Compétition', 'Sciences'],
    },
    file: odysseePdf,
    accent: '#60a5fa',
  },
  {
    title: {
      en: 'Labyrinthe des Nombres',
      fr: 'Labyrinthe des Nombres',
    },
    issuer: { en: 'IIT Sfax — Mathematics', fr: 'IIT Sfax — Mathématiques' },
    category: 'Participation',
    date: '2023',
    tags: {
      en: ['Mathematics'],
      fr: ['Mathématiques'],
    },
    file: math1Pdf,
    accent: '#e879f9',
  },
  {
    title: {
      en: '3rd National Piano Festival',
      fr: '3ᵉ Festival national de piano',
    },
    issuer: { en: 'National Festival', fr: 'Festival national' },
    category: 'Participation',
    date: 'March 2022',
    tags: {
      en: ['Piano', 'Music'],
      fr: ['Piano', 'Musique'],
    },
    file: pianoPdf,
    accent: '#c084fc',
  },
];

const FILTERS = [
  'All',
  'Certification',
  'Hackathon',
  'Participation',
];

const CATEGORY_ICON = {
  Certification: <FaAward />,
  Hackathon: <FaTrophy />,
  Participation: <FaUsers />,
};

/* ─── Certificate Card ───────────────────────────────────────── */
const CertCard = ({ item, index, onExpand, language }) => {
  const [copied, setCopied] = useState(false);
  const copyTimerRef = useRef(null);
  const ui = UI_TEXT[language] || UI_TEXT.en;

  const title = item.title[language] ?? item.title.en;
  const issuer = item.issuer[language] ?? item.issuer.en;
  const tags = item.tags[language] ?? item.tags.en;
  const categoryLabel = ui.categories[item.category] ?? item.category;

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(
        new URL(item.file, window.location.origin).href
      );

      setCopied(true);

      copyTimerRef.current = setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      window.open(item.file, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: (index % 3) * 0.06,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: 'rgba(255,255,255,0.035)',
        border: '1px solid rgba(255,255,255,0.09)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <button
        type="button"
        onClick={onExpand}
        aria-label={ui.viewCertificateLabel(title)}
        className="relative w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-inset"
        style={{
          aspectRatio: '16 / 9',
          background: `
            radial-gradient(circle at 30% 20%, ${item.accent}30 0%, transparent 55%),
            radial-gradient(circle at 80% 85%, ${item.accent}1a 0%, transparent 60%),
            #14101f
          `,
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          display: 'block',
        }}
      >
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '22px 22px',
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5">
          <div
            className="flex items-center justify-center rounded-2xl transition-transform group-hover:scale-105"
            style={{
              width: 52,
              height: 52,
              color: item.accent,
              background: `${item.accent}1c`,
              border: `1px solid ${item.accent}45`,
              fontSize: 20,
            }}
          >
            {CATEGORY_ICON[item.category] || <FaAward />}
          </div>

          <p
            className="text-[11px] font-bold text-center px-4"
            style={{
              color: item.accent,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            {issuer}
          </p>
        </div>

        <span
          className="pointer-events-none absolute top-3 left-3 text-[10px] font-semibold px-2.5 py-1 rounded-full"
          style={{
            color: item.accent,
            background: 'rgba(10,10,15,0.72)',
            border: `1px solid ${item.accent}55`,
          }}
        >
          {categoryLabel}
        </span>

        <span
          className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            color: C.lilac,
            background: 'rgba(10,10,15,0.75)',
          }}
        >
          <FaExpand style={{ fontSize: 9 }} />
          {ui.viewCertificateHint}
        </span>
      </button>

      <div className="px-5 pt-4 pb-5 flex flex-col flex-1">
        <p
          className="text-[11px] font-bold tracking-widest mb-1.5"
          style={{ color: item.accent }}
        >
          {issuer}
        </p>

        <h4
          className="text-[15px] font-bold leading-snug mb-1"
          style={{ color: C.text }}
        >
          {title}
        </h4>

        <p className="text-xs mb-3" style={{ color: C.dim }}>
          {item.date}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded-full"
              style={{
                color: '#cbd5e1',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.10)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2">
          <a
            href={item.file}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-semibold py-2.5 rounded-xl text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            style={{
              background: `linear-gradient(135deg, ${item.accent}, ${item.accent}bb)`,
            }}
          >
            <FaExternalLinkAlt style={{ fontSize: 10 }} />
            {ui.viewPdf}
          </a>

          <a
            href={item.file}
            download
            className="inline-flex items-center justify-center gap-2 text-xs font-semibold px-3.5 py-2.5 rounded-xl transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            style={{
              color: C.lilac,
              border: '1px solid rgba(168,85,247,0.35)',
            }}
          >
            <FaDownload style={{ fontSize: 10 }} />
            {ui.download}
          </a>

          <button
            type="button"
            onClick={copyLink}
            aria-label={copied ? ui.linkCopiedLabel : ui.copyLinkLabel}
            title={copied ? ui.linkCopiedTitle : ui.copyLinkTitle}
            className="inline-flex items-center justify-center rounded-xl transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            style={{
              width: 38,
              height: 38,
              color: copied ? '#4ade80' : C.muted,
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            {copied ? (
              <FaCheck style={{ fontSize: 11 }} />
            ) : (
              <FaLink style={{ fontSize: 11 }} />
            )}
          </button>
        </div>
      </div>
    </motion.article>
  );
};

/* ─── Full-screen PDF viewer ────────────────────────────────── */
const PdfViewer = ({
  item,
  onClose,
  onPrev,
  onNext,
  position,
  total,
  language,
}) => {
  const ui = UI_TEXT[language] || UI_TEXT.en;
  const title = item.title[language] ?? item.title.en;
  const issuer = item.issuer[language] ?? item.issuer.en;

  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose();
      }

      if (e.key === 'ArrowLeft') {
        onPrev();
      }

      if (e.key === 'ArrowRight') {
        onNext();
      }
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [handleKey]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-6"
      style={{
        background: 'rgba(5,3,12,0.92)',
        backdropFilter: 'blur(10px)',
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-viewer-title"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 22, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 14, scale: 0.98 }}
        transition={{
          duration: 0.28,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative flex flex-col w-full rounded-2xl overflow-hidden"
        style={{
          maxWidth: 1100,
          height: '94vh',
          background: 'rgba(15,10,30,0.96)',
          border: `1px solid ${item.accent}55`,
          boxShadow: '0 30px 90px rgba(0,0,0,0.65)',
        }}
      >
        <div
          className="flex items-center gap-3 px-4 sm:px-5 py-3 shrink-0"
          style={{
            borderBottom: '1px solid rgba(255,255,255,0.09)',
          }}
        >
          <div className="min-w-0 flex-1">
            <p
              id="certificate-viewer-title"
              className="text-sm font-bold truncate"
              style={{ color: C.text }}
            >
              {title}
            </p>

            <p
              className="text-xs truncate"
              style={{ color: C.dim }}
            >
              {issuer} · {item.date} · {position}/{total}
            </p>
          </div>

          <a
            href={item.file}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            style={{
              color: C.lilac,
              border: '1px solid rgba(168,85,247,0.35)',
            }}
          >
            <FaExternalLinkAlt style={{ fontSize: 10 }} />
            {ui.viewPdf}
          </a>

          <a
            href={item.file}
            download
            className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 rounded-xl text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            style={{
              background:
                'linear-gradient(135deg, #a855f7, #818cf8)',
            }}
          >
            <FaDownload style={{ fontSize: 10 }} />
            <span className="hidden sm:inline">{ui.download}</span>
          </a>

          <button
            type="button"
            onClick={onClose}
            aria-label={ui.closeViewer}
            className="inline-flex items-center justify-center rounded-xl shrink-0 transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            style={{
              width: 38,
              height: 38,
              color: C.muted,
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            <FaTimes />
          </button>
        </div>

        <div
          className="relative flex-1 min-h-0"
          style={{ background: '#1e1b2e' }}
        >
          <object
            data={`${item.file}#view=FitH&toolbar=1&navpanes=0`}
            type="application/pdf"
            className="w-full h-full"
            aria-label={`${ui.viewPdf}: ${title}`}
          >
            <div className="flex flex-col items-center justify-center h-full gap-4 px-6 text-center">
              <p
                className="text-sm"
                style={{ color: C.muted }}
              >
                {ui.previewUnavailable}
              </p>

              <a
                href={item.file}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl font-semibold text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                style={{
                  background:
                    'linear-gradient(135deg, #a855f7, #818cf8)',
                }}
              >
                {ui.openPdf}
              </a>
            </div>
          </object>
        </div>

        <div
          className="flex items-center justify-between px-4 sm:px-5 py-2.5 shrink-0"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.09)',
          }}
        >
          <button
            type="button"
            onClick={onPrev}
            className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            style={{ color: C.muted }}
          >
            <FaChevronLeft style={{ fontSize: 10 }} />
            {ui.previous}
          </button>

          <span
            className="hidden sm:block text-[11px]"
            style={{ color: C.dim }}
          >
            {ui.navHint}
          </span>

          <button
            type="button"
            onClick={onNext}
            className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            style={{ color: C.muted }}
          >
            {ui.next}
            <FaChevronRight style={{ fontSize: 10 }} />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── About ─────────────────────────────────────────────────── */
const About = () => {
  const { language, t } = useLanguage();
  const ui = UI_TEXT[language] || UI_TEXT.en;
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef(null);

  const [filter, setFilter] = useState('All');
  const [query, setQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(-1);

  const visibleCerts = useMemo(() => {
    const q = query.trim().toLowerCase();

    return certificates.filter((certificate) => {
      const matchFilter =
        filter === 'All' || certificate.category === filter;

      const title = (certificate.title[language] ?? certificate.title.en).toLowerCase();
      const issuer = (certificate.issuer[language] ?? certificate.issuer.en).toLowerCase();
      const tags = certificate.tags[language] ?? certificate.tags.en;

      const matchQuery =
        !q ||
        title.includes(q) ||
        issuer.includes(q) ||
        tags.some((tag) => tag.toLowerCase().includes(q));

      return matchFilter && matchQuery;
    });
  }, [filter, query, language]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '14%']
  );

  const spotX = useMotionValue(50);
  const spotY = useMotionValue(30);

  const sx = useSpring(spotX, {
    stiffness: 60,
    damping: 20,
  });

  const sy = useSpring(spotY, {
    stiffness: 60,
    damping: 20,
  });

  const spotlight = useTransform(
    [sx, sy],
    ([x, y]) =>
      `radial-gradient(circle 500px at ${x}% ${y}%, rgba(168,85,247,0.08), transparent 70%)`
  );

  const handleMove = (e) => {
    if (prefersReducedMotion) return;

    const rect = e.currentTarget.getBoundingClientRect();

    if (!rect.width || !rect.height) return;

    spotX.set(
      ((e.clientX - rect.left) / rect.width) * 100
    );

    spotY.set(
      ((e.clientY - rect.top) / rect.height) * 100
    );
  };

  const scrollToContact = (e) => {
    e.preventDefault();

    const element = document.getElementById('contact');

    if (!element) return;

    window.scrollTo({
      top:
        element.getBoundingClientRect().top +
        window.pageYOffset -
        NAVBAR_OFFSET,
      behavior: 'smooth',
    });
  };

  const move = (direction) => {
    if (visibleCerts.length === 0) return;

    setOpenIndex(
      (current) =>
        (current + direction + visibleCerts.length) %
        visibleCerts.length
    );
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      onMouseMove={handleMove}
      className="scroll-mt-24 relative overflow-hidden py-24 lg:py-32"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 55% at 70% 18%, rgba(168,85,247,0.12) 0%, transparent 60%),
              radial-gradient(ellipse 55% 45% at 12% 72%, rgba(236,72,153,0.09) 0%, transparent 55%),
              radial-gradient(ellipse 45% 40% at 85% 92%, rgba(99,102,241,0.10) 0%, transparent 55%)
            `,
          }}
        />
      </motion.div>

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
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
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

      <ParticleNetwork prefersReducedMotion />

      {!prefersReducedMotion && (
        <motion.div
          aria-hidden="true"
          className="absolute left-0 right-0 pointer-events-none"
          style={{
            height: 1,
            background:
              'linear-gradient(90deg, transparent 0%, rgba(196,181,253,0.6) 50%, transparent 100%)',
            boxShadow:
              '0 0 12px 1px rgba(168,85,247,0.45)',
          }}
          animate={{
            top: ['0%', '100%'],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      )}

      {!prefersReducedMotion && (
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ background: spotlight }}
        />
      )}

      <motion.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
        animate={
          prefersReducedMotion
            ? undefined
            : { opacity: [0.6, 1, 0.6] }
        }
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 35% 45%, rgba(10,10,15,0.35) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 30 }
          }
          whileInView={
            prefersReducedMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl mb-16"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full mb-7"
            style={{
              background: 'rgba(168,85,247,0.12)',
              border: '1px solid rgba(168,85,247,0.25)',
              color: C.violetSoft,
              letterSpacing: '0.12em',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: C.violet }}
            />
            {t('about')}
          </span>

          <h2
            className="font-extrabold leading-[1.06] tracking-tight mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)',
              fontFamily: '"Syne", sans-serif',
              color: C.head,
            }}
          >
            {t('aboutContent.titleLead')}{' '}
            <span
              style={{
                background:
                  'linear-gradient(135deg, #e879f9 0%, #a855f7 45%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('aboutContent.titleAccent')}
            </span>
          </h2>

          <p
            className="text-lg leading-relaxed"
            style={{
              color: C.muted,
              maxWidth: '62ch',
            }}
          >
            {t('aboutContent.intro')}
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 24 }
          }
          whileInView={
            prefersReducedMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {[
            { value: 14, label: t('aboutContent.certificates') },
            { value: 20, label: t('projectCount') },
            { value: 6, label: t('aboutContent.experiences') },
            { value: 3, label: t('aboutContent.languages') },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-5"
              style={{
                background: 'rgba(255,255,255,0.035)',
                border:
                  '1px solid rgba(255,255,255,0.09)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <AnimatedCounter
                value={stat.value}
                label={stat.label}
              />
            </div>
          ))}
        </motion.div>

        {/* Bio + Languages */}
        <motion.div
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 24 }
          }
          whileInView={
            prefersReducedMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl p-8 md:p-10 mb-24 grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-10"
          style={{
            background: 'rgba(255,255,255,0.035)',
            border:
              '1px solid rgba(255,255,255,0.09)',
            backdropFilter: 'blur(14px)',
          }}
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <FaGraduationCap
                style={{
                  color: C.violetSoft,
                  fontSize: 30,
                }}
              />

              <h3
                className="text-2xl font-bold"
                style={{
                  color: C.text,
                  fontFamily: '"Syne", sans-serif',
                }}
              >
                Yesmine Cherif
              </h3>
            </div>

            <div
              className="space-y-5 text-base leading-relaxed"
              style={{ color: C.muted }}
            >
              <p>
                {t('aboutContent.bio1')}
              </p>

              <p>
                {t('aboutContent.bio2')}
              </p>

              <p>
                {t('aboutContent.bio3')}
              </p>
            </div>
          </div>

          <div>
            <p
              className="text-sm font-bold mb-4"
              style={{ color: C.lilac }}
            >
              {t('aboutContent.languages')}
            </p>

            <div className="space-y-2.5">
              {languages.map((lang) => (
                <div
                  key={lang.name.en}
                  className="flex items-baseline justify-between gap-4"
                >
                  <span
                    className="text-sm font-semibold"
                    style={{ color: C.text }}
                  >
                    {lang.name[language] ?? lang.name.en}
                  </span>

                  <span
                    className="text-xs text-right"
                    style={{ color: C.dim }}
                  >
                    {lang.level[language] ?? lang.level.en}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <div className="mb-24">
          <h3
            className="text-3xl md:text-4xl font-bold mb-10"
            style={{
              color: C.head,
              fontFamily: '"Syne", sans-serif',
            }}
          >
            {t('aboutContent.technologies')}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillGroups.map((group, groupIndex) => {
              const [groupLabel, groupNote] = language === 'fr'
                ? frenchSkillGroups[group.group]
                : [group.group, group.note];

              return (
              <motion.div
                key={group.group}
                initial={
                  prefersReducedMotion
                    ? false
                    : { opacity: 0, y: 24 }
                }
                whileInView={
                  prefersReducedMotion
                    ? undefined
                    : { opacity: 1, y: 0 }
                }
                viewport={{ once: true }}
                transition={{
                  delay: (groupIndex % 2) * 0.06,
                  duration: 0.55,
                }}
                className="rounded-2xl p-6"
                style={{
                  background: 'rgba(255,255,255,0.035)',
                  border:
                    '1px solid rgba(255,255,255,0.09)',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <p
                  className="text-sm font-bold"
                  style={{ color: C.lilac }}
                >
                  {groupLabel}
                </p>

                <p
                  className="text-xs mt-1 mb-5"
                  style={{ color: C.dim }}
                >
                  {groupNote}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-2 text-sm font-medium px-3.5 py-2 rounded-xl"
                      style={{
                        color: '#cbd5e1',
                        background:
                          'rgba(255,255,255,0.04)',
                        border:
                          '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          color: skill.color,
                          fontSize: 16,
                          display: 'inline-flex',
                          alignItems: 'center',
                        }}
                      >
                        {skill.icon}
                      </span>

                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certificates */}
        <div>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
            <div>
              <h3
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{
                  color: C.head,
                  fontFamily: '"Syne", sans-serif',
                }}
              >
                {t('aboutContent.certificatesTitle')}
              </h3>

              <p
                className="text-sm"
                style={{
                  color: C.muted,
                  maxWidth: '52ch',
                }}
              >
                {t('aboutContent.certificatesIntro')}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Search */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border:
                    '1px solid rgba(255,255,255,0.10)',
                }}
              >
                <FaSearch
                  aria-hidden="true"
                  style={{
                    fontSize: 11,
                    color: C.dim,
                  }}
                />

                <input
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setOpenIndex(-1);
                  }}
                  placeholder={t('aboutContent.search')}
                  aria-label={t('aboutContent.search')}
                  className="bg-transparent text-xs outline-none focus:ring-0"
                  style={{
                    color: C.text,
                    width: 170,
                  }}
                />

                {query && (
                  <button
                    type="button"
                    onClick={() => {
                      setQuery('');
                      setOpenIndex(-1);
                    }}
                    aria-label={t('aboutContent.clearSearch')}
                    className="focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 rounded"
                    style={{ color: C.dim }}
                  >
                    <FaTimes style={{ fontSize: 10 }} />
                  </button>
                )}
              </div>

              {/* Filters */}
              <div className="flex flex-wrap gap-2">
                {FILTERS.map((filterOption) => {
                  const active = filter === filterOption;

                  return (
                    <button
                      key={filterOption}
                      type="button"
                      onClick={() => {
                        setFilter(filterOption);
                        setOpenIndex(-1);
                      }}
                      aria-pressed={active}
                      className="site-text-control inline-flex min-w-[104px] items-center justify-center whitespace-nowrap rounded-full px-5 py-2.5 text-center text-xs font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                      style={{
                        color: active ? '#fff' : C.muted,
                        background: active
                          ? 'linear-gradient(135deg, #a855f7, #818cf8)'
                          : 'rgba(255,255,255,0.04)',
                        border: active
                          ? '1px solid transparent'
                          : '1px solid rgba(255,255,255,0.10)',
                      }}
                    >
                      {language === 'fr'
                        ? ({
                            All: 'Tous',
                            Certification: 'Certification',
                            Hackathon: 'Hackathon',
                            Participation: 'Participation',
                          }[filterOption] ?? filterOption)
                        : filterOption}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {visibleCerts.length === 0 ? (
            <div
              className="rounded-2xl px-6 py-14 text-center"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border:
                  '1px dashed rgba(255,255,255,0.12)',
              }}
            >
              <p
                className="text-sm"
                style={{ color: C.muted }}
              >
                {t('aboutContent.noResult')}
              </p>

              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setFilter('All');
                  setOpenIndex(-1);
                }}
                className="mt-4 inline-flex min-w-[112px] items-center justify-center whitespace-nowrap rounded-full px-5 py-2.5 text-center text-xs font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                style={{
                  color: C.lilac,
                  border:
                    '1px solid rgba(168,85,247,0.35)',
                }}
              >
                {t('aboutContent.showAll')}
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {visibleCerts.map((item, index) => (
                <CertCard
                  key={item.title.en}
                  item={item}
                  index={index}
                  language={language}
                  onExpand={() => setOpenIndex(index)}
                />
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 30 }
          }
          whileInView={
            prefersReducedMotion
              ? undefined
              : { opacity: 1, y: 0 }
          }
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 rounded-3xl px-8 py-12 text-center"
          style={{
            background:
              'linear-gradient(135deg, rgba(168,85,247,0.12), rgba(129,140,248,0.08))',
            border:
              '1px solid rgba(168,85,247,0.25)',
          }}
        >
          <p
            className="text-2xl md:text-3xl font-bold mb-8"
            style={{
              color: C.head,
              fontFamily: '"Syne", sans-serif',
            }}
          >
            {t('aboutContent.cta')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              onClick={scrollToContact}
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
                  : { scale: 0.97 }
              }
              className="px-8 py-4 rounded-2xl font-semibold text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              style={{
                background:
                  'linear-gradient(135deg, #a855f7, #818cf8)',
              }}
            >
              {t('aboutContent.contact')}
            </motion.a>

            <motion.a
              href={cvFile}
              download="CV_Yesmine_Cherif.pdf"
              onClick={(e) => {
                e.preventDefault();
                fetch(cvFile)
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
                    a.href = cvFile;
                    a.download = 'CV_Yesmine_Cherif.pdf';
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                  });
              }}
              whileHover={
                prefersReducedMotion
                  ? undefined
                  : {
                      y: -3,
                      background:
                        'rgba(168,85,247,0.08)',
                    }
              }
              whileTap={
                prefersReducedMotion
                  ? undefined
                  : { scale: 0.97 }
              }
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
              style={{
                border:
                  '1px solid rgba(168,85,247,0.35)',
                color: C.lilac,
              }}
            >
              <FaDownload />
              {t('aboutContent.downloadCv')}
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* PDF Modal */}
      <AnimatePresence>
        {openIndex >= 0 && visibleCerts[openIndex] && (
          <PdfViewer
            item={visibleCerts[openIndex]}
            position={openIndex + 1}
            total={visibleCerts.length}
            language={language}
            onClose={() => setOpenIndex(-1)}
            onPrev={() => move(-1)}
            onNext={() => move(1)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
