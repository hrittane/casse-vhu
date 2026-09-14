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
    Truck,
    ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { getZones } from "@/lib/zones"

export const metadata: Metadata = {
    title: "Enlèvement d'épave gratuit sous 24h | Casse-VHU",
    description: "Enlèvement d'épave gratuit partout en France sous 24h. Épaviste agréé VHU, certificat de destruction fourni sur place, carte grise perdue acceptée. Appelez le 06 30 30 20 53.",
    alternates: {
        canonical: "/enlevement-epave",
    },
    openGraph: {
        title: "Enlèvement d'épave gratuit sous 24h | Casse-VHU",
        description: "Enlèvement d'épave gratuit partout en France sous 24h. Certificat de destruction fourni sur place.",
        url: "https://casse-vhu.fr/enlevement-epave",
        siteName: "Casse-VHU",
        locale: "fr_FR",
        type: "website",
    },
}

const faqData = [
    {
        question: "L'enlèvement d'épave est-il vraiment gratuit ?",
        answer: "Oui, notre service d'enlèvement d'épave est 100% gratuit partout en France, sans frais cachés, dès lors que votre véhicule est complet (moteur, pot catalytique, etc.)."
    },
    {
        question: "Sous quel délai intervenez-vous ?",
        answer: "Nous intervenons sous 24 à 48h maximum, partout en France. Un simple appel au 06 30 30 20 53 suffit pour planifier l'enlèvement."
    },
    {
        question: "Puis-je faire enlever une épave sans carte grise ?",
        answer: "Oui. Sans carte grise, nous vous accompagnons dans les démarches : déclaration de perte ou de vol, certificat de non-gage. Contactez-nous pour en discuter."
    },
    {
        question: "Quels véhicules pouvez-vous enlever ?",
        answer: "Tous types de véhicules : voitures, utilitaires, motos, scooters, camping-cars, caravanes, poids lourds, y compris accidentés, brûlés, inondés ou sans contrôle technique."
    }
];

const schema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "name": "Casse-VHU",
    "description": "Enlèvement d'épave gratuit partout en France sous 24h.",
    "url": "https://casse-vhu.fr/enlevement-epave",
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

