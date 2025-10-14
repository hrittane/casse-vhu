import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import StickyMenu from "@/components/ui/StickyMenu"
import TopMenu from "@/components/ui/TopMenu"
import Footer from "@/components/ui/Footer"
import GoogleAnalytics from "@/components/ui/GoogleAnalytics"

import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.casse-vhu.fr"),
  title: {
    default: "Casse-VHU - Recyclage Automobile Gratuit | Enlèvement VHU",
    template: "%s | Casse-VHU",
  },
  description:
    "Service gratuit d'enlèvement et recyclage de véhicules hors d'usage. Casse auto écologique et certifiée. Demandez votre enlèvement gratuit.",
  keywords: "casse auto, recyclage voiture, enlèvement gratuit VHU, véhicule hors usage, recyclage automobile, épave voiture France, collecte voiture en panne, enlèvement véhicule accidenté, service remorquage voiture, récupération véhicule hors service, épaviste France, destruction épave voiture, dépollution véhicule, vente épave occasion, retrait voiture accident, épave voiture Paris, collecte voiture Lyon, enlèvement véhicule Marseille, service remorquage Toulouse, récupération véhicule Nice, épaviste Nantes, destruction épave Lille, épave voiture sans permis, collecte véhicule ancien, enlèvement voiture sans contrôle technique, retrait véhicule accidenté, service épave 24h, épaviste professionnel, destruction véhicule gratuit, retrait épave rapide, comment se débarrasser d'une épave gratuitement, service de destruction de voiture en France, enlèvement voiture en panne d'urgence, où déposer une voiture hors service, procédure destruction épave France, déclaration cession épave, certificat destruction véhicule",
  openGraph: {
    title: "Casse-VHU - Recyclage Automobile Gratuit | Enlèvement VHU",
    description: "Service gratuit d'enlèvement et recyclage de véhicules hors d'usage. Casse auto écologique et certifiée.",
    url: "https://www.casse-vhu.fr",
    siteName: "Casse-VHU",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Casse-VHU - Recyclage Automobile Gratuit | Enlèvement VHU",
    description: "Service gratuit d'enlèvement et recyclage de véhicules hors d'usage. Casse auto écologique et certifiée.",
    images: ["/og-image.png"],
  },
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
                },
                { "@type": "Place", "name": "Gironde" },
                { "@type": "Place", "name": "Ille-et-Vilaine" },
                { "@type": "Place", "name": "Nord" },
                { "@type": "Place", "name": "Pas-de-Calais" },
                { "@type": "Place", "name": "Isère" },
                { "@type": "Place", "name": "Bouches-du-Rhône" },
                { "@type": "Place", "name": "Vendée" },
                { "@type": "Place", "name": "Loire-Atlantique" },
                { "@type": "Place", "name": "Bordeaux" },
                { "@type": "Place", "name": "Mérignac" },
                { "@type": "Place", "name": "Pessac" },
                { "@type": "Place", "name": "Talence" },
                { "@type": "Place", "name": "Bègles" },
                { "@type": "Place", "name": "Villenave-d'Ornon" },
                { "@type": "Place", "name": "Rennes" },
                { "@type": "Place", "name": "Saint-Malo" },
                { "@type": "Place", "name": "Fougères" },
                { "@type": "Place", "name": "Vitré" },
                { "@type": "Place", "name": "Cesson-Sévigné" },
                { "@type": "Place", "name": "Lille" },
                { "@type": "Place", "name": "Roubaix" },
                { "@type": "Place", "name": "Tourcoing" },
                { "@type": "Place", "name": "Dunkerque" },
                { "@type": "Place", "name": "Valenciennes" },
                { "@type": "Place", "name": "Maubeuge" },
                { "@type": "Place", "name": "Calais" },
                { "@type": "Place", "name": "Boulogne-sur-Mer" },
                { "@type": "Place", "name": "Arras" },
                { "@type": "Place", "name": "Lens" },
                { "@type": "Place", "name": "Béthune" },
                { "@type": "Place", "name": "Saint-Omer" },
                { "@type": "Place", "name": "Grenoble" },
                { "@type": "Place", "name": "Échirolles" },
                { "@type": "Place", "name": "Voiron" },
                { "@type": "Place", "name": "Vienne" },
                { "@type": "Place", "name": "Bourgoin-Jallieu" },
                { "@type": "Place", "name": "Marseille" },
                { "@type": "Place", "name": "Aix-en-Provence" },
                { "@type": "Place", "name": "Arles" },
                { "@type": "Place", "name": "Martigues" },
                { "@type": "Place", "name": "Istres" },
                { "@type": "Place", "name": "Salon-de-Provence" },
                { "@type": "Place", "name": "La Roche-sur-Yon" },
                { "@type": "Place", "name": "Les Sables-d'Olonne" },
                { "@type": "Place", "name": "Challans" },
                { "@type": "Place", "name": "Fontenay-le-Comte" },
                { "@type": "Place", "name": "Les Herbiers" },
                { "@type": "Place", "name": "Nantes" },
                { "@type": "Place", "name": "Saint-Nazaire" },
                { "@type": "Place", "name": "Rezé" },
                { "@type": "Place", "name": "Saint-Herblain" },
                { "@type": "Place", "name": "Orvault" }
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
        <GoogleAnalytics gaId="G-46SWS5NH8F" />
      </body>
    </html>
  )
}
