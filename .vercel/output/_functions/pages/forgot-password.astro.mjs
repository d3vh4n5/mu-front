import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BOq71Ym6.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Main } from '../chunks/Layout_CCyx8KZe.mjs';
import { i as infoImg } from '../chunks/top-decorator_cHE80Ub1.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BRxwfn5F.mjs';
/* empty css                                           */
export { renderers } from '../renderers.mjs';

const $$ForgotPassword = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-sjxci7tl": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, { "data-astro-cid-sjxci7tl": true }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-sjxci7tl> ${renderComponent($$result3, "Image", $$Image, { "src": infoImg, "alt": "Imagen", "class:list": "noticias", "data-astro-cid-sjxci7tl": true })} <h1 data-astro-cid-sjxci7tl>Recuperar contraseña</h1> <section data-astro-cid-sjxci7tl> <div id="message" role="status" aria-live="polite" data-astro-cid-sjxci7tl></div> <form id="forgotPasswordForm" data-astro-cid-sjxci7tl> <div class="input-group" data-astro-cid-sjxci7tl> <label for="email" data-astro-cid-sjxci7tl>Correo electrónico</label> <input type="email" id="email" autocomplete="email" required data-astro-cid-sjxci7tl> </div> <p data-astro-cid-sjxci7tl>Te enviaremos un enlace para crear una nueva contraseña.</p> <button type="submit" class="btn primary" data-astro-cid-sjxci7tl>ENVIAR ENLACE</button> </form> </section> </div> ` })} ` })}  ${renderScript($$result, "C:/Users/juana/OneDrive/Escritorio/front/src/pages/forgot-password.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/juana/OneDrive/Escritorio/front/src/pages/forgot-password.astro", void 0);

const $$file = "C:/Users/juana/OneDrive/Escritorio/front/src/pages/forgot-password.astro";
const $$url = "/forgot-password";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ForgotPassword,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
