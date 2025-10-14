import type { LucideIcon } from "lucide-react";
import { Calendar, Clock, User, CheckCircle } from "lucide-react";

// Hero
export type ScheduleDemoHero = {
    heading: string;
    subheading: string;
};

export const scheduleDemoHero: ScheduleDemoHero = {
    heading: "Schedule Your Demo",
    subheading:
        "See optml.ai in action with a personalized demo tailored to your content optimization needs.",
} as const;

// Demo info
export type DemoInfoPoint = {
    id: string;
    icon: LucideIcon;
    title: string;
    description: string;
};

export type DemoHighlight = string;

export const demoInfo = {
    whatToExpect: {
        title: "What to Expect",
        headerIcon: Calendar,
        points: [
            {
                id: "duration",
                icon: Clock,
                title: "30-Minute Session",
                description:
                    "A focused demo covering your specific use cases and questions.",
            },
            {
                id: "personal",
                icon: User,
                title: "Personal Demo",
                description:
                    "One-on-one session with our product specialist.",
            },
            {
                id: "qa",
                icon: CheckCircle,
                title: "Live Q&A",
                description:
                    "Get answers to all your questions about optml.ai.",
            },
        ] as const satisfies readonly DemoInfoPoint[],
    },
    highlights: {
        title: "Demo Highlights",
        bulletIcon: CheckCircle,
        items: [
            "Real-time heatmap visualization",
            "AI-powered content optimization",
            "Integration with your current tools",
            "Performance analytics dashboard",
            "Custom pricing discussion",
        ] as const satisfies readonly DemoHighlight[],
    },
} as const;

