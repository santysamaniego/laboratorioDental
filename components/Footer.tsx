
import React from 'react';
import { Instagram, MapPin, Phone, Mail, Facebook, ArrowUp } from 'lucide-react';
import { SOCIAL_LINKS, LOCATION } from '../constants';

const Footer: React.FC = () => {
  const handleScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-500 py-12 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-slate-900 pb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-2xl font-bold font-outfit mb-6">MS <span className="font-light">LABORATORIO DENTAL</span></h3>
            <p className="max-w-sm mb-8 leading-relaxed text-sm md:text-base">
              Laboratorio & Escuela especializado en prótesis de alta calidad profesional. Bajo la dirección del Técnico Dental César Jiménez.
            </p>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-blue-600 text-white p-3 rounded-xl transition-all">
                <Instagram size={20} />
              </a>
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-blue-800 text-white p-3 rounded-xl transition-all">
                <Facebook size={20} />
              </a>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-slate-900 hover:bg-green-600 text-white p-3 rounded-xl transition-all">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Explorar</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => handleScroll('#inicio')} className="hover:text-white transition-colors">Inicio</button></li>
              <li><button onClick={() => handleScroll('#nosotros')} className="hover:text-white transition-colors">Sobre Mí</button></li>
              <li><button onClick={() => handleScroll('#escuela')} className="hover:text-white transition-colors">Laboratorio Escuela</button></li>
              <li><button onClick={() => handleScroll('#trabajos')} className="hover:text-white transition-colors">Portafolio</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mr-3 text-blue-500 mt-1 flex-shrink-0" />
                <span>San Justo, La Matanza<br/>Buenos Aires</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-3 text-blue-500" />
                <span className="text-xs">{SOCIAL_LINKS.email}</span>
              </li>
              <li>
                <a href={`tel:${SOCIAL_LINKS.phone.replace(/[^0-9]/g, '')}`} className="flex items-center hover:text-white transition-colors group">
                  <Phone size={16} className="mr-3 text-blue-500 group-hover:scale-110 transition-transform" />
                  {SOCIAL_LINKS.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs">
          <p>© {new Date().getFullYear()} MS Laboratorio Dental. Dir. César Jiménez.</p>
          <div className="mt-6 md:mt-0 flex items-center space-x-4">
             <span className="text-slate-800 uppercase tracking-widest font-black hidden sm:inline">Calidad Profesional • San Justo</span>
             <button 
               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
               className="bg-slate-900 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
             >
               <ArrowUp size={16} />
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
