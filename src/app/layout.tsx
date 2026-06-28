import "./globals.css";
import Script from "next/script";
import type { ReactNode } from "react";
export const metadata = {
  title: "Dépannage serrurerie 24h/24 à Paris et en île-de-france | Shopta serrure",
  description:
    "Serrurier disponible 24H/24, ouverture de porte, remplacement de serrure, intervention rapide et devis gratuit."
  keywords: [
  "serrurier",
  "dépannage serrurerie",
  "ouverture de porte",
  "urgence",
  "porte claquée",
  "changement de serrure",
  "serrurier paris",
  "serrurier île-de-france",
  "shopta serrure",
  "shop taserrure",
  "shoptaserrure"
  ]
};
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        ) : null}
      </head>

      <body>{children}</body>
    </html>
  );
}
