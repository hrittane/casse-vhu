import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Guide du Recyclage",
}
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, Recycle, Truck, CheckCircle, FileText } from "lucide-react"
import Link from "next/link"

export default function GuidePage() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.casse-vhu.fr/recyclage-guide"
        },
        "headline": "Le Guide Complet du Recyclage Automobile en France",
        "description": "Tout ce que vous devez savoir sur la mise à la casse de votre véhicule et le recyclage automobile.",
        "author": {
            "@type": "Organization",
            "name": "Casse-VHU"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Casse-VHU",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.casse-vhu.fr/logo.png"
            }
        },
        "datePublished": new Date().toISOString()
    };

    return (
        <div className="min-h-screen bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">Le Guide Complet du Recyclage Automobile en France</h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Tout ce que vous devez savoir sur la mise à la casse de votre véhicule et le recyclage automobile.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="prose lg:prose-xl">
                            <p>
                                Le recyclage automobile est un processus essentiel pour la protection de l'environnement et la gestion durable des ressources. En France, la réglementation est stricte et vise à garantir que les véhicules hors d'usage (VHU) sont traités de manière écologique et sécurisée.
                            </p>
                            <h2>Pourquoi le recyclage automobile est-il important ?</h2>
                            <p>
                                Chaque année, des millions de voitures arrivent en fin de vie. Sans un processus de recyclage approprié, ces véhicules peuvent devenir une source de pollution importante. Le recyclage permet de :
                            </p>
                            <ul>
                                <li>Récupérer des matériaux précieux comme l'acier, l'aluminium et le plastique.</li>
                                <li>Éviter la contamination des sols et des eaux par des fluides dangereux (huiles, liquides de refroidissement, etc.).</li>
                                <li>Réduire la consommation d'énergie et les émissions de gaz à effet de serre liées à la production de nouveaux matériaux.</li>
                            </ul>
                            <h2>Les étapes du recyclage d'un véhicule</h2>
                            <ol>
                                <li>
                                    <strong>La prise en charge par un centre VHU agréé :</strong> Seuls les centres agréés sont autorisés à traiter les véhicules hors d'usage.
                                </li>
                                <li>
                                    <strong>La dépollution :</strong> Le véhicule est vidé de tous ses liquides et composants dangereux.
                                </li>
                                <li>
                                    <strong>Le démontage des pièces réutilisables :</strong> Les pièces en bon état sont démontées pour être revendues sur le marché de l'occasion.
                                </li>
                                <li>
                                    <strong>Le broyage :</strong> La carcasse est broyée pour séparer les différents matériaux.
                                </li>
                                <li>
                                    <strong>La valorisation :</strong> Les matériaux triés sont envoyés vers des filières de recyclage pour être transformés en nouvelles matières premières.
                                </li>
                            </ol>
                            <h2>Comment mettre sa voiture à la casse ?</h2>
                            <p>
                                Si vous possédez un véhicule hors d'usage, vous devez le confier à un centre VHU agréé. La procédure est généralement gratuite. Vous devrez fournir la carte grise du véhicule, un certificat de non-gage et une pièce d'identité. Pour en savoir plus sur nos services, consultez notre <Link href="/services">page services</Link> ou <Link href="/contact">contactez-nous</Link> directement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}