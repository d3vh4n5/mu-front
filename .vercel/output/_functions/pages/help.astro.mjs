import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BOq71Ym6.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Main, b as $$MuTable } from '../chunks/Layout_CCyx8KZe.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BRxwfn5F.mjs';
import { i as infoImg } from '../chunks/top-decorator_cHE80Ub1.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "\u{1F4DC} Comandos del Servidor";
  const columns = ["Comando", "Descripci\xF3n"];
  const commands = [
    ["/reset", "Reinicia el personaje"],
    ["/pkclear", "Quita el estado PK"],
    ["/addstr <pts>", "Agregar fuerza"],
    ["/addagi <pts>", "Agregar agilidad"],
    ["/addvit <pts>", "Agregar vitalidad"],
    ["/addene <pts>", "Agregar energ\xEDa"],
    ["/addcmd <pts>", "Agregar comando (DL)"],
    ["/post <msg>", "Mensaje global"],
    ["/party <msg>", "Mensaje al party"],
    ["/whisper <msg>", "Mensaje al jugador"],
    ["/pickset <item>", "Setea un item para pickear automaticamente. Ej: /pickset Zen"],
    ["/pick on", "Activa el auto pick"],
    ["/pickclear", "Limpia todos los pickset que tenes"],
    ["/re auto", "Aceptar automaticamente las request"],
    ["/re off", "Desactiva el /re auto"],
    ["/<num> /<comando y/o opciones>", "Se usa para crear macros que luego se activan usando alt + <num>"],
    ["/attack <on> <buff> <skill>", "Autoataque. Ej: /attack 1 0 61 (activar, sin buff, skill 61)"]
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-4rsohe3g": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, { "data-astro-cid-4rsohe3g": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-4rsohe3g> ${renderComponent($$result3, "Image", $$Image, { "src": infoImg, "alt": "Imagen", "class:list": "noticias", "data-astro-cid-4rsohe3g": true })} <h1 data-astro-cid-4rsohe3g>Mu manual 📖</h1> <h4 data-astro-cid-4rsohe3g>
En esta sección encontrarás comandos y recomendaciones importantes para tu experiencia de juego.
</h4> <p data-astro-cid-4rsohe3g>
Antes de jugar, descarga el cliente oficial, crea tu cuenta y revisa esta guía para conocer las herramientas disponibles dentro del juego.
</p> <h3 data-astro-cid-4rsohe3g>Primeros pasos</h3> <ol class="guide-list" data-astro-cid-4rsohe3g> <li data-astro-cid-4rsohe3g>Descarga el cliente desde la sección <a href="/downloads" data-astro-cid-4rsohe3g>Descargas</a>.</li> <li data-astro-cid-4rsohe3g>Crea tu cuenta desde <a href="/register" data-astro-cid-4rsohe3g>Crear cuenta</a>.</li> <li data-astro-cid-4rsohe3g>Entra al servidor, revisa tus puntos y comienza a entrenar a tu personaje.</li> <li data-astro-cid-4rsohe3g>Usa los comandos de esta página para resetear, repartir puntos y comunicarte.</li> </ol> <h3 data-astro-cid-4rsohe3g>Cómo se juega</h3> <p data-astro-cid-4rsohe3g>
MU Online es un RPG de acción y progresión. Elige una clase, derrota monstruos para subir de nivel, recoge Zen y objetos, mejora tu equipo y distribuye tus puntos entre fuerza, agilidad, vitalidad, energía o comando según tu forma de jugar. Puedes avanzar por tu cuenta o formar una party para enfrentarte a zonas y eventos con otros jugadores.
</p> <p data-astro-cid-4rsohe3g>
Cada reset marca un nuevo objetivo de progreso: tu personaje vuelve a empezar su evolución, pero puede seguir creciendo con los puntos y el equipo que consigas. En este servidor el reset requiere 400 puntos y existe un máximo de 300 resets.
</p> <h3 data-astro-cid-4rsohe3g>Eventos del servidor</h3> <div class="events-guide" data-astro-cid-4rsohe3g> <article data-astro-cid-4rsohe3g> <h4 data-astro-cid-4rsohe3g>Blood Castle</h4> <p data-astro-cid-4rsohe3g>Un desafío contrarreloj en el que debes avanzar por el castillo, derrotar enemigos y completar el objetivo antes de que termine el evento. Es ideal para jugar acompañado y poner a prueba el daño y la coordinación del grupo.</p> </article> <article data-astro-cid-4rsohe3g> <h4 data-astro-cid-4rsohe3g>Devil Square</h4> <p data-astro-cid-4rsohe3g>Una zona de combate con oleadas de monstruos. El objetivo es sobrevivir y derrotar tantos enemigos como puedas para aprovechar la experiencia y seguir fortaleciendo a tu personaje.</p> </article> <article data-astro-cid-4rsohe3g> <h4 data-astro-cid-4rsohe3g>Chaos Castle</h4> <p data-astro-cid-4rsohe3g>Un evento competitivo donde los jugadores luchan en un escenario que se reduce progresivamente. Mantente atento a los rivales, administra tu posición y sé el último en pie.</p> </article> <article data-astro-cid-4rsohe3g> <h4 data-astro-cid-4rsohe3g>Invasiones</h4> <p data-astro-cid-4rsohe3g>Enemigos especiales aparecen en el mundo y convierten los mapas en una oportunidad para explorar, combatir y conseguir recompensas junto a otros jugadores.</p> </article> </div> <p class="note" data-astro-cid-4rsohe3g><strong data-astro-cid-4rsohe3g>Consejo:</strong> revisa tu inventario antes de entrar a un evento, lleva consumibles y coordina tu party. La preparación puede marcar la diferencia.</p> <h3 data-astro-cid-4rsohe3g>Comandos</h3> <p data-astro-cid-4rsohe3g>Los comandos se introducen en el chat del juego. Reemplaza los valores entre <code data-astro-cid-4rsohe3g>&lt; &gt;</code> por la información que quieras utilizar, por ejemplo: <code data-astro-cid-4rsohe3g>/addstr 100</code>.</p> <p data-astro-cid-4rsohe3g>Puedes realizar todas las acciones necesarias
				para administrar el personaje (resetear, agregar puntos, borrar PK) directamente con comandos in-game sin necesidad de usar la web.
</p> <p class="note" data-astro-cid-4rsohe3g><strong data-astro-cid-4rsohe3g>Importante:</strong> escribe cada comando respetando los espacios y la sintaxis indicada. Si un comando no responde, revisa primero sus parámetros.</p> ${renderComponent($$result3, "MuTable", $$MuTable, { "title": title, "columns": columns, "data": commands, "data-astro-cid-4rsohe3g": true })} <p data-astro-cid-4rsohe3g>Puedes ver la lista de skills <a href="/help/skills" data-astro-cid-4rsohe3g>aquí</a></p> </div> ` })} ` })} `;
}, "C:/Users/juana/OneDrive/Escritorio/front/src/pages/help/index.astro", void 0);

const $$file = "C:/Users/juana/OneDrive/Escritorio/front/src/pages/help/index.astro";
const $$url = "/help";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
