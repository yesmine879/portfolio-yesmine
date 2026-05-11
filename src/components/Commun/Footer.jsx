// src/components/Footer.jsx
import React from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaGraduationCap,
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
    <footer className="relative overflow-hidden border-t border-slate-200 bg-[#eef3fb]">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.18) 1px, transparent 1px)',
          backgroundSize: '68px 68px',
        }}
      />

      {/* Light soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-10 lg:py-12">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-300 to-transparent mb-8" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-500 p-[2px] shadow-lg shadow-violet-500/20">
                <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center">
                  <span className="text-violet-700 font-black text-xl">YC</span>
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Yesmine Cherif
                </h2>

                <p className="text-slate-700 text-sm font-semibold mt-1 flex items-center justify-center lg:justify-start gap-2">
                  <FaGraduationCap className="text-violet-600" />
                  Software Engineering & Information Systems
                </p>
              </div>
            </div>

            <p className="text-slate-600 max-w-xl leading-relaxed">
              Full Stack Developer passionate about web development, data, and
              artificial intelligence.
            </p>
          </div>

          {/* Social links + Button */}
          <div className="flex flex-col items-center lg:items-end gap-5">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-2xl bg-white/80 border border-slate-200 text-violet-700 flex items-center justify-center text-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:bg-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 text-white font-bold shadow-[0_14px_30px_rgba(168,85,247,0.22)] hover:shadow-[0_18px_40px_rgba(236,72,153,0.28)] transition-all hover:-translate-y-0.5"
            >
              Back to Top
              <FaArrowUp className="text-white text-sm" />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm text-center md:text-left">
            © {currentYear}{' '}
            <span className="text-slate-900 font-semibold">Yesmine Cherif</span>.
            All rights reserved.
          </p>

          <p className="text-slate-600 text-sm flex items-center gap-2">
            Made with
            <FaHeart className="text-pink-500" />
            by Yesmine
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;