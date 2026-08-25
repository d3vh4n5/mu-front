import { a as apiUrl, b as apiKey } from '../../chunks/config_yMW-yMZm.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({
  request
}) => {
  try {
    const body = await request.json();
    const response = await fetch(`${apiUrl}/api/v2/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey
      },
      body: JSON.stringify(body)
    });
    const result = await response.json();
    return new Response(JSON.stringify(result), {
      status: response.status,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({
      error: "No se pudo conectar con la API"
    }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
