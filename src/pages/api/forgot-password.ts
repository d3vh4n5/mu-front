import type { APIRoute } from 'astro';
import { apiKey, apiUrl } from './config/config';

export const prerender = false;
export const runtime = 'nodejs';

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const response = await fetch(`${apiUrl}/api/v2/auth/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    return new Response(JSON.stringify(result), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'No se pudo conectar con la API' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};