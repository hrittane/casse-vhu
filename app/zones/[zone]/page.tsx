import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Phone,
    Mail,
    MapPin,
    Facebook,
    Instagram,
    Twitter,
    CheckCircle,
    Clock,
    FileText,
    Recycle,
    Car,
    Truck,
    Bike,
    Home,
} from "lucide-react"
import { notFound } from "next/navigation"
import zonesData from "@/data/zones.json"
import Link from "next/link"

export async function generateStaticParams() {
    const allZones = [...zonesData.Région, ...zonesData.Département, ...zonesData["Grandes communes"]]

    return allZones.map((zone) => ({
        zone: zone.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    }))
}
export async function generateMetadata({ params }: { params: { zone: string } }): Promise<Metadata> {
    const allZones = [...zonesData.Région, ...zonesData.Département, ...zonesData["Grandes communes"]]
    const zoneName = allZones.find((z) => z.toLowerCase().replace(/[^a-z0-9]+/g, "-") === params.zone)

    if (!zoneName) {
        return {
            title: "Zone non trouvée",
        }
    }

    return {
        title: `Enlèvement d'épaves à ${zoneName}`,
        description: `Service d'enlèvement d'épaves gratuit à ${zoneName}. Casse auto écologique et certifiée. Demandez votre enlèvement gratuit.`,
        openGraph: {
            title: `Enlèvement d'épaves à ${zoneName}`,
            description: `Service d'enlèvement d'épaves gratuit à ${zoneName}.`,
            url: `https://www.casse-vhu.fr/zones/${params.zone}`,
            images: [
                {
                    url: "/logo.png",
                    width: 1200,
                    height: 630,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `Enlèvement d'épaves à ${zoneName}`,
            description: `Service d'enlèvement d'épaves gratuit à ${zoneName}.`,
            images: ["/og-image.png"],
        },
    }
}

export default function ZonePage({ params }: { params: { zone: string } }) {
    const allZones = [...zonesData.Région, ...zonesData.Département, ...zonesData["Grandes communes"]]

    const zoneName = allZones.find((z) => z.toLowerCase().replace(/[^a-z0-9]+/g, "-") === params.zone)

    if (!zoneName) {
        notFound()
    }

    const faqData = [
        {
            question: `Quels types de véhicules sont pris en charge à ${zoneName} ?`,
            answer: `Nous prenons en charge tous types de véhicules à ${zoneName} : voitures, utilitaires, motos, scooters, camping-cars, etc., quel que soit leur état.`
        },
        {
            question: `L'enlèvement d'épave est-il vraiment gratuit à ${zoneName} ?`,
            answer: `Oui, notre service d'enlèvement d'épave à ${zoneName} est 100% gratuit, sans frais cachés.`
        },
        {
            question: `Quels documents dois-je fournir pour l'enlèvement de mon véhicule à ${zoneName} ?`,
            answer: `Vous devrez fournir la carte grise du véhicule, une pièce d'identité et un certificat de non-gage.`
        }
    ];

    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Casse-VHU ${zoneName}`,
        "description": `Service d'enlèvement d'épaves gratuit à ${zoneName}.`,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": zoneName,
            "addressCountry": "FR"
        },
        "provider": {
            "@type": "Organization",
            "name": "Casse-VHU"
        }
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
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">{zoneName}</span>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                            Enlèvement d'Épaves Gratuit à {zoneName}
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Votre épaviste agréé VHU pour un service rapide, gratuit et 100% conforme à {zoneName}
                        </p>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 py-12">
                <div className="grid lg:grid-cols-[1fr_350px] gap-8">
                    {/* Main Content */}
                    <div className="space-y-12">
                        {/* Introduction */}
                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-6">Service d'Enlèvement d'Épaves à {zoneName}</h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                                <p>
                                    Vous possédez un véhicule hors d'usage (VHU), accidenté, en panne ou irréparable à {zoneName} ? Vous
                                    ne savez pas comment le faire enlever rapidement, légalement et gratuitement ?
                                </p>
                                <p>
                                    <strong>Casse-VHU.fr</strong> est votre épaviste agréé disponible à {zoneName}, spécialisé dans
                                    l'enlèvement gratuit d'épaves et la mise à la casse de tous types de véhicules. Nous assurons la prise
                                    en charge complète des démarches administratives, la dépollution et le recyclage de votre voiture à{" "}
                                    {zoneName}, dans le strict respect de la réglementation et des normes environnementales.
                                </p>
                            </div>
                        </section>

                        {/* Why Choose Us */}
                        <section className="bg-muted/30 rounded-2xl p-8">
                            <h2 className="text-3xl font-bold text-foreground mb-6">
                                Pourquoi faire appel à Casse-VHU.fr à {zoneName} ?
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Clock className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-2">Enlèvement gratuit sous 24 à 48h</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Intervention rapide à {zoneName} pour enlever votre épave sans frais
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <FileText className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-2">Démarches administratives incluses</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Certificat de destruction et déclaration en préfecture pour {zoneName}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Recycle className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-2">Recyclage et dépollution</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Centre VHU agréé proche de {zoneName} pour un traitement écologique
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <CheckCircle className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-2">Service professionnel</h3>
                                        <p className="text-sm text-muted-foreground">Équipe réactive et conforme à la loi à {zoneName}</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Vehicle Types */}
                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-6">
                                Quels véhicules récupérons-nous à {zoneName} ?
                            </h2>
                            <p className="text-muted-foreground mb-8">
                                Nos services s'appliquent à tous types de véhicules hors d'usage à {zoneName}, quel que soit leur état :
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Card className="border-2 hover:border-primary/50 transition-colors">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <Car className="w-8 h-8 text-primary flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-2">Voitures particulières</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Essence, diesel, électrique, hybride - tous types de voitures à {zoneName}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className="border-2 hover:border-primary/50 transition-colors">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <Truck className="w-8 h-8 text-primary flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-2">Utilitaires et camionnettes</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Véhicules professionnels et utilitaires légers à {zoneName}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className="border-2 hover:border-primary/50 transition-colors">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <Bike className="w-8 h-8 text-primary flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-2">Motos, scooters et quads</h3>
                                                <p className="text-sm text-muted-foreground">Deux-roues et véhicules de loisirs à {zoneName}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className="border-2 hover:border-primary/50 transition-colors">
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <Home className="w-8 h-8 text-primary flex-shrink-0" />
                                            <div>
                                                <h3 className="font-semibold text-foreground mb-2">Camping-cars et caravanes</h3>
                                                <p className="text-sm text-muted-foreground">
                                                    Véhicules de loisirs et habitations mobiles à {zoneName}
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="mt-6 p-6 bg-accent/10 rounded-xl border-l-4 border-accent">
                                <p className="text-sm text-muted-foreground">
                                    <strong>État du véhicule à {zoneName} :</strong> accidenté, brûlé, inondé, avec moteur HS, sans
                                    contrôle technique, immobilisé ou simplement trop ancien… nous assurons son enlèvement gratuit.
                                </p>
                            </div>
                        </section>

                        {/* Process */}
                        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8">
                            <h2 className="text-3xl font-bold text-foreground mb-6">
                                Comment se déroule un enlèvement d'épave à {zoneName} ?
                            </h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                                            1
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-2">Contactez-nous</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Par téléphone ou via notre formulaire en ligne pour votre enlèvement à {zoneName}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                                            2
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-2">Planifiez un rendez-vous</h3>
                                        <p className="text-sm text-muted-foreground">Selon vos disponibilités à {zoneName}</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                                            3
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-2">Enlèvement du véhicule</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Nous venons chercher votre véhicule à votre domicile, sur un parking, au garage ou sur la voie
                                            publique à {zoneName}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                                            4
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground mb-2">Certificat de destruction</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Vous recevez votre certificat de destruction officiel immédiatement après l'enlèvement à{" "}
                                            {zoneName}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Benefits */}
                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-6">
                                Les avantages d'un épaviste agréé VHU à {zoneName}
                            </h2>
                            <p className="text-muted-foreground mb-6">
                                En France, la destruction des véhicules hors d'usage est strictement réglementée. Seul un centre agréé
                                VHU peut dépolluer et recycler votre voiture en toute légalité à {zoneName}.
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">La garantie légale de destruction à {zoneName}</span>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">Le respect des normes environnementales</span>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">La prise en charge administrative complète</span>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">
                                        L'assurance que votre véhicule ne sera pas revendu illégalement
                                    </span>
                                </div>
                            </div>
                        </section>

                        {/* Neighborhoods Section */}
                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-6">Quartiers et Villes Desservis à {zoneName}</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                                {/* This should be dynamically populated based on the zone */}
                                <p>Centre-ville</p>
                                <p>Quartier Nord</p>
                                <p>Quartier Sud</p>
                                <p>Zone Industrielle</p>
                                <p>La périphérie</p>
                                <p>Les communes voisines</p>
                            </div>
                        </section>

                        {/* FAQ Section */}
                        <section>
                            <h2 className="text-3xl font-bold text-foreground mb-6">Questions Fréquentes à {zoneName}</h2>
                            <div className="space-y-4">
                                {faqData.map((faq, index) => (
                                    <div key={index} className="border p-4 rounded-lg">
                                        <h3 className="font-semibold">{faq.question}</h3>
                                        <p className="text-muted-foreground">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* CTA Section */}
                        <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 text-center">
                            <h2 className="text-3xl font-bold mb-4">Contactez Casse-VHU.fr à {zoneName}</h2>
                            <p className="text-lg mb-8 opacity-90">
                                Ne laissez pas une épave encombrer votre espace à {zoneName}. Faites appel à Casse-VHU.fr pour un
                                enlèvement gratuit et rapide.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-white text-primary hover:bg-white/90 ">
                                    <Phone className="w-5 h-5 mr-2" />
                                    <a href="tel:+33630302053">06 30 30 20 53</a>
                                </Button>
                                <Link href="/contact">
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="text-lg px-8 py-6 rounded-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                                        asChild
                                    >
                                        <div>
                                            <Mail className="w-5 h-5 mr-2" />
                                            Demander un devis
                                        </div>
                                    </Button>
                                </Link>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar - Contact Card */}
                    <aside className="lg:sticky lg:top-24 h-fit space-y-6">
                        <Card className="border-2 border-primary/20 shadow-lg">
                            <CardContent className="p-6">
                                <div className="text-center mb-6">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <Phone className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">Contactez-nous</h3>
                                    <p className="text-sm text-muted-foreground">Service disponible 7j/7</p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                                        <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-muted-foreground">Téléphone</p>
                                            <a href="tel:+33630302053" className="font-semibold text-foreground">06 30 30 20 53</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                                        <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-muted-foreground">Email</p>
                                            <a href="mailto:contact@casse-vhu.fr" className="font-semibold text-foreground text-sm">contact@casse-vhu.fr</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                                        <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                                        <div>
                                            <p className="text-xs text-muted-foreground">Zone</p>
                                            <p className="font-semibold text-foreground">{zoneName}</p>
                                        </div>
                                    </div>
                                </div>

                                <Button className="w-full rounded-full" size="lg" asChild>
                                    <a href="tel:+33 6 30 30 20 53">
                                        <Phone className="w-4 h-4 mr-2" />
                                        Appeler maintenant
                                    </a>
                                </Button>

                                <div className="mt-6 pt-6 border-t">
                                    <h4 className="font-semibold text-foreground mb-3 text-sm">Horaires d'intervention</h4>
                                    <div className="space-y-2 text-sm text-muted-foreground">
                                        <div className="flex justify-between">
                                            <span>Lundi - Vendredi</span>
                                            <span className="font-medium">8h - 19h</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Samedi</span>
                                            <span className="font-medium">9h - 17h</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Dimanche</span>
                                            <span className="font-medium">Sur RDV</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                            <CardContent className="p-6">
                                <h4 className="font-semibold text-foreground mb-3">Intervention rapide</h4>
                                <p className="text-sm text-muted-foreground mb-4">Enlèvement sous 24 à 48h à {zoneName}</p>
                                <div className="flex items-center gap-2 text-sm">
                                    <Clock className="w-4 h-4 text-accent" />
                                    <span className="text-muted-foreground">Réponse immédiate</span>
                                </div>
                            </CardContent>
                        </Card>
                    </aside>
                </div>
            </div>

        </div>
    )
}
