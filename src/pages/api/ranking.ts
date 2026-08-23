import type { APIRoute } from 'astro';
import { apiKey, apiUrl } from './config/config';

export const prerender = false;
export const runtime = 'nodejs';

export const GET: APIRoute = async () => {
  try {
    const res = await fetch(apiUrl + '/api/v2/ranking',{
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
    });

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=15' // opcional
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'Error obteniendo ranking' }),
      { status: 500 }
    );
  }
};
