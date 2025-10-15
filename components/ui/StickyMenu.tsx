"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
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
        <div className="fixed lg:hidden bottom-0 left-0 right-0 flex justify-center bg-card/30 backdrop-blur-sm py-4 z-50">
            <Button className="rounded-full" onClick={handlePhoneClick}>
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+33630302053">06 30 30 20 53</a>
            </Button>
        </div>
    )
}

export default StickyMenu