"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, CheckCircle, ExternalLink } from "lucide-react"
// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Form validation schema
const demoBookingSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  role: z.string().optional(),
  companySize: z.string().optional(),
  preferredTime: z.string().optional(),
  message: z.string().optional(),
})

type DemoBookingForm = z.infer<typeof demoBookingSchema>

interface BookingResult {
  id: string
  startTime: string
  endTime: string
  meetingLink?: string
}

export default function ScheduleDemoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [bookingResult, setBookingResult] = useState<BookingResult | null>(null)

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors, isSubmitting },
//   } = useForm<DemoBookingForm>({
//     resolver: zodResolver(demoBookingSchema),
//   })

//   const onSubmit = async (data: DemoBookingForm) => {
//     try {
//       const response = await fetch("/api/schedule-demo", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       })

//       const result = await response.json()

//       if (!response.ok) {
//         throw new Error(result.message || "Failed to schedule demo")
//       }

//       setBookingResult(result.event)
//       setIsSubmitted(true)
//       toast.success("Demo scheduled successfully!")
//     } catch (error) {
//       console.error("Error scheduling demo:", error)
//       toast.error(error instanceof Error ? error.message : "Failed to schedule demo. Please try again.")
//     }
//   }

  if (isSubmitted && bookingResult) {
    const startTime = new Date(bookingResult.startTime)
    const endTime = new Date(bookingResult.endTime)

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-4">
        <div className="w-full max-w-md text-center">
          <Card className="border-0 shadow-2xl">
            <CardContent className="pt-6 pb-8">
              <div className="flex flex-col items-center space-y-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
                <h2 className="text-2xl font-bold">Demo Scheduled!</h2>
                <p className="text-muted-foreground text-center">
                  Thank you for your interest in optml.ai. Your demo has been confirmed for:
                </p>

                <div className="bg-muted rounded-lg p-4 w-full">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Date:</span>
                      <span>{startTime.toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Time:</span>
                      <span>
                        {startTime.toLocaleTimeString()} - {endTime.toLocaleTimeString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Duration:</span>
                      <span>30 minutes</span>
                    </div>
                  </div>
                </div>

                {bookingResult.meetingLink && (
                  <Button asChild className="w-full bg-transparent" variant="outline">
                    <a href={bookingResult.meetingLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Join Meeting Link
                    </a>
                  </Button>
                )}

                <div className="space-y-2 text-sm text-muted-foreground text-center">
                  <p>📧 Calendar invite sent to your email</p>
                  <p>📞 We'll call you at the scheduled time</p>
                  <p>⏰ You'll receive reminders 24h and 1h before</p>
                </div>

                <Button asChild className="w-full">
                  <Link href="/">Back to Home</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">Schedule Your Demo</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See optml.ai in action with a personalized demo tailored to your content optimization needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Demo Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    What to Expect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">30-Minute Session</h4>
                      <p className="text-sm text-muted-foreground">
                        A focused demo covering your specific use cases and questions.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Personal Demo</h4>
                      <p className="text-sm text-muted-foreground">One-on-one session with our product specialist.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h4 className="font-medium">Live Q&A</h4>
                      <p className="text-sm text-muted-foreground">Get answers to all your questions about optml.ai.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Demo Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Real-time heatmap visualization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      AI-powered content optimization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Integration with your current tools
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Performance analytics dashboard
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Custom pricing discussion
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Booking Form */}
            <Card className="border-0 shadow-2xl">
              <CardHeader>
                <CardTitle>Book Your Demo</CardTitle>
                <CardDescription>Fill out the form below and we'll schedule your personalized demo.</CardDescription>
              </CardHeader>
              <CardContent>
                {/* <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        {...register("firstName")}
                        className={errors.firstName ? "border-red-500" : ""}
                      />
                      {errors.firstName && <p className="text-sm text-red-500">{errors.firstName.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        {...register("lastName")}
                        className={errors.lastName ? "border-red-500" : ""}
                      />
                      {errors.lastName && <p className="text-sm text-red-500">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Work Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input id="company" {...register("company")} className={errors.company ? "border-red-500" : ""} />
                    {errors.company && <p className="text-sm text-red-500">{errors.company.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role">Your Role</Label>
                    <Select onValueChange={(value) => setValue("role", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="content-creator">Content Creator</SelectItem>
                        <SelectItem value="marketing-manager">Marketing Manager</SelectItem>
                        <SelectItem value="product-manager">Product Manager</SelectItem>
                        <SelectItem value="founder-ceo">Founder/CEO</SelectItem>
                        <SelectItem value="developer">Developer</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="companySize">Company Size</Label>
                    <Select onValueChange={(value) => setValue("companySize", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select company size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-10">1-10 employees</SelectItem>
                        <SelectItem value="11-50">11-50 employees</SelectItem>
                        <SelectItem value="51-200">51-200 employees</SelectItem>
                        <SelectItem value="201-1000">201-1000 employees</SelectItem>
                        <SelectItem value="1000+">1000+ employees</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredTime">Preferred Time</Label>
                    <Select onValueChange={(value) => setValue("preferredTime", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select preferred time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                        <SelectItem value="evening">Evening (5 PM - 8 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your content optimization goals</Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      placeholder="What challenges are you facing with content optimization? What would you like to see in the demo?"
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Scheduling Demo..." : "Schedule Demo"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to our{" "}
                    <Link href="/privacy" className="hover:underline">
                      Privacy Policy
                    </Link>
                    . We'll only use your information to schedule and conduct the demo.
                  </p>
                </form> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
