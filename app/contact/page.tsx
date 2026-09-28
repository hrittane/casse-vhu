import { canonicalUrl } from "@/lib/site"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Contact",
    description: "Contactez Casse-VHU pour un enlèvement d'épave gratuit sous 24 à 48h partout en France. Épaviste agréé, certificat de destruction fourni. 06 30 30 20 53.",
    alternates: {
        canonical: canonicalUrl("/contact"),
    },
    openGraph: {
        url: canonicalUrl("/contact"),
    },
}
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ContactForm } from "@/components/ui/ContactForm"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section with Background Image */}
            <section className="relative h-[400px] flex items-center justify-center">
                <Image
                    src="/car-scrape.webp"
                    alt="Enlèvement d'épave gratuit"
                    fill
                    sizes="100vw"
                    priority
                    quality={80}
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">Contactez-nous</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto text-balance">
                        Notre équipe est à votre disposition pour répondre à toutes vos questions
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

                        {/* Contact Form */}
                        <div className="h-full flex flex-col justify-between">
                            <ContactForm />
                            <Card className="p-6 bg-primary/5 border-primary/20">
                                <h3 className="font-semibold text-primary">Intervention rapide</h3>
                                <p className="text-sm text-muted-foreground">
                                    Nous intervenons dans un délai de 24 à 48h maximum après votre demande. Service d'enlèvement gratuit
                                    avec certificat de destruction officiel.
                                </p>
                            </Card>
                        </div>


                        {/* Contact Information */}
                        <div className="space-y-6">
                            <div>
                                <div className="space-y-4 text-muted-foreground mb-10">
                                    <p>
                                        Un conseiller Casse-VHU vous répond du lundi
                                        au samedi, de 8h à 19h. Décrivez-nous votre
                                        véhicule et votre commune : nous vérifions
                                        immédiatement la disponibilité d'un créneau
                                        d'enlèvement et nous vous rappelons pour
                                        confirmer le rendez-vous.
                                    </p>
                                    <p>
                                        Pour accélérer le traitement, préparez la
                                        carte grise du véhicule, votre pièce
                                        d'identité et, si vous en avez un, le
                                        certificat de non-gage. Si la carte grise a
                                        été perdue, indiquez-nous le numéro
                                        d'immatriculation : nous vous guiderons dans
                                        la démarche de radiation auprès de l'ANTS.
                                    </p>
                                    <p>
                                        L'enlèvement est entièrement gratuit : la
                                        casse d'un véhicule hors d'usage complet est
                                        à la charge du centre VHU agréé qui le
                                        réceptionne. Aucun frais de déplacement,
                                        de remorquage ou de traitement ne vous est
                                        facturé. Le certificat de destruction vous
                                        est remis à la fin de l'intervention.
                                    </p>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Nos coordonnées</h2>
                                <p className="text-muted-foreground mb-8">
                                    Nous sommes disponibles pour répondre à toutes vos questions concernant l'enlèvement et le recyclage
                                    de votre véhicule hors d'usage.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <Card className="p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-lg">
                                            <Phone className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Téléphone</h3>
                                            <a href="tel:+33630302053" className="text-muted-foreground">06 30 30 20 53</a>
                                            <p className="text-sm text-muted-foreground mt-1">Lundi - Samedi : 8h - 19h</p>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-lg">
                                            <Mail className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Email</h3>
                                            <a href="mailto:contact@casse-vhu.fr" className="text-muted-foreground">contact@casse-vhu.fr</a>
                                            <p className="text-sm text-muted-foreground mt-1">Réponse sous 24h</p>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-lg">
                                            <MapPin className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Zone d'intervention</h3>
                                            <p className="text-muted-foreground">Partout en France</p>
                                            <p className="text-sm text-muted-foreground mt-1">Déplacement gratuit</p>
                                        </div>
                                    </div>
                                </Card>

                                <Card className="p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-lg">
                                            <Clock className="h-6 w-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Horaires</h3>
                                            <div className="text-muted-foreground space-y-1">
                                                <p>Lundi - Vendredi : 7h - 20h</p>
                                                <p>Samedi & Dimanche : 8h - 19h</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>


                        </div>

                    </div>
                </div>
            </section>

            {/* FAQ: answers the questions the form itself cannot, using the
                same factual claims already stated across the site. */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                            Questions fréquentes avant de nous contacter
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-semibold text-foreground mb-2">
                                    L'enlèvement est-il vraiment gratuit ?
                                </h3>
                                <p className="text-muted-foreground">
                                    Oui. La casse d'un véhicule hors d'usage complet
                                    est à la charge du centre VHU agréé qui le
                                    réceptionne, et non à la charge du propriétaire.
                                    Aucun frais de déplacement, de remorquage ou de
                                    traitement ne vous est facturé.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground mb-2">
                                    Combien de temps faut-il compter ?
                                </h3>
                                <p className="text-muted-foreground">
                                    L'intervention est organisée sous 24 à 48 heures
                                    après votre appel, y compris pour un véhicule
                                    accidenté, brûlé ou sans carte grise.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground mb-2">
                                    Quels documents dois-je préparer ?
                                </h3>
                                <p className="text-muted-foreground">
                                    La carte grise du véhicule, une copie de votre
                                    pièce d'identité et, le cas échéant, le
                                    certificat de non-gage. Si la carte grise a été
                                    perdue, indiquez-nous le numéro
                                    d'immatriculation : nous vous accompagnons dans
                                    la démarche de radiation auprès de l'ANTS.
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold text-foreground mb-2">
                                    Quels véhicules acceptez-vous ?
                                </h3>
                                <p className="text-muted-foreground">
                                    Voitures, utilitaires, motos, scooters, quads,
                                    camping-cars et poids lourds, quel que soit leur
                                    état : accidenté, brûlé, inondé, moteur cassé ou
                                    sans contrôle technique valide.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
