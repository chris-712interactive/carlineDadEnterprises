export type ProductStatus = 'live' | 'beta' | 'planned';

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  audience: string;
  status: ProductStatus;
  href: string | null;
  accent: string;
  category: 'saas' | 'consumer' | 'tools';
  bullets: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: 'clean-scheduler',
    name: 'Clean Scheduler',
    tagline: 'Run your cleaning business from one console',
    description:
      'Multi-tenant scheduling, quoting, billing, and customer portals built for residential and commercial cleaning companies.',
    audience: 'Cleaning business owners & office managers',
    status: 'live',
    href: 'https://cleanscheduler.com',
    accent: '#006d77',
    category: 'saas',
    bullets: [
      'Route-aware crew scheduling',
      'Quotes, invoicing, and month-end close',
      'Branded customer portal your clients actually use',
    ],
  },
  {
    slug: 'kiddotales',
    name: 'KiddoTales',
    tagline: 'Fresh bedtime stories for a new routine',
    description:
      'Helps parents mix up bedtime with engaging stories—so nights feel less repetitive and more fun for everyone.',
    audience: 'Parents of young children',
    status: 'beta',
    href: null,
    accent: '#e879f9',
    category: 'consumer',
    bullets: [
      'Story-first bedtime experiences',
      'Built for busy parents',
      'Coming to the web soon',
    ],
  },
  {
    slug: 'my-upc-finder',
    name: 'My UPC Finder',
    tagline: 'Research Amazon products faster',
    description:
      'Tools for Amazon resellers to look up and evaluate products using UPC-focused research—without the spreadsheet chaos.',
    audience: 'Amazon resellers & online sellers',
    status: 'planned',
    href: null,
    accent: '#38b6ff',
    category: 'tools',
    bullets: [
      'UPC-centric product lookup',
      'Built for reseller workflows',
      'In active development',
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export const STATUS_LABELS: Record<ProductStatus, string> = {
  live: 'Live',
  beta: 'In development',
  planned: 'Coming soon',
};
