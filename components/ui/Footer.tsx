import {
    Phone,
    Mail,
    MapPin,
} from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-card border-t py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">

                    <div>
                        <h3 className="font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="/services" className="hover:text-foreground transition-colors">Enlèvement gratuit VHU</a></li>
                            <li><a href="/services" className="hover:text-foreground transition-colors">Recyclage automobile</a></li>
                            <li><a href="/services" className="hover:text-foreground transition-colors">Dépollution véhicules</a></li>
                            <li><a href="/services" className="hover:text-foreground transition-colors">Certificat de destruction</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Zones d'intervention</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="/zones/nouvelle-aquitaine" className="hover:text-foreground transition-colors">Nouvelle-Aquitaine</a></li>
                            <li><a href="/zones/bretagne" className="hover:text-foreground transition-colors">Bretagne</a></li>
                            <li><a href="/zones/hauts-de-france" className="hover:text-foreground transition-colors">Hauts-de-France</a></li>
                            <li><a href="/zones/auvergne-rhone-alpes" className="hover:text-foreground transition-colors">Auvergne-Rhône-Alpes</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">À propos</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="/a-propos" className="hover:text-foreground transition-colors">
                                    Notre entreprise
                                </a>
                            </li>
                            <li>
                                <a href="/blog" className="hover:text-foreground transition-colors">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-foreground transition-colors">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="/recyclage-guide" className="hover:text-foreground transition-colors">
                                    guide de recyclage
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Contact</h3>
                        <div className="space-y-3 text-sm text-muted-foreground">
                            <div className="flex items-center">
                                <Phone className="w-4 h-4 mr-2" />
                                <a href="tel:+33630302053">06 30 30 20 53</a>
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
                    <p>&copy; 2024 Casse-VHU. Tous droits réservés. | Centre VHU agréé préfecture</p>
                </div>
            </div>
        </footer>
    )
}