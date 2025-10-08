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
    Car,
    Bike,
} from "lucide-react"

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-background">

            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Nos Services d'Enlèvement d'Épaves</h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Service rapide, gratuit et 100% conforme dans toute la France
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Services Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8 mb-16">
                            <Card className="p-6 hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Truck className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-center mb-3">Enlèvement Gratuit</h3>
                                    <p className="text-muted-foreground text-center">
                                        Service rapide sous 24-48h partout en France, sans frais cachés. Notre équipe est prête à intervenir
                                        dans toute situation.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="p-6 hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <FileText className="w-8 h-8 text-secondary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-center mb-3">Démarches Administratives</h3>
                                    <p className="text-muted-foreground text-center">
                                        Toutes les formalités sont prises en charge : certificat de destruction, déclaration en préfecture.
                                        Nous nous occupons de tout.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="p-6 hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Recycle className="w-8 h-8 text-accent" />
                                    </div>
                                    <h3 className="text-xl font-bold text-center mb-3">Centre Agréé VHU</h3>
                                    <p className="text-muted-foreground text-center">
                                        Recyclage et dépollution dans un centre VHU agréé. Tous nos véhicules sont inspectés selon les
                                        normes environnementales.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Detailed Services */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">Pourquoi faire appel à Casse-VHU.fr ?</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="flex items-start gap-4">
                                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-2">Enlèvement d'épaves gratuit sous 24 à 48h</h3>
                                            <p className="text-muted-foreground">
                                                Nous intervenons rapidement partout en France pour enlever votre véhicule hors d'usage sans
                                                aucun frais.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-2">Toutes les démarches administratives incluses</h3>
                                            <p className="text-muted-foreground">
                                                Certificat de destruction, déclaration en préfecture - nous gérons toute la paperasse pour vous.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-2">Recyclage et dépollution dans un centre VHU agréé</h3>
                                            <p className="text-muted-foreground">
                                                Respect total de l'environnement avec traitement dans nos centres agréés par la préfecture.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-2">Intervention dans toutes les régions de France</h3>
                                            <p className="text-muted-foreground">
                                                De Paris à Marseille, de Lille à Toulouse - nous sommes présents partout en France.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-2">Service professionnel, réactif et conforme à la loi</h3>
                                            <p className="text-muted-foreground">
                                                Équipe expérimentée et matériel professionnel pour un service de qualité garanti.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold mb-2">Sans frais cachés</h3>
                                            <p className="text-muted-foreground">
                                                Transparence totale - le service est 100% gratuit, aucune mauvaise surprise.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Vehicle Types */}
                            <div>
                                <h2 className="text-3xl font-bold text-foreground mb-6">Quels véhicules récupérons-nous ?</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Nos services s'appliquent à tous types de véhicules hors d'usage, quel que soit leur état
                                </p>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10">
                                        <CardContent className="pt-6">
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                                <Car className="w-6 h-6 text-primary" />
                                            </div>
                                            <h3 className="font-semibold mb-2">Voitures particulières</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Essence, diesel, électrique, hybride - tous types de voitures
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="p-6 bg-gradient-to-br from-secondary/5 to-secondary/10">
                                        <CardContent className="pt-6">
                                            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                                                <Truck className="w-6 h-6 text-secondary" />
                                            </div>
                                            <h3 className="font-semibold mb-2">Utilitaires et camionnettes</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Tous types de véhicules utilitaires professionnels
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="p-6 bg-gradient-to-br from-accent/5 to-accent/10">
                                        <CardContent className="pt-6">
                                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                                                <Bike className="w-6 h-6 text-accent" />
                                            </div>
                                            <h3 className="font-semibold mb-2">Motos, scooters et quads</h3>
                                            <p className="text-sm text-muted-foreground">Deux-roues et véhicules de loisir motorisés</p>
                                        </CardContent>
                                    </Card>

                                    <Card className="p-6 bg-gradient-to-br from-primary/5 to-primary/10">
                                        <CardContent className="pt-6">
                                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                                                <Truck className="w-6 h-6 text-primary" />
                                            </div>
                                            <h3 className="font-semibold mb-2">Camping-cars et caravanes</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Véhicules de loisir et de voyage de toutes tailles
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="p-6 bg-gradient-to-br from-secondary/5 to-secondary/10">
                                        <CardContent className="pt-6">
                                            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                                                <Truck className="w-6 h-6 text-secondary" />
                                            </div>
                                            <h3 className="font-semibold mb-2">Poids lourds</h3>
                                            <p className="text-sm text-muted-foreground">Bus, camions et véhicules industriels</p>
                                        </CardContent>
                                    </Card>

                                    <Card className="p-6 bg-gradient-to-br from-accent/5 to-accent/10">
                                        <CardContent className="pt-6">
                                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                                                <CheckCircle className="w-6 h-6 text-accent" />
                                            </div>
                                            <h3 className="font-semibold mb-2">Tous états acceptés</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Accidenté, brûlé, inondé, avec moteur HS, sans contrôle technique...
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>

                            {/* VHU Benefits */}
                            <div className="bg-muted/30 p-8 rounded-lg">
                                <h2 className="text-3xl font-bold text-foreground mb-6">Les avantages d'un épaviste agréé VHU</h2>
                                <p className="text-lg text-muted-foreground mb-6">
                                    En France, la destruction des véhicules hors d'usage est strictement réglementée. Seul un centre agréé
                                    VHU peut dépolluer et recycler votre voiture en toute légalité.
                                </p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                        <p className="text-muted-foreground">La garantie légale de destruction</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                        <p className="text-muted-foreground">Le respect des normes environnementales</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                        <p className="text-muted-foreground">La prise en charge administrative complète</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                        <p className="text-muted-foreground">
                                            L'assurance que votre véhicule ne sera pas revendu illégalement
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Contactez Casse-VHU.fr dès maintenant</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Ne laissez pas une épave encombrer votre espace et polluer l'environnement
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="text-lg px-8 py-6 rounded-full bg-white text-primary hover:bg-white/90">
                            <Phone className="w-5 h-5 mr-2" />
                            <a href="tel:+33 6 30 30 20 53">06 30 30 20 53</a>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-lg px-8 py-6 rounded-full bg-transparent border-white text-white hover:bg-white hover:text-primary"
                        >
                            <Mail className="w-5 h-5 mr-2" />
                            Formulaire en ligne
                        </Button>
                    </div>
                    <p className="mt-6 text-sm opacity-80">Intervention sous 24 à 48h – Service professionnel garanti</p>
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
                                    <a href="mailto:contact@casse-vhu.fr">contact@casse-vhu.fr</a>
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
