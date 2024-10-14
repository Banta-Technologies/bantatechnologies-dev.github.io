/* empty css                          */
import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, d as addAttribute } from './astro/server_tt9Fw2rQ.mjs';
import 'kleur/colors';
import { g as getLangFromUrl, $ as $$Layout, u as useTranslations } from './Layout_Cp-IUtjT.mjs';

const $$Astro = createAstro("https://banta-technologies.github.io/bantatechnologies-dev.github.io/");
const contactOptions = ["Inquiry", "Feedback", "Other"];
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const lang = getLangFromUrl(Astro2.url);
  const t = useTranslations(lang);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": t("layout.test"), "lang": lang }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto"> <section> <h1>${t("contact.title")}</h1> <p>${t("contact.description")}</p> <form class="grid gap-4"${addAttribute(`{
          success: false,
          errors: {
            name: [],
            topic: [],
            email: [],
            message: [],
            general: [],
          },
          async submitForm(e) {
            const formData = new FormData(e.target);
            const response = await fetch("/api/contactFormSubmit", {
              method: "POST",
              body: formData,
            });
            const data = await response.json();
            
            if (data.succes) {
              this.success = true;
            } else {
              console.log(data)  
              this.errors.name = data.name;
              this.errors.topic = data.topic;
              this.errors.email = data.email;
              this.errors.message = data.message;
              this.errors.general = data.general;
            }
          },
        }`, "x-data")} @submit.prevent="submitForm($event)"> <input type="hidden" name="lang"${addAttribute(lang, "value")}> <div class="flex flex-col md:flex-row justify-between gap-4"> <!-- Name --> <div class="flex flex-col gap-2 w-full"> <label class="flex flex-col gap-2">${t("contact.field_name")} <input type="text" name="name" required${addAttribute(t("contact.field_name"), "placeholder")}> </label> <span x-cloak class="text-negative" x-text="errors.name"></span> </div> <!-- Purpose --> <div class="flex flex-col gap-2 w-full"> <label class="flex flex-col gap-2 w-full">${t("contact.field_topic")} <select required name="topic"> ${contactOptions.map((option) => {
    let translationString = "contact.topic_" + option;
    return renderTemplate`<option${addAttribute(option, "value")}>${t(translationString)}</option>`;
  })} </select> </label> <span x-cloak class="text-negative" x-text="errors.topic"></span> </div> </div> <!-- Email --> <div class="flex flex-col gap-2 w-full"> <label class="flex flex-col gap-2">${t("contact.field_email")} <input type="email" name="email" required${addAttribute(t("contact.field_email"), "placeholder")}> </label> <span x-cloak class="text-negative" x-text="errors.mail"></span> </div> <!-- Message --> <div class="flex flex-col gap-2 w-full"> <label class="flex flex-col gap-2">${t("contact.field_message")} <textarea name="message" rows="5" required${addAttribute(t("contact.field_message"), "placeholder")}></textarea> </label> <span x-cloak class="text-negative" x-text="errors.message"></span> </div> <span x-cloak x-show="errors.general.length > 0" class="bg-negative px-3 py-2 text-white" x-text="errors.general"></span> <span x-cloak x-show="success" class="bg-positive px-3 py-2 text-white"> ${t("contact.success")} </span> <div class="group w-fit mx-auto"> <button type="submit" class="btn-primary mx-auto"> ${t("contact.submit")} </button> </div> </form> </section> </main> ` })}`;
}, "/home/vicb/aws/bantatechnologies-dev.github.io/src/pages/[lang]/contact.astro", void 0);

const $$file = "/home/vicb/aws/bantatechnologies-dev.github.io/src/pages/[lang]/contact.astro";
const $$url = "/[lang]/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  contactOptions,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _, contactOptions as c };
