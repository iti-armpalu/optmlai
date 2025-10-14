"use client"

import Link from "next/link"
import { Eye } from "lucide-react"
import { Button } from "@/components/ui/button"

import {
    navigationLinks
} from "@/data/homepage"

export default function Header() {
    return (
        <header className="px-4 lg:px-6 h-14 flex items-center border-b">
            <Link href="/" className="flex items-center justify-center">
                <Eye className="h-6 w-6 text-primary" />
                <span className="ml-2 text-lg font-bold">optml.ai</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                {navigationLinks.map((link) => (
                    <Link key={link.href} className="text-sm font-medium hover:text-primary transition-colors" href={link.href}>
                        {link.label}
                    </Link>
                ))}
            </nav>
            <div className="ml-4 flex gap-2">
                <Button variant="ghost" size="sm" asChild>
                    <Link href="/signin">Sign In</Link>
                </Button>
                <Button size="sm" asChild>
                    <Link href="/signup">Get Started</Link>
                </Button>
            </div>
        </header>
    )
}
