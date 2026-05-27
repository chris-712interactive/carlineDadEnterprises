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
    tagline: 'Personalized AI bedtime stories in minutes',
    description:
      'Turn a minute of details into a personalized storybook starring your child—with illustrations, optional read-aloud, and print-ready PDFs.',
    audience: 'Parents of young children',
    status: 'live',
    href: 'https://kiddo-tales.com',
    accent: '#e879f9',
    category: 'consumer',
    bullets: [
      'Personalized stories with kid-friendly illustrations',
      'Optional AI voice read-aloud and print-ready PDFs',
      'COPPA-minded parental consent flow',
    ],
  },
  {
    slug: 'my-upc-finder',
    name: 'My UPC Finder',
    tagline: 'The UPC Chrome extension for FBA resellers',
    description:
      'Find product UPCs on retailer sites, search Amazon and other sourcing channels, track copy history, and integrate Keepa—built for online arbitrage workflows.',
    audience: 'Amazon FBA resellers & online sellers',
    status: 'live',
    href: 'https://myupcfinder.com',
    accent: '#38b6ff',
    category: 'tools',
    bullets: [
      'Retailer-specific UPC targeting in Chrome',
      'One-click search on Amazon, eBay, and Brickseek',
      'Copy history and Keepa integration',
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
