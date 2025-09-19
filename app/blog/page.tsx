import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Tag,
} from "lucide-react"
import Link from "next/link"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Comment bien préparer votre véhicule avant l'enlèvement d'épave",
      excerpt:
        "Découvrez les étapes essentielles pour préparer votre véhicule hors d'usage avant l'intervention de nos équipes. Un guide complet pour un enlèvement sans problème.",
      date: "15 Janvier 2024",
      readTime: "5 min",
      category: "Guide pratique",
      image: "/car-preparation-for-recycling.jpg",
      slug: "preparer-vehicule-enlevement-epave",
    },
    {
      id: 2,
      title: "Les nouvelles réglementations VHU 2024 : ce qui change",
      excerpt:
        "Tour d'horizon des nouvelles réglementations concernant les véhicules hors d'usage en 2024. Impact sur les propriétaires et les centres agréés.",
      date: "8 Janvier 2024",
      readTime: "7 min",
      category: "Réglementation",
      image: "/placeholder-wwlbt.png",
      slug: "nouvelles-reglementations-vhu-2024",
    },
    {
      id: 3,
      title: "Recyclage automobile : l'impact environnemental positif",
      excerpt:
        "Comprendre l'importance du recyclage automobile pour l'environnement. Chiffres clés et bénéfices écologiques de la filière VHU.",
      date: "2 Janvier 2024",
      readTime: "6 min",
      category: "Environnement",
      image: "/placeholder-1ugkb.png",
      slug: "recyclage-automobile-impact-environnemental",
    },
    {
      id: 4,
      title: "Prime à la conversion 2024 : conditions et démarches",
      excerpt:
        "Tout savoir sur la prime à la conversion en 2024. Conditions d'éligibilité, montants et démarches pour bénéficier de cette aide gouvernementale.",
      date: "28 Décembre 2023",
      readTime: "8 min",
      category: "Aides financières",
      image: "/money-financial-aid-government-bonus.jpg",
      slug: "prime-conversion-2024-conditions-demarches",
    },
    {
      id: 5,
      title: "Que faire si vous n'avez plus la carte grise de votre épave ?",
      excerpt:
        "Solutions et démarches à suivre lorsque vous avez perdu la carte grise de votre véhicule hors d'usage. Procédures administratives simplifiées.",
      date: "20 Décembre 2023",
      readTime: "4 min",
      category: "Démarches",
      image: "/administrative-documents-paperwork.jpg",
      slug: "que-faire-sans-carte-grise-epave",
    },
    {
      id: 6,
      title: "Les pièces détachées d'occasion : une seconde vie pour votre auto",
      excerpt:
        "Comment les pièces de votre ancien véhicule peuvent servir à d'autres automobilistes. Le marché de la pièce détachée d'occasion expliqué.",
      date: "15 Décembre 2023",
      readTime: "5 min",
      category: "Recyclage",
      image: "/car-parts-spare-parts-automotive.jpg",
      slug: "pieces-detachees-occasion-seconde-vie",
    },
  ]

  const categories = [
    "Tous",
    "Guide pratique",
    "Réglementation",
    "Environnement",
    "Aides financières",
    "Démarches",
    "Recyclage",
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Mini Navbar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-medium">06 30 30 20 53</span>
            </div>
            <div className="hidden sm:flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>contact@casse-vhu.fr</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="hidden sm:inline text-xs">Suivez-nous:</span>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Casse-VHU Logo" className="h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/#services" className="text-muted-foreground hover:text-foreground transition-colors">
              Services
            </Link>
            <Link href="/#vehicles" className="text-muted-foreground hover:text-foreground transition-colors">
              Véhicules
            </Link>
            <Link href="/#process" className="text-muted-foreground hover:text-foreground transition-colors">
              Comment ça marche
            </Link>
            <Link href="/#zones" className="text-muted-foreground hover:text-foreground transition-colors">
              Zones d'intervention
            </Link>
            <Link href="/#faq" className="text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Link href="/blog" className="text-foreground font-medium">
              Blog
            </Link>
            <Link href="/#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="rounded-full">
            <Phone className="w-4 h-4 mr-2" />
            06 30 30 20 53
          </Button>
        </div>
      </header>

      {/* Blog Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">Blog Casse-VHU</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Conseils, actualités et guides pratiques sur l'enlèvement d'épaves et le recyclage automobile
            </p>
            <div className="max-w-md mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input placeholder="Rechercher un article..." className="pl-10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Tous" ? "default" : "outline"}
                size="sm"
                className="rounded-full"
              >
                <Tag className="w-3 h-3 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-white bg-primary px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-balance group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 text-pretty">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Lire la suite
                        <ArrowRight className="w-3 h-3 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="rounded-full bg-transparent">
              Charger plus d'articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Restez informé</h2>
            <p className="text-muted-foreground mb-8">
              Recevez nos derniers articles et conseils directement dans votre boîte mail
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Votre adresse email" className="rounded-full flex-1" />
              <Button className="rounded-full">S'abonner</Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">Pas de spam, désabonnement possible à tout moment</p>
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
                  <span>06 30 30 20 53</span>
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
