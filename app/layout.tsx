import type { Metadata } from "next";
import "./globals.css";
import { JsonLd } from "@/components/seo/JsonLd";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://myavedan.com"),
  title: {
    default: "myAvedan (माई आवेदन) — भारत का एकीकृत सूचना एवं सेवा इकोसिस्टम",
    template: "%s | myAvedan",
  },
  description:
    "myAvedan (iStart Rajasthan Reg: 5F85FD9) unifies discovery and fulfillment across Education, Business, and Public G2C services with a central citizen identity and vault.",
  keywords: [
    "myAvedan",
    "माई आवेदन",
    "iStart Rajasthan",
    "Job Avedan",
    "Exam Avedan",
    "Yojana Avedan",
    "Sarkari Avedan",
    "BizAvedan",
    "Legal Avedan",
    "Deshraj Dhayal",
    "Rajasthan Startup",
  ],
  authors: [{ name: "Deshraj Dhayal", url: "https://myavedan.com" }],
  creator: "Deshraj Dhayal",
  publisher: "myAvedan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://myavedan.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className="dark scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased min-h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
