import type { APIRoute } from 'astro';
import { config } from '../constants/config';

export const prerender = true;

export const GET: APIRoute = () => {
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /api/',
    'Disallow: /account',
    'Disallow: /admin',
    'Disallow: /forgot-password',
    'Disallow: /reset-password',
    '',
    `Sitemap: ${config.site.url}/sitemap.xml`,
    '',
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
