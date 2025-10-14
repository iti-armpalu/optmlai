"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

interface DemoFormData {
    firstName: string
    lastName: string
    email: string
    company: string
    role: string
    companySize: string
    preferredTime: string
    message: string
}

interface DemoFormProps {
    onSuccess?: (data: any) => void
}

export function DemoForm({ onSuccess }: DemoFormProps) {
    const [formData, setFormData] = useState<DemoFormData>({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        role: "",
        companySize: "",
        preferredTime: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    //   const { toast } = useToast()

    const handleInputChange = (field: keyof DemoFormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch("/api/schedule-demo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const result = await response.json()

            if (result.success) {
                toast("Demo Scheduled Successfully!", {
                    description: "We'll send you a calendar invite shortly. Check your email for confirmation.",
                    action: {
                        label: "View Details",
                        onClick: () => console.log("View demo details"),
                    },
                })
                onSuccess?.(result)
                // Reset form
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    company: "",
                    role: "",
                    companySize: "",
                    preferredTime: "",
                    message: "",
                })
            } else {
                toast("Failed to Schedule Demo", {
                    description: result.message || "Something went wrong. Please try again or contact support.",
                })
            }
        } catch (error) {
            toast("Connection Error", {
                description: "Unable to connect to our servers. Please check your internet connection and try again.",
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                    </label>
                    <Input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="John"
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                    </label>
                    <Input
                        id="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Doe"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Work Email *
                </label>
                <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john@company.com"
                />
            </div>

            <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company *
                </label>
                <Input
                    id="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Your Company"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                        Role
                    </label>
                    <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="marketing-director">Marketing Director</SelectItem>
                            <SelectItem value="performance-marketer">Performance Marketer</SelectItem>
                            <SelectItem value="digital-marketing-manager">Digital Marketing Manager</SelectItem>
                            <SelectItem value="cmo">CMO</SelectItem>
                            <SelectItem value="growth-manager">Growth Manager</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Size
                    </label>
                    <Select value={formData.companySize} onValueChange={(value) => handleInputChange("companySize", value)}>
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
            </div>

            <div>
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time
                </label>
                <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange("preferredTime", value)}>
                    <SelectTrigger>
                        <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12 PM - 5 PM)</SelectItem>
                        <SelectItem value="evening">Evening (5 PM - 7 PM)</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                </label>
                <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your advertising goals and challenges..."
                    rows={4}
                />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Scheduling..." : "Schedule Demo"}
            </Button>
        </form>
    )
}
