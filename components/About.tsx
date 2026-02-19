
import React from 'react';
import { CheckCircle2, Award, Users, FlaskConical } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-12 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:flex items-center gap-16">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-4 bg-blue-100 rounded-3xl -z-10 translate-x-4 translate-y-4"></div>
              <img
                src="../public/assets/cesarpuerta.png"
                alt="César Jiménez - Técnico Dental"
                className="rounded-3xl shadow-xl z-10 relative object-cover aspect-square md:aspect-auto"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] md:text-sm bg-blue-50 px-3 py-1 rounded-full">Protesista Dental</span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-outfit text-slate-900 mt-4 mb-4 md:mb-6 leading-tight">
              Sobre <span className="text-blue-600">Mí</span>
            </h2>
            <p className="text-sm md:text-lg text-slate-600 mb-6 md:mb-8 leading-relaxed">
              Soy César Jiménez, Técnico Dental con más de 20 años de experiencia. En MS Laboratorio, entiendo que cada pieza es única. Mi compromiso es la precisión técnica absoluta y la estética natural, actuando como el socio estratégico que todo odontólogo necesita para elevar el nivel de sus tratamientos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
              {[
                { icon: <Award className="text-blue-600" size={16} />, title: 'Experto en cada área', desc: 'Dominio total de prótesis.' },
                { icon: <FlaskConical className="text-blue-600" size={16} />, title: 'Materiales Premium', desc: 'Insumos certificados.' },
                { icon: <Users className="text-blue-600" size={16} />, title: 'Socio Estratégico', desc: 'Atención personalizada.' },
                { icon: <CheckCircle2 className="text-blue-600" size={16} />, title: 'Entregas Puntuales', desc: 'Respeto por sus tiempos.' }
              ].map((item, idx) => (
                <div key={idx} className="flex space-x-3 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
