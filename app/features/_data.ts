// app/features/_data.ts
import type { LucideIcon } from "lucide-react";
import {
    Zap,
    ArrowRight,
    MessageCircle,
    MousePointer,
    BarChart3,
    Check,
    Activity,
    PieChart,
    TrendingUp,
    Filter,
    Target,
    Clock,
    Brain,
    Layers,
    Settings,
    Globe,
    Smartphone,
    Shield,
    Users,
    ChevronRight
} from "lucide-react";

import type { FeatureBullet } from "@/components/feature-card";

// Landing features sectin

type LandingFeatureCard = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: FeatureBullet[];
};

export const landingFeaturesSection = {
  heading: "Powerful Features for Content Creators",
  subheading:
    "Everything you need to create high-performing content that engages your audience and drives results.",
  cards: [
    {
      id: "conversion-maps",
      icon: MessageCircle,
      title: "Conversion Maps",
      description:
        "Go beyond views to conversion advice.",
      bullets: [
        { label: "Cognitive impact scores", icon: Check, iconClass: "text-green-500" },
        { label: "Behavioral impact mapping", icon: Check, iconClass: "text-green-500" },
        { label: "Conversion gap analysis", icon: Check, iconClass: "text-green-500" },
      ],
    },
    {
      id: "visually-aided-conversations",
      icon: MousePointer,
      title: "Visually Aided Conversations",
      description:
        "Get actionable insights with visual AI-powered recommendations to see how you can improve performance.",
      bullets: [
        { label: "Missing conversion contributors", icon: Check, iconClass: "text-green-500" },
        { label: "Behavioral optimization advice", icon: Check, iconClass: "text-green-500" },
      ],
    },
    {
      id: "performance-insights",
      icon: BarChart3,
      title: "Performance Insights",
      description:
        "Deep analytics and metrics to understand your content's impact and effectiveness.",
      bullets: [
        { label: "Conversion tracking", icon: Check, iconClass: "text-green-500" },
        { label: "Engagement metrics", icon: Check, iconClass: "text-green-500" },
        { label: "Custom dashboards", icon: Check, iconClass: "text-green-500" },
      ],
    },
  ] as const satisfies readonly LandingFeatureCard[],
  cta: { label: "Discover All Features", href: "/features", icon: ArrowRight },
} as const;


// Hero
export type CTA = {
    label: string;
    href: string;
    variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
    icon?: LucideIcon;
};

export type FeaturesHero = {
    badge: { label: string; icon: LucideIcon };
    heading: { before: string; highlight: string; after?: string };
    subheading: string;
    gradient: string; // Tailwind classes for section background
    ctas: [CTA, CTA?]; // primary, optional secondary
};

export const featuresHero: FeaturesHero = {
    badge: { label: "Complete Feature Overview", icon: Zap },
    heading: {
        before: "Powerful Features for ",
        highlight: "Smart Content Optimization",
    },
    subheading:
        "Discover how optml.ai's comprehensive suite of AI-powered tools can transform your content strategy and boost engagement across all platforms.",
    gradient: "bg-gradient-to-br from-primary/5 via-background to-secondary/5",
    ctas: [
        { label: "Start Free Trial", href: "/signup", icon: ArrowRight },
        { label: "Schedule Demo", href: "/schedule-demo", variant: "outline" },
    ],
} as const;

// Core features
export type CoreFeature = {
    id: string;
    badge: { label: string; variant?: "default" | "secondary" | "outline" | "destructive"; };
    icon: LucideIcon;            // large feature icon in the colored square
    title: string;
    description: string;
    bullets: { label: string; icon?: LucideIcon; iconClass?: string }[];
    cta: { label: string; href?: string; variant?: "default" | "outline" | "secondary" | "destructive" };
};

