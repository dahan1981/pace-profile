const RECIPIENTS = ["ilaccoaching@gmail.com", "equipejoaodahan@gmail.com"];

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailHtml(payload) {
  const labels =
    payload.type === "empresa"
      ? {
          type: "Lead empresarial",
          context: "Empresa",
          role: "Cargo",
          extra: "Número de funcionários",
          need: "Principal necessidade",
        }
      : {
          type: "Lead individual",
          context: "Cidade e estado",
          role: "Profissão / área",
          extra: "Programa de interesse",
          need: "Objetivo principal",
        };

  return `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
      <h1 style="font-size: 20px; margin-bottom: 16px;">Novo formulário recebido</h1>
      <p style="margin-bottom: 20px;">${escapeHtml(labels.type)}</p>
      <table style="border-collapse: collapse; width: 100%;">
        <tbody>
          <tr><td style="padding: 8px 0; font-weight: 700;">Nome</td><td style="padding: 8px 0;">${escapeHtml(payload.name)}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 700;">E-mail</td><td style="padding: 8px 0;">${escapeHtml(payload.email)}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 700;">Telefone</td><td style="padding: 8px 0;">${escapeHtml(payload.phone)}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 700;">${escapeHtml(labels.context)}</td><td style="padding: 8px 0;">${escapeHtml(payload.context)}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 700;">${escapeHtml(labels.role)}</td><td style="padding: 8px 0;">${escapeHtml(payload.role)}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 700;">${escapeHtml(labels.extra)}</td><td style="padding: 8px 0;">${escapeHtml(payload.extra)}</td></tr>
          <tr><td style="padding: 8px 0; font-weight: 700; vertical-align: top;">${escapeHtml(labels.need)}</td><td style="padding: 8px 0;">${escapeHtml(payload.need)}</td></tr>
        </tbody>
      </table>
    </div>
  `;
}

async function sendViaResend(payload) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL;

  if (!apiKey || !fromEmail) {
    throw new Error("Configuração de e-mail incompleta no servidor.");
  }

  const subjectPrefix = payload.type === "empresa" ? "Lead empresarial" : "Lead individual";

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: RECIPIENTS,
      reply_to: payload.email,
      subject: `${subjectPrefix}: ${payload.name}`,
      html: buildEmailHtml(payload),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Falha no envio do e-mail. ${errorText}`);
  }
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido." });
  }

  const { type, name, email, phone, context = "", role = "", extra = "", need = "" } = req.body ?? {};

  if (!name || !email || !phone || (type !== "empresa" && type !== "individual")) {
    return res.status(400).json({ error: "Dados obrigatórios ausentes no formulário." });
  }

  try {
    await sendViaResend({ type, name, email, phone, context, role, extra, need });
    return res.status(200).json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Não foi possível enviar o e-mail do formulário.";
    return res.status(500).json({ error: message });
  }
}
