// src/components/Footer.jsx
import React from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCode,
  FaHeart,
  FaArrowUp,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const contactItems = [
    {
      icon: <FaPhone />,
      label: 'Téléphone',
      value: '58 715 159',
      href: 'tel:+21658715159',
    },
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'cherif.yesmine@iit.ens.tn',
      href: 'mailto:cherif.yesmine@iit.ens.tn',
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Localisation',
      value: 'Sfax, Tunisie',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yesmine-cherif/',
      color: 'hover:text-cyan-300',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      href: 'https://github.com/yesmine879',
      color: 'hover:text-violet-300',
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#050816] border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(168,85,247,0.16),transparent_26%),radial-gradient(circle_at_85%_70%,rgba(236,72,153,0.14),transparent_24%),linear-gradient(to_bottom,#071226,#050816)]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow */}
      <div className="absolute -top-24 left-10 w-80 h-80 bg-fuchsia-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 right-10 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        {/* Top line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent mb-14" />

        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr_0.9fr] gap-10 lg:gap-14 items-start">
          {/* Colonne 1 */}
          <div className="relative rounded-[28px] border border-white/10 bg-white/[0.055] backdrop-blur-2xl p-7 md:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.30)] overflow-hidden">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/70 to-transparent" />
            <div className="absolute -right-14 -top-14 w-36 h-36 rounded-full bg-fuchsia-500/15 blur-2xl" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-500 p-[2px] shadow-lg shadow-fuchsia-500/25">
                  <div className="w-full h-full rounded-2xl bg-[#071226] flex items-center justify-center">
                    <span className="text-white font-black text-2xl">YC</span>
                  </div>
                </div>

                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                    Yesmine Cherif
                  </h2>

                  <p className="text-fuchsia-300 text-sm font-semibold mt-1 flex items-center gap-2">
                    <FaGraduationCap />
                    3ᵉ Licence Informatique · IIT
                  </p>
                </div>
              </div>

              <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                Étudiante en Génie Logiciel et Systèmes d’Information, passionnée
                par le développement Full Stack, la Data et l’Intelligence Artificielle.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {['React', 'Laravel', 'Angular', 'Python', 'MySQL'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-200 text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne 2 */}
          <div className="relative rounded-[28px] border border-white/10 bg-white/[0.055] backdrop-blur-2xl p-7 md:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.28)]">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-11 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-400/20 flex items-center justify-center text-fuchsia-300">
                <FaEnvelope />
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">Contact</h3>
                <p className="text-slate-400 text-sm">Informations personnelles</p>
              </div>
            </div>

            <div className="space-y-4">
              {contactItems.map((item) => {
                const content = (
                  <>
                    <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-fuchsia-300 shrink-0">
                      {item.icon}
                    </div>

                    <div>
                      <p className="text-slate-400 text-sm">{item.label}</p>
                      <p className="text-white font-semibold break-all">{item.value}</p>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.035] border border-white/5 hover:border-fuchsia-400/30 transition group"
                  >
                    {content}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.035] border border-white/5"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Colonne 3 */}
          <div className="relative rounded-[28px] border border-white/10 bg-white/[0.055] backdrop-blur-2xl p-7 md:p-8 shadow-[0_20px_70px_rgba(0,0,0,0.28)] overflow-hidden">
            <div className="absolute -left-14 -bottom-14 w-36 h-36 rounded-full bg-violet-500/15 blur-2xl" />

            <div className="relative">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-11 h-11 rounded-2xl bg-violet-500/10 border border-violet-400/20 flex items-center justify-center text-violet-300">
                  <FaCode />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white">Suivez-moi</h3>
                  <p className="text-slate-400 text-sm">Mes réseaux professionnels</p>
                </div>
              </div>

              <div className="flex gap-4 mb-8">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-slate-200 flex items-center justify-center text-2xl transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-400/30 hover:bg-white/10 ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 via-violet-500/10 to-transparent border border-fuchsia-400/15">
                <p className="text-white font-bold mb-2">Disponible pour :</p>

                <div className="flex flex-wrap gap-2">
                  {['Stage PFE', 'Alternance', 'Collaboration'].map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={scrollToTop}
                className="mt-6 w-full inline-flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 text-white font-bold shadow-[0_14px_30px_rgba(168,85,247,0.28)] hover:shadow-[0_18px_40px_rgba(236,72,153,0.35)] transition-all hover:-translate-y-0.5"
              >
                Retour en haut
                <FaArrowUp className="text-sm" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm text-center md:text-left">
            © {currentYear}{' '}
            <span className="text-white font-semibold">Yesmine Cherif</span>.
            Tous droits réservés.
          </p>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;