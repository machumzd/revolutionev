import Image from "next/image"
import Link from "next/link"

export default function EVCategoriesGrid() {
  const categories = [
    {
      title: "Electric Vehicles",
      image: "/image/focusSectors/ElectricVechicle.jpeg",
      href: "/electric-vehicles",
    },
    {
      title: "Charging Infrastructure & Incentives",
      image: "/image/focusSectors/Charging.jpeg",
      href: "/charging",
    },
    {
      title: "Policy, Regulation & Incentives",
      image: "/image/focusSectors/Policy.jpeg",
      href: "/policy-regulation",
    },
    {
      title: "Smart Mobility",
      image: "/image/focusSectors/close-up-electric-car-france.jpg",
      href: "/smart-mobility",
    },
    {
      title: "Fleet Management & Commercial EVs",
      image: "/image/focusSectors/fellet.jpeg",
      href: "/fleet-management",
    },
    {
      title: "Investment, Startups & Innovation",
      image: "/image/focusSectors/diverse-employees-group-discussing-ways-speed-up-order-delivery.jpg",
      href: "/investment-startups",
    },
  ]

  return (
    <div>
<h2 className="text-4xl md:text-5xl font-semibold ml-4 md:ml-50 mb-6">
  Focus <span className="text-sky-500 font-bold">Sectors</span>
</h2>


    
    <div className="bg-black p-4 md:p-8">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={category.href}
            className="group relative overflow-hidden aspect-[4/3] transition-transform hover:scale-[1.02]"
          >
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.title}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-teal-500/90 via-transparent to-transparent h-full flex items-end">
              <h3 className="text-white font-medium p-4 text-lg">{category.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>
    
  )
}
