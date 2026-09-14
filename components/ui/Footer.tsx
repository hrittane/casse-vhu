import {
    Phone,
    Mail,
    MapPin,
} from "lucide-react"
import { getZones } from "@/lib/zones"

export default function Footer() {
    const regions = getZones().filter((z) => z.type === "Région").slice(0, 4)

    return (
        <footer className="bg-card border-t py-12 pb-32 lg:pb-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">

                    <div>
                        <h3 className="font-semibold mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="/enlevement-epave" className="hover:text-foreground transition-colors">Enlèvement d'épave gratuit</a></li>
                            <li><a href="/centre-vhu-agree" className="hover:text-foreground transition-colors">Centre VHU agréé</a></li>
                            <li><a href="/epaviste-agree" className="hover:text-foreground transition-colors">Épaviste agréé</a></li>
                            <li><a href="/services" className="hover:text-foreground transition-colors">Tous nos services</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Zones d'intervention</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {regions.map((region) => (
                                <li key={region.slug}>
                                    <a href={`/epaviste/${region.slug}`} className="hover:text-foreground transition-colors">
                                        {region.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a href="/epaviste" className="hover:text-foreground transition-colors">Toutes nos zones</a>
                            </li>
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
                    <p className="mt-2">
                        Created by <a href="https://www.moroccan.dev/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Soufiane Hrittane</a>
                    </p>
                </div>
            </div>
        </footer>
    )
}