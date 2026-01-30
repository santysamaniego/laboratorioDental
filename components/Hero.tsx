
import React from 'react';
import { ArrowRight, Instagram } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-[90vh] md:min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=2000"
          alt="Dental Lab Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/70 to-slate-900/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-32">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">San Justo, Buenos Aires</span>
          </div>
          
          <h1 className="text-4xl md:text-7xl font-bold font-outfit leading-tight mb-4 md:mb-6">
            Excelencia Técnica en <span className="text-blue-400">Prótesis Dentales</span>
          </h1>
          
          <p className="text-base md:text-xl text-slate-200 mb-8 md:mb-10 leading-relaxed font-light">
            Laboratorio especializado en soluciones protésicas para odontólogos. Tecnología 3D, precisión y estética para los casos más exigentes.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 mb-12">
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold transition-all flex items-center justify-center shadow-lg shadow-blue-900/40 text-sm md:text-base"
            >
              Solicitar Presupuesto
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <button
              onClick={() => scrollTo('#trabajos')}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold transition-all text-center text-sm md:text-base"
            >
              Ver Trabajos
            </button>
          </div>

          {/* Redesigned Instagram CTA */}
          <div className="relative inline-block group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <a 
              href={SOCIAL_LINKS.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative flex items-center space-x-4 bg-slate-900/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/10 transition-transform active:scale-95"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-pink-500/20">
                <Instagram size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Nuestro Trabajo en vivo</p>
                <p className="text-sm font-bold text-white">@dentalmslab</p>
              </div>
            </a>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl md:text-3xl font-bold font-outfit text-blue-300">100%</p>
              <p className="text-[10px] md:text-sm text-slate-400 uppercase tracking-widest font-medium">Precisión</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold font-outfit text-blue-300">+10</p>
              <p className="text-[10px] md:text-sm text-slate-400 uppercase tracking-widest font-medium">Trayectoria</p>
            </div>
            <div className="hidden md:block">
              <p className="text-2xl md:text-3xl font-bold font-outfit text-blue-300">3D</p>
              <p className="text-[10px] md:text-sm text-slate-400 uppercase tracking-widest font-medium">Tecnología</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
