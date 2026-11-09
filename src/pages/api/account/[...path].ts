import type { APIRoute } from 'astro';
import { apiKey, apiUrl } from '../config/config';

export const prerender = false;
export const runtime = 'nodejs';

// Solo estas rutas se reenvían a la API (/api/v2/account/...)
const ALLOWED: Record<string, RegExp[]> = {
  GET: [/^$/],
  POST: [
    /^characters\/[^/]{1,10}\/(reset|add-points|pk-clear|unstuck)$/,
  ],
};

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
  });

const forward: APIRoute = async ({ params, request }) => {
  const path = params.path ?? '';
  const method = request.method.toUpperCase();

  if (!ALLOWED[method]?.some((pattern) => pattern.test(path))) {
    return json({ message: 'Ruta no permitida' }, 404);
  }

  const authorization = request.headers.get('authorization');
  if (!authorization?.startsWith('Bearer ')) {
    return json({ message: 'Sesión requerida' }, 401);
  }

  try {
    const safePath = path.split('/').map(encodeURIComponent).join('/');
    const target = `${apiUrl}/api/v2/account${safePath ? `/${safePath}` : ''}`;
    const body = method === 'POST' ? await request.text() : undefined;

    const response = await fetch(target, {
      method,
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        Authorization: authorization,
      },
      body: body || undefined,
    });

    const text = await response.text();
    return new Response(text || '{}', {
      status: response.status,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    });
  } catch (error) {
    console.error(error);
    return json({ message: 'No se pudo conectar con la API' }, 502);
  }
};

export const GET = forward;
export const POST = forward;
