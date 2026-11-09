/**
 * Estado de sesión del lado del navegador. El token vive en una cookie
 * httpOnly que JS no puede leer: acá solo se consulta /api/session.
 */
export type SessionUser = {
  username: string;
  name: string;
  email: string;
  accountLevel: number;
  roles: string[];
};

export type Session =
  | { authenticated: true; user: SessionUser; expiresAt: number | null }
  | { authenticated: false };

let cached: Promise<Session> | null = null;

// Limpia la sesión vieja guardada en localStorage (versión anterior)
try {
  localStorage.removeItem('mu-auth');
} catch {
  /* sin acceso a storage */
}

/** Una sola consulta por carga de página, compartida entre componentes. */
export function getSession(): Promise<Session> {
  cached ??= fetch('/api/session', { credentials: 'same-origin', cache: 'no-store' })
    .then((response) => response.json())
    .catch(() => ({ authenticated: false }) as Session);
  return cached;
}

export function isAdmin(session: Session): boolean {
  return session.authenticated && session.user.roles.includes('admin');
}

export async function logout(redirectTo = '/') {
  try {
    await fetch('/api/logout', { method: 'POST', credentials: 'same-origin' });
  } finally {
    window.location.href = redirectTo;
  }
}
