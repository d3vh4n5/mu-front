import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BOq71Ym6.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Main } from '../chunks/Layout_CCyx8KZe.mjs';
import { $ as $$TermsContent } from '../chunks/TermsContent_BNbUXZq-.mjs';
import { i as infoImg } from '../chunks/top-decorator_cHE80Ub1.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BRxwfn5F.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Terms = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-y5py4vqc": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, { "data-astro-cid-y5py4vqc": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-y5py4vqc> ${renderComponent($$result3, "Image", $$Image, { "src": infoImg, "alt": "", "class:list": "noticias", "data-astro-cid-y5py4vqc": true })} <div class="page-heading" data-astro-cid-y5py4vqc> <p class="eyebrow" data-astro-cid-y5py4vqc>Información del servidor</p> <h1 data-astro-cid-y5py4vqc>Términos y condiciones</h1> <p data-astro-cid-y5py4vqc>Lee las condiciones de uso de MU Campana antes de crear tu cuenta.</p> </div> <section class="terms-page" data-astro-cid-y5py4vqc> ${renderComponent($$result3, "TermsContent", $$TermsContent, { "data-astro-cid-y5py4vqc": true })} <div class="terms-actions" data-astro-cid-y5py4vqc> <a class="btn btn-success" href="/register" data-astro-cid-y5py4vqc>Crear cuenta</a> <a class="btn" href="/" data-astro-cid-y5py4vqc>Volver al inicio</a> </div> </section> </div> ` })} ` })} `;
}, "C:/Users/juana/OneDrive/Escritorio/front/src/pages/terms.astro", void 0);

const $$file = "C:/Users/juana/OneDrive/Escritorio/front/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Terms,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
