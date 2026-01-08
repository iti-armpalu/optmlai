import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
// import { Toaster } from "sonner"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "optml.ai - Content Optimization with Smart Heatmapping",
  description:
    "Optimize your content with AI-powered heatmapping and analytics. Seamlessly integrate with your favorite content creation tools.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <body className={inter.className} >
        <Header />
        {children}
        {/* <Toaster position="top-right" /> */}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
