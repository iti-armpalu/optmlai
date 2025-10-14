"use client"

import { useState } from "react"
import {
  Brain,
  MessageCircle,
  TrendingUp,
  MousePointer,
  Eye,
  Users,
  Target,
  ArrowUp,
  ArrowDown,
  Zap,
  AlertTriangle,
  CheckCircle,
  Activity,
  Send,
  Instagram,
  Figma,
  Heart,
  Share,
  Bookmark,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"

export function SampleReport() {
  const [chatMessages, setChatMessages] = useState([
    {
      type: "user",
      message: "Why does my Instagram ad look unbalanced?",
    },
    {
      type: "ai",
      message:
        "Based on the visual heatmap analysis, your design has poor weight distribution. The product image captures 73% of visual attention, but your CTA button only gets 12% due to poor contrast and size. The brand logo is creating visual clutter by overlapping the main focal point.",
    },
    {
      type: "user",
      message: "How can I improve the visual hierarchy?",
    },
    {
      type: "ai",
      message:
        "Our machine learning model identified 3 design rule violations: 1) Your CTA lacks sufficient contrast ratio (currently 2.1:1, needs 4.5:1), 2) Text hierarchy is inconsistent with 4 different font sizes competing for attention, 3) The rule of thirds is violated - key elements should align with the grid intersections.",
    },
  ])
  const [newMessage, setNewMessage] = useState("")

  const handleSendMessage = () => {
    if (!newMessage.trim()) return

    setChatMessages([...chatMessages, { type: "user", message: newMessage }])
    setNewMessage("")

    // Simulate AI response
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          type: "ai",
          message:
            "Great question! For Instagram ads, visual hierarchy is crucial. Based on your design, I can see that element has strong visual weight but low engagement. Consider using the 'rule of thirds' to reposition key elements for better performance.",
        },
      ])
    }, 1000)
  }

  return (
    <div className="space-y-6">
      {/* Report Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Instagram className="w-5 h-5 text-pink-500" />
            <Figma className="w-5 h-5 text-purple-500" />
            <h3 className="text-lg font-semibold">Instagram Ad Design Analysis</h3>
          </div>
          <p className="text-sm text-muted-foreground">Visual Analysis • Generated on Dec 9, 2024 • ML Model v2.1</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
            <Brain className="w-3 h-3 mr-1" />
            ML Analysis
          </Badge>
          <Badge variant="outline" className="text-blue-600 border-blue-200">
            <Activity className="w-3 h-3 mr-1" />
            Design Rules
          </Badge>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Visual Attention Score</div>
                <div className="text-2xl font-bold">73/100</div>
              </div>
              <Eye className="h-8 w-8 text-blue-500" />
            </div>
            <div className="flex items-center gap-1 mt-2">
              <ArrowUp className="h-3 w-3 text-green-500" />
              <span className="text-xs text-green-500">Above average</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Design Rule Score</div>
                <div className="text-2xl font-bold">6.8/10</div>
              </div>
              <Target className="h-8 w-8 text-orange-500" />
            </div>
            <div className="flex items-center gap-1 mt-2">
              <ArrowDown className="h-3 w-3 text-red-500" />
              <span className="text-xs text-red-500">Needs improvement</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Color Harmony</div>
                <div className="text-2xl font-bold">8.4/10</div>
              </div>
              <Heart className="h-8 w-8 text-pink-500" />
            </div>
            <div className="flex items-center gap-1 mt-2">
              <ArrowUp className="h-3 w-3 text-green-500" />
              <span className="text-xs text-green-500">Excellent</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Layout Balance</div>
                <div className="text-2xl font-bold">5.2/10</div>
              </div>
              <Users className="h-8 w-8 text-red-500" />
            </div>
            <div className="flex items-center gap-1 mt-2">
              <ArrowDown className="h-3 w-3 text-red-500" />
              <span className="text-xs text-red-500">Poor balance</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="heatmap" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="heatmap">Visual Heatmap</TabsTrigger>
          <TabsTrigger value="insights">Design Insights</TabsTrigger>
          <TabsTrigger value="chat">AI Creative Coach</TabsTrigger>
          <TabsTrigger value="recommendations">Optimize</TabsTrigger>
        </TabsList>

        <TabsContent value="heatmap" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MousePointer className="w-5 h-5 text-primary" />
                Instagram Ad Attention Heatmap
              </CardTitle>
              <CardDescription>
                Visual analysis of where users focus when viewing your Instagram ad creative
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-6">
                {/* Figma-style Design Canvas */}
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="bg-white rounded-lg shadow-lg max-w-sm mx-auto relative overflow-hidden">
                      {/* Instagram Post Header */}
                      <div className="flex items-center justify-between p-3 border-b relative">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
                          <div>
                            <div className="font-semibold text-sm">your_brand</div>
                            <div className="text-xs text-gray-500">Sponsored</div>
                          </div>
                        </div>
                        <div className="text-gray-600">⋯</div>
                        {/* Low attention on header */}
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-300 rounded-full opacity-50"></div>
                      </div>

                      {/* Main Image Area */}
                      <div className="relative bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 aspect-square">
                        {/* Product Image (High Attention) */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-32 h-32 bg-white rounded-lg shadow-lg flex items-center justify-center relative">
                            <div className="text-4xl">👟</div>
                            {/* Very high attention on product */}
                            <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-600 rounded-full opacity-90 animate-pulse"></div>
                            <div className="absolute top-1 right-1 w-6 h-6 bg-red-500 rounded-full opacity-70"></div>
                            <div className="absolute top-3 right-3 w-4 h-4 bg-red-400 rounded-full opacity-50"></div>
                          </div>
                        </div>

                        {/* Text Overlay (Medium Attention) */}
                        <div className="absolute top-4 left-4 right-4">
                          <h2 className="text-white font-bold text-lg mb-1 relative">
                            NEW COLLECTION
                            {/* Medium attention on headline */}
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-70"></div>
                          </h2>
                          <div className="text-white text-sm opacity-90 relative">
                            Limited Edition Sneakers
                            {/* Low attention on subtext */}
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-300 rounded-full opacity-50"></div>
                          </div>
                        </div>

                        {/* Brand Logo (Blocking Product) */}
                        <div className="absolute bottom-4 left-4">
                          <div className="bg-white px-3 py-1 rounded-full text-xs font-bold relative">
                            BRAND
                            {/* Low attention, blocking product */}
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full opacity-60"></div>
                          </div>
                        </div>

                        {/* CTA Button (Low Visibility) */}
                        <div className="absolute bottom-4 right-4">
                          <button className="bg-black text-white px-4 py-2 rounded-full text-xs font-medium relative">
                            Shop Now
                            {/* Very low attention on CTA */}
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-200 rounded-full opacity-40"></div>
                          </button>
                        </div>
                      </div>

                      {/* Instagram Engagement Bar */}
                      <div className="p-3 space-y-2">
                        <div className="flex items-center justify-between relative">
                          <div className="flex items-center gap-4">
                            <Heart className="w-6 h-6 text-gray-700" />
                            <MessageCircle className="w-6 h-6 text-gray-700" />
                            <Share className="w-6 h-6 text-gray-700" />
                          </div>
                          <Bookmark className="w-6 h-6 text-gray-700" />
                          {/* Medium attention on engagement buttons */}
                          <div className="absolute -top-2 left-8 w-3 h-3 bg-yellow-300 rounded-full opacity-60"></div>
                        </div>
                        <div className="text-sm font-semibold">1,247 likes</div>
                        <div className="text-sm">
                          <span className="font-semibold">your_brand</span> Step into style with our latest collection!
                          Limited time offer 🔥 #sneakers #fashion
                        </div>
                        <div className="text-xs text-gray-500">2 hours ago</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Analysis Panel */}
                <div className="w-80 space-y-4">
                  {/* Attention Heatmap Legend */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Attention Intensity</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                        <span className="text-sm">High Focus (3+ seconds)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                        <span className="text-sm">Medium Focus (1-3 seconds)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-300 rounded-full"></div>
                        <span className="text-sm">Low Focus (&lt;1 second)</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Element Performance */}
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm">Element Performance</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Product Image</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full">
                            <div className="w-[73%] h-full bg-red-500 rounded-full"></div>
                          </div>
                          <span className="text-xs font-medium">73%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Headline Text</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full">
                            <div className="w-[34%] h-full bg-yellow-400 rounded-full"></div>
                          </div>
                          <span className="text-xs font-medium">34%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">CTA Button</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full">
                            <div className="w-[12%] h-full bg-blue-300 rounded-full"></div>
                          </div>
                          <span className="text-xs font-medium">12%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Brand Logo</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full">
                            <div className="w-[18%] h-full bg-orange-400 rounded-full"></div>
                          </div>
                          <span className="text-xs font-medium">18%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Engagement Icons</span>
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full">
                            <div className="w-[28%] h-full bg-yellow-300 rounded-full"></div>
                          </div>
                          <span className="text-xs font-medium">28%</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Figma Integration Status */}
                  <Card>
                    <CardContent className="pt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Figma className="w-4 h-4 text-purple-500" />
                        <span className="text-sm font-medium">Figma Integration</span>
                      </div>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <div>✅ Design layers detected</div>
                        <div>✅ Real-time sync active</div>
                        <div>✅ A/B variants ready</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  High-Performing Elements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <div className="font-medium">Product Image</div>
                    <div className="text-sm text-muted-foreground">73% attention capture</div>
                  </div>
                  <Badge variant="secondary" className="bg-green-100 text-green-700">
                    Excellent
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <div className="font-medium">Color Gradient</div>
                    <div className="text-sm text-muted-foreground">High visual appeal</div>
                  </div>
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    Good
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <div>
                    <div className="font-medium">Engagement Icons</div>
                    <div className="text-sm text-muted-foreground">28% interaction rate</div>
                  </div>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                    Average
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-500" />
                  Design Issues
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div>
                    <div className="font-medium">CTA Button Visibility</div>
                    <div className="text-sm text-muted-foreground">Only 12% attention</div>
                  </div>
                  <Badge variant="destructive" className="bg-red-100 text-red-700">
                    Critical
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div>
                    <div className="font-medium">Logo Placement</div>
                    <div className="text-sm text-muted-foreground">Blocking product view</div>
                  </div>
                  <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                    Needs Fix
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                  <div>
                    <div className="font-medium">Text Hierarchy</div>
                    <div className="text-sm text-muted-foreground">Competing elements</div>
                  </div>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                    Minor Issue
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Instagram className="w-5 h-5 text-pink-500" />
                Design Analysis Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center p-4 bg-pink-50 rounded-lg">
                  <div className="text-2xl font-bold text-pink-600">4.2s</div>
                  <div className="text-sm text-muted-foreground">Predicted scan time</div>
                  <div className="text-xs text-pink-600 mt-1">Based on visual complexity</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">67%</div>
                  <div className="text-sm text-muted-foreground">Mobile readability</div>
                  <div className="text-xs text-blue-600 mt-1">Text size analysis</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">8.4</div>
                  <div className="text-sm text-muted-foreground">Color accessibility</div>
                  <div className="text-xs text-green-600 mt-1">WCAG compliance score</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chat" className="space-y-4">
          <Card className="h-[500px] flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                AI Creative Coach
              </CardTitle>
              <CardDescription>Get personalized advice for your Instagram ad design and Figma design</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="flex-1 space-y-4 overflow-y-auto mb-4">
                {chatMessages.map((msg, index) => (
                  <div key={index} className={`flex gap-3 ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        msg.type === "user" ? "bg-primary text-primary-foreground ml-auto" : "bg-muted"
                      }`}
                    >
                      {msg.type === "ai" && (
                        <div className="flex items-center gap-2 mb-2">
                          <Brain className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium text-primary">Creative Coach</span>
                        </div>
                      )}
                      <p className="text-sm">{msg.message}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Ask about your Instagram ad design..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button onClick={handleSendMessage} size="sm">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">23</div>
                  <div className="text-sm text-muted-foreground">Design Questions</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">8</div>
                  <div className="text-sm text-muted-foreground">Design Rules Applied</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">+2.3</div>
                  <div className="text-sm text-muted-foreground">Visual Score Improvement</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">5</div>
                  <div className="text-sm text-muted-foreground">Design Variants</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-4">
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Design Optimization Recommendations
                </CardTitle>
                <CardDescription>AI-powered suggestions to improve your Instagram ad performance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">Increase CTA button size and contrast</h4>
                    <div className="text-sm text-muted-foreground mb-2">
                      Your CTA button is getting only 12% attention. Make it 40% larger, use a bright contrasting color
                      (try neon green or orange), and move it to the upper-right corner for better visibility.
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="destructive">High Impact</Badge>
                      <Badge variant="outline">Easy in Figma</Badge>
                      <Badge variant="secondary">+35% CTR expected</Badge>
                    </div>
                  </div>
                  <Button size="sm" className="flex-shrink-0">
                    Apply in Figma
                  </Button>
                </div>

                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-bold text-sm">2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">Relocate brand logo</h4>
                    <div className="text-sm text-muted-foreground mb-2">
                      Your logo is blocking 15% of the product image. Move it to the top-right corner or make it smaller
                      and semi-transparent to maintain brand presence without interfering.
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                        Medium Impact
                      </Badge>
                      <Badge variant="outline">Quick fix</Badge>
                      <Badge variant="secondary">+18% product visibility</Badge>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Apply Fix
                  </Button>
                </div>

                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-yellow-600 font-bold text-sm">3</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">Simplify text hierarchy</h4>
                    <div className="text-sm text-muted-foreground mb-2">
                      Reduce text by 30% and increase font size for the main headline. Instagram users scan quickly -
                      focus on one key message: 'LIMITED EDITION' with larger, bolder text.
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                        Medium Impact
                      </Badge>
                      <Badge variant="outline">Text editing</Badge>
                      <Badge variant="secondary">Better readability</Badge>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Edit Text
                  </Button>
                </div>

                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-sm">4</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">Create mobile-optimized variant</h4>
                    <div className="text-sm text-muted-foreground mb-2">
                      67% of your viewers are on mobile. Create a variant with larger text, repositioned elements, and
                      ensure the CTA is thumb-friendly (minimum 44px touch target).
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        High Impact
                      </Badge>
                      <Badge variant="outline">New variant</Badge>
                      <Badge variant="secondary">Mobile-first</Badge>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Create Variant
                  </Button>
                </div>

                <div className="flex items-start gap-4 p-4 border rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">Product image optimization</h4>
                    <div className="text-sm text-muted-foreground mb-2">
                      Your product image is performing excellently with 73% attention capture. This visual approach is
                      working well - consider using similar product photography for other ads.
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        Optimized
                      </Badge>
                      <Badge variant="outline">Keep current</Badge>
                    </div>
                  </div>
                  <Button size="sm" variant="ghost" disabled>
                    ✓ Optimized
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
