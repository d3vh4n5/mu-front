import { c as createComponent, m as maybeRenderHead, f as renderSlot, a as renderTemplate, r as renderComponent, b as createAstro } from '../chunks/astro/server_BOq71Ym6.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Main, c as config } from '../chunks/Layout_CCyx8KZe.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Text = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="gradient-text-hot"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "C:/Users/juana/OneDrive/Escritorio/front/src/components/ui/Text.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<section data-astro-cid-j7pv25f6> <h1 class="gradient-text-cold" data-astro-cid-j7pv25f6>Bienvenidos a ${config.project.alias}</h1> <div class="welcomeMessage" data-astro-cid-j7pv25f6> <p class="subtitle" data-astro-cid-j7pv25f6>
MU Online ${config.server.version} • Experiencia equilibrada
</p> <div class="cta" data-astro-cid-j7pv25f6> <a href="/downloads" class="btn btn-success" data-astro-cid-j7pv25f6>Descargar cliente</a> <a href="/register" class="btn" data-astro-cid-j7pv25f6>Crear cuenta</a> </div> </div> <h3 data-astro-cid-j7pv25f6>Noticias</h3> <marquee data-astro-cid-j7pv25f6> ${renderComponent($$result3, "Text", $$Text, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate`
El servidor aun se encuentra en desarrollo. Mantente atento a las novedades de la apertura oficial.
` })} </marquee> <h3 data-astro-cid-j7pv25f6>Información del servidor</h3> ${renderComponent($$result3, "Text", $$Text, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result4) => renderTemplate` <ul class="server-info" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Versión:</strong> 99b + DL</li> <li data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Experiencia:</strong> x100</li> <li data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Drop:</strong> 40%</li> <li data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Reset:</strong> 400 puntos (borra stats)</li> <li data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Máx resets:</strong> 300</li> <li data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Máx stats:</strong> 32767</li> <li data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Eventos:</strong> BC, DS, CC, Invasiones</li> <li data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Comandos:</strong> Restea y agrega puntos sin salir del juego</li> </ul> ` })} <h3 data-astro-cid-j7pv25f6>Comienza tu aventura</h3> <div class="getting-started" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>Tu primer paso es crear una cuenta y descargar el cliente oficial. Una vez dentro del juego, usa los comandos disponibles para administrar tu personaje sin salir del servidor.</p> <div class="cta" data-astro-cid-j7pv25f6> <a href="/help" class="btn" data-astro-cid-j7pv25f6>Ver manual</a> <a href="/help/skills" class="btn" data-astro-cid-j7pv25f6>Consultar skills</a> </div> </div> <h3 data-astro-cid-j7pv25f6>Qué encontrarás</h3> <ul class="server-info" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Progresión:</strong> sube de nivel, consigue equipo y distribuye tus puntos.</li> <li data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Eventos:</strong> participa en Blood Castle, Devil Square, Chaos Castle e invasiones.</li> <li data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Comunidad:</strong> organiza parties, usa el chat global y compite en el ranking.</li> <li data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Soporte:</strong> reporta bugs o errores del sistema al staff.</li> </ul> <h3 data-astro-cid-j7pv25f6>Nuestro staff</h3> <ul class="server-info" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Mack:</strong> Eventos y GX</li> <li data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Cosito:</strong> Game Experience</li> <li data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Hanster:</strong> Atencion de bugs y errores de sistema</li> <li data-astro-cid-j7pv25f6><strong data-astro-cid-j7pv25f6>Calab0y:</strong> Atencion de bugs y errores de sistema</li> </ul> </section> ` })} ` })} `;
}, "C:/Users/juana/OneDrive/Escritorio/front/src/pages/index.astro", void 0);

const $$file = "C:/Users/juana/OneDrive/Escritorio/front/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
