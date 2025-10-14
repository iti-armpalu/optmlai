
import Link from "next/link"
import { footerLinks } from "@/data/homepage"
import Year from "./year"

export default function Footer() {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-muted-foreground">© <Year /> optml.ai. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                {footerLinks.map((link) => (
                    <Link key={link.href} className="text-xs hover:underline underline-offset-4" href={link.href}>
                        {link.label}
                    </Link>
                ))}
            </nav>
        </footer>
    )
}
