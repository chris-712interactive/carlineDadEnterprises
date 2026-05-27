export const SITE = {
  name: 'Carline Dad Enterprises',
  shortName: 'Carline Dad',
  domain: 'thecarlinedad.com',
  url: 'https://thecarlinedad.com',
  description:
    'Carline Dad Enterprises builds software products and teaches web development fundamentals—before the shortcuts.',
  tagline: 'Products, code, and teaching—under one roof.',
  email: 'hello@thecarlinedad.com',
  skoolUrl: 'https://www.skool.com/carline-dad-codes-1146',
  skoolName: 'Carline Dad Codes',
  address: {
    line1: '5830 E 2nd St',
    line2: 'STE 6300',
    city: 'Casper',
    region: 'WY',
    postalCode: '82609',
    country: 'US',
  },
} as const;

/** Multi-line address for display (e.g. contact page, footer). */
export const SITE_ADDRESS_LINES = [
  SITE.address.line1,
  SITE.address.line2,
  `${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}`,
] as const;

/** Schema.org PostalAddress for JSON-LD. */
export const SITE_POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
  addressLocality: SITE.address.city,
  addressRegion: SITE.address.region,
  postalCode: SITE.address.postalCode,
  addressCountry: SITE.address.country,
} as const;
