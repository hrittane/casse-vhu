import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Guide du recyclage automobile : comment recycler son véhicule ?",
    description: "Guide complet du recyclage automobile et de la mise à la casse d'un véhicule hors d'usage : centre VHU agréé, dépollution, certificat de destruction.",
    alternates: {
        canonical: "/recyclage-guide",
    },
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
            "@id": "https://casse-vhu.fr/recyclage-guide"
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
                "url": "https://casse-vhu.fr/logo.png"
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
                            <h2>Qu'est-ce qu'un véhicule hors d'usage (VHU) ?</h2>
                            <p>
                                Un <strong>véhicule hors d'usage</strong> (VHU) est une voiture, un utilitaire, une moto ou tout autre
                                véhicule destiné à la destruction, car irréparable, accidenté ou simplement trop ancien pour circuler.
                                En France, un VHU ne peut être ni abandonné ni confié à n'importe qui : il doit obligatoirement être
                                remis à un <Link href="/centre-vhu-agree">centre VHU agréé</Link>, seul habilité à le dépolluer et à le
                                recycler dans les règles.
                            </p>
                            <h2>Quels déchets le recyclage automobile traite-t-il ?</h2>
                            <p>
                                Le <strong>recyclage des déchets automobile</strong> couvre bien plus que la carcasse métallique. Un
                                centre VHU agréé traite notamment :
                            </p>
                            <ul>
                                <li>Les fluides dangereux : huiles moteur, liquide de refroidissement, liquide de frein, carburant résiduel.</li>
                                <li>Les batteries et accumulateurs (voiture, 12V, batteries de traction des hybrides et électriques).</li>
                                <li>Pneumatiques, amortisseurs, filtres, pots catalytiques contenant des métaux précieux.</li>
                                <li>Plastiques, vitrages, sièges et mousses, qui partent vers des filières de valorisation dédiées.</li>
                            </ul>
                            <h2>Quel est le taux de valorisation d'une voiture recyclée ?</h2>
                            <p>
                                Grâce à la réglementation européenne et française, plus de 95% de la masse de la voiture est aujourd'hui
                                valorisée : environ 75% par le recyclage des métaux et des matériaux, le reste par la valorisation
                                énergétique et le broyage des résidus. La <strong>dépollution</strong> systématique garantit qu'aucun fluide
                                dangereux ne rejoint l'environnement.
                            </p>
                            <h2>Dépollution et broyage : comment fonctionne la filière ?</h2>
                            <p>
                                Après la dépollution dans le centre VHU agréé, la carcasse vide est <strong>broyée</strong> puis séparée
                                par aimantation et flottation en trois grandes familles : les ferrailles, les métaux non ferreux
                                (aluminium, cuivre) et les résidus de broyage. Les pièces encore en bon état sont proposées sur le
                                marché de l'occasion, prolongeant la vie des composants. Ce circuit de <strong>valorisation des composants
                                auto</strong> est encadré par la loi depuis 2003.
                            </p>
                            <h2>Le recyclage des voitures : un geste pour l'environnement</h2>
                            <p>
                                Recycler une voiture, c'est éviter la fabrication de nouvelles matières premières et réduire les
                                émissions de CO2. En confiant votre épave à un <Link href="/enlevement-epave">enlèvement gratuit</Link>{" "}
                                puis à notre filière agréée, vous participez à une économie circulaire et vous repartez avec votre
                                certificat de destruction le jour même. Votre épave peut aussi vous ouvrir droit à la{" "}
                                <Link href="/blog/prime-conversion-2026-conditions-demarches">prime à la conversion</Link> si vous
                                remplacez votre véhicule.
                            </p>
                            <h2>Questions fréquentes sur le recyclage automobile</h2>
                            <p>
                                <strong>Le recyclage de ma voiture est-il payant ?</strong> Non : la reprise d'un véhicule complet est
                                gratuite et obligatoire, partout en France.
                            </p>
                            <p>
                                <strong>Puis-je faire recycler un véhicule sans carte grise ?</strong> Oui, avec une déclaration de
                                perte ou de vol et le certificat de non-gage. Consultez notre guide sur la{" "}
                                <Link href="/blog/comment-se-debarrasser-dune-voiture-sans-carte-grise">voiture sans carte grise</Link>.
                            </p>
                            <p>
                                <strong>Où se trouve un centre VHU agréé près de chez moi ?</strong> Retrouvez nos pages{" "}
                                <Link href="/epaviste">par région et par département</Link> pour connaître nos zones d'intervention.
                            </p>
                            <h2>Comment mettre sa voiture à la casse ?</h2>
                            <p>
                                Si vous possédez un véhicule hors d'usage, vous devez le confier à un centre VHU agréé. La procédure est généralement gratuite. Vous devrez fournir la carte grise du véhicule, un certificat de non-gage et une pièce d'identité. Découvrez ce qu'est un <Link href="/centre-vhu-agree">centre VHU agréé</Link>, comment se déroule notre service d'<Link href="/enlevement-epave">enlèvement d'épave gratuit</Link>, ou consultez notre <Link href="/services">page services</Link> et <Link href="/blog">le blog</Link>. Vous pouvez aussi <Link href="/contact">nous contacter</Link> directement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}