export const coreFeaturesSection = {
    heading: "Core Features",
    subheading:
        "Everything you need to understand, analyze, and optimize your content performance.",
    cards: [
        {
            id: "ai-powered-heatmap",
            badge: { label: "AI-Powered", variant: "outline" },
            icon: MessageCircle,
            title: "AI Powered Heatmap",
            description:
                "Understand which areas of interest will attract visual attention in the first 3-5 seconds of view.",
            bullets: [
                { label: "Test in seconds", icon: Check, iconClass: "text-green-500" },
                { label: "Define core attraction areas", icon: Check, iconClass: "text-green-500" },
                { label: "Discover dead space", icon: Check, iconClass: "text-green-500" },
                { label: "Qualify design ideas", icon: Check, iconClass: "text-green-500" },
            ],
            cta: { label: "Try Chat Demo", href: "/demo/chat", variant: "outline" },
        },
        {
            id: "channel-based-reporting",
            badge: { label: "Real-time", variant: "outline" },
            icon: MousePointer,
            title: "Channel Based Reporting",
            description:
                "Align relevant content messaging to drive conversion at each stage of the purchase funnel",
            bullets: [
                { label: "In store, online, social", icon: Check, iconClass: "text-green-500" },
                { label: "Branding to conversion", icon: Check, iconClass: "text-green-500" },
                { label: "Content for the context", icon: Check, iconClass: "text-green-500" },
                { label: "Relevant purchase drivers", icon: Check, iconClass: "text-green-500" },
            ],
            cta: { label: "View Examples", href: "/features/heatmaps", variant: "outline" },
        },
        {
            id: "conversational-analytics",
            badge: { label: "Analytics", variant: "outline" },
            icon: BarChart3,
            title: "Conversational Analytics",
            description:
                "Chat with your data using natural languiage to get instant insights and recommendations.",
            bullets: [
                { label: "Chat with our performance agent", icon: Check, iconClass: "text-green-500" },
                { label: "Content assessment", icon: Check, iconClass: "text-green-500" },
                { label: "A/B testing", icon: Check, iconClass: "text-green-500" },
                { label: "Optimize for conversion", icon: Check, iconClass: "text-green-500" },
            ],
            cta: { label: "Explore Analytics", href: "/features/analytics", variant: "outline" },
        },
    ] satisfies CoreFeature[],
} as const;

// Feature categories
export type FeatureCard = {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
    bullets: string[];
};

export type FeatureTab = {
    value: "analytics" | "optimization" | "integration" | "enterprise";
    label: string;
    cards: FeatureCard[];
};

export const featureCategoriesSection = {
    heading: "Complete Feature Set",
    subheading:
        "Explore all the tools and capabilities that make optml.ai the ultimate content optimization platform.",
    tabs: [
        {
            value: "analytics",
            label: "Analytics",
            cards: [
                {
                    id: "realtime-monitoring",
                    icon: Activity,
                    title: "Real-time Monitoring",
                    description: "Track user behavior as it happens with live data streams.",
                    bullets: ["Live visitor tracking", "Real-time heatmap updates", "Instant performance alerts"],
                },
                {
                    id: "advanced-segmentation",
                    icon: PieChart,
                    title: "Advanced Segmentation",
                    description: "Analyze different user groups and behavior patterns.",
                    bullets: ["Geographic segmentation", "Device-based analysis", "Traffic source breakdown"],
                },
                {
                    id: "trend-analysis",
                    icon: TrendingUp,
                    title: "Trend Analysis",
                    description: "Identify patterns and trends in your content performance.",
                    bullets: ["Historical data comparison", "Seasonal trend detection", "Performance forecasting"],
                },
                {
                    id: "custom-filters",
                    icon: Filter,
                    title: "Custom Filters",
                    description: "Filter and drill down into specific data points.",
                    bullets: ["Date range filtering", "User behavior filters", "Content type segmentation"],
                },
                {
                    id: "goal-tracking",
                    icon: Target,
                    title: "Goal Tracking",
                    description: "Set and monitor specific conversion goals and KPIs.",
                    bullets: ["Custom goal definition", "Conversion funnel analysis", "ROI measurement"],
                },
                {
                    id: "time-insights",
                    icon: Clock,
                    title: "Time-based Insights",
                    description: "Understand how user behavior changes over time.",
                    bullets: ["Peak activity hours", "Session duration analysis", "Time-on-page metrics"],
                },
            ],
        },
        {
            value: "optimization",
            label: "Optimization",
            cards: [
                {
                    id: "ai-recommendations",
                    icon: Brain,
                    title: "AI Recommendations",
                    description: "Get intelligent suggestions for improving your content.",
                    bullets: ["Layout optimization tips", "Content placement advice", "CTA improvement suggestions"],
                },
                {
                    id: "ab-suite",
                    icon: Layers,
                    title: "A/B Testing Suite",
                    description: "Test different versions of your content to find what works best.",
                    bullets: ["Visual A/B test editor", "Statistical significance", "Multi-variant testing"],
                },
                {
                    id: "auto-optimization",
                    icon: Settings,
                    title: "Auto-Optimization",
                    description: "Let AI automatically optimize your content based on performance data.",
                    bullets: ["Smart content adjustments", "Dynamic element positioning", "Automated A/B testing"],
                },
            ],
        },
        {
            value: "integration",
            label: "Integration",
            cards: [
                {
                    id: "universal-compat",
                    icon: Globe,
                    title: "Universal Compatibility",
                    description: "Works with all major platforms and content management systems.",
                    bullets: ["WordPress, Shopify, Webflow", "Custom HTML/CSS sites", "Single-page applications"],
                },
                {
                    id: "easy-install",
                    icon: Zap,
                    title: "Easy Installation",
                    description: "Get started in minutes with our simple setup process.",
                    bullets: ["One-click browser extension", "Simple code snippet", "Plugin marketplace"],
                },
                {
                    id: "mobile-optimization",
                    icon: Smartphone,
                    title: "Mobile Optimization",
                    description: "Full support for mobile and responsive design analysis.",
                    bullets: ["Mobile heatmaps", "Touch interaction tracking", "Responsive design insights"],
                },
            ],
        },
        {
            value: "enterprise",
            label: "Enterprise",
            cards: [
                {
                    id: "enterprise-security",
                    icon: Shield,
                    title: "Enterprise Security",
                    description: "Bank-level security and compliance for enterprise customers.",
                    bullets: ["SOC 2 Type II compliance", "GDPR & CCPA compliant", "Data encryption at rest"],
                },
                {
                    id: "team-collab",
                    icon: Users,
                    title: "Team Collaboration",
                    description: "Advanced team features for large organizations.",
                    bullets: ["Role-based permissions", "Team workspaces", "Shared dashboards"],
                },
                {
                    id: "custom-solutions",
                    icon: Settings,
                    title: "Custom Solutions",
                    description: "Tailored features and integrations for enterprise needs.",
                    bullets: ["Custom API endpoints", "White-label solutions", "Dedicated support"],
                },
            ],
        },
    ] as const satisfies FeatureTab[],
} as const;

