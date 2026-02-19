
import React from 'react';
import { GraduationCap, BookOpen, User, Microscope, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const School: React.FC = () => {
  return (
    <section id="escuela" className="py-20 bg-blue-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <Microscope size={400} className="absolute -top-20 -left-20 rotate-12" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex gap-16 items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <span className="bg-blue-600/30 text-blue-200 font-bold uppercase tracking-widest text-xs px-4 py-1.5 rounded-full border border-blue-400/20">Laboratorio & Escuela</span>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit mt-6 mb-8 leading-tight">Formación Profesional en <span className="text-blue-400">Prótesis Dental</span></h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-2xl"><GraduationCap size={24} /></div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Técnico Mecánico Dental</h4>
                  <p className="text-blue-100/70 text-sm md:text-base">Carrera integral con 1 año de duración. Práctica intensiva desde el primer día.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-2xl"><BookOpen size={24} /></div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Especializaciones Prácticas</h4>
                  <p className="text-blue-100/70 text-sm md:text-base">Módulos avanzados de 4 meses para profesionales que buscan perfeccionar su técnica.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-2xl"><User size={24} /></div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Docente: César Jiménez</h4>
                  <p className="text-blue-100/70 text-sm md:text-base">Transmisión de conocimientos basados en 20 años de experiencia real en el laboratorio.</p>
                </div>
              </div>
            </div>

            {/* Hidden on mobile, shown on desktop */}
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-xl"
            >
              <MessageCircle className="mr-2" size={20} />
              Anotarse o Consultar
            </a>
          </div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 mb-8 lg:mb-0">
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center flex flex-col items-center">
                <span className="text-4xl mb-4">🦷</span>
                <p className="text-xs uppercase tracking-widest font-bold text-blue-300 mb-2">Enfoque</p>
                <h5 className="font-bold">Laboratorio Escuela</h5>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center flex flex-col items-center mt-8">
                <span className="text-4xl mb-4">🔬</span>
                <p className="text-xs uppercase tracking-widest font-bold text-blue-300 mb-2">Equipamiento</p>
                <h5 className="font-bold">Tecnología Profesional</h5>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center flex flex-col items-center">
                <span className="text-4xl mb-4">🎓</span>
                <p className="text-xs uppercase tracking-widest font-bold text-blue-300 mb-2">Duración</p>
                <h5 className="font-bold">1 Año Lectivo</h5>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center flex flex-col items-center mt-8">
                <span className="text-4xl mb-4">📍</span>
                <p className="text-xs uppercase tracking-widest font-bold text-blue-300 mb-2">Sede</p>
                <h5 className="font-bold">San Justo, BA</h5>
              </div>
            </div>

            {/* Shown on mobile, hidden on desktop */}
            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:hidden flex items-center justify-center bg-white text-blue-900 px-8 py-5 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-xl w-full"
            >
              <MessageCircle className="mr-2" size={24} />
              Anotarse o Consultar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default School;
