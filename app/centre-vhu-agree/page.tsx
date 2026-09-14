import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Phone,
    Mail,
    CheckCircle,
    Clock,
    FileText,
    Recycle,
    ShieldCheck,
    ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { getZones } from "@/lib/zones"

export const metadata: Metadata = {
    title: "Centre VHU agréé : recyclage et destruction de véhicules hors d'usage",
    description: "Centre VHU agréé préfecture : dépollution, destruction et recyclage de véhicules hors d'usage, avec certificat officiel. Épaviste agréé partout en France. 06 30 30 20 53.",
    alternates: {
        canonical: "/centre-vhu-agree",
    },
    openGraph: {
        title: "Centre VHU agréé : recyclage et destruction de véhicules hors d'usage",
        description: "Centre VHU agréé préfecture : dépollution, destruction et recyclage de véhicules hors d'usage.",
        url: "https://casse-vhu.fr/centre-vhu-agree",
        siteName: "Casse-VHU",
        locale: "fr_FR",
        type: "website",
    },
}

const faqData = [
    {
        question: "Qu'est-ce qu'un centre VHU agréé ?",
        answer: "Un centre VHU (Véhicule Hors d'Usage) agréé est une installation autorisée par la préfecture pour collecter, dépolluer, démonter et broyer les véhicules hors d'usage, dans le respect de la réglementation environnementale."
    },
    {
        question: "Pourquoi confier son véhicule à un centre VHU agréé ?",
        answer: "Seul un centre VHU agréé peut vous délivrer un certificat de destruction valable. Sans lui, votre véhicule n'est pas juridiquement détruit et peut faire l'objet d'une revente illégale."
    },
    {
        question: "Le passage en centre VHU agréé est-il payant ?",
        answer: "Non, la reprise d'un véhicule hors d'usage complet est gratuite et obligatoire en France. Casse-VHU assure gratuitement l'enlèvement et le traitement dans un centre agréé."
    },
    {
        question: "Où trouver un centre VHU agréé près de chez moi ?",
        answer: "Casse-VHU intervient partout en France et travaille en lien direct avec des centres VHU agréés. Appelez le 06 30 30 20 53 pour connaître le centre le plus proche de chez vous."
    }
];

const schema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "name": "Casse-VHU",
    "description": "Centre VHU agréé : dépollution, destruction et recyclage de véhicules hors d'usage.",
    "url": "https://casse-vhu.fr/centre-vhu-agree",
    "logo": "https://casse-vhu.fr/logo.png",
    "telephone": "+33-630-302-053",
    "priceRange": "0€",
    "areaServed": "France"
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
};

