import type { APIRoute } from 'astro';
import { apiKey, apiUrl } from './config/config';
import { clearSessionCookie, getSessionToken, json } from '../../lib/server/session';

export const prerender = false;
export const runtime = 'nodejs';

/** Devuelve el usuario de la sesión actual (validando el token contra la API). */
export const GET: APIRoute = async ({ cookies }) => {
  const token = getSessionToken(cookies);
  if (!token) return json({ authenticated: false });

  try {
    const response = await fetch(`${apiUrl}/api/v2/auth/me`, {
      cache: 'no-store',
      headers: { 'x-api-key': apiKey, Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      if (response.status === 401) clearSessionCookie(cookies);
      return json({ authenticated: false });
    }

    const payload = await response.json();
    return json({
      authenticated: true,
      user: {
        username: payload.username,
        name: payload.name,
        email: payload.email,
        accountLevel: payload.accountLevel ?? 0,
        roles: Array.isArray(payload.roles) ? payload.roles : ['user'],
      },
      expiresAt: typeof payload.exp === 'number' ? payload.exp * 1000 : null,
    });
  } catch (error) {
    console.error(error);
    return json({ authenticated: false, error: 'No se pudo validar la sesión' }, 502);
  }
};
