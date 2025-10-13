import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import StickyMenu from "@/components/ui/StickyMenu"
import TopMenu from "@/components/ui/TopMenu"
import Footer from "@/components/ui/Footer"

import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Casse-VHU - Recyclage Automobile Gratuit | Enlèvement VHU",
    template: "%s | Casse-VHU",
  },
  description:
    "Service gratuit d'enlèvement et recyclage de véhicules hors d'usage. Casse auto écologique et certifiée. Demandez votre enlèvement gratuit.",
  keywords: "casse auto, recyclage voiture, enlèvement gratuit VHU, véhicule hors usage, recyclage automobile",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutomotiveBusiness",
              "name": "Casse-VHU",
              "description": "Service gratuit d'enlèvement et recyclage de véhicules hors d'usage. Casse auto écologique et certifiée.",
              "url": "https://www.casse-vhu.fr",
              "logo": "https://www.casse-vhu.fr/logo.png",
              "telephone": "+33-630-302-053",
              "serviceArea": [
                {
                  "@type": "Place",
                  "name": "Nouvelle-Aquitaine"
                },
                {
                  "@type": "Place",
                  "name": "Bretagne"
                },
                {
                  "@type": "Place",
                  "name": "Hauts-de-France"
                },
                {
                  "@type": "Place",
                  "name": "Auvergne-Rhône-Alpes"
                },
                {
                  "@type": "Place",
                  "name": "Provence-Alpes-Côte d'Azur"
                },
                {
                  "@type": "Place",
                  "name": "Pays de la Loire"
                }
              ]
            })
          }}
        />

        {/* top menu */}
        <TopMenu />

        <Suspense fallback={null}>{children}</Suspense>
        {/* sticky cta mobile */}
        <StickyMenu />

        {/* footer */}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
