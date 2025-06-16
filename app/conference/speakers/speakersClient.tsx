"use client"
import { useState } from "react";

import Image from "next/image"; // Optional: use regular <img> if not using Next.js

const speakers = [
  { name: "Eleanor Pena", title: "CEO", org: "Malaysia Automotive Institute", image: "/images/speaker1.jpg" },
  { name: "Marvin McKinney", title: "CEO", org: "Malaysia Automotive Institute", image: "/images/speaker2.jpg" },
  { name: "Kristin Watson", title: "CEO", org: "Malaysia Automotive Institute", image: "/images/speaker3.jpg" },
  { name: "Cameron Williamson", title: "CEO", org: "Malaysia Automotive Institute", image: "/images/speaker4.jpg" },
  { name: "Jerome Bell", title: "CEO", org: "Malaysia Automotive Institute", image: "/images/speaker5.jpg" },
  { name: "Leslie Alexander", title: "CEO", org: "Malaysia Automotive Institute", image: "/images/speaker6.jpg" },
  { name: "Theresa Webb", title: "CEO", org: "Malaysia Automotive Institute", image: "/images/speaker7.jpg" },
  { name: "Savannah Nguyen", title: "CEO", org: "Malaysia Automotive Institute", image: "/images/speaker8.jpg" },
  { name: "Cody Fisher", title: "CEO", org: "Malaysia Automotive Institute", image: "/images/speaker9.jpg" },
  { name: "Esther Howard", title: "CEO", org: "Malaysia Automotive Institute", image: "/images/speaker10.jpg" },
  { name: "Darrell Steward", title: "CEO", org: "Malaysia Automotive Institute", image: "/images/speaker11.jpg" },
  { name: "Guy Hawkins", title: "CEO", org: "Malaysia Automotive Institute", image: "/images/speaker12.jpg" },
];

export default function SpeakersGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const speakersPerPage = 4;

  const totalPages = Math.ceil(speakers.length / speakersPerPage);
  const start = (currentPage - 1) * speakersPerPage;
  const currentSpeakers = speakers.slice(start, start + speakersPerPage);

  return (
    <div className="bg-white text-black px-6 py-12 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Speakers</h2>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {currentSpeakers.map((speaker, index) => (
          <div key={index} className="border rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="relative w-full h-60">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover"
              />
              <img
                src="/images/logo.png" // Replace with your logo
                alt="Logo"
                className="absolute top-2 right-2 w-10 h-10"
              />
            </div>
            <div className="p-4">
              <p className="font-bold text-lg">{speaker.name}</p>
              <p className="text-sm font-medium">{speaker.title}</p>
              <p className="text-sm text-gray-500">{speaker.org}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-8 h-8 rounded border text-sm ${
              currentPage === i + 1
                ? "bg-black text-white"
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
