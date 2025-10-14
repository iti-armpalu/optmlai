"use client"

import Link from "next/link"
import { ArrowRight, Calendar, Play } from "lucide-react"

import { Button } from "@/components/ui/button"

interface CTAProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  demoButtonText: string
  disclaimer: string
}

export function CTA({ title, description, buttonText, buttonLink, disclaimer }: CTAProps) {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{title}</h2>
            <p className="max-w-[600px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {description}
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button size="lg" variant="secondary" className="gap-2" asChild>
              <Link href={buttonLink}>
                {buttonText}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Play className="w-4 h-4" />
                Watch Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => (window.location.href = "/schedule-demo")}
              >
                <Calendar className="w-4 h-4" />
                Schedule Demo
              </Button>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/60">{disclaimer}</p>
        </div>
      </div>
    </section>
  )
}
