import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { coreFeaturesSection, ctaData, featureCategoriesSection, featureComparison, featuresHero } from "./_data"
import { CTA } from "@/components/sections/cta"

export default function FeaturesPage() {
  const h = featuresHero;
  const cf = coreFeaturesSection;
  const fc = featureCategoriesSection;
  const fcomp = featureComparison;

  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-1">

        {/* Hero Section */}
        <section className={`w-full py-12 md:py-24 lg:py-32 ${h.gradient}`}>
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-4">
                  <h.badge.icon className="mr-1 h-3 w-3" aria-hidden="true" />
                  {h.badge.label}
                </Badge>

                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  {h.heading.before}
                  <span className="text-primary">{h.heading.highlight}</span>
                  {h.heading.after ? h.heading.after : null}
                </h1>

                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {h.subheading}
                </p>
              </div>

              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {/* Primary CTA */}
                <Button size="lg" className="gap-2" asChild>
                  <Link href={h.ctas[0].href}>
                    {h.ctas[0].label}
                    {/* {h.ctas[0].icon ? (
                      <h.ctas[0].icon className="h-4 w-4" aria-hidden="true" />
                  ) : null} */}
                  </Link>
                </Button>

                {/* Secondary CTA (optional) */}
                {h.ctas[1] ? (
                  <Button variant={h.ctas[1].variant ?? "outline"} size="lg" asChild>
                    <Link href={h.ctas[1].href}>{h.ctas[1].label}</Link>
                  </Button>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{cf.heading}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {cf.subheading}
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              {cf.cards.map((card) => {
                const Icon = card.icon;
                return (
                  <Card className="relative overflow-hidden" key={card.id}>
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <div className="rounded-lg bg-primary/10 p-2">
                          <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                        </div>
                        <Badge variant={card.badge.variant ?? "outline"}>{card.badge.label}</Badge>
                      </div>

                      <CardTitle className="text-xl">{card.title}</CardTitle>
                      {/* Align descriptions across cards */}
                      <CardDescription className="min-h-[48px]">
                        {card.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <ul className="space-y-2 text-sm">
                        {card.bullets.map((b, idx) => {
                          const BulletIcon = b.icon;
                          return (
                            <li className="flex items-center gap-2" key={idx}>
                              {BulletIcon ? (
                                <BulletIcon
                                  className={`h-4 w-4 ${b.iconClass ?? ""}`}
                                  aria-hidden="true"
                                />
                              ) : null}
                              {b.label}
                            </li>
                          );
                        })}
                      </ul>

                      <div className="pt-4">
                        {card.cta.href ? (
                          <Button
                            asChild
                            variant={card.cta.variant ?? "outline"}
                            size="sm"
                            className="w-full bg-transparent"
                          >
                            <Link href={card.cta.href}>{card.cta.label}</Link>
                          </Button>
                        ) : (
                          <Button variant={card.cta.variant ?? "outline"} size="sm" className="w-full bg-transparent">
                            {card.cta.label}
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Feature Categories */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            {/* Header */}
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{fc.heading}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {fc.subheading}
              </p>
            </div>

            {/* Tabs */}
            <Tabs defaultValue={fc.tabs[0].value} className="w-full">
              <TabsList className="mb-8 grid w-full grid-cols-4">
                {fc.tabs.map((t) => (
                  <TabsTrigger key={t.value} value={t.value}>
                    {t.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {fc.tabs.map((t) => (
                <TabsContent key={t.value} value={t.value} className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {t.cards.map((card) => {
                      const Icon = card.icon;
                      return (
                        <Card key={card.id}>
                          <CardHeader>
                            <Icon className="mb-2 h-8 w-8 text-primary" aria-hidden="true" />
                            <CardTitle className="text-lg">{card.title}</CardTitle>
                            {/* Keep descriptions aligned across varying lengths */}
                            <CardDescription className="min-h-[48px]">
                              {card.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-1 text-sm text-muted-foreground">
                              {card.bullets.map((b, i) => (
                                <li key={i}>• {b}</li>
                              ))}
                            </ul>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>


        {/* Feature Comparison */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            {/* Header */}
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{fcomp.heading}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {fcomp.subheading}
              </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left font-semibold">Feature</th>
                    {fcomp.plansOrder.map((plan) => (
                      <th key={plan} className="p-4 text-center font-semibold capitalize">
                        {plan === "pro" ? "Professional" : plan}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {fcomp.rows.map((row, idx) => (
                    <tr key={idx} className="border-b hover:bg-muted/50">
                      <td className="p-4 font-medium">{row.feature}</td>

                      {fcomp.plansOrder.map((plan) => {
                        const available = row[plan];
                        const CheckIcon = fcomp.checkIcon;
                        return (
                          <td key={plan} className="p-4 text-center">
                            {available ? (
                              <CheckIcon className="mx-auto h-5 w-5 text-green-500" aria-label="Included" />
                            ) : (
                              <span className="text-muted-foreground" aria-label="Not included">
                                {fcomp.unavailableGlyph}
                              </span>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* CTA */}
            <div className="mt-8 flex justify-center">
              <Button size="lg" asChild>
                <Link href={fcomp.cta.href}>
                  {fcomp.cta.label}
                  {fcomp.cta.icon ? <fcomp.cta.icon className="ml-2 h-4 w-4" aria-hidden="true" /> : null}
                </Link>
              </Button>
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
