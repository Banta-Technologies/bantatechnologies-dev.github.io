/* empty css                                  */
import { a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_tt9Fw2rQ.mjs';
import 'kleur/colors';
import { $ as $$Image } from '../chunks/_astro_assets_DQBnB7Iq.mjs';
import { $ as $$Layout } from '../chunks/Layout_Cp-IUtjT.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto"> <section class="flex flex-col items-center justify-center h-[60dvh]"> <div class="flex"> <span class="fancy text-8xl font-bold">4</span> ${renderComponent($$result2, "Image", $$Image, { "src": "/favicon.svg", "alt": "spark logo", "width": "60", "height": "60" })} <span class="fancy text-8xl font-bold">4</span> </div> <span class="fancy text-3xl font-bold">not found</span> </section> </main> ` })}`;
}, "/home/vicb/aws/bantatechnologies-dev.github.io/src/pages/404.astro", void 0);

const $$file = "/home/vicb/aws/bantatechnologies-dev.github.io/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
