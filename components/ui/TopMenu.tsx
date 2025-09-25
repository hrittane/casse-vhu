import React from 'react'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

function TopMenu() {
    return (
        <>
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

            {/* main menu */}
            <header className="border-b bg-card/50 backdrop-blur-sm md:sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <img src="/logo.png" alt="Casse-VHU Logo" className="h-10 w-auto" />
                    </div>
                    <nav className="hidden lg:flex items-center space-x-6">
                        <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                            Services
                        </a>
                        <a href="#vehicles" className="text-muted-foreground hover:text-foreground transition-colors">
                            Véhicules
                        </a>
                        <a href="#process" className="text-muted-foreground hover:text-foreground transition-colors">
                            Comment ça marche
                        </a>
                        <a href="#zones" className="text-muted-foreground hover:text-foreground transition-colors">
                            Zones d'intervention
                        </a>
                        <a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                            FAQ
                        </a>
                        <a href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                            Blog
                        </a>
                        <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                            Contact
                        </a>
                    </nav>
                    <Button className="rounded-full">
                        <Phone className="w-4 h-4 mr-2" />
                        06 30 30 20 53
                    </Button>
                </div>
            </header>
        </>
    )
}

export default TopMenu