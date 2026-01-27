export default function StructuredData() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://shopta-serrure.fr";

  const org = {
    "@context": "https://schema.org",
    "@type": "Locksmith",
    name: "Shopta Serrure",
    url: siteUrl,
    telephone: "+33620546693",
    image: `${siteUrl}/og-image.jpg`,
    areaServed: [
      { "@type": "City", name: "Paris" },
      { "@type": "AdministrativeArea", name: "Île-de-France" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    sameAs: [
      "https://www.facebook.com/shoptaserrure",
      "https://www.instagram.com/shoptaserrure",
    ],
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Dépannage serrurerie d'urgence",
    provider: {
      "@type": "Locksmith",
      name: "Shopta Serrure",
      url: siteUrl,
      telephone: "+33620546693",
    },
    areaServed: [
      { "@type": "City", name: "Paris" },
      { "@type": "AdministrativeArea", name: "Île-de-France" },
    ],
    offers: [
      { "@type": "Offer", name: "Ouverture de porte" },
      { "@type": "Offer", name: "Remplacement de serrure" },
      { "@type": "Offer", name: "Sécurisation après effraction" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
    </>
  );
}
