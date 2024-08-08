import type { InitialValuesT } from "../form";
import emailjs from "@emailjs/browser";

export async function sendMail(values: InitialValuesT) {
  const serviceId = import.meta.env.PUBLIC_SERVICE_ID;
  const templateId = import.meta.env.PUBLIC_TEMPLATE_ID;
  const publicKey = import.meta.env.PUBLIC_EMAIL_PUBLIC_KEY;

  const result = await emailjs.send(
    serviceId,
    templateId,
    { ...values, reply_to: values.email },
    publicKey,
  );

  return result;
}