// Feature comparison
export type PlanKey = "starter" | "pro" | "enterprise";

export type ComparisonRow = {
  feature: string;
  starter: boolean;
  pro: boolean;
  enterprise: boolean;
};

export type FeatureComparisonSection = {
  heading: string;
  subheading: string;
  plansOrder: readonly PlanKey[]; // table column order for plans
  checkIcon: LucideIcon;
  unavailableGlyph: string;
  rows: readonly ComparisonRow[];
  cta: { label: string; href: string; icon?: LucideIcon };
};

export const featureComparison: FeatureComparisonSection = {
  heading: "Feature Comparison",
  subheading: "See what's included in each plan and find the perfect fit for your needs.",
  plansOrder: ["starter", "pro", "enterprise"] as const,
  checkIcon: Check,
  unavailableGlyph: "—",
  rows: [
    { feature: "AI Chat Interface", starter: true,  pro: true,  enterprise: true  },
    { feature: "Basic Heatmaps",   starter: true,  pro: true,  enterprise: true  },
    { feature: "Advanced Analytics",starter: false, pro: true,  enterprise: true  },
    { feature: "A/B Testing",      starter: false, pro: true,  enterprise: true  },
    { feature: "Custom Dashboards", starter: false, pro: true,  enterprise: true  },
    { feature: "Team Collaboration",starter: false, pro: false, enterprise: true  },
    { feature: "API Access",        starter: false, pro: false, enterprise: true  },
    { feature: "White-label Options",starter:false, pro: false, enterprise: true  },
    { feature: "Dedicated Support",  starter:false, pro: false, enterprise: true  },
  ] as const,
  cta: { label: "View Pricing Plans", href: "/pricing", icon: ChevronRight },
} as const;




export const ctaData = {
    title: "Ready to Get Started?",
    description: "Experience all these powerful features with our 14-day free trial. No credit card required.",
    buttonText: "Start Free Trial",
    buttonLink: "/signup",
    demoButtonText: "Schedule Demo",
    disclaimer: "14-day free trial • No credit card required • Cancel anytime",
}

