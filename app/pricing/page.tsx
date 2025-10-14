import Link from "next/link"
import { ArrowRight, Check, MessageSquare, Sparkles, Upload, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import {
  pricingTiers,
  creditUsageData,
  freeTierFeatures,
  freeTierLimitations,
  ctaData
} from "./_data"

import { ComparisonTable } from "./_components/comparison-table"
import { FAQ } from "./_components/faq"
import { PricingCard } from "./_components/pricing-card"
import { CTA } from "@/components/sections/cta"

const iconMap = {
  Upload,
  Check,
  MessageSquare,
  X,
}


export const metadata = {
  title: "Pricing — Credit Packs | optml.ai",
  description: "Start free. Buy credits as you grow. Credits never expire.",
  alternates: { canonical: "/pricing" },
}

export const revalidate = 3600

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-4">
                  <Sparkles className="mr-1 h-3 w-3" aria-hidden />
                  Start Free, Scale with Credits
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Simple <span className="text-primary">Credit-Based</span> Pricing
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start with our free tier and purchase credit packs as you grow. No monthly commitments, no hidden fees — just pay for what you use.
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                {[
                  "Free tier included",
                  "Credits never expire",
                  "One-time purchases",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-1">
                    <Check className="h-4 w-4 text-green-500" aria-hidden />
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Free Tier */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Start Free Forever</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get started with our generous free tier and upgrade with credit packs when you need more.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="relative border-2 border-primary/20 shadow-lg">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-500 text-white px-4 py-1">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Free Forever
                  </Badge>
                </div>
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-3xl">Free Tier</CardTitle>
                  <CardDescription className="text-lg">
                    Perfect for trying out optml.ai and getting started
                  </CardDescription>
                  <div className="mt-4">
                    <div className="text-5xl font-bold">$0</div>
                    <div className="text-sm text-muted-foreground">forever</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {freeTierFeatures.map((feature, index) => {
                      const IconComponent = iconMap[feature.icon as keyof typeof iconMap]
                      return (
                        <div key={index} className="flex items-center gap-3">
                          <IconComponent className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm">
                            {feature.highlight ? (
                              <>
                                <strong>{feature.highlight}</strong>
                                {feature.text.replace(feature.highlight, "")}
                              </>
                            ) : (
                              feature.text
                            )}
                          </span>
                        </div>
                      )
                    })}
                    {freeTierLimitations.map((limitation, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{limitation}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full" size="lg" asChild>
                    <Link href="/signup">Get Started Free</Link>
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">No credit card required</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Credit Packs */}
        <section className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Credit Packs</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                One-time purchases that unlock advanced features. Credits never expire and can be used for any feature.
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
              {pricingTiers.map((tier) => (
                <PricingCard key={tier.id} tier={tier} />
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="mb-4 text-sm text-muted-foreground">
                Need a custom solution?{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  Contact our sales team
                </Link>{" "}
                for volume pricing and enterprise features.
              </p>
            </div>
          </div>
        </section>

        {/* Credit Usage Guide */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How Credits Work</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Understanding how credits are used across different features.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {creditUsageData.map((usage) => (
                <Card key={usage.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">{usage.credits}</span>
                      </div>
                      {usage.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{usage.description}</p>
                    <div className={`text-2xl font-bold ${usage.creditColor}`}>{usage.creditDisplay}</div>
                    <div className="text-xs text-muted-foreground">{usage.unit}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <ComparisonTable />

        {/* FAQ Section */}
        <FAQ />

        {/* CTA */}
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
