export interface CaseStudy {
  slug: string
  meta: {
    title: string
    company: string
    industry: string
    duration: string
  }
  hero: {
    badges: Array<{
      icon: string
      label: string
      variant: "secondary" | "outline"
    }>
    title: string
    titleHighlight: string
    description: string
    keyMetrics: Array<{
      value: string
      label: string
      color: string
    }>
    image: {
      src: string
      alt: string
    }
    performanceIndicators: Array<{
      value: string
      label: string
      color: string
    }>
  }
  companyProfile: {
    name: string
    subtitle: string
    details: Array<{
      label: string
      value: string
    }>
  }
  timeline: Array<{
    week: string
    description: string
    status: "completed" | "success"
  }>
  objective: {
    title: string
    description: string
    goals: Array<{
      title: string
      description: string
      color: string
    }>
  }
  challenge: {
    title: string
    description: string
    keyProblems: {
      title: string
      items: string[]
      color: string
    }
    businessImpact: {
      title: string
      items: string[]
      color: string
    }
  }
  solution: {
    title: string
    description: string
    steps: Array<{
      number: number
      title: string
      description: string
      features: string[]
    }>
  }
  results: {
    title: string
    description: string
    metrics: Array<{
      value: string
      label: string
      change: string
      color: string
    }>
  }
  keyLearnings: {
    title: string
    description: string
    categories: Array<{
      icon: string
      title: string
      // color: string
      items: string[]
    }>
  }
  relatedCaseStudies: Array<{
    badge: string
    metric: string
    metricColor: string
    title: string
    description: string
  }>
  cta: {
    title: string
    description: string
    benefits: string[]
  }
}

