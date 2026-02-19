
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Check, X } from 'lucide-react';
import { Service } from '../types';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="servicios" className="pt-20 pb-20 bg-blue-50/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] bg-blue-100/50 px-4 py-1.5 rounded-full">Especialidades</span>
          <h2 className="text-3xl md:text-4xl font-bold font-outfit text-slate-900 mt-4">Nuestros Servicios</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative aspect-[3/2] md:aspect-video rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-xl border border-slate-200/50">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-xs md:text-lg font-bold text-white font-outfit">{service.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <div className="bg-white w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-300">
            <button 
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 bg-slate-100 hover:bg-slate-200 p-2 rounded-full z-20"
            >
              <X size={20} />
            </button>
            <div className="p-8">
              <h3 className="text-2xl font-bold font-outfit text-slate-900 mb-4">{selectedService.title}</h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">{selectedService.description}</p>
              <div className="space-y-2 mb-8">
                {selectedService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center text-sm text-slate-700">
                    <Check size={14} className="text-green-500 mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
              <a
                href={`https://wa.me/5491165729989?text=Hola,%20quisiera%20consultar%20aranceles%20de%20${encodeURIComponent(selectedService.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-blue-600 text-white text-center py-4 rounded-xl font-bold shadow-lg"
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
