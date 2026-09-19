import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext.jsx';
import {
  FaGraduationCap,
  FaBriefcase,
  FaUsers,
  FaExternalLinkAlt,
  FaDownload,
  FaChevronDown,
  FaFileAlt,
} from 'react-icons/fa';

// ==============================
// PDF CERTIFICATES
// ==============================

import asmStage1Pdf from '../../assets/pdf/Attestation_Stage_ASM_1ere_Annee.pdf';
import asmStage2Pdf from '../../assets/pdf/Attestation_Stage_ASM_2eme_Annee.pdf';
import primatecStagePdf from '../../assets/pdf/Attestation_Stage_Primatec_1ere_Annee.pdf';

import stageIitPdf from '../../assets/pdf/stage_iit.pdf';
import stagePfePdf from '../../assets/pdf/stage_pfe.pdf';

// ==============================
// EDUCATION
// ==============================

const education = [
  {
    period: '2026 – Present',
    school: 'International Institute of Technology — IIT Sfax',
    degree: 'Engineering Cycle in Computer Science',
  },
  {
    period: '2023 – 2026',
    school: 'International Institute of Technology — IIT Sfax',
    degree:
      'Bachelor’s Degree in Software Engineering and Information Systems',
  },
  {
    period: '2022 – 2023',
    school: 'Abou Kacem Chebbi High School — Sfax',
    degree: 'Baccalaureate in Mathematics',
  },
];

// ==============================
// EXPERIENCES
// ==============================

const experiences = [
  {
    company: 'IIT Sfax — International Institute of Technology',
    role: 'Communication Assistant',
    period: 'Jul 2026 – Aug 2026',
    location: 'Sfax, Tunisia',
    description: [
      'Supported the Communication Department in organizational activities, including event representation and stakeholder communication.',
      'Contributed to video editing and media content preparation for university events.',
    ],
    technologies: ['Event Communication', 'Video Editing'],
    file: stageIitPdf,
    index: '01',
  },

  {
    company: 'LAIONS B.V.',
    role: 'Web Developer',
    project: 'Connected Fleet Management Web Dashboard',
    period: 'Apr 2026',
    location: 'Netherlands',
    description: [
      'Contributed to the development of a web dashboard for connected fleet management.',
      'Developed interfaces including login, company registration, admin space, and dashboard pages.',
      'Worked on authentication, security, and company-based data organization.',
    ],
    technologies: ['Authentication', 'Dashboard UI', 'Fleet Data'],
    file: null,
    index: '02',
  },

  {
    company: 'All Soft Multimédia (ASM)',
    role: 'Software Developer',
    project:
      'OptiCust — Complaint Management & Customer Satisfaction Platform',
    period: 'Feb 2026',
    location: 'Sfax, Tunisia',
    description: [
      'Developed a centralized web platform for managing customer complaints, satisfaction surveys, and client feedback.',
      'Implemented complaint tracking, satisfaction monitoring, and data visualization features.',
      'Contributed to a secure architecture using Angular, Laravel, and Keycloak.',
      'Integrated Power BI and a Python-based AI module for customer feedback analysis.',
    ],
    technologies: [
      'Angular',
      'Laravel',
      'Keycloak',
      'Power BI',
      'Python / AI',
    ],
    file: stagePfePdf,
    index: '03',
  },

  {
    company: 'All Soft Multimédia (ASM)',
    role: 'Web Developer',
    project: 'Event Management Web Application',
    period: 'Jul 2025 – Aug 2025',
    location: 'Sfax, Tunisia',
    description: [
      'Developed a web application for event planning and management.',
      'Worked on full-stack development using Laravel, Angular, and Node.js.',
      'Implemented user interfaces, CRUD operations, and form validation.',
    ],
    technologies: ['Laravel', 'Angular', 'Node.js'],
    file: asmStage2Pdf,
    index: '04',
  },

  {
    company: 'Primatec',
    role: 'Python Intern',
    project: 'Python Automation Scripts',
    period: 'Aug 2024',
    location: 'Sfax, Tunisia',
    description: [
      'Developed Python scripts to automate repetitive technical tasks.',
      'Supported development and testing activities to improve workflow efficiency.',
      'Worked on debugging, optimization, and error handling.',
    ],
    technologies: ['Python', 'Automation', 'Testing'],
    file: primatecStagePdf,
    index: '05',
  },

  {
    company: 'All Soft Multimédia (ASM)',
    role: 'Web Developer',
    project: 'Employee Management Web Application',
    period: 'Jul 2024',
    location: 'Sfax, Tunisia',
    description: [
      'Contributed to the development of a web application for employee management.',
      'Worked on full-stack features using Laravel, Angular, and Node.js.',
      'Implemented CRUD operations, user interfaces, and data validation.',
    ],
    technologies: ['Laravel', 'Angular', 'Node.js'],
    file: asmStage1Pdf,
    index: '06',
  },
];

