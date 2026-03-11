import { company } from "@/lib/data/company";

interface JsonLdProps {
  type: "Organization" | "LocalBusiness" | "Service" | "WebPage" | "BreadcrumbList";
  data?: Record<string, unknown>;
}

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.legalName,
    alternateName: "Grupo Fervian",
    url: "https://www.fervian.es",
    logo: "https://www.fervian.es/images/logo.png",
    description: company.description,
    foundingDate: "2002",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 11,
      maxValue: 50,
    },
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: company.contact.headquarters.address,
        addressLocality: company.contact.headquarters.city,
        postalCode: company.contact.headquarters.postalCode,
        addressRegion: "Extremadura",
        addressCountry: "ES",
      },
      {
        "@type": "PostalAddress",
        streetAddress: company.contact.office.address,
        addressLocality: "Torrejoncillo",
        postalCode: company.contact.office.postalCode,
        addressRegion: "Extremadura",
        addressCountry: "ES",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+34927260108",
      contactType: "customer service",
      availableLanguage: "Spanish",
    },
    areaServed: {
      "@type": "State",
      name: "Extremadura",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: company.legalName,
    image: "https://www.fervian.es/images/logo.png",
    url: "https://www.fervian.es",
    telephone: "+34927260108",
    email: company.contact.headquarters.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.contact.headquarters.address,
      addressLocality: company.contact.headquarters.city,
      postalCode: company.contact.headquarters.postalCode,
      addressRegion: "Extremadura",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.contact.headquarters.coordinates.lat,
      longitude: company.contact.headquarters.coordinates.lng,
    },
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: company.legalName,
      url: "https://www.fervian.es",
    },
    areaServed: {
      "@type": "State",
      name: "Extremadura",
    },
    serviceType: "Construction",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
