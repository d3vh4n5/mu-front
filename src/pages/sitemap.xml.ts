import type { APIRoute } from 'astro';
import { config } from '../constants/config';
import { fetchNewsPage } from '../lib/server/news';

export const prerender = false;

/** Páginas públicas indexables. Las privadas (cuenta, admin, contraseñas) no van. */
const STATIC_PAGES: { path: string; changefreq: string; priority: string }[] = [
  { path: '/', changefreq: 'daily', priority: '1.0' },
  { path: '/register', changefreq: 'monthly', priority: '0.9' },
  { path: '/downloads', changefreq: 'monthly', priority: '0.9' },
  { path: '/news', changefreq: 'daily', priority: '0.8' },
  { path: '/help', changefreq: 'monthly', priority: '0.7' },
  { path: '/help/skills', changefreq: 'yearly', priority: '0.4' },
  { path: '/vip', changefreq: 'monthly', priority: '0.6' },
  { path: '/terms', changefreq: 'yearly', priority: '0.3' },
];

const MAX_NEWS_PAGES = 10; // 50 por página (máximo de la API)

const xmlEscape = (value: string) =>
  value.replace(/[<>&'"]/g, (ch) => `&#${ch.charCodeAt(0)};`);

export const GET: APIRoute = async () => {
  const base = config.site.url;
  const urls = STATIC_PAGES.map(
    (p) => `  <url><loc>${base}${p.path}</loc><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`,
  );

  // Noticias publicadas: si la API no responde, el sitemap sale igual con las páginas fijas
  for (let page = 1; page <= MAX_NEWS_PAGES; page++) {
    const data = await fetchNewsPage(page, 50);
    if (!data || !Array.isArray(data.items)) break;
    for (const news of data.items) {
      const lastmod = news.publishedAt ? `<lastmod>${new Date(news.publishedAt).toISOString()}</lastmod>` : '';
      urls.push(`  <url><loc>${xmlEscape(`${base}/news/${news.id}`)}</loc>${lastmod}<priority>0.6</priority></url>`);
    }
    if (page >= data.pages) break;
  }

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
