"use client"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  Star,
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
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IntegrationsPage() {
  const platformCategories = [
    {
      category: "Content Management",
      platforms: [
        { name: "WordPress", logo: "🔷", description: "The world's most popular CMS" },
        { name: "Webflow", logo: "🌊", description: "Visual web design platform" },
        { name: "Squarespace", logo: "⬛", description: "All-in-one website builder" },
        { name: "Wix", logo: "🎨", description: "Drag-and-drop website builder" },
        { name: "Ghost", logo: "👻", description: "Modern publishing platform" },
        { name: "Drupal", logo: "🔵", description: "Enterprise content framework" },
      ],
    },
    {
      category: "E-commerce",
      platforms: [
        { name: "Shopify", logo: "🛍️", description: "Leading e-commerce platform" },
        { name: "WooCommerce", logo: "🛒", description: "WordPress e-commerce plugin" },
        { name: "BigCommerce", logo: "🏪", description: "Enterprise e-commerce platform" },
        { name: "Magento", logo: "🔶", description: "Flexible e-commerce platform" },
        { name: "Etsy", logo: "🎁", description: "Handmade & vintage marketplace" },
        { name: "Amazon Seller", logo: "📦", description: "Amazon product listings" },
      ],
    },
    {
      category: "Marketing & Email",
      platforms: [
        { name: "HubSpot", logo: "🧡", description: "All-in-one marketing platform" },
        { name: "Mailchimp", logo: "🐵", description: "Email marketing platform" },
        { name: "ConvertKit", logo: "📧", description: "Email marketing for creators" },
        { name: "ActiveCampaign", logo: "⚡", description: "Customer experience automation" },
        { name: "Klaviyo", logo: "💌", description: "E-commerce email marketing" },
        { name: "SendGrid", logo: "✉️", description: "Email delivery platform" },
      ],
    },
    {
      category: "Publishing & Social",
      platforms: [
        { name: "Medium", logo: "📝", description: "Publishing platform for writers" },
        { name: "Substack", logo: "📰", description: "Newsletter platform" },
        { name: "LinkedIn", logo: "💼", description: "Professional networking platform" },
        { name: "Facebook Ads", logo: "📘", description: "Social advertising platform" },
        { name: "Instagram", logo: "📸", description: "Visual content platform" },
        { name: "Twitter/X", logo: "🐦", description: "Real-time social network" },
      ],
    },
  ]

  const features = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Visual Attention Heatmaps",
      description: "See exactly where users look first and what captures their attention",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Context-Aware Analysis",
      description: "AI understands the viewing context and provides channel-specific recommendations",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Real-Time Optimization",
      description: "Get instant suggestions to improve engagement and conversions",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Tracking",
      description: "Track how content changes impact key metrics over time",
    },
  ]

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
                  Universal Browser Extension
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Analyze <span className="text-primary">Any Website</span>, Instantly
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our browser extension works seamlessly with every website and platform. Install once in 30 seconds,
                  then analyze and optimize content anywhere on the web - from your own sites to competitor pages.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/signup">
                    <Download className="w-4 h-4" />
                    Install Extension Free
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/schedule-demo">
                    <Play className="w-4 h-4" />
                    Watch Demo
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  30-second install
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  No coding required
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  Works everywhere
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get Started in 3 Simple Steps</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Install the optml.ai browser extension and start analyzing any website instantly. No technical setup, no
                code changes, no complicated configuration.
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
                  <CardTitle className="text-3xl">Browser Extension</CardTitle>
                  <CardDescription className="text-lg">
                    One extension. Unlimited websites. Instant AI-powered insights.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8 pb-8">
                  {/* Steps */}
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center space-y-3">
                      <div className="flex justify-center">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xl font-bold text-primary">1</span>
                        </div>
                      </div>
                      <h3 className="font-semibold text-lg">Install Extension</h3>
                      <p className="text-sm text-muted-foreground">
                        Add optml.ai from Chrome Web Store or Firefox Add-ons in seconds
                      </p>
                    </div>
                    <div className="text-center space-y-3">
                      <div className="flex justify-center">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xl font-bold text-primary">2</span>
                        </div>
                      </div>
                      <h3 className="font-semibold text-lg">Visit Any Website</h3>
                      <p className="text-sm text-muted-foreground">
                        Navigate to any page you want to analyze - yours or competitors-
                      </p>
                    </div>
                    <div className="text-center space-y-3">
                      <div className="flex justify-center">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-xl font-bold text-primary">3</span>
                        </div>
                      </div>
                      <h3 className="font-semibold text-lg">Click & Analyze</h3>
                      <p className="text-sm text-muted-foreground">
                        Click the extension icon to get instant AI heatmaps and recommendations
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="pt-6 border-t">
                    <h3 className="text-center font-semibold text-lg mb-6">What You Get</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Universal Compatibility</p>
                          <p className="text-sm text-muted-foreground">Works on any website, any platform, any CMS</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Real-Time Analysis</p>
                          <p className="text-sm text-muted-foreground">
                            Get instant insights as you browse and test changes
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">No Code Required</p>
                          <p className="text-sm text-muted-foreground">
                            Zero technical setup or website modifications needed
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Competitive Intelligence</p>
                          <p className="text-sm text-muted-foreground">
                            Analyze competitor pages to understand what works
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">AI-Powered Heatmaps</p>
                          <p className="text-sm text-muted-foreground">
                            Visual attention maps show what users notice first
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium">Actionable Recommendations</p>
                          <p className="text-sm text-muted-foreground">
                            Get specific suggestions to improve performance
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Install Buttons */}
                  <div className="pt-6 border-t">
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button size="lg" className="gap-2" asChild>
                        <Link href="/signup">
                          <Chrome className="w-5 h-5" />
                          Add to Chrome
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
                        <Link href="/signup">
                          <Firefox className="w-5 h-5" />
                          Add to Firefox
                        </Link>
                      </Button>
                    </div>
                    <p className="text-center text-sm text-muted-foreground mt-4">
                      Free 14-day trial • No credit card required • Cancel anytime
                    </p>
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
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Features in Every Analysis</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Every page you analyze with the browser extension gets the full power of optml.ai-s AI engine.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="flex justify-center mb-3">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {feature.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compatible Platforms */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Works With Every Platform You Use</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The optml.ai browser extension analyzes any website, regardless of the platform or technology behind it.
                No integrations, no setup, no limitations.
              </p>
            </div>

            <Tabs defaultValue="Content Management" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 max-w-2xl mx-auto">
                <TabsTrigger value="Content Management">CMS</TabsTrigger>
                <TabsTrigger value="E-commerce">E-commerce</TabsTrigger>
                <TabsTrigger value="Marketing & Email">Marketing</TabsTrigger>
                <TabsTrigger value="Publishing & Social">Social</TabsTrigger>
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
              <p className="text-muted-foreground text-lg">
                Plus thousands more platforms, custom websites, and web applications.
              </p>
              <p className="text-sm text-muted-foreground">
                If it-s a website, optml.ai can analyze it. No exceptions.
              </p>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted Across Industries</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Marketers, designers, and business owners use the optml.ai browser extension to optimize content and
                drive better results.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm mb-4">
                    -The browser extension is a game-changer. I can test headline variations on our WordPress blog in
                    real-time, see the AI heatmaps instantly, and make data-driven decisions on the spot. Our engagement
                    is up 45%.-
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-xs">🔷</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Sarah Chen</p>
                      <p className="text-xs text-muted-foreground">Content Director, TechBlog Pro</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    WordPress • 500K monthly visitors
                  </Badge>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm mb-4">
                    -I love that I can analyze competitor product pages and see exactly what makes their listings
                    perform. Then I apply those insights to our Shopify store. It-s like having a secret weapon.
                    Conversions up 32%.-
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-xs">🛍️</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Marcus Rivera</p>
                      <p className="text-xs text-muted-foreground">E-commerce Manager, Fashion Forward</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Shopify • $2M annual revenue
                  </Badge>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-sm mb-4">
                    -As a freelance marketer, I use the extension on every client project. I can analyze their landing
                    pages, their competitors, and show them exactly what needs to change - all backed by AI insights.
                    Clients love it.-
                  </p>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-xs">🧡</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Jessica Park</p>
                      <p className="text-xs text-muted-foreground">Marketing Consultant, Growth Marketing Co</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    HubSpot • B2B SaaS Clients
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Endless Possibilities</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                The optml.ai browser extension adapts to your workflow. Here are just a few ways people use it.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Layers className="w-5 h-5 text-primary" />
                    Content Testing
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Test different headlines, layouts, and copy variations in real-time before publishing. See which
                    version captures attention best.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-primary" />
                    Competitor Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Analyze competitor pages to understand what makes them successful. Reverse-engineer their strategy
                    with AI-powered insights.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Ad Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Pre-test landing pages and ad creative before launching campaigns. Ensure your ads have maximum
                    impact from day one.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Design Reviews
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Get objective, data-driven feedback on designs. Show stakeholders exactly which elements will
                    perform best with users.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-primary" />
                    Client Reports
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Generate professional reports with AI heatmaps and recommendations for client presentations. Show
                    clear before/after comparisons.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-primary" />
                    Quick Audits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Perform instant content audits on any page. Identify optimization opportunities in seconds, not
                    hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Start Analyzing?</h2>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Install the optml.ai browser extension and start getting AI-powered insights on any website in 30
                  seconds.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="gap-2" asChild>
                  <Link href="/signup">
                    <Download className="w-4 h-4" />
                    Install Extension Free
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link href="/schedule-demo">
                    <Play className="w-4 h-4" />
                    Watch Demo
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/60">
                14-day free trial • 30-second install • No credit card required
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
