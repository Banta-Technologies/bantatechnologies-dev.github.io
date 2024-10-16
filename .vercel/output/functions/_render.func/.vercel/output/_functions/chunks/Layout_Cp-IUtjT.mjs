import { c as createAstro, a as createComponent, r as renderTemplate, d as addAttribute, m as maybeRenderHead, b as renderComponent, l as renderHead, k as renderSlot } from './astro/server_tt9Fw2rQ.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const ui = {
  en: {
    "layout.test": "Spark",
    "hero.title": " the best minimal astro starter template!",
    "hero.description": "Launch astro projects with ease and style. Minimalist design, maximum functionality. Whether seasoned or new, Spark streamlines your development for stunning astro websites.",
    "integration.title": "Integrations",
    "integration.description": "Click on a card below to open the intergation documentation.",
    "faq.title": "FAQ",
    "faq.why": "Why did you create this template?",
    "faq.who": "Why created this template?",
    "faq.tech": "What did you use to create this template?",
    "faq.reason_why": "I created this template cause i wanted to learn about astro.",
    "faq.reason_who": "This template was made solely by me, Ruben Winant",
    "faq.reason_tech": "I used Astro, Alpine.js, mdx, sitemap, tailwind, vercel and mailersend",
    "faq.description": "This is the faq page",
    "nav.components": "Components",
    "nav.faq": "faq",
    "nav.contact": "contact",
    "nav.blog": "blog",
    "footer.copyright": "Spark Theme. All rights reserved. This project is independent of and not endorsed or sponsored by Astro or Tailwind Labs.",
    "footer.createdBy": "Created by",
    "footer.createdBy2": "with Astro and Tailwind from the beautiful Bierbeek, Belgium.",
    "faq.contact": "Couldn't find what your're looking for?",
    "faq.contactUs": "Contact us!",
    "contact.title": "Contact",
    "contact.field_name": "Name",
    "contact.field_topic": "Topic",
    "contact.field_email": "Email",
    "contact.field_message": "Message",
    "contact.topic_Inquiry": "Inquiry",
    "contact.topic_Feedback": "Feedback",
    "contact.topic_Other": "Other",
    "contact.submit": "Send",
    "contact.description": "A simple contact page using plain astro and MailerSendto send mails using their api.",
    "contact.error_name": "Please enter a valid name.",
    "contact.error_message": "Please enter a valid message.",
    "contact.error_email": "Please enter a valid email address.",
    "contact.error_topic": "Please select a valid topic.",
    "contact.success": "Email was sent successfully",
    "contact.error_general": "Something went wrong, try again later",
    "slider.title": "Everything you need to get started",
    "slider.card_1_title": "Zero JavaScript, By Default",
    "slider.card_1_description": "Astro only ships the JavaScript you need and automatically strips away the rest for a faster website.",
    "slider.card_2_title": "Interactive when needed",
    "slider.card_2_description": "Alpine is a rugged, minimal tool for composing behavior directly in your markup. Think of it like jQuery for the modern web.",
    "slider.card_3_title": "Multi-language Support",
    "slider.card_3_description": "Multi-language support straight out of the box using Astro's built-in i18n capabilities, making your content accessible to a wider audience.",
    "slider.card_4_title": "Style with Tailwind CSS",
    "slider.card_4_description": "Style your website directly in your HTML with utility-first CSS classes, making design a breeze.",
    "slider.card_5_title": "SEO optimized",
    "slider.card_5_description": "Astro's sitemap integration helps search engines discover your content, improving your site's SEO effortlessly.",
    "features.title": "Features",
    "components.description": "Here you'll find a collection of elements, icons and such that are provided by this theme.",
    "test.title": "Sample Card",
    "test.description": "This is a placeholder card to demonstrate the basic structure and functionality of an element. You can customize the content and design to suit your specific needs.",
    "test.iconTitle": "Icons",
    "test.iconDescription": "Hover over each icon to see it's name. All icons are svg files within the public/icons directory.",
    "test.dropdownCardTitle": "Dropdown cards",
    "test.dropdownCardDescription": "Powered by alpine.js",
    "test.fullWidthBannerTitle": "Full width banner",
    "test.fullWidthBannerDescription": "A full width banner with an optional cta button",
    "test.button": "click here",
    "test.autoSliderTitle": "Auto slider with TextCards",
    "test.autoSliderDescription": "A no js, css only auto slider where you can pause the animation by hovering over a card. An optional title and description can also be provided.",
    "test.containersTitle": "Containers",
    "test.cardGridDescription": "The CardGrid component allows flexible content layout. Provide content through either the 'upper-row' or 'lower-row' slot, and the component will automatically distribute it into columns.",
    "test.cardGridTitle": "What's included",
    "test.cardGridTitle1": "Contact page",
    "test.cardGridDescription1": "Capture leads and stay connected with a user-friendly contact form, powered by mailersend.",
    "test.cardGridTitle2": "Ready-to-go blog",
    "test.cardGridDescription2": "Start blogging using the I18N compatible, MDX powered blog!",
    "test.cardGridTitle3": "Easy setup",
    "test.cardGridDescription3": "Get up and running quickly using our premade pages and components.",
    "test.cardGridTitle4": "FAQ page",
    "test.cardGridDescription4": "People might have questions, now you can answer them!",
    "test.cardGridTitle5": "Speak Their Language",
    "test.cardGridDescription5": "I18N built in. Convert more!",
    "test.cardsTitle": "Cards",
    "test.cardsDescription": "Some of the premade card components, some of t",
    "test.cardClass": "This CSS class .card is designed for a flexible, visually appealing card component with various styles and hover effects.",
    "test.iconCardDescription": "A responsive, interactive list item (<li>) that functions as an icon card with an image and title, using Tailwind CSS for styling."
  },
  nl: {
    "layout.test": "Spark",
    "hero.title": " het beste minimale Astro starter template!",
    "hero.description": "Start astro projecten eenvoudig en met stijl. Minimalistisch design, maximale functionaliteit. Of je nu ervaren bent of nieuw, Spark vereenvoudigt je ontwikkeling voor prachtige astro websites.",
    "integration.title": "Integraties",
    "integration.description": "Klik op een kaart hieronder om de documentatie van de integratie te openen.",
    "faq.title": "Veelgestelde vragen",
    "faq.why": "Waarom heb je deze template gemaakt?",
    "faq.who": "Wie heeft deze template gemaakt?",
    "faq.tech": "Wat heb je gebruikt om deze template te maken?",
    "faq.reason_why": "Ik heb deze template gemaakt omdat ik meer wilde leren over Astro.",
    "faq.reason_who": "Deze template is volledig gemaakt door mij, Ruben Winant",
    "faq.reason_tech": "Ik heb Astro, Alpine.js, mdx, sitemap, tailwind, vercel en mailersend gebruikt",
    "faq.description": "Dit is de FAQ-pagina",
    "nav.components": "componenten",
    "nav.faq": "faq",
    "nav.contact": "contact",
    "nav.blog": "blog",
    "footer.copyright": "Spark Thema. Alle rechten voorbehouden. Dit project is onafhankelijk van en wordt niet onderschreven of gesponsord door Astro of Tailwind Labs.",
    "footer.createdBy": "Gemaakt door",
    "footer.createdBy2": "met Astro en Tailwind vanuit het mooie Bierbeek, België.",
    "faq.contact": "Kon je niet vinden wat je zoekt?",
    "faq.contactUs": "Contacteer ons!",
    "contact.title": "Contact",
    "contact.field_name": "Naam",
    "contact.field_topic": "Onderwerp",
    "contact.field_email": "Email",
    "contact.field_message": "Bericht",
    "contact.topic_Inquiry": "Vraag",
    "contact.topic_Feedback": "Feedback",
    "contact.topic_Other": "Overig",
    "contact.submit": "Verzenden",
    "contact.description": "Een eenvoudige contactpagina die gebruik maakt van plain astro en MailerSendom mails te versturen via hun api.",
    "contact.error_name": "Voer een geldige naam in.",
    "contact.error_message": "Voer een geldig bericht in.",
    "contact.error_email": "Voer een geldig e-mailadres in.",
    "contact.error_topic": "Selecteer een geldig onderwerp.",
    "contact.success": "E-mail is succesvol verzonden",
    "contact.error_general": "Er ging iets mis, probeer het later nog eens",
    "features.title": "Kenmerken",
    "slider.title": "Alles wat je nodig hebt om aan de slag te gaan",
    "slider.card_1_title": "Nul JavaScript, standaard",
    "slider.card_1_description": "Astro levert alleen de JavaScript die je nodig hebt en stript de rest automatisch weg voor een snellere website.",
    "slider.card_2_title": "Interactief wanneer nodig",
    "slider.card_2_description": "Alpine is een robuuste, minimale tool voor het samenstellen van gedrag direct in je markup. Zie het als jQuery voor het moderne web.",
    "slider.card_3_title": "Ondersteuning voor meerdere talen.",
    "slider.card_3_description": "Ondersteuning voor meerdere talen direct uit de doos met behulp van Astro's ingebouwde i18n-mogelijkheden, waardoor uw inhoud toegankelijk wordt voor een breder publiek.",
    "slider.card_4_title": "Stijl met Tailwind CSS",
    "slider.card_4_description": "Style uw website direct in uw HTML met utility-first CSS-klassen, waardoor ontwerpen een koud kunstje wordt.",
    "slider.card_5_title": "SEO geoptimaliseerd",
    "slider.card_5_description": "Astro's sitemap-integratie helpt zoekmachines uw inhoud te ontdekken, waardoor de SEO van uw site moeiteloos wordt verbeterd.",
    "components.description": "Hier vindt u een verzameling elementen, pictogrammen en dergelijke die door dit thema worden geleverd.",
    "test.title": "Voorbeeldkaart",
    "test.description": "Dit is een tijdelijke kaart om de basisstructuur en functionaliteit van een element te demonstreren. U kunt de inhoud en het ontwerp aanpassen aan uw specifieke behoeften.",
    "test.iconTitle": "Pictogrammen",
    "test.iconDescription": "Houd de muiscursor boven elk pictogram om de naam te zien. Alle pictogrammen zijn svg-bestanden in de map public/icons.",
    "test.dropdownCardTitle": "Dropdown-kaarten",
    "test.dropdownCardDescription": "Aangedreven door alpine.js",
    "test.fullWidthBannerTitle": "Banner op volledige breedte",
    "test.fullWidthBannerDescription": "Een banner op volledige breedte met een optionele call-to-action-knop",
    "test.button": "Klik hier",
    "test.autoSliderTitle": "Automatische schuifregelaar met tekstkaarten",
    "test.autoSliderDescription": "Een automatische schuifregelaar zonder JavaScript, alleen met CSS, waarbij u de animatie kunt pauzeren door met de muis over een kaart te gaan. Een optionele titel en beschrijving kunnen ook worden opgegeven.",
    "test.containersTitle": "Containers",
    "test.cardGridDescription": "De CardGrid-component biedt een flexibele indeling van de inhoud. Voeg inhoud toe via de 'upper-row' of 'lower-row'-slot, en de component zal deze automatisch in kolommen verdelen.",
    "test.cardGridTitle": "Wat is inbegrepen",
    "test.cardGridTitle1": "Contactpagina",
    "test.cardGridDescription1": "Verzamel leads en blijf verbonden met een gebruiksvriendelijk contactformulier, aangedreven door mailersend.",
    "test.cardGridTitle2": "Klaar-om-te-gaan blog",
    "test.cardGridDescription2": "Begin met bloggen met behulp van de I18N-compatibele, MDX-aangedreven blog!",
    "test.cardGridTitle3": "Eenvoudige installatie",
    "test.cardGridDescription3": "Kom snel aan de slag met onze vooraf gemaakte pagina's en componenten.",
    "test.cardGridTitle4": "FAQ-pagina",
    "test.cardGridDescription4": "Mensen hebben misschien vragen, nu kunt u ze beantwoorden!",
    "test.cardGridTitle5": "Spreek hun taal",
    "test.cardGridDescription5": "I18N ingebouwd. Converteer meer!",
    "test.cardsTitle": "Kaarten",
    "test.cardsDescription": "Enkele van de vooraf gemaakte kaartcomponenten, enkele van t",
    "test.cardClass": "Deze CSS-klasse .card is ontworpen voor een flexibele, visueel aantrekkelijke kaartcomponent met verschillende stijlen en zweveffecten.",
    "test.iconCardDescription": "Een responsief, interactief lijst item (<li>) dat functioneert als een pictogramkaart met een afbeelding en titel, met behulp van Tailwind CSS voor styling."
  },
  fr: {
    "layout.test": "Spark",
    "hero.title": " le meilleur modèle de démarrage Astro minimal !",
    "hero.description": "Lancez vos projets astro avec facilité et style. Design minimaliste, fonctionnalité maximale. Que vous soyez expérimenté ou novice, Spark simplifie votre développement pour des sites web astro époustouflants.",
    "integration.title": "Intégrations",
    "integration.description": "Cliquez sur une carte ci-dessous pour ouvrir la documentation de l'intégration",
    "faq.title": "FAQ",
    "faq.why": "Pourquoi avez-vous créé ce modèle?",
    "faq.who": "Qui a créé ce modèle?",
    "faq.tech": "Qu'avez-vous utilisé pour créer ce modèle?",
    "faq.reason_why": "J'ai créé ce modèle car je voulais apprendre à utiliser Astro.",
    "faq.reason_who": "Ce modèle a été entièrement réalisé par moi-même, Ruben Winant",
    "faq.reason_tech": "J'ai utilisé Astro, Alpine.js, mdx, sitemap, tailwind, vercel et mailersend",
    "faq.description": "Ceci est la page des FAQ",
    "nav.components": "Composants",
    "nav.faq": "faq",
    "nav.contact": "contact",
    "nav.blog": "blog",
    "footer.copyright": "Spark Theme. Tous droits réservés. Ce projet est indépendant d'Astro ou de Tailwind Labs et n'est ni approuvé ni sponsorisé par eux.",
    "footer.createdBy": "Créé par",
    "footer.createdBy2": "avec Astro et Tailwind depuis le magnifique Bierbeek, en Belgique",
    "faq.contact": "Vous n'avez pas trouvé ce que vous cherchiez ?",
    "faq.contactUs": "Contactez-nous !",
    "contact.title": "Contact",
    "contact.field_name": "Name",
    "contact.field_topic": "Sujet",
    "contact.field_email": "Email",
    "contact.field_message": "Message",
    "contact.topic_Inquiry": "Enquête",
    "contact.topic_Feedback": "Feedback",
    "contact.topic_Other": "Autre",
    "contact.submit": "Envoyer",
    "contact.description": "Une simple page de contact utilisant astro et MailerSendpour envoyer des mails en utilisant leur api.",
    "contact.error_name": "Veuillez entrer un nom valide",
    "contact.error_message": "Veuillez saisir un message valide.",
    "contact.error_email": "Veuillez saisir une adresse électronique valide.",
    "contact.error_topic": "Veuillez sélectionner un sujet valide",
    "contact.success": "L'e-mail a été envoyé avec succès",
    "contact.error_general": "Quelque chose s'est mal passé, réessayez plus tard",
    "features.title": "Features",
    "slider.title": "Tout ce dont vous avez besoin pour commencer",
    "slider.card_1_title": "Zéro JavaScript, par défaut",
    "slider.card_1_description": "Astro ne fournit que le JavaScript dont vous avez besoin et supprime automatiquement le reste pour un site web plus rapide.",
    "slider.card_2_title": "Interactive when needed",
    "slider.card_2_description": "Alpine est un outil robuste et minimal pour composer des comportements directement dans votre balisage. Voyez-le comme jQuery pour le web moderne.",
    "slider.card_3_title": "Multi-language Support",
    "slider.card_3_description": "Prise en charge multilingue dès la sortie de la boîte grâce aux capacités i18n intégrées d'Astro, ce qui rend votre contenu accessible à un public plus large.",
    "slider.card_4_title": "Style with Tailwind CSS",
    "slider.card_4_description": "Stylez votre site web directement dans votre HTML avec des classes CSS utilitaires, ce qui facilite la conception.",
    "slider.card_5_title": "SEO optimized",
    "slider.card_5_description": "L'intégration du sitemap d'Astro aide les moteurs de recherche à découvrir votre contenu, améliorant ainsi sans effort le référencement de votre site.",
    "components.description": "Vous trouverez ici une collection d'éléments, d'icônes et autres qui sont fournis par ce thème.",
    "test.title": "Sample Card",
    "test.description": "This is a placeholder card to demonstrate the basic structure and functionality of an element. You can customize the content and design to suit your specific needs.",
    "test.iconTitle": "Icônes",
    "test.iconDescription": "Survolez chaque icône pour voir son nom. Toutes les icônes sont des fichiers svg dans le répertoire public/icons.",
    "test.dropdownCardTitle": "Cartes déroulantes",
    "test.dropdownCardDescription": "Alimenté par alpine.js",
    "test.fullWidthBannerTitle": "Bannière pleine largeur",
    "test.fullWidthBannerDescription": "Une bannière pleine largeur avec un bouton d'appel à l'action optionnel",
    "test.button": "Cliquez ici",
    "test.autoSliderTitle": "Curseur automatique avec cartes de texte",
    "test.autoSliderDescription": "Un curseur automatique sans JavaScript, uniquement avec CSS, où vous pouvez mettre en pause l'animation en survolant une carte. Un titre et une description facultatifs peuvent également être fournis.",
    "test.containersTitle": "Conteneurs",
    "test.cardGridDescription": "Le composant CardGrid permet une disposition flexible du contenu. Fournissez du contenu via le slot 'upper-row' ou 'lower-row', et le composant le distribuera automatiquement en colonnes.",
    "test.cardGridTitle": "Ce qui est inclus",
    "test.cardGridTitle1": "Page de contact",
    "test.cardGridDescription1": "Capturez des leads et restez connecté avec un formulaire de contact convivial, alimenté par mailersend.",
    "test.cardGridTitle2": "Blog prêt à l'emploi",
    "test.cardGridDescription2": "Commencez à bloguer en utilisant le blog compatible I18N, alimenté par MDX !",
    "test.cardGridTitle3": "Installation facile",
    "test.cardGridDescription3": "Soyez opérationnel rapidement en utilisant nos pages et composants pré-faits.",
    "test.cardGridTitle4": "Page FAQ",
    "test.cardGridDescription4": "Les gens peuvent avoir des questions, maintenant vous pouvez y répondre !",
    "test.cardGridTitle5": "Parlez leur langue",
    "test.cardGridDescription5": "I18N intégré. Convertissez plus !",
    "test.cardsTitle": "Cartes",
    "test.cardsDescription": "Quelques-uns des composants de carte pré-faits, quelques-uns de t",
    "test.cardClass": "Cette classe CSS .card est conçue pour un composant de carte flexible et visuellement attrayant avec différents styles et effets de survol.",
    "test.iconCardDescription": "Un élément de liste (<li>) réactif et interactif qui fonctionne comme une carte d'icône avec une image et un titre, en utilisant Tailwind CSS pour le style."
  }
};

