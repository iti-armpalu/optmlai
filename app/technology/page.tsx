"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { aiDeepDive, coreTechnology, ctaData, neuroscienceDeepDive, researchValidation, technologyHero } from "./_data"
import { CTA } from "@/components/sections/cta"

export default function TechnologyPage() {
  const h = technologyHero;
  const ct = coreTechnology;
  const n = neuroscienceDeepDive;
  const ai = aiDeepDive;
  const r = researchValidation;

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className={`w-full py-12 md:py-24 lg:py-32 ${h.gradient}`}>
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              {/* Left: copy + CTAs */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit">
                    <h.badge.icon className="mr-1 h-3 w-3" aria-hidden="true" />
                    {h.badge.label}
                  </Badge>

                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {h.heading.before}
                    <span className="text-primary">{h.heading.highlight}</span>
                    {h.heading.after ?? null}
                  </h1>

                  <p className="max-w-[600px] text-muted-foreground md:text-xl min-h-[72px]">
                    {h.subheading}
                  </p>
                </div>

                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  {/* Primary CTA (no href => regular button) */}
                  <Button size="lg" className="gap-2">
                    {/* {h.ctas[0].icon ? <h.ctas[0].icon className="h-4 w-4" aria-hidden="true" /> : null} */}
                    {h.ctas[0].label}
                  </Button>

                  {/* Secondary CTA (link) */}
                  {h.ctas[1] ? (
                    <Button variant={h.ctas[1].variant ?? "outline"} size="lg" className="gap-2 bg-transparent" asChild>
                      <Link href={h.ctas[1].href!}>
                        {h.ctas[1].label}
                        {/* {h.ctas[1].icon ? <h.ctas[1].icon className="h-4 w-4" aria-hidden="true" /> : null} */}
                      </Link>
                    </Button>
                  ) : null}
                </div>
              </div>

              {/* Right: media */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <Image
                    src={h.media.src}
                    alt={h.media.alt}
                    width={h.media.width}
                    height={h.media.height}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
                    priority
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-background/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Core Technology Overview */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            {/* Section header */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{ct.heading}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {ct.subheading}
                </p>
              </div>
            </div>

            {/* Cards */}
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {ct.cards.map((card) => {
                const Icon = card.icon;
                const BulletIcon = ct.bulletIcon;
                return (
                  <Card className="text-center" key={card.id}>
                    <CardHeader>
                      <Icon className="mx-auto h-16 w-16 text-primary" aria-hidden="true" />
                      <CardTitle>{card.title}</CardTitle>
                      {/* Keep descriptions aligned across cards */}
                      <CardDescription className="min-h-[60px]">
                        {card.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <ul className="space-y-2 text-left text-sm min-h-[120px]">
                        {card.bullets.map((b, i) => (
                          <li className="flex items-center gap-2" key={i}>
                            <BulletIcon className="h-4 w-4 flex-shrink-0 text-green-500" aria-hidden="true" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>


        {/* Neuroscience Deep Dive */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              {/* Left column: text and points */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant={n.badge.variant ?? "secondary"} className="w-fit">
                    <n.badge.icon className="mr-1 h-3 w-3" aria-hidden="true" />
                    {n.badge.label}
                  </Badge>

                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    {n.heading.before}
                    <span className="text-primary">{n.heading.highlight}</span>
                  </h2>

                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    {n.subheading}
                  </p>
                </div>

                {/* Neuroscience points */}
                <div className="space-y-4">
                  {n.points.map((p) => {
                    const Icon = p.icon;
                    return (
                      <div key={p.id} className="flex items-start gap-3">
                        <Icon className="mt-1 h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" />
                        <div>
                          <h3 className="mb-1 font-semibold">{p.title}</h3>
                          <p className="text-sm text-muted-foreground">{p.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right column: research stats card */}
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <n.card.title.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                      {n.card.title.label}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {n.card.stats.map((s, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span className="text-sm">{s.label}</span>
                          <Badge variant="secondary">{s.value}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Research & Validation */}
        <section className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            {/* Header */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{r.heading}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {r.subheading}
                </p>
              </div>
            </div>

            {/* Cards */}
            <div className="mx-auto grid items-start gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              {r.cards.map((card) => {
                const Icon = card.icon;
                const BulletIcon = r.bulletIcon;

                return (
                  <Card key={card.id}>
                    <CardHeader>
                      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <CardTitle>{card.title}</CardTitle>
                      <CardDescription className="min-h-[180px]">{card.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      {/* List type card (e.g., Academic Partnerships) */}
                      {card.list ? (
                        <ul className="space-y-2 text-sm">
                          {card.list.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <BulletIcon
                                className="h-4 w-4 flex-shrink-0 text-green-500"
                                aria-hidden="true"
                              />
                              {item.label}
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      {/* Metric type card (e.g., Validation Studies) */}
                      {card.metrics ? (
                        <div className="space-y-3">
                          {card.metrics.map((m, i) => (
                            <div
                              key={i}
                              className="flex items-center justify-between"
                            >
                              <span className="text-sm">{m.label}</span>
                              <Badge
                                variant="secondary"
                                className={
                                  m.variant === "success"
                                    ? "bg-green-100 text-green-800"
                                    : ""
                                }
                              >
                                {m.value}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>


        {/* AI Technology Deep Dive */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            {/* Header */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{ai.heading}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {ai.subheading}
                </p>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue={ai.tabs[0].value} className="mx-auto mt-12 w-full max-w-6xl">
              <TabsList className="grid w-full grid-cols-4">
                {ai.tabs.map((t) => (
                  <TabsTrigger key={t.value} value={t.value}>
                    {t.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {ai.tabs.map((t) => {
                const BulletIcon = ai.bulletIcon;
                return (
                  <TabsContent key={t.value} value={t.value} className="space-y-4">
                    <Card>
                      <CardHeader>
                        {/* Optional: show t.icon if you want an icon on the card */}
                        {/* <t.icon className="h-10 w-10 text-primary" aria-hidden="true" /> */}
                        <CardTitle>{t.cardTitle}</CardTitle>
                        {/* Align descriptions if they vary a lot */}
                        <CardDescription className="min-h-[48px]">
                          {t.cardDescription}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div className="grid gap-6 md:grid-cols-2">
                          {t.groups.map((g, i) => (
                            <div key={i} className="space-y-4">
                              <h4 className="font-semibold">{g.title}</h4>
                              <ul className="space-y-2 text-sm">
                                {g.bullets.map((b, idx) => (
                                  <li key={idx} className="flex items-center gap-2">
                                    <BulletIcon className="h-4 w-4 text-green-500" aria-hidden="true" />
                                    {b}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                );
              })}
            </Tabs>
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
