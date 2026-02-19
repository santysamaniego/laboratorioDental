
import React from 'react';
import { MapPin, Phone, Instagram, Mail, MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS, LOCATION } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-12 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-slate-800">
          {/* Info Side */}
          <div className="lg:w-1/2 p-8 md:p-16 text-white flex flex-col justify-center">
            <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6">Contacto</h2>
            <p className="text-slate-400 mb-10 text-base md:text-lg leading-relaxed">
              Atención profesional personalizada para odontólogos. Solicite su lista de aranceles actualizada.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-5">
                <div className="bg-blue-600/20 p-3 rounded-xl border border-blue-500/20 text-blue-400">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Ubicación</h4>
                  <p className="text-slate-400 text-sm md:text-base">{LOCATION.address}, {LOCATION.city}</p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="bg-blue-600/20 p-3 rounded-xl border border-blue-500/20 text-blue-400">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">E-mail</h4>
                  <p className="text-slate-400 text-sm md:text-base">{SOCIAL_LINKS.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="bg-blue-600/20 p-3 rounded-xl border border-blue-500/20 text-blue-400">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Teléfono</h4>
                  <p className="text-slate-400 text-sm md:text-base">{SOCIAL_LINKS.phone}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold transition-all shadow-lg"
              >
                <MessageCircle size={20} className="mr-2" />
                WhatsApp Directo
              </a>
            </div>
          </div>

          {/* Map Side */}
          <div className="lg:w-1/2 min-h-[350px] md:min-h-[500px] relative">
            <iframe
              title="Zona MS Laboratorio"
              src={LOCATION.mapUrl}
              className="absolute inset-0 w-full h-full border-0 grayscale invert contrast-[85%] opacity-80"
              loading="lazy"
            ></iframe>
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-slate-900 text-xs font-bold shadow-xl">
               📍 Zona San Justo / Casanova
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