export const caseStudiesData: CaseStudy[] = [
  {
    slug: "bose-roas-context-optimisation",
    meta: {
      title: "Bose Success Story",
      company: "Bose",
      industry: "Consumer Electronics",
      duration: "30 Days",
    },
    hero: {
      badges: [
        { icon: "Building2", label: "B2B SaaS", variant: "secondary" as const },
        { icon: "Clock", label: "30 Days", variant: "outline" as const },
      ],
      title: "How Bose Increased RoAS by",
      titleHighlight: "73%",
      description:
        "Bose, a premium audio equipment manufacturer, used optml.ai to optimize their advertising campaigns across three online retailers and saw remarkable improvements in return on ad spend within 3 months.",
      keyMetrics: [
        {
          value: "73%",
          label: "Engagement Increase",
          color: "green",
        },
        {
          value: "2.4x",
          label: "Time on Page",
          color: "blue",
        },
        {
          value: "45%",
          label: "Conversion Rate",
          color: "purple",
        },
        {
          value: "$1.2M",
          label: "Revenue Impact",
          color: "orange",
        },
      ],
      image: {
        src: "/ai-content-optimization-dashboard-with-heatmaps-an.jpg",
        alt: "Bose Dashboard Results",
      },
      performanceIndicators: [
        { value: "+73%", label: "Engagement", color: "green" },
        { value: "+140%", label: "Session Time", color: "blue" },
        { value: "+45%", label: "Conversions", color: "purple" },
      ],
    },
    companyProfile: {
      name: "Bose",
      subtitle: "Global Consumer Audio Brand",
      details: [
        { label: "Industry", value: "Consumer Electronics & Audio" },
        { label: "Company Size", value: "10,000+ employees" },
        { label: "Products Analysed", value: "Audio Frames & Sports Earbuds" },
        { label: "Location", value: "Global – HQ in Framingham, MA" },
        { label: "Project Duration", value: "Single cross-platform campaign cycle" },
      ],
    },
    timeline: [
      {
        week: "Week 1: Analysis",
        description: "Heatmap deployment and data collection",
        status: "completed" as const,
      },
      {
        week: "Week 2: Optimization",
        description: "AI recommendations implementation",
        status: "completed" as const,
      },
      {
        week: "Week 3: Testing",
        description: "A/B test execution and validation",
        status: "completed" as const,
      },
      {
        week: "Week 4: Results",
        description: "Full implementation and monitoring",
        status: "success" as const,
      },
    ],
    objective: {
      title: "The Objective",
      description:
        "Optimise Bose's multi-retailer digital ad campaigns to increase Return on Ad Spend (RoAS) by understanding and leveraging how consumers engage with ads across devices and stages of the buying journey.",
      goals: [
        {
          title: "Primary Goal",
          description:
            "Improve RoAS across campaigns by ensuring ad content matches the consumer's intent and context at every touchpoint",
          color: "blue",
        },
        {
          title: "Success Metrics",
          description: "Achieve a minimum 10% increase in RoAS — ultimately delivering +24% improvement",
          color: "purple",
        },
        {
          title: "Timeline",
          description:
            "Analysis, optimisation, and deployment conducted across a single cross-platform campaign period.",
          color: "green",
        },
      ],
    },
    challenge: {
      title: "The Challenge",
      description:
        "The client's campaigns relied heavily on surface-level performance metrics like Click-Through-Rate (CTR), which did not accurately reflect sales performance or ad effectiveness.",
      keyProblems: {
        title: "Key Problems",
        items: [
          "CTRs were treated as a proxy for purchase intent, leading to poor optimisation decisions",
          "Users clicked on mobile but purchased on desktop, skewing results and ad spend efficiency",
          "Campaign performance lacked visibility into how ad visuals performed across different stages of the shopper journey.",
          "Ads were not tailored to the consumer's mindset at the time of exposure (e.g., discovery vs. purchase moments)",
        ],
        color: "red",
      },
      businessImpact: {
        title: "Business Impact",
        items: [
          "Inefficient budget allocation to high-CTR but low-conversion placements",
          "Lost revenue opportunities from underperforming desktop placements",
          "Difficulty measuring true RoAS, making campaign reporting unreliable",
          "Lack of accountability for creative performance within the customer journey",
        ],
        color: "blue",
      },
    },
    solution: {
      title: "The Solution",
      description:
        "Solouq applied a behavioural and AI-driven optimisation strategy using proprietary predictive salience technology to evaluate and improve more than 100 ad visuals across Bose's campaigns",
      steps: [
        {
          number: 1,
          title: "Mapped the Shopper Journey",
          description: "Identified consumer behaviour patterns across discovery, consideration, and purchase stages.",
          features: [
            "Complete journey mapping from mobile browsing to desktop conversion",
            "Identification of high-value moments and channels driving purchase intent",
            "Visibility into the full funnel performance across three retailers",
          ],
        },
        {
          number: 2,
          title: "Analysed Ad Context & Salience",
          description: "Assessed how effectively each creative captured attention and aligned with the user's mindset.",
          features: [
            "AI-based salience scoring for 120 ad visuals",
            "Contextual tagging by placement, format, and platform",
            "Cross-referencing engagement metrics with sales outcomes",
          ],
        },
        {
          number: 3,
          title: "Optimised Content by Placement",
          description: "Redesigned and refined ad content to align with the stage of the shopper journey.",
          features: [
            "Dynamic visual and messaging optimisation",
            "CTA hierarchy tailored to intent (awareness, consideration, purchase)",
            "Reduced non-performing creatives prior to market launch",
          ],
        },
        {
          number: 4,
          title: "Built Dynamic Brand Guidelines",
          description: "Developed an adaptable framework to guide ongoing campaign performance.",
          features: [
            "Scalable content optimisation guidelines by context",
            "Data-driven creative accountability framework",
            "Long-term ability to forecast RoAS by creative type and placement",
          ],
        },
      ],
    },
    results: {
      title: "The Results",
      description:
        "By applying predictive salience analysis and behaviour-led content optimisation, Bose achieved measurable performance improvements across key advertising metrics within the first campaign cycle.",
      metrics: [
        {
          value: "+24%",
          label: "Return on Ad Spend (RoAS)",
          change: "↑ exceeded +10% goal across all retailers",
          color: "green",
        },
        {
          value: "120",
          label: "Ad Visuals Optimised",
          change: "Processed and refined pre-deployment for contextual relevance",
          color: "blue",
        },
        {
          value: "3",
          label: "Online Retail Platforms",
          change: "Campaigns aligned and analysed across multiple e-commerce partners",
          color: "purple",
        },
        {
          value: "100+",
          label: "AI Salience Correlations",
          change: "Mapped ad visuals against real-world performance metrics",
          color: "orange",
        },
      ],
    },
    keyLearnings: {
      title: "Key Learnings & Insights",
      description: "Critical discoveries that drove Bose's success and can be applied to similar businesses.",
      categories: [
        {
          icon: "Eye",
          title: "User Behavior Insights",
          // color: "blue",
          items: [
            "Consumers interacted differently across devices, browsing on mobile but purchasing on desktop",
            "High Click-Through-Rates were misleading, as they did not translate to conversions",
            "Engagement patterns revealed intent varied by context and moment of exposure",
          ],
        },
        {
          icon: "BarChart3",
          title: "Performance Insights",
          // color: "green",
          items: [
            "Return on Ad Spend increased by 24%, surpassing the target by 140%",
            "Ad visuals optimised through predictive salience achieved measurable improvements across platforms",
            "Correlation analysis identified specific placements where faulty metrics skewed performance evaluation",
          ],
        },
        {
          icon: "Target",
          title: "Strategic Insights",
          // color: "orange",
          items: [
            "High CTR did not indicate campaign success, true performance came from contextual alignment",
            "Predictive salience analysis proved that ad effectiveness depends on placement and audience intent",
            "Dynamic brand guidelines enabled scalable, accountable creative optimisation for future campaigns",
          ],
        },
      ],
    },
    relatedCaseStudies: [
      {
        badge: "E-commerce",
        metric: "+156%",
        metricColor: "green",
        title: "ShopFast",
        description: "Online retailer increased conversion rates and reduced cart abandonment.",
      },
      {
        badge: "Media",
        metric: "+124%",
        metricColor: "purple",
        title: "NewsHub",
        description: "Digital media company optimized content layout for better engagement.",
      },
      {
        badge: "Healthcare",
        metric: "+167%",
        metricColor: "red",
        title: "MedCenter",
        description: "Healthcare provider improved patient portal usage and satisfaction.",
      },
    ],
    cta: {
      title: "Ready to Achieve Similar Results?",
      description:
        "Join TechCorp and hundreds of other businesses that have transformed their content performance with optml.ai. Start your optimization journey today.",
      benefits: ["14-day free trial", "No credit card required", "5-minute setup", "Cancel anytime"],
    },
  },
  {
    slug: "unilever-lux-botanicals",
    meta: {
      title: "Unilever – Lux Success Story",
      company: "Unilever – Lux",
      industry: "FMCG / Personal Care",
      duration: "30 Days",
    },
    hero: {
      badges: [
        { icon: "Building2", label: "FMCG", variant: "secondary" as const },
        { icon: "Clock", label: "30 Days", variant: "outline" as const },
      ],
      title: "How Lux Drove Brand & Range Sales Correlation by",
      titleHighlight: "+86%",
      description:
        "Unilever tested Lux ‘Natural Lovers’ entrance-screen ads over 30 days to measure noticeability, relevance, and sales linkage. The analysis showed the strongest lift at the Lux brand level, positive range-level correlation for Botanicals, and clear creative patterns by ingredient and format.",
      keyMetrics: [
        {
          value: "+86%",
          label: "Brand-Level Correlation vs Control (Lux total)",
          color: "green",
        },
        {
          value: "+56%",
          label: "Range-Level Correlation Lift (vs category base)",
          color: "blue",
        },
        {
          value: "0.214",
          label: "Correlation (Lux Botanicals)",
          color: "purple",
        },
        {
          value: "1.07s",
          label: "Avg View Time – Best Ad (Camomile Gel)",
          color: "orange",
        },
      ],
      image: {
        src: "/lux-natural-lovers-entrance-screen.jpg",
        alt: "Lux ‘Natural Lovers’ screen placement at store entrance",
      },
      performanceIndicators: [
        { value: "+154%", label: "Relevance Lift (Supermarket vs Grocery)", color: "green" },
        { value: "2.3x", label: "Total Conversion (0.7% vs 0.3%)", color: "blue" },
        { value: "0.72%", label: "Best Ad Conversion (Camomile Gel)", color: "purple" },
      ],
    },

    companyProfile: {
      name: "Unilever – Lux",
      subtitle: "FMCG | Personal Care",
      details: [
        { label: "Industry", value: "Consumer Goods & Personal Care" },
        { label: "Company Size", value: "150,000+ employees" },
        { label: "Products Analysed", value: "Lux ‘Natural Lovers’ (Botanicals) Range" },
        { label: "Location", value: "United Arab Emirates" },
        { label: "Project Duration", value: "30 days (Nov 30 – Dec 30, 2019)" },
      ],
    },

    timeline: [
      {
        week: "Week 1: Setup & Zoning",
        description: "Entrance screen placements; shopper zone mapping (transition, impulse, destination).",
        status: "completed" as const,
      },
      {
        week: "Week 2: Creative Analysis",
        description: "Variant-level review (gel vs bar); ingredient familiarity; layout clarity.",
        status: "completed" as const,
      },
      {
        week: "Week 3: Sales Correlation",
        description: "Link ad exposure with EPOS data (brand, range, category).",
        status: "completed" as const,
      },
      {
        week: "Week 4: Recommendations",
        description: "Simplify messaging; hero ingredient/variant; add incentive/CTA.",
        status: "success" as const,
      },
    ],

    objective: {
      title: "The Objective",
      description:
        "Validate whether entrance-screen ads for Lux ‘Natural Lovers’ drive shopper noticeability, relevance, and measurable sales correlation across retail environments.",
      goals: [
        {
          title: "Primary Goal",
          description:
            "Measure ad noticeability and relevance by zone and channel; determine linkage to sales at brand and range level.",
          color: "blue",
        },
        {
          title: "Success Metrics",
          description:
            "Demonstrate positive correlation for Lux Botanicals and stronger brand-level correlation vs control.",
          color: "purple",
        },
        {
          title: "Timeline",
          description:
            "30-day campaign with viewership/relevance tracking and monthly EPOS correlation.",
          color: "green",
        },
      ],
    },

    challenge: {
      title: "The Challenge",
      description:
        "Proving that ‘relevance’ observed at store entrances translates into sales—within constrained data granularity and varied store formats.",
      keyProblems: {
        title: "Key Problems",
        items: [
          "Crowded visuals and multiple variants diluted key messages (bar formats underperformed).",
          "Unrecognizable ingredients (e.g., fig) reduced attention and conversion.",
          "Limited time in transition zones constrained message absorption.",
          "Lack of clear CTAs reduced actionability at the shelf.",
        ],
        color: "red",
      },
      businessImpact: {
        title: "Business Impact",
        items: [
          "Lower conversion for busy layouts and unfamiliar ingredient creatives.",
          "Hard to separate brand halo effects from range-specific impact.",
          "Monthly EPOS granularity limited direct regression—required pattern-based correlation.",
          "Channel differences (supermarket vs grocery) complicated evaluation without zoning context.",
        ],
        color: "blue",
      },
    },

    solution: {
      title: "The Solution",
      description:
        "Run a zoned behavioural evaluation and multi-level correlation analysis, paired with creative effectiveness auditing, to isolate what drives relevance and sales.",
      steps: [
        {
          number: 1,
          title: "Map Shopper Zones & Channels",
          description:
            "Assess transition, impulse, destination; compare supermarket vs grocery entrances.",
          features: [
            "Identified 154% higher relevance at supermarket entrances vs grocery.",
            "Explained conversion differences via trolley-area attention window.",
            "Benchmarked detection, view, and relevant view rates by channel.",
          ],
        },
        {
          number: 2,
          title: "Analyse Creative & Content",
          description:
            "Evaluate gel vs bar, ingredient familiarity, message clarity, and layout density.",
          features: [
            "Confirmed Camomile Gel as best performer (longest view time, top conversion).",
            "Validated recognizable ingredients (Aloe Vera, Lotus) increase relevance.",
            "Flagged busy bar visuals and unclear benefits as performance risks.",
          ],
        },
        {
          number: 3,
          title: "Correlate with Sales",
          description:
            "Link screen presence to monthly EPOS (category, Lux total, Botanicals).",
          features: [
            "0.256 brand correlation (Lux total), +86% vs control.",
            "0.214 range correlation (Botanicals), +56% vs control.",
            "Low category-wide correlation indicates limited spillover beyond Lux.",
          ],
        },
        {
          number: 4,
          title: "Optimize Strategy",
          description:
            "Turn findings into guidelines that lift both relevance and purchase.",
          features: [
            "Simplify: focus on one hero ingredient and variant.",
            "Incentivize: add clear CTA and in-store offer reminder.",
            "Localize around familiar ingredients for faster recognition.",
          ],
        },
      ],
    },

    results: {
      title: "The Results",
      description:
        "Entrance screens delivered measurable sales linkage—strongest at the brand level—with clear creative patterns that inform future optimization.",
      metrics: [
        {
          value: "+86%",
          label: "Brand-Level Correlation (Lux total vs control)",
          change: "0.256 vs 0.137 control",
          color: "green",
        },
        {
          value: "+56%",
          label: "Range-Level Lift (Botanicals vs control)",
          change: "0.214 vs 0.137 control",
          color: "blue",
        },
        {
          value: "0.7% vs 0.3%",
          label: "Total Conversion (Supermarket vs Grocery)",
          change: "2.3x difference in entrance performance",
          color: "purple",
        },
        {
          value: "0.72% / 1.07s",
          label: "Best Ad (Camomile Gel)",
          change: "Top conversion and longest average view time",
          color: "orange",
        },
      ],
    },

    keyLearnings: {
      title: "Key Learnings & Insights",
      description:
        "What drove measurable impact and how to replicate it across future campaigns.",
      categories: [
        {
          icon: "Eye",
          title: "User Behavior Insights",
          // color: "blue",
          items: [
            "Transition zones create awareness; destination zones convert—optimize messaging by zone.",
            "Recognizable ingredients (Aloe Vera, Lotus) drive attention and dwell time.",
            "Busy visuals reduce processing time and suppress conversion in fast-moving areas.",
          ],
        },
        {
          icon: "BarChart3",
          title: "Performance Insights",
          // color: "green",
          items: [
            "Gels outperformed bars due to clearer, less crowded compositions.",
            "Supermarkets delivered 154% higher relevance than groceries at entrances.",
            "Brand halo effects can exceed range recall when creatives are cluttered.",
          ],
        },
        {
          icon: "Target",
          title: "Strategic Insights",
          // color: "orange",
          items: [
            "Simplify visuals around a single hero ingredient/variant and add a clear CTA.",
            "Pair screen exposure with in-store incentives to bridge awareness to purchase.",
            "Use correlation at brand/range levels when EPOS granularity limits direct attribution.",
          ],
        },
      ],
    },

    relatedCaseStudies: [
      {
        badge: "FMCG",
        metric: "+24% RoAS",
        metricColor: "green",
        title: "Bose",
        description: "Context-based creative optimization lifted RoAS across retailers.",
      },
      {
        badge: "Retail Media",
        metric: "0.31→0.52",
        metricColor: "purple",
        title: "Category Screens",
        description: "Zoned messaging improved relevant views at store entrances.",
      },
      {
        badge: "CPG",
        metric: "+19%",
        metricColor: "red",
        title: "Shelf Trials",
        description: "Hero-variant simplification increased product-level off-take.",
      },
    ],

    cta: {
      title: "Ready to Link Relevance to Sales?",
      description:
        "See how behaviour-led creative testing and correlation analysis can unlock measurable in-store impact for your brand.",
      benefits: ["Fast setup", "Actionable creative insights", "Zoned reporting", "Scalable playbooks"],
    },
  }



]
