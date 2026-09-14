import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getZones } from "@/lib/zones"

export const metadata: Metadata = {
  title: "Casse Auto & Épaviste Agréé VHU | Enlèvement Gratuit sous 24h",
  description: "Épaviste agréé VHU : enlèvement d'épave 100% gratuit, intervention sous 24h, certificat de destruction fourni sur place. Centre VHU agréé préfecture, service partout en France. Appelez le 06 30 30 20 53.",
  alternates: {
    canonical: "/",
  },
}
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ContactForm } from "@/components/ui/ContactForm"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  Phone,
  Mail,
  MapPin,
  Recycle,
  Truck,
  Star,
  CheckCircle,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Car,
  Bike,
  CarTaxiFront,
  FileText,
  HelpCircle,
  ChevronDown,
} from "lucide-react"

export default function CasseVHULanding() {
  const zones = getZones()
  const regions = zones.filter((z) => z.type === "Région")
  const departments = zones.filter((z) => z.type === "Département")
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "L'enlèvement d'épave est-il vraiment gratuit ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, le service est entièrement gratuit partout en France, si votre véhicule est complet avec ses éléments essentiels (moteur, pot catalytique...). Aucun frais caché, aucune surprise."
        }
      },
      {
        "@type": "Question",
        "name": "Quels documents faut-il fournir ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La carte grise du véhicule, une pièce d'identité du propriétaire et le formulaire Cerfa n°15776*02 (cession pour destruction) rempli et signé."
        }
      },
      {
        "@type": "Question",
        "name": "Et si je n'ai plus la carte grise ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous pouvons intervenir, mais un certificat de non-gage et une déclaration de perte ou de vol seront nécessaires. Nous vous guidons dans ces démarches."
        }
      },
      {
        "@type": "Question",
        "name": "Que devient mon véhicule après l'enlèvement ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Il est transporté dans un centre agréé VHU pour dépollution, recyclage et destruction légale selon les normes environnementales en vigueur."
        }
      },
      {
        "@type": "Question",
        "name": "Puis-je bénéficier d'une prime à la conversion ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, si votre véhicule répond aux critères, nous vous guiderons dans la demande auprès des autorités compétentes pour obtenir votre prime à la conversion."
        }
      },
      {
        "@type": "Question",
        "name": "Intervenez-vous le week-end ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, nous proposons des créneaux le samedi selon les disponibilités. Contactez-nous pour organiser un rendez-vous qui vous convient."
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





      {/* Hero Section - Preserved as requested */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <Image
          src="/car-scrape.webp"
          alt="Enlèvement d'épaves gratuit"
          fill
          sizes="100vw"
          priority
          quality={80}
          className="absolute inset-0 object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-secondary/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content and CTA */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
                Enlèvement d'épaves gratuit partout en France
              </h1>
              <p className="text-xl text-white/90 mb-8 text-pretty">
                Votre épaviste agréé VHU pour un service rapide, gratuit et 100% conforme. Nous assurons la prise en
                charge complète des démarches administratives, la dépollution et le recyclage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all bg-white text-primary hover:bg-white/90 w-full sm:w-auto"
                    asChild
                  >
                    <span>
                      <Truck className="w-5 h-5 mr-2" />
                      Demander un enlèvement
                    </span>
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 rounded-full bg-transparent border-white text-white hover:bg-white hover:text-primary"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <a href="tel:+33630302053">06 30 30 20 53</a>
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-white/90">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-white" />
                  <span>100% Gratuit</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-white" />
                  <span>Enlèvement sous 48h</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-white" />
                  <span>Agréé préfecture</span>
                </div>
              </div>
            </div>

            {/* Right side - Lead capture form */}
            <ContactForm />
          </div>
        </div>
      </section>

      <section id="vehicles" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Casse auto agréée VHU : quels véhicules récupérons-nous ?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Notre centre VHU agréé prend en charge tous types de véhicules hors d'usage, quel que soit leur état. Épaviste professionnel, nous assurons l'enlèvement d'épave gratuit partout en France.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 text-center bg-[#D0E0D3] ">
              <CardContent className="pt-6">
                {/* <Car className="w-12 h-12 text-primary mx-auto mb-4 " /> */}

                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-10 h-10 text-primary" />
                </div>

                <h3 className="font-semibold mb-2">Voitures particulières</h3>
                <p className="text-sm text-muted-foreground">Essence, diesel, électrique, hybride</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center bg-[#D0E0D3]">
              <CardContent className="pt-6">
                {/* <Truck className="w-12 h-12 text-primary mx-auto mb-4" /> */}
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Utilitaires et camionnettes</h3>
                <p className="text-sm text-muted-foreground">Tous types de véhicules utilitaires</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center bg-[#D0E0D3]">
              <CardContent className="pt-6">
                {/* <Car className="w-12 h-12 text-primary mx-auto mb-4" /> */}
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bike className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Motos, scooters et quads</h3>
                <p className="text-sm text-muted-foreground">Deux-roues et véhicules de loisir</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center bg-[#D0E0D3]">
              <CardContent className="pt-6">
                {/* <TruckElectric className="w-12 h-12 text-primary mx-auto mb-4" /> */}
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Camping-cars et caravanes</h3>
                <p className="text-sm text-muted-foreground">Véhicules de loisir et de voyage</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center bg-[#D0E0D3]">
              <CardContent className="pt-6">
                {/* <Truck className="w-12 h-12 text-primary mx-auto mb-4" /> */}
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CarTaxiFront className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Poids lourds</h3>
                <p className="text-sm text-muted-foreground">Bus, camions et véhicules industriels</p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center bg-[#D0E0D3]">
              <CardContent className="pt-6">
                {/* <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" /> */}
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Tous états acceptés</h3>
                <p className="text-sm text-muted-foreground">Accidenté, brûlé, inondé, moteur HS...</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              <div>
                <p className="text-secondary font-medium mb-2">Bienvenue chez Casse-VHU</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Votre Épaviste Agréé et Centre VHU de Confiance
                </h2>
                <p className="text-lg text-muted-foreground">
                  Chez Casse-VHU, votre centre VHU agréé, nous savons à quel point vous valorisez votre temps et l'environnement. Nos épavistes professionnels arrivent toujours à l'heure pour l'enlèvement de votre épave. Nous intervenons partout en France. C'est pourquoi vous devriez nous choisir :
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Enlèvement Gratuit</h3>
                    <p className="text-muted-foreground">
                      Service rapide sous 24-48h partout en France, sans frais cachés. Notre équipe est prête à
                      intervenir dans toute situation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Démarches Administratives</h3>
                    <p className="text-muted-foreground">
                      Toutes les formalités sont prises en charge : certificat de destruction, déclaration en
                      préfecture. Nous nous occupons de tout.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Recycle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Centre Agréé</h3>
                    <p className="text-muted-foreground">
                      Recyclage et dépollution dans un centre VHU agréé. Tous nos véhicules sont inspectés selon les
                      normes environnementales.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Truck Image */}
            <div className="relative">
              <div className="relative z-10">
                <Image src="/logoVhu.png" alt="Camion de dépannage Casse-VHU" width={500} height={500} className="w-full h-auto mx-auto" />
              </div>
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Section */}
      <section className="relative h-[500px] md:h-96 overflow-hidden">
        <div
          className="absolute inset-0"
        >
          <Image
            src="/car-scrape.webp"
            alt="Recyclage automobile"
            fill
            sizes="100vw"
            quality={80}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
              Plus de 10 000 véhicules recyclés
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 opacity-90">
              Faites confiance à notre expertise pour un recyclage automobile responsable
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">10,000+</div>
                <div className="text-base md:text-lg opacity-90">Véhicules recyclés</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">24h</div>
                <div className="text-base md:text-lg opacity-90">Délai d'intervention</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">100%</div>
                <div className="text-base md:text-lg opacity-90">Gratuit & Écologique</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="process" className="pt-20">
        <div className="container mx-auto px-4">

          <div className="text-center mb-16 md:mb-0 ">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Enlèvement d'épave gratuit : comment ça marche ?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Un processus simple en 4 étapes pour faire enlever votre épave gratuitement par un épaviste agréé. Certificat de destruction fourni sur place.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">

            {/* desktop vertical timeline - unchanged */}
            <div className="hidden lg:block">
              <div className="relative px-8 py-20">
                {/* Continuous horizontal line */}
                <div className="absolute top-1/2 left-50 right-50 h-1 bg-primary transform -translate-y-1/2 z-10"></div>

                {/* Timeline container with 4 equal sections */}
                <div className="grid grid-cols-4 gap-0 relative">

                  {/* Step 1 - Above timeline */}
                  <div className="flex flex-col items-center mb-[85%]">
                    <Card className="p-6 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 bg-white shadow-lg w-full max-w-xs hover:shadow-xl transform hover:-translate-y-1 ">
                      <CardContent className="p-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-3 text-center text-foreground">Contactez-nous</h3>
                        <p className="text-sm text-muted-foreground mb-3 text-center leading-relaxed">
                          Par téléphone au <a href="tel:+33630302053">06 30 30 20 53</a> ou via notre formulaire en ligne.
                        </p>
                        <div className="text-sm text-primary font-medium text-center">⏱️ 5 minutes</div>
                      </CardContent>
                    </Card>
                    {/* Connector line pointing down */}
                    <div className="w-0.5 h-6 bg-primary"></div>
                    {/* Numbered circle on the timeline */}
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white z-20">
                      1
                    </div>
                  </div>

                  {/* Step 2 - Below timeline */}
                  <div className="flex flex-col items-center mt-[85%]">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white z-20">
                      2
                    </div>

                    {/* Connector line pointing up */}
                    <div className="w-0.5 h-6 bg-primary"></div>

                    {/* Content card below timeline */}
                    <Card className="p-6 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 bg-white shadow-lg w-full max-w-xs hover:shadow-xl transform hover:translate-y-1">
                      <CardContent className="p-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Clock className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-3 text-center text-foreground">Planification</h3>
                        <p className="text-sm text-muted-foreground mb-3 text-center leading-relaxed">
                          Nous fixons ensemble un créneau selon vos disponibilités.
                        </p>
                        <div className="text-sm text-primary font-medium text-center">📅 24-48h max</div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Step 3 - Above timeline */}
                  <div className="flex flex-col items-center mb-[85%]">
                    <Card className="p-6 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 bg-white shadow-lg w-full max-w-xs hover:shadow-xl transform hover:-translate-y-1">
                      <CardContent className="p-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Truck className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-3 text-center text-foreground">Enlèvement</h3>
                        <p className="text-sm text-muted-foreground mb-3 text-center leading-relaxed">
                          Notre équipe se déplace avec le matériel adapté.
                        </p>
                        <div className="text-sm text-primary font-medium text-center">🚛 30 min moy.</div>
                      </CardContent>
                    </Card>

                    {/* Connector line pointing down */}
                    <div className="w-0.5 h-6 bg-primary"></div>

                    {/* Numbered circle on the timeline */}
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white z-20">
                      3
                    </div>
                  </div>

                  {/* Step 4 - Below timeline */}
                  <div className="flex flex-col items-center mt-[85%] ">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg border-4 border-white z-20">
                      4
                    </div>

                    {/* Connector line pointing up */}
                    <div className="w-0.5 h-6 bg-primary"></div>

                    {/* Content card below timeline */}
                    <Card className="p-6 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 bg-white shadow-lg w-full max-w-xs hover:shadow-xl transform hover:translate-y-1">
                      <CardContent className="p-0">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FileText className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-semibold mb-3 text-center text-foreground">Certificat</h3>
                        <p className="text-sm text-muted-foreground mb-3 text-center leading-relaxed">
                          Vous recevez votre certificat de destruction officiel.
                        </p>
                        <div className="text-sm text-primary font-medium text-center">📋 Sur place</div>
                      </CardContent>
                    </Card>
                  </div>


                </div>
              </div>
            </div>

            {/* Mobile vertical timeline - unchanged */}
            <div className="lg:hidden">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
                <div className="space-y-8">
                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                      1
                    </div>
                    <div className="ml-6 flex-1">
                      <Card className="p-4 border-2">
                        <CardContent className="pt-4">
                          <div className="flex items-start space-x-3">
                            <Phone className="w-6 h-6 text-primary mt-1" />
                            <div>
                              <h3 className="font-semibold mb-2">Contactez-nous</h3>
                              <p className="text-sm text-muted-foreground">Par téléphone ou formulaire en ligne</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                      2
                    </div>
                    <div className="ml-6 flex-1">
                      <Card className="p-4 border-2">
                        <CardContent className="pt-4">
                          <div className="flex items-start space-x-3">
                            <Clock className="w-6 h-6 text-primary mt-1" />
                            <div>
                              <h3 className="font-semibold mb-2">Planification</h3>
                              <p className="text-sm text-muted-foreground">Rendez-vous selon vos disponibilités</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                      3
                    </div>
                    <div className="ml-6 flex-1">
                      <Card className="p-4 border-2">
                        <CardContent className="pt-4">
                          <div className="flex items-start space-x-3">
                            <Truck className="w-6 h-6 text-primary mt-1" />
                            <div>
                              <h3 className="font-semibold mb-2">Enlèvement</h3>
                              <p className="text-sm text-muted-foreground">Intervention avec matériel adapté</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl z-20">
                      4
                    </div>
                    <div className="ml-6 flex-1">
                      <Card className="p-4 border-2">
                        <CardContent className="pt-4">
                          <div className="flex items-start space-x-3">
                            <FileText className="w-6 h-6 text-primary mt-1" />
                            <div>
                              <h3 className="font-semibold mb-2">Certificat</h3>
                              <p className="text-sm text-muted-foreground">Document officiel remis sur place</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section id="zones" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Épaviste autour de moi : nos zones d'intervention</h2>
            <p className="text-lg text-muted-foreground">Trouvez un centre VHU agréé et un épaviste gratuit près de chez vous, partout en France</p>
          </div>

          {/* Bento Grid Layout */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4 auto-rows-fr">
              {regions.map((region, index) => {
                const featured = index === 0
                const gradients = [
                  "from-primary/15 to-primary/25 border-primary/30",
                  "from-secondary/10 to-secondary/20 border-secondary/20 hover:border-secondary/30",
                  "from-accent/10 to-accent/20 border-accent/20 hover:border-accent/30",
                  "from-primary/8 to-primary/15 border-primary/20 hover:border-primary/30",
                  "from-secondary/15 to-secondary/25 border-secondary/30",
                  "from-accent/8 to-accent/15 border-accent/20 hover:border-accent/30",
                  "from-secondary/8 to-secondary/15 border-secondary/20 hover:border-secondary/30",
                  "from-primary/10 to-primary/20 border-primary/20 hover:border-primary/30",
                ]
                const gradient = gradients[index % gradients.length]
                return (
                  <Link
                    key={region.slug}
                    href={`/epaviste/${region.slug}`}
                    className={`group ${featured ? "col-span-2 md:col-span-2 lg:col-span-2 md:row-span-2" : "col-span-1 md:col-span-2"}`}
                  >
                    <Card className={`p-3 h-full bg-gradient-to-br ${gradient} border-2 hover:border-primary/50 transition-colors ${featured ? "sm:p-6" : "sm:p-4"}`}>
                      <CardContent className={`pt-3 h-full flex flex-col justify-center ${featured ? "sm:pt-6" : "sm:pt-4"}`}>
                        <MapPin className="w-8 h-8 sm:w-12 sm:h-12 text-primary mb-2 sm:mb-4" />
                        <h3 className={`font-bold mb-1 sm:mb-2 text-foreground group-hover:underline ${featured ? "text-lg sm:text-xl" : "text-sm sm:text-base"}`}>
                          {region.name}
                        </h3>
                        {featured && (
                          <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-4">
                            Épaviste agréé & centre VHU agréé • Intervention sous 24h
                          </p>
                        )}
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>

            {/* Departments */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold text-foreground mb-3">Départements couverts</h3>
              <div className="flex flex-wrap gap-2">
                {departments.map((dept) => (
                  <Link key={dept.slug} href={`/epaviste/${dept.slug}`}>
                    <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                      {dept.name}
                    </Button>
                  </Link>
                ))}
                <Link href="/epaviste">
                  <Button variant="ghost" size="sm" className="rounded-full">
                    Toutes nos zones d'intervention
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground">
              <Phone className="w-4 h-4 inline mr-2" />
              Peu importe votre localisation, un épaviste agréé proche de chez vous intervient rapidement et
              gratuitement.
            </p>
            <Link href="/epaviste" className="inline-block mt-6">
              <Button size="lg" className="rounded-full px-8">
                Voir toutes nos zones d'intervention
                <MapPin className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Questions fréquentes</h2>
            <p className="text-lg text-muted-foreground">Tout ce que vous devez savoir sur l'enlèvement d'épaves</p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-15 gap-y-4">
              <div className="space-y-4">
                <Collapsible>
                  <CollapsibleTrigger className="w-full text-left py-4 flex justify-between items-center border-b-2 border-gray-200 ">
                    <h3 className="font-semibold text-md ml-3">L'enlèvement d'épave est-il vraiment gratuit ?</h3>
                    <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-200" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 py-4 border-t-0 text-muted-foreground">
                      Oui, le service est entièrement gratuit partout en France, si votre véhicule est complet avec ses
                      éléments essentiels (moteur, pot catalytique...). Aucun frais caché, aucune surprise.
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="w-full text-left py-4 flex justify-between items-center border-b-2 border-gray-200 ">
                    <h3 className="font-semibold text-md ml-3">Quels documents faut-il fournir ?</h3>
                    <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-200" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 py-4 border-t-0 text-muted-foreground">
                      <ul className="space-y-2">
                        <li>• Carte grise du véhicule</li>
                        <li>• Pièce d'identité du propriétaire</li>
                        <li>• Formulaire <a href="/blog/formulaire-cerfa-15776-02-guide-remplissage" className="text-primary hover:underline">Cerfa n°15776*02 (cession pour destruction)</a> rempli et signé</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="w-full text-left py-4 flex justify-between items-center border-b-2 border-gray-200 ">
                    <h3 className="font-semibold text-md ml-3">Et si je n'ai plus la carte grise ?</h3>
                    <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-200" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 py-4 border-t-0 text-muted-foreground">
                      Nous pouvons intervenir, mais un certificat de non-gage et une déclaration de perte ou de vol
                      seront nécessaires. Nous vous guidons dans ces démarches.
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
              <div className="space-y-4">
                <Collapsible>
                  <CollapsibleTrigger className="w-full text-left py-4 flex justify-between items-center border-b-2 border-gray-200 ">
                    <h3 className="font-semibold text-md ml-3">Que devient mon véhicule après l'enlèvement ?</h3>
                    <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-200" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 py-4 border-t-0 text-muted-foreground">
                      Il est transporté dans un centre agréé VHU pour dépollution, recyclage et destruction légale selon
                      les normes environnementales en vigueur.
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="w-full text-left py-4 flex justify-between items-center border-b-2 border-gray-200 ">
                    <h3 className="font-semibold text-md ml-3">Puis-je bénéficier d'une prime à la conversion ?</h3>
                    <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-200" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 py-4 border-t-0 text-muted-foreground">
                      Oui, si votre véhicule répond aux critères, nous vous guiderons dans la demande auprès des
                      autorités compétentes pour obtenir votre prime à la conversion.
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger className="w-full text-left py-4 flex justify-between items-center border-b-2 border-gray-200 ">
                    <h3 className="font-semibold text-md ml-3">Intervenez-vous le week-end ?</h3>
                    <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-200" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-6 py-4 border-t-0 text-muted-foreground">
                      Oui, nous proposons des créneaux le samedi selon les disponibilités. Contactez-nous pour organiser
                      un rendez-vous qui vous convient.
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Ce que disent nos clients</h2>
            <p className="text-lg text-muted-foreground">Plus de 10 000 véhicules recyclés avec satisfaction</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Service impeccable ! Ils sont venus récupérer ma vieille voiture le lendemain de mon appel. Très
                  professionnel."
                </p>
                <div className="flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                    style={{ backgroundColor: "#215A6D" }}
                  >
                    <span className="text-white font-semibold text-sm">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold">Raymond ROTFARB</p>
                    <p className="text-sm text-muted-foreground">Paris</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Excellent service client et démarches simplifiées. Je recommande vivement pour le recyclage auto."
                </p>
                <div className="flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                    style={{ backgroundColor: "#6BA539" }}
                  >
                    <span className="text-white font-semibold text-sm">JD</span>
                  </div>
                  <div>
                    <p className="font-semibold">David MIEZAN</p>
                    <p className="text-sm text-muted-foreground">Lyon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Rapide, efficace et gratuit. Parfait pour se débarrasser d'un véhicule en panne de manière
                  écologique."
                </p>
                <div className="flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                    style={{ backgroundColor: "#2B7A8B" }}
                  >
                    <span className="text-white font-semibold text-sm">SL</span>
                  </div>
                  <div>
                    <p className="font-semibold">Denis RONZIE</p>
                    <p className="text-sm text-muted-foreground">Marseille</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Contactez Casse-VHU.fr dès maintenant
              </h2>
              <p className="text-lg text-muted-foreground">
                Ne laissez pas une épave encombrer votre espace et polluer l'environnement
              </p>
            </div>
            <ContactForm />
            <div className="text-center mt-8 space-y-4">
              <div className="flex items-center justify-center space-x-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-2" />
                  <a href="tel:+33630302053" className="font-semibold">06 30 30 20 53</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-2" />
                  <a href="mailto:contact@casse-vhu.fr">contact@casse-vhu.fr</a>
                </div>
              </div>
              <p className="text-muted-foreground">📍 Intervention sous 24 à 48h – Service professionnel garanti</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
