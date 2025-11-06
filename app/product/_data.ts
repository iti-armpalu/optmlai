import type { LucideIcon } from "lucide-react";
import { Lightbulb, Check, Brain, Download, Play, Calendar, Database, MousePointer, Eye, Clock, Globe, Cpu, TrendingUp, Target, Zap, MessageCircle, BarChart3, Shield } from "lucide-react";


// Hero
export type CTA = {
  label: string;
  icon?: LucideIcon;
  href?: string;                 // if omitted, render as a regular button
  variant?: "default" | "outline" | "secondary" | "destructive" | "ghost" | "link";
};

export type ProductHero = {
  gradient: string;
  badge: { label: string; icon: LucideIcon; variant?: "secondary" | "outline" | "default" };
  heading: string;
  subheading: string;
  ctas: [CTA, ...CTA[]];         // at least one primary CTA
  checklist: { label: string; icon?: LucideIcon; iconClass?: string }[];
  media: { src: string; alt: string; width: number; height: number };
};

export const productHero: ProductHero = {
  gradient: "bg-gradient-to-br from-primary/5 via-background to-secondary/5",
  badge: { label: "AI-Powered Content Optimization", icon: Download, variant: "secondary" },
  heading: "Content Optimization Needs Context",
  subheading:
    "Optml.ai is the first technology that optimizes ads through the lens of human behavior. Instead of blindly tweaking creative elements, it analyzes the viewer’s context, attention, and emotion to deliver ads that perform, not just appear.",
  ctas: [
    { label: "Install Extension", href: "/signup", icon: Download }, // primary
    { label: "Watch Demo", icon: Play, variant: "outline" },
    { label: "Schedule Demo", href: "/schedule-demo", icon: Calendar, variant: "outline" },
  ],
  checklist: [
    { label: "Free 14-day trial", icon: Check, iconClass: "text-green-500" },
    { label: "Works on any website", icon: Check, iconClass: "text-green-500" },
    { label: "No coding required", icon: Check, iconClass: "text-green-500" },
  ],
  media: {
    src: "/ai-content-optimization-dashboard-with-heatmaps-an.jpg",
    alt: "optml.ai Browser Extension Interface",
    width: 600,
    height: 400,
  },
} as const;


// Product story
export type StoryPoint = {
  id: string;
  tone: "negative" | "positive";
  title: string;
  description: string;
  // visual token for the round badge on the left
  badge:
    | { kind: "emoji"; value: "❌"; bgClass: string; textClass: string }
    | { kind: "icon"; icon: LucideIcon; bgClass: string; textClass: string };
};

export type ContrastRow = {
  label: string;
  // text like "Hours → Minutes"
  value: string;
  bgClass: string;
  textClass: string;
};

export type ProductStorySection = {
  badge: { label: string; icon: LucideIcon; variant?: "outline" | "secondary" | "default" };
  heading: { before: string; highlight: string; after?: string };
  subheading: string;
  points: readonly StoryPoint[];
  compareCard: {
    title: { label: string; icon: LucideIcon };
    rows: readonly ContrastRow[];
  };
};

export const productStory: ProductStorySection = {
  badge: { label: "The Problem We Solve", icon: Lightbulb, variant: "outline" },
  heading: {
    before: "Content Creation is ",
    highlight: "Behavioral",
  },
  subheading:
    "Optml.ai is the first technology that bases its recommendations on human behavior. It doesn't optimize an add blindly, it does it for the context of the viewer seeing the ad. ",
  points: [
    {
      id: "traditional",
      tone: "negative",
      title: "Traditional analytics",
      description:
        "Complex dashboards, delayed insights, and no actionable recommendations",
      badge: { kind: "emoji", value: "❌", bgClass: "bg-red-100", textClass: "text-red-600" },
    },
    {
      id: "optml",
      tone: "positive",
      title: "optml.ai approach",
      description:
        "Conversational AI that explains your data and provides specific optimization steps",
      badge: { kind: "icon", icon: Check, bgClass: "bg-green-100", textClass: "text-green-600" },
    },
  ] as const,
  compareCard: {
    title: { label: "Traditional vs. AI-Powered", icon: Brain },
    rows: [
      { label: "Setup Time", value: "Hours → Minutes", bgClass: "bg-red-50", textClass: "text-red-600" },
      { label: "Insights", value: "Raw Data → Actionable", bgClass: "bg-green-50", textClass: "text-green-600" },
      { label: "Learning Curve", value: "Steep → Conversational", bgClass: "bg-blue-50", textClass: "text-blue-600" },
      { label: "Results", value: "Delayed → Immediate", bgClass: "bg-purple-50", textClass: "text-purple-600" },
    ] as const,
  },
} as const;


// How optml.ai Works
/** Left column */
export type HowBullet = { icon: LucideIcon; label: string };
export type HowLeft = {
  headingIcon: LucideIcon;
  heading: string;
  description: string;
  bullets: HowBullet[];
};

