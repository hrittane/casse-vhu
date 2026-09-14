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
    ShieldCheck,
    ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { getZones } from "@/lib/zones"

export const metadata: Metadata = {
    title: "Épaviste agréé VHU : enlèvement gratuit de votre véhicule",
    description: "Votre épaviste agréé VHU : enlèvement gratuit de véhicule hors d'usage sous 24h partout en France. Certificat de destruction fourni sur place. Appelez le 06 30 30 20 53.",
    alternates: {
        canonical: "/epaviste-agree",
    },
    openGraph: {
        title: "Épaviste agréé VHU : enlèvement gratuit de votre véhicule",
        description: "Épaviste agréé VHU : enlèvement gratuit de véhicule hors d'usage sous 24h partout en France.",
        url: "https://casse-vhu.fr/epaviste-agree",
        siteName: "Casse-VHU",
        locale: "fr_FR",
        type: "website",
    },
}

const faqData = [
    {
        question: "Qu'est-ce qu'un épaviste agréé ?",
        answer: "Un épaviste agréé est un professionnel autorisé par la préfecture à collecter, dépolluer et acheminer les véhicules hors d'usage vers un centre VHU agréé, tout en gérant les démarches administratives (certificat de destruction)."
    },
    {
        question: "L'intervention d'un épaviste est-elle gratuite ?",
        answer: "Oui. La reprise d'un véhicule hors d'usage complet est gratuite et obligatoire en France. Casse-VHU assure l'enlèvement gratuitement, en 24 à 48h."
    },
    {
        question: "Puis-je appeler un épaviste sans carte grise ?",
        answer: "Oui, un épaviste agréé peut intervenir sans carte grise, moyennant une déclaration de perte ou de vol et un certificat de non-gage. Nous vous accompagnons dans ces démarches."
    },
    {
        question: "Quel est le délai d'enlèvement ?",
        answer: "Nous intervenons sous 24 à 48h maximum après votre appel, partout en France."
    }
];

const schema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "name": "Casse-VHU",
    "description": "Épaviste agréé VHU : enlèvement gratuit de véhicules hors d'usage.",
    "url": "https://casse-vhu.fr/epaviste-agree",
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

export default function EpavisteAgreePage() {
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
                            Épaviste agréé : enlèvement gratuit de votre véhicule hors d'usage
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Un épaviste agréé VHU intervient partout en France pour enlever gratuitement votre épave sous 24 à 48h,
                            avec certificat de destruction fourni sur place.
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
                            <span className="inline-flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary" />Agréé préfecture</span>
                            <span className="inline-flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary" />Gratuit sous 24h</span>
                            <span className="inline-flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-primary" />Certificat sur place</span>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Intro */}
                    <section>
                        <h2 className="text-3xl font-bold text-foreground mb-6">Le métier d'épaviste agréé</h2>
                        <div className="space-y-4 text-muted-foreground text-lg">
                            <p>
                                L'<strong className="text-foreground">épaviste</strong> est le professionnel spécialisé dans la collecte et le
                                traitement des <strong className="text-foreground">véhicules hors d'usage</strong> (VHU). Agréé par la préfecture,
                                il garantit un traitement légal et écologique de votre épave : enlèvement à domicile, dépollution, recyclage
                                et remise d'un certificat de destruction.
                            </p>
                            <p>
                                Faire confiance à un épaviste <strong className="text-foreground">agréé</strong> vous protège : votre véhicule ne
                                pourra pas être revendu illégalement, et vous êtes dégagé de toute responsabilité dès la remise du certificat.
                            </p>
                        </div>
                    </section>

                    {/* Why choose an agréé epaviste */}
                    <section className="bg-muted/30 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Pourquoi choisir un épaviste agréé ?</h2>
                        <div className="space-y-4">
                            {[
                                { title: "La garantie d'une destruction légale", text: "Votre véhicule est traité dans un centre VHU agréé, vous recevez un certificat valable." },
                                { title: "Zéro frais, service gratuit", text: "L'enlèvement d'un véhicule complet est gratuit et obligatoire pour un épaviste agréé." },
                                { title: "Un vrai gain de temps", text: "Pas de paperasse : cession, déclaration et certificat sont gérés pour vous." },
                                { title: "Une démarche écologique", text: "Dépollution et recyclage conformes aux normes environnementales françaises." },
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

                    {/* What we take */}
                    <section>
                        <h2 className="text-3xl font-bold text-foreground mb-6">Quelles épaves l'épaviste récupère-t-il ?</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                "Voitures particulières (essence, diesel, hybride, électrique)",
                                "Utilitaires et camionnettes",
                                "Motos, scooters et quads",
                                "Camping-cars et caravanes",
                                "Poids lourds",
                                "Véhicules accidentés, brûlés, inondés, sans CT",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Process */}
                    <section className="bg-muted/30 rounded-2xl p-8">
                        <h2 className="text-2xl font-bold text-foreground mb-6">Comment se passe l'enlèvement par un épaviste ?</h2>
                        <div className="space-y-6">
                            {[
                                { title: "Appelez-nous", text: "06 30 30 20 53 : un conseiller évalue votre situation en quelques minutes." },
                                { title: "Choisissez votre créneau", text: "Nous vous proposons un rendez-vous d'enlèvement sous 24 à 48h." },
                                { title: "L'épaviste retire l'épave", text: "Notre équipe enlève le véhicule gratuitement, où il se trouve." },
                                { title: "Recevez votre certificat", text: "Le certificat de destruction vous est remis immédiatement." },
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

                    {/* Zones */}
                    <section>
                        <h2 className="text-3xl font-bold text-foreground mb-6">Un épaviste près de chez vous</h2>
                        <p className="text-muted-foreground mb-6">
                            Nous disposons d'un réseau d'épavistes agréés dans toute la France. Retrouvez nos pages régionales :
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
                        <h2 className="text-3xl font-bold text-foreground mb-6">Questions fréquentes sur l'épaviste</h2>
                        <div className="space-y-4">
                            {faqData.map((faq, i) => (
                                <div key={i} className="border p-4 rounded-lg">
                                    <h3 className="font-semibold text-foreground">{faq.question}</h3>
                                    <p className="text-muted-foreground mt-1">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 text-muted-foreground">
                            Pour en savoir plus, découvrez notre page sur le{" "}
                            <Link href="/centre-vhu-agree" className="text-primary hover:underline">centre VHU agréé</Link>, notre service d'{" "}
                            <Link href="/enlevement-epave" className="text-primary hover:underline">enlèvement d'épave</Link> et nos guides sur la{" "}
                            <Link href="/blog/comment-se-debarrasser-dune-voiture-sans-carte-grise" className="text-primary hover:underline">carte grise perdue</Link>.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 text-center">
                        <h2 className="text-3xl font-bold mb-4">Appelez votre épaviste agréé maintenant</h2>
                        <p className="text-lg mb-8 opacity-90">
                            Enlèvement gratuit sous 24h, intervention partout en France.
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