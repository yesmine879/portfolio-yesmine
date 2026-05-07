import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaBriefcase,
  FaUsers,
  FaExternalLinkAlt,
  FaCode,
  FaServer,
  FaDatabase,
  FaBrain,
  FaTools,
  FaGlobe,
} from 'react-icons/fa';

import asmStage1Pdf from '../../assets/pdf/Attestation_Stage_ASM_1ere_Annee.pdf';
import asmStage2Pdf from '../../assets/pdf/Attestation_Stage_ASM_2eme_Annee.pdf';
import primatecStagePdf from '../../assets/pdf/Attestation_Stage_Primatec_1ere_Annee.pdf';

/* ─── Data ─────────────────────────────────────────────────── */

const skillsData = [
  {
    title: 'Développement Web',
    icon: <FaGlobe />,
    accent: '#a855f7',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Laravel', 'Node.js'],
  },
  {
    title: 'Langages',
    icon: <FaCode />,
    accent: '#818cf8',
    items: ['Python', 'Java', 'PHP', 'C', 'C#', 'SQL'],
  },
  {
    title: 'Backend & API',
    icon: <FaServer />,
    accent: '#c084fc',
    items: ['Laravel', 'Spring Boot', 'Flask', 'REST API', 'JSON', 'XML'],
  },
  {
    title: 'Bases de données',
    icon: <FaDatabase />,
    accent: '#38bdf8',
    items: ['MySQL', 'Oracle', 'SQL'],
  },
  {
    title: 'IA / Data',
    icon: <FaBrain />,
    accent: '#f472b6',
    items: ['Machine Learning', 'Power BI', 'Analyse de données', 'Big Data'],
  },
  {
    title: 'Outils & Méthodes',
    icon: <FaTools />,
    accent: '#34d399',
    items: ['Git', 'UML', 'Linux', 'Flutter', 'Scrum', 'Réseaux'],
  },
];

const stagesData = [
  {
    company: 'ASM',
    period: 'Juil. 2024',
    role: 'Développeuse web',
    description:
      "Conception, développement et tests d'une application web de gestion des employés avec Laravel, Angular et Node.js.",
    technologies: ['Laravel', 'Angular', 'Node.js'],
    file: asmStage1Pdf,
    index: '01',
  },
  {
    company: 'Primatec',
    period: 'Août 2024',
    role: 'Stagiaire Python',
    description:
      "Développement de scripts Python pour automatiser des tâches techniques et contribuer aux activités de développement et de test.",
    technologies: ['Python', 'Automatisation', 'Tests'],
    file: primatecStagePdf,
    index: '02',
  },
  {
    company: 'ASM',
    period: 'Juil. – Août 2025',
    role: 'Développeuse web',
    description:
      "Développement d'une application de gestion d'événements avec Laravel, Angular et Node.js — interfaces utilisateur, CRUD et validations.",
    technologies: ['Laravel', 'Angular', 'Node.js'],
    file: asmStage2Pdf,
    index: '03',
  },
];

const interests = ['Technologie', 'Programmation', 'Projets personnels', 'Compétitions', 'Piano', 'Musique'];

/* ─── Animation helpers ─────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ─── Sub-components ────────────────────────────────────────── */

