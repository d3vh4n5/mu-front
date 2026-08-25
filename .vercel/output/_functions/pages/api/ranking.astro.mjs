import { a as apiUrl, b as apiKey } from '../../chunks/config_yMW-yMZm.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const runtime = "nodejs";
const GET = async () => {
  try {
    const res = await fetch(apiUrl + "/api/v2/ranking", {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey
      }
    });
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "s-maxage=15"
        // opcional
      }
    });
  } catch (err) {
    return new Response(JSON.stringify({
      error: "Error obteniendo ranking"
    }), {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender,
  runtime
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
