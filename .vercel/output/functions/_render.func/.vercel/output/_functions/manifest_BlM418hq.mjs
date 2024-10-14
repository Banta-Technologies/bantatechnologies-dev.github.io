import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DTEsG-b1.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_tt9Fw2rQ.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/vicb/aws/bantatechnologies-dev.github.io/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BUL2e3rS.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BUL2e3rS.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.DlFBz8N0.css"},{"type":"external","src":"/_astro/_slug_.CabMAATN.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BUL2e3rS.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.DlFBz8N0.css"},{"type":"external","src":"/_astro/_slug_.CabMAATN.css"}],"routeData":{"route":"/api/contactformsubmit","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contactFormSubmit\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contactFormSubmit","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contactFormSubmit.ts","pathname":"/api/contactFormSubmit","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BUL2e3rS.js"}],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BUL2e3rS.js"}],"styles":[],"routeData":{"route":"/[lang]/blog/utils","isIndex":false,"type":"endpoint","pattern":"^\\/([^/]+?)\\/blog\\/utils\\/?$","segments":[[{"content":"lang","dynamic":true,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}],[{"content":"utils","dynamic":false,"spread":false}]],"params":["lang"],"component":"src/pages/[lang]/blog/utils.ts","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BUL2e3rS.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.DlFBz8N0.css"},{"type":"external","src":"/_astro/_slug_.CabMAATN.css"}],"routeData":{"route":"/[lang]/blog","isIndex":true,"type":"page","pattern":"^\\/([^/]+?)\\/blog\\/?$","segments":[[{"content":"lang","dynamic":true,"spread":false}],[{"content":"blog","dynamic":false,"spread":false}]],"params":["lang"],"component":"src/pages/[lang]/blog/index.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BUL2e3rS.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.DlFBz8N0.css"},{"type":"external","src":"/_astro/_slug_.CabMAATN.css"}],"routeData":{"route":"/[lang]/contact","isIndex":false,"type":"page","pattern":"^\\/([^/]+?)\\/contact\\/?$","segments":[[{"content":"lang","dynamic":true,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":["lang"],"component":"src/pages/[lang]/contact.astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BUL2e3rS.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.DlFBz8N0.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://banta-technologies.github.io/bantatechnologies-dev.github.io/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/home/vicb/aws/bantatechnologies-dev.github.io/src/pages/[lang]/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[lang]/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/vicb/aws/bantatechnologies-dev.github.io/src/pages/[lang]/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/[lang]/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/vicb/aws/bantatechnologies-dev.github.io/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/vicb/aws/bantatechnologies-dev.github.io/src/pages/[lang]/components.astro",{"propagation":"none","containsHead":true}],["/home/vicb/aws/bantatechnologies-dev.github.io/src/pages/[lang]/contact.astro",{"propagation":"none","containsHead":true}],["/home/vicb/aws/bantatechnologies-dev.github.io/src/pages/api/contactFormSubmit.ts",{"propagation":"none","containsHead":true}],["/home/vicb/aws/bantatechnologies-dev.github.io/src/pages/[lang]/faq.astro",{"propagation":"none","containsHead":true}],["/home/vicb/aws/bantatechnologies-dev.github.io/src/pages/[lang]/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/[lang]/blog/utils@_@ts":"pages/_lang_/blog/utils.astro.mjs","\u0000@astro-page:src/pages/[lang]/contact@_@astro":"pages/_lang_/contact.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/api/contactFormSubmit@_@ts":"pages/api/contactformsubmit.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/[lang]/blog/index@_@astro":"pages/_lang_/blog.astro.mjs","\u0000@astro-page:src/pages/[lang]/blog/[...slug]@_@astro":"pages/_lang_/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/[lang]/components@_@astro":"pages/_lang_/components.astro.mjs","\u0000@astro-page:src/pages/[lang]/faq@_@astro":"pages/_lang_/faq.astro.mjs","\u0000@astro-page:src/pages/[lang]/index@_@astro":"pages/_lang_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/home/vicb/aws/bantatechnologies-dev.github.io/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","/home/vicb/aws/bantatechnologies-dev.github.io/src/content/blog/en/test.mdx?astroContentCollectionEntry=true":"chunks/test_DtjXD2uF.mjs","/home/vicb/aws/bantatechnologies-dev.github.io/src/content/blog/fr/test.mdx?astroContentCollectionEntry=true":"chunks/test_B5bFjZQF.mjs","/home/vicb/aws/bantatechnologies-dev.github.io/src/content/blog/nl/test.mdx?astroContentCollectionEntry=true":"chunks/test_sePc3GYi.mjs","/home/vicb/aws/bantatechnologies-dev.github.io/src/content/blog/en/test.mdx?astroPropagatedAssets":"chunks/test_0lvOulu8.mjs","/home/vicb/aws/bantatechnologies-dev.github.io/src/content/blog/fr/test.mdx?astroPropagatedAssets":"chunks/test_DzHrhRZa.mjs","/home/vicb/aws/bantatechnologies-dev.github.io/src/content/blog/nl/test.mdx?astroPropagatedAssets":"chunks/test_CJ36dXU_.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/home/vicb/aws/bantatechnologies-dev.github.io/src/content/blog/en/test.mdx":"chunks/test_pDkVl4Cb.mjs","/home/vicb/aws/bantatechnologies-dev.github.io/src/content/blog/fr/test.mdx":"chunks/test_CKRkpx5A.mjs","/home/vicb/aws/bantatechnologies-dev.github.io/src/content/blog/nl/test.mdx":"chunks/test_Djtgwki-.mjs","\u0000@astrojs-manifest":"manifest_BlM418hq.mjs","astro:scripts/page.js":"_astro/page.BUL2e3rS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.DlFBz8N0.css","/_astro/_slug_.CabMAATN.css","/favicon.svg","/noise.svg","/_astro/page.BUL2e3rS.js","/fonts/OpenSans-Italic.ttf","/fonts/OpenSans.ttf","/fonts/Raleway-Italic.ttf","/fonts/Raleway.ttf","/icons/alpinejs.svg","/icons/globe.svg","/icons/link.svg","/icons/mailerSend.svg","/icons/mdx.svg","/icons/pointer.svg","/icons/search.svg","/icons/sitemap.svg","/icons/tailwind.svg","/icons/vercel.svg","/icons/zero.svg","/_astro/page.BUL2e3rS.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"1uJ+spuU4iAlXmm/IJQu02zCa3YIq2Slk/Lz87CoM2Q=","experimentalEnvGetSecretEnabled":false});

export { manifest };