export default function CentreVhuAgreePage() {
    const departments = getZones().filter((z) => z.type === "Département")

    return (
        <div className="min-h-screen bg-background">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                            Centre VHU agréé : destruction légale de votre véhicule
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Casse-VHU vous met en relation avec un centre VHU agréé par la préfecture : dépollution, destruction et
                            recyclage en règle, avec certificat de destruction officiel remis sur place.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="text-lg px-8 py-6 rounded-full" asChild>
                                <a href="tel:+33630302053">
                                    <Phone className="w-5 h-5 mr-2" />
                                    06 30 30 20 53
                                </a>
                            </Button>
                            <Link href="/contact">
                                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full bg-transparent" asChild>
                                    <span>Demander un devis gratuit</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Intro */}
                    <section>
                        <h2 className="text-3xl font-bold text-foreground mb-6">Qu'est-ce qu'un centre VHU ?</h2>
                        <div className="space-y-4 text-muted-foreground text-lg">
                            <p>
                                Un <strong className="text-foreground">centre VHU</strong> (Véhicule Hors d'Usage) est une installation
                                agréée pour le traitement des véhicules arrivés en fin de vie. Son rôle : collecter les épaves, les{" "}
                                <strong className="text-foreground">dépolluer</strong> (extraction des fluides, batteries, airbags, pneus), les
                                démonter pour valoriser les pièces réutilisables, puis broyer et recycler la carcasse.
                            </p>
                            <p>
                                Toute destruction de véhicule doit obligatoirement passer par un centre VHU agréé par la préfecture.
                                C'est la seule procédure légale, et elle se traduit par la remise d'un <strong className="text-foreground">certificat de destruction</strong>{" "}
                                qui met fin administrativement à la vie du véhicule.
                            </p>
                        </div>
                    </section>

                    {/* Role of VHU center */}
                    <section className="bg-muted/30 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Le rôle d'un centre VHU agréé</h2>
                        <div className="space-y-4">
                            {[
                                { title: "La dépollution", text: "Extraction de tous les fluides et polluants : huiles, carburant, liquide de frein, batterie, airbags." },
                                { title: "La démolition", text: "Démontage des pièces réutilisables : moteurs, boîtes, portières, éléments de carrosserie certifiés." },
                                { title: "Le broyage et le recyclage", text: "Valorisation des métaux, plastiques et verres dans une logique d'économie circulaire." },
                                { title: "Les démarches administratives", text: "Cession, déclaration de destruction et remise du certificat de destruction." },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Why agréé matters */}
                    <section>
                        <h2 className="text-3xl font-bold text-foreground mb-6">Pourquoi le label « agréé » est indispensable</h2>
                        <div className="space-y-4">
                            {[
                                { title: "Certificat de destruction valable", text: "Seul un centre agréé peut émettre un document reconnu qui désinscrit votre véhicule." },
                                { title: "Protection contre la revente illégale", text: "Un centre agréé ne peut pas revendre une épave : votre véhicule ne pourra pas réapparaître sur la route." },
                                { title: "Respect de l'environnement", text: "La dépollution est réalisée selon des normes strictes, sans risque de pollution des sols et des nappes." },
                                { title: "Zéro frais pour vous", text: "La reprise d'un véhicule hors d'usage complet est gratuite et obligatoire pour le centre agréé." },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                                        <p className="text-muted-foreground">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Map zones */}
                    <section className="bg-muted/30 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">Centre VHU agréé près de chez vous</h2>
                        <p className="text-muted-foreground mb-6">
                            Nous travaillons avec des centres VHU agréés dans tous les départements. Découvrez nos pages locales :
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {departments.map((dept) => (
                                <Link key={dept.slug} href={`/epaviste/${dept.slug}`}>
                                    <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                                        {dept.name}
                                        <ArrowRight className="w-3 h-3 ml-2" />
                                    </Button>
                                </Link>
                            ))}
                            <Link href="/epaviste">
                                <Button variant="ghost" size="sm" className="rounded-full">
                                    Toutes nos zones
                                    <ArrowRight className="w-3 h-3 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </section>

                    {/* Process */}
                    <section>
                        <h2 className="text-3xl font-bold text-foreground mb-6">Comment se déroule la destruction en centre VHU ?</h2>
                        <div className="space-y-6">
                            {[
                                { title: "Prise en charge du véhicule", text: "Nous récupérons votre véhicule hors d'usage gratuitement, partout en France." },
                                { title: "Transport vers le centre agréé", text: "Votre épave est acheminée vers un centre VHU agréé le plus proche." },
                                { title: "Dépollution et démolition", text: "Le centre procède à la dépollution, à la démonstration et au recyclage dans les règles." },
                                { title: "Certificat de destruction", text: "Vous recevez votre certificat de destruction officiel, indispensable pour les démarches de cession." },
                            ].map((step, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                                        <p className="text-sm text-muted-foreground">{step.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* FAQ */}
                    <section>
                        <h2 className="text-3xl font-bold text-foreground mb-6">Questions fréquentes sur le centre VHU agréé</h2>
                        <div className="space-y-4">
                            {faqData.map((faq, i) => (
                                <div key={i} className="border p-4 rounded-lg">
                                    <h3 className="font-semibold text-foreground">{faq.question}</h3>
                                    <p className="text-muted-foreground mt-1">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-muted-foreground">
                            En savoir plus : consultez notre guide de{" "}
                            <Link href="/recyclage-guide" className="text-primary hover:underline">recyclage automobile</Link> et notre article sur la{" "}
                            <Link href="/blog/prime-conversion-2026-conditions-demarches" className="text-primary hover:underline">prime à la conversion 2026</Link>.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 text-center">
                        <h2 className="text-3xl font-bold mb-4">Confiez votre véhicule à un centre VHU agréé</h2>
                        <p className="text-lg mb-8 opacity-90">
                            Enlèvement gratuit, certificat de destruction fourni. Intervention sous 24h.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-white text-primary hover:bg-white/90" asChild>
                                <a href="tel:+33630302053">
                                    <Phone className="w-5 h-5 mr-2" />
                                    06 30 30 20 53
                                </a>
                            </Button>
                            <Link href="/contact">
                                <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
                                    <span>
                                        <Mail className="w-5 h-5 mr-2" />
                                        Demander un devis
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}