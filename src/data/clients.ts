export type ClientProject = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  location: string;
  href: string;
  accent: string;
};

export const CLIENTS: ClientProject[] = [
  {
    slug: 'life-prep-christian-academy',
    name: 'Life Prep Christian Academy',
    tagline: 'Hybrid Christian education in Fort Myers, FL',
    description:
      'A homeschool partnership program partnering with parents—on-campus core academics plus guided at-home days for K–12.',
    location: 'Fort Myers, FL',
    href: 'https://lifeprepchristianacademy.com',
    accent: '#1e40af',
  },
  {
    slug: 'crosspointe-academy',
    name: 'Crosspointe Academy',
    tagline: 'Christ-focused education in Fort Myers',
    description:
      'A community-focused academy partnering with parents to educate children in Christ\'s likeness—spiritually, academically, physically, and socially.',
    location: 'Fort Myers, FL',
    href: 'https://www.crosspointeacademyfortmyers.com',
    accent: '#7c3aed',
  },
];
