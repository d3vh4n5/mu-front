import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BOq71Ym6.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Main } from '../chunks/Layout_CCyx8KZe.mjs';
import { i as infoImg } from '../chunks/top-decorator_cHE80Ub1.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BRxwfn5F.mjs';
/* empty css                                          */
export { renderers } from '../renderers.mjs';

const $$ResetPassword = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-oiuorpsm": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, { "data-astro-cid-oiuorpsm": true }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-oiuorpsm> ${renderComponent($$result3, "Image", $$Image, { "src": infoImg, "alt": "Imagen", "class:list": "noticias", "data-astro-cid-oiuorpsm": true })} <h1 data-astro-cid-oiuorpsm>Restablecer contraseña</h1> <section data-astro-cid-oiuorpsm> <div id="message" role="status" aria-live="polite" data-astro-cid-oiuorpsm>Validando el enlace...</div> <div id="passwordContainer" class="password-container" hidden data-astro-cid-oiuorpsm> <label for="newPassword" data-astro-cid-oiuorpsm>Tu nueva contraseña</label> <div class="password-field" data-astro-cid-oiuorpsm> <input id="newPassword" type="password" readonly aria-label="Nueva contraseña" data-astro-cid-oiuorpsm> <button id="togglePassword" type="button" class="btn" aria-pressed="false" data-astro-cid-oiuorpsm>
Mostrar
</button> </div> <p data-astro-cid-oiuorpsm>Anótala en un lugar seguro antes de cerrar esta página.</p> </div> </section> </div> ` })} ` })}  ${renderScript($$result, "C:/Users/juana/OneDrive/Escritorio/front/src/pages/reset-password.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/juana/OneDrive/Escritorio/front/src/pages/reset-password.astro", void 0);

const $$file = "C:/Users/juana/OneDrive/Escritorio/front/src/pages/reset-password.astro";
const $$url = "/reset-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ResetPassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
