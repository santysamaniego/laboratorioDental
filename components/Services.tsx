
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Check, X } from 'lucide-react';
import BackgroundShapes from './BackgroundShapes';
import { Service } from '../types';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="servicios" className="pt-20 pb-24 bg-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      
      <BackgroundShapes className="absolute top-1/2 left-1/4 w-24 h-24 text-slate-400" type="spatula" />
      <BackgroundShapes className="absolute bottom-20 right-1/4 w-32 h-32 text-slate-400" type="mirror" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] md:text-xs bg-blue-50 px-4 py-1.5 rounded-full">Catálogo de Prótesis</span>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit text-slate-900 mt-6 leading-tight">Soluciones que ofrecemos</h2>
          <p className="max-w-2xl mx-auto text-slate-500 mt-4 md:mt-6 text-sm md:text-lg">
            Utilizamos los mejores materiales del mercado para garantizar un ajuste perfecto en cada prescripción odontológica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-slate-200 transition-all duration-500 group-hover:-translate-y-2">
                {/* Image with extreme zoom on hover */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                />
                
                {/* Overlay with info */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-outfit">{service.title}</h3>
                  <div className="h-0.5 w-12 bg-blue-500 rounded-full mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
                </div>
              </div>
              
              {/* Floating label that pops out */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white px-5 py-2.5 rounded-2xl shadow-xl border border-slate-50 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-active:scale-95">
                <span className="text-[10px] md:text-xs font-black uppercase tracking-widest whitespace-nowrap">Ver Arancel y Detalle</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Service Details */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-slate-900/60 backdrop-blur-md transition-opacity">
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 text-slate-800 p-2 rounded-full transition-colors z-20"
            >
              <X size={20} />
            </button>
            
            <div className="relative h-48 md:h-64 overflow-hidden">
              <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
            </div>
            
            <div className="p-8">
              <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] bg-blue-50 px-3 py-1 rounded-full">Especialidad</span>
              <h3 className="text-2xl md:text-3xl font-bold font-outfit text-slate-900 mt-3 mb-4">{selectedService.title}</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                {selectedService.description}
              </p>
              
              <div className="space-y-3 mb-8">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Características Técnicas:</p>
                <div className="grid grid-cols-1 gap-2">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs md:text-sm text-slate-700 font-medium">
                      <div className="bg-green-100 text-green-600 p-1 rounded-full mr-3 flex-shrink-0">
                        <Check size={12} />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={`https://wa.me/5491165729989?text=Hola,%20quisiera%20consultar%20por%20aranceles%20de%20${encodeURIComponent(selectedService.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-4 rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/20 text-sm"
              >
                Solicitar Arancel
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
