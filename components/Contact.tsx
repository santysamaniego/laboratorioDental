
import React from 'react';
import { MapPin, Phone, Instagram, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS, LOCATION } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-8 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-900 rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-1/2 p-6 md:p-12 lg:p-16 text-white flex flex-col justify-center">
            <h2 className="text-2xl md:text-4xl font-bold font-outfit mb-4 md:mb-6">Comencemos a trabajar juntos</h2>
            <p className="text-blue-200 mb-6 md:mb-10 text-sm md:text-lg leading-relaxed">
              Atención exclusiva para profesionales odontólogos. Solicite su lista de aranceles actualizada.
            </p>

            <div className="space-y-4 md:space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-800/50 p-2 md:p-3 rounded-lg md:rounded-xl border border-blue-700">
                  <MapPin className="text-blue-400" size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-xl">Ubicación</h4>
                  <p className="text-blue-200 text-xs md:text-base">{LOCATION.address}, {LOCATION.city}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-800/50 p-2 md:p-3 rounded-lg md:rounded-xl border border-blue-700">
                  <Phone className="text-blue-400" size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-xl">Teléfono</h4>
                  <p className="text-blue-200 text-xs md:text-base">{SOCIAL_LINKS.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-800/50 p-2 md:p-3 rounded-lg md:rounded-xl border border-blue-700">
                  <Instagram className="text-blue-400" size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-xl">Instagram</h4>
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors text-xs md:text-base">@dentalmslab</a>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-12">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center bg-green-500 hover:bg-green-600 text-white py-3 md:py-4 rounded-xl font-bold transition-all text-sm md:text-base shadow-lg"
              >
                <MessageCircle size={20} className="mr-2" />
                WhatsApp Directo
              </a>
            </div>
          </div>

          {/* Map Side */}
          <div className="lg:w-1/2 min-h-[250px] md:min-h-[400px] relative bg-slate-200">
            <iframe
              title="Dental MS Lab Map"
              src={LOCATION.mapUrl}
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
