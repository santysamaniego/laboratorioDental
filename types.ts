
export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  images: string[];
}

export interface Review {
  id: string;
  doctorName: string;
  text: string;
  rating: number;
}

export interface SocialLinks {
  instagram: string;
  whatsapp: string;
  facebook: string;
  email: string;
  phone: string;
}

export interface LocationInfo {
  address: string;
  city: string;
  mapUrl: string;
}
