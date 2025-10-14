import type { JSX } from "react"

export interface PricingTier {
  id: string
  name: string
  description: string
  price: string
  credits: string
  pricePerCredit: string
  savings?: string
  popular?: boolean
  enterprise?: boolean
  features: string[]
  buttonText: string
  buttonVariant: "default" | "outline" | "secondary"
  href: string
  badge?: {
    text: string
    variant: "default" | "secondary" | "destructive"
    className?: string
  }
}

export interface CreditUsage {
  id: string
  name: string
  description: string
  credits: number
  unit: string
  creditDisplay: string
  creditColor: string
}

export interface ComparisonFeature {
  name: string
  freeTier: string | JSX.Element
  starterPack: string | JSX.Element
  standardPack: string | JSX.Element
  growthPack: string | JSX.Element
}

export interface FAQ {
  id: string
  question: string
  answer: string
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter Pack",
    description: "Perfect for small projects",
    price: "$10",
    credits: "8 Credits",
    pricePerCredit: "$1.25 per credit",
    features: ["Great for testing", "Instant activation", "2-3 heatmaps"],
    buttonText: "Buy Starter Pack",
    buttonVariant: "outline",
    href: "/signup?pack=starter",
  },
  {
    id: "standard",
    name: "Standard Pack",
    description: "Most popular choice",
    price: "$15",
    credits: "30 Credits",
    pricePerCredit: "$0.50 per credit",
    savings: "Save 60%",
    popular: true,
    features: ["Best value for money", "Instant activation", "10 heatmaps"],
    buttonText: "Buy Standard Pack",
    buttonVariant: "default",
    href: "/signup?pack=standard",
    badge: {
      text: "Popular",
      variant: "default",
    },
  },
  {
    id: "growth",
    name: "Growth Pack",
    description: "For growing businesses",
    price: "$50",
    credits: "125 Credits",
    pricePerCredit: "$0.40 per credit",
    savings: "Save 68%",
    features: ["Perfect for scaling", "Priority support", "40+ heatmaps"],
    buttonText: "Buy Growth Pack",
    buttonVariant: "outline",
    href: "/signup?pack=growth",
  },
  {
    id: "agency",
    name: "Agency Pack",
    description: "For agencies & large teams",
    price: "Custom",
    credits: "Pricing",
    pricePerCredit: "Volume discounts",
    enterprise: true,
    features: ["Team collaboration", "Dedicated support", "Unlimited features"],
    buttonText: "Contact Sales",
    buttonVariant: "default",
    href: "/contact?plan=agency",
    badge: {
      text: "Enterprise",
      variant: "secondary",
      className: "bg-orange-500 text-white",
    },
  },
]

export const creditUsageData: CreditUsage[] = [
  {
    id: "content-analysis",
    name: "Content Analysis",
    description: "AI-powered analysis of your content for optimization suggestions.",
    credits: 1,
    unit: "per page analyzed",
    creditDisplay: "1 Credit",
    creditColor: "text-primary",
  },
  {
    id: "heatmap-generation",
    name: "Heatmap Generation",
    description: "Generate detailed heatmaps showing user interaction patterns.",
    credits: 3,
    unit: "per heatmap report",
    creditDisplay: "3 Credits",
    creditColor: "text-primary",
  },
  {
    id: "ab-test-setup",
    name: "A/B Test Setup",
    description: "Create and run A/B tests with statistical analysis.",
    credits: 5,
    unit: "per test campaign",
    creditDisplay: "5 Credits",
    creditColor: "text-primary",
  },
  {
    id: "ai-chat-insights",
    name: "AI Chat Insights",
    description: "Get detailed AI insights and recommendations for your content.",
    credits: 1,
    unit: "per detailed insight",
    creditDisplay: "1 Credit",
    creditColor: "text-primary",
  },
  {
    id: "custom-reports",
    name: "Custom Reports",
    description: "Generate comprehensive performance reports with insights.",
    credits: 2,
    unit: "per detailed report",
    creditDisplay: "2 Credits",
    creditColor: "text-primary",
  },
  {
    id: "basic-features",
    name: "Basic Features",
    description: "Basic click tracking, simple analytics, and dashboard access.",
    credits: 0,
    unit: "no credits required",
    creditDisplay: "Free",
    creditColor: "text-green-500",
  },
]

