import { CheckCircle, Calendar, Clock, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface DemoConfirmationProps {
  event: {
    id: string
    startTime: string
    endTime: string
    meetingLink: string
  }
}

export function DemoConfirmation({ event }: DemoConfirmationProps) {
  const startDate = new Date(event.startTime)
  const endDate = new Date(event.endTime)

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      timeZoneName: "short",
    })
  }

  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <CheckCircle className="h-16 w-16 text-green-500" />
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Demo Scheduled Successfully!</h2>
        <p className="text-gray-600">Weve sent you a calendar invite with all the details.</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-6 space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <Calendar className="h-5 w-5 text-blue-600" />
          <span className="font-medium">{formatDate(startDate)}</span>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <Clock className="h-5 w-5 text-blue-600" />
          <span>
            {formatTime(startDate)} - {formatTime(endDate)}
          </span>
        </div>

        <div className="flex items-center justify-center space-x-2">
          <Video className="h-5 w-5 text-blue-600" />
          <span>Video call link will be in your calendar invite</span>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm text-gray-600">What to expect in your demo:</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Live product walkthrough</li>
          <li>• Custom use case discussion</li>
          <li>• Q&A session</li>
          <li>• Pricing and next steps</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Button asChild>
          <Link href="/">Back to Home</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/features">Explore Features</Link>
        </Button>
      </div>
    </div>
  )
}
