"use client"

import Link from "next/link"

type MissionItem = {
  title: string
  description: string
  image: string
  buttonText: string
  buttonLink: string
  imagePosition: "left" | "right"
}

const missionData: MissionItem[] = [
  {
    title: "Conference",
    description:
      "The conference at #rev25 brings together leading voices from across the government, industry verticals, academia, and more to help shape the e-mobility landscape within Malaysia and beyond. Participate in thought-provoking discussions on the infrastructure, innovation, investment, and policy that will propel the country's electric future.",
    image: "/image/evMission/discussion.jpg",
    buttonText: "Get Delegate Pass",
    buttonLink: "/register?t=delegate",
    imagePosition: "left",
  },
  {
    title: "Exhibition",
    description:
      "Malaysia's most prestigious e-mobility event, #rev25, serves as your entry point to South-East Asia's rapidly expanding electric vehicle industry, offering invaluable opportunities whether you're introducing a product, expanding your business, or boosting brand awareness.",
    image: "/image/evMission/showroom.png",
    buttonText: "Book Your Stand",
    buttonLink: "/register?t=exhibitor",
    imagePosition: "right",
  },
  {
    title: "Networking",
    description:
      "Connect directly with top EV leaders, tech innovators, and investors during Malaysia's e-mobility transformation. Build strong business relationships, share ideas for the future, and open doors to strategic alliances. Expand your impact within the rapidly expanding EV industry to hasten your success.",
    image: "/image/evMission/networking.png",
    buttonText: "Get Delegate Pass",
    buttonLink: "/register?t=delegate",
    imagePosition: "left",
  },
]

export function EvMission() {
  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 md:py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 md:mb-0 md:mr-8">
            Our <span className="text-[#3D8CB5]">EV</span>-olution
            <br />
            Mission
          </h2>

          <p className="text-sm sm:text-base max-w-xl">
            At Revolution EV, we are paving the way for a greener future through innovation, clean energy and
            sustainable mobility. We are fueling tomorrow by bringing together all stakeholders to shape the future of
            e-mobility, create impactful solutions, and build a lasting legacy for generations to come.
          </p>
        </div>

        {/* Cards Section */}
        <div className="space-y-6 sm:space-y-8">
          {missionData.map((item, index) => (
            <div
              key={index}
              className=" border-2 [border-image-source:linear-gradient(180deg,#000000,#0DB6C9)] [border-image-slice:1]  overflow-hidden flex flex-col md:flex-row"
              style={{ flexDirection: item.imagePosition === "right" ? "row-reverse" : "row" }}
            >
              {/* Image Section */}
              <div className="relative w-full md:w-1/2 h-48 sm:h-64 md:h-auto">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
              </div>

              {/* Content Section */}
              <div className="p-4 sm:p-6 md:p-20 md:w-1/2 flex flex-col justify-center ">
                <h3 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-2 sm:mb-4 text-center">{item.title}</h3>
                <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                  {item.description.split("#rev25").map((part, idx, arr) => (
                    <span key={idx}>
                      {part}
                      {idx !== arr.length - 1 && <span className="text-sky-400 font-semibold">#rev25</span>}
                    </span>
                  ))}
                </p>
                <div>
                  <Link
                    href={item.buttonLink}
                    className="inline-block px-4 sm:px-6 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors text-sm sm:text-base"
                  >
                    {item.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
