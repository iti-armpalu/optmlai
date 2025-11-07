import { ctaData } from "./_data"
import { CTA } from "@/components/sections/cta"
import { CompetitiveAdvantageSection } from "./_components/competitive-advantage"
import { UseCasesSection } from "./_components/use-cases"
import { HowToUseSection } from "./_components/how-to-use"
import { HeroSection } from "./_components/hero"
import { ProductStorySection } from "./_components/product-story";
import { HowOptmlaiWorksSection } from "./_components/how-optmlai-works";

export default function ProductPage() {
    return (
        <div className="flex flex-col min-h-screen">

            <main className="flex-1">
                {/* Hero Section */}
                <HeroSection />

                {/* Product Story Section */}
                <ProductStorySection />

                {/* How optml.ai Works Section */}
                <HowOptmlaiWorksSection />

                {/* How to Use the Plugin Section */}
                <HowToUseSection />

                {/* Use Cases Section */}
                <UseCasesSection />

                {/* Competitive Advantage */}
                <CompetitiveAdvantageSection />

                <CTA
                    title={ctaData.title}
                    description={ctaData.description}
                    buttonText={ctaData.buttonText}
                    buttonLink={ctaData.buttonLink}
                    demoButtonText={ctaData.demoButtonText}
                    disclaimer={ctaData.disclaimer}
                />
            </main>
        </div>
    )
}
