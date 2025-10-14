// app/technology/_data.ts
import type { LucideIcon } from "lucide-react";
import { Brain, Play, ArrowRight, Zap, BarChart3, CheckCircle, Eye, Target, Layers, Activity, TrendingUp, Lightbulb } from "lucide-react";

// Hero
export type CTA = {
    label: string;
    icon?: LucideIcon;
    href?: string; // if absent, render as a regular button
    variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
};

export type TechnologyHero = {
    gradient: string;
    badge: { label: string; icon: LucideIcon };
    heading: { before: string; highlight: string; after?: string };
    subheading: string;
    ctas: [CTA, CTA?]; // primary, optional secondary
    media: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
};

export const technologyHero: TechnologyHero = {
    gradient: "bg-gradient-to-br from-primary/5 via-background to-secondary/5",
    badge: { label: "Neuroscience + AI", icon: Brain },
    heading: {
        before: "The Science Behind ",
        highlight: "optml.ai",
    },
    subheading:
        "Discover how we combine cutting-edge neuroscience research with advanced AI to predict human attention and optimize content performance before it goes live.",
    ctas: [
        { label: "Watch Technology Demo", icon: Play }, // no href -> normal button
        { label: "Try It Free", href: "/signup", icon: ArrowRight, variant: "outline" },
    ],
    media: {
        src: "/brain-neural-network-visualization-with-data-flowi.jpg",
        alt: "Neural Network Visualization",
        width: 600,
        height: 400,
    },
} as const;

// Core technology
export type PillarCard = {
    id: string;
    icon: LucideIcon;        // big icon at top of each card
    title: string;
    description: string;
    bullets: string[];       // simple bullet labels (shared bullet icon below)
};

export type CoreTechnologySection = {
    heading: string;
    subheading: string;
    bulletIcon: LucideIcon;  // icon used for every bullet item
    cards: readonly PillarCard[];
};

export const coreTechnology: CoreTechnologySection = {
    heading: "Three Pillars of Innovation",
    subheading:
        "optml.ai is built on three foundational technologies that work together to understand and predict human behavior",
    bulletIcon: CheckCircle,
    cards: [
        {
            id: "neuroscience",
            icon: Brain,
            title: "Neuroscience Foundation",
            description:
                "Based on 30+ years of research in visual attention, cognitive psychology, and decision-making",
            bullets: [
                "Visual salience mapping from eye-tracking studies",
                "Cognitive load theory application",
                "Commerce marketing principles",
            ],
        },
        {
            id: "ai-engine",
            icon: Zap,
            title: "AI Processing Engine",
            description:
                "Advanced machine learning models trained on millions of user interactions and visual elements",
            bullets: [
                "Computer vision for element detection",
                "Deep learning prediction models",
                "Natural language processing for insights",
            ],
        },
        {
            id: "realtime-analytics",
            icon: BarChart3,
            title: "Real-Time Analytics",
            description:
                "Continuous learning system that improves predictions based on actual user behavior data",
            bullets: [
                "Live heatmap generation",
                "Content evaluation",
                "Optimization recommendations",
            ],
        },
    ] as const,
} as const;

// Neuroscience
export type NeurosciencePoint = {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
};

export type NeuroscienceStat = {
    label: string;
    value: string;
};

export type NeuroscienceSection = {
    gradient?: string;
    badge: { label: string; icon: LucideIcon; variant?: "default" | "secondary" | "outline" };
    heading: { before: string; highlight: string };
    subheading: string;
    points: readonly NeurosciencePoint[];
    card: {
        title: { label: string; icon: LucideIcon };
        stats: readonly NeuroscienceStat[];
    };
};

