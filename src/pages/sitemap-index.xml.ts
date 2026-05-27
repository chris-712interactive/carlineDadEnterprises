import type { APIRoute } from 'astro';
import { SITE } from '@/config/site';

const pages = ['', '/products', '/teaching', '/about', '/contact', '/privacy', '/terms'];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split('T')[0];

  const urls = pages
    .map(
      (path) => `
  <url>
    <loc>${SITE.url}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`
    )
    .join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
