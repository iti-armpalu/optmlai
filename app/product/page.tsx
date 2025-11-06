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
    Chrome,
    FileBox as Firefox,
    Globe,
    Shield,
    Clock,
    Download,
    Activity,
    Award,
    BarChart3,
    Eye,
    UserRoundX,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge"
import { ctaData, productStory as ps, productHero as h, howItWorks as hiw } from "./_data"
import { CTA } from "@/components/sections/cta"

export default function ProductPage() {
    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-1">
                {/* Hero Section */}
                <section className={`w-full py-12 md:py-24 lg:py-32 ${h.gradient}`}>
                    <div className="container mx-auto max-w-7xl px-4 md:px-6">
                        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                            {/* Left: copy */}
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <Badge variant={h.badge.variant ?? "secondary"} className="w-fit">
                                        <h.badge.icon className="mr-1 h-3 w-3" aria-hidden="true" />
                                        {h.badge.label}
                                    </Badge>

                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                        {h.heading}
                                    </h1>

                                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                        {h.subheading}
                                    </p>
                                </div>

                                {/* CTAs */}
                                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                    {h.ctas.map((cta, i) => {
                                        const Icon = cta.icon;
                                        const btn =
                                            cta.href ? (
                                                <Button
                                                    key={cta.label}
                                                    asChild
                                                    size="lg"
                                                    variant={i === 0 ? "default" : cta.variant ?? "outline"}
                                                    className="gap-2"
                                                >
                                                    <Link href={cta.href}>
                                                        {cta.label}
                                                        {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
                                                    </Link>
                                                </Button>
                                            ) : (
                                                <Button
                                                    key={cta.label}
                                                    size="lg"
                                                    variant={cta.variant ?? "outline"}
                                                    className="gap-2 bg-transparent"
                                                >
                                                    {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
                                                    {cta.label}
                                                </Button>
                                            );
                                        return btn;
                                    })}
                                </div>

                                {/* Checklist */}
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                    {h.checklist.map((c, idx) => {
                                        const Icon = c.icon;
                                        return (
                                            <div key={idx} className="flex items-center gap-1">
                                                {Icon ? <Icon className={`h-4 w-4 ${c.iconClass ?? ""}`} aria-hidden="true" /> : null}
                                                {c.label}
                                            </div>
                                        );
                                    })}
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

                {/* Product Story Section */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6 sm:px-6 lg:px-8">
                        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                            {/* Left: narrative */}
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <Badge variant={ps.badge.variant ?? "outline"} className="w-fit">
                                        <ps.badge.icon className="mr-1 h-3 w-3" aria-hidden="true" />
                                        {ps.badge.label}
                                    </Badge>

                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                        {ps.heading.before}
                                        <span className="text-primary">{ps.heading.highlight}</span>
                                        {ps.heading.after ?? null}
                                    </h2>

                                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                                        {ps.subheading}
                                    </p>
                                </div>

                                {/* Points */}
                                <div className="space-y-4">
                                    {ps.points.map((p) => (
                                        <div key={p.id} className="flex items-start gap-3">
                                            <div
                                                className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full ${p.badge.bgClass}`}
                                            >
                                                {p.badge.kind === "emoji" ? (
                                                    <span className={`${p.badge.textClass} text-sm`}>{p.badge.value}</span>
                                                ) : (
                                                    <p.badge.icon className={`h-4 w-4 ${p.badge.textClass}`} aria-hidden="true" />
                                                )}
                                            </div>
                                            <div>
                                                <h3
                                                    className={`mb-1 font-semibold ${p.tone === "negative" ? "text-red-600" : "text-green-600"
                                                        }`}
                                                >
                                                    {p.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground">{p.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: comparison card */}
                            <div className="flex items-center justify-center">
                                <Card className="w-full max-w-md shadow-2xl">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <ps.compareCard.title.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                                            {ps.compareCard.title.label}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="space-y-3">
                                            {ps.compareCard.rows.map((row, i) => (
                                                <div
                                                    key={i}
                                                    className={`flex items-center justify-between rounded-lg p-3 ${row.bgClass}`}
                                                >
                                                    <span className="text-sm font-medium">{row.label}</span>
                                                    <span className={`text-sm ${row.textClass}`}>{row.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How optml.ai Works Section */}

                <section className="w-full bg-muted/50 py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{hiw.heading}</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                {hiw.subheading}
                            </p>
                        </div>

                        {/* Tabs */}
                        <Tabs defaultValue={hiw.tabs[0].value} className="w-full">
                            <TabsList className="mb-8 grid w-full max-w-4xl grid-cols-4 mx-auto">
                                {hiw.tabs.map((t) => (
                                    <TabsTrigger key={t.value} value={t.value}>
                                        {t.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {hiw.tabs.map((t) => {
                                const HeadingIcon = t.left.headingIcon;
                                return (
                                    <TabsContent key={t.value} value={t.value} className="space-y-8">
                                        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
                                            {/* Left column */}
                                            <div className="space-y-4">
                                                <div className="mb-4 flex items-center gap-2">
                                                    <HeadingIcon className="h-8 w-8 text-primary" aria-hidden="true" />
                                                    <h3 className="text-2xl font-bold">{t.left.heading}</h3>
                                                </div>
                                                <p className="text-lg text-muted-foreground">{t.left.description}</p>

                                                <div className="space-y-3">
                                                    {t.left.bullets.map((b, i) => {
                                                        const Icon = b.icon;
                                                        return (
                                                            <div key={i} className="flex items-center gap-3">
                                                                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                                                                <span>{b.label}</span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            {/* Right column (card) */}
                                            <div className="flex items-center justify-center">
                                                {/* KPIs */}
                                                {t.right.kind === "kpis" && (
                                                    <Card className="w-full max-w-md">
                                                        <CardContent className="pt-6">
                                                            <div className="space-y-4">
                                                                {t.right.rows.map((r, i) => (
                                                                    <div
                                                                        key={i}
                                                                        className={`flex items-center justify-between rounded-lg p-3 ${r.bgClass}`}
                                                                    >
                                                                        <span className="text-sm font-medium">{r.label}</span>
                                                                        <span className={`text-sm font-bold ${r.textClass}`}>{r.value}</span>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                )}

                                                {/* Progress bars */}
                                                {t.right.kind === "progress" && (
                                                    <Card className="w-full max-w-md">
                                                        <CardHeader>
                                                            {t.right.title ? <CardTitle className="text-center">{t.right.title}</CardTitle> : null}
                                                        </CardHeader>
                                                        <CardContent className="space-y-4">
                                                            <div className="space-y-3">
                                                                {t.right.bars.map((b, i) => (
                                                                    <div key={i} className="flex items-center justify-between">
                                                                        <span className="text-sm">{b.label}</span>
                                                                        <div className="flex items-center gap-2">
                                                                            <div className="h-2 w-20 rounded-full bg-muted">
                                                                                <div
                                                                                    className="h-full rounded-full bg-primary"
                                                                                    style={{ width: `${b.percent}%` }}
                                                                                />
                                                                            </div>
                                                                            <span className="text-sm font-bold">{b.percent}%</span>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                )}

                                                {/* Chat examples */}
                                                {t.right.kind === "chat" && (
                                                    <Card className="w-full max-w-md shadow-lg">
                                                        <CardHeader className="pb-3">
                                                            <CardTitle className="flex items-center gap-2 text-sm">
                                                                <Activity className="h-4 w-4 text-primary" aria-hidden="true" />
                                                                {t.right.title}
                                                            </CardTitle>
                                                        </CardHeader>
                                                        <CardContent className="space-y-3">
                                                            {t.right.messages.map((m, i) => (
                                                                <div
                                                                    key={i}
                                                                    className={`rounded-lg p-2 text-sm ${m.from === "ai" ? "bg-primary/5" : "bg-muted"
                                                                        }`}
                                                                >
                                                                    {m.text}
                                                                </div>
                                                            ))}
                                                        </CardContent>
                                                    </Card>
                                                )}

                                                {/* Stat grid */}
                                                {t.right.kind === "grid" && (
                                                    <Card className="w-full max-w-md">
                                                        <CardHeader>
                                                            <CardTitle className="text-center">{t.right.title}</CardTitle>
                                                        </CardHeader>
                                                        <CardContent className="space-y-4">
                                                            <div className="grid grid-cols-2 gap-4">
                                                                {t.right.tiles.map((tile, i) => (
                                                                    <div key={i} className={`rounded-lg p-3 text-center ${tile.bgClass}`}>
                                                                        <div className={`text-2xl font-bold ${tile.textClass}`}>{tile.value}</div>
                                                                        <div className="text-xs text-muted-foreground">{tile.label}</div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </CardContent>
                                                    </Card>
                                                )}
                                            </div>
                                        </div>
                                    </TabsContent>
                                );
                            })}
                        </Tabs>
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

                {/* How to Use the Plugin Section */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">How to Use the Plugin</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Get started with optml.ai in minutes. Our browser extension makes content optimization effortless.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                            <Card className="relative overflow-hidden">
                                <CardHeader>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                            <span className="text-green-600 font-bold">1</span>
                                        </div>
                                        <Badge variant="secondary">Install</Badge>
                                    </div>
                                    <CardTitle className="text-xl">Install the Extension</CardTitle>
                                    <CardDescription>Add optml.ai to your browser in seconds</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <Globe className="h-5 w-5 text-primary" />
                                            <span className="text-sm">Available for Chrome, Firefox, Safari</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Shield className="h-5 w-5 text-primary" />
                                            <span className="text-sm">Privacy-first, secure installation</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <UserRoundX className="h-5 w-5 text-primary" />
                                            <span className="text-sm">No account required to start</span>
                                        </div>
                                    </div>
                                    <Button className="w-full bg-transparent" variant="outline">
                                        Install Extension
                                    </Button>
                                </CardContent>
                            </Card>

                            <Card className="relative overflow-hidden">
                                <CardHeader>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                            <span className="text-green-600 font-bold">2</span>
                                        </div>
                                        <Badge variant="secondary">Activate</Badge>
                                    </div>
                                    <CardTitle className="text-xl">Activate on Any Page</CardTitle>
                                    <CardDescription>Click the extension icon to start analyzing</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <MousePointer className="h-5 w-5 text-primary" />
                                            <span className="text-sm">One-click activation on any website</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Eye className="h-5 w-5 text-primary" />
                                            <span className="text-sm">Instant heatmap generation</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <BarChart3 className="h-5 w-5 text-primary" />
                                            <span className="text-sm">Real-time analytics overlay</span>
                                        </div>
                                    </div>
                                    <div className="bg-muted rounded-lg p-3">
                                        <p className="text-xs text-muted-foreground">
                                            Works on any website - your blog, landing pages, e-commerce sites, and more.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="relative overflow-hidden">
                                <CardHeader>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                                            <span className="text-green-600 font-bold">3</span>
                                        </div>
                                        <Badge variant="secondary">Optimize</Badge>
                                    </div>
                                    <CardTitle className="text-xl">Get AI Insights / Chat with Your data</CardTitle>
                                    <CardDescription>Chat with AI to understand your data / Ask questions about your content performance in natural language</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <MessageCircle className="h-5 w-5 text-primary" />
                                            <span className="text-sm">Ask questions in natural language</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Brain className="h-5 w-5 text-primary" />
                                            <span className="text-sm">Get actionable recommendations</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Zap className="h-5 w-5 text-primary" />
                                            <span className="text-sm">Implement changes with one click</span>
                                        </div>
                                    </div>
                                    <div className="bg-primary/5 rounded-lg p-3">
                                        <p className="text-xs text-muted-foreground">
                                            `&quot;`Why are users leaving?`&quot;` → `&quot;`Users scroll past your CTA. Move it 200px higher for 23% more
                                            conversions.`&quot;`
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="mt-12 text-center">
                            <div className="inline-flex items-center gap-2 bg-muted rounded-full px-6 py-3">
                                <Award className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium">Average setup time: 2 minutes</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Use Cases Section */}
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container mx-auto max-w-7xl px-4 md:px-6 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Built for Every Content Creator</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Whether you`&apos;re a blogger, marketer, or enterprise team, optml.ai adapts to your unique needs and
                                workflow.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                            <Card className="relative overflow-hidden">
                                <CardHeader>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                            <span className="text-green-600">📝</span>
                                        </div>
                                        <Badge variant="outline">Content Creators</Badge>
                                    </div>
                                    <CardTitle className="text-lg">Bloggers & Writers</CardTitle>
                                    <CardDescription>Optimize your articles and posts for maximum engagement</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="text-sm text-muted-foreground">Perfect for:</div>
                                    <ul className="space-y-1 text-sm">
                                        <li className="flex items-center gap-2">
                                            <Check className="w-3 h-3 text-green-500" />
                                            Blog post optimization
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-3 h-3 text-green-500" />
                                            Newsletter performance
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-3 h-3 text-green-500" />
                                            Social media content
                                        </li>
                                    </ul>

                                </CardContent>
                            </Card>

                            <Card className="relative overflow-hidden">
                                <CardHeader>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                            <span className="text-green-600">📈</span>
                                        </div>
                                        <Badge variant="outline">Marketing Teams</Badge>
                                    </div>
                                    <CardTitle className="text-lg">Digital Marketers</CardTitle>
                                    <CardDescription>Boost campaign performance with data-driven insights</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="text-sm text-muted-foreground">Perfect for:</div>
                                    <ul className="space-y-1 text-sm">
                                        <li className="flex items-center gap-2">
                                            <Check className="w-3 h-3 text-green-500" />
                                            Landing page optimization
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-3 h-3 text-green-500" />
                                            Email campaign analysis
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-3 h-3 text-green-500" />
                                            A/B testing automation
                                        </li>
                                    </ul>

                                </CardContent>
                            </Card>

                            <Card className="relative overflow-hidden">
                                <CardHeader>
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                            <span className="text-green-600">🏢</span>
                                        </div>
                                        <Badge variant="outline">Enterprise</Badge>
                                    </div>
                                    <CardTitle className="text-lg">Large Organizations</CardTitle>
                                    <CardDescription>Scale content optimization across teams and departments</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="text-sm text-muted-foreground">Perfect for:</div>
                                    <ul className="space-y-1 text-sm">
                                        <li className="flex items-center gap-2">
                                            <Check className="w-3 h-3 text-green-500" />
                                            Multi-site management
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-3 h-3 text-green-500" />
                                            Team collaboration
                                        </li>
                                        <li className="flex items-center gap-2">
                                            <Check className="w-3 h-3 text-green-500" />
                                            Custom integrations
                                        </li>
                                    </ul>

                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Key Benefits */}
                {/* <section className="w-full py-12 md:py-24 lg:py-32">
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
                </section> */}

                {/* Competitive Advantage */}
                <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
                    <div className="max-w-7xl mx-auto px-4 md:px-6 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Why Choose optml.ai?</h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                See how we compare to traditional analytics and optimization tools.
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-background rounded-lg max-w-4xl mx-auto">
                                <thead>
                                    <tr className="border-b">
                                        <th className="text-left p-6 font-semibold">Feature</th>
                                        <th className="text-center p-6 font-semibold">Traditional Tools</th>
                                        <th className="text-center p-6 font-semibold text-primary">optml.ai</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        {
                                            feature: "Setup Time",
                                            traditional: "Hours to Days",
                                            optml: "2 Minutes",
                                        },
                                        {
                                            feature: "Learning Curve",
                                            traditional: "Steep",
                                            optml: "Conversational",
                                        },
                                        {
                                            feature: "Insights",
                                            traditional: "Raw Data",
                                            optml: "AI Recommendations",
                                        },
                                        {
                                            feature: "Real-time Analysis",
                                            traditional: "❌",
                                            optml: "✅",
                                        },
                                        {
                                            feature: "Natural Language Queries",
                                            traditional: "❌",
                                            optml: "✅",
                                        },
                                        {
                                            feature: "Automated Optimization",
                                            traditional: "❌",
                                            optml: "✅",
                                        },
                                        {
                                            feature: "Cross-platform Support",
                                            traditional: "Limited",
                                            optml: "Universal",
                                        },
                                    ].map((row, index) => (
                                        <tr key={index} className="border-b hover:bg-muted/50">
                                            <td className="p-6 font-medium">{row.feature}</td>
                                            <td className="text-center p-6 text-muted-foreground">{row.traditional}</td>
                                            <td className="text-center p-6 font-medium text-primary">{row.optml}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
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
