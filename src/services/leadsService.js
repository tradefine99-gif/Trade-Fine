import { supabase } from '../lib/supabase';

/**
 * Submits a lead (contact enquiry or quote request) to Supabase.
 * Returns { success: true } or { success: false, error: string }
 * so calling components can show a real failure state instead of
 * always assuming success.
 */
export async function submitLead({
  source,          // 'contact' | 'quote'
  companyName,
  contactPerson,
  email,
  country = '',
  category = '',
  quantity = '',
  message = '',
  website = '',     // honeypot field — see note below
}) {
  // Honeypot: a hidden field real users never fill in. If it has a
  // value, silently pretend success without writing to the DB.
  if (website) {
    return { success: true };
  }

  if (!companyName || !contactPerson || !email) {
    return { success: false, error: 'Please fill in your company name, contact person, and email.' };
  }

  // Generated client-side rather than read back via .select() after
  // insert: `leads` intentionally has no SELECT policy for `anon` (so
  // the public site can never read leads back), and Postgres requires
  // a row to satisfy the table's SELECT policy before it can be
  // returned via RETURNING — even for the row just inserted. Passing
  // an explicit id sidesteps that entirely and needs no RLS change.
  const leadId = crypto.randomUUID();

  const { error } = await supabase.from('leads').insert({
    id: leadId,
    source,
    company_name: companyName,
    contact_person: contactPerson,
    email,
    country,
    category,
    quantity,
    message,
  });

  if (error) {
    console.error('Lead submission failed:', error);
    return { success: false, error: 'Something went wrong sending your request. Please try again or reach us on WhatsApp.' };
  }

  // The lead is already safely stored at this point — everything below
  // is best-effort notification on top of that, not a condition of it.
  // Quote requests trigger the owner-notification + customer-confirmation
  // emails via a Supabase Edge Function (keeps the Resend API key
  // server-side). This is intentionally NOT awaited: the success UI
  // should appear as soon as the database write succeeds, exactly as
  // it did before email notifications existed. If sending fails —
  // Resend down, bad address, network blip — the lead itself is
  // unaffected; the Edge Function logs the failure and records it on
  // the lead row (email_notification_status / notification_error) so
  // it's visible in the dashboard instead of silently lost.
  if (source === 'quote') {
    supabase.functions
      .invoke('send-quote-emails', { body: { leadId } })
      .then(({ error: fnError }) => {
        if (fnError) {
          console.error('Quote notification emails failed to send:', fnError);
        }
      })
      .catch((fnError) => {
        console.error('Quote notification emails failed to send:', fnError);
      });
  }

  return { success: true };
}
