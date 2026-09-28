import { SITE_URL, canonicalUrl, internalUrl } from "@/lib/site"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Phone,
    CheckCircle,
    Truck,
    Scale,
    Wrench,
    FileWarning,
    Recycle,
    ArrowRight,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Prix Voiture à la Casse | Vente, Reprise & Rachat d'Épave",
    description: "Estimation du prix d'une voiture à la casse : poids, état, pièces réutilisables. Reprise et rachat d'épave véhicule, enlèvement gratuit en 24 à 48h.",
    alternates: {
        canonical: canonicalUrl("/prix-voiture-casse"),
    },
    openGraph: {
        title: "Prix Voiture à la Casse | Vente, Reprise & Rachat d'Épave",
        description: "Les 4 critères qui déterminent la valeur de reprise d'un véhicule : poids, état, composants réutilisables, formalités.",
        url: canonicalUrl("/prix-voiture-casse"),
        siteName: "Casse-VHU",
        locale: "fr_FR",
        type: "website",
    },
}

const schema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    "@id": `${canonicalUrl("/prix-voiture-casse")}#business`,
    "name": "Casse-VHU",
    "description": "Reprise, rachat et vente de véhicules hors d'usage : estimation du prix d'une voiture à la casse et enlèvement gratuit.",
    "url": canonicalUrl("/prix-voiture-casse"),
    "logo": `${SITE_URL}/logo.png`,
    "telephone": "+33-630-302-053",
    "parentOrganization": { "@id": `${SITE_URL}/#organization` },
    "areaServed": {
        "@type": "Country",
        "name": "France",
    },
    "priceRange": "Gratuit",
    "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+33-630-302-053",
        "contactType": "customer service",
        "areaServed": "FR",
        "availableLanguage": "French",
    },
}

const factors = [
    {
        icon: Scale,
        title: "Le poids du véhicule",
        body: "C'est le premier critère, et le plus déterminant. Un épaviste achète la matière, pas la voiture : l'acier, l'aluminium, le cuivre et le plastique contenu dans le véhicule ont une valeur de marché. Un utilitaire de 2,5 tonnes ne se valorise donc pas sur la même base qu'une citadine de 900 kg. Le poids déclaré sur la carte grise donne une première indication, mais c'est le poids réel, à vide, qui fait foi au moment de la reprise.",
    },
    {
        icon: Wrench,
        title: "Les composants réutilisables",
        body: "Un véhicule de moins de 5 ans peut encore avoir de la valeur en pièces détachées : moteur, boîte de vitesses, embrayage, alternateur, climateur, boîtier électronique. Cette valeur s'ajoute à la valeur matière. À l'inverse, un véhicule très ancien, dont les références de pièces ne se trouvent plus, se valorise essentiellement en fonte et en plastique.",
    },
    {
        icon: FileWarning,
        title: "L'état général du véhicule",
        body: "Complet ou incomplet, ça change tout. Un véhicule entier, moteur et pot catalytique sur place, est repris sans discussion. Un véhicule démantelé, dont il ne reste que la coque, est refusé par la plupart des centres VHU. Un véhicule brûlé ou fortement accidenté reste acceptable, mais il faut pouvoir prouver qu'il est bien le vôtre.",
    },
    {
        icon: Recycle,
        title: "La filière de dépollution",
        body: "Un véhicule détruit dans un centre agréé par la préfecture est intégralement repris, même s'il ne vaut rien en l'état. C'est la différence entre un épaviste et un ferrailleur : le second achète, le premier doit reprendre. La reprise ne vous coûte rien et vous donne droit au certificat de destruction.",
    },
]

const faqData = [
    {
        question: "Quel est le prix d'une voiture à la casse ?",
        answer: "Le prix dépend du poids, de l'état et des pièces réutilisables du véhicule. Il n'existe pas de tarif unique : deux voitures du même modèle peuvent avoir des valeurs très différentes. Pour une estimation fiable, contactez un centre VHU agréé avec la carte grise et le kilométrage.",
    },
    {
        question: "La reprise de mon véhicule est-elle vraiment gratuite ?",
        answer: "Oui. La reprise d'un véhicule hors d'usage est obligatoire et gratuite pour le propriétaire. L'épaviste se rémunère sur la matière récupérée après dépollution, jamais sur une facture d'enlèvement.",
    },
    {
        question: "Dois-je fournir la carte grise pour faire estimer mon véhicule ?",
        answer: "Elle aide à l'estimation, car elle donne le poids, la puissance et l'année. Mais elle n'est pas indispensable pour être repris : une déclaration de perte ou de vol, avec une preuve de propriété, suffit.",
    },
    {
        question: "Comment est calculée la valeur de reprise ?",
        answer: "À partir du poids de matière métal et plastique récupérable, augmenté de la valeur des pièces encore exploitables, puis diminué le cas échéant des frais de traitement. Aucun frais d'enlèvement ne s'ajoute à ce calcul.",
    },
    {
        question: "Que deviennent le certificat de destruction et la carte grise ?",
        answer: "Le centre VHU agréé vous remet un certificat de destruction. C'est ce document qui vous permet de radier l'immatriculation du véhicule auprès de l'ANTS, qui supprime alors la carte grise de ses fichiers.",
    },
]

