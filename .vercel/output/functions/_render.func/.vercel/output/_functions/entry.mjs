import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_YIAFiNbe.mjs';
import { manifest } from './manifest_BlM418hq.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/contactformsubmit.astro.mjs');
const _page3 = () => import('./pages/robots.txt.astro.mjs');
const _page4 = () => import('./pages/_lang_/blog/utils.astro.mjs');
const _page5 = () => import('./pages/_lang_/blog.astro.mjs');
const _page6 = () => import('./pages/_lang_/blog/_---slug_.astro.mjs');
const _page7 = () => import('./pages/_lang_/components.astro.mjs');
const _page8 = () => import('./pages/_lang_/contact.astro.mjs');
const _page9 = () => import('./pages/_lang_/faq.astro.mjs');
const _page10 = () => import('./pages/_lang_.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/contactFormSubmit.ts", _page2],
    ["src/pages/robots.txt.ts", _page3],
    ["src/pages/[lang]/blog/utils.ts", _page4],
    ["src/pages/[lang]/blog/index.astro", _page5],
    ["src/pages/[lang]/blog/[...slug].astro", _page6],
    ["src/pages/[lang]/components.astro", _page7],
    ["src/pages/[lang]/contact.astro", _page8],
    ["src/pages/[lang]/faq.astro", _page9],
    ["src/pages/[lang]/index.astro", _page10],
    ["src/pages/index.astro", _page11]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "f830ee49-ea44-48ba-bb75-29904333a984",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
