// src/components/Footer.jsx
import React from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaGraduationCap,
  FaHeart,
  FaArrowUp,
} from 'react-icons/fa';
import { useLanguage } from '../../context/LanguageContext.jsx';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yesmine-cherif/',
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      href: 'https://github.com/yesmine879',
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-violet-500/15 bg-[#05030d]/90">
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              ellipse 70% 80% at 15% 50%,
              rgba(124, 58, 237, 0.13) 0%,
              transparent 65%
            ),
            radial-gradient(
              ellipse 60% 70% at 85% 30%,
              rgba(236, 72, 153, 0.10) 0%,
              transparent 65%
            ),
            radial-gradient(
              ellipse 50% 50% at 50% 100%,
              rgba(168, 85, 247, 0.08) 0%,
              transparent 70%
            )
          `,
        }}
      />

      {/* =====================================================
          SUBTLE GRID
      ===================================================== */}

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,0.25) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,0.25) 1px,
              transparent 1px
            )
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* =====================================================
          TOP GLOW LINE
      ===================================================== */}

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/60 to-transparent" />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-14">

        {/* Top separator */}

        <div className="h-px w-full bg-gradient-to-r from-transparent via-violet-500/20 to-transparent mb-10" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* =================================================
              BRAND
          ================================================= */}

          <div className="text-center lg:text-left">

            <div className="flex items-center justify-center lg:justify-start gap-4 mb-5">

              {/* Logo */}

              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-500 p-[2px] shadow-[0_10px_35px_rgba(168,85,247,0.25)]">

                <div className="w-full h-full rounded-[14px] bg-[#090614] flex items-center justify-center border border-white/5">
                  <span className="text-transparent bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text font-black text-xl">
                    YC
                  </span>
                </div>

              </div>

              {/* Name */}

              <div>

                <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                  Yesmine Cherif
                </h2>

                <p className="text-slate-400 text-sm font-semibold mt-1 flex items-center justify-center lg:justify-start gap-2">
                  <FaGraduationCap className="text-violet-400" />
                  {t('engineeringCycle')}
                </p>

              </div>

            </div>

            <p className="text-slate-400 max-w-xl leading-relaxed">
              {t('footerBio')}
            </p>

          </div>

          {/* =================================================
              SOCIAL + BACK TO TOP
          ================================================= */}

          <div className="flex flex-col items-center lg:items-end gap-5">

            {/* Social links */}

            <div className="flex items-center gap-4">

              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-white/[0.045]
                    border
                    border-white/10
                    text-violet-300
                    flex
                    items-center
                    justify-center
                    text-xl
                    shadow-[0_8px_25px_rgba(0,0,0,0.2)]
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-violet-400/40
                    hover:bg-violet-500/10
                    hover:text-violet-200
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-violet-400
                    focus-visible:ring-offset-2
                    focus-visible:ring-offset-[#05030d]
                  "
                >
                  {social.icon}
                </a>
              ))}

            </div>

            {/* Back to top */}

            <button
              type="button"
              onClick={scrollToTop}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-6
                py-3
                rounded-2xl
                bg-gradient-to-r
                from-violet-600
                via-fuchsia-600
                to-pink-500
                text-white
                font-bold
                shadow-[0_14px_35px_rgba(168,85,247,0.28)]
                hover:shadow-[0_18px_45px_rgba(236,72,153,0.32)]
                hover:-translate-y-0.5
                transition-all
                duration-300
                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-fuchsia-300
                focus-visible:ring-offset-2
                focus-visible:ring-offset-[#05030d]
              "
            >
              {t('backToTop')}
              <FaArrowUp className="text-white text-sm" />
            </button>

          </div>

        </div>

        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear}{' '}
            <span className="text-slate-300 font-semibold">
              Yesmine Cherif
            </span>
            . {t('rights')}
          </p>

          <p className="text-slate-500 text-sm flex items-center gap-2">
            {t('madeWith')}
            <FaHeart className="text-pink-500" />
            by Yesmine
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
