import type { APIRoute } from 'astro';
import { encodePath, json, proxyAuthenticated } from '../../../lib/server/session';

export const prerender = false;
export const runtime = 'nodejs';

// Solo estas rutas se reenvían a la API (/api/v2/account/...)
const ALLOWED: Record<string, RegExp[]> = {
  GET: [/^$/],
  POST: [/^characters\/[^/]{1,10}\/(reset|add-points|pk-clear|unstuck)$/],
};

const forward: APIRoute = async ({ params, request, cookies, clientAddress }) => {
  const path = params.path ?? '';
  const method = request.method.toUpperCase();

  if (!ALLOWED[method]?.some((pattern) => pattern.test(path))) {
    return json({ message: 'Ruta no permitida' }, 404);
  }

  return proxyAuthenticated({
    path: `/account${path ? `/${encodePath(path)}` : ''}`,
    method,
    request,
    cookies,
    clientAddress,
  });
};

export const GET = forward;
export const POST = forward;
