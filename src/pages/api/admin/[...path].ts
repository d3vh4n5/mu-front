import type { APIRoute } from 'astro';
import { encodePath, json, proxyAuthenticated } from '../../../lib/server/session';

export const prerender = false;
export const runtime = 'nodejs';

// Solo estas rutas se reenvían a la API (/api/v2/admin/...).
// La autorización real (rol admin verificado en la base) la hace la API.
const ALLOWED: Record<string, RegExp[]> = {
  GET: [/^search$/, /^online$/, /^audit$/, /^accounts\/[^/]{1,10}$/],
  POST: [
    /^accounts\/[^/]{1,10}\/(ban|unban|vip)$/,
    /^characters\/[^/]{1,10}\/(ban|unban|gm|ungm)$/,
  ],
};

const forward: APIRoute = async ({ params, request, cookies, clientAddress }) => {
  const path = params.path ?? '';
  const method = request.method.toUpperCase();

  if (!ALLOWED[method]?.some((pattern) => pattern.test(path))) {
    return json({ message: 'Ruta no permitida' }, 404);
  }

  const search = method === 'GET' ? new URL(request.url).search : '';

  return proxyAuthenticated({
    path: `/admin/${encodePath(path)}${search}`,
    method,
    request,
    cookies,
    clientAddress,
  });
};

export const GET = forward;
export const POST = forward;
