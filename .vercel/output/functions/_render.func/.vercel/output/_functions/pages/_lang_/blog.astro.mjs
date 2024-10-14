/* empty css                                     */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_tt9Fw2rQ.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_Bgj-MYim.mjs';
import { g as getLangFromUrl, $ as $$Layout } from '../../chunks/Layout_Cp-IUtjT.mjs';
import { c as calculateReadingTime } from '../../chunks/utils_BxTEeWDd.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://banta-technologies.github.io/bantatechnologies-dev.github.io/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const lang = getLangFromUrl(Astro2.url);
  const blogPosts = await getCollection("blog", ({ data }) => {
    return data.lang === lang;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `Blog`, "lang": lang }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto"> <h1>Blog</h1> <ul> ${blogPosts.map((p) => renderTemplate`<li> <a class="link flex justify-between items-center"${addAttribute(p.slug, "href")}> <span>${p.data.title}</span> <div class="hidden md:block"> <span> ${calculateReadingTime(p.body)} min - ${p.data.date} </span> </div> </a> </li>`)} </ul> </main> ` })}`;
}, "/home/vicb/aws/bantatechnologies-dev.github.io/src/pages/[lang]/blog/index.astro", void 0);

const $$file = "/home/vicb/aws/bantatechnologies-dev.github.io/src/pages/[lang]/blog/index.astro";
const $$url = "/[lang]/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
