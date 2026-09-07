import React from "react";

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://myavedan.com/#organization",
    name: "myAvedan",
    alternateName: ["माई आवेदन", "myAvedan Ecosystem"],
    url: "https://myavedan.com",
    logo: {
      "@type": "ImageObject",
      url: "https://myavedan.com/assets/logo.png",
      caption: "myAvedan Logo",
    },
    founder: {
      "@type": "Person",
      name: "Deshraj Dhayal",
      jobTitle: "Founder & Platform Architect",
    },
    identifier: {
      "@type": "PropertyValue",
      propertyID: "iStart Rajasthan Startup Registration Number",
      value: "5F85FD9",
    },
    award: "iStart Rajasthan QRate Bronze Certification (Score: 14)",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bajyawas",
      addressLocality: "Sikar",
      addressRegion: "Rajasthan",
      postalCode: "332601",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support & Verification Hub",
      availableLanguage: ["Hindi", "English"],
    },
    sameAs: [
      "https://twitter.com/myavedan",
      "https://www.linkedin.com/company/myavedan",
      "https://github.com/myjanmitra-ai-rajasthan",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://myavedan.com/#website",
    url: "https://myavedan.com",
    name: "myAvedan — Unified Information & Service Ecosystem",
    publisher: {
      "@id": "https://myavedan.com/#organization",
    },
    inLanguage: ["hi-IN", "en-IN"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://myavedan.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const governmentDirectorySchema = {
    "@context": "https://schema.org",
    "@type": "GovernmentService",
    "@id": "https://myavedan.com/#public-g2c-directory",
    name: "Yojana & Sarkari Avedan Portal Hub",
    serviceType: "Public Schemes & G2C Application Assistance Directory",
    provider: {
      "@id": "https://myavedan.com/#organization",
    },
    areaServed: {
      "@type": "State",
      name: "Rajasthan",
    },
    description:
      "Centralized discovery and assisted fulfillment portal for state and national welfare schemes.",
  };

  const educationDirectorySchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://myavedan.com/#education-directory",
    name: "Job & Exam Avedan Portal Hub",
    url: "https://myavedan.com/sectors/education",
    description:
      "Career advisory, recruitment updates, syllabus distribution, and examination support vertical.",
    parentOrganization: {
      "@id": "https://myavedan.com/#organization",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://myavedan.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Ecosystem Architecture",
        item: "https://myavedan.com/ecosystem",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is myAvedan (माई आवेदन)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "myAvedan is a unified digital ecosystem founded by Deshraj Dhayal and registered under iStart Rajasthan (Reg No: 5F85FD9). It unifies information discovery and service delivery across Education, Business, and Public (G2C) sectors.",
        },
      },
      {
        "@type": "Question",
        name: "What are the three core sectors of the myAvedan ecosystem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The three sectors are Education (Job Avedan & Exam Avedan), Business (BizAvedan & Legal Avedan), and Public Services (Yojana Avedan & Sarkari Avedan), combining real-time discovery with assisted execution.",
        },
      },
      {
        "@type": "Question",
        name: "How does Central Single Sign-On (SSO) work across myAvedan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "myAvedan provides a unified identity provider across root and subdomains (*.myavedan.com) allowing users to access digital application services and their encrypted document vault with one login.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(governmentDirectorySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(educationDirectorySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
