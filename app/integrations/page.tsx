"use client"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  Zap,
  Globe,
  Play,
  Chrome,
  FileBox as Firefox,
  Layers,
  Download,
  Eye,
  Target,
  TrendingUp,
  BarChart3,
  Building2,
  LucideIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  platformCategories,
  features,
  heroContent,
  howItWorksContent,
  useCases,
  ctaContent,
  featuresGridContent,
  compatiblePlatformsContent,
  useCasesContent,
  heroButtons,
  extensionInstallButtons,
  ctaButtons,
} from "./_data"

// Icon mapping for dynamic icon rendering
const iconMap = {
  Eye,
  Target,
  TrendingUp,
  BarChart3,
  Layers,
  Zap,
  Download,
  ArrowRight,
  Play,
  Chrome,
  Firefox,
} as const

type IconName = keyof typeof iconMap

export const getIcon = (iconName: IconName | string): LucideIcon => {
  return iconMap[iconName as IconName] ?? Building2
}


export default function IntegrationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="secondary" className="mb-4">
                  <Zap className="w-3 h-3 mr-1" />
                  {heroContent.badge}
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  {heroContent.title.split(heroContent.titleHighlight)[0]}
                  <span className="text-primary">{heroContent.titleHighlight}</span>
                  {heroContent.title.split(heroContent.titleHighlight)[1]}
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {heroContent.description}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {heroButtons.map((button, index) => (
                  <Button key={index} size={button.size} variant={button.variant} className="gap-2" asChild>
                    <Link href={button.href}>
                      {button.icons.map((iconName, iconIndex) => {
                        const Icon = getIcon(iconName)
                        return <Icon key={iconIndex} className="w-4 h-4" />
                      })}
                      {button.text}
                      {button.icons.map((iconName, iconIndex) => {
                        const Icon = getIcon(iconName)
                        return <Icon key={iconIndex} className="w-4 h-4" />
                      })}
                    </Link>
                  </Button>
                ))}
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                {heroContent.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <Check className="w-4 h-4 text-green-500" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{howItWorksContent.title}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {howItWorksContent.description}
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <Card className="relative border-2 border-primary/20">
                <CardHeader className="text-center pt-8">
                  <div className="flex justify-center mb-4">
                    <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center">
                      <Globe className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-3xl">{howItWorksContent.cardTitle}</CardTitle>
                  <CardDescription className="text-lg">{howItWorksContent.cardDescription}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8 pb-8">
                  {/* Steps */}
                  <div className="grid md:grid-cols-3 gap-6">
                    {howItWorksContent.steps.map((step) => (
                      <div key={step.number} className="text-center space-y-3">
                        <div className="flex justify-center">
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-xl font-bold text-primary">{step.number}</span>
                          </div>
                        </div>
                        <h3 className="font-semibold text-lg">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="pt-6 border-t">
                    <h3 className="text-center font-semibold text-lg mb-6">What You Get</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {howItWorksContent.extensionFeatures.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">{feature.title}</p>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t">
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      {extensionInstallButtons.map((button, index) => {
                        const IconComponent = iconMap[button.icon as keyof typeof iconMap]
                        return (
                          <Button
                            key={index}
                            size={button.size}
                            variant={button.variant}
                            className={`gap-2 ${button.className || ""}`}
                            asChild
                          >
                            <Link href={button.href}>
                              <IconComponent className="w-5 h-5" />
                              {button.text}
                            </Link>
                          </Button>
                        )
                      })}
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-4">{howItWorksContent.trialInfo}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{featuresGridContent.title}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {featuresGridContent.description}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon as keyof typeof iconMap]
                return (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="flex justify-center mb-3">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <IconComponent className="w-6 h-6" />
                        </div>
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Compatible Platforms */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{compatiblePlatformsContent.title}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {compatiblePlatformsContent.description}
              </p>
            </div>

            <Tabs defaultValue="Design Tools" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 max-w-2xl mx-auto">
                <TabsTrigger value="Design Tools">Design</TabsTrigger>
                <TabsTrigger value="Ad Platforms">Ads</TabsTrigger>
                <TabsTrigger value="Creative Suites">Creative</TabsTrigger>
                <TabsTrigger value="Landing Page Builders">Landing</TabsTrigger>
              </TabsList>

              {platformCategories.map((category) => (
                <TabsContent key={category.category} value={category.category} className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.platforms.map((platform, index) => (
                      <Card key={index} className="relative hover:border-primary/50 transition-colors">
                        <CardHeader>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="text-3xl">{platform.logo}</div>
                            <div>
                              <CardTitle className="text-lg">{platform.name}</CardTitle>
                              <CardDescription className="text-sm">{platform.description}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center gap-2 text-sm text-green-600">
                            <Check className="w-4 h-4 flex-shrink-0" />
                            <span className="font-medium">Fully compatible</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            <div className="mt-12 text-center space-y-4">
              <p className="text-muted-foreground text-lg">{compatiblePlatformsContent.footerText}</p>
              <p className="text-sm text-muted-foreground">{compatiblePlatformsContent.footerSubtext}</p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{useCasesContent.title}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {useCasesContent.description}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {useCases.map((useCase, index) => {
                const IconComponent = iconMap[useCase.icon as keyof typeof iconMap]
                return (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <IconComponent className="w-5 h-5 text-primary" />
                        {useCase.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <p className="text-sm text-muted-foreground">{useCase.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">{ctaContent.title}</h2>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {ctaContent.description}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                {ctaButtons.map((button, index) => (
                  <Button
                    key={index}
                    size={button.size}
                    variant={button.variant}
                    className={`gap-2 ${button.className || ""}`}
                    asChild
                  >
                    <Link href={button.href}>
                      {button.icons.map((iconName, iconIndex) => {
                        const IconComponent = iconMap[iconName as keyof typeof iconMap]
                        return iconIndex === 0 ? <IconComponent key={iconName} className="w-4 h-4" /> : null
                      })}
                      {button.text}
                      {button.icons.map((iconName, iconIndex) => {
                        const IconComponent = iconMap[iconName as keyof typeof iconMap]
                        return iconIndex > 0 ? <IconComponent key={iconName} className="w-4 h-4" /> : null
                      })}
                    </Link>
                  </Button>
                ))}
              </div>
              <p className="text-sm text-primary-foreground/60">{ctaContent.trialInfo}</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
