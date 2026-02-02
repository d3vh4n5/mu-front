import type { APIRoute } from 'astro';
import { config } from '../../constants/config'; // tu config con apiUrl

export const POST: APIRoute = async ({ request }) => {
    console.log("se esta llamando aca")
  try {
    const body = await request.json();

    // Reenvío al API real
    const response = await fetch(`${config.apiUrl}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    console.log(result)

    return new Response(JSON.stringify(result), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.log(err)
    return new Response(JSON.stringify({ error: 'No se pudo conectar con la API' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
