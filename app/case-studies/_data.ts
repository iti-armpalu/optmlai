// app/case-studies/_data.ts
import type { LucideIcon } from "lucide-react";
import { BarChart3, Zap, TrendingUp, Check } from "lucide-react";

// Hero section
export const heroSection = {
  heading: "Real Results from Real Businesses",
  subheading:
    "Discover how companies across industries have transformed their content performance with optml.ai's AI-powered optimization platform.",
  gradient: "bg-gradient-to-br from-primary/5 via-background to-secondary/5",
} as const;

// Success stories
export const successStoriesSection = {
  heading: "Success Stories Across Industries",
  subheading:
    "See how optml.ai drives measurable results for businesses of all sizes.",
} as const;


// Case studies
export interface CaseStudy {
  slug: string
  title: string
  industry: string
  descriptionShort: string
  descriptionLong: string
  kpis?: {
    label: string
    value: string
    colorClass?: string
  }[]
  quote?: string;
  meta: {
    title: string
    company: string
    industry: string
    duration: string
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
  image: {
    src: string
    alt: string
  }
  isFeatured: boolean
  tags: string[]
  date: string
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "bose-roas-context-optimisation",
    title: "How Solouq Increased Bose’s RoAS by Contextual Content Optimization",
    industry: "Consumer Electronics",
    descriptionShort: "Solouq boosted Bose’s Return on Ad Spend (RoAS) by 24% through predictive content optimization. By analyzing over 100 ad visuals across three retailers, the team identified how context and device type impact ad performance along the purchase journey.",
    descriptionLong: "Solouq partnered with Bose to improve ad performance across major online retailers. Using predictive salience technology, over 100 visuals were analyzed to align creative with shopper behavior. The analysis revealed that high CTR didn’t equal conversions, especially on mobile. By optimizing ad content by context and platform, Solouq achieved a 24% RoAS increase and created reusable, data-driven guidelines for future campaigns.",
    kpis: [
      { "label": "RoAS Increase", "value": "↑ 24%", "colorClass": "text-emerald-600" },
      { "label": "Ad Visuals Analyzed", "value": "100+", "colorClass": "text-sky-600" },
      { "label": "Retailers Covered", "value": "3", "colorClass": "text-amber-600" }
    ],
    quote: '“By connecting ad salience with purchase behavior, we helped Bose focus on what works where and why.”',
    meta: {
      title: "Bose Success Story",
      company: "Bose",
      industry: "Consumer Electronics",
      duration: "30 Days",
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
      { "week": "Week 1: Data Collection & Setup", "description": "Collected campaign data and initial success metrics from 3 retailers.", "status": "completed" },
      { "week": "Week 2-3: Metric Correlation Analysis", "description": "Correlated CTR and RoAS data; identified inverse relationship on mobile ads.", "status": "completed" },
      { "week": "Week 4-5: Predictive Salience Testing", "description": "Ran predictive salience analysis on 120 visuals pre-deployment.", "status": "completed" },
      { "week": "Week 6-8: Optimization & Delivery", "description": "Delivered contextual optimization guidelines with 24% RoAS improvement.", "status": "success" }
    ],
    objective: {
      title: "Increase Return on Ad Spend through Contextual Optimization",
      description:
        "Optimise Bose's multi-retailer digital ad campaigns to increase Return on Ad Spend (RoAS) by understanding and leveraging how consumers engage with ads across devices and stages of the buying journey.",
      goals: [
        { "title": "Boost RoAS", "description": "Improve ad spend effectiveness by tailoring creative to context.", "color": "emerald" },
        { "title": "Enhance Accountability", "description": "Make performance trackable and quantifiable per placement.", "color": "sky" },
        { "title": "Develop Guidelines", "description": "Build reusable visual rules for future campaigns.", "color": "amber" }
      ],
    },
    challenge: {
      title: "Superficial Metrics and Inefficient Ad Placement",
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
      title: "Predictive Salience and Contextual Ad Optimization",
      description:
        "Solouq applied a behavioural optimisation strategy using proprietary predictive salience technology to evaluate and improve more than 100 ad visuals across Bose's campaigns",
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
      title: "24% Increase in Return on Ad Spend",
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
      title: "Data-Driven Context Matters",
      description: "Critical discoveries that drove Bose's success and can be applied to similar businesses.",
      categories: [
        {
          icon: "BookKey",
          title: "Performance Insights",
          items: [
            "High CTR doesn’t guarantee conversions.",
            "Ad success depends on placement context.",
            "Cross-device behavior impacts purchase intent."
          ]
        },
        {
          icon: "BookKey",
          title: "Strategic Takeaways",
          items: [
            "Predictive salience identifies effective visuals early.",
            "Visual hierarchy should align with buyer intent.",
            "Data-driven creative decisions scale better across platforms."
          ]
        },
        {
          icon: "BookKey",
          title: "Implementation Lessons",
          items: [
            "Integrating behavioral analytics enhances ad design.",
            "Cross-platform testing improves overall campaign efficiency.",
            "Continuous feedback loops sustain RoAS improvements."
          ]
        }
      ],
    },
    image: {
      src: "/ai-content-optimization-dashboard-with-heatmaps-an.jpg",
      alt: "Bose Dashboard Results",
    },
    isFeatured: true,
    tags: ["E-commerce", "Next.js", "Mobile"],
    date: "2024-03",
  },
  {
    slug: "unilever-lux-botanicals",
    title: "Unilever – Lux Botanicals Media Study",
    industry: "Consumer Goods",
    descriptionShort: "Unilever evaluated the Lux 'Natural Lovers' campaign’s performance in supermarkets and groceries through Solouq’s shopper behavior analytics, identifying how visual clarity, ingredient recognition, and store zoning influenced viewership, relevance, and sales correlation.",
    descriptionLong: "Unilever partnered with Solouq to evaluate the Lux 'Natural Lovers' campaign’s performance using digital screens in supermarkets and groceries. The study analyzed how visual clarity, ingredient familiarity, and shopper zoning affected engagement, relevance, and sales correlation. Results revealed that simple, focused visuals featuring recognizable ingredients significantly improved ad performance, providing clear direction for optimizing future FMCG campaigns through creative and contextual refinement.",
    kpis: [
      { label: "Lux brand sales", value: "+86%", colorClass: "text-blue-600" },
      { label: "New range sales", value: "+56%", colorClass: "text-blue-600" },
      { label: "Relevant views", value: "+10%", colorClass: "text-blue-600" },
    ],
    quote: '"The halo effect showed us that our ads worked, but AI-driven optimization revealed exactly how to make them convert better."',
    meta: {
      title: "Unilever – Lux Success Story",
      company: "Unilever",
      industry: "FMCG / Personal Care",
      duration: "30 Days",
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
      title: "Assess Digital Screen Campaign Impact",
      description:
        "Measure how digital ads for Lux’s 'Natural Lovers' range influence shopper engagement and correlate with sales performance across store formats.",
      goals: [
        { "title": "Quantify Engagement", "description": "Track viewership and relevance rates across zones.", "color": "emerald" },
        { "title": "Correlate with Sales", "description": "Identify measurable relationships between ad presence and Lux product sales.", "color": "sky" },
        { "title": "Inform Optimization", "description": "Generate insights to guide creative and placement improvements.", "color": "amber" }
      ],
    },
    challenge: {
      title: "Fragmented Shopper Attention",
      description:
        "Lux faced the challenge of converting attention from digital ads into actual purchase intent amid the complex in-store environment and cognitive biases affecting shopper behavior.",
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
      title: "Correlation-Driven Optimization",
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
      title: "Positive and Predictable Correlation",
      description:
        "The analysis confirmed that Lux ads on digital screens significantly influenced brand-level sales, showing a strong positive correlation despite limited data. Simplified visuals and familiar ingredients emerged as clear success factors for engagement and purchase intent.",
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
      title: "Clarity and familiarity boost shopper engagement",
      description:
        "What drove measurable impact and how to replicate it across future campaigns.",
      categories: [
        {
          icon: "BookKey",
          title: "Creative Effectiveness",
          items: ["Simplify visuals", "Highlight one key ingredient", "Ensure clear product benefits"]
        },
        {
          icon: "BookKey",
          title: "Behavioral Insights",
          items: ["Leverage shopper zone psychology", "Reduce clutter to increase recall", "Align visuals with purchase intent"]
        },
        {
          icon: "BookKey",
          title: "Strategic Takeaways",
          items: ["Use data-driven optimization", "Pair screens with in-store reminders", "Hero products boost range performance"]
        },
      ],
    },
    image: {
      src: "/lux-natural-lovers-entrance-screen.jpg",
      alt: "Lux ‘Natural Lovers’ screen placement at store entrance",
    },
    isFeatured: false,
    tags: ["AI", "Analytics", "Real-time"],
    date: "2024-01",
  },
  {
    slug: "spinneys-digital-media-pilot",
    title: "Spinneys Digital Media Pilot",
    industry: "Retail",
    descriptionShort: "Solouq partnered with Spinneys to measure the behavioral impact of digital screens placed at store entrances. The pilot analyzed screen placement, content, and timing to understand how in-store media influences shopper engagement and purchase intent.",
    descriptionLong: "Solouq collaborated with Spinneys to test how entrance-placed digital screens influence shopper behavior. The study tracked over 1.2 million ad plays, examining how screen location, content, and timing affected engagement. Findings showed that optimizing screen placement, using relevant visuals, and aligning messages with shopper routines increased engagement more than fourfold.",
    kpis: [
      { label: "Ad Plays", value: "1,298,510", colorClass: "text-emerald-600" },
      { label: "View Rate", value: "4.28%", colorClass: "text-amber-600" },
      { label: "Relevant View Rate", value: "26.83%", colorClass: "text-rose-600" }
    ],
    quote: '"Behavioral context (not just visibility) drives engagement. When screen placement, content relevance, and timing align with shopper intent, attention turns into meaningful action."',
    meta: {
      title: "Spinneys Digital Media Pilot – Solouq",
      company: "Spinneys",
      industry: "Retail",
      duration: "June–August 2019"
    },
    companyProfile: {
      name: "Spinneys",
      subtitle: "Supermarket Chain – UAE",
      details: [
        { label: "Headquarters", value: "Dubai, UAE" },
        { label: "Sector", value: "Retail & Consumer Goods" },
        { label: "Stores", value: "58 locations across UAE" }
      ]
    },
    timeline: [
      { week: "Week 1–2: Setup & Zoning", description: "Screen installation and shopper journey mapping", status: "completed" },
      { week: "Week 3–4: Data Collection & Observation", description: "Data collection and zone-based behavior tracking", status: "completed" },
      { week: "Week 5–7: Analysis & Correlation", description: "Performance analysis and correlation with EPOS data", status: "completed" },
      { week: "Week 8: Optimization & Reporting", description: "Optimization modeling and revenue forecast presentation", status: "success" }
    ],
    objective: {
      title: "Measure Behavioral Impact of In-Store Media",
      description: "Assess how entrance-placed digital screens affect shopper engagement and purchase intent within different store zones.",
      goals: [
        { title: "Understand Shopper Zones", description: "Identify behavioral differences between transition, impulse, and destination zones.", color: "emerald" },
        { title: "Evaluate Screen Effectiveness", description: "Quantify detection, view, and relevant view metrics versus online benchmarks.", color: "sky" },
        { title: "Optimize Revenue Model", description: "Estimate scalability and potential income from in-store digital media across locations.", color: "amber" }
      ]
    },
    challenge: {
      title: "Low Detection and Engagement Rates",
      description: "Despite high ad volume, initial detection and engagement were below network averages due to suboptimal screen placement and content timing.",
      keyProblems: {
        title: "Key Problems",
        items: [
          "Screen positioned too close to entrance flow, limiting dwell time and reducing visibility.",
          "Crowded visuals and inconsistent layout weakened message clarity and recall.",
          "Lack of motion and contrast in visuals lowered attention capture during entry moments.",
          "Content scheduling ignored shopper intent periods, causing message irrelevance."
        ],
        color: "rose"
      },
      businessImpact: {
        title: "Business Impact",
        items: [
          "Low engagement rates led to underperformance versus network benchmarks.",
          "Missed conversion opportunities during peak transition periods reduced ROI potential.",
          "Inefficient use of ad inventory resulted in lower campaign efficiency across stores.",
          "Weak content alignment with shopper mindset limited cross-category influence."
        ],
        color: "amber"
      }
    },
    solution: {
      title: "Behavioral Optimization Approach",
      description: "Solouq used behavioral analytics to redesign media zoning and optimize content strategy for maximum relevance and visibility.",
      steps: [
        {
          number: 1,
          title: "Zone Mapping",
          description: "Defined transition, impulse, and destination zones to understand behavioral context.",
          features: ["Mapped shopper movement and attention flow across entrance, aisle, and checkout zones.",
            "Explained conversion differences via trolley-area attention window.",
            "Identified high-traffic transition areas suitable for message seeding."]
        },
        {
          number: 2,
          title: "Screen Analytics",
          description: "Monitored ad plays, detections, and relevant views to identify weak points.",
          features: ["Benchmarked detection, view, and relevant view rates by channel and store type.",
            "Compared screen performance against Solouq network averages.",
            "Linked real-world shopper metrics to digital-style conversion benchmarks (0.6% baseline)."]
        },
        {
          number: 3,
          title: "Content Optimization",
          description: "Refined visuals and messaging around occasion, brand, and offer relevance.",
          features: ["Tested ad creatives with and without food imagery to gauge appetite-driven response.",
            "Highlighted clear offers and price cues to increase conversion rates.",
            "Adjusted visual hierarchy to emphasize meal occasions and brand recognition."]
        },
        {
          number: 4,
          title: "Time Relevance",
          description: "Aligned content with daypart behavior patterns for higher relevance.",
          features: ["Analyzed engagement peaks by hour to detect morning vs. evening shopper intent.",
            "Rescheduled campaigns to match meal-related missions (e.g., lunch or dinner prep).",
            "Measured incremental lift from daypart-specific creative rotations."]
        }
      ]
    },
    results: {
      title: "4.5x Increase in Relevant Views",
      description: "Optimizing location, content, and time relevance resulted in over four times more relevant views and higher shopper engagement compared to baseline performance.",
      metrics: [
        { value: "↑ 4.5x", label: "Relevant Views", change: "Improved engagement after optimization", color: "emerald" },
        { value: "↑ 1.8x", label: "Detections", change: "After repositioning screens", color: "sky" },
        { value: "↑ 48.45%", label: "Optimized Relevant View Rate", change: "Compared to 26.83% baseline", color: "amber" },
        { value: "↑ 0.74", label: "Correlation Coefficient", change: "Strong alignment between screen engagement and sales uplift", color: "rose" }
      ]
    },
    keyLearnings: {
      title: "Behavioral Design Drives Engagement ",
      description: "Screen performance in retail depends on behavioral context, content relevance, and time alignment rather than exposure alone.",
      categories: [
        {
          icon: "BookKey",
          title: "Zoning Strategy",
          items: [
            "Transition zone content seeds purchase intent",
            "Impulse zones benefit from novelty and emotion"
          ]
        },
        {
          icon: "BookKey",
          title: "Content Relevance",
          items: [
            "Occasion-led visuals outperform generic creative",
            "Offers increase attention and recall"
          ]
        },
        {
          icon: "BookKey",
          title: "Time Targeting",
          items: [
            "Align ads with shopper dayparts",
            "Missed alignment leads to drop in engagement"
          ]
        }
      ]
    },
    image: { src: "/images/case-studies/spinneys-pilot.jpg", alt: "Shoppers entering Spinneys store with digital media screen" },
    isFeatured: false,
    tags: ["retail", "digital signage", "behavioral analytics", "shopper marketing"],
    date: "2019-09-01"
  },
  {
    slug: 'american-greetings-holiday-22-shopper-optimization',
    title: 'Holiday ’22 Shopper Optimization Playbook',
    industry: 'Greeting Cards & Retail',
    descriptionShort: 'American Greetings used a Shopper Optimizer Tool to tune holiday creative by shopper zone. A clear playbook—contrast, negative space, and prioritized offers—lifted salience and conversion across Target, Walmart, and digital placements.',
    descriptionLong: 'American Greetings used a Shopper Optimizer Tool to analyze and refine over 50 holiday assets across three shopper zones: Transition, Impulse, and Destination. The team built a zone-based playbook focused on contrast, negative space, and message hierarchy. Simplified creative improved clarity, lifted ROAS in Target and Walmart placements, and created reusable design templates, speeding up production and ensuring consistency for future seasonal campaigns',
    kpis: [
      { label: 'Target Digital ROAS', value: '↑ 3×', colorClass: 'text-emerald-600' },
      { label: 'Target Offer ROAS', value: '+37% ', colorClass: 'text-emerald-600' },
      { label: 'Walmart In-Aisle ROAS', value: '+8%', colorClass: 'text-emerald-600' }
    ],
    meta: {
      title: 'Holiday ’22 Shopper Optimization | American Greetings',
      company: 'American Greetings',
      industry: 'Greeting Cards & Retail',
      duration: 'Jan–Sep 2022',
    },
    companyProfile: {
      name: 'American Greetings',
      subtitle: 'Consumer greetings & celebrations',
      details: [
        { label: 'Headquarters', value: 'TBD' },
        { label: 'Employees', value: 'TBD' },
        { label: 'Key Retail Partners', value: 'Target, Walmart, TBD' },
      ],
    },
    timeline: [
      { week: 'Week 1-2: Setup & Zoning', description: 'Licensed Shopper Optimizer Tool and set testing framework.', status: 'completed' },
      { week: 'Week 3-4: Baseline Testing', description: 'Tested Holiday ’21 and early ’22 assets to establish baselines.', status: 'completed' },
      { week: 'Week 5-8: Expansion & Diagnostics', description: 'Expanded tests across Birthday ’22 and Mother’s Day ’22 creative.', status: 'completed' },
      { week: 'Week 9-16: Rules Definition', description: 'Ran 18 additional assets; codified zone-based rules.', status: 'completed' },
      { week: 'Week 17-24: Playbook Finalization', description: 'Finalized playbook for Holiday ’22; deployed retailer-specific variants.', status: 'completed' },
      { week: 'Week 25-32: Validation & Reporting', description: 'Recorded ROAS improvements in retailer-aligned and in-aisle promos.', status: 'success' }
    ],
    objective: {
      title: 'Drive salience and conversion by shopper zone',
      description: 'Standardize creative decisions by placement and mindset to improve noticeability, clarity, and purchase action for Holiday ’22 and beyond.',
      goals: [
        { title: 'Increase Visual Salience', description: 'Make key elements pop at a glance.', color: 'emerald' },
        { title: 'Clarify Next Action', description: 'Strengthen perceptual cues and CTAs.', color: 'sky' },
        { title: 'Template for Scale', description: 'Create a reusable playbook across occasions.', color: 'amber' },
      ],
    },
    challenge: {
      title: 'Mixed salience and cluttered messaging',
      description: 'Testing revealed strong visual salience but uneven perceptual salience. Competing elements, low-contrast treatments, and small logos/hashtags diluted message clarity and slowed decision-making in key zones.',
      keyProblems: {
        title: 'Key Problems',
        items: [
          "Screen placement too close to entry flow reduced dwell time and visibility, limiting message exposure.",
          "Crowded visuals and multiple creative variants diluted key messages, lowering recall and engagement.",
          "Muted color contrast and static imagery failed to capture attention during the critical transition window.",
          "Unsequenced ad rotation led to message overlap, reducing clarity and contextual relevance."
        ],
        color: 'rose',
      },
      businessImpact: {
        title: 'Business Impact',
        items: [
          "Low detection and engagement rates compared to Solouq network benchmarks reduced campaign ROI.",
          "Inefficient ad exposure during high-traffic periods led to missed conversion opportunities.",
          "Content misalignment with shopper mindset weakened influence on in-store purchasing decisions.",
          "Underperforming creative formats (e.g., magazine and juice ads) diluted overall channel effectiveness."
        ],
        color: 'amber',
      },
    },
    solution: {
      title: 'Zone-based shopper marketing playbook',
      description: 'Build and deploy a practical ruleset per zone—Transition, Impulse, Destination—to prioritize elements, simplify layouts, and scale consistent, high-salience creative across placements.',
      steps: [
        {
          number: 1,
          title: 'Benchmark & Diagnose',
          description: 'Run 58 assets through the tool to map salience drivers and blockers by zone.',
          features: ['Explained conversion differences via attention heatmaps and eye-path sequencing.',
            'Benchmarked detection, view, and relevant view rates by channel and placement.',
            'Identified low-performing zones with cluttered layouts or weak offer prominence.'],
        },
        {
          number: 2,
          title: 'Codify the Playbook',
          description: 'Define include/remove rules and message hierarchy tailored to zone and placement.',
          features: ['Set scaling ratios for offers, logos, and supporting visuals per shopper mindset.',
            'Mapped reading flow left-to-right with single focal point per creative.',
            'Documented visual hierarchy rules to ensure message clarity and fast comprehension.'],
        },
        {
          number: 3,
          title: 'Template & Deploy',
          description: 'Create retailer-ready templates and roll out optimized creative for Holiday ’22.',
          features: ['Applied high-contrast color combinations to improve detection and recall.',
            'Reduced secondary elements to increase offer legibility and conversion cues.',
            'Validated zone-specific performance through pre-roll and in-aisle simulations.'],
        },
      ],
    },
    results: {
      title: 'Higher salience, clearer actions, stronger ROAS',
      description: 'Optimized creative improved noticeability and decision cues. Retailer-aligned digital and in-aisle promos outperformed benchmarks, validating the zone-based approach and establishing reusable standards for future occasions.',
      metrics: [
        { value: '↑ 3×', label: 'Campaign 1 ROAS uplift', change: 'from $3.00 to $9.90', color: 'emerald' },
        { value: '↑ 37%', label: 'Campaign 2 ROAS uplift', change: 'from $11.00 to $15.06', color: 'emerald' },
        { value: '↑ 8%', label: 'In-aisle channel performance', change: 'from 3.7:1 to 4:1 ROAS', color: 'emerald' },
        { value: '↑ 25%', label: 'Overall retailer campaign efficiency', change: 'vs prior seasonal benchmark', color: 'emerald' }
      ],
    },
    keyLearnings: {
      title: 'Design to mindset, not medium',
      description: 'Match message and scale to the shopper’s task. Reduce clutter, amplify contrast, and lead with the most useful element for that moment—offer at shelf, product + benefit out of department, and tight powerlines offsite.',
      categories: [
        {
          icon: "BookKey",
          title: 'Message Hierarchy',
          items: ['One primary message per asset', 'Offer or powerline leads, not both', 'Qualifiers sit directly beneath the offer'],
        },
        {
          icon: "BookKey",
          title: 'Zone Rules',
          items: ['Destination: lead with offer/value', 'Impulse: product + benefit + CTA', 'Transition: awareness powerline + clean layout'],
        },
        {
          icon: "BookKey",
          title: 'Clarity Boosters',
          items: ['Use negative space aggressively', 'Favor high contrast and large type', 'Avoid small logos/hashtags that distract'],
        },
      ],
    },
    image: {
      src: "/ai-content-optimization-dashboard-with-heatmaps-an.jpg",
      alt: 'Optimized holiday shopper marketing creative across zones',
    },
    isFeatured: false,
    tags: ['shopper marketing', 'retail media', 'creative optimization', 'ROAS', 'holiday', 'American Greetings'],
    date: '2022-09-01',
  }
]

