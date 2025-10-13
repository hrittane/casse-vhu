import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact",
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
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/car-recycling-yard-with-stacked-cars-industrial-ba.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
                </div>
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
                                            <p className="text-muted-foreground">Île-de-France et régions limitrophes</p>
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
                                                <p>Lundi - Vendredi : 8h - 19h</p>
                                                <p>Samedi : 9h - 17h</p>
                                                <p>Dimanche : Fermé</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </div>


                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
