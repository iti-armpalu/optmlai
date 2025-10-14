"use client"

import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Brain,
  Eye,
  Zap,
  BarChart3,
  Target,
  Layers,
  Activity,
  Lightbulb,
  TrendingUp,
  Users,
  CheckCircle,
  Play,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TechnologyPage() {
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
                    <Brain className="w-3 h-3 mr-1" />
                    Neuroscience + AI
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    The Science Behind <span className="text-primary">optml.ai</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover how we combine cutting-edge neuroscience research with advanced AI to predict human
                    attention and optimize content performance before it goes live.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-2">
                    <Play className="w-4 h-4" />
                    Watch Technology Demo
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
                    <Link href="/signup">
                      Try It Free
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="/brain-neural-network-visualization-with-data-flowi.jpg"
                    alt="Neural Network Visualization"
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

        {/* Core Technology Overview */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Three Pillars of Innovation</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  optml.ai is built on three foundational technologies that work together to understand and predict
                  human behavior
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="text-center">
                <CardHeader>
                  <Brain className="h-16 w-16 text-primary mx-auto" />
                  <CardTitle>Neuroscience Foundation</CardTitle>
                  <CardDescription>
                    Based on 30+ years of research in visual attention, cognitive psychology, and decision-making
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-left">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Visual salience mapping from eye-tracking studies
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Cognitive load theory application
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Behavioral economics principles
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Zap className="h-16 w-16 text-primary mx-auto" />
                  <CardTitle>AI Processing Engine</CardTitle>
                  <CardDescription>
                    Advanced machine learning models trained on millions of user interactions and visual elements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-left">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Computer vision for element detection
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Deep learning prediction models
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Natural language processing for insights
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <BarChart3 className="h-16 w-16 text-primary mx-auto" />
                  <CardTitle>Real-Time Analytics</CardTitle>
                  <CardDescription>
                    Continuous learning system that improves predictions based on actual user behavior data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-left">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Live heatmap generation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Behavioral pattern recognition
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      Adaptive recommendation engine
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Neuroscience Deep Dive */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="w-fit">
                    <Eye className="w-3 h-3 mr-1" />
                    Visual Neuroscience
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Understanding Human <span className="text-primary">Visual Attention</span>
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Our technology is grounded in decades of research on how the human brain processes visual
                    information and makes decisions.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Target className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Visual Salience Theory</h3>
                      <p className="text-sm text-muted-foreground">
                        Based on research showing how certain visual elements naturally draw attention through contrast,
                        color, and positioning.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Layers className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Cognitive Load Management</h3>
                      <p className="text-sm text-muted-foreground">
                        Understanding how information overload affects decision-making and optimizing content to reduce
                        cognitive burden.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Activity className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Behavioral Economics</h3>
                      <p className="text-sm text-muted-foreground">
                        Applying principles of how people make decisions under uncertainty to improve conversion rates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-md">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-primary" />
                      Research Foundation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Eye-tracking studies analyzed</span>
                        <Badge variant="secondary">10,000+</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Academic papers reviewed</span>
                        <Badge variant="secondary">500+</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">User interactions processed</span>
                        <Badge variant="secondary">50M+</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Visual elements analyzed</span>
                        <Badge variant="secondary">1B+</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* AI Technology Deep Dive */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">AI Architecture & Processing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore the advanced machine learning models and processing pipeline that power optml.ai
                </p>
              </div>
            </div>

            <Tabs defaultValue="vision" className="w-full max-w-6xl mx-auto mt-12">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="vision">Computer Vision</TabsTrigger>
                <TabsTrigger value="prediction">Prediction Models</TabsTrigger>
                <TabsTrigger value="nlp">Natural Language</TabsTrigger>
                <TabsTrigger value="learning">Continuous Learning</TabsTrigger>
              </TabsList>
              <TabsContent value="vision" className="space-y-4">
                <Card>
                  <CardHeader>
                    <Eye className="h-10 w-10 text-primary" />
                    <CardTitle>Computer Vision Pipeline</CardTitle>
                    <CardDescription>
                      Advanced image processing and element detection to understand visual hierarchy and composition
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold">Visual Element Detection</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Text recognition and hierarchy analysis
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Button and CTA identification
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Image and media classification
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Layout structure mapping
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold">Visual Properties Analysis</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Color contrast and saturation
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Size and positioning metrics
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Typography and readability scores
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Visual flow and scanning patterns
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="prediction" className="space-y-4">
                <Card>
                  <CardHeader>
                    <TrendingUp className="h-10 w-10 text-primary" />
                    <CardTitle>Behavioral Prediction Models</CardTitle>
                    <CardDescription>
                      Machine learning models trained on millions of user interactions to predict attention and behavior
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold">Attention Prediction</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Gaze pattern forecasting
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Fixation duration estimation
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Scan path optimization
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Attention heatmap generation
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold">Conversion Prediction</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Click probability scoring
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Engagement likelihood analysis
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Conversion funnel optimization
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            User journey mapping
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="nlp" className="space-y-4">
                <Card>
                  <CardHeader>
                    <Lightbulb className="h-10 w-10 text-primary" />
                    <CardTitle>Natural Language Processing</CardTitle>
                    <CardDescription>
                      Advanced NLP enables conversational insights and natural language queries about your data
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold">Content Analysis</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Sentiment and tone analysis
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Readability and complexity scoring
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Keyword and topic extraction
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Message clarity assessment
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold">Conversational AI</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Natural language query processing
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Context-aware responses
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Actionable insight generation
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Recommendation explanations
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="learning" className="space-y-4">
                <Card>
                  <CardHeader>
                    <Activity className="h-10 w-10 text-primary" />
                    <CardTitle>Continuous Learning System</CardTitle>
                    <CardDescription>
                      Self-improving algorithms that get smarter with every interaction and data point
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold">Adaptive Models</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Real-time model updates
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Performance feedback loops
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Industry-specific optimization
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Seasonal trend adaptation
                          </li>
                        </ul>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold">Data Integration</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Multi-source data fusion
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Cross-platform learning
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Privacy-preserving analytics
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Federated learning capabilities
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Research & Validation */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto max-w-7xl px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Research & Validation</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our technology is validated through rigorous testing and peer-reviewed research
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <Users className="h-10 w-10 text-primary" />
                  <CardTitle>Academic Partnerships</CardTitle>
                  <CardDescription>
                    Collaborating with leading universities and research institutions worldwide
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Stanford Vision Lab collaboration
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      MIT Computer Science partnership
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Oxford Behavioral Economics research
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Carnegie Mellon HCI studies
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-primary" />
                  <CardTitle>Validation Studies</CardTitle>
                  <CardDescription>Extensive testing across industries and use cases</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Prediction accuracy</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        94.2%
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Cross-validation studies</span>
                      <Badge variant="secondary">50+</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Industries tested</span>
                      <Badge variant="secondary">25+</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Published papers</span>
                      <Badge variant="secondary">12</Badge>
                    </div>
                  </div>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Experience the Technology</h2>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  See how our neuroscience-powered AI can transform your content performance
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
                >
                  <Play className="w-4 h-4" />
                  Watch Technology Demo
                </Button>
              </div>
              <p className="text-sm text-primary-foreground/60">
                14-day free trial • No credit card required • Full access to all features
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
