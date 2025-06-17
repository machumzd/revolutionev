import HeroSection from "./hero-section"
import EventHighlights from "./event-highlights"
import EventFormatAndAttendees from "./EventFormatAndAttendees"
import EventFormat from "../components/eventFormat";

const attendeeProfiles = [
  "Original Equipment Manufacturers",
  "Battery Tech Providers",
  "EV Charging Infrastructure Companies",
  "Automotive Components & Suppliers",
  "Fleet Operators & Logistics Companies",
  "Smart Mobility Startups",
  "Government & Government Agencies",
  "R&D Centers & Universities",
  "Policymakers, Urban Planners & Sustainability",
  "Financial Institutions & Insurance Providers",
  "Venture Capital & Investment Firms",
  "Renewable Energy Companies",
  "Legal Compliance & Intellectual Property Experts",
]
export const metadata = {
  title: "About Revolution EV Malaysia 2025",
  description: "Revolution EV Malaysia is the flagship event accelerating the adoption of electric vehicles in Malaysia. Learn more about our vision, mission, and purpose.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <EventHighlights />
      <EventFormat/>
      <EventFormatAndAttendees attendeeProfiles={attendeeProfiles} />
    </main>
  )
}
