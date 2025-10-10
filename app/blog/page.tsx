"use client"

import { useState } from "react"
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
import blogPosts from "@/data/blog/index.json"

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Tous")

  const categories = [
    "Tous",
    "Guide pratique",
    "Réglementation",
    "Environnement",
    "Aides financières",
    "Démarches",
    "Recyclage",
  ]

  const filteredBlogPosts = blogPosts.filter((post) => {
    const term = searchTerm.toLowerCase()
    const categoryMatch =
      selectedCategory === "Tous" || post.category === selectedCategory
    const searchMatch =
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term)
    return categoryMatch && searchMatch
  })

  return (
    <div className="min-h-screen bg-background">



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
                <Input
                  placeholder="Rechercher un article..."
                  className="pl-10 rounded-full bg-card border"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
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
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className="rounded-full"
                onClick={() => setSelectedCategory(category)}
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
            {filteredBlogPosts.map((post) => (
              <Card
                key={post.id}
                className="py-0 group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={`/posts${post.image || "placeholder.svg"}`}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
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

    </div>
  )
}
