import type { APIRoute } from 'astro';
import { config } from '../../constants/config';

export const prerender = false;
export const runtime = 'nodejs';

export const GET: APIRoute = async () => {
  try {
    const res = await fetch(config.apiUrl + '/api/status', {
      cache: 'no-store'
    });
    const response2 = await fetch(config.apiUrl + '/health/readiness', {
      cache: 'no-store'
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