const SectionLabel = ({ children }) => (
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

const Card = ({ children, style = {}, className = '' }) => (
  <div
    className={className}
    style={{
      background: 'rgba(255,255,255,0.035)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: '1.5rem',
      backdropFilter: 'blur(16px)',
      ...style,
    }}
  >
    {children}
  </div>
);

const Pill = ({ children, accent = 'rgba(168,85,247,0.15)', textColor = '#c4b5fd', border = 'rgba(168,85,247,0.25)' }) => (
  <span
    style={{
      background: accent,
      border: `1px solid ${border}`,
      color: textColor,
      fontSize: '0.72rem',
      fontWeight: 600,
      padding: '0.3rem 0.85rem',
      borderRadius: '999px',
      display: 'inline-block',
      letterSpacing: '0.03em',
    }}
  >
    {children}
  </span>
);

const TechTag = ({ children }) => (
  <span
    style={{
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.09)',
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

/* ─── Main component ────────────────────────────────────────── */

const Parcours = () => {
  return (
    <section
      id="parcours"
      className="scroll-mt-28 relative py-24 lg:py-32 overflow-hidden"
      style={{ background: '#0a0a0f' }}
    >
      {/* Ambient blobs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-10%', left: '-5%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 65%)',
          borderRadius: '50%',
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: '-5%', right: '-5%',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(56,189,248,0.08) 0%, transparent 65%)',
          borderRadius: '50%',
        }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)`,
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 z-10">

        {/* ── Section header ── */}
        <motion.div {...fadeUp(0)} className="mb-20">
          <SectionLabel>Parcours</SectionLabel>
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
            {"Académique & "}
            <span
              style={{
                background: 'linear-gradient(135deg, #e879f9 0%, #a855f7 50%, #818cf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Professionnel
            </span>
          </h2>
          <p style={{ color: '#64748b', maxWidth: '55ch', fontSize: '1.05rem', lineHeight: 1.7 }}>
            {"Étudiante en Génie Logiciel passionnée par le développement web, les systèmes d'information et l'intelligence artificielle."}
          </p>
        </motion.div>

        <div className="grid xl:grid-cols-12 gap-8">

          {/* ────── LEFT COLUMN ────── */}
          <div className="xl:col-span-4 space-y-6">

            {/* Formation */}
            <motion.div {...fadeUp(0.05)}>
              <Card style={{ padding: '1.75rem' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    style={{
                      width: 38, height: 38,
                      borderRadius: '0.75rem',
                      background: 'rgba(168,85,247,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#c084fc', fontSize: '1rem',
                    }}
                  >
                    <FaGraduationCap />
                  </div>
                  <h3 style={{ color: '#f1f0fb', fontWeight: 700, fontSize: '1.05rem' }}>
                    Formation académique
                  </h3>
                </div>

                <div style={{ position: 'relative', paddingLeft: '1.25rem' }}>
                  {/* Timeline line */}
                  <div
                    style={{
                      position: 'absolute', left: 0, top: 8, bottom: 8,
                      width: '2px',
                      background: 'linear-gradient(to bottom, #a855f7, rgba(168,85,247,0.1))',
                      borderRadius: '999px',
                    }}
                  />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {[
                      {
                        period: '2023 – 2026',
                        school: 'Institut International de Technologie (IIT Sfax)',
                        degree: "Licence en Génie Logiciel et Systèmes d'Information",
                      },
                      {
                        period: '2023',
                        school: 'Lycée Abou Kacem Chebbi – Sfax',
                        degree: 'Baccalauréat en Mathématiques',
                      },
                    ].map((item, i) => (
                      <div key={i} style={{ position: 'relative' }}>
                        {/* Dot */}
                        <div
                          style={{
                            position: 'absolute', left: '-1.5rem', top: '0.35rem',
                            width: 8, height: 8,
                            borderRadius: '50%',
                            background: '#a855f7',
                            boxShadow: '0 0 8px rgba(168,85,247,0.6)',
                          }}
                        />
                        <p style={{ color: '#a855f7', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', marginBottom: '0.3rem' }}>
                          {item.period}
                        </p>
                        <p style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.4, marginBottom: '0.25rem' }}>
                          {item.school}
                        </p>
                        <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: 1.5 }}>
                          {item.degree}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Expérience associative */}
            <motion.div {...fadeUp(0.10)}>
              <Card style={{ padding: '1.75rem' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    style={{
                      width: 38, height: 38, borderRadius: '0.75rem',
                      background: 'rgba(56,189,248,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#38bdf8', fontSize: '1rem',
                    }}
                  >
                    <FaUsers />
                  </div>
                  <h3 style={{ color: '#f1f0fb', fontWeight: 700, fontSize: '1.05rem' }}>
                    {"Expérience associative"}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    {
                      title: 'Officer — IEEE Student Branch',
                      desc: "Participation à des projets et événements techniques.",
                    },
                    {
                      title: 'Organisation Team — OSI',
                      desc: "Planification, coordination d'activités étudiantes, travail en équipe et communication.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: '1rem',
                        padding: '1rem 1.1rem',
                      }}
                    >
                      <p style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.3rem' }}>
                        {item.title}
                      </p>
                      <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: 1.55 }}>
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Centres d'intérêt */}
            <motion.div {...fadeUp(0.15)}>
              <Card style={{ padding: '1.75rem' }}>
                <h3 style={{ color: '#f1f0fb', fontWeight: 700, fontSize: '1.05rem', marginBottom: '1rem' }}>
                  {"Centres d'intérêt"}
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {interests.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* ────── RIGHT COLUMN ────── */}
          <div className="xl:col-span-8 space-y-6">

            {/* Compétences */}
            <motion.div {...fadeUp(0.05)}>
              <Card style={{ padding: '1.75rem' }}>
                <h3 style={{ color: '#f1f0fb', fontWeight: 700, fontSize: '1.05rem', marginBottom: '1.5rem' }}>
                  {"Compétences"}
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {skillsData.map((skill) => (
                    <div
                      key={skill.title}
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: '1rem',
                        padding: '1.1rem',
                        transition: 'border-color 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = `${skill.accent}44`; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
                        <div
                          style={{
                            width: 34, height: 34, borderRadius: '0.6rem',
                            background: `${skill.accent}18`,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: skill.accent, fontSize: '0.9rem',
                          }}
                        >
                          {skill.icon}
                        </div>
                        <h4 style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.88rem' }}>
                          {skill.title}
                        </h4>
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                        {skill.items.map((item) => (
                          <TechTag key={item}>{item}</TechTag>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Stages */}
            <motion.div {...fadeUp(0.10)}>
              <Card style={{ padding: '1.75rem' }}>
                <div className="flex items-center gap-3 mb-6">
                  <div
                    style={{
                      width: 38, height: 38, borderRadius: '0.75rem',
                      background: 'rgba(168,85,247,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#c084fc', fontSize: '1rem',
                    }}
                  >
                    <FaBriefcase />
                  </div>
                  <h3 style={{ color: '#f1f0fb', fontWeight: 700, fontSize: '1.05rem' }}>
                    Stages
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {stagesData.map((stage, index) => (
                    <div
                      key={`${stage.company}-${index}`}
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        borderRadius: '1rem',
                        padding: '1.25rem',
                        display: 'flex',
                        gap: '1rem',
                        alignItems: 'flex-start',
                        transition: 'border-color 0.2s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(168,85,247,0.25)'; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; }}
                    >
                      {/* Number */}
                      <div
                        style={{
                          flexShrink: 0,
                          width: 42, height: 42,
                          borderRadius: '0.75rem',
                          background: 'rgba(168,85,247,0.1)',
                          border: '1px solid rgba(168,85,247,0.2)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: '#a855f7',
                          fontFamily: '"Syne", sans-serif',
                          fontWeight: 800,
                          fontSize: '0.78rem',
                          letterSpacing: '0.05em',
                        }}
                      >
                        {stage.index}
                      </div>

                      {/* Content */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                          <span style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '0.95rem' }}>
                            {stage.company}
                          </span>
                          <Pill>{stage.role}</Pill>
                          <span style={{ color: '#475569', fontSize: '0.75rem', marginLeft: 'auto' }}>
                            {stage.period}
                          </span>
                        </div>

                        <p style={{ color: '#64748b', fontSize: '0.83rem', lineHeight: 1.6, margin: '0.5rem 0 0.75rem' }}>
                          {stage.description}
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.4rem' }}>
                          {stage.technologies.map((tech) => (
                            <TechTag key={tech}>{tech}</TechTag>
                          ))}
                          <a
                            href={stage.file}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              marginLeft: 'auto',
                              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                              color: '#a855f7',
                              fontSize: '0.78rem', fontWeight: 600,
                              textDecoration: 'none',
                              transition: 'color 0.2s',
                            }}
                            onMouseEnter={e => { e.currentTarget.style.color = '#c084fc'; }}
                            onMouseLeave={e => { e.currentTarget.style.color = '#a855f7'; }}
                          >
                            Attestation
                            <FaExternalLinkAlt style={{ fontSize: '0.65rem' }} />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* PFE */}
            <motion.div {...fadeUp(0.15)}>
              <div
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(168,85,247,0.22)',
                  borderRadius: '1.5rem',
                  padding: '1.75rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Accent glow top-right */}
                <div
                  style={{
                    position: 'absolute', top: -60, right: -60,
                    width: 200, height: 200,
                    background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 65%)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                  }}
                />

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.1rem' }}>
                  <h3 style={{ color: '#f1f0fb', fontWeight: 700, fontSize: '1.05rem' }}>
                    {"Projet de fin d'études"}
                  </h3>
                  <Pill
                    accent="rgba(52,211,153,0.12)"
                    textColor="#6ee7b7"
                    border="rgba(52,211,153,0.25)"
                  >
                    En cours
                  </Pill>
                </div>

                <p style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.6rem', lineHeight: 1.4 }}>
                  {"Plateforme de gestion des réclamations et de la satisfaction client"}
                </p>

                <p style={{ color: '#64748b', fontSize: '0.85rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                  {"Développement d'une plateforme web de gestion des réclamations et de suivi de la satisfaction client, intégrant Angular, Laravel, Keycloak, Power BI et des fonctionnalités d'intelligence artificielle."}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {['Angular', 'Laravel', 'Keycloak', 'Power BI', 'IA'].map((tech) => (
                    <TechTag key={tech}>{tech}</TechTag>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Parcours;
