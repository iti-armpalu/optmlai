import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { methodology, ctaData, successStories, heroSection, featuredCaseStudy } from "./_data"
import { CTA } from "@/components/sections/cta"
// import { Progress } from "@/components/ui/progress"

export default function CaseStudiesPage() {
    const { heading, subheading, cards } = successStories;
    const fc = featuredCaseStudy;

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">

                {/* Hero Section */}
                <section className={`w-full pt-12 pb-8 md:pt-24 lg:pt-32 ${heroSection.gradient}`}>
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    {heroSection.heading}
                                </h1>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    {heroSection.subheading}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Case Study */}
                <section className="w-full py-12">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                            {/* Left column: text */}
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <Badge variant="secondary" className="w-fit">
                                        {/* Badge icon from data */}
                                        <fc.badge.icon className="mr-1 h-3 w-3" aria-hidden="true" />
                                        {fc.badge.label}
                                    </Badge>

                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                                        {fc.title.before}
                                        <span className="text-primary">{fc.title.highlight}</span>
                                        {fc.title.after ? fc.title.after : null}
                                    </h2>

                                    {/* Keep paragraph heights consistent if you want alignment across layouts */}
                                    <p className="max-w-[600px] text-muted-foreground md:text-lg min-h-[72px]">
                                        {fc.description}
                                    </p>
                                </div>

                                {/* Metrics */}
                                <div className="space-y-4">
                                    {fc.metrics.map(({ label, value /*, progress*/ }, i) => (
                                        <div className="space-y-2" key={i}>
                                            <div className="flex justify-between text-sm">
                                                <span>{label}</span>
                                                <span className="font-bold">{value}</span>
                                            </div>
                                            {/* If/when you enable Progress:
                    <Progress value={progress ?? 0} className="h-2" />
                    */}
                                        </div>
                                    ))}
                                </div>

                                {/* CTAs */}
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button size="lg" className="gap-2" asChild>
                                        <Link href={`/case-studies/${fc.slug}`}>
                                            {fc.ctas.primary.label}
                                            {fc.ctas.primary.icon ? (
                                                <fc.ctas.primary.icon className="h-4 w-4" aria-hidden="true" />
                                            ) : null}
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Right column: image */}
                            <div className="flex items-center justify-center">
                                <div className="relative">
                                    <Image
                                        src={fc.media.src}
                                        alt={fc.media.alt}
                                        width={fc.media.width}
                                        height={fc.media.height}
                                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
                                        priority
                                    />
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-background/20 to-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Success Stories Grid */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        {/* Section header */}
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                    {heading}
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    {subheading}
                                </p>
                            </div>
                        </div>

                        {/* Cards */}
                        <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 lg:grid-cols-2 xl:grid-cols-3">
                            {cards.map((card) => {
                                const Icon = card.categoryIcon;
                                return (
                                    <Card className="h-full" key={card.id}>
                                        <CardHeader>
                                            <div className="flex items-center justify-between pb-4">
                                                <Badge variant="secondary" className="w-fit">
                                                    <Icon className="w-3 h-3 mr-1" aria-hidden="true" />
                                                    {card.category}
                                                </Badge>
                                                {/* <div className={`text-2xl font-bold ${card.primaryDelta.colorClass ?? ""}`}>
                                                    {card.primaryDelta.value}
                                                </div> */}
                                            </div>

                                            <CardTitle>{card.title}</CardTitle>

                                            {/* Keep descriptions aligned: set a min-height (mobile-first, responsive) */}
                                            <CardDescription className="min-h-[56px] md:min-h-[48px]">
                                                {card.description}
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent className="space-y-4">
                                            <div className="space-y-2 text-sm">
                                                {card.kpis.map(({ label, value, colorClass }, idx) => (
                                                    <div className="flex justify-between" key={idx}>
                                                        <span>{label}</span>
                                                        <span className={`font-bold ${colorClass ?? ""}`}>{value}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            <blockquote className="text-sm italic text-muted-foreground min-h-[56px] md:min-h-[80px]">
                                                {card.quote}
                                            </blockquote>


                                            <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                                                <Link href={`/case-studies/${card.slug}`}>{card.cta.label}</Link>
                                            </Button>


                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Methodology Section */}
                <section
                    aria-labelledby="methodology-heading"
                    className="w-full py-12 md:py-24 lg:py-32"
                >
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2
                                    id="methodology-heading"
                                    className="text-3xl font-bold tracking-tighter sm:text-5xl"
                                >
                                    {methodology.heading}
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    {methodology.subheading}
                                </p>
                            </div>
                        </div>

                        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-12">
                            {methodology.steps.map(({ id, title, description, icon: Icon, badge }) => (
                                <div
                                    key={id}
                                    className="flex flex-col items-center space-y-4 text-center"
                                >
                                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                                        {id}
                                    </div>
                                    <h3 className="text-xl font-bold">{title}</h3>
                                    <p className="text-muted-foreground text-sm min-h-[80px]">{description}</p>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <Icon className="h-3 w-3" aria-hidden="true" />
                                        <span>{badge}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <CTA
                    title={ctaData.title}
                    description={ctaData.description}
                    buttonText={ctaData.buttonText}
                    buttonLink={ctaData.buttonLink}
                    demoButtonText={ctaData.demoButtonText}
                    disclaimer={ctaData.disclaimer}
                />
            </main>
        </div>
    )
}
