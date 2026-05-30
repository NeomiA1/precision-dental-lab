// Update SITE_URL to the real domain before going live.
export const SITE_URL = "https://precisionprosthetics.com";

export const SITE_NAME = "Precision Prosthetics Dental Lab";

export const CONTACT = {
  phone: "7542063006",
  phoneFormatted: "(754) 206-3006",
  phoneE164: "+17542063006",
  email: "",                        // add when available
  location: "Fort Lauderdale, Florida",
  city: "Fort Lauderdale",
  state: "FL",
  stateFullName: "Florida",
  country: "US",
  areaServed: "South Florida",
};

// ─── Contact channels ────────────────────────────────────────────────────────
// To activate a channel: set `available: true` and confirm the `href` value.
// Phone is active. WhatsApp and Email are structurally ready; enable when confirmed.

export type ContactChannel = {
  id: string;
  number: string;
  label: string;
  description: string;
  value: string | null;  // displayed value (phone number, email address, etc.)
  href: string | null;   // link target; null until the channel is confirmed
  available: boolean;
};

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: "phone",
    number: "01",
    label: "Call the Lab",
    description: "Speak directly with our team.",
    value: CONTACT.phoneFormatted,
    href: `tel:${CONTACT.phoneE164}`,
    available: true,
  },
  {
    id: "whatsapp",
    number: "02",
    label: "Start a Conversation",
    description: "Message us on WhatsApp for quick case questions.",
    value: null,
    // href becomes active once WhatsApp is confirmed on this number:
    href: `https://wa.me/${CONTACT.phoneE164.replace("+", "")}`,
    available: false,
  },
  {
    id: "email",
    number: "03",
    label: "Send a Case Inquiry",
    description: "Email us your case details and prescriptions.",
    value: CONTACT.email || null,
    // href auto-populates once CONTACT.email is set in this file:
    href: CONTACT.email ? `mailto:${CONTACT.email}` : null,
    available: false,
  },
];

// ─── SEO ──────────────────────────────────────────────────────────────────────
export const SEO = {
  defaultTitle: `${SITE_NAME} — Fort Lauderdale, FL`,
  titleTemplate: `%s | ${SITE_NAME}`,
  description:
    "Premium dental laboratory in Fort Lauderdale, Florida. Full arch restorations, implants, crowns, and zirconia prosthetics for dental professionals.",
  keywords: [
    "dental lab Fort Lauderdale",
    "dental laboratory Florida",
    "full arch restoration",
    "dental implants Fort Lauderdale",
    "zirconia crowns",
    "dental prosthetics South Florida",
    "implant supported dentures",
    "CAD CAM dental lab",
  ],
};
