import type { APIRoute } from 'astro';
import { apiKey, apiUrl } from './config/config';

export const prerender = false;
export const runtime = 'nodejs';

export const GET: APIRoute = async () => {
  try {
    const res = await fetch(apiUrl + '/api/v2/players/online', {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
    });
    const response2 = await fetch(apiUrl + '/api/v2/health/readiness', {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
    });

    const data = await res.json();
    const data2 = await response2.json();

    return new Response(JSON.stringify({...data, ...data2}), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store'
      }
    });
  } catch {
    return new Response(
      JSON.stringify({ online: 0 }),
      { status: 500 }
    );
  }
};

