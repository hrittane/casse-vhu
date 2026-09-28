import { SITE_URL, canonicalUrl, internalUrl } from "@/lib/site"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Phone,
    CheckCircle,
    Truck,
    Bike,
    Car,
    ArrowRight,
    MapPin,
} from "lucide-react"
import { notFound } from "next/navigation"
import Link from "next/link"
import vehicleTypesData from "@/data/vehicle-types.json"

type VehicleType = {
    slug: string
    type: string
    icon: string
    title: string
    description: string
    h1: string
    intro: string
    distinctSections: { heading: string; body: string }[]
    related: string[]
    faq: { question: string; answer: string }[]
}

const vehicleTypes = vehicleTypesData.vehicleTypes as VehicleType[]

const ICONS: Record<string, typeof Truck> = {
    Truck,
    Bike,
    Car,
}

function findType(slug: string) {
    return vehicleTypes.find((t) => t.slug === slug)
}

export const dynamicParams = false

export function generateStaticParams() {
    return vehicleTypes.map((t) => ({ type: t.slug }))
}

export function generateMetadata({ params }: { params: { type: string } }): Metadata {
    const vehicleType = findType(params.type)

    if (!vehicleType) {
        return {
            title: "Type de véhicule non trouvé",
            robots: { index: false, follow: false },
        }
    }

    const canonical = canonicalUrl(`/casse/${vehicleType.slug}`)

    return {
        title: vehicleType.title,
        description: vehicleType.description,
        alternates: { canonical },
        openGraph: {
            title: vehicleType.title,
            description: vehicleType.description,
            url: canonical,
            siteName: "Casse-VHU",
            locale: "fr_FR",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: vehicleType.title,
            description: vehicleType.description,
        },
    }
}

export default function VehicleTypePage({ params }: { params: { type: string } }) {
    const vehicleType = findType(params.type)

    if (!vehicleType) {
        notFound()
    }

    const Icon = ICONS[vehicleType.icon] ?? Truck

    const schema = {
        "@context": "https://schema.org",
        "@type": "AutomotiveBusiness",
        "@id": `${canonicalUrl(`/casse/${vehicleType.slug}`)}#business`,
        "name": "Casse-VHU",
        "description": vehicleType.description,
        "url": canonicalUrl(`/casse/${vehicleType.slug}`),
        "logo": `${SITE_URL}/logo.png`,
        "telephone": "+33-630-302-053",
        "parentOrganization": { "@id": `${SITE_URL}/#organization` },
        "areaServed": { "@type": "Country", "name": "France" },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+33-630-302-053",
            "contactType": "customer service",
            "areaServed": "FR",
            "availableLanguage": "French",
        },
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": vehicleType.faq.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
        })),
    }

    return (
        <div className="min-h-screen bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Hero */}
            <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                            <Icon className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">
                                {vehicleType.type}
                            </span>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                            {vehicleType.h1}
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Enlèvement gratuit sous 24 à 48h, destruction en centre VHU
                            agréé, certificat de destruction remis sur place.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="text-lg px-8 py-6 rounded-full" asChild>
                                <a href="tel:+33630302053">
                                    <Phone className="w-5 h-5 mr-2" />
                                    06 30 30 20 53
                                </a>
                            </Button>
                            <Link href={internalUrl("/contact")}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-lg px-8 py-6 rounded-full bg-transparent"
                                    asChild
                                >
                                    <span>
                                        Demander un enlèvement
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto space-y-6">
                        <p className="text-lg text-muted-foreground">{vehicleType.intro}</p>
                    </div>
                </div>
            </section>

            {/* Type-specific content */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto space-y-10">
                        {vehicleType.distinctSections.map((section) => (
                            <div key={section.heading}>
                                <h2 className="text-2xl font-bold text-foreground mb-3">
                                    {section.heading}
                                </h2>
                                <p className="text-muted-foreground">{section.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Also taken */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold text-foreground mb-3">
                            Nous reprenons aussi
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Notre épaviste ne fait pas de sélection : tout véhicule
                            hors d'usage complet est repris. Si votre {vehicleType.type.toLowerCase()}{" "}
                            n'est pas dans la liste, appelez quand même.
                        </p>
                        <ul className="grid sm:grid-cols-3 gap-3">
                            {vehicleType.related.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-2 text-muted-foreground"
                                >
                                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-foreground mb-10">
                            Questions fréquentes
                        </h2>
                        <div className="space-y-8">
                            {vehicleType.faq.map((faq) => (
                                <div key={faq.question}>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">
                                        {faq.question}
                                    </h3>
                                    <p className="text-muted-foreground">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA + internal links */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                            Un {vehicleType.type.toLowerCase()} à faire enlever ?
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Rappelez-vous que nous sommes un{" "}
                            <Link href={internalUrl("/")} className="text-primary font-medium hover:underline">
                                centre VHU agréé
                            </Link>{" "}
                            : l'enlèvement de votre {vehicleType.type.toLowerCase()} est
                            gratuit, quel que soit son état. Pour le détail du
                            déroulement, voir notre page{" "}
                            <Link href={internalUrl("/enlevement-epave")} className="text-primary font-medium hover:underline">
                                épaviste gratuit
                            </Link>
                            .
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="text-lg px-8 py-6 rounded-full" asChild>
                                <a href="tel:+33630302053">
                                    <Phone className="w-5 h-5 mr-2" />
                                    06 30 30 20 53
                                </a>
                            </Button>
                            <Link href={internalUrl("/epaviste")}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-lg px-8 py-6 rounded-full bg-transparent"
                                    asChild
                                >
                                    <span>
                                        <MapPin className="w-5 h-5 mr-2" />
                                        Trouver un épaviste près de chez moi
                                    </span>
                                </Button>
                            </Link>
                        </div>
                        <p className="mt-8 text-sm text-muted-foreground">
                            Vous cherchez la valeur de reprise plutôt que l'enlèvement ?{" "}
                            <Link href={internalUrl("/prix-voiture-casse")} className="text-primary font-medium hover:underline">
                                Estimer le prix d'une voiture à la casse
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
