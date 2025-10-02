import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  User,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  const posts = {
    "preparer-vehicule-enlevement-epave": {
      id: 1,
      title: "Comment bien préparer votre véhicule avant l'enlèvement d'épave",
      excerpt:
        "Découvrez les étapes essentielles pour préparer votre véhicule hors d'usage avant l'intervention de nos équipes.",
      content: `
        <p>L'enlèvement d'une épave nécessite une préparation minutieuse pour garantir un processus fluide et conforme à la réglementation. Voici notre guide complet pour bien préparer votre véhicule.</p>

        <h2>1. Rassemblez les documents nécessaires</h2>
        <p>Avant toute intervention, assurez-vous d'avoir en votre possession :</p>
        <ul>
          <li><strong>La carte grise du véhicule</strong> : document indispensable prouvant votre propriété</li>
          <li><strong>Une pièce d'identité valide</strong> : carte d'identité ou passeport</li>
          <li><strong>Le formulaire Cerfa n°15776*02</strong> : déclaration de cession pour destruction</li>
        </ul>

        <h2>2. Videz complètement le véhicule</h2>
        <p>Retirez tous vos effets personnels du véhicule :</p>
        <ul>
          <li>Vérifiez la boîte à gants, les vide-poches et le coffre</li>
          <li>N'oubliez pas les compartiments cachés</li>
          <li>Retirez les équipements ajoutés (GPS, autoradio personnalisé, etc.)</li>
        </ul>

        <h2>3. Préparez l'accès au véhicule</h2>
        <p>Pour faciliter l'intervention de nos équipes :</p>
        <ul>
          <li>Dégagez l'accès autour du véhicule</li>
          <li>Assurez-vous que la dépanneuse puisse s'approcher</li>
          <li>Signalez tout obstacle ou difficulté d'accès</li>
        </ul>

        <h2>4. Informez-nous des spécificités</h2>
        <p>Communiquez-nous toute information importante :</p>
        <ul>
          <li>État des pneus et possibilité de rouler</li>
          <li>Présence de carburant dans le réservoir</li>
          <li>Problèmes mécaniques particuliers</li>
          <li>Modifications apportées au véhicule</li>
        </ul>

        <h2>Que faire si des documents manquent ?</h2>
        <p>Si vous ne possédez plus certains documents, ne vous inquiétez pas. Nous pouvons vous accompagner dans les démarches de régularisation. Un certificat de non-gage peut parfois suffire selon les situations.</p>

        <h2>Le jour de l'enlèvement</h2>
        <p>Le jour J, nos équipes se chargeront de :</p>
        <ul>
          <li>Vérifier les documents</li>
          <li>Procéder à l'enlèvement sécurisé</li>
          <li>Vous remettre le certificat de destruction</li>
          <li>Effectuer les démarches administratives</li>
        </ul>

        <p>En suivant ces étapes simples, vous garantissez un enlèvement d'épave rapide et sans complications. Notre équipe reste à votre disposition pour toute question.</p>
      `,
      date: "15 Janvier 2024",
      readTime: "5 min",
      category: "Guide pratique",
      image: "/car-preparation-for-recycling.jpg",
      author: "Équipe Casse-VHU",
    },
  }

  return posts[slug as keyof typeof posts] || null
}

const getRelatedPosts = () => [
  {
    id: 2,
    title: "Les nouvelles réglementations VHU 2024 : ce qui change",
    excerpt: "Tour d'horizon des nouvelles réglementations concernant les véhicules hors d'usage en 2024.",
    date: "8 Janvier 2024",
    readTime: "7 min",
    category: "Réglementation",
    image: "/placeholder.svg?key=ex43w",
    slug: "nouvelles-reglementations-vhu-2024",
  },
  {
    id: 5,
    title: "Que faire si vous n'avez plus la carte grise de votre épave ?",
    excerpt: "Solutions et démarches à suivre lorsque vous avez perdu la carte grise de votre véhicule hors d'usage.",
    date: "20 Décembre 2023",
    readTime: "4 min",
    category: "Démarches",
    image: "/administrative-documents-paperwork.jpg",
    slug: "que-faire-sans-carte-grise-epave",
  },
  {
    id: 4,
    title: "Prime à la conversion 2024 : conditions et démarches",
    excerpt: "Tout savoir sur la prime à la conversion en 2024. Conditions d'éligibilité, montants et démarches.",
    date: "28 Décembre 2023",
    readTime: "8 min",
    category: "Aides financières",
    image: "/money-financial-aid-government-bonus.jpg",
    slug: "prime-conversion-2024-conditions-demarches",
  },
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  const relatedPosts = getRelatedPosts()

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article non trouvé</h1>
          <Link href="/blog">
            <Button>Retour au blog</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">


      {/* Breadcrumb */}
      <section className="py-4 border-b bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-foreground">{post.title}</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au blog
            </Link>

            <div className="mb-6">
              <span className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">{post.title}</h1>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">{post.excerpt}</p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime} de lecture</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="rounded-full bg-transparent">
                  <Share2 className="w-4 h-4 mr-2" />
                  Partager
                </Button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div
                  className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Call to Action */}
                <Card className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
                  <CardContent className="pt-6 text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-4">Besoin d'un enlèvement d'épave ?</h3>
                    <p className="text-muted-foreground mb-6">
                      Contactez-nous dès maintenant pour un service gratuit et rapide partout en France
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" className="rounded-full">
                        <Phone className="w-4 h-4 mr-2" />
                        <a href="tel:+33 6 30 30 20 53">06 30 30 20 53</a>
                      </Button>
                      <Button size="lg" variant="secondary" className="rounded-full">
                        Demander un devis
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-8">
                  {/* Table of Contents */}
                  <Card className="p-6">
                    <h3 className="font-semibold mb-4">Sommaire</h3>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          1. Documents nécessaires
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          2. Vider le véhicule
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          3. Préparer l'accès
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          4. Informer les spécificités
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          Documents manquants
                        </a>
                      </li>
                      <li>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          Le jour de l'enlèvement
                        </a>
                      </li>
                    </ul>
                  </Card>

                  {/* Contact Card */}
                  <Card className="p-6 bg-primary/5">
                    <h3 className="font-semibold mb-4">Une question ?</h3>
                    <p className="text-sm text-muted-foreground mb-4">Notre équipe est là pour vous accompagner</p>
                    <Button className="w-full rounded-full">
                      <Phone className="w-4 h-4 mr-2" />
                      Nous contacter
                    </Button>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Articles similaires</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
                >
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                        {relatedPost.category}
                      </span>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="w-3 h-3 mr-1" />
                        {relatedPost.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-balance group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 text-pretty">{relatedPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3 mr-1" />
                        {relatedPost.date}
                      </div>
                      <Link href={`/blog/${relatedPost.slug}`}>
                        <Button variant="ghost" size="sm" className="group/btn">
                          Lire
                          <ArrowRight className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                  <Link href="/#services" className="hover:text-foreground transition-colors">
                    Nos services
                  </Link>
                </li>
                <li>
                  <Link href="/#vehicles" className="hover:text-foreground transition-colors">
                    Véhicules acceptés
                  </Link>
                </li>
                <li>
                  <Link href="/#process" className="hover:text-foreground transition-colors">
                    Comment ça marche
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/#faq" className="hover:text-foreground transition-colors">
                    FAQ
                  </Link>
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
                  <span>contact@casse-vhu.fr</span>
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
    </div>
  )
}
