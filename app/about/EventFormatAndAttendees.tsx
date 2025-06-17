import Link from "next/link"
import {
  Factory,
  Battery,
  Zap,
  Car,
  Truck,
  Smartphone,
  Building2,
  GraduationCap,
  Users,
  Banknote,
  TrendingUp,
  Leaf,
  Scale,
} from "lucide-react"

import type React from "react"
import EventFormat from "../components/eventFormat"

interface EventFormatAttendeesProps {
  attendeeProfiles: string[]
}

const EventFormatAttendees: React.FC<EventFormatAttendeesProps> = ({ attendeeProfiles }) => {
  const attendeeIcons = [
    Factory,
    Battery,
    Zap,
    Car,
    Truck,
    Smartphone,
    Building2,
    GraduationCap,
    Users,
    Banknote,
    TrendingUp,
    Leaf,
    Scale,
  ]

  return (
    <section className="pb-16 bg-white">
      
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="text-black">Attendee </span>
          <span className="text-sky-500">Profile</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {attendeeProfiles.map((profile, idx) => {
            const IconComponent = attendeeIcons[idx]
            return (
              <div key={idx} className="flex border border-gray-300 bg-white hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-16 border-r border-gray-300 bg-gray-50 p-4">
                  <IconComponent className="w-6 h-6 text-gray-700" />
                </div>
                <div className="flex items-center justify-start px-4 py-4 text-sm font-medium text-gray-800 leading-tight">
                  {profile}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/register?t=delegate">
            <button className="px-8 py-3 border-2 border-black text-black text-base font-medium rounded hover:bg-black hover:text-white transition-colors">
              Get Your Ticket
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default EventFormatAttendees