export const comparisonFeatures: ComparisonFeature[] = [
  {
    name: "Price",
    freeTier: "Free",
    starterPack: "$10",
    standardPack: "$15",
    growthPack: "$50",
  },
  {
    name: "Credits Included",
    freeTier: "~3 credits worth",
    starterPack: "8 credits",
    standardPack: "30 credits",
    growthPack: "125 credits",
  },
  {
    name: "Heatmaps",
    freeTier: "1 free",
    starterPack: "2-3 heatmaps",
    standardPack: "10 heatmaps",
    growthPack: "40+ heatmaps",
  },
  {
    name: "AI Chat Insights",
    freeTier: "1-2 insights",
    starterPack: "8 insights",
    standardPack: "30 insights",
    growthPack: "125 insights",
  },
  {
    name: "A/B Tests",
    freeTier: "❌",
    starterPack: "1 test",
    standardPack: "6 tests",
    growthPack: "25 tests",
  },
  {
    name: "Custom Reports",
    freeTier: "❌",
    starterPack: "4 reports",
    standardPack: "15 reports",
    growthPack: "60+ reports",
  },
  {
    name: "Support",
    freeTier: "Email",
    starterPack: "Email",
    standardPack: "Priority Email",
    growthPack: "Priority + Chat",
  },
]

export const faqData: FAQ[] = [
  {
    id: "credits-expire",
    question: "Do credits expire?",
    answer:
      "No! Credits never expire. Once you purchase a credit pack, you can use those credits whenever you need them, even years later. Your free tier benefits reset each month.",
  },
  {
    id: "free-tier-included",
    question: "What's included in the free tier?",
    answer:
      "The free tier includes content upload, basic tracking, 1 free heatmap (or equivalent credits), and chat feedback limited to 1-2 insights. You can always upgrade with credit packs for more advanced features.",
  },
  {
    id: "refund-policy",
    question: "Can I get a refund on unused credits?",
    answer:
      "We offer refunds within 30 days of purchase for unused credit packs. Since credits never expire, we encourage you to start with a smaller pack to test our service first.",
  },
  {
    id: "track-usage",
    question: "How do I track my credit usage?",
    answer:
      "Your account dashboard shows your current credit balance, usage history, and detailed breakdown of how credits were spent. You'll also receive notifications when you're running low.",
  },
  {
    id: "pack-differences",
    question: "What's the difference between credit packs?",
    answer:
      "The main difference is the number of credits and cost per credit. Larger packs offer better value - the Growth Pack saves you 68% compared to individual credit pricing. All packs unlock the same features.",
  },
  {
    id: "agency-pack",
    question: "What does the Agency Pack include?",
    answer:
      "The Agency Pack is designed for large teams and agencies with custom pricing, volume discounts, team collaboration features, dedicated support, and unlimited access to all features. Contact our sales team for a custom quote.",
  },
]

export const freeTierFeatures = [
  {
    icon: "Upload",
    text: "Upload content and basic tracking",
    highlight: "Upload content",
  },
  {
    icon: "Check",
    text: "1 free heatmap or equivalent credits",
    highlight: "1 free heatmap",
  },
  {
    icon: "MessageSquare",
    text: "Chat feedback limited to 1-2 insights",
    highlight: "Chat feedback",
  },
  {
    icon: "Check",
    text: "Basic click tracking",
  },
  {
    icon: "Check",
    text: "Dashboard access",
  },
  {
    icon: "Check",
    text: "Email support",
  },
]

export const freeTierLimitations = ["Advanced analytics", "A/B testing", "Unlimited heatmaps"]

export const ctaData = {
    title: "Ready to Get Started?",
    description:
      "Start with our free tier and purchase credits only when you need them. No commitments, no surprises.",
    buttonText: "Start Free Tier",
    buttonLink: "/signup",
    demoButtonText: "Schedule Demo",
    disclaimer: "Free tier forever • Credits never expire • One-time purchases",
  }
