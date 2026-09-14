"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Phone, FileText } from "lucide-react"
import { event } from '@/lib/gtag'; // Import the event function

function StickyMenu() {

    const handlePhoneClick = () => {
        event({
            action: 'click_phone_sticky',
            category: 'engagement',
            label: 'Sticky Phone Button Click',
            value: '1',
        });
    };

    return (
        <nav aria-label="Actions rapides" className="fixed lg:hidden bottom-0 left-0 right-0 flex items-center justify-center gap-3 bg-card/80 backdrop-blur-sm px-4 py-3 z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.08)]">
            <Button className="rounded-full flex-1 max-w-[240px]" onClick={handlePhoneClick}>
                <a href="tel:+33630302053" className="inline-flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    06 30 30 20 53
                </a>
            </Button>
            <Button variant="outline" className="rounded-full flex-1 max-w-[180px]" asChild>
                <a href="/contact">
                    <FileText className="w-4 h-4 mr-2" />
                    Devis gratuit
                </a>
            </Button>
        </nav>
    )
}

export default StickyMenu