
export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  title: string;
  text: string;
  author: string;
  rating: number;
}

export interface CardItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface Doctor {
  id: string;
  name: string;
  qualification: string;
  specialization: string;
  experience: number;
  image: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
