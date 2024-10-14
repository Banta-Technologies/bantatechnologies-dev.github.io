import { MailerSend, Sender, Recipient, EmailParams } from 'mailersend';
import { c as contactOptions } from '../../chunks/contact_By4s4w0i.mjs';
import { D as DEFAULT_LOCALE, u as useTranslations } from '../../chunks/Layout_Cp-IUtjT.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const topic = formData.get("topic");
  const message = formData.get("message");
  const lang = formData.get("lang") ?? DEFAULT_LOCALE;
  const t = useTranslations(lang);
  const EMAIL = "example@hotmail.com";
  const mailerSend = new MailerSend({
    apiKey: ""
  });
  const sentFrom = new Sender(
    "sender@hotmail.com",
    "Spark"
  );
  const recipients = [new Recipient(EMAIL, "Ruben Winant")];
  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let errors = {
    name: [],
    topic: [],
    email: [],
    message: [],
    general: []
  };
  if (!name || typeof name !== "string" || name.length < 1 || !nameRegex.test(name)) {
    errors.name.push(t("contact.error_name"));
  }
  if (!email || typeof email !== "string" || email.length < 1 || !emailRegex.test(email)) {
    errors.email.push(t("contact.error_email"));
  }
  if (!topic || typeof topic !== "string" || !contactOptions.includes(topic)) {
    errors.topic.push(t("contact.error_topic"));
  }
  if (!message || typeof message !== "string" || message.length < 1) {
    errors.message.push(t("contact.error_message"));
  }
  if (errors.email.length > 0 || errors.name.length > 0 || errors.message.length > 0 || errors.topic.length > 0) {
    return new Response(JSON.stringify(errors), { status: 400 });
  }
  const sanitizeInput = (input) => input.toString().replace(/<[^>]*>?/gm, "");
  const sanitizedData = {
    name: sanitizeInput(name),
    email: sanitizeInput(email),
    message: sanitizeInput(message),
    topic: sanitizeInput(topic)
  };
  const emailParams = new EmailParams().setFrom(sentFrom).setTo(recipients).setSubject(sanitizedData.topic).setTemplateId("insert template id").setVariables([
    {
      email: EMAIL,
      substitutions: [
        { var: "from", value: sanitizedData.name },
        { var: "fromEmail", value: sanitizedData.email },
        { var: "message", value: sanitizedData.message }
      ]
    }
  ]);
  try {
    const result = await mailerSend.email.send(emailParams);
    if (result.statusCode >= 200 && result.statusCode < 300) {
      return new Response(JSON.stringify({ success: true }), {
        status: result.statusCode
      });
    } else {
      return new Response(
        JSON.stringify({ message: t("contact.error_general") }),
        { status: 400 }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ message: t("contact.error_general") }),
      { status: 400 }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