// ==============================
// ASSOCIATIVE EXPERIENCE
// ==============================

const associative = [
  {
    title: 'Officer — IEEE Student Branch',
    desc: 'Participated in technical projects and student events.',
  },
  {
    title: 'Organization Team — OSI',
    desc: 'Planned and coordinated student activities, with teamwork and communication responsibilities.',
  },
];

// ==============================
// INTERESTS
// ==============================

const interests = [
  'Technology',
  'Programming',
  'Personal Projects',
  'Competitions',
  'Piano',
  'Music',
];

const frenchEducation = [
  { ...education[0], period: '2026 – Aujourd’hui', degree: 'Cycle d’ingénieur en informatique' },
  { ...education[1], degree: 'Licence en génie logiciel et systèmes d’information' },
  { ...education[2], school: 'Lycée Abou Kacem Chebbi — Sfax', degree: 'Baccalauréat en mathématiques' },
];

const frenchAssociative = [
  { title: 'Secrétaire du bureau — IEEE Student Branch', desc: 'Membre très actif de l’IEEE Student Branch, je contribue à l’organisation d’événements techniques, d’initiatives étudiantes et aux activités du club en tant que secrétaire du bureau.' },
  { title: 'Équipe d’organisation — OSI', desc: 'Planification et coordination d’activités étudiantes, avec des responsabilités en travail d’équipe et communication.' },
];

const frenchInterests = ['Technologie', 'Programmation', 'Projets personnels', 'Compétitions', 'Piano', 'Musique'];

const frenchExperiences = [
  {
    ...experiences[0], role: 'Assistante communication', period: 'Juil. 2026 – Août 2026', location: 'Sfax, Tunisie',
    description: ['Soutien au département communication dans les activités organisationnelles, la représentation lors d’événements et la communication avec les parties prenantes.', 'Contribution au montage vidéo et à la préparation de contenus média pour les événements universitaires.'],
    technologies: ['Communication événementielle', 'Montage vidéo'],
  },
  {
    ...experiences[1], role: 'Développeuse web', project: 'Tableau de bord web de gestion de flotte connectée', period: 'Avr. 2026', location: 'Pays-Bas',
    description: ['Contribution au développement d’un tableau de bord web pour la gestion de flottes connectées.', 'Développement d’interfaces de connexion, d’inscription d’entreprise, d’espace administrateur et de tableau de bord.', 'Travail sur l’authentification, la sécurité et l’organisation des données par entreprise.'],
    technologies: ['Authentification', 'Interface de tableau de bord', 'Données de flotte'],
  },
  {
    ...experiences[2], role: 'Développeuse logicielle', project: 'OptiCust — plateforme de gestion des réclamations et de satisfaction client', period: 'Fév. 2026', location: 'Sfax, Tunisie',
    description: ['Développement d’une plateforme web centralisée de gestion des réclamations, enquêtes de satisfaction et retours clients.', 'Mise en place du suivi des réclamations, du monitoring de satisfaction et de fonctionnalités de visualisation de données.', 'Contribution à une architecture sécurisée avec Angular, Laravel et Keycloak.', 'Intégration de Power BI et d’un module IA Python pour l’analyse des retours clients.'],
  },
  {
    ...experiences[3], role: 'Développeuse web', project: 'Application web de gestion d’événements', period: 'Juil. 2025 – Août 2025', location: 'Sfax, Tunisie',
    description: ['Développement d’une application web de planification et de gestion d’événements.', 'Développement full-stack avec Laravel, Angular et Node.js.', 'Mise en place d’interfaces utilisateur, d’opérations CRUD et de validation de formulaires.'],
  },
  {
    ...experiences[4], role: 'Stagiaire Python', project: 'Scripts d’automatisation Python', period: 'Août 2024', location: 'Sfax, Tunisie',
    description: ['Développement de scripts Python pour automatiser des tâches techniques répétitives.', 'Soutien aux activités de développement et de test afin d’améliorer l’efficacité des flux de travail.', 'Travail sur le débogage, l’optimisation et la gestion des erreurs.'],
    technologies: ['Python', 'Automatisation', 'Tests'],
  },
  {
    ...experiences[5], role: 'Développeuse web', project: 'Application web de gestion des employés', period: 'Juil. 2024', location: 'Sfax, Tunisie',
    description: ['Contribution au développement d’une application web de gestion des employés.', 'Développement de fonctionnalités full-stack avec Laravel, Angular et Node.js.', 'Mise en place d’opérations CRUD, d’interfaces utilisateur et de validation de données.'],
  },
];

