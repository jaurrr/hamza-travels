/**
 * Centralised business contact constants.
 * Change a number/email/UPI here once — it updates everywhere.
 */

/** Primary business WhatsApp / calling number (Hamza Travels). */
export const BUSINESS_PHONE = '919935212224';

/** Owner (Belal Shaikh) personal number — used only in "Talk To Owner" spots. */
export const OWNER_PHONE = '919682742861';

/** Business email address. */
export const BUSINESS_EMAIL = 'hamzatravel992@gmail.com';

/** Business UPI id for payments. */
export const UPI_ID = 'paytm.s2boq6c@pty';

/** Instagram profile URL. */
export const INSTAGRAM_URL = 'https://www.instagram.com/hamzatravel98/';

/** WhatsApp Channel URL. */
export const WHATSAPP_CHANNEL_URL =
  'https://whatsapp.com/channel/0029VbAvdHU9cDDUqacMmx0U';

/**
 * Build a wa.me link with a prefilled message.
 */
export function waLink(
  message: string,
  phone: string = BUSINESS_PHONE
): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Prefilled enquiry link for a specific service.
 */
export function waServiceEnquiry(
  serviceName: string,
  phone: string = BUSINESS_PHONE
): string {
  return waLink(
    `Hi Hamza Travels! I want to enquire about ${serviceName}.`,
    phone
  );
}

/** Generic "chat with us" link (floating button, footer, etc.). */
export function waGeneralEnquiry(
  phone: string = BUSINESS_PHONE
): string {
  return waLink(
    'Hi Hamza Travels! I want to know more about your services.',
    phone
  );
}

/** tel: link helper. */
export function telLink(phone: string = BUSINESS_PHONE): string {
  return `tel:+${phone}`;
}

/** UPI payment link helper. */
export function upiLink(amount?: string, note?: string): string {
  let link = `upi://pay?pa=${UPI_ID}&pn=Hamza%20Travels`;
  if (amount) {
    link += `&am=${encodeURIComponent(amount)}`;
  }
  if (note) {
    link += `&tn=${encodeURIComponent(note)}`;
  }
  return link;
}
