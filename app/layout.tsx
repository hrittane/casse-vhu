import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Casse-VHU - Recyclage Automobile Gratuit | Enlèvement VHU",
  description:
    "Service gratuit d'enlèvement et recyclage de véhicules hors d'usage. Casse auto écologique et certifiée. Demandez votre enlèvement gratuit.",
  keywords: "casse auto, recyclage voiture, enlèvement gratuit VHU, véhicule hors usage, recyclage automobile",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
