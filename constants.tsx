
import { Service, SocialLinks, LocationInfo, Project, Review } from './types';

export const SOCIAL_LINKS: SocialLinks = {
  instagram: "https://www.instagram.com/dentalmslab",
  whatsapp: "https://wa.me/5491165729989",
  phone: "116572-9989"
};

export const LOCATION: LocationInfo = {
  address: "San Justo",
  city: "Buenos Aires, Argentina",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52486.28014819717!2d-58.59103848419741!3d-34.68533177893155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc63297a7e375%3A0x6a0562e15264b38d!2sSan%20Justo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
};

export const SERVICES: Service[] = [
  {
    id: 'removibles',
    title: 'Removibles & Acrílicos',
    description: 'Prótesis de alta durabilidad con ajustes precisos para el confort del paciente.',
    image: 'https://images.unsplash.com/photo-1593054315229-873b889b9d33?auto=format&fit=crop&q=80&w=800',
    features: ['Acrílicos termocurados', 'Estética natural', 'Ajuste perfecto']
  },
  {
    id: 'flexibles',
    title: 'Prótesis Flexibles',
    description: 'Materiales plásticos de última generación que ofrecen flexibilidad y una estética inigualable.',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800',
    features: ['Libre de metal', 'Hipoalergénico', 'Alta resistencia']
  },
  {
    id: 'cromo',
    title: 'Cromo Cobalto',
    description: 'Estructuras metálicas de precisión para casos complejos que requieren soporte rígido.',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800',
    features: ['Precisión micrométrica', 'Baja conductividad', 'Ligereza']
  },
  {
    id: 'provisorias',
    title: 'Coronas Provisorias',
    description: 'Soluciones temporales estéticas y funcionales durante el proceso de tratamiento.',
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800',
    features: ['Rápida entrega', 'Estética inmediata', 'Protección pulpar']
  },
  {
    id: 'bruxismo',
    title: 'Placas de Bruxismo',
    description: 'Protección dental personalizada para pacientes con parafunción mandibular.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    features: ['Rígidas o Blandas', 'Desprogramación muscular', 'Alivio articular']
  },
  {
    id: '3d-cromoflex',
    title: '3D Cromoflex',
    description: 'Tecnología de impresión 3D para prótesis con máxima precisión y personalización.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800',
    features: ['Flujo digital', 'Innovación 3D', 'Resultados consistentes']
  }
];

export const PROJECTS: Project[] = [
  { id: 'p1', title: 'Rehabilitación Superior', category: 'Flexibles', image: 'https://picsum.photos/seed/dent1/600/600' },
  { id: 'p2', title: 'Cromo Cobalto Parcial', category: 'Metálicas', image: 'https://picsum.photos/seed/dent2/600/600' },
  { id: 'p3', title: 'Placa de Descarga 4mm', category: 'Bruxismo', image: 'https://picsum.photos/seed/dent3/600/600' },
  { id: 'p4', title: 'Puente Provisorio Anterior', category: 'Coronas', image: 'https://picsum.photos/seed/dent4/600/600' },
  { id: 'p5', title: 'Prótesis Completa Sup.', category: 'Acrílicos', image: 'https://picsum.photos/seed/dent5/600/600' },
  { id: 'p6', title: 'Diseño 3D Digital', category: 'Cromoflex', image: 'https://picsum.photos/seed/dent6/600/600' },
];

export const REVIEWS: Review[] = [
  { id: 'r1', doctorName: 'Dra. Laura Martínez', text: 'La precisión de los ajustes en las flexibles es impecable. Mis pacientes están encantados con el confort.', rating: 5 },
  { id: 'r2', doctorName: 'Dr. Ricardo Gómez', text: 'Excelente tiempo de entrega y terminación en cromo cobalto. Un socio estratégico para mi consultorio.', rating: 5 },
  { id: 'r3', doctorName: 'Dra. Sofía Rossi', text: 'Las placas de bruxismo tienen un pulido y una adaptación superior a lo que venía trabajando.', rating: 5 },
];
