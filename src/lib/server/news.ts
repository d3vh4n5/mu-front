import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';
import { apiKey, apiUrl } from '../../pages/api/config/config';
import type { NewsPage, PublicNews } from '../news';

/** Si la API no responde a tiempo, la página se muestra igual (sin noticias). */
const TIMEOUT_MS = 4000;

async function getJson<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${apiUrl}/api/v2${path}`, {
      headers: { 'x-api-key': apiKey },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch (error) {
    console.error(`Noticias: no se pudo leer ${path}`, error);
    return null;
  }
}

/** null = la API no respondió (distinto de "no hay noticias"). */
export function fetchNewsPage(page = 1, limit = 10) {
  return getJson<NewsPage>(`/news?page=${page}&limit=${limit}`);
}

export function fetchNews(id: number) {
  return getJson<PublicNews>(`/news/${id}`);
}

/**
 * Markdown -> HTML seguro. El contenido lo escribe un admin, pero igual se
 * filtra: solo formato básico, links http(s) y nada de scripts, estilos ni iframes.
 */
export function renderNewsMarkdown(markdown: string): string {
  const html = marked.parse(markdown, { async: false, gfm: true, breaks: true });
  return sanitizeHtml(html, {
    allowedTags: [
      'p', 'br', 'strong', 'em', 'del', 'ul', 'ol', 'li', 'blockquote',
      'code', 'pre', 'h2', 'h3', 'h4', 'a', 'hr', 'table', 'thead', 'tbody',
      'tr', 'th', 'td',
    ],
    allowedAttributes: { a: ['href', 'target', 'rel'] },
    allowedSchemes: ['http', 'https', 'mailto'],
    transformTags: {
      // El título de la página ya es el h1: los "#" del contenido bajan un nivel
      h1: 'h2',
      a: sanitizeHtml.simpleTransform('a', { target: '_blank', rel: 'noopener noreferrer nofollow' }),
    },
  });
}
