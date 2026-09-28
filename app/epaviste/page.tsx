import {canonicalUrl, internalUrl } from "@/lib/site"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Épaviste par ville et région : nos zones d'intervention",
    description: "Épaviste agréé et enlèvement d'épave gratuit par ville, région et département en France. Centre VHU agréé proche de chez vous, intervention sous 24 à 48h.",
    alternates: {
        canonical: canonicalUrl("/epaviste"),
    },
    openGraph: {
        url: canonicalUrl("/epaviste"),
    },
}
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import { getZones } from "@/lib/zones"
import Link from "next/link"

export default function ZonesPage() {
    const regions = getZones().filter((z) => z.type === "Région")
    const departments = getZones().filter((z) => z.type === "Département")
    const communes = getZones().filter((z) => z.type === "Grandes communes")

    // Mirrors the visible zero-barrier FAQ below. Kept in step with it by hand:
    // the answers are the same sentences, trimmed for the schema.
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": `${canonicalUrl("/epaviste")}#faq`,
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Peut-on faire appel à un épaviste gratuit sans carte grise ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, l'absence de carte grise ne vous prive pas de l'enlèvement. Il faut toutefois pouvoir prouver que le véhicule est le vôtre : déclaration de perte ou de vol de la carte grise établie en ligne sur l'ANTS, preuve de propriété (facture d'achat, certificat de non-gage ou attestation d'assurance) et pièce d'identité en cours de validité. L'épaviste peut enregistrer la cession pour destruction et déposer la demande de radiation à votre place."
                }
            },
            {
                "@type": "Question",
                "name": "L'épaviste gratuit prend-il en charge les véhicules accidentés ou brûlés ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Oui, quel que soit l'état du véhicule : accidenté, brûlé, inondé ou en panne. Un véhicule immatriculé est un VHU et sa destruction est une obligation légale pour son propriétaire."
                }
            },
            {
                "@type": "Question",
                "name": "Pourquoi l'enlèvement est-il gratuit alors que la voiture part à la casse ?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Parce que la reprise d'un véhicule hors d'usage est obligatoire et gratuite. Un ferrailleur n'a pas le droit de facturer l'enlèvement : l'épaviste se rémunère sur les matières récupérées après dépollution."
                }
            }
        ]
    }

    return (
        <div className="min-h-screen bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />


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

            {/* Explanatory content: without this the hub was only 267 words,
                which Google can read as thin on a page that links to every zone. */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <h2 className="text-3xl font-bold text-foreground">
                            Un épaviste agréé dans votre région
                        </h2>
                        <p className="text-muted-foreground">
                            Casse-VHU organise l'enlèvement de votre véhicule hors
                            d'usage partout en France, gratuitement et sans que vous
                            ayez à vous déplacer. Quel que soit votre département, un
                            centre VHU agréé par la préfecture se trouve à moins de
                            quelques heures de route : nous organisons le transport
                            vers ce centre et nous vous remettons le certificat de
                            destruction sur place.
                        </p>
                        <p className="text-muted-foreground">
                            Ce service est obligatoire dans les deux sens : le
                            propriétaire d'un véhicule hors d'usage doit le faire
                            prendre en charge, et le centre agréé doit délivrer le
                            certificat de destruction. C'est ce document qui vous
                            permet de radier la carte grise du véhicule auprès de
                            l'ANTS.
                        </p>
                        <p className="text-muted-foreground">
                            Sélectionnez votre zone ci-dessous pour connaître les
                            communes couvertes, le département concerné et les
                            modalités d'intervention sur place. Vous pouvez aussi
                            appeler directement le 06 30 30 20 53 : un conseiller
                            vous répond du lundi au samedi et organise
                            l'enlèvement sous 24 à 48 heures.
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
                                {regions.map((region) => {
                                    return (
                                        <Link key={region.slug} href={internalUrl(`/epaviste/${region.slug}`)}>                                            <Card className="p-6 hover:shadow-lg transition-all hover:border-primary/50 bg-gradient-to-br from-primary/5 to-primary/10 cursor-pointer h-full">
                                                <CardContent className="pt-6">
                                                    <div className="flex items-start gap-3">
                                                        <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                                        <div>
                                                            <h3 className="font-semibold text-foreground">{region.displayName}</h3>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
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
                                {departments.map((departement) => {
                                    return (
                                        <Link key={departement.slug} href={internalUrl(`/epaviste/${departement.slug}`)}>                                            <Card className="p-6 hover:shadow-lg transition-all hover:border-secondary/50 bg-gradient-to-br from-secondary/5 to-secondary/10 cursor-pointer h-full">
                                                <CardContent className="pt-6">
                                                    <div className="flex items-start gap-3">
                                                        <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                                                        <div>
                                                            <h3 className="font-semibold text-foreground">{departement.displayName}</h3>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
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
                                {communes.map((commune) => {
                                    return (
                                        <Link key={commune.slug} href={internalUrl(`/epaviste/${commune.slug}`)}>                                            <Card className="p-6 hover:shadow-lg transition-all hover:border-accent/50 bg-gradient-to-br from-accent/5 to-accent/10 cursor-pointer h-full">
                                                <CardContent className="pt-6">
                                                    <div className="flex items-start gap-3">
                                                        <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                                                        <div>
                                                            <p className="text-muted-foreground">{commune.label} et sa région</p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Zero-barrier FAQ: targets "épaviste gratuit sans carte grise",
                the searches that convert best because they are blocked by a
                missing document rather than by price. */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            Questions fréquentes sur l'épaviste gratuit
                        </h2>
                        <p className="text-muted-foreground mb-10">
                            L'épaviste gratuit est le premier réflexe quand on veut se
                            débarrasser d'un véhicule. Ces trois questions reviennent le
                            plus souvent, en particulier quand la carte grise a été
                            perdue.
                        </p>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-2xl font-semibold text-foreground mb-3">
                                    Peut-on faire appel à un épaviste gratuit sans carte grise ?
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    Oui. L'absence de carte grise ne vous prive pas de
                                    l'enlèvement : l'épaviste gratuit intervient quand même
                                    et se charge de la partie administrative. En revanche,
                                    il faut pouvoir prouver que le véhicule est bien le
                                    vôtre, car c'est cette preuve qui autorise la radiation
                                    de l'immatriculation. Concrètement, le service demande :
                                </p>
                                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                                    <li>
                                        Une <strong>déclaration de perte ou de vol</strong>{" "}
                                        de la carte grise, établie en ligne sur le
                                        service officiel de l'ANTS.
                                    </li>
                                    <li>
                                        La <strong>preuve de propriété</strong> : facture
                                        d'achat, certificat de non-gage, ou attestation
                                        d'assurance mentionnant l'immatriculation.
                                    </li>
                                    <li>
                                        Une <strong>pièce d'identité</strong> en cours de
                                        validité, celle du propriétaire ou de son mandataire
                                        muni d'un mandat.
                                    </li>
                                </ul>
                                <p className="text-muted-foreground mt-4">
                                    Si la carte grise a été perdue mais que vous
                                    disposez de la facture ou de l'attestation
                                    d'assurance, l'épaviste peut enregistrer la cession
                                    pour destruction et déposer la demande de radiation
                                    à votre place. Le certificat de destruction vous est
                                    remis à la fin de l'intervention.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-foreground mb-3">
                                    L'épaviste gratuit prend-il en charge les véhicules accidentés ou brûlés ?
                                </h3>
                                <p className="text-muted-foreground">
                                    Oui, quel que soit l'état du véhicule : accidenté,
                                    brûlé, inondé, ou simplement en panne. Un véhicule
                                    immatriculé est un VHU, et la destruction automobile
                                    est une obligation légale pour son propriétaire. Plus
                                    il est dégradé, plus la procédure administrative est
                                    simple, puisqu'il n'y a plus de valeur de revente en
                                    jeu.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold text-foreground mb-3">
                                    Pourquoi l'enlèvement est-il gratuit alors que la voiture part à la casse ?
                                </h3>
                                <p className="text-muted-foreground mb-4">
                                    Parce que la reprise d'un véhicule hors d'usage est
                                    <em> obligatoire et gratuite</em> : un ferrailleur
                                    n'a pas le droit de vous facturer l'enlèvement, et
                                    l'épaviste se rémunère sur les matières
                                    récupérées (métaux, plastiques) après
                                    dépollution. Ce que vous cherchez donc n'est pas
                                    un prix de removal, mais un centre qui accepte
                                    de venir.
                                </p>
                                <p className="text-muted-foreground">
                                    Si vous cherchez plutôt à connaître la
                                    <Link href={internalUrl("/prix-voiture-casse")} className="text-primary font-medium hover:underline">
                                        valeur de reprise d'une voiture à la casse
                                    </Link>
                                    , cette estimation dépend du poids et de l'état
                                    du véhicule. Le service reste, lui, gratuit.
                                </p>
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
                                <a href="tel:+33630302053">06 30 30 20 53</a>
                            </Button>
                            <Link href={internalUrl("/contact")}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-lg px-8 py-6 rounded-full bg-transparent"
                                    asChild
                                >
                                    <div>
                                        <Mail className="w-5 h-5 mr-2" />
                                        Demander un devis
                                    </div>
                                </Button>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
