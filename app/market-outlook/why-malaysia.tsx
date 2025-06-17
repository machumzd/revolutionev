"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GreenCircles from "@/public/image/market-outlook/greenCircle.svg";

const data = [
  {
    title: "Government",
    secondTitle: "Policies",
    description:
      "With its proactive policies and expanding infrastructure, Malaysia is quickly becoming a critical hub for EV growth in Southeast Asia as the shift from mobility to e-mobility becomes more evident in the face of increasing climate challenges",
    image: "/image/market-outlook/img1.png",
  },
  {
    title: "Focus on Sustainability and ",
    secondTitle: "Green Investments",
    description:
      "Malaysia’s innovation trajectory is gaining momentum, with a strong focus on funding for startups, EV manufacturing, and the expansion of charging infrastructure, transforming the country into a dynamic hub for sustainable mobility and tech-driven growth",
    image: "/image/market-outlook/img2.png",
  },
  {
    title: "Advancements in ",
    secondTitle: "Battery Technology",
    description:
      "Better EV performance and cost are being driven by advancements in battery technology, and the most recent developments in the Malaysian market are creating exciting prospects for the e-mobility sector",
    image: "/image/market-outlook/img3.png",
  },
  {
    title: "Vehicle to Grid",
    secondTitle: " Integration",
    description:
      "Vehicle to Grid (V2G) allows electric vehicles to send power back to the grid whenever needed.  As Malaysia accelerates EV adoption, V2G can play a key role in integrating energy and technology",
    image: "/image/market-outlook/img4.png",
  },
  {
    title: "Smart Mobility Solutions for Smart Cities",
    secondTitle: "Smart Cities",
    description:
      "Malaysia’s strategic move to integrate e-mobility with smart technologies such as IoT and AI aims to create a more efficient, sustainable, and interconnected transportation system",
    image: "/image/market-outlook/img5.png",
  },
];

export default function WhyMalaysia() {
  return (
    <div className="bg-black text-white min-h-screen px-4 py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="relative z-30 text-center md:text-left ">
          <h1 className="text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-[linear-gradient(75.19deg,_#0DB6C9_5.79%,_#56C847_97.32%)]" style={{ fontFamily: "var(--font-dm-sans)" }}>
            Why Malaysia
          </h1>
          <p className="text-sm text-gray-300 max-w-4xl mx-auto md:mx-0 leading-relaxed">
            With its proactive policies and expanding infrastructure, Malaysia
            is quickly becoming a critical hub for EV growth in Southeast Asia.
          </p>
        </div>

        {/* Fixed Horizontal Layout */}
        {data.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col w-full h-auto  rounded-2xl bg-black"
          >
            {/* Left Side - Green SVG + Text */}
            <div className="relative z-10 w-full">
              {/* Background Image */}
            <div className="absolute inset-0 -top-10 scale-125 left-0 md:-left-30 md:-top-50 ">

                <Image
                  src={GreenCircles}
                  alt="Green Circles"
                  width={700}
                  height={700}
                  className="z-10"
                />
              </div>

              {/* Foreground Text */}
              <div className="relative z-20 px-10 md:pl-30 md:pr-10 pt-28 pb-10 text-white text-center md:text-left">
                <h2 className="text-lg sm:text-xl md:text-2xl font-light">
                  {item.title}{" "}
                  <span className="text-transparent bg-clip-text bg-[linear-gradient(75.19deg,_#0DB6C9_5.79%,_#56C847_97.32%)]">{item.secondTitle}</span>
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Right Side - Moves to Bottom on Mobile */}
            <div className="relative w-full md:w-7/8 self-end h-[200px] sm:h-[250px] md:h-[150px]">
              <Image
                src={item.image}
                alt="Display"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl md:rounded-l-2xl md:rounded-r-none"
              />
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="text-center pt-10 border-t border-gray-800">
          <h3 className="text-lg md:text-xl font-light text-white mb-4">
            Interested in Showcasing Your Solutions To A Targeted Audience
          </h3>
          <Link href="/register">
            <Button
              variant="outline"
              className="border-teal-400 text-white bg-black hover:bg-black hover:text-white"
            >
              Request Call Back
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