/** Right column (card) */
type KPIRow = { label: string; value: string; bgClass: string; textClass: string };
type ProgressBar = { label: string; percent: number };
type ChatMsg = { from: "user" | "ai"; text: string };
type GridTile = { value: string; label: string; bgClass: string; textClass: string };

export type HowRight =
  | { kind: "kpis"; rows: KPIRow[] }
  | { kind: "progress"; title?: string; bars: ProgressBar[] }
  | { kind: "chat"; title: string; messages: ChatMsg[] }
  | { kind: "grid"; title: string; tiles: GridTile[] };

/** Tab */
export type HowTab = {
  value: "data-collection" | "ai-analysis" | "insights" | "optimization";
  label: string;
  left: HowLeft;
  right: HowRight;
};

export type HowItWorksSection = {
  heading: string;
  subheading: string;
  tabs: readonly HowTab[];
};

export const howItWorks: HowItWorksSection = {
  heading: "How optml.ai Works",
  subheading:
    "Advanced AI technology meets intuitive user experience to deliver unprecedented content insights.",
  tabs: [
    {
      value: "data-collection",
      label: "Data Collection",
      left: {
        headingIcon: Database,
        heading: "Real-Time Data Collection",
        description:
          "Our lightweight tracking system captures every user interaction without impacting site performance.",
        bullets: [
          { icon: MousePointer, label: "Click tracking and heatmap generation" },
          { icon: Eye,         label: "Scroll depth and attention mapping" },
          { icon: Clock,       label: "Time-based engagement metrics" },
          { icon: Globe,       label: "Cross-device and cross-platform tracking" },
        ],
      },
      right: {
        kind: "kpis",
        rows: [
          { label: "Data Points/Second",  value: "1,000+", bgClass: "bg-blue-50",   textClass: "text-blue-600" },
          { label: "Processing Latency", value: "<50ms",  bgClass: "bg-green-50",  textClass: "text-green-600" },
          { label: "Privacy Compliant",  value: "GDPR + CCPA", bgClass: "bg-purple-50", textClass: "text-purple-600" },
        ],
      },
    },
    {
      value: "ai-analysis",
      label: "AI Analysis",
      left: {
        headingIcon: Cpu,
        heading: "Advanced AI Processing",
        description:
          "Our proprietary AI models analyze patterns, predict user behavior, and identify optimization opportunities in real-time.",
        bullets: [
          { icon: Brain,       label: "Machine learning pattern recognition" },
          { icon: TrendingUp,  label: "Predictive behavior modeling" },
          { icon: Target,      label: "Conversion probability scoring" },
          { icon: Zap,         label: "Real-time anomaly detection" },
        ],
      },
      right: {
        kind: "progress",
        title: "AI Model Performance",
        bars: [
          { label: "Pattern Recognition", percent: 95 },
          { label: "Prediction Accuracy", percent: 92 },
          { label: "Processing Speed",   percent: 98 },
        ],
      },
    },
    {
      value: "insights",
      label: "Smart Insights",
      left: {
        headingIcon: MessageCircle,
        heading: "Conversational Intelligence",
        description:
          "Ask questions in natural language and get instant, actionable insights about your content performance.",
        bullets: [
          { icon: MessageCircle, label: "Natural language query processing" },
          { icon: Brain,         label: "Context-aware recommendations" },
          { icon: BarChart3,     label: "Visual data storytelling" },
          { icon: Lightbulb,     label: "Proactive optimization suggestions" },
        ],
      },
      right: {
        kind: "chat",
        title: "AI Chat Interface",
        messages: [
          { from: "user", text: '“How can I improve my conversion rate?”' },
          {
            from: "ai",
            text:
              "Based on your data, moving your CTA 150px higher could increase conversions by 23%. Users currently scroll past it 34% of the time.",
          },
          { from: "user", text: '“Which content performs best?”' },
          {
            from: "ai",
            text:
              "Your tutorial content has 2.3x higher engagement. Consider creating more how-to guides.",
          },
        ],
      },
    },
    {
      value: "optimization",
      label: "Optimization",
      left: {
        headingIcon: Target,
        heading: "Automated Optimization",
        description:
          "Implement AI-driven recommendations with one click, or get detailed instructions for manual optimization.",
        bullets: [
          { icon: Zap,        label: "One-click optimization implementation" },
          { icon: BarChart3,  label: "A/B testing automation" },
          { icon: TrendingUp, label: "Performance tracking and reporting" },
          { icon: Shield,     label: "Safe rollback capabilities" },
        ],
      },
      right: {
        kind: "grid",
        title: "Optimization Results",
        tiles: [
          { value: "+40%", label: "Avg. Engagement",    bgClass: "bg-green-50",  textClass: "text-green-600" },
          { value: "+28%", label: "Conversion Rate",    bgClass: "bg-blue-50",   textClass: "text-blue-600" },
          { value: "-35%", label: "Bounce Rate",        bgClass: "bg-purple-50", textClass: "text-purple-600" },
          { value: "+52%", label: "Time on Page",       bgClass: "bg-orange-50", textClass: "text-orange-600" },
        ],
      },
    },
  ] as const,
} as const;




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