// Helper functions
export const getFeaturedCaseStudies = () => caseStudies.filter((study) => study.isFeatured)

export const getCaseStudyBySlug = (slug: string) => caseStudies.find((study) => study.slug === slug)

export const getOtherCaseStudies = (currentSlug: string) => caseStudies.filter((study) => study.slug !== currentSlug)

// Featured
// export type FeaturedMetric = {
//   label: string;
//   value: string;
//   /** Optional: if you later show a Progress bar */
//   progress?: number; // 0..100
// };

// export type FeaturedCaseStudyData = {
//   badge: { label: string; icon: LucideIcon };
//   title: { before: string; highlight: string; after?: string };
//   slug: string;
//   description: string;
//   metrics: FeaturedMetric[];
//   ctas: {
//     primary: { label: string; icon?: LucideIcon }
//   };
//   media: {
//     src: string;
//     alt: string;
//     width: number;
//     height: number;
//   };
// };

// export const featuredCaseStudy: FeaturedCaseStudyData = {
//   badge: { label: "Featured Case Study", icon: Building2 },
//   title: { before: "How Bose Increased RoAS by ", highlight: "24%" },
//   slug: "bose-roas-context-optimisation",
//   description:
//     "Bose, a premium audio equipment manufacturer, used optml.ai to optimize their advertising campaigns across three online retailers and saw remarkable improvements in return on ad spend within 3 months.",
//   metrics: [
//     { label: "RoAS Improvement", value: "24% increase", progress: 24 },
//     { label: "Ad Visuals Optimized", value: "120 creatives", progress: 85 },
//     { label: "Online Retailers", value: "3 platforms", progress: 100 },
//   ],
//   ctas: {
//     primary: {
//       label: "Read Full Case Study",
//       icon: ArrowRight,
//     }
//   },
//   media: {
//     src: "/ai-content-optimization-dashboard-with-heatmaps-an.jpg",
//     alt: "Bose Dashboard Results",
//     width: 600,
//     height: 400
//   },
// };


