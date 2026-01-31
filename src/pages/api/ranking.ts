import type { APIRoute } from 'astro';
import { config } from '../../constants/config';

export const GET: APIRoute = async () => {
  try {
    const res = await fetch(config.apiUrl + '/api/ranking',{
      cache: 'no-store'
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
