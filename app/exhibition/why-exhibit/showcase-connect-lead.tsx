import Image from "next/image"
import { Button } from "@/components/ui/button"
import img from "@/public/image/exhibit/whyexhibit.png"
import connect from "@/public/image/exhibit/connect.png"
import lead from "@/public/image/exhibit/lead.png"
import showCase from "@/public/image/exhibit/showcase.png"

import Link from "next/link"

export default function ExhibitionShowcaseSection() {
  return (
    <section className="relative bg-white text-black py-16 px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Group 26087333 (2).png?height=200&width=1000"
          alt="EV Exhibition Background"
          fill
          className="object-cover mt-16 opacity-70"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* First Section - Exhibition Info */}
        <div className="mb-8">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-black">
              Exhibit innovative products, solutions and groundbreaking offerings at Revolution{" "}
              <span style={{ color: "#0DB6C9" }}>EV Malaysia 2025</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4 text-sm leading-relaxed text-black">
                <p>
                  Revolution EV Malaysia will offer exhibitors a platform to showcase the latest EV models, innovative
                  solutions, and next-gen technologies in front of thousands of industry professionals. The event will
                  draw a large international & regional audience; <span className="text-sky-500">#rev25</span> will
                  provide participants with an exclusive opportunity to engage with thousands of potential clients
                  actively seeking the best solutions to meet their specific needs. With an unmatched networking and
                  business matchmaking space, participants will be able to engage with the prospects in real-time,
                  generate qualified leads, and gauge instant market reaction.
                </p>

                <p>The event will feature an expansive space of 3000sqm for 2 days</p>

                <p>
                  Featuring brand-new EV cars, trucks, and lightweight options such as electric scooters, skateboards,
                  and bikes, everything EV will be on display at Malaysia's signature EV tradeshow and conference — with
                  participation from leading automakers, tech innovators, mobility startups, charging infrastructure
                  providers, and government agencies — offering attendees a glimpse into the future of mobility
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <div>
                <Image
                  src={img || "/placeholder.svg"}
                  alt="Modern Exhibition Center"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Section - Showcase Connect Lead */}
        <div className="pt-3">
          {/* Three Cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-5">
            {/* Showcase */}
            <div className="space-y-4">
              <div className="relative">
                <Image
                  src={showCase || "/placeholder.svg"}
                  alt="White Electric Vehicle"
                  width={300}
                  height={200}
                  className="w-full "
                />
              </div>
              <div className="text-white p-6" style={{ backgroundColor: "#0DB6C9" }}>
                <h3 className="text-xl font-bold mb-3">Showcase:</h3>
                <p className="text-sm leading-relaxed">
                  At <span className="text-black font-semibold">#rev25</span>, bring your ideas to life by showcasing
                  the latest EV models, sustainable charging solutions, and technologies from across the industry
                  vertical.
                </p>
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <div className="relative">
                <Image
                  src={connect || "/placeholder.svg"}
                  alt="White Electric Vehicle"
                  width={300}
                  height={200}
                  className="w-full "
                />
              </div>
              <div className="text-white p-6" style={{ backgroundColor: "#0DB6C9" }}>
                <h3 className="text-xl font-bold mb-3">Connect:</h3>
                <p className="text-sm leading-relaxed">
                  <span className="text-black font-semibold">#rev25</span> is your platform to connect with investors,
                  tech innovators, manufacturers, suppliers, policymakers, and decision makers within Malaysia and
                  beyond.
                </p>
              </div>
            </div>

            {/* Lead */}
            <div className="space-y-4">
              <div className="relative">
                <Image
                  src={lead || "/placeholder.svg"}
                  alt="White Electric Vehicle"
                  width={300}
                  height={200}
                  className="w-full"
                />
              </div>
              <div className="text-white p-6" style={{ backgroundColor: "#0DB6C9" }}>
                <h3 className="text-xl font-bold mb-3">Lead:</h3>
                <p className="text-sm leading-relaxed">
                  Make your brand the star of the event at <span className="text-black font-semibold">#rev25</span> by
                  proudly showcasing your commitment towards green mobility solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Text and Buttons */}
<div className="space-y-6  px-4 md:px-0">
  <p className="text-gray-800 text-lg leading-relaxed font-bold text-left max-w-7xl">
    Revolution EV Malaysia 2025 is your gateway to Southeast Asia's most dynamic and fast-evolving EV market. Whether launching new technology, entering the Malaysian market, or building strategic alliances — your brand belongs here.
  </p>
  <div className="flex flex-col sm:flex-row gap-4 justify-center">
    <Link href="/register?t=exhibitor">
      <Button className="bg-black text-white hover:bg-gray-800 rounded-none">Book Your Stand</Button>
    </Link>
    <Link href="/register?t=sponsor">
      <Button variant="outline" className="border-black text-black hover:bg-gray-50 rounded-none">
        Enquire For Sponsorships
      </Button>
    </Link>
  </div>
</div>

        </div>
      </div>
    </section>
  )
}
