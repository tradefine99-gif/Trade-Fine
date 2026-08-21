// supabase/functions/send-quote-emails/index.ts
//
// Triggered by the React app (via supabase.functions.invoke) right after
// a "Request a Quote" lead is successfully inserted into `leads`. This
// function re-fetches the lead itself using the service_role key (so it
// never trusts whatever the client claims the lead contains), sends the
// owner-notification and customer-confirmation emails through Resend,
// and writes the outcome back onto the lead row.
//
// SECRETS THIS FUNCTION EXPECTS (set via `supabase secrets set`, never
// committed, never exposed to the browser):
//   RESEND_API_KEY   — your Resend API key
//   OWNER_EMAIL      — where the "New Quote Request" notification goes
//   FROM_EMAIL       — the Resend-verified sender address to send from
//
// SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are injected automatically
// by the Supabase Edge Runtime for every function — they do not need to
// be set manually and are never exposed to the frontend.

import { createClient } from "npm:@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const OWNER_EMAIL = Deno.env.get("OWNER_EMAIL");
const FROM_EMAIL = Deno.env.get("FROM_EMAIL");
const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
}

function escapeHtml(value: unknown): string {
  const str = value === null || value === undefined ? "" : String(value);
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function fmtDate(iso: string): string {
  try {
    return new Date(iso).toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "UTC",
    }) + " UTC";
  } catch {
    return iso;
  }
}