// Success stories
// export type KPI = {
//   label: string;
//   value: string;           // e.g., "+156%" or "$2.4M"
//   colorClass?: string;     // Tailwind text color class
// };

// export type PrimaryDelta = {
//   value: string;
//   colorClass?: string;
// };

// export type CaseStudyShort = {
//   id: string;
//   category: string;
//   categoryIcon: LucideIcon;
//   primaryDelta: PrimaryDelta;
//   title: string;
//   slug: string;
//   description: string;
//   kpis: KPI[];
//   quote: string;
//   cta: { label: string; href?: string };
// };

// export const successStories = {
//   heading: "Success Stories Across Industries",
//   subheading:
//     "See how optml.ai drives measurable results for businesses of all sizes.",
//   cards: [
//     {
//       id: "consumer-goods",
//       category: "Consumer Goods",
//       categoryIcon: Package,
//       primaryDelta: { value: "+86%", colorClass: "text-blue-600" },
//       title: "Unilever - Lux Botanicals",
//       slug: "unilever-lux-botanicals",
//       description:
//         "Major consumer goods brand optimized in-store digital advertising to drive awareness and sales for new product range across 30 supermarket locations.",
//       kpis: [
//         { label: "Lux brand sales", value: "+86%", colorClass: "text-blue-600" },
//         { label: "New range sales", value: "+56%", colorClass: "text-blue-600" },
//         { label: "Relevant views", value: "+10%", colorClass: "text-blue-600" },
//       ],
//       quote:
//         '"The halo effect showed us that our ads worked, but AI-driven optimization revealed exactly how to make them convert better."',
//       cta: { label: "View Case Study" },
//     },
//     {
//       id: "retail",
//       category: "Retail",
//       categoryIcon: Store,
//       primaryDelta: { value: "+42%", colorClass: "text-purple-600" },
//       title: "Spinneys Supermarkets",
//       slug: "spinneys-supermarket",
//       description:
//         "Major supermarket chain optimized in-store magazine promotions for frozen vegetables using AI-powered copy testing to drive product sales across 30 locations.",
//       kpis: [
//         { label: "Frozen vegetable sales", value: "+42%", colorClass: "text-purple-600" },
//         { label: "Content engagement", value: "+28%", colorClass: "text-purple-600" },
//         { label: "Campaign ROI", value: "3.2x", colorClass: "text-purple-600" },
//       ],
//       quote:
//         '"Pre-testing copy with behavioural analysis showed us exactly which messages would resonate before we launched the campaign."',
//       cta: { label: "View Case Study" },
//     },
//     {
//       id: "cards-and-gifts",
//       category: "Cards & Gifts",
//       categoryIcon: ShoppingCart,
//       primaryDelta: { value: "+3x", colorClass: "text-green-600" },
//       title: "National Card Retailer",
//       slug: "national-card-retailer",
//       description:
//         "Leading greeting card retailer pre-tested 30 ads using AI-powered saliency testing, optimizing for both in-store and online channels before launch.",
//       kpis: [
//         { label: "Campaign 1 RoAS Uplift", value: "3x", colorClass: "text-green-600" },
//         { label: "Campaign 2 RoAS Uplift", value: "+37%", colorClass: "text-green-600" },
//         { label: "Ads Pre-Tested", value: "30 creatives" },
//       ],
//       quote:
//         '"optml.ai helped us identify exactly where customers were dropping off. The AI insights were spot-on."',
//       cta: { label: "View Case Study" },
//     },
//   ] satisfies CaseStudyShort[],
// } as const;

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