// ==============================
// ANIMATED ORBS
// ==============================

const ORBS = [
  {
    size: 520,
    top: '-10%',
    left: '62%',
    color: 'rgba(168, 85, 247, 0.16)',
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
    color: 'rgba(236, 72, 153, 0.13)',
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
    color: 'rgba(99, 102, 241, 0.14)',
    path: {
      x: [0, 20, 0],
      y: [0, 45, 0],
    },
    duration: 26,
  },
];

// ==============================
// PARTICLE NETWORK
// ==============================

const ParticleNetwork = ({ prefersReducedMotion }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;

    if (!ctx || !parent) return;

    let width = 0;
    let height = 0;
    let particles = [];
    let animationFrame = null;

    const MAX_DISTANCE = 130;
    const MAX_DPR = 2;

    const resize = () => {
      const rect = parent.getBoundingClientRect();

      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);

      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(
        25,
        Math.min(90, Math.floor((width * height) / 9000))
      );

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.4 + 0.6,
      }));
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x <= 0 || particle.x >= width) {
          particle.vx *= -1;
          particle.x = Math.max(0, Math.min(width, particle.x));
        }

        if (particle.y <= 0 || particle.y >= height) {
          particle.vy *= -1;
          particle.y = Math.max(0, Math.min(height, particle.y));
        }

        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = 'rgba(196, 181, 253, 0.55)';
        ctx.fill();
      });

      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distanceSquared = dx * dx + dy * dy;

          if (distanceSquared < MAX_DISTANCE * MAX_DISTANCE) {
            const distance = Math.sqrt(distanceSquared);
            const opacity =
              0.18 * (1 - distance / MAX_DISTANCE);

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);

            ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    resize();
    animate();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(parent);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }

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

// ==============================
// ANIMATION
// ==============================

const fadeUp = (delay = 0, reducedMotion = false) => ({
  initial: {
    opacity: 0,
    y: reducedMotion ? 0 : 30,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.15,
  },
  transition: reducedMotion
    ? {
        duration: 0,
      }
    : {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
});

// ==============================
// SECTION LABEL
// ==============================

const SectionLabel = ({ children }) => {
  return (
    <p
      style={{
        color: '#a855f7',
        fontSize: '0.7rem',
        letterSpacing: '0.2em',
        fontWeight: 700,
        textTransform: 'uppercase',
        marginBottom: '0.5rem',
      }}
    >
      {children}
    </p>
  );
};

// ==============================
// CARD
// ==============================

const Card = ({ children, style = {} }) => {
  return (
    <div
      style={{
        background: 'rgba(255, 255, 255, 0.035)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '1.5rem',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        ...style,
      }}
    >
      {children}
    </div>
  );
};

// ==============================
// PILL
// ==============================

const Pill = ({ children }) => {
  return (
    <span
      style={{
        background: 'rgba(168, 85, 247, 0.15)',
        border: '1px solid rgba(168, 85, 247, 0.25)',
        color: '#c4b5fd',
        fontSize: '0.72rem',
        fontWeight: 600,
        padding: '0.3rem 0.85rem',
        borderRadius: '999px',
        display: 'inline-block',
      }}
    >
      {children}
    </span>
  );
};

// ==============================
// TECH TAG
// ==============================

const TechTag = ({ children }) => {
  return (
    <span
      style={{
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.09)',
        color: '#94a3b8',
        fontSize: '0.72rem',
        fontWeight: 500,
        padding: '0.28rem 0.7rem',
        borderRadius: '999px',
      }}
    >
      {children}
    </span>
  );
};