const DEFAULT_LOCALE = "nl";
const LOCALES = {
  en: "en-US",
  nl: "be-nl",
  fr: "be-fr"
};
function getLangFromUrl(url) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang;
  return DEFAULT_LOCALE;
}
function useTranslations(lang) {
  return function t(key, ...args) {
    let translation = ui[lang ?? DEFAULT_LOCALE][key] || ui[DEFAULT_LOCALE][key];
    if (args.length > 0) {
      for (let i = 0; i < args.length; i++) {
        translation = translation.replace(`{${i}}`, args[i]);
      }
    }
    return translation;
  };
}
function pathNameIsInLanguage(pathname, lang) {
  return pathname.startsWith(`/${lang}`) || !pathNameStartsWithLanguage(pathname);
}
function pathNameStartsWithLanguage(pathname) {
  const languages = Object.keys(ui);
  for (let i = 0; i < languages.length; i++) {
    const lang = languages[i];
    if (pathname.startsWith(`/${lang}`)) {
      return true;
    }
  }
  return false;
}
function getLocalizedPathname(pathname, lang) {
  if (pathNameStartsWithLanguage(pathname)) {
    const availableLanguages = Object.keys(ui).join("|");
    const regex = new RegExp(`^/(${availableLanguages})`);
    return pathname.replace(regex, `/${lang}`);
  }
  return `/${lang}${pathname}`;
}

