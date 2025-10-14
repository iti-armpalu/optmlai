"use client"
import Image from "next/image"
import Link from "next/link"
import {
    MousePointer,
    Zap,
    Check,
    Play,
    MessageCircle,
    Brain,
    TrendingUp,
    Chrome,
    FileBox as Firefox,
    Globe,
    Shield,
    Clock,
    Users,
    Download,
    Activity,
    Calendar,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ctaData } from "./_data"
import { CTA } from "@/components/sections/cta"

export default function ProductPage() {
    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-1">
                {/* Hero Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <Badge variant="secondary" className="w-fit">
                                        <Download className="w-3 h-3 mr-1" />
                                        AI-Powered Content Optimization
                                    </Badge>
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        Content Optimization Needs Context
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        Optml.ai is the first technology that optimizes ads through the lens of human behavior.
                                        Instead of blindly tweaking creative elements, it analyzes the viewer’s context, attention, and emotion to deliver ads that perform, not just appear.
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    <Button size="lg" className="gap-2" asChild>
                                        <Link href="/signup">
                                            Install Extension
                                            <Download className="w-4 h-4" />
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
                                    <div className="flex items-center gap-1">
                                        <Check className="w-4 h-4 text-green-500" />
                                        Free 14-day trial
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Check className="w-4 h-4 text-green-500" />
                                        Works on any website
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Check className="w-4 h-4 text-green-500" />
                                        No coding required
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative">
                                    <Image
                                        src="/ai-content-optimization-dashboard-with-heatmaps-an.jpg"
                                        alt="optml.ai Browser Extension Interface"
                                        width={600}
                                        height={400}
                                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-2xl"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-xl" />
                                    {/* Browser Extension Badge */}
                                    <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full font-medium">
                                        Browser Extension
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6 sm:px-6 lg:px-8">
                        <div className="text-center space-y-8">
                            <div className="space-y-4">
                                <Badge variant="secondary" className="w-fit mx-auto">
                                    <Brain className="w-3 h-3 mr-1" />
                                    AI-Powered Browser Extension
                                </Badge>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                    The Smart Way to <span className="text-primary">Optimize Content</span>
                                </h1>
                                <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl">
                                    Our intelligent browser extension provides real-time heatmapping and AI-powered insights to help you
                                    create more engaging content across any platform.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="gap-2" asChild>
                                    <Link href="/signup">
                                        <Download className="w-4 h-4" />
                                        Install Extension
                                    </Link>
                                </Button>
                                <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
                                    <Link href="/schedule-demo">
                                        <Play className="w-4 h-4" />
                                        Schedule Demo
                                    </Link>
                                </Button>
                            </div>
                            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Chrome className="w-4 h-4" />
                                    Chrome
                                </div>
                                <div className="flex items-center gap-2">
                                    <Firefox className="w-4 h-4" />
                                    Firefox
                                </div>
                                <div className="flex items-center gap-2">
                                    <Globe className="w-4 h-4" />
                                    Safari
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Product Overview */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6 sm:px-6 lg:px-8">
                        <div className="grid gap-12 lg:grid-cols-2 items-center">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                        Content Optimization Made Simple
                                    </h2>
                                    <p className="text-muted-foreground md:text-xl/relaxed">
                                        optml.ai is a powerful browser extension that overlays intelligent heatmapping and analytics on any
                                        webpage, giving you instant insights into user behavior and content performance.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Activity className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Real-time Analysis</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Get instant feedback on user engagement, click patterns, and scroll behavior as you create or
                                                edit content.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <MessageCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold mb-1">AI Chat Interface</h3>
                                            <p className="text-sm text-muted-foreground">
                                                Ask questions about your data in natural language and get actionable recommendations for
                                                improvement.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                                        <div>
                                            <h3 className="font-semibold mb-1">Privacy-First</h3>
                                            <p className="text-sm text-muted-foreground">
                                                All data processing happens locally in your browser. No personal data is stored on our servers.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="relative">
                                    <Image
                                        src="/ai-content-optimization-dashboard-with-heatmaps-an.jpg"
                                        alt="optml.ai Browser Extension Interface"
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

                {/* How to Use the Plugin Section */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6 sm:px-6 lg:px-8">
                        <div className="text-center space-y-4 mb-16">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How to Use the Plugin</h2>
                            <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed">
                                Get started with optml.ai in just three simple steps. No technical knowledge required.
                            </p>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-3">
                            {/* Step 1 */}
                            <Card className="relative">
                                <CardHeader className="text-center">
                                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                        1
                                    </div>
                                    <CardTitle className="flex items-center justify-center gap-2">
                                        <Download className="w-5 h-5" />
                                        Install Extension
                                    </CardTitle>
                                    <CardDescription>
                                        Add optml.ai to your browser from the Chrome Web Store, Firefox Add-ons, or Safari Extensions
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm">
                                            <Check className="w-4 h-4 text-green-500" />
                                            One-click installation
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Check className="w-4 h-4 text-green-500" />
                                            Works on Chrome, Firefox, Safari
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Check className="w-4 h-4 text-green-500" />
                                            No account required to start
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <Badge variant="outline" className="text-xs">
                                            <Clock className="w-3 h-3 mr-1" />
                                            Setup time: 30 seconds
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Step 2 */}
                            <Card className="relative">
                                <CardHeader className="text-center">
                                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                        2
                                    </div>
                                    <CardTitle className="flex items-center justify-center gap-2">
                                        <MousePointer className="w-5 h-5" />
                                        Activate on Any Page
                                    </CardTitle>
                                    <CardDescription>
                                        Click the optml.ai icon in your browser toolbar to activate heatmapping on any webpage
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm">
                                            <Check className="w-4 h-4 text-green-500" />
                                            Real-time heatmap overlay
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Check className="w-4 h-4 text-green-500" />
                                            Click and scroll tracking
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Check className="w-4 h-4 text-green-500" />
                                            Attention mapping
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <Badge variant="outline" className="text-xs">
                                            <Activity className="w-3 h-3 mr-1" />
                                            Works on any website
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Step 3 */}
                            <Card className="relative">
                                <CardHeader className="text-center">
                                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                        3
                                    </div>
                                    <CardTitle className="flex items-center justify-center gap-2">
                                        <Brain className="w-5 h-5" />
                                        Chat with Your Data
                                    </CardTitle>
                                    <CardDescription>
                                        Open the AI chat panel and ask questions about your content performance in natural language
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm">
                                            <Check className="w-4 h-4 text-green-500" />
                                            Natural language queries
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Check className="w-4 h-4 text-green-500" />
                                            Actionable recommendations
                                        </div>
                                        <div className="flex items-center gap-2 text-sm">
                                            <Check className="w-4 h-4 text-green-500" />
                                            Export insights & reports
                                        </div>
                                    </div>
                                    <div className="pt-2">
                                        <Badge variant="outline" className="text-xs">
                                            <MessageCircle className="w-3 h-3 mr-1" />
                                            AI-powered insights
                                        </Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Key Benefits */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6 sm:px-6 lg:px-8">
                        <div className="text-center space-y-4 mb-16">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose optml.ai?</h2>
                            <p className="max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed">
                                Built for content creators, marketers, and businesses who want to optimize their online presence.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            <Card>
                                <CardHeader>
                                    <Zap className="h-10 w-10 text-primary" />
                                    <CardTitle>Instant Setup</CardTitle>
                                    <CardDescription>
                                        No complex integrations or code changes. Install and start optimizing in under a minute.
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <Users className="h-10 w-10 text-primary" />
                                    <CardTitle>Universal Compatibility</CardTitle>
                                    <CardDescription>
                                        Works on any website - WordPress, Shopify, custom sites, landing pages, and more.
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <Brain className="h-10 w-10 text-primary" />
                                    <CardTitle>AI-Powered Insights</CardTitle>
                                    <CardDescription>
                                        Get intelligent recommendations based on user behavior patterns and industry best practices.
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <Shield className="h-10 w-10 text-primary" />
                                    <CardTitle>Privacy-First</CardTitle>
                                    <CardDescription>
                                        All analysis happens in your browser. No personal data collection or storage on external servers.
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <Activity className="h-10 w-10 text-primary" />
                                    <CardTitle>Real-Time Analysis</CardTitle>
                                    <CardDescription>
                                        See user engagement patterns as they happen. No waiting for reports or data processing.
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <TrendingUp className="h-10 w-10 text-primary" />
                                    <CardTitle>Proven Results</CardTitle>
                                    <CardDescription>
                                        Users see an average 40% increase in engagement and 25% improvement in conversion rates.
                                    </CardDescription>
                                </CardHeader>
                            </Card>
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
