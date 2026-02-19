
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import School from './components/School';
import ProjectsGallery from './components/ProjectsGallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { SOCIAL_LINKS } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <School />
        <ProjectsGallery />
        <Contact />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
        aria-label="Consultas Aranceles"
      >
        <MessageCircle size={32} />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-4 py-2 rounded-lg font-bold text-sm shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block border border-slate-100">
          ¿En qué podemos ayudarte?
        </span>
      </a>
    </div>
  );
};

export default App;
