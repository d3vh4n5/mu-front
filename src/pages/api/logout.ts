import type { APIRoute } from 'astro';
import { clearSessionCookie, isSameOrigin, json } from '../../lib/server/session';

export const prerender = false;
export const runtime = 'nodejs';

export const POST: APIRoute = async ({ request, cookies }) => {
  if (!isSameOrigin(request)) return json({ message: 'Origen no permitido' }, 403);
  clearSessionCookie(cookies);
  return json({ ok: true });
};
