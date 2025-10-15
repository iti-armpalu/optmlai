"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check, Star, Play, Brain, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { SampleReport } from "@/components/sample-report"
import {
  heroData,
  chatDemoData,
  howItWorksData,
  integrationsData,
  pricingData,
  pricingTiers,
  // testimonialsData,
  ctaData
} from "@/data/homepage"
import { CTA } from "@/components/sections/cta"
import FeatureCard from "@/components/feature-card"
import { landingFeaturesSection as lf } from "./features/_data";


export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit">
                    <heroData.badge.icon className="w-3 h-3 mr-1" />
                    {heroData.badge.text}
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {heroData.title} <span className="text-primary">{heroData.titleHighlight}</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">{heroData.description}</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-2" asChild>
                    <Link href="/signup">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button variant="outline" size="lg" className="gap-2 bg-transparent">
                      <Play className="w-4 h-4" />
                      Watch Demo
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="gap-2 bg-transparent"
                      onClick={() => (window.location.href = "/schedule-demo")}
                    >
                      <Calendar className="w-4 h-4" />
                      Schedule Demo
                    </Button>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  {heroData.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-1">
                      <Check className="w-4 h-4 text-green-500" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="optml.ai Plugin Interface"
                    width={600}
                    height={400}
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Heatmapping Reports Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit">
                    <chatDemoData.badge.icon className="w-3 h-3 mr-1" />
                    {chatDemoData.badge.text}
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    {chatDemoData.title} <span className="text-primary">{chatDemoData.titleHighlight}</span>
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">{chatDemoData.description}</p>
                </div>
                <div className="space-y-4">
                  {chatDemoData.features.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-3">
                      <feature.icon className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-2">
                    <Play className="w-4 h-4" />
                    Watch Interactive Demo
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="lg">
                        View Sample Report
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="w-full sm:max-w-[90vw] max-w-[90vw] max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <Brain className="w-5 h-5 text-primary" />
                          Sample Heatmap Report - Landing Page Analysis
                        </DialogTitle>
                        <DialogDescription>
                          Interactive sample showing how optml.ai analyzes your content and provides actionable insights
                        </DialogDescription>
                      </DialogHeader>
                      <SampleReport />
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <Card className="w-full max-w-md shadow-2xl">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Brain className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-sm">AI Assistant</CardTitle>
                          <CardDescription className="text-xs">Analyzing your ad heatmap data</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Chat Messages */}
                      <div className="space-y-3">
                        <div className="flex gap-2">
                          <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                            <span className="text-xs">👤</span>
                          </div>
                          <div className="bg-muted rounded-lg p-2 text-sm">Will my ad get people to buy?</div>
                        </div>
                        <div className="flex gap-2">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Brain className="w-3 h-3 text-primary" />
                          </div>
                          <div className="bg-primary/5 rounded-lg p-2 text-sm">
                            People will notice your ad, but they wont buy the product because your usage moment isnt
                            noticeable.
                          </div>
                        </div>

                        {/* Realistic Heatmap Image */}
                        <div className="flex justify-center my-2">
                          <div className="relative w-32 h-20 bg-white rounded border border-gray-200 overflow-hidden">
                            {/* Background ad layout */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>

                            {/* Header area - low heat */}
                            <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-blue-200/30 to-blue-300/40"></div>

                            {/* Main content area - medium heat */}
                            <div className="absolute top-3 left-1 right-1 h-8 bg-gradient-to-br from-yellow-300/50 via-orange-300/60 to-red-400/40 rounded-sm"></div>

                            {/* CTA button area - high heat but small */}
                            <div className="absolute bottom-2 right-2 w-6 h-3 bg-red-500/80 rounded-sm border border-red-600/50"></div>

                            {/* Product image area - very low heat */}
                            <div className="absolute bottom-2 left-2 w-8 h-6 bg-blue-200/20 rounded-sm border border-blue-300/30"></div>

                            {/* Usage moment element - barely visible */}
                            <div className="absolute top-6 right-4 w-4 h-2 bg-green-200/25 rounded-sm border border-green-300/20"></div>

                            {/* Heat intensity dots */}
                            <div className="absolute top-5 left-4 w-1 h-1 bg-red-600 rounded-full"></div>
                            <div className="absolute top-7 left-6 w-1 h-1 bg-orange-500 rounded-full"></div>
                            <div className="absolute top-6 left-8 w-1 h-1 bg-yellow-500 rounded-full"></div>

                            {/* Legend */}
                            <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-1 text-xs">
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-red-600">High</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                <span className="text-yellow-600">Med</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                                <span className="text-blue-600">Low</span>
                              </div>
                            </div>

                            <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground">
                              Ad Heatmap Analysis
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                            <span className="text-xs">👤</span>
                          </div>
                          <div className="bg-muted rounded-lg p-2 text-sm">How can I fix it?</div>
                        </div>
                        <div className="flex gap-2">
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Brain className="w-3 h-3 text-primary" />
                          </div>
                          <div className="bg-primary/5 rounded-lg p-2 text-sm">
                            Either move it to the top right or give it more contrast. This will increase visibility by
                            34%.
                          </div>
                        </div>
                      </div>
                      {/* Input Area */}
                      <div className="flex gap-2 pt-2 border-t">
                        <div className="flex-1 bg-muted rounded-md px-3 py-2 text-sm text-muted-foreground">
                          Ask about your ad data...
                        </div>
                        <Button size="sm" className="px-3">
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  {/* Floating Elements */}
                  {/* <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                    +34% Visibility
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                    Live Analysis
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        {/* <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful Features for Content Creators
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to create high-performing content that engages your audience and drives results.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {featuresData.map((feature) => (
                <Card key={feature.title}>
                  <CardHeader>
                    <feature.icon className="h-10 w-10 text-primary" />
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {feature.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-500" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
                <Link href="/features">
                  Discover All Features
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section> */}
        <section id="features" className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
  <div className="container mx-auto max-w-7xl px-4 md:px-6">
    {/* Header */}
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {lf.heading}
        </h2>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          {lf.subheading}
        </p>
      </div>
    </div>

    {/* Cards */}
    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
      {lf.cards.map((card) => (
        <FeatureCard
          key={card.id}
          icon={card.icon}
          title={card.title}
          description={card.description}
          bullets={card.bullets}
          // no badge on landing
          // no cta on landing
          descriptionMinHeightClass="min-h-[56px]"
        />
      ))}
    </div>

    {/* Section CTA */}
    <div className="mt-12 flex justify-center">
      <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
        <Link href={lf.cta.href}>
          {lf.cta.label}
          {lf.cta.icon ? <lf.cta.icon className="h-4 w-4" aria-hidden="true" /> : null}
        </Link>
      </Button>
    </div>
  </div>
</section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How optml.ai Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get started in minutes with our simple three-step process.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {howItWorksData.map((step) => (
                <div key={step.number} className="flex flex-col items-center space-y-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
                <Link href="/product">
                  Learn More About Our Product
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section id="integrations" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Works with any image or screen grab</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  optml.ai integrates seamlessly with all major web-based platforms and browser tools.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
              {integrationsData.map((platform) => (
                <div key={platform} className="flex items-center justify-center p-4 border rounded-lg bg-background">
                  <span className="text-sm font-medium text-muted-foreground">{platform}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
                <Link href="/integrations">
                  View All Integrations
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-4">
                  <pricingData.badge.icon className="w-3 h-3 mr-1" />
                  {pricingData.badge.text}
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {pricingData.title} <span className="text-primary">{pricingData.titleHighlight}</span>{" "}
                  {pricingData.titleEnd}
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {pricingData.description}
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                {pricingData.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-1">
                    <Check className="w-4 h-4 text-green-500" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* Free Tier Highlight */}
            {pricingTiers
              .filter((tier) => tier.free)
              .map((tier) => (
                <div key={tier.id} className="max-w-2xl mx-auto mt-12 mb-12">
                  <Card className="relative border-2 border-green-200 shadow-lg bg-green-50/50">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-green-500 text-white px-4 py-1">
                        <pricingData.badge.icon className="w-3 h-3 mr-1" />
                        Free Forever
                      </Badge>
                    </div>
                    <CardHeader className="text-center pb-4 pt-8">
                      <CardTitle className="text-2xl">{tier.name}</CardTitle>
                      <CardDescription className="text-lg">{tier.description}</CardDescription>
                      <div className="mt-4">
                        <div className="text-4xl font-bold text-green-600">${tier.price}</div>
                        <div className="text-sm text-muted-foreground">forever</div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {tier.features.map((feature, index) => (
                        <div key={feature} className="flex items-center gap-3 text-sm">
                          {index === 0 ? (
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          ) : index === 1 ? (
                            <Brain className="w-4 h-4 text-green-500 flex-shrink-0" />
                          ) : (
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          )}
                          <span
                            dangerouslySetInnerHTML={{
                              __html: feature.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                            }}
                          />
                        </div>
                      ))}
                      <Button className="w-full mt-4" size="lg" asChild>
                        <Link href={tier.href}>{tier.buttonText}</Link>
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">No credit card required</p>
                    </CardContent>
                  </Card>
                </div>
              ))}

            {/* Credit Packs */}
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {pricingTiers
                .filter((tier) => !tier.free)
                .map((tier) => (
                  <Card key={tier.id} className={`relative ${tier.popular ? "border-primary shadow-lg" : ""}`}>
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <Badge className="bg-primary text-primary-foreground px-3 py-1">
                          <Star className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader className={`text-center ${tier.popular ? "pt-6" : ""}`}>
                      <CardTitle className="text-xl">{tier.name}</CardTitle>
                      <CardDescription>{tier.description}</CardDescription>
                      <div className="mt-4">
                        <div className="text-3xl font-bold">${tier.price}</div>
                        {tier.credits && (
                          <div className="text-xl font-semibold text-primary mt-1">{tier.credits} Credits</div>
                        )}
                        {tier.pricePerCredit && (
                          <div className="text-xs text-muted-foreground">{tier.pricePerCredit}</div>
                        )}
                        {tier.savings && (
                          <Badge variant="secondary" className="mt-2">
                            {tier.savings}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2 text-sm">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <Check className="w-4 h-4 text-green-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button className="w-full" variant={tier.buttonVariant || "default"} asChild>
                        <Link href={tier.href}>{tier.buttonText}</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground mb-4">
                Need a custom solution?{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  Contact our sales team
                </Link>{" "}
                for volume pricing and enterprise features.
              </p>
            </div>

            <div className="flex justify-center mt-12">
              <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
                <Link href="/pricing">
                  View Detailed Pricing
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>




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