// Row of the owner email's "Customer Information" / "Quote Requirements" tables.
function row(label: string, value: unknown) {
  const v = escapeHtml(value);
  if (!v) return "";
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid #1f2733;color:#8b95a5;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;width:170px;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:10px 0;border-bottom:1px solid #1f2733;color:#f4f5f7;font-size:15px;vertical-align:top;">${v}</td>
    </tr>`;
}

function ownerEmailHtml(lead: Record<string, unknown>, dashboardUrl: string | null) {
  const rows = [
    row("Name", lead.contact_person),
    row("Company", lead.company_name),
    row("Email", lead.email),
    row("Country", lead.country),
  ].join("");

  const reqRows = [
    row("Category", lead.category),
    row("Quantity", lead.quantity),
    row("Message", lead.message),
  ].join("");

  const metaRows = [
    row("Lead ID", lead.id),
    row("Submitted", fmtDate(String(lead.created_at))),
    row("Source", lead.source),
  ].join("");

  const cta = dashboardUrl
    ? `
    <tr>
      <td style="padding:32px 0 8px;text-align:center;">
        <a href="${escapeHtml(dashboardUrl)}" style="display:inline-block;background:linear-gradient(90deg,#ea580c,#fb923c);color:#0a0e14;font-weight:800;font-size:13px;letter-spacing:.08em;text-transform:uppercase;text-decoration:none;padding:16px 32px;border-radius:10px;">
          View Lead In Supabase
        </a>
      </td>
    </tr>`
    : "";

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#05070c;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#05070c;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0b0f18;border:1px solid #1f2733;border-radius:20px;overflow:hidden;">
            <tr>
              <td style="background:#080D16;padding:32px 36px 24px;border-bottom:1px solid #1f2733;">
                <div style="color:#f97316;font-size:12px;font-weight:800;letter-spacing:.25em;text-transform:uppercase;margin-bottom:6px;">TradeFine Sportswear</div>
                <div style="color:#ffffff;font-size:24px;font-weight:900;letter-spacing:-.01em;text-transform:uppercase;">New Quote Request</div>
              </td>
            </tr>
            <tr>
              <td style="padding:32px 36px 8px;">
                <div style="color:#f97316;font-size:11px;font-weight:800;letter-spacing:.15em;text-transform:uppercase;margin-bottom:12px;">Customer Information</div>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows}</table>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 36px 8px;">
                <div style="color:#f97316;font-size:11px;font-weight:800;letter-spacing:.15em;text-transform:uppercase;margin-bottom:12px;">Quote Requirements</div>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${reqRows}</table>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 36px 8px;">
                <div style="color:#f97316;font-size:11px;font-weight:800;letter-spacing:.15em;text-transform:uppercase;margin-bottom:12px;">Submission Information</div>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">${metaRows}</table>
              </td>
            </tr>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr><td style="padding:0 36px;">${cta}</td></tr></table>
            <tr>
              <td style="padding:28px 36px 32px;text-align:center;">
                <div style="color:#4b5563;font-size:11px;letter-spacing:.05em;">Automated notification from tradefinesportswear.com</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function customerEmailHtml(lead: Record<string, unknown>) {
  const name = escapeHtml(lead.contact_person || "there");
  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#f4f5f7;font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;">
            <tr>
              <td style="background:#080D16;padding:28px 36px;">
                <div style="color:#f97316;font-size:12px;font-weight:800;letter-spacing:.25em;text-transform:uppercase;">TradeFine Sportswear</div>
                <div style="color:#ffffff;font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;margin-top:4px;">OEM &amp; ODM Sportswear Manufacturing</div>
              </td>
            </tr>
            <tr>
              <td style="padding:36px;">
                <p style="margin:0 0 16px;color:#111827;font-size:16px;">Hello ${name},</p>
                <p style="margin:0 0 16px;color:#374151;font-size:15px;line-height:1.6;">
                  Thank you for contacting TradeFine Sportswear. We have successfully received
                  your quote request and our team will review your requirements.
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f9fafb;border-radius:10px;margin:20px 0;">
                  <tr><td style="padding:18px 20px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      ${row("Product / Category", lead.category)}
                      ${row("Quantity", lead.quantity)}
                      ${row("Company", lead.company_name)}
                      ${row("Reference ID", lead.id)}
                    </table>
                  </td></tr>
                </table>
                <p style="margin:0 0 16px;color:#374151;font-size:15px;line-height:1.6;">
                  Our team will contact you shortly regarding pricing, customization, materials,
                  MOQ, production requirements and next steps.
                </p>
                <p style="margin:0 0 4px;color:#374151;font-size:15px;line-height:1.6;">
                  For faster communication, you may also reach us on WhatsApp at
                  <a href="https://wa.me/923316131936" style="color:#ea580c;text-decoration:none;font-weight:700;">+92 331 6131936</a>.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 36px 28px;border-top:1px solid #e5e7eb;">
                <div style="color:#111827;font-size:13px;font-weight:800;letter-spacing:.05em;">TradeFine Sportswear</div>
                <div style="color:#6b7280;font-size:12px;margin-top:2px;">OEM &amp; ODM Sportswear Manufacturing</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

async function sendViaResend(to: string, subject: string, html: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ from: FROM_EMAIL, to, subject, html }),
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Resend ${res.status}: ${text.slice(0, 300)}`);
  }
  return res.json();
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: CORS_HEADERS });
  }
  if (req.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  if (!RESEND_API_KEY || !OWNER_EMAIL || !FROM_EMAIL) {
    console.error("send-quote-emails: missing RESEND_API_KEY, OWNER_EMAIL, or FROM_EMAIL secret");
    return json({ error: "Email service is not configured" }, 500);
  }
  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
    console.error("send-quote-emails: missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
    return json({ error: "Server misconfiguration" }, 500);
  }

  let leadId: string | undefined;
  try {
    const body = await req.json();
    leadId = body?.leadId;
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (!leadId || !uuidPattern.test(leadId)) {
    return json({ error: "A valid leadId is required" }, 400);
  }

  // Service-role client: bypasses RLS. Only ever used server-side, inside
  // this function — the key backing it is never sent to the browser.
  const admin = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  });

  // Re-fetch the lead ourselves rather than trusting a payload from the
  // client — this guarantees the email always reflects what's actually
  // in the database, and that this endpoint can't be used to fire an
  // email for data that was never really stored.
  const { data: lead, error: fetchError } = await admin
    .from("leads")
    .select("*")
    .eq("id", leadId)
    .eq("source", "quote")
    .single();

  if (fetchError || !lead) {
    console.error("send-quote-emails: lead not found", leadId, fetchError);
    return json({ error: "Lead not found" }, 404);
  }

  // Idempotency: if a previous invocation (retry, double-click, etc.)
  // already got both emails out, don't send them again.
  if (lead.email_notification_status === "sent" && lead.customer_email_status === "sent") {
    return json({ alreadySent: true });
  }

  let projectRef = "";
  try {
    projectRef = new URL(SUPABASE_URL).hostname.split(".")[0];
  } catch {
    // leave blank — CTA button is simply omitted below
  }

  // Deep-link straight to this row in Table Editor rather than just the
  // editor's home page. Studio's row-filter URLs need the table's
  // internal Postgres OID (not its name), which isn't available via
  // the REST API — get_table_oid() reads it directly from Postgres.
  // If this lookup fails for any reason (e.g. the migration hasn't
  // been run yet), we fall back to linking at the table itself, then
  // to the editor's home page — the email still sends either way.
  let dashboardUrl: string | null = null;
  if (projectRef) {
    dashboardUrl = `https://supabase.com/dashboard/project/${projectRef}/editor`;
    try {
      const { data: tableId, error: oidError } = await admin.rpc("get_table_oid", {
        table_name: "leads",
      });
      if (!oidError && tableId) {
        dashboardUrl = `https://supabase.com/dashboard/project/${projectRef}/editor/${tableId}?schema=public&filter=id:eq:${leadId}`;
      } else if (oidError) {
        console.error("send-quote-emails: get_table_oid lookup failed, falling back to editor home", oidError);
      }
    } catch (err) {
      console.error("send-quote-emails: get_table_oid RPC threw, falling back to editor home", err);
    }
  }

  const errors: string[] = [];
  let ownerSent = lead.email_notification_status === "sent";
  let customerSent = lead.customer_email_status === "sent";

  if (!ownerSent) {
    try {
      const categoryLabel = lead.category ? ` — ${lead.category}` : "";
      await sendViaResend(
        OWNER_EMAIL,
        `New Quote Request — TradeFine Sportswear${categoryLabel}`,
        ownerEmailHtml(lead, dashboardUrl)
      );
      ownerSent = true;
    } catch (err) {
      console.error("send-quote-emails: owner email failed", err);
      errors.push(`owner: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  if (!customerSent) {
    try {
      await sendViaResend(
        String(lead.email),
        "We Received Your Quote Request — TradeFine Sportswear",
        customerEmailHtml(lead)
      );
      customerSent = true;
    } catch (err) {
      console.error("send-quote-emails: customer email failed", err);
      errors.push(`customer: ${err instanceof Error ? err.message : String(err)}`);
    }
  }

  const { error: updateError } = await admin
    .from("leads")
    .update({
      email_notification_status: ownerSent ? "sent" : "failed",
      customer_email_status: customerSent ? "sent" : "failed",
      notification_error: errors.length ? errors.join(" | ").slice(0, 1000) : null,
    })
    .eq("id", leadId);

  if (updateError) {
    console.error("send-quote-emails: failed to persist notification status", updateError);
  }

  return json({ ownerEmailSent: ownerSent, customerEmailSent: customerSent, errors });
});
