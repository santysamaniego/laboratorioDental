
import React from 'react';
import { PROJECTS, REVIEWS } from '../constants';
import { Star } from 'lucide-react';
import BackgroundShapes from './BackgroundShapes';

const ProjectsGallery: React.FC = () => {
  return (
    <section id="trabajos" className="py-16 md:py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
      <BackgroundShapes className="absolute top-20 right-10 w-48 h-48 text-slate-300" type="tooth" />
      <BackgroundShapes className="absolute bottom-20 left-10 w-40 h-40 text-slate-300" type="spatula" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 md:mb-16">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] md:text-xs">Portafolio</span>
            <h2 className="text-3xl md:text-5xl font-bold font-outfit mt-4 leading-tight">Nuestros Trabajos</h2>
            <p className="text-slate-500 mt-4 md:mt-6 text-sm md:text-lg">
              Casos reales entregados a clínicas dentales. Calidad que habla por sí misma.
            </p>
          </div>
        </div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-16 md:mb-24">
          {PROJECTS.map((project, idx) => (
            <div 
              key={project.id} 
              className={`group relative overflow-hidden rounded-2xl md:rounded-3xl cursor-pointer shadow-md transition-all ${idx % 3 === 0 ? 'row-span-2' : ''}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 md:p-6">
                <p className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-1">{project.category}</p>
                <h4 className="text-sm md:text-lg font-bold font-outfit text-white leading-tight">{project.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
            {REVIEWS.map((review) => (
              <div key={review.id} className="bg-white border border-slate-100 p-8 md:p-10 rounded-[2rem] shadow-sm hover:shadow-lg transition-all">
                <div className="flex space-x-1 text-yellow-500 mb-6">
                   {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-base md:text-lg text-slate-700 mb-8 italic leading-relaxed font-light">
                  "{review.text}"
                </p>
                <div className="flex items-center space-x-3 md:space-x-4">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white text-xs md:text-base">
                    {review.doctorName[3]}
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm md:text-base">{review.doctorName}</h5>
                    <p className="text-[10px] md:text-xs text-blue-600 uppercase tracking-widest font-bold">Odontólogo/a</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