// export interface CaseStudy {
//   slug: string
//   company: string
//   industry: string
//   icon: string
//   color: string
//   headline: string
//   headlineMetric: string
//   description: string
//   objective: string
//   challenge: string
//   approach: string[]
//   metrics: {
//     label: string
//     value: string
//     color: string
//   }[]
//   quote: string
//   quoteName: string
//   quoteRole: string
//   results: string[]
//   keyInsight: string
//   impact: string
//   image?: string
//   videoUrl?: string
// }

// export const caseStudies: CaseStudy[] = [
//   {
//     slug: "bose-roas-context-optimisation",
//     company: "Bose",
//     industry: "Consumer Electronics",
//     icon: "Building2",
//     color: "primary",
//     headline: "How Bose Increased RoAS by",
//     headlineMetric: "24%",
//     description:
//       "Bose, a premium audio equipment manufacturer, used optml.ai to optimize their advertising campaigns across three online retailers and saw remarkable improvements in return on ad spend within 3 months.",
//     objective:
//       "Bose aimed to increase their return on advertising spend (RoAS) across multiple online retail channels. They needed to understand how their ad creatives performed in different contexts and optimize accordingly.",
//     challenge:
//       "Understanding which ad creative performed best and optimizing to make sure it was the advert and not the media screen that was noticed. Generate content that had relevance to the buyer at that moment.",
//     approach: [
//       "Combined anonymous video analytics with proprietary AI-driven predictive salience technology",
//       "Analyzed 120 ad creatives across 3 major online retailers",
//       "Identified where consumers were noticing the content and if they stopped to view the ad",
//       "Correlated ad performance with sales data across different retail contexts",
//       "Provided optimization recommendations based on context-aware performance data",
//     ],
//     metrics: [
//       { label: "RoAS Improvement", value: "+24%", color: "green" },
//       { label: "Ad Visuals Optimized", value: "120", color: "blue" },
//       { label: "Online Retailers", value: "3", color: "purple" },
//       { label: "Revenue Impact", value: "$1.2M", color: "green" },
//     ],
//     quote:
//       "optml.ai's context-aware optimization showed us exactly which creatives worked best on each platform. The insights were invaluable for improving our RoAS.",
//     quoteName: "Marketing Director",
//     quoteRole: "Bose Corporation",
//     results: [
//       "Achieved 24% increase in return on advertising spend",
//       "Optimized 120 ad creatives for context-specific performance",
//       "Generated $1.2M additional revenue in first 3 months",
//       "Reduced wasted ad spend by identifying underperforming creatives",
//       "Established data-driven framework for future ad optimization",
//     ],
//     keyInsight:
//       "Context matters tremendously in advertising. The same ad creative can perform dramatically differently depending on where and how it's displayed. By understanding these contextual factors, Bose was able to optimize each creative for its specific placement.",
//     impact:
//       "This case study demonstrates the power of context-aware advertising optimization. By testing and optimizing ad creatives for specific retail environments and consumer mindsets, brands can significantly improve their advertising ROI without increasing spend.",
//     image: "/ai-content-optimization-dashboard-with-heatmaps-an.jpg",
//   },
//   {
//     slug: "unilever-lux-botanicals",
//     company: "Unilever - Lux Botanicals",
//     industry: "Consumer Goods",
//     icon: "Package",
//     color: "green",
//     headline: "How Unilever Increased Lux Sales by",
//     headlineMetric: "86%",
//     description:
//       "Unilever used optml.ai to optimize in-store digital advertising for their Lux Botanicals range across 30 supermarket locations, achieving remarkable sales improvements.",
//     objective:
//       "Unilever intended to increase awareness and sales of their range of Lux products by placing an advert on a digital media screen at the entrance of supermarkets. They needed to understand if their content had stopping power and relevancy to convert.",
//     challenge:
//       "Understand which ad layout performed the best and optimize to make sure it was the advert and not the media screen that was noticed. Generate content that had relevance to the buyer at that moment. Define if the content drove new range sales alongside overall Lux sales.",
//     approach: [
//       "Combined anonymous video analytics with proprietary AI-driven predictive salience technology",
//       "Recorded campaign data across 30 supermarket stores",
//       "Identified where consumers were noticing the content and if they stopped to view the ad",
//       "Correlated screen presence with category sales, Lux sales, and new range sales",
//       "Provided optimization recommendations based on sales uplift per advert",
//     ],
//     metrics: [
//       { label: "Lux Brand Sales", value: "+86%", color: "green" },
//       { label: "New Range Sales", value: "+56%", color: "green" },
//       { label: "Relevant Views", value: "+10%", color: "green" },
//       { label: "Store Locations", value: "30", color: "blue" },
//     ],
//     quote:
//       "The halo effect showed us that our ads worked, but AI-driven optimization revealed exactly how to make them convert better. We need to simplify copy and better incentivize new product sales.",
//     quoteName: "Brand Manager",
//     quoteRole: "Unilever",
//     results: [
//       "86% increase in Lux branded product sales vs control group",
//       "56% increase in new range sales vs control group",
//       "10% increase in relevant views (consumers who stopped to fully absorb content)",
//       "Identified key ad optimization opportunities: simplify copy & incentivize new products",
//     ],
//     keyInsight:
//       "We expect a halo effect, but the fact that Lux as a whole benefitted more than the range that was on the screen tells us that the ads worked, but needed optimization. The right message at the right moment can drive category-wide sales lift.",
//     impact:
//       "This case study highlights the value of product-based content optimization. By pretesting ads with an Agentic AI plugin, brands can determine the correct copy for an ad placement ahead of launch. Ensure that the new range attracts more attention than the overall product messaging to drive better conversions.",
//   },
//   {
//     slug: "spinneys-frozen-vegetables",
//     company: "Spinneys Supermarkets",
//     industry: "Retail",
//     icon: "Store",
//     color: "blue",
//     headline: "How Spinneys Increased Frozen Vegetable Sales by",
//     headlineMetric: "42%",
//     description:
//       "Major supermarket chain optimized in-store magazine promotions for frozen vegetables using AI-powered copy testing to drive product sales across 30 locations.",
//     objective:
//       "Drive sales of frozen vegetables via promotion of in-store magazine. Determine relevance of copy based on pre-testing content using behavioural analysis of the content.",
//     challenge:
//       "How to drive sales of frozen vegetables to consumers entering the store. Demonstrate that relevant copy matters to evoke the desire to create a dish the consumer hadn't yet considered.",
//     approach: [
//       "Combined anonymous video analytics with proprietary behavioural analysis technology",
//       "Recorded campaign data across 30 supermarket stores",
//       "Identified where consumers were noticing the content and if they stopped to view the ad",
//       "Deliberately disrupted the campaign by running copy we knew contained incorrect content to verify performance factors",
//       "Tracked ad views correlated to sales data",
//       "Compared expectations of success with campaign data to verify content that drives performance",
//     ],
//     metrics: [
//       { label: "Frozen Vegetable Sales", value: "+42%", color: "blue" },
//       { label: "Content Engagement", value: "+28%", color: "blue" },
//       { label: "Campaign ROI", value: "3.2x", color: "blue" },
//       { label: "Store Locations", value: "30", color: "purple" },
//     ],
//     quote:
//       "Pre-testing copy with behavioural analysis showed us exactly which messages would resonate before we launched the campaign. The ability to test and validate content saved us significant time and budget.",
//     quoteName: "Marketing Director",
//     quoteRole: "Spinneys Supermarkets",
//     results: [
//       "42% increase in frozen vegetable sales",
//       "28% increase in content engagement (consumers stopping to view)",
//       "3.2x return on investment for the campaign",
//       "Validated which copy elements drove performance through deliberate testing",
//       "Established a framework for future promotional content optimization",
//     ],
//     keyInsight:
//       "Relevant copy matters tremendously at the point of purchase. By pre-testing content and understanding what resonates with shoppers entering the store, brands can evoke desire for products consumers hadn't planned to buy.",
//     impact:
//       "This case study demonstrates the power of behavioural pre-testing. By testing content before launch and deliberately validating what works, retailers can optimize promotional campaigns to drive significant sales increases without additional media spend.",
//   },
//   {
//     slug: "card-retailer-saliency-testing",
//     company: "National Card Retailer",
//     industry: "Cards & Gifts",
//     icon: "CreditCard",
//     color: "green",
//     headline: "How a Card Retailer Achieved",
//     headlineMetric: "3x RoAS",
//     description:
//       "Leading greeting card retailer pre-tested 30 ads using AI-powered saliency testing, optimizing for both in-store and online channels before launch.",
//     objective:
//       "Understand how saliency testing can increase ad performance both in-store and online. Balance content and attention to relevant messaging while preserving essential elements like coupons and offer codes.",
//     challenge:
//       "Due to the nature of campaigns with many coupons and offer codes, the retailer needed to find the right balance of content and attention to relevant messaging without removing too much from the ads.",
//     approach: [
//       "Used AI heatmap alongside commerce guidelines for in-store retail and online to pre-test campaign artwork before launch",
//       "Tested 30 ads across desktop, mobile, and in-store placements",
//       "Scored each advert for visual salience (level of attention capture)",
//       "Discounted 3 ads due to low visual salience scores",
//       "Scored remaining ads for cognitive salience (correct message for intended context)",
//       "Sent optimization recommendations back to designers to tweak adverts for launch",
//       "Tracked sales data for each advert and calculated ROAS scores",
//     ],
//     metrics: [
//       { label: "Campaign 1 RoAS Uplift", value: "3x", color: "green" },
//       { label: "Campaign 2 RoAS Uplift", value: "+37%", color: "green" },
//       { label: "Ads Pre-Tested", value: "30", color: "blue" },
//       { label: "Low-Performers Caught", value: "3", color: "orange" },
//     ],
//     quote:
//       "Pre-testing with optml.ai eliminated costly A/B testing. We launched the right ads from day one, optimized for each stage of the buyer journey. The focus became optimizing content to drive high salience based on shopper mindset and zone.",
//     quoteName: "Digital Marketing Manager",
//     quoteRole: "National Card Retailer",
//     results: [
//       "Campaign 1: 3x uplift in RoAS compared to KPI benchmark",
//       "Campaign 2: 37% uplift in RoAS compared to KPI benchmark",
//       "Prevented launch of 3 low-performing ads before any spend",
//       "Optimized remaining 27 ads for specific contexts and buyer stages",
//       "Established 'optimize content to drive high salience based on shopper mindset and zone' as core strategy",
//     ],
//     keyInsight:
//       "The right message for the right stage of the buying process is crucial. By adapting messaging to resonate with the consumer at each stage of the purchase funnel, you can gain more of their attention and drive better conversions.",
//     impact:
//       "This case study highlights the value of pre-testing with AI saliency analysis. By testing visual and cognitive salience before launch, brands can save money on costly A/B testing and launch the correct ad from the start. This approach ensures every ad dollar is optimized for its specific context and audience mindset.",
//   },
// ]

// export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
//   return caseStudies.find((cs) => cs.slug === slug)
// }

// export function getAllCaseStudySlugs(): string[] {
//   return caseStudies.map((cs) => cs.slug)
// }


// CTA
export const ctaData = {
  title: "Ready to Join Our Success Stories?",
  description: "Start your free trial today and see how optml.ai can transform your content performance in just 30 days.",
  buttonText: "Start Free Trial",
  buttonLink: "/signup",
  demoButtonText: "Schedule Demo",
  disclaimer: "Free forever • No credit card required • Premium features available",
}