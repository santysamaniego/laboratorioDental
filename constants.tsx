
import { Service, SocialLinks, LocationInfo, Project, Review } from './types';

export const SOCIAL_LINKS: SocialLinks = {
  instagram: "https://www.instagram.com/ms.laboratoriodental",
  facebook: "https://www.facebook.com/cesar.jimenez.590710",
  email: "ms.laboratoriointegral@gmail.com",
  whatsapp: "https://wa.me/5491165729989",
  phone: "11 6572-9989"
};

export const LOCATION: LocationInfo = {
  address: "San Justo, La Matanza",
  city: "Buenos Aires",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13123.630560205835!2d-58.57508493022461!3d-34.68533177893155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
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
    id: 'coronas-acrilico',
    title: 'Coronas de Acrílico',
    description: 'Soluciones estéticas y funcionales durante el proceso de tratamiento.',
    image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=800',
    features: ['Rápida entrega', 'Estética inmediata', 'Protección pulpar']
  },
  {
    id: 'bruxismo',
    title: 'Placas de Bruxismo',
    description: 'Protección dental personalizada para pacientes con parafunción mandibular.',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800',
    features: ['Rígidas o Blandas', 'Desprogramación muscular', 'Alivio articular']
  }
];

export const PROJECTS: Project[] = [
  { id: 'p1', title: 'Rehabilitación Superior', category: 'Flexibles', images: ['https://picsum.photos/seed/dent1/800/800', 'https://picsum.photos/seed/dent1b/800/800'] },
  { id: 'p2', title: 'Cromo Cobalto Parcial', category: 'Metálicas', images: ['https://picsum.photos/seed/dent2/800/800', 'https://picsum.photos/seed/dent2b/800/800'] },
  { id: 'p3', title: 'Placa de Descarga 4mm', category: 'Bruxismo', images: ['https://picsum.photos/seed/dent3/800/800', 'https://picsum.photos/seed/dent3b/800/800'] },
  { id: 'p4', title: 'Puente Acrílico Anterior', category: 'Coronas', images: ['https://picsum.photos/seed/dent4/800/800', 'https://picsum.photos/seed/dent4b/800/800'] },
  { id: 'p5', title: 'Prótesis Completa Sup.', category: 'Acrílicos', images: ['https://picsum.photos/seed/dent5/800/800', 'https://picsum.photos/seed/dent5b/800/800'] }
];

export const REVIEWS: Review[] = [
  { id: 'r1', doctorName: 'Dra. Laura Martínez', text: 'La precisión de los ajustes en las flexibles es impecable. Mis pacientes están encantados con el confort.', rating: 5 },
  { id: 'r2', doctorName: 'Dr. Ricardo Gómez', text: 'Excelente tiempo de entrega y terminación en cromo cobalto. Un socio estratégico para mi consultorio.', rating: 5 },
  { id: 'r3', doctorName: 'Dra. Sofía Rossi', text: 'Las placas de bruxismo tienen un pulido y una adaptación superior a lo que venía trabajando.', rating: 5 },
];
