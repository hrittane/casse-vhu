"use client"
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

function TopMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "/services", text: "Services" },
        // { href: "#vehicles", text: "Véhicules" },
        // { href: "#process", text: "Comment ça marche" },
        { href: "/zones", text: "Zones" },
        // { href: "#faq", text: "FAQ" },
        { href: "/blog", text: "Blog" },
        { href: "/a-propos", text: "À propos" },
        { href: "/contact", text: "Contact" },
    ];

    return (
        <>
            {/* Mini Navbar */}
            <div className="bg-primary text-primary-foreground py-2">
                <div className="container mx-auto px-4 flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-2" />
                            <a href="tel:+33 6 30 30 20 53" className="font-medium">06 30 30 20 53</a>
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
            <header className=" bg-card/50 backdrop-blur-sm sticky top-0 z-50">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <a href="/">
                            <img src="/logo.png" alt="Casse-VHU Logo" className="h-8 w-auto" />
                        </a>
                        {/* <img src="/logo.png" alt="Casse-VHU Logo" className="h-10 w-auto" /> */}
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center space-x-6">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
                                {link.text}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu */}
                    <div className="lg:hidden">
                        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Open Menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="top" className="w-full bg-card/80 backdrop-blur-sm ">
                                <nav className="flex flex-col items-center space-y-6 pt-12">
                                    {navLinks.map((link) => (
                                        <SheetClose asChild key={link.href}>
                                            <a
                                                href={link.href}
                                                className="text-muted-foreground hover:text-foreground transition-colors text-lg"
                                            >
                                                {link.text}
                                            </a>
                                        </SheetClose>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>


                    <Button className="hidden lg:flex rounded-full">
                        <Phone className="w-4 h-4 mr-2" />
                        <a href="tel:0630302053">06 30 30 20 53</a>
                    </Button>
                </div>
            </header>
        </>
    )
}

export default TopMenu;