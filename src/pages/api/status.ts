import type { APIRoute } from 'astro';
import { config } from '../../constants/config';

export const prerender = false;
export const runtime = 'nodejs';

export const GET: APIRoute = async () => {
  try {
    const res = await fetch(config.apiUrl + '/api/status', {
      cache: 'no-store'
    });

    const data = await res.json();

    return new Response(JSON.stringify(data), {
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

