import { c as createComponent, m as maybeRenderHead, a as renderTemplate, d as addAttribute, b as createAstro, r as renderComponent, e as renderScript, f as renderSlot, g as renderHead } from './astro/server_BOq71Ym6.mjs';
import 'piccolore';
import { $ as $$Image } from './_astro_assets_BRxwfn5F.mjs';
import 'clsx';
/* empty css                             */

const eventsImg = new Proxy({"src":"/_astro/events.Db1ijiTH.png","width":140,"height":220,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/juana/OneDrive/Escritorio/front/src/assets/img/events.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$MuTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MuTable;
  const { title, columns, data, id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mu-box"> ${title && renderTemplate`<h3>${title}</h3>`} <table class="mu-table"> <thead> <tr> ${columns.map((col) => renderTemplate`<th>${col}</th>`)} </tr> </thead> <tbody${addAttribute(id, "id")}> ${data.map((row) => renderTemplate`<tr> ${row.map((col) => renderTemplate`<td> ${col} </td>`)} </tr>`)} </tbody> </table> </div> `;
}, "C:/Users/juana/OneDrive/Escritorio/front/src/components/MuTable.astro", void 0);

const $$RankTable = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MuTable", $$MuTable, { "id": "ranking-body", "title": "TOP 10 GUERREROS", "columns": ["#", "Nombre", "Nivel", "Resets"], "data": [] })} ${renderScript($$result, "C:/Users/juana/OneDrive/Escritorio/front/src/components/RankTable.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/juana/OneDrive/Escritorio/front/src/components/RankTable.astro", void 0);

const $$OnlinePlayers = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="server-status" data-astro-cid-slweneoz>
Server: <span id="status-dot" data-astro-cid-slweneoz>●</span> <span id="status" data-astro-cid-slweneoz>Conectando...</span> <span id="user-count" data-astro-cid-slweneoz></span> </div>  ${renderScript($$result, "C:/Users/juana/OneDrive/Escritorio/front/src/components/OnlinePlayers.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/juana/OneDrive/Escritorio/front/src/components/OnlinePlayers.astro", void 0);

const $$Main = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main id="container" class="bg-blur" data-astro-cid-ivdev4kk> <section class="mid" data-astro-cid-ivdev4kk> ${renderSlot($$result, $$slots["default"])} </section> <section class="right" data-astro-cid-ivdev4kk> <div class="right-container" data-astro-cid-ivdev4kk> ${renderComponent($$result, "OnlinePlayers", $$OnlinePlayers, { "data-astro-cid-ivdev4kk": true })} <hr data-astro-cid-ivdev4kk> ${renderComponent($$result, "RankTable", $$RankTable, { "data-astro-cid-ivdev4kk": true })} <hr data-astro-cid-ivdev4kk> ${renderComponent($$result, "Image", $$Image, { "src": eventsImg, "alt": "Imagen principal", "class:list": "hero-img", "data-astro-cid-ivdev4kk": true })} </div> </section> </main> `;
}, "C:/Users/juana/OneDrive/Escritorio/front/src/components/Main.astro", void 0);

const name = "mu-campana";

const config = {
  project: {
    alias: "Mu Campana",
    name: name},
  server: {
    version: "99b + DL"
  }
};

const heroImg = new Proxy({"src":"/_astro/hero2.6FjAjlzh.jpg","width":1024,"height":572,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/juana/OneDrive/Escritorio/front/src/assets/img/hero2.jpg";
							}
							
							return target[name];
						}
					});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const pages = [
    { path: "/", name: "Inicio" },
    { path: "/register", name: "Crear cuenta" },
    { path: "/downloads", name: "Bajar Mu" },
    { path: "/help", name: "Mu manual" },
    { path: "/vip", name: "VIP" },
    { path: "/terms", name: "T\xE9rminos" }
  ];
  return renderTemplate`${maybeRenderHead()}<header data-astro-cid-3ef6ksr2> <nav class="bg-blur" data-astro-cid-3ef6ksr2> <ul data-astro-cid-3ef6ksr2> ${pages.map((page) => renderTemplate`<li data-astro-cid-3ef6ksr2> <a${addAttribute(page.path, "href")} data-astro-cid-3ef6ksr2>${page.name}</a> </li>`)} </ul> </nav> <div class="container" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Image", $$Image, { "src": heroImg, "alt": "Imagen principal", "class:list": "hero-img", "data-astro-cid-3ef6ksr2": true })} </div> </header> `;
}, "C:/Users/juana/OneDrive/Escritorio/front/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>${config.project.alias} © 2026, TODOS LOS DERECHOS RESERVADOS. <br data-astro-cid-sz7xmlte>
Este es un servidor privado de MU Online.
        No estamos afiliados ni respaldados de ninguna manera por Webzen.</p> <p data-astro-cid-sz7xmlte>
Experiencia de juego: <strong data-astro-cid-sz7xmlte>Matias Casazza</strong>, <strong data-astro-cid-sz7xmlte>Angel Basgall</strong> - Desarrollo: <strong data-astro-cid-sz7xmlte>Juan Basgall</strong>, <strong data-astro-cid-sz7xmlte>Lautaro Patyn</strong> </p> </footer> `;
}, "C:/Users/juana/OneDrive/Escritorio/front/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { project } = config;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><!-- <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> --><link rel="icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${project.name}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/juana/OneDrive/Escritorio/front/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Main as a, $$MuTable as b, config as c };
