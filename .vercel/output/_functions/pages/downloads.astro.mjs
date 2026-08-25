import { c as createComponent, r as renderComponent, a as renderTemplate, b as createAstro, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BOq71Ym6.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Main } from '../chunks/Layout_CCyx8KZe.mjs';
import { i as infoImg } from '../chunks/top-decorator_cHE80Ub1.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BRxwfn5F.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Downloads = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Downloads;
  const clientUrl = "https://drive.google.com/file/d/1_X_XNBpP-w-5dUe3yh1TLNZICZJFLFI6/view?usp=sharing";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-i6ote7bk": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, { "data-astro-cid-i6ote7bk": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-i6ote7bk> ${renderComponent($$result3, "Image", $$Image, { "src": infoImg, "alt": "Imagen", "class:list": "noticias", "data-astro-cid-i6ote7bk": true })} <h1 data-astro-cid-i6ote7bk>Descargas</h1> <section class="download-content" data-astro-cid-i6ote7bk> <div class="download-intro" data-astro-cid-i6ote7bk> <h2 data-astro-cid-i6ote7bk>Cliente oficial de MU</h2> <p data-astro-cid-i6ote7bk>Descarga el cliente necesario para conectarte al servidor y comenzar a jugar.</p> <a class="btn btn-success download-button"${addAttribute(clientUrl, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-i6ote7bk>
Descargar cliente
</a> </div> <div class="download-details" data-astro-cid-i6ote7bk> <h3 data-astro-cid-i6ote7bk>Como instalar</h3> <ol data-astro-cid-i6ote7bk> <li data-astro-cid-i6ote7bk>Descarga el archivo del cliente desde Google Drive.</li> <li data-astro-cid-i6ote7bk>Descomprime el archivo en una carpeta de tu computadora.</li> <li data-astro-cid-i6ote7bk>Abre el launcher o ejecutable del cliente para iniciar el juego.</li> </ol> <h3 data-astro-cid-i6ote7bk>Antes de jugar</h3> <ul data-astro-cid-i6ote7bk> <li data-astro-cid-i6ote7bk>Crea tu cuenta desde <a href="/register" data-astro-cid-i6ote7bk>Crear cuenta</a>.</li> <li data-astro-cid-i6ote7bk>Usa una carpeta propia para el cliente y evita instalarlo dentro de Archivos de programa.</li> <li data-astro-cid-i6ote7bk>Mantén el cliente actualizado para evitar problemas de conexión.</li> </ul> </div> </section> </div> ` })} ` })} `;
}, "C:/Users/juana/OneDrive/Escritorio/front/src/pages/downloads.astro", void 0);

const $$file = "C:/Users/juana/OneDrive/Escritorio/front/src/pages/downloads.astro";
const $$url = "/downloads";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Downloads,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
