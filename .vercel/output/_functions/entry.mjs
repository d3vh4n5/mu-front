import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_cg9Jefyh.mjs';
import { manifest } from './manifest_BkRfdUOk.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/config/config.astro.mjs');
const _page2 = () => import('./pages/api/forgot-password.astro.mjs');
const _page3 = () => import('./pages/api/ranking.astro.mjs');
const _page4 = () => import('./pages/api/register.astro.mjs');
const _page5 = () => import('./pages/api/reset-password.astro.mjs');
const _page6 = () => import('./pages/api/status.astro.mjs');
const _page7 = () => import('./pages/downloads.astro.mjs');
const _page8 = () => import('./pages/forgot-password.astro.mjs');
const _page9 = () => import('./pages/help/skills.astro.mjs');
const _page10 = () => import('./pages/help.astro.mjs');
const _page11 = () => import('./pages/register.astro.mjs');
const _page12 = () => import('./pages/reset-password.astro.mjs');
const _page13 = () => import('./pages/terms.astro.mjs');
const _page14 = () => import('./pages/vip.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/config/config.ts", _page1],
    ["src/pages/api/forgot-password.ts", _page2],
    ["src/pages/api/ranking.ts", _page3],
    ["src/pages/api/register.ts", _page4],
    ["src/pages/api/reset-password.ts", _page5],
    ["src/pages/api/status.ts", _page6],
    ["src/pages/downloads.astro", _page7],
    ["src/pages/forgot-password.astro", _page8],
    ["src/pages/help/skills.astro", _page9],
    ["src/pages/help/index.astro", _page10],
    ["src/pages/register.astro", _page11],
    ["src/pages/reset-password.astro", _page12],
    ["src/pages/terms.astro", _page13],
    ["src/pages/vip.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "88271ae0-ec49-4d63-bea9-4c64d5040423",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
