import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
                        <Card className="p-6 md:p-8">
                            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">Envoyez-nous un message</h2>
                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium">
                                            Prénom *
                                        </label>
                                        <Input id="firstName" placeholder="Votre prénom" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium">
                                            Nom *
                                        </label>
                                        <Input id="lastName" placeholder="Votre nom" required />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email *
                                    </label>
                                    <Input id="email" type="email" placeholder="votre.email@exemple.com" required />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">
                                        Téléphone *
                                    </label>
                                    <Input id="phone" type="tel" placeholder="06 30 30 20 53" required />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium">
                                        Sujet
                                    </label>
                                    <Input id="subject" placeholder="Objet de votre demande" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">
                                        Message *
                                    </label>
                                    <Textarea id="message" placeholder="Décrivez votre demande..." rows={6} required />
                                </div>

                                <Button type="submit" size="lg" className="w-full">
                                    Envoyer le message
                                </Button>
                            </form>
                        </Card>

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
                                            <a href="tel:+33 6 30 30 20 53" className="text-muted-foreground">06 30 30 20 53</a>
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
                                            <p className="text-muted-foreground">contact@casse-vhu.fr</p>
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

                            <Card className="p-6 bg-primary/5 border-primary/20">
                                <h3 className="font-semibold mb-2 text-primary">Intervention rapide</h3>
                                <p className="text-sm text-muted-foreground">
                                    Nous intervenons dans un délai de 24 à 48h maximum après votre demande. Service d'enlèvement gratuit
                                    avec certificat de destruction officiel.
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
