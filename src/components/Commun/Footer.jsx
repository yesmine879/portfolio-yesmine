// src/components/Footer.jsx
import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t-4 border-[#1A3C5A] mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* Colonne 1 : Photo + Identité (exactement comme le CV) */}
          <div className="text-center md:text-left">
            

            <h2 className="text-4xl font-bold text-[#1A3C5A] tracking-tight">
              YESMINE CHERIF
            </h2>
            <p className="text-2xl font-medium text-gray-800 mt-3">
              Étudiante en Génie Logiciel<br/>
              et Systèmes d'Information
            </p>
            <p className="text-gray-600 mt-4 text-lg">
              3ᵉ année • Institut International de Technologie (IIT) Sfax
            </p>
          </div>

          {/* Colonne 2 : Contact uniquement */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#1A3C5A] border-b-4 border-[#1A3C5A] pb-2 inline-block">
              CONTACT
            </h3>
            <div className="space-y-5 text-lg text-gray-700">
              <a href="tel:+21658715159" className="flex items-center gap-4 hover:text-[#1A3C5A] transition">
                <FaPhone className="text-[#1A3C5A] text-xl" />
                <span>58 715 159</span>
              </a>
              <a href="mailto:cherifyesmine685@gmail.com" className="flex items-center gap-4 hover:text-[#1A3C5A] transition">
                <FaEnvelope className="text-[#1A3C5A] text-xl" />
                <span>cherifyesmine685@gmail.com</span>
              </a>
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-[#1A3C5A] text-xl" />
                <span>Hay Lons 3021, Sfax, Tunisie</span>
              </div>
            </div>
          </div>

          {/* Colonne 3 : Réseaux + Copyright */}
          <div className="space-y-8 text-center md:text-right">
            <div>
              <h3 className="text-2xl font-bold text-[#1A3C5A] border-b-4 border-[#1A3C5A] pb-2 inline-block">
                SUIVEZ-MOI
              </h3>
              <div className="flex justify-center md:justify-end gap-8 text-4xl mt-6">
                <a 
                  href="https://www.linkedin.com/in/yesmine-cherif" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#1A3C5A] transition transform hover:scale-125 duration-300"
                >
                  <FaLinkedin />
                </a>
                <a 
                  href="https://github.com/yesminecherif" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#1A3C5A] transition transform hover:scale-125 duration-300"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            <div className="pt-10 border-t border-gray-300">
              <p className="text-[#1A3C5A] font-bold">
                © 2025 Yesmine Cherif
              </p>
              <p className="text-gray-500 text-sm mt-2">
                Tous droits réservés • Portfolio réalisé avec React + Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;