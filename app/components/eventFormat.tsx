"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const eventItems = [
  {
    title: "Conference",
    description:
      "The Conference Will Include Stimulating Panels, Captivating Keynote Addresses, And Fireside Discussions With Top Authorities On The Topic.",
    image: "/image/eventFormat/img1.png",
  },
  {
    title: "Exhibitions",
    description:
      "Display Of Latest EV Models, Battery Technologies, Charging Solutions, And EV Brand Charging Solutions.",
    image: "/image/eventFormat/img2.png",
  },
  {
    title: "Workshops",
    description:
      "Skill-Building, Future-Oriented Workshops Created To Enable E-Mobility Industry Experts.",
    image: "/image/eventFormat/img3.png",
  },
  {
    title: "Networking Opportunities",
    description:
      "To Encourage Strong Relationships, Networking Receptions, Interactive Presentations, And B2B Networking Lounges Are All Examples Of Networking Opportunities.",
    image: "/image/eventFormat/img4.png"
  },
];

const EventFormat: React.FC = () => {
  return (
    <section className="pt-16 pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="text-black">Event </span>
          <span className="text-sky-500">Format</span>
        </h2>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {eventItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col border border-gray-300 bg-white hover:shadow-md transition-shadow rounded overflow-hidden"
            >
              {/* Image */}
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div
                className=" text-white p-4 flex-1 justify-between"
                style={{
                  background:
                    "linear-gradient(180deg, #0DB6C9 -5.22%, rgba(45, 49, 50, 0.99) 91.54%)",
                }}
              >
                <h3 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>

              {/* CTA */}
              <Link href="/register?t=delegate" className="block text-center mt-2">
                <button className="w-full py-3 text-sm font-semibold bg-neutral-800 text-white hover:bg-gray-900 cursor-pointer transition">
                  Get Delegate Pass
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventFormat;
