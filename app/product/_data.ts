import { Check, Brain, Download, Play, Calendar, MousePointer, Eye, Globe, Zap, MessageCircle, BarChart3, Shield, Award, UserRoundX, Activity, LightbulbIcon, X } from "lucide-react";

// Hero  Data
export const hero = {
  gradient: "bg-gradient-to-br from-primary/10 via-background to-secondary/10",
  badge: {
    variant: "secondary" as const,
    icon: Download,
    label: "AI-Powered Content Optimization",
  },
  heading: "Content Optimization Needs Context",
  subheading:
    "Optml.ai is the first technology that optimizes ads through the lens of human behavior. Instead of blindly tweaking creative elements, it analyzes the viewer’s context, attention, and emotion to deliver ads that perform, not just appear.",
  ctas: [
    { label: "Install Extension", href: "/signup", icon: Download }, // primary
    { label: "Watch Demo", icon: Play, variant: "outline" as const },
    { label: "Schedule Demo", href: "/schedule-demo", icon: Calendar, variant: "outline" as const },
  ],
  checklist: [
    { label: "Free 14-day trial", icon: Check, iconClass: "text-green-500" },
    { label: "Works on any website", icon: Check, iconClass: "text-green-500" },
    { label: "No coding required", icon: Check, iconClass: "text-green-500" },
  ],
  media: {
    src: "/ai-analytics-dashboard-with-heatmap-overlay.jpg",
    alt: "optml.ai Browser Extension Interface",
    width: 600,
    height: 400,
  },
}

// Product Story Section Data
export const productStory = {
  badge: {
    variant: "outline" as const,
    icon: LightbulbIcon,
    label: "The Problem We Solve",
  },
  heading: {
    before: "Content Creation is ",
    highlight: "Behavioral",
    after: null,
  },
  subheading:
    "Traditional analytics tell you what happened, but not why. optml.ai combines heatmaps with conversational AI to give you actionable answers.",
  points: [
    {
      id: "traditional",
      badge: {
        icon: X,
        bgClass: "bg-red-100",
        textClass: "text-red-600",
      },
      tone: "negative" as const,
      title: "Traditional analytics",
      description: "Complex dashboards, delayed insights, and no actionable recommendations",
    },
    {
      id: "optml",
      badge: {
        icon: Check,
        bgClass: "bg-green-100",
        textClass: "text-green-600",
      },
      tone: "positive" as const,
      title: "optml.ai approach",
      description: "Conversational AI that explains your data and provides specific optimization steps",
    },
  ],
  compareCard: {
    title: {
      icon: Brain,
      label: "Traditional vs. AI-Powered",
    },
    rows: [
      { label: "Setup Time", value: "Hours → Minutes", bgClass: "bg-red-50", textClass: "text-red-600" },
      { label: "Insights", value: "Raw Data → Actionable", bgClass: "bg-green-50", textClass: "text-green-600" },
      { label: "Learning Curve", value: "Steep → Conversational", bgClass: "bg-blue-50", textClass: "text-blue-600" },
      { label: "Results", value: "Delayed → Immediate", bgClass: "bg-purple-50", textClass: "text-purple-600" },
    ],
  },
}

// How It Works Section Data
export const howItWorks = {
  heading: "How optml.ai Works",
  subheading: "Powered by cutting-edge neuroscience and AI technology to understand human attention and behavior",
  cards: [
    {
      icon: Brain,
      title: "Neuroscience Foundation",
      description: "Built on decades of research in visual attention, cognitive load, and decision-making psychology",
      features: ["Visual salience mapping", "Attention prediction models", "Cognitive load analysis"],
    },
    {
      icon: Zap,
      title: "AI Processing Engine",
      description: "Advanced machine learning algorithms process visual elements and predict user behavior patterns",
      features: ["Computer vision analysis", "Behavioral prediction", "Real-time optimization"],
    },
    {
      icon: BarChart3,
      title: "Data Integration",
      description: "Combines predictive insights with real user data to provide actionable recommendations",
      features: ["Multi-source data fusion", "Continuous learning", "Personalized insights"],
    },
  ],
  cta: {
    label: "Learn More About Our Technology",
    href: "/technology",
    icon: Activity,
  },
}

// How To Use Extension Section Data
export const howToUseExtension = {
  heading: "How to Use the Browser Extension",
  subheading: "Get started with optml.ai in minutes. Our browser extension makes content optimization effortless.",
  steps: [
    {
      number: 1,
      badge: "Install",
      title: "Install the Extension",
      description: "Add optml.ai to your browser in seconds",
      features: [
        { icon: Globe, label: "Available for Chrome, Firefox, Safari" },
        { icon: Shield, label: "Privacy-first, secure installation" },
        { icon: UserRoundX, label: "No account required to start" },
      ],
      buttonLabel: "Install Extension",
    },
    {
      number: 2,
      badge: "Activate",
      title: "Activate on Any Page",
      description: "Click the extension icon to start analyzing",
      features: [
        { icon: MousePointer, label: "One-click activation on any website" },
        { icon: Eye, label: "Instant heatmap generation" },
        { icon: BarChart3, label: "Real-time analytics overlay" },
      ],
      note: "Works on any website - your blog, landing pages, e-commerce sites, and more.",
    },
    {
      number: 3,
      badge: "Optimize",
      title: "Get AI Insights / Chat with Your data",
      description:
        "Chat with AI to understand your data / Ask questions about your content performance in natural language",
      features: [
        { icon: MessageCircle, label: "Ask questions in natural language" },
        { icon: Brain, label: "Get actionable recommendations" },
        { icon: Zap, label: "Implement changes with one click" },
      ],
      note: '"Why are users leaving?" → "Users scroll past your CTA. Move it 200px higher for 23% more conversions."',
    },
  ],
  footer: {
    icon: Award,
    label: "Average setup time: 2 minutes",
  },
}

// Use Cases Section Data
export const useCases = {
  heading: "Built for Every Content Creator",
  subheading:
    "Whether you're a blogger, marketer, or enterprise team, optml.ai adapts to your unique needs and workflow.",
  cases: [
    {
      emoji: "📝",
      badge: "Content Creators",
      title: "Bloggers & Writers",
      description: "Optimize your articles and posts for maximum engagement",
      features: ["Blog post optimization", "Newsletter performance", "Social media content"],
    },
    {
      emoji: "📈",
      badge: "Marketing Teams",
      title: "Digital Marketers",
      description: "Boost campaign performance with data-driven insights",
      features: ["Landing page optimization", "Email campaign analysis", "A/B testing automation"],
    },
    {
      emoji: "🏢",
      badge: "Enterprise",
      title: "Large Organizations",
      description: "Scale content optimization across teams and departments",
      features: ["Multi-site management", "Team collaboration", "Custom integrations"],
    },
  ],
}

// Competitive Advantage Section Data
export const competitiveAdvantage = {
  heading: "Why Choose optml.ai?",
  subheading: "See how we compare to traditional analytics and optimization tools.",
  comparisonTable: [
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
  ],
}




// CTA
export const ctaData = {
  title: "Ready to Start Optimizing?",
  description:
    "Join thousands of content creators who are already using optml.ai to create more engaging, effective content.",
  buttonText: "Install Extension Free",
  buttonLink: "/signup",
  demoButtonText: "Schedule Demo",
  disclaimer: "Free forever • No credit card required • Premium features available",
}
