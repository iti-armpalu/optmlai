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
    Brain,
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
                    id: "ai-powered-heatmap",
                    icon: Activity,
                    title: "AI Powered Heatmap",
                    description: "Understand which areas of interest will attract visual attention in the first 3-5 seconds of view.",
                    bullets: ["Test in seconds", "Define core attraction areas", "Discover dead space", "Qualify design ideas"],
                },
                {
                    id: "commerce-marketing-analyst",
                    icon: PieChart,
                    title: "Commerce Marketing Analyst",
                    description: "Real time text and image analysis of your content. Assessed against commerce marketing framework.",
                    bullets: ["Contextual Analysis", "Buyer decision moment relevance", "Scored against framework guidelines", "Rank your campaigns"],
                }
                
            ],
        },
        {
            value: "optimization",
            label: "Optimization",
            cards: [
                {
                    id: "commerce-marketing-framework",
                    icon: Brain,
                    title: "Commerce Marketing Framework",
                    description: "Access a framework of content guidelines enhanced with years of in-market sales data.",
                    bullets: [
                        "Review for intended ad placement",
                        "Review for full purchase journey",
                        "Choose between In Store, E-Commerce, and Social channels",
                        "Test a key visual across all channels for adaptation"
                    ],
                },
                {
                    id: "detailed-reporting",
                    icon: Brain,
                    title: "Detailed Reporting",
                    description: "Visual heatmap combined with ad content review, tested for your chosen ad placement.",
                    bullets: [
                        "Visual Salience score",
                        "Imagery overview",
                        "Content analysis",
                        "Scored for ad placement to assess content relevance"
                    ],
                },
                {
                    id: "optimization-recommendations",
                    icon: Brain,
                    title: "Optimization Recommendations",
                    description: "Suggested changes to align content with the context of the moment.",
                    bullets: [
                        "Adapt each ad for optimal performance",
                        "Align your omni-channel campaigns",
                        "Tweak content and re-test",
                        "Stand out with relevance for conversion"
                    ],
                },
            ],
        },
        {
            value: "integration",
            label: "Integration",
            cards: [
                {
                    id: "web-browser-plugin",
                    icon: Brain,
                    title: "Web Browser PlugIn",
                    description: "Easy to install on any browser, giving you instant access to test creative anywhere you work.",
                    bullets: [
                        "Install in seconds",
                        "Works with any design tool you choose",
                        "Screengrab functionality",
                        "Test and optimize in minutes"
                    ],
                },
            ],
        },
        {
            value: "enterprise",
            label: "Enterprise",
            cards: [
                {
                    id: "team-collaboration",
                    icon: Brain,
                    title: "Team Collaboration",
                    description: "Platform-based solution with access to project folders for seamless team sharing.",
                    bullets: [
                        "Upload whole campaign copy",
                        "Assign roles for tasks and review",
                        "Accelerate campaign review times",
                        "Ideal for client review meetings"
                    ],
                },
                {
                    id: "api-access",
                    icon: Brain,
                    title: "API Access",
                    description: "Integrate our framework directly into your design workflow.",
                    bullets: [
                        "API delivery direct to your platform",
                        "Choose all features or just take a few",
                        "xxx",
                        "xxx"
                    ],
                },
                {
                    id: "white-label-options",
                    icon: Brain,
                    title: "White-label Options",
                    description: "Built for your company, made to look fully in-house.",
                    bullets: [
                        "Branded platform",
                        "Bespoke design options",
                        "Staff and client access settings",
                        "24/7 support"
                    ],
                },
                {
                    id: "dedicated-support",
                    icon: Brain,
                    title: "Dedicated Support",
                    description: "An Account Lead dedicated to your success, providing ongoing guidance and assistance.",
                    bullets: [
                        "Onboarding & training",
                        "Regular check-ins",
                        "Hot-desking options",
                        "xxx"
                    ],
                }
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

