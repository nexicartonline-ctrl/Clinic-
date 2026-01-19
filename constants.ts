import { NavItem, Testimonial, CardItem, Doctor, Service } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'About', href: '#about' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    title: 'Painless and Professional',
    text: 'I was always nervous about dentists, but this clinic completely changed my perspective. The team is incredibly gentle and supportive.',
    author: 'Sarah Johnson',
    rating: 5,
  },
  {
    id: 't2',
    title: 'Advanced Modern Care',
    text: 'The equipment is state-of-the-art. My implant surgery was seamless and much faster than I anticipated.',
    author: 'Michael Chen',
    rating: 5,
  },
  {
    id: 't3',
    title: 'Great Experience!',
    text: 'From the front desk to the dental chair, everyone is professional. They explained everything clearly.',
    author: 'Emma Wilson',
    rating: 5,
  },
];

export const PHILOSOPHY_CARDS: CardItem[] = [
  {
    id: 'p1',
    title: 'Sterile Excellence',
    description: 'We maintain hospital-grade sterilization protocols in our state-of-the-art treatment suites.',
    image: 'https://i.ibb.co/yFYDDP7n/db9f5308a74a51de334e543f5ae702b8.jpg',
  },
  {
    id: 'p2',
    title: 'Patient Concierge',
    description: 'Our dedicated team ensures your journey is seamless, professional, and entirely focused on you.',
    image: 'https://i.ibb.co/rKm0D8rY/ca1199f824431f97e1085f94009bd1c0.jpg',
  },
  {
    id: 'p3',
    title: 'Advanced Precision',
    description: 'Leveraging the latest in global dental technology for predictable and lasting clinical results.',
    image: 'https://i.ibb.co/B5WhrSb9/a8d3bf073be0d446cbb63cc2fb06bad1.jpg',
  },
  {
    id: 'p4',
    title: 'Specialist Suites',
    description: 'Every procedure is performed in a specialized environment optimized for comfort and safety.',
    image: 'https://i.ibb.co/JFb18kjq/e2e0cdd795c7e5d7e17bcb7159b5e3fe.jpg',
  },
];

export const EXPERIENCE_CARDS: CardItem[] = [
  {
    id: 'e1',
    title: 'Experienced Dentists',
    description: 'Over 20 years of combined clinical excellence.',
    image: 'https://i.ibb.co/HfCcq1Dy/IMG-20260119-WA0082.jpg',
  },
  {
    id: 'e2',
    title: 'Pain-Free Treatments',
    description: 'Advanced sedation and local anesthesia protocols.',
    image: 'https://i.ibb.co/jPSPq70g/IMG-20260119-WA0080.jpg',
  },
  {
    id: 'e4',
    title: 'Personalized Care',
    description: 'Focused attention from consultation to post-op.',
    image: 'https://i.ibb.co/ZprdzPhn/d33ee683c7c7d9be1c2167882bc1aa4b.jpg',
  },
  {
    id: 'e5',
    title: 'Consistent Results',
    description: 'Thousands of successful cases and happy smiles.',
    image: 'https://i.ibb.co/bMBKdm8f/cb3760f63198022f1430cfdc9c28ea44.jpg',
  },
];

export const ABOUT_CARDS: CardItem[] = [
  {
    id: 'a1',
    title: 'Who We Are',
    description: 'A dedicated team of specialists committed to raising the standard of oral healthcare.',
    image: 'https://i.ibb.co/PZPs2TyZ/b69dd38b7a3a37faa08b191e7567ece3.jpg',
  },
  {
    id: 'a2',
    title: 'Our Mission',
    description: 'To provide accessible, high-quality dentistry through innovation and empathy.',
    image: 'https://i.ibb.co/Nn71v13t/4fb1909778c2bec5afe178f81638f128.jpg',
  },
  {
    id: 'a3',
    title: 'Our Vision',
    description: 'Leading the way in digital dentistry and patient-centric clinic environments.',
    image: 'https://i.ibb.co/ch5ZM0dZ/cf4e95bd61cc0f577f85e03f781ba439.jpg',
  },
];

export const SERVICES: Service[] = [
  {
    id: 's2',
    name: 'Teeth Cleaning',
    description: 'Professional scaling and polishing for a healthy smile.',
    image: 'https://i.ibb.co/yFWNDm1Z/3d389ca732739514d5942a60fecd77fc.jpg',
  },
  {
    id: 's3',
    name: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacement solutions.',
    image: 'https://i.ibb.co/NnJnVRR4/35784c319c85196acf9d90c31b8276f1.jpg',
  },
  {
    id: 's4',
    name: 'Root Canal Treatment',
    description: 'Specialist care to save your natural teeth with precision.',
    image: 'https://i.ibb.co/tPbFcbVq/c9e2fc3bf80e1f2ab6f360275df69a4e.jpg',
  },
  {
    id: 's5',
    name: 'Braces & Aligners',
    description: 'Straighten your smile with modern orthodontic options.',
    image: 'https://i.ibb.co/TxMjRZqy/82c0b72ab5b2f8b017b99232c62fcbb1.jpg',
  },
];

export const DOCTORS: Doctor[] = [
  {
    id: 'd1',
    name: 'Dr. Marcus Thorne',
    qualification: 'DDS, MSD (Orthodontics)',
    specialization: 'Cosmetic Dentistry & Orthodontics',
    experience: 15,
    image: 'https://i.ibb.co/Vczm40cs/7f311480507130da30b3b1ca4caad759.jpg',
  },
  {
    id: 'd2',
    name: 'Dr. Elena Vance',
    qualification: 'BDS, MDS (Endodontics)',
    specialization: 'Root Canal Specialist',
    experience: 12,
    image: 'https://i.ibb.co/8g6cNtqk/43f8f623f0469991b21f9ca0ec8697e0.jpg',
  },
  {
    id: 'd3',
    name: 'Dr. Sebastian Cole',
    qualification: 'DDS, Implantology Cert.',
    specialization: 'Dental Implants & Surgery',
    experience: 18,
    image: 'https://i.ibb.co/MxbxgSjz/b73e85fd906a6576b1ed523c4bdb6be5.jpg',
  },
];