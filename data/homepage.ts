import { BarChart3, MousePointer, Zap, MessageCircle, Brain, TrendingUp, Sparkles, type LucideIcon } from "lucide-react"

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
  benefits: string[]
}

export interface HowItWorksStep {
  number: number
  title: string
  description: string
}

export interface PricingTier {
  id: string
  name: string
  description: string
  price: number
  credits?: number
  pricePerCredit?: string
  savings?: string
  popular?: boolean
  free?: boolean
  features: string[]
  buttonText: string
  buttonVariant?: "default" | "outline"
  href: string
}

export interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
}

export interface ChatFeature {
  icon: LucideIcon
  title: string
  description: string
}

export const heroData = {
  badge: {
    icon: Zap,
    text: "New: Real-time Analytics",
  },
  title: "Agentic AI Plugin to Make Your Advertising",
  titleHighlight: "Convert More Effectively",
  description:
    "Our intelligent AI plugin analyzes your advertising before launch, providing heatmaps and optimization recommendations to drive better conversions at key buyer decision moments across the purchase decision journey.",
  benefits: ["14-day free trial", "No credit card required"],
}

export const chatDemoData = {
  badge: {
    icon: Brain,
    text: "AI-Powered",
  },
  title: "Talk to Your Report",
  titleHighlight: "",
  description:
    "Get instant insights from your heatmap data through natural conversation. Ask questions, get recommendations, and discover optimization opportunities with our AI-powered chat interface.",
  features: [
    {
      icon: MessageCircle,
      title: "Natural Language Queries",
      description:
        'Ask questions like "Which ad placement is my ad best suited for?" or "How can I drive better conversion for my e-commerce ads?"',
    },
    {
      icon: TrendingUp,
      title: "Actionable Recommendations",
      description:
        "Get optimizations based on the needs of the user at the time of viewing your advert. Publisher news website versus e-commerce listings page requires different ad content.",
    },
    {
      icon: Brain,
      title: "Advanced Analytics",
      description:
        "Go beyond chat functionality with reports showing how your ad will perform across in-store, e-commerce and social channels.",
    },
  ] as ChatFeature[],
}

export const howItWorksData: HowItWorksStep[] = [
  {
    number: 1,
    title: "Install Plugin",
    description: "Add optml.ai to your browser or content platform with one click. No technical setup required.",
  },
  {
    number: 2,
    title: "Create Content",
    description: "Use your favorite tools as usual. optml.ai overlays seamlessly without interrupting your workflow.",
  },
  {
    number: 3,
    title: "Chat & Optimize",
    description:
      "Ask questions about your data and get AI-powered recommendations to optimize your content performance.",
  },
]

export const integrationsData: string[] = [
  "Figma",
  "Canva",
  "Notion",
  "Webflow",
  "WordPress",
  "Squarespace",
  "Wix",
  "Shopify",
  "Medium",
  "Substack",
  "Framer",
  "Miro",
]

export const pricingData = {
  badge: {
    icon: Sparkles,
    text: "Start Free, Scale with Credits",
  },
  title: "Simple",
  titleHighlight: "Credit-Based",
  titleEnd: "Pricing",
  description:
    "Start with our free tier and purchase credit packs as you grow. No monthly commitments, no hidden fees.",
  benefits: ["Free tier included", "Credits never expire", "One-time purchases"],
}

export const pricingTiers: PricingTier[] = [
  {
    id: "free",
    name: "Free Tier",
    description: "Perfect for trying out optml.ai",
    price: 0,
    free: true,
    features: [
      "1 free heatmap or equivalent credits",
      "Chat feedback limited to 1-2 insights",
      "Basic click tracking & dashboard access",
    ],
    buttonText: "Get Started Free",
    href: "/signup",
  },
  {
    id: "starter",
    name: "Starter Pack",
    description: "Perfect for small projects",
    price: 10,
    credits: 8,
    pricePerCredit: "$1.25 per credit",
    features: ["2-3 heatmaps", "8 AI insights", "Great for testing"],
    buttonText: "Buy Starter Pack",
    buttonVariant: "outline",
    href: "/signup?pack=starter",
  },
  {
    id: "standard",
    name: "Standard Pack",
    description: "Most popular choice",
    price: 15,
    credits: 30,
    pricePerCredit: "$0.50 per credit",
    savings: "Save 60%",
    popular: true,
    features: ["10 heatmaps", "30 AI insights", "Best value for money"],
    buttonText: "Buy Standard Pack",
    href: "/signup?pack=standard",
  },
  {
    id: "growth",
    name: "Growth Pack",
    description: "For growing businesses",
    price: 50,
    credits: 125,
    pricePerCredit: "$0.40 per credit",
    savings: "Save 68%",
    features: ["40+ heatmaps", "125 AI insights", "Priority support"],
    buttonText: "Buy Growth Pack",
    buttonVariant: "outline",
    href: "/signup?pack=growth",
  },
]

export const testimonialsData: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Content Creator",
    content:
      "The AI chat feature is incredible! I can ask specific questions about my content performance and get instant, actionable insights. It's like having a data analyst on demand.",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Marketing Manager",
    content:
      "Being able to chat with my heatmap data changed everything. Instead of guessing what works, I get clear recommendations that actually improve my conversion rates.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Blog Editor",
    content:
      "The smart heatmapping reports are game-changing. I can literally ask 'how do I improve my CTR?' and get specific, data-backed suggestions. Our engagement increased 40%!",
    rating: 5,
  },
]

export const ctaData = {
  title: "Ready to Optimize Your Content?",
  description:
    "Join thousands of content creators who are already using optml.ai to create better, more engaging content.",
  buttonText: "Start Your Free Trial",
  buttonLink: "/signup",
  demoButtonText: "Watch Demo",
  disclaimer: "14-day free trial • No credit card required • Cancel anytime",
}

export const navigationLinks = [
  { href: "/product", label: "Product" },
  { href: "/features", label: "Features" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/technology", label: "Technology" },
  { href: "/pricing", label: "Pricing" },
  { href: "/integrations", label: "Integrations" },
]

export const footerLinks = [
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/contact", label: "Contact" },
]
