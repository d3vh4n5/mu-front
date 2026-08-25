import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BOq71Ym6.mjs';
import 'piccolore';
import { $ as $$Layout, a as $$Main, b as $$MuTable } from '../../chunks/Layout_CCyx8KZe.mjs';
import { $ as $$Image } from '../../chunks/_astro_assets_BRxwfn5F.mjs';
import { i as infoImg } from '../../chunks/top-decorator_cHE80Ub1.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  const columns = ["ID", "Skill"];
  const skills = [
    [1, "Poison"],
    [2, "Meteorite"],
    [3, "Lightning"],
    [4, "Fire Ball"],
    [5, "Flame"],
    [6, "Teleport"],
    [7, "Ice"],
    [8, "Twister"],
    [9, "Evil Spirit"],
    [10, "Hell Fire"],
    [11, "Power Wave"],
    [12, "Aqua Beam"],
    [13, "Blast"],
    [14, "Inferno"],
    [15, "Teleport Party"],
    [16, "Mana Shield"],
    [17, "Energy Ball"],
    [18, "Defense"],
    [19, "Falling Slash"],
    [20, "Lunge"],
    [21, "Uppercut"],
    [22, "Cyclone"],
    [23, "Slash"],
    [24, "Triple Shot"],
    [26, "Heal"],
    [27, "Greater Defense"],
    [28, "Greater Damage"],
    [30, "Summon Goblin"],
    [31, "Summon Stone Golem"],
    [32, "Summon Assassin"],
    [33, "Summon Elite Yeti"],
    [34, "Summon Dark Knight"],
    [35, "Summon Bali"],
    [36, "Summon Soldier"],
    [38, "Decay"],
    [39, "Ice Storm"],
    [40, "Nova"],
    [41, "Twisting Slash"],
    [42, "Rageful Blow"],
    [43, "Death Stab"],
    [47, "Impale"],
    [48, "Greater Life"],
    [49, "Fire Breath"],
    [50, "Monster Area Attack"],
    [51, "Ice Arrow"],
    [52, "Penetration"],
    [55, "Fire Slash"],
    [56, "Power Slash"],
    [60, "Force"],
    [61, "Fire Burst"],
    [62, "Earthquake"],
    [63, "Summon Party"],
    [64, "Greater Critical Damage"],
    [65, "Electric Spark"],
    [66, "Force Wave"],
    [200, "Monster Summon"],
    [201, "Magic Damage Immunity"],
    [202, "Physi Damage Immunity"]
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-fmsdyem5": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Main", $$Main, { "data-astro-cid-fmsdyem5": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-fmsdyem5> ${renderComponent($$result3, "Image", $$Image, { "src": infoImg, "alt": "Imagen", "class:list": "noticias", "data-astro-cid-fmsdyem5": true })} <h1 data-astro-cid-fmsdyem5></h1> ${renderComponent($$result3, "MuTable", $$MuTable, { "title": "\u2694\uFE0F Skill list", "columns": columns, "data": skills, "data-astro-cid-fmsdyem5": true })} </div> ` })} ` })} `;
}, "C:/Users/juana/OneDrive/Escritorio/front/src/pages/help/skills.astro", void 0);

const $$file = "C:/Users/juana/OneDrive/Escritorio/front/src/pages/help/skills.astro";
const $$url = "/help/skills";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Skills,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
