import { Resend } from "resend";
import type { ContactFormData } from "../shared/types.js";

const projectTypeLabels: Record<string, string> = {
  "desarrollo-inmobiliario": "Desarrollo Inmobiliario",
  "gestion-proyecto": "Gestión de Proyecto",
  arquitectura: "Arquitectura",
  inversion: "Inversión",
  otro: "Otro",
};

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

const fromEmail = process.env.RESEND_FROM_EMAIL || "TRIACORP <contacto@triacorp.cl>";
const contactRecipient = process.env.CONTACT_RECIPIENT_EMAIL || "contacto@triacorp.cl";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildPlainTextEmail(input: ContactFormData) {
  const phoneLine = input.phone?.trim() ? input.phone : "No informado";

  return [
    "Nueva consulta TRIACORP",
    "",
    `Nombre: ${input.name}`,
    `Email: ${input.email}`,
    `Teléfono: ${phoneLine}`,
    `Tipo de proyecto: ${projectTypeLabels[input.projectType] ?? input.projectType}`,
    "",
    "Mensaje:",
    input.message,
  ].join("\n");
}

function buildHtmlEmail(input: ContactFormData) {
  const phoneLine = input.phone?.trim() ? input.phone : "No informado";

  return `
    <div style="font-family: Arial, sans-serif; color: #1d1d1b; line-height: 1.6;">
      <h1 style="font-size: 20px; margin-bottom: 16px;">Nueva consulta TRIACORP</h1>
      <p><strong>Nombre:</strong> ${escapeHtml(input.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
      <p><strong>Teléfono:</strong> ${escapeHtml(phoneLine)}</p>
      <p><strong>Tipo de proyecto:</strong> ${escapeHtml(projectTypeLabels[input.projectType] ?? input.projectType)}</p>
      <p style="margin-top: 24px;"><strong>Mensaje:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(input.message)}</p>
    </div>
  `;
}

export async function sendContactEmail(input: ContactFormData) {
  if (!resend) {
    throw new Error("Missing RESEND_API_KEY");
  }

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [contactRecipient],
    replyTo: input.email,
    subject: `Nueva consulta TRIACORP - ${input.name}`,
    text: buildPlainTextEmail(input),
    html: buildHtmlEmail(input),
  });

  if (error) {
    throw new Error(error.message);
  }
}
