import type { APIRoute } from 'astro';
import { apiKey, apiUrl } from './config/config';
import { isSameOrigin, json, setSessionCookie } from '../../lib/server/session';

export const prerender = false;
export const runtime = 'nodejs';

export const POST: APIRoute = async ({ request, cookies }) => {
  if (!isSameOrigin(request)) return json({ message: 'Origen no permitido' }, 403);

  try {
    const body = await request.json();
    const response = await fetch(`${apiUrl}/api/v2/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify({ login: body?.login, password: body?.password }),
    });

    const result = await response.json();
    if (!response.ok || !result.access_token) {
      return json({ message: result.message || 'Usuario o contraseña incorrectos' }, response.status || 401);
    }

    const expiresIn = Number(result.expires_in || 3600);
    setSessionCookie(cookies, result.access_token, expiresIn);

    // El token NO se devuelve al navegador: queda solo en la cookie httpOnly
    return json({
      user: result.user,
      expiresAt: Date.now() + expiresIn * 1000,
    });
  } catch (error) {
    console.error(error);
    return json({ message: 'No se pudo conectar con la API' }, 500);
  }
};
