import type { AstroCookies } from 'astro';
import { apiKey, apiUrl } from '../../pages/api/config/config';

/**
 * Sesión basada en cookie httpOnly: el JWT nunca llega al JavaScript del
 * navegador. Solo los endpoints de Astro (servidor) lo leen y lo reenvían a
 * la API de Nest como Bearer.
 */
export const SESSION_COOKIE = 'mu_session';

export function setSessionCookie(cookies: AstroCookies, token: string, maxAgeSeconds: number) {
  cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: import.meta.env.PROD,
    sameSite: 'lax',
    path: '/',
    maxAge: Math.max(60, Math.floor(maxAgeSeconds)),
  });
}

export function clearSessionCookie(cookies: AstroCookies) {
  cookies.delete(SESSION_COOKIE, { path: '/' });
}

export function getSessionToken(cookies: AstroCookies): string | null {
  return cookies.get(SESSION_COOKIE)?.value || null;
}

/**
 * Protección CSRF para requests que modifican datos: el Origin (o Referer)
 * tiene que ser este mismo sitio. Complementa SameSite=Lax.
 */
export function isSameOrigin(request: Request): boolean {
  const expected = new URL(request.url).origin;
  const origin = request.headers.get('origin');
  if (origin) return origin === expected;
  const referer = request.headers.get('referer');
  if (referer) {
    try {
      return new URL(referer).origin === expected;
    } catch {
      return false;
    }
  }
  return false;
}

export function json(body: unknown, status = 200, headers: Record<string, string> = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...headers },
  });
}

type ProxyOptions = {
  /** Ruta en la API de Nest, sin el prefijo /api/v2 (ej: "/account/characters/x/reset") */
  path: string;
  method: string;
  request: Request;
  cookies: AstroCookies;
  clientAddress?: string;
};

/**
 * Reenvía una request autenticada a la API de Nest usando el token de la cookie.
 * Si la API responde 401, borra la cookie.
 */
export async function proxyAuthenticated({ path, method, request, cookies, clientAddress }: ProxyOptions) {
  const token = getSessionToken(cookies);
  if (!token) return json({ message: 'Sesión requerida' }, 401);

  if (method !== 'GET' && !isSameOrigin(request)) {
    return json({ message: 'Origen no permitido' }, 403);
  }

  try {
    const body = method === 'GET' ? undefined : await request.text();
    const response = await fetch(`${apiUrl}/api/v2${path}`, {
      method,
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        Authorization: `Bearer ${token}`,
        ...(clientAddress ? { 'x-client-ip': clientAddress } : {}),
      },
      body: body || undefined,
    });

    if (response.status === 401) clearSessionCookie(cookies);

    const text = await response.text();
    return new Response(text || '{}', {
      status: response.status,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
    });
  } catch (error) {
    console.error(error);
    return json({ message: 'No se pudo conectar con la API' }, 502);
  }
}

/** Codifica cada segmento de una ruta capturada por [...path]. */
export function encodePath(path: string): string {
  return path.split('/').map(encodeURIComponent).join('/');
}
