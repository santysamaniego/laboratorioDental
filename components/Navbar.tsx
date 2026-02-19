
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Escuela', href: '#escuela' },
    { name: 'Trabajos', href: '#trabajos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
              <img
                src="logo_sinlabden.png" 
                alt="Logo MS Laboratorio"
                className="w-full h-full rounded-full bg-white object-contain p-1 border border-slate-100 shadow-sm"
              />
            </div>
            <span className={`text-lg md:text-xl font-bold font-outfit transition-colors duration-300 ${isScrolled ? 'text-blue-700' : 'text-white'}`}>
              MS <span className="font-light text-[0.8em]">LABORATORIO DENTAL</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-bold transition-colors hover:text-blue-500 ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 ml-4">
               <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className={isScrolled ? 'text-slate-600' : 'text-white/80'}>
                <Instagram size={18} />
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-wider hover:bg-blue-700 transition-all"
              >
                Aranceles
              </a>
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-slate-800' : 'text-white'} p-2`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Font size reduced to text-base */}
      <div className={`md:hidden bg-white fixed top-0 left-0 w-full h-screen transition-transform duration-500 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 flex justify-between items-center border-b">
           <span className="font-bold text-blue-700 text-sm">MS LABORATORIO DENTAL</span>
           <button onClick={() => setIsOpen(false)} className="p-2 text-slate-800"><X size={24} /></button>
        </div>
        <div className="p-8 flex flex-col space-y-5 text-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-base font-bold text-slate-800 hover:text-blue-600 uppercase tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6 flex flex-col space-y-4">
             <a
              href={SOCIAL_LINKS.whatsapp}
              className="w-full bg-green-600 text-white py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider"
            >
              Consultar Aranceles
            </a>
            <div className="flex justify-center space-x-6 text-slate-400">
               <a href={SOCIAL_LINKS.instagram}><Instagram size={20} /></a>
               <a href={SOCIAL_LINKS.facebook}><Facebook size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
