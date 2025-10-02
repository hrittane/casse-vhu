import React from 'react'
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

function StickyMenu() {
    return (
        <div className="fixed lg:hidden bottom-0 left-0 right-0 flex justify-center bg-card/30 backdrop-blur-sm py-4 z-50">
            <Button className="rounded-full">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+33 6 30 30 20 53">06 30 30 20 53</a>
            </Button>
        </div>
    )
}

export default StickyMenu