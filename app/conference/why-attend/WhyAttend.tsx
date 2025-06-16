import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function Component() {
  const features = [
    {
      title: "Thoughtfully Curated Conference Programme",
      image: "/image/conference/Frame 3968622.png?height=200&width=300",
    },
    {
      title: "Learning Opportunities",
      image: "/image/conference/Frame 3968614.png?height=200&width=300",
    },
    {
      title: "Hear from the Best EV Minds",
      image: "/image/conference/Frame 3968616.png?height=200&width=300",
    },
    {
      title: "Share and Collaborate",
      image: "/image/conference/Frame 3968647.png?height=200&width=300",
    },
    {
      title: "Hands On Workshops",
     image: "/image/conference/Frame 3968617.png?height=200&width=300",
    },
    {
      title: "Sponsorship and Partnership Opportunities",
     image: "/image/conference/Frame 3968618.png?height=200&width=300",
    },
    {
      title: "Get Inspired",
     image: "/image/conference/Frame 3968619.png?height=200&width=300",
    },
    {
      title: "Gain Strategic insights from Global Experts",
      image: "/image/conference/africanWomen.svg",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Hero Section */}
      <Card className="mb-8  border-none shadow-none">
  <div className="flex flex-col md:flex-row">
    <div className="md:w-1/3">
      <Image
        src="/image/conference/image.png?height=250&width=350"
        alt="Conference attendees"
        width={350}
        height={250}
        className="w-full h-full object-contain"
      />
    </div>
    <div className="md:w-2/3 p-6 bg-white">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        Malaysia's Most Anticipated EV Conference
      </h1>
      <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
        Join us for the most comprehensive EV conference in Southeast Asia, featuring industry leaders,
        cutting-edge technology showcases, and networking opportunities that will shape the future of electric
        mobility in Malaysia and beyond.
      </p>
      <p className="text-gray-700 text-sm md:text-base leading-relaxed">
        Connect with innovators, explore the latest EV technologies, and discover business opportunities in the
        rapidly evolving electric vehicle ecosystem. From policy discussions to technical workshops, this event
        covers every aspect of the EV revolution.
      </p>
    </div>
  </div>
</Card>


      {/* Main Content */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">Why Attend Revolution EV Malaysia 2025</h2>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
 {features.map((feature, index) => (
  <Card
    key={index}
    className={`group relative overflow-hidden p-0 border-none bg-black rounded-none ${
      index === features.length - 1 ? "lg:col-span-2" : ""
    }`}
  >
    <div className="relative w-full h-48 md:h-56">
      <Image
        src={feature.image || "/placeholder.svg"}
        alt={feature.title}
        fill
        className="object-cover w-full h-full transition-transform duration-300 rounded-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-none" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-semibold text-lg leading-tight line-clamp-2">{feature.title}</h3>
      </div>
    </div>
  </Card>
))}
   </div>
    </div>

  )
}
