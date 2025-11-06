export const platformCategories = [
    {
      category: "Design Tools",
      platforms: [
        { name: "Figma", logo: "🎨", description: "Collaborative interface design tool" },
        { name: "Canva", logo: "🖼️", description: "Graphic design and visual content" },
        { name: "Adobe XD", logo: "🔷", description: "UI/UX design and prototyping" },
        { name: "Sketch", logo: "💎", description: "Digital design toolkit for Mac" },
        { name: "InVision", logo: "🌈", description: "Digital product design platform" },
        { name: "Framer", logo: "⚡", description: "Interactive design and prototyping" },
      ],
    },
    {
      category: "Ad Platforms",
      platforms: [
        { name: "Google Ads", logo: "🔍", description: "Search and display advertising" },
        { name: "Facebook Ads", logo: "📘", description: "Social media advertising" },
        { name: "LinkedIn Ads", logo: "💼", description: "B2B professional advertising" },
        { name: "TikTok Ads", logo: "🎵", description: "Short-form video advertising" },
        { name: "Twitter/X Ads", logo: "🐦", description: "Real-time social advertising" },
        { name: "Pinterest Ads", logo: "📌", description: "Visual discovery advertising" },
      ],
    },
    {
      category: "Creative Suites",
      platforms: [
        { name: "Adobe Creative Cloud", logo: "🎭", description: "Complete creative software suite" },
        { name: "Affinity Designer", logo: "🎪", description: "Professional graphic design" },
        { name: "CorelDRAW", logo: "🖌️", description: "Vector illustration and design" },
        { name: "Procreate", logo: "🎨", description: "Digital illustration on iPad" },
        { name: "Blender", logo: "🔮", description: "3D creation and rendering" },
        { name: "Cinema 4D", logo: "🎬", description: "3D modeling and animation" },
      ],
    },
    {
      category: "Landing Page Builders",
      platforms: [
        { name: "Unbounce", logo: "🚀", description: "Landing page builder and optimizer" },
        { name: "Leadpages", logo: "📄", description: "High-converting landing pages" },
        { name: "Instapage", logo: "⚡", description: "Post-click optimization platform" },
        { name: "ClickFunnels", logo: "🎯", description: "Sales funnel builder" },
        { name: "Carrd", logo: "📱", description: "Simple, responsive one-page sites" },
        { name: "Webflow", logo: "🌊", description: "Visual web design platform" },
      ],
    },
  ]
  
  export const features = [
    {
      icon: "Eye",
      title: "Visual Attention Heatmaps",
      description: "See exactly where users look first and what captures their attention",
    },
    {
      icon: "Target",
      title: "Context-Aware Analysis",
      description: "AI understands the viewing context and provides channel-specific recommendations",
    },
    {
      icon: "TrendingUp",
      title: "Real-Time Optimization",
      description: "Get instant suggestions to improve engagement and conversions",
    },
    {
      icon: "BarChart3",
      title: "Performance Tracking",
      description: "Track how content changes impact key metrics over time",
    },
  ]
  
  export const heroContent = {
    badge: "Universal Browser Extension",
    title: "Analyze Any Website, Instantly",
    titleHighlight: "Any Website",
    description:
      "Our browser extension works seamlessly with every website and platform. Install once in 30 seconds, then analyze and optimize content anywhere on the web - from your own sites to competitor pages.",
    benefits: ["30-second install", "No coding required", "Works everywhere"],
  }
  
  export const heroButtons = [
    {
      variant: "default" as const,
      size: "lg" as const,
      href: "/signup",
      text: "Install Extension Free",
      icons: ["Download", "ArrowRight"],
    },
    {
      variant: "outline" as const,
      size: "lg" as const,
      href: "/schedule-demo",
      text: "Watch Demo",
      icons: ["Play"],
    },
  ]
  
  export const howItWorksContent = {
    title: "Get Started in 3 Simple Steps",
    description:
      "Install the optml.ai browser extension and start analyzing any website instantly. No technical setup, no code changes, no complicated configuration.",
    cardTitle: "Browser Extension",
    cardDescription: "One extension. Unlimited websites. Instant AI-powered insights.",
    steps: [
      {
        number: 1,
        title: "Install Extension",
        description: "Add optml.ai from Chrome Web Store or Firefox Add-ons in seconds",
      },
      {
        number: 2,
        title: "Visit Any Website",
        description: "Navigate to any page you want to analyze - yours or competitors'",
      },
      {
        number: 3,
        title: "Click & Analyze",
        description: "Click the extension icon to get instant AI heatmaps and recommendations",
      },
    ],
    extensionFeatures: [
      {
        title: "Universal Compatibility",
        description: "Works on any website, any platform, any CMS",
      },
      {
        title: "Real-Time Analysis",
        description: "Get instant insights as you browse and test changes",
      },
      {
        title: "No Code Required",
        description: "Zero technical setup or website modifications needed",
      },
      {
        title: "Competitive Intelligence",
        description: "Analyze competitor pages to understand what works",
      },
      {
        title: "AI-Powered Heatmaps",
        description: "Visual attention maps show what users notice first",
      },
      {
        title: "Actionable Recommendations",
        description: "Get specific suggestions to improve performance",
      },
    ],
    trialInfo: "Free 14-day trial • No credit card required • Cancel anytime",
  }
  
  export const extensionInstallButtons = [
    {
      variant: "default" as const,
      size: "lg" as const,
      href: "/signup",
      text: "Add to Chrome",
      icon: "Chrome",
    },
    {
      variant: "outline" as const,
      size: "lg" as const,
      href: "/signup",
      text: "Add to Firefox",
      icon: "Firefox",
      className: "bg-transparent",
    },
  ]
  
  export const useCases = [
    {
      icon: "Layers",
      title: "Pre-Launch Testing",
      description:
        "Test ad creatives and landing pages before launch. See which design variations will capture attention and drive action before spending ad budget.",
    },
    {
      icon: "Target",
      title: "Design Validation",
      description:
        "Validate design decisions with data. Show stakeholders objective AI analysis of which elements will perform best, reducing subjective design debates.",
    },
    {
      icon: "TrendingUp",
      title: "Creative Optimization",
      description:
        "Iterate on creative assets quickly. Export from Figma or Canva, analyze with optml.ai, refine, and repeat until you have a winner.",
    },
    {
      icon: "BarChart3",
      title: "A/B Test Prediction",
      description:
        "Before running expensive A/B tests, use optml.ai to predict which variations will perform better. Save time and budget by testing winners first.",
    },
    {
      icon: "Eye",
      title: "Client Presentations",
      description:
        "Present design options backed by AI heatmaps. Show clients exactly where their audience will look and what messages will resonate most.",
    },
    {
      icon: "Zap",
      title: "Competitive Analysis",
      description:
        "Analyze competitor ads and landing pages to understand what makes them effective. Apply those insights to your own creative work.",
    },
  ]
  
  export const ctaContent = {
    title: "Ready to Start Analyzing?",
    description:
      "Install the optml.ai browser extension and start getting AI-powered insights on any website in 30 seconds.",
    trialInfo: "14-day free trial • 30-second install • No credit card required",
  }
  
  export const ctaButtons = [
    {
      variant: "secondary" as const,
      size: "lg" as const,
      href: "/signup",
      text: "Install Extension Free",
      icons: ["Download", "ArrowRight"],
    },
    {
      variant: "outline" as const,
      size: "lg" as const,
      href: "/schedule-demo",
      text: "Watch Demo",
      icons: ["Play"],
      className: "bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10",
    },
  ]
  
  export const featuresGridContent = {
    title: "Powerful Features in Every Analysis",
    description: "Every page you analyze with the browser extension gets the full power of optml.ai's AI engine.",
  }
  
  export const compatiblePlatformsContent = {
    title: "Works With Your Creative Workflow",
    description:
      "Whether you're designing in Figma, creating ads in Canva, or building landing pages, optml.ai analyzes your published content instantly. Design anywhere, optimize everywhere.",
    footerText:
      "Design your creative assets in your favorite tool, publish them anywhere, and analyze their performance with optml.ai.",
    footerSubtext: "If it's live on the web, optml.ai can analyze it. No exceptions.",
  }
  
  export const useCasesContent = {
    title: "Design-to-Performance Workflow",
    description: "optml.ai bridges the gap between creative design and real-world performance. Here's how teams use it.",
  }
  