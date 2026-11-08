import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.opsmodernized.com"
).replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Ops Modernized | Logistics, Technology & AI Insights",
    template: "%s | Ops Modernized",
  },

  description:
    "Practical insights into logistics operations, fleet management, warehouse modernization, artificial intelligence, and operational technology.",

  applicationName: "Ops Modernized",

  keywords: [
    "logistics operations",
    "fleet management",
    "fleet management software",
    "warehouse management",
    "logistics technology",
    "operational modernization",
    "AI in logistics",
    "logistics automation",
    "supply chain technology",
  ],

  authors: [
    {
      name: "Novaire Systems",
      url: "https://www.novairesystems.com",
    },
  ],

  creator: "Novaire Systems",
  publisher: "Novaire Systems",

  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Ops Modernized",
    title: "Ops Modernized | Logistics, Technology & AI Insights",
    description:
      "Explore practical insights into logistics operations, fleet management, warehouse modernization, and AI-powered operational systems.",
    url: siteUrl,
  },

  twitter: {
    card: "summary_large_image",
    title: "Ops Modernized",
    description:
      "Insights into logistics operations, fleet management, warehouse modernization, and AI.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}