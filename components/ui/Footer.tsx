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
                                <a href="#services" className="hover:text-foreground transition-colors">
                                    Nos services
                                </a>
                            </li>
                            <li>
                                <a href="#vehicles" className="hover:text-foreground transition-colors">
                                    Véhicules acceptés
                                </a>
                            </li>
                            <li>
                                <a href="#process" className="hover:text-foreground transition-colors">
                                    Comment ça marche
                                </a>
                            </li>
                            <li>
                                <a href="/blog" className="hover:text-foreground transition-colors">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#faq" className="hover:text-foreground transition-colors">
                                    FAQ
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
                    <p>&copy; 2024 Casse-VHU. Tous droits réservés. | Centre VHU agréé préfecture</p>
                </div>
            </div>
        </footer>
    )
}