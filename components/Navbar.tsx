
import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
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
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* LOGO: Aquí puedes cambiar el tamaño en w-10 h-10 (móvil) y md:w-12 md:h-12 (desktop) */}
            <div className="relative w-10 h-10 md:w-15 md:h-15 flex-shrink-0">
              <img
                src="/logo_ms.png"
                alt="Logo Dental MS"
                className="w-full h-full rounded-full bg-white object-contain p-1 border border-slate-100 shadow-sm"
              />
            </div>
            <span className={`text-lg md:text-xl font-bold font-outfit transition-colors duration-300 ${isScrolled ? 'text-blue-700' : 'text-white'}`}>
              DENTAL MS <span className="font-light">LAB</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-[16px] font-bold transition-colors hover:text-blue-500 ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 ml-4">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className={isScrolled ? 'text-slate-600' : 'text-white/80'}>
                <Instagram size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${isScrolled ? 'text-slate-800' : 'text-white'} p-2 transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white/98 backdrop-blur-lg absolute top-full left-0 w-full overflow-hidden transition-all duration-500 ease-in-out border-b border-slate-100 ${isOpen ? 'max-h-[450px] opacity-100 shadow-xl' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 flex flex-col space-y-4">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className={`text-lg font-bold text-slate-800 hover:text-blue-600 py-2 border-b border-slate-50 last:border-0 ${isOpen ? 'animate-menu-item' : ''}`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
             <a
              href={SOCIAL_LINKS.whatsapp}
              className="block w-full bg-green-600 text-white text-center py-3.5 rounded-xl font-black text-sm shadow-md"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
