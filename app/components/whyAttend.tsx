"use client"

const reasons = [
  {
    number: "01",
    text: "Be part of the conversations that fuel the future of EVs",
    image: "image/Attend/img1.png",
  },
  {
    number: "02",
    text: "Gain insights into the potential benefits of using EVs",
    image: "image/Attend/img2.png",
  },
  {
    number: "03",
    text: "Experience live demonstrations from OEMs",
    image: "image/Attend/img3.png",
  },
  {
    number: "04",
    text: "Engage with top EV leaders, tech pioneers and investors",
    image: "image/Attend/img4.png",
  },
  {
    number: "05",
    text: "Analyse business opportunities in Malaysia's growing EV market",
    image: "image/Attend/img5.png",
  },
  {
    number: "06",
    text: "Enhancing your brand's visibility in the evolving e-mobility space",
    image: "image/Attend/img6.png",
  },
]

export default function WhyAttend() {
  return (
    <div className="w-full bg-white py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Left side - Title */}
        <div className="md:w-1/4 self-center text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl sm:text-5xl font-light leading-tight">Why</h2>
          <h2 className="text-5xl sm:text-6xl font-bold mt-2">Attend?</h2>
        </div>

        {/* Right side - Cards */}
        <div className="md:w-4/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="relative h-60 sm:h-72 md:h-90 overflow-hidden bg-cover bg-center text-white flex items-end p-4 sm:p-6 hover:scale-[1.02] transition-all duration-300"
              style={{ backgroundImage: `url(${item.image})` }}
            >
               <div className="absolute top-4 left-6 z-10">
                <p className="text-xs md:text-7xl font-semibold leading-snug drop-shadow-md">{item.number}</p>
              </div>
              {/* Slightly darker overlay for text clarity */}
              <div className="absolute inset-0 bg-black/30 z-0" />

              {/* Text content */}
              <div className="relative z-10">
                <p className="text-xs sm:text-sm font-medium leading-snug drop-shadow-md line-clamp-3 max-w-5/6">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
