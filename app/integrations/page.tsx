"use client"
import Link from "next/link"
import {
  ArrowRight,
  Check,
  Star,
  Zap,
  Globe,
  Code,
  Smartphone,
  Settings,
  ExternalLink,
  Download,
  Play,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IntegrationsPage() {
  const integrations = [
    {
      category: "Content Management",
      platforms: [
        {
          name: "WordPress",
          description: "The world's most popular CMS with 40% market share",
          logo: "🔷",
          features: ["Plugin available", "One-click install", "Auto-updates"],
          status: "Available",
          users: "2M+",
          setup: "2 minutes",
        },
        {
          name: "Webflow",
          description: "Visual web design platform for modern websites",
          logo: "🌊",
          features: ["Custom code integration", "Designer-friendly", "Responsive tracking"],
          status: "Available",
          users: "500K+",
          setup: "5 minutes",
        },
        {
          name: "Squarespace",
          description: "All-in-one website building and hosting platform",
          logo: "⬛",
          features: ["Code injection", "Template compatibility", "Mobile optimization"],
          status: "Available",
          users: "300K+",
          setup: "3 minutes",
        },
        {
          name: "Wix",
          description: "Drag-and-drop website builder with AI features",
          logo: "🎨",
          features: ["App market integration", "Velo compatibility", "ADI support"],
          status: "Available",
          users: "250K+",
          setup: "2 minutes",
        },
        {
          name: "Ghost",
          description: "Modern publishing platform for content creators",
          logo: "👻",
          features: ["Theme integration", "Member analytics", "Newsletter tracking"],
          status: "Available",
          users: "100K+",
          setup: "3 minutes",
        },
        {
          name: "Drupal",
          description: "Enterprise-grade content management framework",
          logo: "🔵",
          features: ["Module available", "Multi-site support", "Advanced permissions"],
          status: "Beta",
          users: "50K+",
          setup: "10 minutes",
        },
      ],
    },
    {
      category: "E-commerce",
      platforms: [
        {
          name: "Shopify",
          description: "Leading e-commerce platform for online stores",
          logo: "🛍️",
          features: ["App store integration", "Checkout optimization", "Product page tracking"],
          status: "Available",
          users: "800K+",
          setup: "2 minutes",
        },
        {
          name: "WooCommerce",
          description: "WordPress e-commerce plugin powering 28% of online stores",
          logo: "🛒",
          features: ["Plugin integration", "Cart abandonment tracking", "Conversion funnels"],
          status: "Available",
          users: "600K+",
          setup: "3 minutes",
        },
        {
          name: "BigCommerce",
          description: "Enterprise e-commerce platform with built-in features",
          logo: "🏪",
          features: ["Native integration", "Multi-channel tracking", "B2B features"],
          status: "Available",
          users: "200K+",
          setup: "5 minutes",
        },
        {
          name: "Magento",
          description: "Flexible e-commerce platform for complex requirements",
          logo: "🔶",
          features: ["Extension available", "Multi-store support", "Advanced analytics"],
          status: "Coming Soon",
          users: "TBD",
          setup: "TBD",
        },
      ],
    },
    {
      category: "Marketing & Email",
      platforms: [
        {
          name: "HubSpot",
          description: "All-in-one marketing, sales, and service platform",
          logo: "🧡",
          features: ["CRM integration", "Landing page tracking", "Lead scoring"],
          status: "Available",
          users: "400K+",
          setup: "5 minutes",
        },
        {
          name: "Mailchimp",
          description: "Email marketing platform with automation features",
          logo: "🐵",
          features: ["Email campaign tracking", "Audience insights", "A/B testing"],
          status: "Available",
          users: "300K+",
          setup: "3 minutes",
        },
        {
          name: "ConvertKit",
          description: "Email marketing for creators and online businesses",
          logo: "📧",
          features: ["Creator-focused", "Automation tracking", "Subscriber insights"],
          status: "Available",
          users: "150K+",
          setup: "3 minutes",
        },
        {
          name: "ActiveCampaign",
          description: "Customer experience automation platform",
          logo: "⚡",
          features: ["Advanced automation", "Behavioral tracking", "Predictive analytics"],
          status: "Beta",
          users: "80K+",
          setup: "7 minutes",
        },
      ],
    },
    {
      category: "Publishing & Content",
      platforms: [
        {
          name: "Medium",
          description: "Popular publishing platform for writers and thought leaders",
          logo: "📝",
          features: ["Article analytics", "Reader engagement", "Publication insights"],
          status: "Available",
          users: "200K+",
          setup: "1 minute",
        },
        {
          name: "Substack",
          description: "Newsletter platform for independent writers",
          logo: "📰",
          features: ["Newsletter tracking", "Subscriber analytics", "Monetization insights"],
          status: "Available",
          users: "100K+",
          setup: "2 minutes",
        },
        {
          name: "Notion",
          description: "All-in-one workspace for notes, docs, and collaboration",
          logo: "📋",
          features: ["Page analytics", "Collaboration tracking", "Template optimization"],
          status: "Beta",
          users: "50K+",
          setup: "5 minutes",
        },
        {
          name: "LinkedIn",
          description: "Professional networking and content publishing platform",
          logo: "💼",
          features: ["Post analytics", "Engagement tracking", "Professional insights"],
          status: "Coming Soon",
          users: "TBD",
          setup: "TBD",
        },
      ],
    },
  ]

  const installationMethods = [
    {
      method: "Browser Extension",
      description: "Install our browser extension for instant access across all websites",
      icon: <Globe className="h-8 w-8 text-primary" />,
      steps: ["Install from Chrome/Firefox store", "Click the optml.ai icon", "Start tracking any website"],
      time: "30 seconds",
      compatibility: "Works everywhere",
    },
    {
      method: "JavaScript Snippet",
      description: "Add a simple code snippet to your website's header",
      icon: <Code className="h-8 w-8 text-primary" />,
      steps: ["Copy the tracking code", "Paste in your site's <head>", "Verify installation"],
      time: "2 minutes",
      compatibility: "Universal",
    },
    {
      method: "Plugin/App",
      description: "Use our native plugins for popular platforms",
      icon: <Download className="h-8 w-8 text-primary" />,
      steps: ["Search for 'optml.ai'", "Install and activate", "Configure settings"],
      time: "1-5 minutes",
      compatibility: "Platform-specific",
    },
    {
      method: "API Integration",
      description: "Custom integration using our REST API",
      icon: <Settings className="h-8 w-8 text-primary" />,
      steps: ["Get API credentials", "Implement endpoints", "Test integration"],
      time: "30+ minutes",
      compatibility: "Custom solutions",
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
                  100+ Integrations Available
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Works With <span className="text-primary">Your Favorite Tools</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Seamlessly integrate optml.ai with your existing workflow. From WordPress to Shopify, from HubSpot to
                  Medium - we support all the platforms you already use and love.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/signup">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/schedule-demo">Request Integration</Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  5-minute setup
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  No coding required
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-green-500" />
                  Free support
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Methods */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Multiple Ways to Integrate</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Choose the integration method that works best for your setup and technical requirements.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
              {installationMethods.map((method, index) => (
                <Card key={index} className="relative">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">{method.icon}</div>
                    <CardTitle className="text-lg">{method.method}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {method.steps.map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-start gap-2 text-sm">
                          <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-xs font-medium text-primary">{stepIndex + 1}</span>
                          </div>
                          <span className="text-muted-foreground">{step}</span>
                        </div>
                      ))}
                    </div>
                    <div className="pt-4 border-t space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Setup time:</span>
                        <span className="font-medium">{method.time}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Works with:</span>
                        <span className="font-medium">{method.compatibility}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Integrations */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Platform Integrations</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Native integrations with the platforms you use every day. Get started in minutes with our pre-built
                solutions.
              </p>
            </div>

            <Tabs defaultValue="Content Management" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 max-w-2xl mx-auto">
                <TabsTrigger value="Content Management">CMS</TabsTrigger>
                <TabsTrigger value="E-commerce">E-commerce</TabsTrigger>
                <TabsTrigger value="Marketing & Email">Marketing</TabsTrigger>
                <TabsTrigger value="Publishing & Content">Publishing</TabsTrigger>
              </TabsList>

              {integrations.map((category) => (
                <TabsContent key={category.category} value={category.category} className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {category.platforms.map((platform, index) => (
                      <Card key={index} className="relative">
                        <CardHeader>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="text-2xl">{platform.logo}</div>
                            <div>
                              <CardTitle className="text-lg">{platform.name}</CardTitle>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge
                                  variant={
                                    platform.status === "Available"
                                      ? "default"
                                      : platform.status === "Beta"
                                        ? "secondary"
                                        : "outline"
                                  }
                                  className="text-xs"
                                >
                                  {platform.status}
                                </Badge>
                                {platform.status === "Available" && (
                                  <span className="text-xs text-muted-foreground">{platform.users} users</span>
                                )}
                              </div>
                            </div>
                          </div>
                          <CardDescription>{platform.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            {platform.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center gap-2 text-sm">
                                <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                          {platform.status === "Available" && (
                            <div className="pt-4 border-t">
                              <div className="flex justify-between items-center mb-3">
                                <span className="text-sm text-muted-foreground">Setup time:</span>
                                <span className="text-sm font-medium">{platform.setup}</span>
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" className="flex-1" asChild>
                                  <Link href="/signup">Install Now</Link>
                                </Button>
                                <Button size="sm" variant="outline">
                                  <ExternalLink className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          )}
                          {platform.status === "Beta" && (
                            <div className="pt-4 border-t">
                              <Button size="sm" variant="outline" className="w-full bg-transparent" asChild>
                                <Link href="/signup">Join Beta</Link>
                              </Button>
                            </div>
                          )}
                          {platform.status === "Coming Soon" && (
                            <div className="pt-4 border-t">
                              <Button size="sm" variant="outline" className="w-full bg-transparent" disabled>
                                Coming Soon
                              </Button>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Custom Integration */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit">
                    <Settings className="w-3 h-3 mr-1" />
                    Custom Solutions
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Don't See Your Platform? <span className="text-primary">We'll Build It</span>
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Our team can create custom integrations for any platform or tool. From enterprise software to niche
                    platforms, we'll make optml.ai work with your unique setup.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Code className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">API-First Approach</h3>
                      <p className="text-sm text-muted-foreground">
                        Our REST API makes it easy to integrate with any system or build custom solutions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Smartphone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Mobile & Desktop Apps</h3>
                      <p className="text-sm text-muted-foreground">
                        Track user behavior across web, mobile apps, and desktop applications.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Settings className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Enterprise Support</h3>
                      <p className="text-sm text-muted-foreground">
                        Dedicated integration support for enterprise customers with complex requirements.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-2" asChild>
                    <Link href="/schedule-demo">
                      Request Custom Integration
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    View API Docs
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-md shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="w-5 h-5 text-primary" />
                      API Integration
                    </CardTitle>
                    <CardDescription>Simple REST API for custom integrations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-muted rounded-lg p-4 font-mono text-sm">
                      <div className="text-green-600">// Initialize tracking</div>
                      <div className="text-blue-600">optml.init({`{`}</div>
                      <div className="ml-4 text-gray-600">apiKey: 'your-api-key',</div>
                      <div className="ml-4 text-gray-600">projectId: 'project-123'</div>
                      <div className="text-blue-600">{`}`});</div>
                      <div className="mt-2 text-green-600">// Track events</div>
                      <div className="text-blue-600">optml.track('page_view');</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>RESTful API endpoints</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>Real-time data streaming</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>Comprehensive documentation</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>SDK for popular languages</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Integrate?</h2>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start optimizing your content today with our seamless integrations. Setup takes just minutes, and
                  you'll see results immediately.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="gap-2" asChild>
                  <Link href="/signup">
                    Start Free Trial
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
                14-day free trial • 5-minute setup • No credit card required
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
