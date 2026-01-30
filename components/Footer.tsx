
import React from 'react';
import { Instagram, MapPin, Phone, ArrowUp } from 'lucide-react';
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
    <footer className="bg-slate-900 text-slate-400 py-10 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-10 md:mb-12 border-b border-slate-800 pb-10 md:pb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-lg md:text-2xl font-bold font-outfit mb-4 md:mb-6">DENTAL MS <span className="font-light">LAB</span></h3>
            <p className="max-w-sm mb-6 md:mb-8 leading-relaxed text-xs md:text-base">
              Laboratorio dental especializado en prótesis de alta complejidad. Proveedores de confianza para odontólogos en San Justo y alrededores.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-blue-600 text-white p-2.5 rounded-lg transition-all hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="bg-slate-800 hover:bg-green-600 text-white p-2.5 rounded-lg transition-all hover:-translate-y-1">
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6 uppercase tracking-widest text-[9px] md:text-xs">Explorar</h4>
            <ul className="space-y-3 md:space-y-4 text-[11px] md:text-sm">
              <li><button onClick={() => handleScroll('#inicio')} className="hover:text-white transition-colors">Inicio</button></li>
              <li><button onClick={() => handleScroll('#nosotros')} className="hover:text-white transition-colors">Sobre Nosotros</button></li>
              <li><button onClick={() => handleScroll('#servicios')} className="hover:text-white transition-colors">Servicios</button></li>
              <li><button onClick={() => handleScroll('#trabajos')} className="hover:text-white transition-colors">Portafolio</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 md:mb-6 uppercase tracking-widest text-[9px] md:text-xs">Contacto y Ubicación</h4>
            <ul className="space-y-3 md:space-y-4 text-[11px] md:text-sm">
              <li className="flex items-start">
                <MapPin size={14} className="mr-3 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>{LOCATION.address}, BA<br/>Argentina</span>
              </li>
              <li>
                <a href={`tel:${SOCIAL_LINKS.phone.replace(/[^0-9]/g, '')}`} className="flex items-center hover:text-white transition-colors group">
                  <Phone size={14} className="mr-3 text-blue-500 group-hover:scale-110 transition-transform" />
                  {SOCIAL_LINKS.phone}
                </a>
              </li>
              <li>Lunes a Viernes: 09:00 - 18:00</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-[9px] md:text-sm">
          <p>© {new Date().getFullYear()} Dental MS Lab. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
             <span className="text-slate-600 uppercase tracking-widest font-bold hidden sm:inline">Laboratorio Dental Profesional</span>
             <button 
               onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
               className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
               aria-label="Volver arriba"
             >
               <ArrowUp size={14} />
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
