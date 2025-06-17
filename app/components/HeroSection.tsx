"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden bg-black">
      <Image
        src="/image/Hero.jpeg"
        alt="Background EV"
        fill
        priority
        className="object-cover opacity-60"
      />

      {/* Gradient overlay at bottom */}
      <div
        className="absolute inset-x-0 bottom-0 z-[1] h-[30%] bg-gradient-to-t from-black to-transparent"
        style={{ backdropFilter: "blur(1px)" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 text-center text-white">
        <h1
          className="text-white font-semibold tracking-[0.05em] text-4xl sm:text-5xl md:text-6xl leading-[1]"
          style={{ fontFamily: "var(--font-menda)" }}
        >
          REVOLUTION EV
        </h1>

        <h2
          className="text-white font-semibold mt-1 sm:mt-2 text-3xl sm:text-5xl md:text-6xl leading-[1] tracking-[0.1em]"
          style={{ fontFamily: "var(--font-menda)" }}
        >
          MALAYSIA
        </h2>

        <p
          className="mt-4 mb-8 md:mb-10 text-base sm:text-lg md:text-xl font-bold leading-snug mx-auto max-w-3xl px-4"
          style={{ fontFamily: "var(--font-menda)", letterSpacing: "0.05em" }}
        >
          Malaysia's Sustainable Move Towards an Electric,
          <br className="hidden sm:block" />
          Smart, and Green Future
        </p>

        {/* Buttons */}
        <div className="mb-6 sm:mb-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 ">
          <Link
            href="/register"
            className="min-w-[180px] border border-white bg-transparent px-6 py-3 text-sm font-normal tracking-wide text-white transition-all duration-300  hover:bg-white hover:text-black flex items-center justify-center"
          >
            Register Now
          </Link>
          <Link
            href="/register?t=sponsor"
            className="min-w-[180px] bg-white px-6 py-3 text-sm font-bold tracking-wide text-black transition-all duration-300 hover:bg-[#0DB6C9] hover:text-white text-center"
          >
            Sponsorship <br className="hidden sm:block" /> Opportunities
          </Link>
        </div>

        {/* Event Details */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-16 text-white text-sm sm:text-lg md:text-xl  font-medium font-menda mt-6 sm:mt-10 px-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#4DC656]">When:</span>
            <span>October 23–24, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-[#4DC656]">Where:</span>
            <span>WTC, KL, Malaysia</span>
          </div>
        </div>
      </div>
    </section>
  );
}
