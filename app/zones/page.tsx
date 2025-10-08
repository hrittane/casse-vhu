import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import zonesData from "@/data/zones.json"

export default function ZonesPage() {
    return (
        <div className="min-h-screen bg-background">


            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Zones d'Intervention</h1>
                        <p className="text-xl text-muted-foreground mb-8">Enlèvement d'épaves gratuit dans toute la France</p>
                        <p className="text-lg text-muted-foreground">
                            Peu importe votre localisation, un épaviste agréé proche de chez vous intervient rapidement et
                            gratuitement.
                        </p>
                    </div>
                </div>
            </section>

            {/* Zones Sections */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto space-y-16">
                        {/* Régions */}
                        <div>
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-foreground mb-3">Régions</h2>
                                <p className="text-muted-foreground">Nous intervenons dans toutes les grandes régions de France</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {zonesData.Région.map((region, index) => {
                                    const slug = region.toLowerCase().replace(/[^a-z0-9]+/g, "-")
                                    return (
                                        <a key={index} href={`/zones/${slug}`}>
                                            <Card className="p-6 hover:shadow-lg transition-all hover:border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10 cursor-pointer h-full">
                                                <CardContent className="pt-6">
                                                    <div className="flex items-start gap-3">
                                                        <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                                        <div>
                                                            <h3 className="font-semibold text-foreground">{region}</h3>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Départements */}
                        <div>
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-foreground mb-3">Départements</h2>
                                <p className="text-muted-foreground">Service disponible dans les départements suivants</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {zonesData.Département.map((departement, index) => {
                                    const slug = departement.toLowerCase().replace(/[^a-z0-9]+/g, "-")
                                    return (
                                        <a key={index} href={`/zones/${slug}`}>
                                            <Card className="p-6 hover:shadow-lg transition-all hover:border-secondary/50 bg-gradient-to-br from-secondary/5 to-secondary/10 cursor-pointer h-full">
                                                <CardContent className="pt-6">
                                                    <div className="flex items-start gap-3">
                                                        <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                                                        <div>
                                                            <h3 className="font-semibold text-foreground">{departement}</h3>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Grandes Communes */}
                        <div>
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-foreground mb-3">Grandes Communes</h2>
                                <p className="text-muted-foreground">Principales villes et communes desservies</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {zonesData["Grandes communes"].map((communes, index) => {
                                    const slug = communes.toLowerCase().replace(/[^a-z0-9]+/g, "-")
                                    return (
                                        <a key={index} href={`/zones/${slug}`}>
                                            <Card className="p-6 hover:shadow-lg transition-all hover:border-accent/50 bg-gradient-to-br from-accent/5 to-accent/10 cursor-pointer h-full">
                                                <CardContent className="pt-6">
                                                    <div className="flex items-start gap-3">
                                                        <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                                                        <div>
                                                            <p className="text-muted-foreground">{communes}</p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coverage Info */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-foreground mb-6">Couverture Nationale</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Même si votre zone n'est pas listée ci-dessus, nous pouvons intervenir partout en France. Contactez-nous
                            pour vérifier la disponibilité dans votre secteur.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="text-lg px-8 py-6 rounded-full">
                                <Phone className="w-5 h-5 mr-2" />
                                <a href="tel:+33 6 30 30 20 53">06 30 30 20 53</a>
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full bg-transparent">
                                <Mail className="w-5 h-5 mr-2" />
                                Demander un devis
                            </Button>
                        </div>
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
