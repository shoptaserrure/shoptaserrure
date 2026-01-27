import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import StructuredData from "@/components/SEO";
import StickyCallBar from "@/components/StickyCallBar";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://shopta-serrure.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shopta Serrure - Dépannage Serrurerie Rapide 24h/7j à Paris",
    template: "%s | Shopta Serrure",
  },
  description:
    "Serrurier qualifié à Paris et Île-de-France. Intervention en 30 min pour porte claquée, serrure bloquée, clés cassées. Découvrez aussi notre Mag Sécurité pour tous nos conseils de serrurerie.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Shopta Serrure - Dépannage Serrurerie Rapide 24h/7j à Paris",
    description: "Intervention en 30 min à Paris et IDF. Serrurerie certifiée 24h/24.",
    url: siteUrl,
    siteName: "Shopta Serrure",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6921cf8-a6da-47d6-868e-33ae124242d4-shopta-serrure-d-pannage-rapide-vercel-app/assets/images/images_2.png",
        width: 1200,
        height: 630,
        alt: "Shopta Serrure - Dépannage 24h/7j",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopta Serrure - Dépannage Serrurerie Rapide 24h/7j à Paris",
    description: "Intervention en 30 min à Paris et IDF. Serrurerie certifiée 24h/24.",
    images: [
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/c6921cf8-a6da-47d6-868e-33ae124242d4-shopta-serrure-d-pannage-rapide-vercel-app/assets/images/images_2.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${barlow.className} antialiased`}>
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="c6921cf8-a6da-47d6-868e-33ae124242d4"
        />
        <ErrorReporter />
        <StructuredData />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug={process.env.NODE_ENV !== "production" ? "true" : "false"}
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <div className="min-h-dvh pb-24">{children}</div>
        <StickyCallBar />
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