export default function EnlevementEpavePage() {
    const regions = getZones().filter((z) => z.type === "Région")

    return (
        <div className="min-h-screen bg-background">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero */}
            <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                            Enlèvement d'épave gratuit sous 24h
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Un épaviste agréé VHU intervient partout en France : nous enlevons votre véhicule hors d'usage,
                            sans carte grise ou sans contrôle technique, et vous remettons votre certificat de destruction.
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
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                            <span className="inline-flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary" />100% gratuit</span>
                            <span className="inline-flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary" />24-48h max</span>
                            <span className="inline-flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary" />Certificat sur place</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Intro */}
                    <section>
                        <h2 className="text-3xl font-bold text-foreground mb-6">L'enlèvement d'épave gratuit, comment ça marche ?</h2>
                        <div className="space-y-4 text-muted-foreground text-lg">
                            <p>
                                Vous avez un véhicule hors d'usage qui encombre votre garage, votre jardin ou la voie publique ? Un enlèvement
                                d'épave est la solution simple, gratuite et légale pour vous en débarrasser. Faire appel à un épaviste agréé
                                garantit que votre véhicule sera dépollué et recyclé dans les règles, avec un certificat de destruction.
                            </p>
                            <p>
                                Avec Casse-VHU, l'enlèvement d'épave est <strong className="text-foreground">100% gratuit</strong> et rapide :
                                un simple appel au 06 30 30 20 53, et notre équipe planifie l'intervention sous 24 à 48h.
                            </p>
                        </div>
                    </section>

                    {/* Steps */}
                    <section className="bg-muted/30 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Les 4 étapes d'un enlèvement d'épave</h2>
                        <div className="space-y-6">
                            {[
                                { title: "Contactez-nous", text: "Appelez le 06 30 30 20 53 ou remplissez notre formulaire en ligne. Nous évaluons votre situation en quelques minutes." },
                                { title: "Planification", text: "Nous convenons ensemble d'un créneau d'intervention, selon vos disponibilités." },
                                { title: "Enlèvement sur place", text: "Nous retirons le véhicule où il se trouve : domicile, garage, parking, entreprise ou voie privée." },
                                { title: "Certificat de destruction", text: "Vous recevez votre certificat de destruction officiel, preuve que le véhicule ne peut plus circuler." },
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

                    {/* What we pick up */}
                    <section>
                        <h2 className="text-3xl font-bold text-foreground mb-6">Quels véhicules peut-on faire enlever ?</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { icon: Truck, label: "Voitures et utilitaires" },
                                { icon: Truck, label: "Motos, scooters et quads" },
                                { icon: Truck, label: "Camping-cars et caravanes" },
                                { icon: Truck, label: "Poids lourds et engins" },
                            ].map((item, i) => (
                                <Card key={i} className="p-4">
                                    <CardContent className="p-0 flex items-center gap-3">
                                        <item.icon className="w-6 h-6 text-primary flex-shrink-0" />
                                        <span className="font-medium text-foreground">{item.label}</span>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                        <div className="mt-6 p-6 bg-accent/10 rounded-xl border-l-4 border-accent">
                            <p className="text-sm text-muted-foreground">
                                <strong className="text-foreground">Tous les états sont acceptés :</strong> accidenté, brûlé, inondé, moteur HS,
                                immobilisé, sans contrôle technique, sans carte grise ou simplement trop ancien.
                            </p>
                        </div>
                    </section>

                    {/* Why choose us */}
                    <section>
                        <h2 className="text-3xl font-bold text-foreground mb-6">Pourquoi choisir Casse-VHU pour votre enlèvement d'épave ?</h2>
                        <div className="space-y-4">
                            {[
                                { title: "Service gratuit, sans frais cachés", text: "L'enlèvement et le traitement de votre véhicule sont entièrement pris en charge." },
                                { title: "Intervention rapide", text: "Notre réseau d'épavistes agréés intervient sous 24 à 48h partout en France." },
                                { title: "Démarches administratives incluses", text: "Certificat de destruction, cession Cerfa, déclaration : nous nous occupons de toute la paperasse." },
                                { title: "Centre VHU agréé", text: "Votre véhicule est dépollué et recyclé dans un centre VHU agréé par la préfecture." },
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

                    {/* Zones */}
                    <section className="bg-muted/30 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-foreground mb-4">Enlèvement d'épave partout en France</h2>
                        <p className="text-muted-foreground mb-6">
                            Nous intervenons dans toute la France. Retrouvez les pages de nos principales zones d'intervention :
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {regions.map((region) => (
                                <Link key={region.slug} href={`/epaviste/${region.slug}`}>
                                    <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                                        {region.name}
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

                    {/* FAQ */}
                    <section>
                        <h2 className="text-3xl font-bold text-foreground mb-6">Questions fréquentes sur l'enlèvement d'épave</h2>
                        <div className="space-y-4">
                            {faqData.map((faq, i) => (
                                <div key={i} className="border p-4 rounded-lg">
                                    <h3 className="font-semibold text-foreground">{faq.question}</h3>
                                    <p className="text-muted-foreground mt-1">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-muted-foreground">
                            Pour aller plus loin, consultez notre guide complet sur le{" "}
                            <Link href="/centre-vhu-agree" className="text-primary hover:underline">centre VHU agréé</Link> ou nos articles de blog sur la{" "}
                            <Link href="/blog/comment-se-debarrasser-dune-voiture-sans-carte-grise" className="text-primary hover:underline">carte grise perdue</Link> et la{" "}
                            <Link href="/blog/prime-conversion-2026-conditions-demarches" className="text-primary hover:underline">prime à la conversion 2026</Link>.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 text-center">
                        <h2 className="text-3xl font-bold mb-4">Besoin d'un enlèvement d'épave maintenant ?</h2>
                        <p className="text-lg mb-8 opacity-90">
                            Intervention sous 24 à 48h, gratuit partout en France.
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