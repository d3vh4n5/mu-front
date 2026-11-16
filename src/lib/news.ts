/** Tipos y etiquetas de noticias (servidor y navegador). */

export type NewsCategory = 'novedad' | 'evento' | 'mantenimiento';

export const NEWS_CATEGORIES: { value: NewsCategory; label: string }[] = [
  { value: 'novedad', label: 'Novedad' },
  { value: 'evento', label: 'Evento' },
  { value: 'mantenimiento', label: 'Mantenimiento' },
];

export const categoryLabel = (category: string) =>
  NEWS_CATEGORIES.find((c) => c.value === category)?.label ?? category;

export type PublicNews = {
  id: number;
  title: string;
  summary: string;
  content: string;
  category: NewsCategory;
  imageUrl: string | null;
  pinned: boolean;
  publishedAt: string;
};

export type NewsPage = {
  page: number;
  limit: number;
  total: number;
  pages: number;
  items: PublicNews[];
};

export const formatNewsDate = (iso: string) =>
  new Date(iso).toLocaleDateString('es-AR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: 'America/Argentina/Buenos_Aires',
  });