const $$Astro$4 = createAstro("https://banta-technologies.github.io/bantatechnologies-dev.github.io/");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalPathname = pathNameIsInLanguage(
    Astro2.url.pathname,
    DEFAULT_LOCALE
  ) ? Astro2.url.pathname : getLocalizedPathname(Astro2.url.pathname, DEFAULT_LOCALE);
  const canonicalURL = new URL(canonicalPathname, Astro2.site);
  const { title, description, image = "/favicon.svg" } = Astro2.props;
  const alternateLang = Object.keys(LOCALES);
  const alternateLinks = alternateLang.map((lang) => {
    return {
      href: new URL(getLocalizedPathname(Astro2.url.pathname, lang), Astro2.site),
      hreflang: lang
    };
  });
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><link rel="sitemap" href="/sitemap-index.xml"><!-- Font preloads --><link rel="preload" href="/fonts/Raleway.ttf" as="font" type="font/ttf" crossorigin="anonymous"><link rel="preload" href="/fonts/Raleway-Italic.ttf" as="font" type="font/ttf" crossorigin="anonymous"><link rel="preload" href="/fonts/OpenSans.ttf" as="font" type="font/ttf" crossorigin="anonymous"><link rel="preload" href="/fonts/OpenSans-Italic.ttf" as="font" type="font/ttf" crossorigin="anonymous"><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Alternate URLs -->${alternateLinks.map(({ href, hreflang }) => renderTemplate`<link rel="alternate"${addAttribute(href, "href")}${addAttribute(hreflang, "hreflang")}>`)}<!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image, Astro2.url), "content")}>`;
}, "/home/vicb/aws/bantatechnologies-dev.github.io/src/components/BaseHead.astro", void 0);

const $$Astro$3 = createAstro("https://banta-technologies.github.io/bantatechnologies-dev.github.io/");
const $$LangSwitch = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LangSwitch;
  const { pathname } = Astro2.url;
  const lang = Astro2.params?.lang || "nl";
  return renderTemplate`${maybeRenderHead()}<ul class="flex gap-1 w-min"> ${Object.keys(LOCALES).map((key) => renderTemplate`<li class="flex items-center text-white hover:fancy"> ${lang === key ? renderTemplate`<span class="fancy p-2 font-semibold text-sm">${key}</span>` : renderTemplate`<a class="p-2 text-sm"${addAttribute(getLocalizedPathname(pathname, key), "href")}> ${key} </a>`} </li>`)} </ul>`;
}, "/home/vicb/aws/bantatechnologies-dev.github.io/src/components/LangSwitch.astro", void 0);

const $$Astro$2 = createAstro("https://banta-technologies.github.io/bantatechnologies-dev.github.io/");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray py-4"> <div class="container"> <div class="flex justify-between items-center"> <a data-astro-prefetch${addAttribute(`/${lang}/`, "href")} class="flex gap-1 font-semibold text-white"><img src="/favicon.svg" alt="spark logo" width="20" height="20" loading="eager">Spark</a> ${renderComponent($$result, "LangSwitch", $$LangSwitch, {})} </div> <small class="text-white">
&copy; ${t("footer.copyright", (/* @__PURE__ */ new Date()).getFullYear())} ${t("footer.createdBy")} <b><a href="https://www.rubenwinant.be" target="_blank" class="link">Ruben Winant</a></b> ${t("footer.createdBy2")} </small> </div> </footer>`;
}, "/home/vicb/aws/bantatechnologies-dev.github.io/src/components/Footer.astro", void 0);

