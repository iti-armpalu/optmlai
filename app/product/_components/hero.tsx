import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { hero } from "../_data"

export function HeroSection() {
    const data = hero

    return (
        <section className={`w-full py-12 md:py-24 lg:py-32 ${data.gradient}`}>
            <div className="container mx-auto max-w-7xl px-4 md:px-6">
                <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <Badge variant={data.badge.variant} className="w-fit">
                                <data.badge.icon className="mr-1 h-3 w-3" aria-hidden="true" />
                                {data.badge.label}
                            </Badge>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{data.heading}</h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">{data.subheading}</p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            {data.ctas.map((cta, i) => {
                                const Icon = cta.icon
                                const btn = cta.href ? (
                                    <Button
                                        key={cta.label}
                                        asChild
                                        size="lg"
                                        variant={i === 0 ? "default" : (cta.variant ?? "outline")}
                                        className="gap-2"
                                    >
                                        <Link href={cta.href}>
                                            {cta.label}
                                            {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
                                        </Link>
                                    </Button>
                                ) : (
                                    <Button key={cta.label} size="lg" variant={cta.variant ?? "outline"} className="gap-2 bg-transparent">
                                        {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
                                        {cta.label}
                                    </Button>
                                )
                                return btn
                            })}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            {data.checklist.map((c, idx) => {
                                const Icon = c.icon
                                return (
                                    <div key={idx} className="flex items-center gap-1">
                                        {Icon ? <Icon className={`h-4 w-4 ${c.iconClass ?? ""}`} aria-hidden="true" /> : null}
                                        {c.label}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="relative">
                            <Image
                                src={data.media.src || "/placeholder.svg"}
                                alt={data.media.alt}
                                width={data.media.width}
                                height={data.media.height}
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
                                priority
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-background/20 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
