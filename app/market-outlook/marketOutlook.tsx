import Image from "next/image";

export default function Component() {
  return (
    <div
      className="bg-black text-white min-h-screen p-8"
    >
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-sm text-gray-400 mb-2">Market Outlook</div>

        {/* Local Market Outlook Section */}
        <h1
          className="text-5xl font-light text-transparent bg-clip-text bg-[linear-gradient(75.19deg,_#0DB6C9_5.79%,_#56C847_97.32%)] mb-6"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          Local Market Outlook
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              Malaysia’s electric vehicle (EV) market is gearing up for
              explosive growth, making it a hotspot in Southeast Asia’s green
              mobility revolution. According to the International Energy Agency
              (IEA) and insights from EY, Malaysia’s EV sector is projected to
              grow at a 13.2% CAGR between 2025 and 2031, fueled by national
              incentives, consumer demand, and private sector investments.
            </p>

            <p>
              The Malaysian government targets 10,000 public EV charging
              stations by 2025, directly supporting the Low Carbon Mobility
              Blueprint 2021–2030. This infrastructure boom is expected to ease
              consumer concerns about range anxiety, a major barrier to EV
              adoption.
            </p>
          </div>

          <div className="relative">
            <Image
              src="/image/banner/Rectangle 1838.png?height=300&width=400"
              alt="Modern building exterior"
              width={400}
              height={300}
              className="w-full h-auto "
            />
          </div>
        </div>

        {/* Full-width 3rd and 4th paragraphs */}
        <div className="w-full max-w-6xl ml-auto mt-8 pr-12 text-sm leading-relaxed space-y-4">
          <p>
            Recent surveys by EY reveal that 25% of Malaysian consumers are
            considering an EV for their next vehicle purchase, driven by rising
            fuel prices and sustainability concerns. Additionally, local
            manufacturers such as Proton and Perodua are preparing to launch
            affordable electric models by late 2025, expanding the accessibility
            of EVs across Malaysia.
          </p>

          <p>
            As Malaysia positions itself as a strategic player in the EV market,
            events like Revolution EV 2025 offer an unmatched platform to
            engage, connect, and shape the future of mobility in the region.
          </p>
        </div>

        {/* Global Market Outlook Section */}
        <section className="space-y-6">
          <h2
            className="text-5xl font-light text-transparent bg-clip-text bg-[linear-gradient(75.19deg,_#0DB6C9_5.79%,_#56C847_97.32%)] mb-6"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Global Market Outlook
          </h2>

          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              The global electric vehicle market is experiencing unprecedented
              growth, transforming transportation systems worldwide. According
              to the IEA’s Global EV Outlook 2024, EVs are expected to represent
              20% of total global car sales in 2024, with projections to hit 50%
              by 2035.
            </p>

            <p>
              China leads the world in EV adoption, with nearly 40% of new car
              sales being electric and exports of 1.2 million EV units in 2023,
              an 80% year-over-year increase. Meanwhile, Deloitte predicts that
              by 2030, global EV sales will surpass 31 million units annually,
              led by strong performance in Asia-Pacific, Europe, and North
              America.
            </p>
          </div>

          {/* Large panoramic image */}
          <div className="my-8">
            <Image
              src="/image/banner/Rectangle 1839.png?height=300&width=800"
              alt="Modern building interior with blue lighting"
              width={800}
              height={300}
              className="w-full h-auto "
            />
          </div>

          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              In the United States, EVs captured 10% of new vehicle sales in
              2023, according to U.S. Department of Energy data, though policy
              shifts may influence growth trajectories moving forward. Europe
              faces heightened competition from Chinese EV manufacturers,
              requiring strategic adjustments to maintain its green transition
              momentum.
            </p>

            <p>
              The International Monetary Fund (IMF) forecasts that this electric
              shift will reshape global supply chains, impact GDP structures
              (with Europe's GDP potentially dipping by 0.3%), and redefine
              employment landscapes across the automotive sector.
            </p>

            <p>
              As the EV revolution accelerates worldwide, Revolution EV 2025
              provides critical insights into new technologies, evolving
              policies, and business opportunities in the global EV ecosystem.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
