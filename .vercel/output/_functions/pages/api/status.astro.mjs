import { a as apiUrl, b as apiKey } from '../../chunks/config_yMW-yMZm.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const runtime = "nodejs";
const GET = async () => {
  try {
    const res = await fetch(apiUrl + "/api/v2/players/online", {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey
      }
    });
    const response2 = await fetch(apiUrl + "/api/v2/health/readiness", {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey
      }
    });
    const data = await res.json();
    const data2 = await response2.json();
    return new Response(JSON.stringify({
      ...data,
      ...data2
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store"
      }
    });
  } catch {
    return new Response(JSON.stringify({
      online: 0
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