export const neuroscienceDeepDive: NeuroscienceSection = {
    badge: { label: "Visual Neuroscience", icon: Eye, variant: "outline" },
    heading: { before: "Understanding Human ", highlight: "Visual Attention" },
    subheading:
        "Our technology is grounded in decades of research on how the human brain processes visual information and makes decisions.",
    points: [
        {
            id: "salience",
            title: "Visual Salience Theory",
            description:
                "Based on research showing how certain visual elements naturally draw attention through contrast, color, and positioning.",
            icon: Target,
        },
        {
            id: "cognitive-load",
            title: "Cognitive Load Management",
            description:
                "Understanding how information overload affects decision-making and optimizing content to reduce cognitive burden.",
            icon: Layers,
        },
        {
            id: "proven-commerce-guidelines",
            title: "Proven commerce guidelines",
            description:
                "Visual attention combined with cognitive ease drives conversions.. ",
            icon: Activity,
        },
    ] as const,
    card: {
        title: { label: "Research Foundation", icon: Brain },
        stats: [
            { label: "Eye-tracking studies analyzed", value: "10,000+" },
            { label: "Academic papers reviewed", value: "500+" },
            { label: "User interactions processed", value: "50M+" },
            { label: "Visual elements analyzed", value: "1B+" },
        ],
    },
} as const;

// AI Technology deep dive
export type AIGroup = {
    title: string;
    bullets: string[];
};

export type AITab = {
    value: "vision" | "prediction" | "nlp" | "learning";
    label: string;
    icon: LucideIcon; // small: used if you add icons to tab labels later
    cardTitle: string;
    cardDescription: string;
    groups: [AIGroup, AIGroup]; // two columns of groups per tab
};

export type AIDeepDiveSection = {
    heading: string;
    subheading: string;
    bulletIcon: LucideIcon;
    tabs: readonly AITab[];
};

export const aiDeepDive: AIDeepDiveSection = {
    heading: "Built on 6 years of in-market data",
    subheading:
        "Explore the advanced machine learning models and processing pipeline that power optml.ai",
    bulletIcon: CheckCircle,
    tabs: [
        {
            value: "vision",
            label: "Academic Research",
            icon: Eye,
            cardTitle: "Academic Research Papers",
            cardDescription:
                "Data collected across multiple studies of consumer preferences linked to purchasing triggers and visual attention.",
            groups: [
                {
                    title: "Attention and intent",
                    bullets: [
                        "Eye Tracking, FMRI & ECG Research",
                        "Variables of Product, Price, Choice",
                        "Correlation of visual attention and intent",
                        "Data backed guideline creation",
                    ],
                },
                {
                    title: "Visual Properties Analysis",
                    bullets: [
                        "Color contrast and saturation",
                        "Size and positioning metrics",
                        "Typography and readability scores",
                        "Visual flow and scanning patterns",
                    ],
                },
            ],
        },
        {
            value: "prediction",
            label: "Prediction Models",
            icon: TrendingUp,
            cardTitle: "Behavioral Prediction Models",
            cardDescription:
                "Machine learning models trained on millions of user interactions to predict attention and behavior",
            groups: [
                {
                    title: "Attention Prediction",
                    bullets: [
                        "Gaze pattern forecasting",
                        "Fixation duration estimation",
                        "Scan path optimization",
                        "Attention heatmap generation",
                    ],
                },
                {
                    title: "Conversion Prediction",
                    bullets: [
                        "Click probability scoring",
                        "Engagement likelihood analysis",
                        "Conversion funnel optimization",
                        "User journey mapping",
                    ],
                },
            ],
        },
        {
            value: "nlp",
            label: "Natural Language",
            icon: Lightbulb,
            cardTitle: "Natural Language Processing",
            cardDescription:
                "Advanced NLP enables conversational insights and natural language queries about your data",
            groups: [
                {
                    title: "Content Analysis",
                    bullets: [
                        "Sentiment and tone analysis",
                        "Readability and complexity scoring",
                        "Keyword and topic extraction",
                        "Message clarity assessment",
                    ],
                },
                {
                    title: "Conversational AI",
                    bullets: [
                        "Natural language query processing",
                        "Context-aware responses",
                        "Actionable insight generation",
                        "Recommendation explanations",
                    ],
                },
            ],
        },
        {
            value: "learning",
            label: "Continuous Learning",
            icon: Activity,
            cardTitle: "Continuous Learning System",
            cardDescription:
                "Self-improving algorithms that get smarter with every interaction and data point",
            groups: [
                {
                    title: "Adaptive Models",
                    bullets: [
                        "Real-time model updates",
                        "Performance feedback loops",
                        "Industry-specific optimization",
                        "Seasonal trend adaptation",
                    ],
                },
                {
                    title: "Data Integration",
                    bullets: [
                        "Multi-source data fusion",
                        "Cross-platform learning",
                        "Privacy-preserving analytics",
                        "Federated learning capabilities",
                    ],
                },
            ],
        },
    ] as const,
} as const;

