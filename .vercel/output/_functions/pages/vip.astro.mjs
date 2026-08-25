import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BOq71Ym6.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Main, c as config } from '../chunks/Layout_CCyx8KZe.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BRxwfn5F.mjs';
import { i as infoImg } from '../chunks/top-decorator_cHE80Ub1.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Vip = createComponent(($$result, $$props, $$slots) => {
  const tiers = ["FREE", "VIP 1", "VIP 2", "VIP 3"];
  const rows = [
    { group: "General", label: "Experiencia", values: ["100%", "120%", "130%", "150%"] },
    { group: "General", label: "Drop Items", values: ["40%", "50%", "60%", "70%"] },
    { group: "Resets", label: "Nivel Reset", values: ["400", "390", "370", "350"] },
    { group: "Resets", label: "Puntos por Reset", values: ["400", "500", "600", "800"] },
    { group: "Joyas", label: "Soul Success", values: ["50%", "55%", "60%", "75%"] },
    { group: "Joyas", label: "Life Success", values: ["50%", "55%", "60%", "75%"] },
    { group: "Chaos Mix", label: "Item +10 / +11", values: ["60%", "65%", "70%", "75%"] },
    { group: "Chaos Mix", label: "Item +12 / +13", values: ["50%", "55%", "60%", "65%"] },
    { group: "Chaos Mix", label: "Dinorant / Pets", values: ["70%", "75%", "80%", "85%"] }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-4kcj6qyb": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, { "data-astro-cid-4kcj6qyb": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-4kcj6qyb> ${renderComponent($$result3, "Image", $$Image, { "src": infoImg, "alt": "Imagen", "class:list": "noticias", "data-astro-cid-4kcj6qyb": true })} <div class="vip-heading" data-astro-cid-4kcj6qyb> <p class="eyebrow" data-astro-cid-4kcj6qyb>Apoyá el proyecto</p> <h1 data-astro-cid-4kcj6qyb>Socio VIP de ${config.project.alias}</h1> <p class="lead" data-astro-cid-4kcj6qyb>Tu aporte ayuda a mantener el servidor activo y la comunidad en crecimiento.</p> </div> <section class="vip-intro" data-astro-cid-4kcj6qyb> <div class="intro-copy" data-astro-cid-4kcj6qyb> <h2 data-astro-cid-4kcj6qyb>Una forma de sumar tu apoyo</h2> <p data-astro-cid-4kcj6qyb>MU Campana sigue siendo gratuito para todos. El sistema VIP ofrece beneficios temporales a quienes eligen aportar al mantenimiento, sin convertir la experiencia en un servidor pay-to-win.</p> <p data-astro-cid-4kcj6qyb>Elegí el nivel que mejor se adapte a vos y revisá la comparación completa antes de aportar. Cada beneficio está pensado para acompañar tu progreso sin quitarle valor al esfuerzo dentro del juego.</p> <a class="btn btn-success" href="#beneficios" data-astro-cid-4kcj6qyb>Ver beneficios VIP</a> </div> <div class="support-note" data-astro-cid-4kcj6qyb> <strong data-astro-cid-4kcj6qyb>Tu aporte se transforma en servidor</strong> <p data-astro-cid-4kcj6qyb>Ayuda con el mantenimiento, la infraestructura y el desarrollo de nuevas experiencias para la comunidad.</p> </div> </section> <section id="beneficios" class="benefits-section" data-astro-cid-4kcj6qyb> <div class="section-heading" data-astro-cid-4kcj6qyb> <p class="eyebrow" data-astro-cid-4kcj6qyb>Comparación de beneficios</p> <h2 data-astro-cid-4kcj6qyb>Elegí tu nivel VIP</h2> <p data-astro-cid-4kcj6qyb>Compará cada beneficio con la modalidad FREE y encontrá la opción que más te convenga.</p> </div> <div class="tier-list" data-astro-cid-4kcj6qyb> ${tiers.map((tier, index) => renderTemplate`<div${addAttribute(["tier-card", index === 0 && "tier-free"], "class:list")} data-astro-cid-4kcj6qyb> <strong data-astro-cid-4kcj6qyb>${tier}</strong> <span data-astro-cid-4kcj6qyb>${index === 0 ? "La experiencia base" : `Nivel de apoyo ${index}`}</span> </div>`)} </div> <div class="table-wrapper" data-astro-cid-4kcj6qyb> <table data-astro-cid-4kcj6qyb> <caption data-astro-cid-4kcj6qyb>Comparación de beneficios entre la modalidad FREE y los niveles VIP</caption> <thead data-astro-cid-4kcj6qyb> <tr data-astro-cid-4kcj6qyb> <th scope="col" data-astro-cid-4kcj6qyb>Categoría</th> <th scope="col" data-astro-cid-4kcj6qyb>Beneficio</th> ${tiers.map((tier, index) => renderTemplate`<th${addAttribute({ "vip-column": index > 0 }, "class:list")} scope="col" data-astro-cid-4kcj6qyb>${tier}</th>`)} </tr> </thead> <tbody data-astro-cid-4kcj6qyb> ${rows.map((row) => renderTemplate`<tr data-astro-cid-4kcj6qyb> <td class="category-cell" data-astro-cid-4kcj6qyb>${row.group}</td> <td class="benefit-cell" data-astro-cid-4kcj6qyb>${row.label}</td> ${row.values.map((val, i) => renderTemplate`<td${addAttribute({ "vip-column": i > 0 }, "class:list")} data-astro-cid-4kcj6qyb> ${val} </td>`)} </tr>`)} </tbody> </table> </div> </section> <section class="vip-conditions" data-astro-cid-4kcj6qyb> <h3 data-astro-cid-4kcj6qyb>Antes de aportar</h3> <p data-astro-cid-4kcj6qyb>Los beneficios VIP son temporales y están sujetos a las condiciones del servidor. El aporte es voluntario, no es necesario para jugar y no otorga propiedad sobre cuentas, personajes, objetos o contenido.</p> <a href="/terms" data-astro-cid-4kcj6qyb>Leer términos y condiciones</a> </section> </div> ` })} ` })} `;
}, "C:/Users/juana/OneDrive/Escritorio/front/src/pages/vip.astro", void 0);

const $$file = "C:/Users/juana/OneDrive/Escritorio/front/src/pages/vip.astro";
const $$url = "/vip";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Vip,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
