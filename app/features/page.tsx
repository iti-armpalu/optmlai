"use client"
import Link from "next/link"
import {
  ArrowRight,
  BarChart3,
  MousePointer,
  Zap,
  Check,
  MessageCircle,
  Brain,
  TrendingUp,
  Target,
  Users,
  Clock,
  Shield,
  Smartphone,
  Globe,
  PieChart,
  Activity,
  Filter,
  Layers,
  Settings,
  ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FeaturesPage() {
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
                  Complete Feature Overview
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Powerful Features for <span className="text-primary">Smart Content Optimization</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover how optml.ai's comprehensive suite of AI-powered tools can transform your content strategy
                  and boost engagement across all platforms.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-2" asChild>
                  <Link href="/signup">
                    Start Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/schedule-demo">Schedule Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Core Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Everything you need to understand, analyze, and optimize your content performance.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MessageCircle className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline">AI-Powered</Badge>
                  </div>
                  <CardTitle className="text-xl">Conversational Analytics</CardTitle>
                  <CardDescription>
                    Chat with your data using natural language to get instant insights and recommendations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Natural language queries
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      AI-powered recommendations
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Contextual insights
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Smart pattern recognition
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Try Chat Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MousePointer className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline">Real-time</Badge>
                  </div>
                  <CardTitle className="text-xl">Advanced Heatmapping</CardTitle>
                  <CardDescription>
                    Visualize user behavior with comprehensive heatmaps and interaction tracking.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Click heatmaps
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Scroll depth tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Attention mapping
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Mobile & desktop views
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      View Examples
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative overflow-hidden">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="outline">Analytics</Badge>
                  </div>
                  <CardTitle className="text-xl">Performance Insights</CardTitle>
                  <CardDescription>
                    Deep analytics and metrics to understand your content's impact and effectiveness.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Conversion tracking
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Engagement metrics
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      A/B testing
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Custom dashboards
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Button variant="outline" size="sm" className="w-full bg-transparent">
                      Explore Analytics
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Feature Categories */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Complete Feature Set</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore all the tools and capabilities that make optml.ai the ultimate content optimization platform.
              </p>
            </div>

            <Tabs defaultValue="analytics" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="optimization">Optimization</TabsTrigger>
                <TabsTrigger value="integration">Integration</TabsTrigger>
                <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
              </TabsList>

              <TabsContent value="analytics" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <Activity className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">Real-time Monitoring</CardTitle>
                      <CardDescription>Track user behavior as it happens with live data streams.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Live visitor tracking</li>
                        <li>• Real-time heatmap updates</li>
                        <li>• Instant performance alerts</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <PieChart className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">Advanced Segmentation</CardTitle>
                      <CardDescription>Analyze different user groups and behavior patterns.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Geographic segmentation</li>
                        <li>• Device-based analysis</li>
                        <li>• Traffic source breakdown</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <TrendingUp className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">Trend Analysis</CardTitle>
                      <CardDescription>Identify patterns and trends in your content performance.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Historical data comparison</li>
                        <li>• Seasonal trend detection</li>
                        <li>• Performance forecasting</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Filter className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">Custom Filters</CardTitle>
                      <CardDescription>Filter and drill down into specific data points.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Date range filtering</li>
                        <li>• User behavior filters</li>
                        <li>• Content type segmentation</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Target className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">Goal Tracking</CardTitle>
                      <CardDescription>Set and monitor specific conversion goals and KPIs.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Custom goal definition</li>
                        <li>• Conversion funnel analysis</li>
                        <li>• ROI measurement</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Clock className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">Time-based Insights</CardTitle>
                      <CardDescription>Understand how user behavior changes over time.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Peak activity hours</li>
                        <li>• Session duration analysis</li>
                        <li>• Time-on-page metrics</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="optimization" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <Brain className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">AI Recommendations</CardTitle>
                      <CardDescription>Get intelligent suggestions for improving your content.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Layout optimization tips</li>
                        <li>• Content placement advice</li>
                        <li>• CTA improvement suggestions</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Layers className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">A/B Testing Suite</CardTitle>
                      <CardDescription>
                        Test different versions of your content to find what works best.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Visual A/B test editor</li>
                        <li>• Statistical significance</li>
                        <li>• Multi-variant testing</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Settings className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">Auto-Optimization</CardTitle>
                      <CardDescription>
                        Let AI automatically optimize your content based on performance data.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Smart content adjustments</li>
                        <li>• Dynamic element positioning</li>
                        <li>• Automated A/B testing</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="integration" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <Globe className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">Universal Compatibility</CardTitle>
                      <CardDescription>Works with all major platforms and content management systems.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• WordPress, Shopify, Webflow</li>
                        <li>• Custom HTML/CSS sites</li>
                        <li>• Single-page applications</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Zap className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">Easy Installation</CardTitle>
                      <CardDescription>Get started in minutes with our simple setup process.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• One-click browser extension</li>
                        <li>• Simple code snippet</li>
                        <li>• Plugin marketplace</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Smartphone className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">Mobile Optimization</CardTitle>
                      <CardDescription>Full support for mobile and responsive design analysis.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Mobile heatmaps</li>
                        <li>• Touch interaction tracking</li>
                        <li>• Responsive design insights</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="enterprise" className="space-y-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <Shield className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">Enterprise Security</CardTitle>
                      <CardDescription>Bank-level security and compliance for enterprise customers.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• SOC 2 Type II compliance</li>
                        <li>• GDPR & CCPA compliant</li>
                        <li>• Data encryption at rest</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Users className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">Team Collaboration</CardTitle>
                      <CardDescription>Advanced team features for large organizations.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Role-based permissions</li>
                        <li>• Team workspaces</li>
                        <li>• Shared dashboards</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Settings className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">Custom Solutions</CardTitle>
                      <CardDescription>Tailored features and integrations for enterprise needs.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Custom API endpoints</li>
                        <li>• White-label solutions</li>
                        <li>• Dedicated support</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Feature Comparison</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                See what's included in each plan and find the perfect fit for your needs.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-center p-4 font-semibold">Starter</th>
                    <th className="text-center p-4 font-semibold">Professional</th>
                    <th className="text-center p-4 font-semibold">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "AI Chat Interface", starter: true, pro: true, enterprise: true },
                    { feature: "Basic Heatmaps", starter: true, pro: true, enterprise: true },
                    { feature: "Advanced Analytics", starter: false, pro: true, enterprise: true },
                    { feature: "A/B Testing", starter: false, pro: true, enterprise: true },
                    { feature: "Custom Dashboards", starter: false, pro: true, enterprise: true },
                    { feature: "Team Collaboration", starter: false, pro: false, enterprise: true },
                    { feature: "API Access", starter: false, pro: false, enterprise: true },
                    { feature: "White-label Options", starter: false, pro: false, enterprise: true },
                    { feature: "Dedicated Support", starter: false, pro: false, enterprise: true },
                  ].map((row, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="text-center p-4">
                        {row.starter ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="text-center p-4">
                        {row.pro ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                      <td className="text-center p-4">
                        {row.enterprise ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-muted-foreground">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-center mt-8">
              <Button size="lg" asChild>
                <Link href="/pricing">
                  View Pricing Plans
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Experience all these powerful features with our 14-day free trial. No credit card required.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="gap-2" asChild>
                  <Link href="/signup">
                    Start Your Free Trial
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <Link href="/schedule-demo">Schedule Demo</Link>
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/60">
                14-day free trial • No credit card required • Cancel anytime
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