// ==============================
// EXPERIENCE CARD
// ==============================

const ExperienceCard = ({ exp, prefersReducedMotion }) => {
  const { t } = useLanguage();
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (!expanded) return;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setExpanded(false);
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [expanded]);

  const toggleCertificate = () => {
    if (exp.file) {
      setExpanded((value) => !value);
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: prefersReducedMotion ? 0 : 18,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }
      }
      whileHover={
        prefersReducedMotion
          ? undefined
          : {
              y: -2,
            }
      }
      style={{
        background: 'rgba(255, 255, 255, 0.03)',
        border: '1px solid rgba(255, 255, 255, 0.07)',
        borderRadius: '1rem',
        padding: '1.25rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'flex-start',
        }}
      >
        {/* Number */}
        <div
          aria-hidden="true"
          style={{
            flexShrink: 0,
            width: 42,
            height: 42,
            borderRadius: '0.75rem',
            background: 'rgba(168, 85, 247, 0.1)',
            border: '1px solid rgba(168, 85, 247, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#a855f7',
            fontWeight: 800,
            fontSize: '0.78rem',
          }}
        >
          {exp.index}
        </div>

        <div
          style={{
            flex: 1,
            minWidth: 0,
          }}
        >
          {/* Header */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: '0.2rem',
            }}
          >
            <span
              style={{
                color: '#e2e8f0',
                fontWeight: 700,
                fontSize: '0.95rem',
              }}
            >
              {exp.role}
            </span>

            <span
              style={{
                color: '#64748b',
                fontSize: '0.75rem',
                marginLeft: 'auto',
              }}
            >
              {exp.period}
            </span>
          </div>

          {/* Company */}
          <p
            style={{
              color: '#a855f7',
              fontSize: '0.82rem',
              fontWeight: 600,
              marginBottom: exp.project ? '0.15rem' : '0.6rem',
            }}
          >
            {exp.company} · {exp.location}
          </p>

          {/* Project */}
          {exp.project && (
            <p
              style={{
                color: '#94a3b8',
                fontSize: '0.82rem',
                fontStyle: 'italic',
                marginBottom: '0.6rem',
              }}
            >
              {exp.project}
            </p>
          )}

          {/* Description */}
          <ul
            style={{
              margin: '0.5rem 0 0.85rem',
              paddingLeft: '1.1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
            }}
          >
            {exp.description.map((line, index) => (
              <li
                key={`${exp.index}-description-${index}`}
                style={{
                  color: '#64748b',
                  fontSize: '0.83rem',
                  lineHeight: 1.6,
                }}
              >
                {line}
              </li>
            ))}
          </ul>

          {/* Technologies + Certificate */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            {exp.technologies.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}

            {exp.file && (
              <button
                type="button"
                onClick={toggleCertificate}
                aria-expanded={expanded}
                aria-controls={`certificate-${exp.index}`}
                aria-label={
                  expanded
                    ? `${t('hideCertificate')} : ${exp.role}`
                    : `${t('viewCertificate')} : ${exp.role}`
                }
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0f]"
                style={{
                  marginLeft: 'auto',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: 'transparent',
                  border: 'none',
                  color: '#a855f7',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  padding: '0.3rem 0',
                }}
              >
                <FaFileAlt aria-hidden="true" />

                <span>
                  {expanded
                    ? t('hideCertificate')
                    : t('viewCertificate')}
                </span>

                <FaChevronDown
                  aria-hidden="true"
                  style={{
                    fontSize: '0.6rem',
                    transform: expanded
                      ? 'rotate(180deg)'
                      : 'rotate(0deg)',
                    transition: 'transform 0.2s',
                  }}
                />
              </button>
            )}
          </div>

          {/* Certificate viewer */}
          <AnimatePresence initial={false}>
            {expanded && exp.file && (
              <motion.div
                id={`certificate-${exp.index}`}
                initial={
                  prefersReducedMotion
                    ? { opacity: 1, height: 'auto' }
                    : {
                        opacity: 0,
                        height: 0,
                      }
                }
                animate={{
                  opacity: 1,
                  height: 'auto',
                }}
                exit={
                  prefersReducedMotion
                    ? { opacity: 0 }
                    : {
                        opacity: 0,
                        height: 0,
                      }
                }
                transition={
                  prefersReducedMotion
                    ? { duration: 0 }
                    : { duration: 0.3 }
                }
                style={{
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    marginTop: '0.9rem',
                    borderRadius: '0.85rem',
                    overflow: 'hidden',
                    border:
                      '1px solid rgba(255, 255, 255, 0.09)',
                    background: '#1a1526',
                    aspectRatio: '4 / 3',
                    position: 'relative',
                  }}
                >
                  <object
                    data={`${exp.file}#view=Fit&toolbar=0&navpanes=0`}
                    type="application/pdf"
                    title={`${exp.role} certificate`}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <iframe
                      src={`${exp.file}#view=Fit&toolbar=0&navpanes=0`}
                      title={`${exp.role} certificate fallback`}
                      style={{
                        border: 0,
                        width: '100%',
                        height: '100%',
                        background: '#fff',
                      }}
                    />
                  </object>
                </div>

                {/* PDF actions */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.6rem',
                    marginTop: '0.7rem',
                  }}
                >
                  <a
                    href={exp.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                    style={{
                      flex: '1 1 160px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      padding: '0.55rem',
                      borderRadius: '0.65rem',
                      background:
                        'linear-gradient(135deg, #a855f7, #818cf8)',
                      color: '#fff',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    <FaExternalLinkAlt aria-hidden="true" />
                    {t('openPdf')}
                  </a>

                  <a
                    href={exp.file}
                    download
                    className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
                    style={{
                      flex: '0 1 auto',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.4rem',
                      padding: '0.55rem 0.9rem',
                      borderRadius: '0.65rem',
                      border:
                        '1px solid rgba(168, 85, 247, 0.3)',
                      color: '#c4b5fd',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                    }}
                  >
                    <FaDownload aria-hidden="true" />
                    {t('download')}
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

// ==============================
// MAIN COMPONENT
// ==============================

const Parcours = () => {
  const { language, t } = useLanguage();
  const localizedEducation = language === 'fr' ? frenchEducation : education;
  const localizedAssociative = language === 'fr' ? frenchAssociative : associative;
  const localizedInterests = language === 'fr' ? frenchInterests : interests;
  const localizedExperiences = language === 'fr' ? frenchExperiences : experiences;
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="journey"
      className="scroll-mt-28 relative py-24 lg:py-32 overflow-hidden"
    >
      {/* ==========================
          BACKGROUND
      ========================== */}

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

      {/* Animated orbs */}
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

      {/* Particles */}
      <ParticleNetwork prefersReducedMotion />

      {/* Scanning line */}
      {!prefersReducedMotion && (
        <motion.div
          aria-hidden="true"
          className="absolute left-0 right-0 pointer-events-none"
          style={{
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, rgba(196,181,253,0.7), transparent)',
            boxShadow:
              '0 0 12px rgba(168,85,247,0.5)',
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

      {/* Grid */}
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

      {/* ==========================
          CONTENT
      ========================== */}

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 z-10">
        {/* Heading */}
        <motion.div
          {...fadeUp(0, prefersReducedMotion)}
          className="mb-20"
        >
          <SectionLabel>{t('journey')}</SectionLabel>

          <h2
            style={{
              fontFamily: '"Syne", sans-serif',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 800,
              color: '#f1f0fb',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
            }}
          >
            {t('journeyTitle')}
          </h2>

          <p
            style={{
              color: '#64748b',
              maxWidth: '55ch',
              fontSize: '1.05rem',
              lineHeight: 1.7,
            }}
          >
            {t('journeyIntro')}
          </p>
        </motion.div>

        {/* ==========================
            MAIN GRID
        ========================== */}

        <div className="grid xl:grid-cols-12 gap-8">
          {/* ========================
              LEFT
          ======================== */}

          <div className="xl:col-span-4 space-y-6">
            {/* Education */}
            <motion.div {...fadeUp(0.05, prefersReducedMotion)}>
              <Card
                style={{
                  padding: '1.75rem',
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    aria-hidden="true"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: '0.75rem',
                      background:
                        'rgba(168,85,247,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#c084fc',
                    }}
                  >
                    <FaGraduationCap />
                  </div>

                  <h3
                    style={{
                      color: '#f1f0fb',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                    }}
                  >
                    {t('academicEducation')}
                  </h3>
                </div>

                <div
                  style={{
                    position: 'relative',
                    paddingLeft: '1.25rem',
                  }}
                >
                  <div
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 8,
                      bottom: 8,
                      width: '2px',
                      background:
                        'linear-gradient(to bottom, #a855f7, rgba(168,85,247,0.1))',
                    }}
                  />

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1.5rem',
                    }}
                  >
                    {localizedEducation.map((item) => (
                      <div
                        key={`${item.period}-${item.degree}`}
                        style={{
                          position: 'relative',
                        }}
                      >
                        <div
                          aria-hidden="true"
                          style={{
                            position: 'absolute',
                            left: '-1.5rem',
                            top: '0.35rem',
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            background: '#a855f7',
                            boxShadow:
                              '0 0 8px rgba(168,85,247,0.6)',
                          }}
                        />

                        <p
                          style={{
                            color: '#a855f7',
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            marginBottom: '0.3rem',
                          }}
                        >
                          {item.period}
                        </p>

                        <p
                          style={{
                            color: '#e2e8f0',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            lineHeight: 1.4,
                            marginBottom: '0.25rem',
                          }}
                        >
                          {item.school}
                        </p>

                        <p
                          style={{
                            color: '#64748b',
                            fontSize: '0.82rem',
                            lineHeight: 1.5,
                          }}
                        >
                          {item.degree}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Associative */}
            <motion.div {...fadeUp(0.1, prefersReducedMotion)}>
              <Card
                style={{
                  padding: '1.75rem',
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    aria-hidden="true"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: '0.75rem',
                      background:
                        'rgba(56,189,248,0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#38bdf8',
                    }}
                  >
                    <FaUsers />
                  </div>

                  <h3
                    style={{
                      color: '#f1f0fb',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                    }}
                  >
                    {t('associativeExperience')}
                  </h3>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  {localizedAssociative.map((item) => (
                    <div
                      key={item.title}
                      style={{
                        background:
                          'rgba(255,255,255,0.03)',
                        border:
                          '1px solid rgba(255,255,255,0.07)',
                        borderRadius: '1rem',
                        padding: '1rem 1.1rem',
                      }}
                    >
                      <p
                        style={{
                          color: '#e2e8f0',
                          fontWeight: 600,
                          fontSize: '0.9rem',
                          marginBottom: '0.3rem',
                        }}
                      >
                        {item.title}
                      </p>

                      <p
                        style={{
                          color: '#64748b',
                          fontSize: '0.82rem',
                          lineHeight: 1.55,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Interests */}
            <motion.div {...fadeUp(0.15, prefersReducedMotion)}>
              <Card
                style={{
                  padding: '1.75rem',
                }}
              >
                <h3
                  style={{
                    color: '#f1f0fb',
                    fontWeight: 700,
                    fontSize: '1.05rem',
                    marginBottom: '1rem',
                  }}
                >
                  {t('interests')}
                </h3>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                  }}
                >
                  {localizedInterests.map((interest) => (
                    <Pill key={interest}>
                      {interest}
                    </Pill>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* ========================
              RIGHT
          ======================== */}

          <div className="xl:col-span-8">
            <motion.div {...fadeUp(0.05, prefersReducedMotion)}>
              <Card
                style={{
                  padding: '1.75rem',
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div
                    aria-hidden="true"
                    style={{
                      width: 38,
                      height: 38,
                      borderRadius: '0.75rem',
                      background:
                        'rgba(168,85,247,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#c084fc',
                    }}
                  >
                    <FaBriefcase />
                  </div>

                  <h3
                    style={{
                      color: '#f1f0fb',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                    }}
                  >
                    {t('professionalExperience')}
                  </h3>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  {localizedExperiences.map((experience) => (
                    <ExperienceCard
                      key={experience.index}
                      exp={experience}
                      prefersReducedMotion={prefersReducedMotion}
                    />
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parcours;
