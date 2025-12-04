"use client"
import type React from "react"

import Link from "next/link"
import { Brain, Sparkles, ArrowRight, Zap, MessageCircle, BarChart3 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ComingSoonPage() {

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
            {/* Header */}
            <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-background/50 backdrop-blur-sm fixed top-0 w-full z-50">
                <Link className="flex items-center justify-center" href="#">
                    <span className="ml-2 text-lg font-bold">optml.ai</span>
                </Link>
                <nav className="ml-auto flex items-center gap-2">
                    <Badge variant="secondary" className="hidden sm:flex items-center gap-1">
                        Launching Soon
                    </Badge>
                </nav>
            </header>

            <main className="flex-1 pt-14">
                {/* Hero Section */}
                <section className="w-full py-16 md:py-24 lg:py-32">
                    <div className="container mx-auto max-w-4xl px-4 md:px-6">
                        <div className="flex flex-col items-center text-center space-y-8">
                            <Badge variant="outline" className="text-sm px-4 py-2">
                                <Zap className="w-4 h-4 mr-2" />
                                Coming Soon - AI-Powered Content Optimization
                            </Badge>

                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl max-w-3xl text-balance">
                                The Future of Content Optimization Is <span className="text-primary">Almost Here</span>
                            </h1>

                            <p className="max-w-2xl text-muted-foreground text-lg md:text-xl leading-relaxed">
                                Imagine understanding exactly how users interact with your content: what captures their
                                attention, and how to make every element more effective. Now imagine doing it all through a simple
                                conversation with AI.
                            </p>

                        </div>
                    </div>
                </section>

                {/* Feature Hints */}
                <section className="w-full py-12 md:py-20 bg-muted/30">
                    <div className="container mx-auto max-w-6xl px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">What&apos;s Coming</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                A glimpse into the intelligent content analytics platform we&apos;re building
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {/* Feature 1 */}
                            <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
                                <CardContent className="pt-6 space-y-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <MessageCircle className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold">Natural Language Queries</h3>
                                    <p className="text-muted-foreground leading-relaxed min-h-35">
                                        Ask questions like &quot;Which ad placement is my ad best suited for?&quot; or &quot;How can I drive better
                                        conversion for my e-commerce ads?&quot;
                                    </p>
                                    <Badge variant="secondary" className="w-fit">
                                        AI-Powered
                                    </Badge>
                                </CardContent>
                            </Card>

                            {/* Feature 2 */}
                            <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
                                <CardContent className="pt-6 space-y-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Brain className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold">Actionable Recommendations</h3>
                                    <p className="text-muted-foreground leading-relaxed min-h-35">
                                        Get optimizations based on the needs of the user at the time of viewing your advert. Publisher news
                                        website versus e-commerce listings page requires different ad content.
                                    </p>
                                    <Badge variant="secondary" className="w-fit">
                                        Context-Aware
                                    </Badge>
                                </CardContent>
                            </Card>

                            {/* Feature 3 */}
                            <Card className="relative overflow-hidden border-2 hover:border-primary/50 transition-colors">
                                <CardContent className="pt-6 space-y-4">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <BarChart3 className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold">Advanced Analytics</h3>
                                    <p className="text-muted-foreground leading-relaxed min-h-35">
                                        Go beyond chat functionality with reports showing how your ad will perform across in-store,
                                        e-commerce and social channels.
                                    </p>
                                    <Badge variant="secondary" className="w-fit">
                                        Multi-Channel
                                    </Badge>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Interactive Preview */}
                <section className="w-full py-12 md:py-20">
                    <div className="container mx-auto max-w-4xl px-4 md:px-6">
                        <div className="space-y-8">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
                                    A Smarter Way to Understand Your Content
                                </h2>
                                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                    Traditional analytics tell you what happened. We tell you why—and what to do about it.
                                </p>
                            </div>

                            {/* Mock Chat Interface */}
                            <Card className="max-w-2xl mx-auto shadow-2xl">
                                <CardContent className="space-y-4">
                                    <div className="flex items-center gap-2 pb-3 border-b">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Brain className="w-4 h-4 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold">optmlAI Optimization Assistant</p>
                                            <p className="text-xs text-muted-foreground">Ready to analyze your content</p>
                                        </div>
                                    </div>

                                    {/* Chat Messages */}
                                    <div className="space-y-3 min-h-[200px]">
                                        <div className="flex gap-2">

                                            <div className="bg-muted rounded-lg p-3 text-sm max-w-[80%]">
                                                Which ad placement is my creative best suited for?
                                            </div>
                                        </div>
                                        <div className="flex gap-2 justify-end">
                                            <div className="bg-primary/10 rounded-lg p-3 text-sm max-w-[80%]">
                                                <MessageCircle className="w-4 h-4 text-primary inline mr-2" />
                                                Your creative performs best on e-commerce listing pages with a 3.8% CTR. The product-focused
                                                layout and clear CTA work well when users are already in shopping mode.
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="bg-muted rounded-lg p-3 text-sm max-w-[80%]">
                                                How can I optimize this ad for social channels?
                                            </div>
                                        </div>
                                        <div className="flex gap-2 justify-end">
                                            <div className="bg-primary/10 rounded-lg p-3 text-sm max-w-[80%]">
                                                <Sparkles className="w-4 h-4 text-primary inline mr-2" />
                                                For social, move your headline to the top 25% of the creative and make it 40% larger. Add more
                                                visual contrast for thumb-scrolling. This could boost engagement by 28% based on platform
                                                patterns.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-3 border-t">
                                        <div className="flex gap-2">
                                            <div className="flex-1 bg-muted/50 rounded-md px-3 py-2 text-sm text-muted-foreground flex items-center">
                                                Ask anything about your content...
                                            </div>
                                            <Button size="sm" disabled className="px-3">
                                                <ArrowRight className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    )
}
