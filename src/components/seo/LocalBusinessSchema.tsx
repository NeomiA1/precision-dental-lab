import { SITE_NAME, SITE_URL, CONTACT, SEO } from "@/lib/constants";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": SITE_URL,
    name: SITE_NAME,
    description: SEO.description,
    url: SITE_URL,
    telephone: CONTACT.phoneE164,
    address: {
      "@type": "PostalAddress",
      addressLocality: CONTACT.city,
      addressRegion: CONTACT.state,
      addressCountry: CONTACT.country,
    },
    areaServed: {
      "@type": "State",
      name: CONTACT.stateFullName,
    },
    priceRange: "$$$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Dental Laboratory Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Arch Restorations" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dental Crowns & Bridges" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Implant Prosthetics" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital CAD/CAM Design" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  );
}
