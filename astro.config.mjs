// @ts-check
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { defineConfig } from 'astro/config';
import vercelAdapter from '@astrojs/vercel';
import preact from '@astrojs/preact';

const require = createRequire(import.meta.url);
const isBuild = process.argv.includes('build');

/** Nombre del paquete y todas sus dependencias (transitivas). */
function dependencyTree(name, seen = new Set()) {
  if (seen.has(name)) return seen;
  seen.add(name);
  let pkgDir;
  try {
    pkgDir = dirname(require.resolve(join(name, 'package.json')));
  } catch {
    return seen; // dependencia opcional no instalada
  }
  const { dependencies = {} } = require(join(pkgDir, 'package.json'));
  for (const dep of Object.keys(dependencies)) dependencyTree(dep, seen);
  return seen;
}

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
    output: 'server',
    adapter: vercelAdapter(),
    vite: {
      ssr: {
        // sanitize-html (CJS) hace require() de htmlparser2 (solo ESM). El loader de
        // Vercel (/opt/rust/nodejs.js) no soporta require(esm) aunque el runtime sea
        // Node 24, así que empaquetamos sanitize-html y todo su árbol en el bundle SSR
        // para que Rollup resuelva la interop CJS/ESM en build.
        // Solo en build: en `astro dev` el module runner de Vite no tiene `require`
        // y al inlinear sanitize-html tira "require is not defined".
        noExternal: isBuild ? [...dependencyTree('sanitize-html')] : [],
      },
    },
});
