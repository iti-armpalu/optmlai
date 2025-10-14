// app/case-studies/_data.ts
import type { LucideIcon } from "lucide-react";
import { BarChart3, Zap, TrendingUp, Check, ShoppingCart, Building2, Eye, ArrowRight, Play } from "lucide-react";

// Hero / Intro section
export const heroSection = {
    heading: "Real Results from Real Businesses",
    subheading:
      "Discover how companies across industries have transformed their content performance with optml.ai's AI-powered optimization platform.",
    gradient: "bg-gradient-to-br from-primary/5 via-background to-secondary/5",
  } as const;

// Featured
export type FeaturedMetric = {
  label: string;
  value: string;
  /** Optional: if you later show a Progress bar */
  progress?: number; // 0..100
};

export type FeaturedCaseStudyData = {
  badge: { label: string; icon: LucideIcon };
  title: { before: string; highlight: string; after?: string };
  description: string;
  metrics: FeaturedMetric[];
  ctas: {
    primary: { label: string; href: string; icon?: LucideIcon };
    secondary?: { label: string; href?: string; icon?: LucideIcon; variant?: "outline" | "default" };
  };
  media: {
    src: string;
    alt: string;
    width: number;
    height: number;
    overlays: {
      liveLabel: string;
      revenueImpact: string;
    };
  };
};

export const featuredCaseStudy: FeaturedCaseStudyData = {
  badge: { label: "Featured Case Study", icon: Building2 },
  title: { before: "How Bose Increased RoAS by ", highlight: "24%" },
  description:
    "Bose, a premium audio equipment manufacturer, used optml.ai to optimize their advertising campaigns across three online retailers and saw remarkable improvements in return on ad spend within 3 months.",
  metrics: [
    { label: "RoAS Improvement", value: "24% increase", progress: 24 },
    { label: "Ad Visuals Optimized", value: "120 creatives", progress: 85 },
    { label: "Online Retailers", value: "3 platforms", progress: 100 },
  ],
  ctas: {
    primary: {
      label: "Read Full Case Study",
      href: "/case-studies/bose-roas-context-optimisation",
      icon: ArrowRight,
    },
    secondary: { label: "Watch Video", icon: Play, variant: "outline" },
  },
  media: {
    src: "/ai-content-optimization-dashboard-with-heatmaps-an.jpg",
    alt: "Bose Dashboard Results",
    width: 600,
    height: 400,
    overlays: {
      liveLabel: "Live Results",
      revenueImpact: "Revenue Impact: $1.2M in 3 months",
    },
  },
};


// Success stories
export type KPI = {
    label: string;
    value: string;           // e.g., "+156%" or "$2.4M"
    colorClass?: string;     // Tailwind text color class
};

export type PrimaryDelta = {
    value: string;
    colorClass?: string;
};

export type CaseStudy = {
    id: string;
    category: string;
    categoryIcon: LucideIcon;
    primaryDelta: PrimaryDelta;
    title: string;
    description: string;
    kpis: KPI[];
    quote: string;
    cta: { label: string; href?: string };
};

export const successStories = {
    heading: "Success Stories Across Industries",
    subheading:
        "From e-commerce to healthcare, see how optml.ai drives measurable results for businesses of all sizes.",
    cards: [
        {
            id: "ecommerce",
            category: "E-commerce",
            categoryIcon: ShoppingCart,
            primaryDelta: { value: "+156%", colorClass: "text-green-600" },
            title: "ShopFast",
            description:
                "Online retailer optimized product pages and checkout flow, resulting in massive conversion improvements.",
            kpis: [
                { label: "Conversion Rate", value: "+156%", colorClass: "text-green-600" },
                { label: "Cart Abandonment", value: "-67%", colorClass: "text-green-600" },
                { label: "Revenue Impact", value: "$2.4M" },
            ],
            quote:
                '"optml.ai helped us identify exactly where customers were dropping off. The AI insights were spot-on."',
            cta: { label: "View Case Study", href: "/case-studies/shopfast" },
        },
        {
            id: "saas",
            category: "SaaS",
            categoryIcon: Building2,
            primaryDelta: { value: "+89%", colorClass: "text-blue-600" },
            title: "CloudSync",
            description:
                "B2B software company streamlined their signup process and improved trial-to-paid conversion rates.",
            kpis: [
                { label: "Trial Signups", value: "+89%", colorClass: "text-blue-600" },
                { label: "Paid Conversions", value: "+34%", colorClass: "text-blue-600" },
                { label: "Form Completion", value: "+78%", colorClass: "text-blue-600" },
            ],
            quote:
                '"The heatmaps revealed user behavior patterns we never knew existed. It\'s like having a crystal ball for content performance."',
            cta: { label: "View Case Study", href: "/case-studies/cloudsync" },
        },
        {
            id: "media",
            category: "Media",
            categoryIcon: Eye,
            primaryDelta: { value: "+124%", colorClass: "text-purple-600" },
            title: "NewsHub",
            description:
                "Digital media company optimized article layouts and increased reader engagement significantly.",
            kpis: [
                { label: "Time on Page", value: "+124%", colorClass: "text-purple-600" },
                { label: "Scroll Depth", value: "+89%", colorClass: "text-purple-600" },
                { label: "Ad Revenue", value: "+92%", colorClass: "text-purple-600" },
            ],
            quote:
                '"Understanding reading patterns helped us place content and ads more effectively."',
            cta: { label: "View Case Study", href: "/case-studies/newshub" },
        },
    ] satisfies CaseStudy[],
} as const;

// Methodology
export type MethodologyStep = {
    id: number;
    title: string;
    description: string;
    icon: LucideIcon;
    badge: string;
};

export const methodology = {
    heading: "Our Proven Methodology",
    subheading:
        "Every success story follows our systematic approach to content optimization.",
    steps: [
        {
            id: 1,
            title: "Analyze",
            description:
                "Deploy AI-powered heatmapping and user behavior tracking to understand current performance.",
            icon: BarChart3,
            badge: "Comprehensive data collection",
        },
        {
            id: 2,
            title: "Optimize",
            description:
                "Implement AI-generated recommendations based on user behavior patterns and industry best practices.",
            icon: Zap,
            badge: "Smart recommendations",
        },
        {
            id: 3,
            title: "Test",
            description:
                "Run A/B tests to validate improvements and measure the impact of optimization changes.",
            icon: TrendingUp,
            badge: "Validated improvements",
        },
        {
            id: 4,
            title: "Scale",
            description:
                "Apply successful optimizations across all content and continue monitoring for ongoing improvements.",
            icon: Check,
            badge: "Continuous optimization",
        },
    ] satisfies MethodologyStep[],
} as const;



export const ctaData = {
    title: "Ready to Join Our Success Stories?",
    description: "Start your free trial today and see how optml.ai can transform your content performance in just 30 days.",
    buttonText: "Start Free Trial",
    buttonLink: "/signup",
    demoButtonText: "Schedule Demo",
    disclaimer: "Free forever • No credit card required • Premium features available",
}
