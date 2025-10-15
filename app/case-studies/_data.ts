// app/case-studies/_data.ts
import type { LucideIcon } from "lucide-react";
import { BarChart3, Zap, TrendingUp, Check, ShoppingCart, Building2, ArrowRight, Play, Package, Store } from "lucide-react";

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
    slug: string;
    description: string;
    metrics: FeaturedMetric[];
    ctas: {
        primary: { label: string; icon?: LucideIcon }
    };
    media: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
};

export const featuredCaseStudy: FeaturedCaseStudyData = {
    badge: { label: "Featured Case Study", icon: Building2 },
    title: { before: "How Bose Increased RoAS by ", highlight: "24%" },
    slug: "bose-roas-context-optimisation",
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
            icon: ArrowRight,
        }
    },
    media: {
        src: "/ai-content-optimization-dashboard-with-heatmaps-an.jpg",
        alt: "Bose Dashboard Results",
        width: 600,
        height: 400
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
    slug: string;
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
            id: "consumer-goods",
            category: "Consumer Goods",
            categoryIcon: Package,
            primaryDelta: { value: "+86%", colorClass: "text-blue-600" },
            title: "Unilever - Lux Botanicals",
            slug: "unilever-lux-botanicals",
            description:
                "Major consumer goods brand optimized in-store digital advertising to drive awareness and sales for new product range across 30 supermarket locations.",
            kpis: [
                { label: "Lux brand sales", value: "+86%", colorClass: "text-blue-600" },
                { label: "New range sales", value: "+56%", colorClass: "text-blue-600" },
                { label: "Relevant views", value: "+10%", colorClass: "text-blue-600" },
            ],
            quote:
                '"The halo effect showed us that our ads worked, but AI-driven optimization revealed exactly how to make them convert better."',
            cta: { label: "View Case Study" },
        },
        {
            id: "retail",
            category: "Retail",
            categoryIcon: Store,
            primaryDelta: { value: "+42%", colorClass: "text-purple-600" },
            title: "Spinneys Supermarkets",
            slug: "spinneys-supermarket",
            description:
                "Major supermarket chain optimized in-store magazine promotions for frozen vegetables using AI-powered copy testing to drive product sales across 30 locations.",
            kpis: [
                { label: "Frozen vegetable sales", value: "+42%", colorClass: "text-purple-600" },
                { label: "Content engagement", value: "+28%", colorClass: "text-purple-600" },
                { label: "Campaign ROI", value: "3.2x", colorClass: "text-purple-600" },
            ],
            quote:
                '"Pre-testing copy with behavioural analysis showed us exactly which messages would resonate before we launched the campaign."',
            cta: { label: "View Case Study" },
        },
        {
            id: "cards-and-gifts",
            category: "Cards & Gifts",
            categoryIcon: ShoppingCart,
            primaryDelta: { value: "+3x", colorClass: "text-green-600" },
            title: "National Card Retailer",
            slug: "national-card-retailer",
            description:
                "Leading greeting card retailer pre-tested 30 ads using AI-powered saliency testing, optimizing for both in-store and online channels before launch.",
            kpis: [
                { label: "Campaign 1 RoAS Uplift", value: "3x", colorClass: "text-green-600" },
                { label: "Campaign 2 RoAS Uplift", value: "+37%", colorClass: "text-green-600" },
                { label: "Ads Pre-Tested", value: "30 creatives" },
            ],
            quote:
                '"optml.ai helped us identify exactly where customers were dropping off. The AI insights were spot-on."',
            cta: { label: "View Case Study" },
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

export const caseStudies = [
    {
        slug: "bose-roas-context-optimisation",
        title: "How Bose Increased RoAS by 24%",
        description:
            "Bose used optml.ai to optimize campaigns and achieved remarkable performance improvements.",
    },
    {
        slug: "unilever-lux-botanicals",
        title: "Unilever - Lux Botanicals",
        description:
            "Major consumer goods brand optimized in-store digital advertising to drive awareness and sales for new product range across 30 supermarket locations.",

    },
    {
        slug: "national-card-retailer",
        title: "National Card Retailer",
        description:
            "Leading greeting card retailer pre-tested 30 ads using AI-powered saliency testing, optimizing for both in-store and online channels before launch.",
    },

    {
        slug: "spinneys-supermarket",
        title: "Spinneys Supermarkets",
        description:
            "Major supermarket chain optimized in-store magazine promotions for frozen vegetables using AI-powered copy testing to drive product sales across 30 locations.",
    },







] as const;





// CTA
export const ctaData = {
    title: "Ready to Join Our Success Stories?",
    description: "Start your free trial today and see how optml.ai can transform your content performance in just 30 days.",
    buttonText: "Start Free Trial",
    buttonLink: "/signup",
    demoButtonText: "Schedule Demo",
    disclaimer: "Free forever • No credit card required • Premium features available",
}
