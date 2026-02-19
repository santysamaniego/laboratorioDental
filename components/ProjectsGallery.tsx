
import React, { useState, useEffect } from 'react';
import { PROJECTS, REVIEWS } from '../constants';
import { Star, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '../types';

const ImageCarousel: React.FC<{ project: Project }> = ({ project }) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [project.images.length]);

  return (
    <div className="relative w-full aspect-square overflow-hidden">
      {project.images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`${project.title} ${idx}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            idx === currentIdx ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

const ProjectsGallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalImageIdx, setModalImageIdx] = useState(0);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalImageIdx(0);
  };

  const nextModalImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setModalImageIdx((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevModalImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setModalImageIdx((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
    }
  };

  return (
    <section id="trabajos" className="py-20 bg-blue-50/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Portafolio</span>
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mt-4 leading-tight">Nuestros Trabajos</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Una selección de piezas realizadas en nuestro laboratorio.
          </p>
        </div>

        {/* Gallery Grid - 2 per row on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 mb-24">
          {PROJECTS.map((project) => (
            <div 
              key={project.id} 
              onClick={() => openModal(project)}
              className="relative group overflow-hidden rounded-2xl md:rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-slate-200/50"
            >
              <ImageCarousel project={project} />
              
              <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 md:p-8">
                 <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-[8px] md:text-[10px] font-black text-blue-300 uppercase tracking-widest mb-1 md:mb-2">{project.category}</p>
                    <h4 className="text-xs md:text-xl font-bold font-outfit text-white leading-tight">{project.title}</h4>
                    <div className="mt-2 md:mt-4 flex items-center text-white/70 text-[8px] md:text-[10px] font-bold uppercase tracking-widest">
                       <Maximize2 size={12} className="mr-1 md:mr-2" /> Ampliar
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials - Card background slightly blue */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {REVIEWS.map((review, idx) => (
            <div 
              key={review.id} 
              className={`bg-blue-50/60 p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-blue-100 relative group hover:bg-white hover:shadow-xl transition-all duration-500 flex flex-col justify-between ${idx === 2 ? 'col-span-2 md:col-span-1' : ''}`}
            >
              <div>
                <div className="bg-blue-600 text-white p-2 md:p-3 rounded-xl shadow-lg w-fit mb-6">
                   <Star size={14} fill="currentColor" />
                </div>
                <p className="text-xs md:text-lg text-slate-700 mb-6 italic leading-relaxed font-light">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center space-x-3 md:space-x-4">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-200 text-blue-600 rounded-full flex items-center justify-center font-bold text-xs">
                  {review.doctorName[0]}
                </div>
                <div>
                  <h5 className="font-bold text-slate-900 text-[10px] md:text-base leading-none">{review.doctorName}</h5>
                  <p className="text-[8px] md:text-[10px] text-blue-600 uppercase tracking-widest font-bold mt-1">
                    {review.doctorName.includes('Dra.') ? 'Odontóloga' : 'Odontólogo'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm transition-all"
          onClick={() => setSelectedProject(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-all z-50"
            onClick={() => setSelectedProject(null)}
          >
            <X size={24} />
          </button>

          <button 
            className="absolute left-4 md:left-10 text-white bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all z-50"
            onClick={prevModalImage}
          >
            <ChevronLeft size={32} />
          </button>

          <button 
            className="absolute right-4 md:right-10 text-white bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all z-50"
            onClick={nextModalImage}
          >
            <ChevronRight size={32} />
          </button>
          
          <div className="max-w-4xl w-full flex flex-col items-center relative">
            <img 
              src={selectedProject.images[modalImageIdx]} 
              alt={selectedProject.title} 
              className="max-h-[75vh] w-auto rounded-2xl shadow-2xl animate-in zoom-in-95 duration-300 object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-6 text-center text-white">
              <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">{selectedProject.category}</span>
              <h3 className="text-2xl md:text-3xl font-bold font-outfit mt-2">{selectedProject.title}</h3>
              <p className="text-white/50 text-xs mt-2">Imagen {modalImageIdx + 1} de {selectedProject.images.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsGallery;
