import { internalUrl } from "@/lib/site"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Page introuvable",
  description: "La page demandée n'existe pas ou a été déplacée.",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-24">
        <div className="container mx-auto px-4 text-center">
          <p className="text-6xl font-bold text-primary mb-4">404</p>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cette page n'existe pas
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Le lien que vous avez suivi est peut-être obsolète, ou le véhicule
            concerné a été déplacé. Retrouvez nos zones d'intervention ou
            contactez-nous pour un enlèvement gratuit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={internalUrl("/epaviste")}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium"
            >
              Voir nos zones d'intervention
            </Link>
            <Link
              href={internalUrl("/contact")}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border font-medium"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