export default function PrixVoitureCassePage() {
    return (
        <div className="min-h-screen bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            {/* Hero */}
            <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                            <Scale className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">Estimation et reprise</span>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                            Estimation du Prix d'une Voiture à la Casse &amp; Rachat Épave
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8">
                            Combien vaut votre véhicule hors d'usage&nbsp;? Quatre critères
                            suffisent à le dire. Et dans tous les cas, l'enlèvement reste
                            gratuit.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="text-lg px-8 py-6 rounded-full" asChild>
                                <a href="tel:+33630302053">
                                    <Phone className="w-5 h-5 mr-2" />
                                    06 30 30 20 53
                                </a>
                            </Button>
                            <Link href={internalUrl("/contact")}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-lg px-8 py-6 rounded-full bg-transparent"
                                    asChild
                                >
                                    <span>
                                        Demander une estimation
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <h2 className="text-3xl font-bold text-foreground">
                            Une voiture à la casse a une valeur, et elle est calculable
                        </h2>
                        <p className="text-muted-foreground">
                            Le prix d'un véhicule à la casse n'est pas un prix de
                            concession : c'est un prix de matière. Lorsque votre voiture
                            part à la casse, elle n'est pas revendue comme une voiture
                            d'occasion. Elle est découpée, dépolluée, broyée, et ses
                            métaux et plastiques sont revendus séparément. C'est
                            ce qui la détermine.
                        </p>
                        <p className="text-muted-foreground">
                            Le point important : le service d'enlèvement reste gratuit
                            quel que soit le montant. Si vous cherchez un
                            <Link href={internalUrl("/")} className="text-primary font-medium hover:underline">
                                centre VHU agréé
                            </Link>
                            , vous ne paierez ni le transport, ni la main-d'œuvre, ni
                            le certificat de destruction. Revenez sur l'estimation du
                            <Link href={internalUrl("/enlevement-epave")} className="text-primary font-medium hover:underline">
                                enlèvement d'épave gratuit
                            </Link>
                            {" "}et nous passons au chiffre.
                        </p>
                    </div>
                </div>
            </section>

            {/* Factors */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-14">
                            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                                Les 4 critères du prix d'une voiture à la casse
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                Un seul de ces critères peut doubler la valeur d'un
                                véhicule. Voici comment ils fonctionnent.
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {factors.map((factor) => {
                                const Icon = factor.icon
                                return (
                                    <Card key={factor.title} className="p-6 h-full">
                                        <CardContent className="pt-6">
                                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                                <Icon className="w-6 h-6 text-primary" />
                                            </div>
                                            <h3 className="text-xl font-semibold text-foreground mb-3">
                                                {factor.title}
                                            </h3>
                                            <p className="text-muted-foreground">{factor.body}</p>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Reprise vs achat */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-6">
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            Vente, reprise ou rachat d'épave&nbsp;: quelle différence&nbsp;?
                        </h2>
                        <div className="space-y-4">
                            <p className="text-muted-foreground">
                                <strong className="text-foreground">La vente</strong> consiste
                                à céder le véhicule à un acheteur qui le revend en l'état.
                                Elle rapporte de l'argent mais suppose un véhicule
                                fonctionnel, avec un contrôle technique à jour.
                            </p>
                            <p className="text-muted-foreground">
                                <strong className="text-foreground">La reprise</strong> est le
                                service d'un épaviste ou d'un ferrailleur&nbsp;: il prend
                                en charge le véhicule quel que soit son état et l'emmène
                                au centre VHU agréé. La reprise est gratuite.
                            </p>
                            <p className="text-muted-foreground">
                                <strong className="text-foreground">Le rachat d'épave</strong>,
                                ou reprise avec indemnisation, désigne le cas où un
                                professionnel vous verse une contrepartie en plus de
                                l'enlèvement. Ce montant dépend exactement des critères
                                décrits ci-dessus, et il se négocie au cas par cas.
                            </p>
                        </div>
                        <p className="text-muted-foreground">
                            Dans tous les cas, vous obtenez un
                            <strong className="text-foreground"> certificat de destruction</strong>.
                            Sans lui, la carte grise reste active et vous continuez à
                            payer assurance et vignette.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
                            Questions fréquentes sur le prix d'une voiture à la casse
                        </h2>
                        <div className="space-y-8">
                            {faqData.map((faq) => (
                                <div key={faq.question}>
                                    <h3 className="text-xl font-semibold text-foreground mb-2">
                                        {faq.question}
                                    </h3>
                                    <p className="text-muted-foreground">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                            Faites estimer votre voiture à la casse gratuitement
                        </h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Un conseiller regarde votre véhicule et vous dit ce qu'il
                            vaut, sans engagement et sans déplacement de votre part.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="text-lg px-8 py-6 rounded-full" asChild>
                                <a href="tel:+33630302053">
                                    <Phone className="w-5 h-5 mr-2" />
                                    06 30 30 20 53
                                </a>
                            </Button>
                            <Link href={internalUrl("/contact")}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-lg px-8 py-6 rounded-full bg-transparent"
                                    asChild
                                >
                                    <span>
                                        <Truck className="w-5 h-5 mr-2" />
                                        Demander une estimation
                                    </span>
                                </Button>
                            </Link>
                        </div>
                        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                            <span className="flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                                Estimation sans engagement
                            </span>
                            <span className="flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                                Enlèvement sous 24 à 48h
                            </span>
                            <span className="flex items-center">
                                <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                                Certificat de destruction remis
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
