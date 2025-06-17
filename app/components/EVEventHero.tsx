"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

// Define the stats data
const statsData = [
  { label: "Speakers", count: 80, suffix: "+", color: "bg-cyan-400" },
  { label: "Delegates", count: 300, suffix: "+", color: "bg-green-400" },
  {
    label: "Sponsors & Exhibitors",
    count: 40,
    suffix: "+",
    color: "bg-cyan-400",
  },
  { label: "Attendees", count: 3000, suffix: "+", color: "bg-green-400" },
  { label: "Partners", count: 20, suffix: "+", color: "bg-cyan-400" },
];

type StatCardProps = {
  count: number;
  label: string;
  suffix?: string;
  color?: string;
};

function StatCard({
  count,
  label,
  suffix = "",
  color = "bg-cyan-400",
}: StatCardProps) {
  return (
    <div
      className={`${color} text-black px-6 py-4 flex items-center justify-between min-w-[250px] rounded-md shadow-md`}
    >
      <div className="flex items-baseline gap-2">
        <h3 className="text-3xl font-extrabold">
          <CountUp end={count} duration={2.5} />
          {suffix}
        </h3>
        <p className="text-sm font-medium">{label}</p>
      </div>
      <div className="text-black">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"
          />
        </svg>
      </div>
    </div>
  );
}

export default function EVEventHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleArrowClick = () => {
    setActiveIndex((current) => (current + 1) % statsData.length);
    setIsPaused(true);
    // Resume auto-cycle after 8 seconds of no interaction
    setTimeout(() => setIsPaused(false), 8000);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % statsData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="px-4 sm:px-6 py-8 sm:py-12 md:py-20 bg-white text-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Welcome to <span className="text-cyan-400">Malaysia's</span>{" "}
            Flagship EV Event | Revolution{" "}
            <span className="text-sky-400">EV 2025</span>
          </h2>
          <p className="text-gray-700 mb-6 text-sm sm:text-base">
            Revolution EV Malaysia 2025 is Malaysia's flagship EV event
            dedicated to advancing electric mobility, featuring unrivalled
            electric vehicles and next-generation zero-emission vehicle
            innovations. <span className="text-sky-400">#rev25</span>, is
            designed to bring people together, encourage new ideas, growth, and
            further cooperation within Malaysia's emerging e-mobility industry.
            The event will bring together policymakers, investors, innovators,
            industry pioneers, and government leaders to propel the advancements
            of electric mobility across Malaysia and beyond. <br />
            <br />
            <b>
              Join us from 23rd to 24th of October 2025 in Kuala Lumpur for two
              power-packed days of thought leadership, innovative showcases, and
              strategic networking as we drive Malaysia toward its EV future.
            </b>
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/about">
              <button className="px-4 sm:px-6 py-2 border border-black hover:bg-black hover:text-white transition text-sm sm:text-base">
                KNOW MORE
              </button>
            </Link>
            <Link href="/register?t=exhibitor">
              <button className="px-4 sm:px-6 py-2 border border-black hover:bg-black hover:text-white transition text-sm sm:text-base">
                EXHIBIT
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full rounded-lg overflow-hidden shadow-lg aspect-[16/9] sm:aspect-[4/3] md:aspect-[3/2]">
          <video
            className="w-full h-full object-cover"
            src="/videos/maxpo.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto mt-12 sm:mt-20 overflow-hidden">
        {/* Full Card Slider */}
        <div className="relative h-auto sm:h-[180px] border border-gray-300 rounded flex flex-col sm:flex-row">
          {/* Left Side: Heading - Fixed */}
          <div className="bg-white p-4 sm:p-6 flex items-center justify-start w-full sm:w-1/3">
            <h2 className="text-3xl sm:text-5xl lg:text-[70px] font-light leading-none">
              <span className="text-gray-400">Expected</span>{" "}
              <span className="font-bold text-black">Numbers</span>
            </h2>
          </div>

          {/* Right Side: Stat Cards - Dynamic */}
          <div className="w-full sm:w-2/3 relative py-6 sm:py-0">
            {statsData.map((stat, index) => (
              <div
                key={stat.label}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  index === activeIndex
                    ? "opacity-100 translate-x-0"
                    : index < activeIndex
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
                }`}
              >
                <div
                  className={`${stat.color} text-black px-4 sm:px-6 py-4 flex items-center justify-between h-full rounded-b-md sm:rounded-b-none sm:rounded-r-md relative`}
                >
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-4xl sm:text-6xl lg:text-[100px] leading-none font-extrabold">
                      <CountUp end={stat.count} duration={2.5} />
                      {stat.suffix}
                    </h3>
                    <p className="text-xl sm:text-3xl lg:text-[50px] font-medium">
                      {stat.label}
                    </p>
                  </div>

                  {/* Clickable Dynamic Arrow - advances to next stat when clicked */}
                  <button
                    onClick={handleArrowClick}
                    className={`text-black transition-all duration-1000 ease-in-out hover:scale-110 active:scale-95 ${
                      index === activeIndex
                        ? "transform translate-x-0 opacity-100"
                        : "transform translate-x-4 opacity-0"
                    }`}
                    aria-label="Next statistic"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-chevron-right sm:w-[30px] sm:h-[30px] lg:w-[50px] lg:h-[50px] cursor-pointer"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.646 12.854a.5.5 0 0 1 0-.708L10.293 8 6.646 4.354a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-4 gap-2">
          {statsData.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-6 sm:w-8 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-cyan-400" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Optional: Add navigation dots that are clickable */}
        {/* <div className="flex justify-center mt-6 gap-3">
          {statsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-cyan-400 scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to stat ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