const $$Astro$1 = createAstro("https://banta-technologies.github.io/bantatechnologies-dev.github.io/");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navigation;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${maybeRenderHead()}<nav class="container my-4 relative bg-white z-[100]" x-data="{ expanded: false }"> <ul class="flex items-center justify-center gap-4 w-full z-10"> <li class="mr-auto"> <a data-astro-prefetch${addAttribute(`/${lang}/`, "href")} class="flex gap-1 font-semibold"><img src="/favicon.svg" alt="spark logo" width="20" height="20">Spark</a> </li> <li class="hidden md:block"> <a data-astro-prefetch class="link"${addAttribute(`/${lang}/blog/`, "href")}>${t("nav.blog")}</a> </li> <li class="hidden md:block"> <a data-astro-prefetch class="link"${addAttribute(`/${lang}/components/`, "href")}>${t("nav.components")}</a> </li> <li class="hidden md:block"> <a data-astro-prefetch class="link"${addAttribute(`/${lang}/faq/`, "href")}>${t("nav.faq")}</a> </li> <li class="hidden md:block"> <a data-astro-prefetch class="link"${addAttribute(`/${lang}/contact/`, "href")}>${t("nav.contact")}</a> </li> <li class="flex md:hidden"> <button title="menu" type="button" class="w-8 my-auto" @click="expanded = !expanded"> <svg class="hb" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10" stroke="#000" stroke-width=".6" fill="rgba(0,0,0,0)" stroke-linecap="round" style="cursor: pointer"> <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"> <animate dur="0.2s" attributeName="d" values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7" fill="freeze" begin="start.begin"></animate> <animate dur="0.2s" attributeName="d" values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7" fill="freeze" begin="reverse.begin"></animate> </path> <rect width="10" height="10" stroke="none"> <animate dur="2s" id="reverse" attributeName="width" begin="click"></animate> </rect> <rect width="10" height="10" stroke="none"> <animate dur="0.001s" id="start" attributeName="width" values="10;0" fill="freeze" begin="click"></animate> <animate dur="0.001s" attributeName="width" values="0;10" fill="freeze" begin="reverse.begin"></animate> </rect> </svg> </button> </li> </ul> <ul x-show="expanded" x-cloak x-collapse class="transition-all flex flex-col justify-center items-center gap-2 pt-2 pb-4 drop-shadow-md bg-white absolute -left-4 -right-4 md:hidden"> <li class="flex w-full"> <a data-astro-prefetch class="link py-2 mx-auto w-full text-center"${addAttribute(`/${lang}/blog/`, "href")}>${t("nav.blog")}</a> </li> <li class="flex w-full"> <a data-astro-prefetch class="link py-2 mx-auto w-full text-center"${addAttribute(`/${lang}/components/`, "href")}>${t("nav.components")}</a> </li> <li class="flex w-full"> <a data-astro-prefetch class="link py-2 mx-auto w-full text-center"${addAttribute(`/${lang}/faq/`, "href")}>${t("nav.faq")}</a> </li> <li class="flex w-full"> <a data-astro-prefetch class="link py-2 mx-auto w-full text-center"${addAttribute(`/${lang}/contact/`, "href")}>${t("nav.contact")}</a> </li> </ul> </nav>`;
}, "/home/vicb/aws/bantatechnologies-dev.github.io/src/components/Navigation.astro", void 0);

const $$Astro = createAstro("https://banta-technologies.github.io/bantatechnologies-dev.github.io/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, lang, description } = Astro2.props;
  return renderTemplate`<html${addAttribute(lang, "lang")}> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <header> ${renderComponent($$result, "Navigation", $$Navigation, {})} </header> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})}  </html>`;
}, "/home/vicb/aws/bantatechnologies-dev.github.io/src/layouts/Layout.astro", void 0);

export { $$Layout as $, DEFAULT_LOCALE as D, LOCALES as L, getLangFromUrl as g, useTranslations as u };