// Research and validation
export type ResearchListItem = { label: string; icon?: LucideIcon };
export type ResearchMetric = { label: string; value: string; variant?: string };

export type ResearchCard = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  list?: readonly ResearchListItem[];
  metrics?: readonly ResearchMetric[];
};

export type ResearchValidationSection = {
  heading: string;
  subheading: string;
  cards: readonly ResearchCard[];
  bulletIcon: LucideIcon;
};

export const researchValidation: ResearchValidationSection = {
  heading: "Why context affects performance",
  subheading:
    "Understanding the three key factors that drive advertising success in today's digital landscape",
  bulletIcon: CheckCircle,
  cards: [
    {
      id: "visual-attention",
      icon: Eye,
      title: "Visual Attention",
      description:
        "In today’s crowded digital landscape, visual attention is the currency of advertising success. Audiences are bombarded with thousands of messages daily, and only the ads that capture the eye stand a chance of influencing the mind. The right balance of imagery, color, and design ensures your message cuts through the noise and earns those crucial seconds of focus.",
      list: [
        // { label: "Stanford Vision Lab collaboration" },
        // { label: "MIT Computer Science partnership" },
        // { label: "Oxford Behavioral Economics research" },
        // { label: "Carnegie Mellon HCI studies" },
      ],
    },
    {
      id: "user-relevance",
      icon: Target,
      title: "User Relevance",
      description: "Relevance is the bridge between attention and action. Today’s consumer expects more than a one-size-fits-all message; they want advertising that speaks to their needs at the exact moment in their purchase decision journey. Aligning copy and creative to where the user is; whether exploring, considering, or ready to purchase dramatically increases engagement and conversion.",
      metrics: [
        // { label: "Prediction accuracy", value: "94.2%", variant: "success" },
        // { label: "Cross-validation studies", value: "50+" },
        // { label: "Industries tested", value: "25+" },
        // { label: "Published papers", value: "12" },
      ],
    },
    {
        id: "cognitive-load",
        icon: Brain,
        title: "Cognitive Load",
        description:
          "The brain processes thousands of inputs each second, so clarity is everything. When an ad delivers a message aligned with the user’s needs, cognitive load is reduced making it easier for the brain to understand, store, and act on the information. By simplifying and tailoring content, brands create “cognitive ease” a psychological state where messages feel intuitive and credible. This isn’t just science; it’s strategy.",
        list: [
          // { label: "Stanford Vision Lab collaboration" },
          // { label: "MIT Computer Science partnership" },
          // { label: "Oxford Behavioral Economics research" },
          // { label: "Carnegie Mellon HCI studies" },
        ],
      },
  ] as const,
} as const;



// CTA
export const ctaData = {
    title: "Experience the Technology",
    description: "See how our neuroscience-powered AI can transform your content performance",
    buttonText: "Start Free Trial",
    buttonLink: "/signup",
    demoButtonText: "Schedule Demo",
    disclaimer: "14-day free trial • No credit card required • Full access to all features",
}


