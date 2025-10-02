import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Phone,
    Mail,
    MapPin,
    Recycle,
    Truck,
    CheckCircle,
    FileText,
    Facebook,
    Instagram,
    Twitter,
    Award,
    Users,
    Clock,
} from "lucide-react"

export default function AProposPage() {
    return (
        <div className="min-h-screen bg-background">


            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">À Propos de Casse-VHU.fr</h1>
                        <p className="text-xl text-muted-foreground">
                            Votre partenaire de confiance pour l'enlèvement et le recyclage de véhicules hors d'usage
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        {/* Introduction */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6">Qui sommes-nous ?</h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                                <p>
                                    Casse-VHU.fr est votre épaviste agréé disponible dans toute la France, spécialisé dans l'enlèvement
                                    gratuit d'épaves et la mise à la casse de tous types de véhicules. Depuis notre création, nous nous
                                    engageons à offrir un service professionnel, rapide et respectueux de l'environnement.
                                </p>
                                <p>
                                    Nous assurons la prise en charge complète des démarches administratives, la dépollution et le
                                    recyclage de votre voiture, dans le strict respect de la réglementation et des normes
                                    environnementales en vigueur.
                                </p>
                                <p>
                                    Notre mission est de rendre le processus de mise à la casse simple, rapide et sans frais cachés, tout
                                    en contribuant à la protection de notre environnement grâce à un recyclage responsable.
                                </p>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-primary/20">
                                <CardContent className="pt-6">
                                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Truck className="w-8 h-8 text-primary" />
                                    </div>
                                    <div className="text-4xl font-bold text-foreground mb-2">10,000+</div>
                                    <p className="text-muted-foreground">Véhicules recyclés</p>
                                </CardContent>
                            </Card>

                            <Card className="p-6 text-center bg-gradient-to-br from-secondary/10 to-secondary/20">
                                <CardContent className="pt-6">
                                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Clock className="w-8 h-8 text-secondary" />
                                    </div>
                                    <div className="text-4xl font-bold text-foreground mb-2">24-48h</div>
                                    <p className="text-muted-foreground">Délai d'intervention</p>
                                </CardContent>
                            </Card>

                            <Card className="p-6 text-center bg-gradient-to-br from-accent/10 to-accent/20">
                                <CardContent className="pt-6">
                                    <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Award className="w-8 h-8 text-accent" />
                                    </div>
                                    <div className="text-4xl font-bold text-foreground mb-2">100%</div>
                                    <p className="text-muted-foreground">Agréé préfecture</p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Our Values */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Nos Valeurs</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <Card className="p-6">
                                    <CardContent className="pt-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <CheckCircle className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold mb-3">Professionnalisme</h3>
                                                <p className="text-muted-foreground">
                                                    Nos équipes sont formées et équipées pour intervenir dans toutes les situations. Nous
                                                    respectons nos engagements et nos délais d'intervention.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="p-6">
                                    <CardContent className="pt-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Recycle className="w-6 h-6 text-secondary" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold mb-3">Respect de l'environnement</h3>
                                                <p className="text-muted-foreground">
                                                    Nous travaillons exclusivement avec des centres VHU agréés qui respectent les normes de
                                                    dépollution et de recyclage les plus strictes.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="p-6">
                                    <CardContent className="pt-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <FileText className="w-6 h-6 text-accent" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold mb-3">Transparence</h3>
                                                <p className="text-muted-foreground">
                                                    Service 100% gratuit, sans frais cachés. Nous prenons en charge toutes les démarches
                                                    administratives et vous fournissons tous les documents nécessaires.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="p-6">
                                    <CardContent className="pt-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <Users className="w-6 h-6 text-primary" />
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-semibold mb-3">Service client</h3>
                                                <p className="text-muted-foreground">
                                                    Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner tout
                                                    au long du processus d'enlèvement.
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Why Choose Us */}
                        <div className="bg-muted/30 p-8 rounded-lg mb-16">
                            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Pourquoi nous choisir ?</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold mb-2">Agrément préfectoral</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Nous sommes un centre VHU agréé, garantissant un traitement légal et conforme de votre véhicule.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold mb-2">Couverture nationale</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Présents dans toutes les régions de France, nous intervenons rapidement où que vous soyez.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold mb-2">Intervention rapide</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Enlèvement sous 24 à 48h maximum après votre demande, selon vos disponibilités.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold mb-2">Certificat officiel</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Remise immédiate du certificat de destruction, document officiel obligatoire.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold mb-2">Tous véhicules acceptés</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Voitures, utilitaires, motos, camping-cars, poids lourds - tous états acceptés.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold mb-2">Accompagnement complet</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Nous vous guidons pour la prime à la conversion si vous êtes éligible.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Our Commitment */}
                        <div>
                            <h2 className="text-3xl font-bold text-foreground mb-6">Notre Engagement Environnemental</h2>
                            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                                <p>
                                    Chez Casse-VHU.fr, nous prenons notre responsabilité environnementale très au sérieux. Chaque véhicule
                                    que nous récupérons est traité dans un centre agréé VHU où il subit un processus de dépollution
                                    rigoureux avant d'être recyclé.
                                </p>
                                <p>
                                    Les fluides dangereux (huiles, liquides de refroidissement, carburants) sont extraits et traités de
                                    manière sécurisée. Les pièces réutilisables sont récupérées, et les matériaux recyclables (métaux,
                                    plastiques, verre) sont triés et valorisés.
                                </p>
                                <p>
                                    Cette démarche permet de réduire l'impact environnemental des véhicules en fin de vie et de contribuer
                                    à l'économie circulaire en donnant une seconde vie aux matériaux récupérés.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Prêt à faire enlever votre véhicule ?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Contactez-nous dès maintenant pour un enlèvement gratuit sous 24-48h
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full">
                            <Phone className="w-5 h-5 mr-2" />
                            <a href="tel:+33 6 30 30 20 53">06 30 30 20 53</a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-lg px-8 py-6 rounded-full bg-transparent border-white text-white hover:bg-white hover:text-primary"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            Demander un devis
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-card border-t py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <img src="/logo.png" alt="Casse-VHU Logo" className="h-8 w-auto" />
                            </div>
                            <p className="text-muted-foreground text-sm">
                                Spécialiste du recyclage automobile écologique et responsable depuis 2010.
                            </p>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Services</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>Enlèvement gratuit VHU</li>
                                <li>Recyclage automobile</li>
                                <li>Dépollution véhicules</li>
                                <li>Certificat de destruction</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Liens rapides</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li>
                                    <a href="/services" className="hover:text-foreground transition-colors">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a href="/zones" className="hover:text-foreground transition-colors">
                                        Zones
                                    </a>
                                </li>
                                <li>
                                    <a href="/blog" className="hover:text-foreground transition-colors">
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="/a-propos" className="hover:text-foreground transition-colors">
                                        À propos
                                    </a>
                                </li>
                                <li>
                                    <a href="/contact" className="hover:text-foreground transition-colors">
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold mb-4">Contact</h3>
                            <div className="space-y-3 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                    <Phone className="w-4 h-4 mr-2" />
                                    <a href="tel:0630302053">06 30 30 20 53</a>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="w-4 h-4 mr-2" />
                                    <span>contact@casse-vhu.fr</span>
                                </div>
                                <div className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    <span>Partout en France</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                        <p>&copy; 2025 Casse-VHU. Tous droits réservés. | Centre VHU agréé préfecture</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
