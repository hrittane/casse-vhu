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
import postsData from "@/data/blog/index.json"

interface Post {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  image: string
  author: string
  slug: string
  tableOfContent: string[]
}

const posts: Post[] = postsData as Post[]

const getBlogPost = (slug: string): Post | undefined => {
  return posts.find((post: Post) => post.slug === slug)
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)
  const relatedPosts = posts.filter((p: Post) => p.slug !== params.slug).slice(0, 3)

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
              <img src={`/posts${post.image || "placeholder.svg"}`} alt={post.title} className="w-full h-full object-cover" />
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
                >
                  {/* <p>{post.content}</p> */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.content.replace(/<h2>(.*?)<\/h2>/g, (match: string, p1: string) => {
                        const slug = p1
                          .toLowerCase()
                          .replace(/ /g, "-")
                          .replace(/[^\w-]+/g, "")
                        return `<h2 id="${slug}">${p1}</h2>`
                      }),
                    }}
                  />
                </div>

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
                  {post.tableOfContent && post.tableOfContent.length > 0 && (
                    <Card className="p-6">
                      <h3 className="font-semibold mb-4">Sommaire</h3>
                      <ul className="space-y-2 text-sm">
                        {post.tableOfContent.map((item: string, index: number) => {
                          const slug = item
                            .toLowerCase()
                            .replace(/ /g, "-")
                            .replace(/[^\w-]+/g, "")
                          return (
                            <li key={index}>
                              <a href={`#${slug}`} className="text-muted-foreground hover:text-primary transition-colors">
                                {item}
                              </a>
                            </li>
                          )
                        })}
                      </ul>
                    </Card>
                  )}

                  {/* Contact Card */}
                  <Card className="p-6 bg-primary/5">
                    <h3 className="font-semibold mb-4">Une question ?</h3>
                    <p className="text-sm text-muted-foreground mb-4">Notre équipe est là pour vous accompagner</p>
                    <Button className="w-full rounded-full ">
                      <Phone className="w-4 h-4 mr-2" />
                      appeler
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
              {relatedPosts.map((relatedPost: Post) => (
                <Card
                  key={relatedPost.id}
                  className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 py-0 "
                >
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={`/posts${relatedPost.image || "placeholder.svg"}`}
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

    </div>
  )
}
