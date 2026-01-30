
import React from 'react';
import { CheckCircle2, Award, Users, FlaskConical } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex items-center gap-16">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800"
                alt="Trabajo en Laboratorio"
                className="rounded-3xl shadow-xl z-10 relative object-cover aspect-[4/3] md:aspect-auto"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] md:text-sm bg-blue-50 px-3 py-1 rounded-full">Laboratorio Dental</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-outfit text-slate-900 mt-4 mb-4 md:mb-6 leading-tight">
              <span className="text-blue-600">Sobre Nosotros</span>: Expertos en el Arte de la Prótesis
            </h2>
            <p className="text-sm md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
              En Dental MS Lab entendemos que cada pieza es única. Como proveedores especializados para odontólogos, nuestro compromiso es la precisión técnica y la satisfacción del profesional que confía en nosotros.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6 mb-6 md:mb-8">
              {[
                { icon: <Award className="text-blue-600" size={16} />, title: 'Alta Especialización', desc: 'Expertos en cada área.' },
                { icon: <FlaskConical className="text-blue-600" size={16} />, title: 'Materiales Premium', desc: 'Insumos certificados.' },
                { icon: <Users className="text-blue-600" size={16} />, title: 'Socio Estratégico', desc: 'Apoyamos al odontólogo.' },
                { icon: <CheckCircle2 className="text-blue-600" size={16} />, title: 'Entregas Puntuales', desc: 'Respetamos sus tiempos.' }
              ].map((item, idx) => (
                <div key={idx} className="flex space-x-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="flex-shrink-0 bg-blue-50 p-2 rounded-lg h-fit">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs md:text-base">{item.title}</h4>
                    <p className="text-[10px] md:text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 md:p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-slate-700 text-xs md:text-base">
              "Ubicados en San Justo, brindamos soluciones integrales: desde removibles tradicionales hasta tecnología 3D de vanguardia."
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
