"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
  CheckCircle,
} from "lucide-react";
import NavbarLogo from "@/public/image/navbarLogo.svg";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setShowThankYou(true);
        setEmail("");
        // Hide thank you message after 5 seconds
        setTimeout(() => {
          setShowThankYou(false);
        }, 5000);
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Gradient Top Bar */}
      <div className="bg-gradient-to-r from-cyan-500 to-green-400 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left: Contact */}
          <div className="text-white text-center md:text-left w-full md:w-auto">
            <p className="font-medium mb-1 text-sm sm:text-base">Contact Us</p>
            <Link
              href="mailto:info@revolutionevmalaysia.com"
              className="text-white text-xs sm:text-sm hover:underline"
            >
              info@revolutionevmalaysia.com
            </Link>
          </div>

          {/* Right: Mailing List */}
          <div className="flex flex-col w-full md:w-auto">
            <p className="text-white font-medium mb-1 text-sm sm:text-base text-center md:text-left">
              Join our Mailing list
            </p>

            {showThankYou ? (
              <div className="flex items-center justify-center md:justify-start bg-white rounded px-4 py-2 max-w-xs sm:max-w-md mx-auto md:mx-0">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                <span className="text-green-700 text-sm font-medium">
                  Thank you for subscribing!
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col w-full max-w-xs sm:max-w-md mx-auto md:mx-0"
              >
                <div className="flex">
                  <Input
                    type="email"
                    placeholder="Enter Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white text-black rounded-none h-9 text-xs sm:text-sm w-full max-w-[200px] sm:w-64 border-none"
                    disabled={isSubmitting}
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#00c2de] text-white rounded-none h-9 text-xs sm:text-sm px-2 sm:px-4 hover:bg-[#00a8c0] whitespace-nowrap disabled:opacity-50"
                  >
                    {isSubmitting ? "..." : "Subscribe"}
                  </Button>
                </div>
                {error && <p className="text-red-200 text-xs mt-1">{error}</p>}
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-black text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
            {/* Column 1 - Logo and Info */}
            <div className="col-span-2 sm:col-span-3 lg:col-span-1">
              <div className="flex items-center mb-4 justify-center sm:justify-start">
                <Image
                  src={NavbarLogo}
                  alt="Revolution EV Logo"
                  width={160}
                  height={60}
                  className="object-contain h-auto w-auto max-w-[140px] sm:max-w-[160px]"
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-300 mb-4 text-center sm:text-left">
                Malaysia's Sustainable Move Towards an Electric, Smart, and
                Green Future
              </p>
              <div className="mt-4 text-center sm:text-left">
                <p className="text-xs text-gray-400 mb-2">Organized By</p>
                <div className="flex items-center justify-center sm:justify-start">
                  <Image
                    src="/image/Layer 1.png"
                    alt="MAXPO Logo"
                    width={100}
                    height={40}
                    className="object-contain max-w-[80px] sm:max-w-[100px]"
                  />
                </div>
              </div>
            </div>

            {/* Column 2 - Event Information */}
            <div>
              <h3 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Event Information
              </h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                <li>
                  <Link href="/about" className="hover:text-[#00E1B0]">
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/conference/why-attend"
                    className="hover:text-[#00E1B0]"
                  >
                    Conference
                  </Link>
                </li>
                <li>
                  <Link
                    href="/conference/agenda"
                    className="hover:text-[#00E1B0]"
                  >
                    Agenda
                  </Link>
                </li>
                <li>
                  <Link
                    href="/exhibition/why-exhibit"
                    className="hover:text-[#00E1B0]"
                  >
                    Exhibition
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Participants */}
            <div>
              <h3 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Participants
              </h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                <li>
                  <Link href="/speakers" className="hover:text-[#00E1B0]">
                    Speakers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/exhibition/exhibitor"
                    className="hover:text-[#00E1B0]"
                  >
                    Exhibitors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partners/media-partner"
                    className="hover:text-[#00E1B0]"
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sponsors/sponsor"
                    className="hover:text-[#00E1B0]"
                  >
                    Sponsors
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4 - Registration */}
            <div className="col-span-1">
              <h3 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Registration
              </h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                <li>
                  <Link
                    href="/register?t=exhibitor"
                    className="hover:text-[#00E1B0]"
                  >
                    Register as Exhibitor
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register?t=delegate"
                    className="hover:text-[#00E1B0]"
                  >
                    Delegate Pass
                  </Link>
                </li>
                <li>
                  <Link
                    href="/register?t=brochure"
                    className="hover:text-[#00E1B0]"
                  >
                    Request Brochure
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 5 - Media & Contact */}
            <div className="col-span-1">
              <h3 className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                Media & Content
              </h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                <li>
                  <Link href="/blogs" className="hover:text-[#00E1B0]">
                    News & Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/market-outlook" className="hover:text-[#00E1B0]">
                    Market Outlook
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-[#00E1B0]">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#00E1B0]">
                    Testimonials
                  </Link>
                </li>
              </ul>

              <h3 className="text-xs sm:text-sm font-semibold mt-4 sm:mt-6 mb-3 sm:mb-4">
                Contact
              </h3>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-300">
                <li>
                  <Link
                    href="mailto:info@revolutionevmalaysia.com"
                    className="hover:text-[#00E1B0]"
                  >
                    info@revolutionevmalaysia.com
                  </Link>
                </li>
                <li>+91 7780985893</li>
                <li className="flex space-x-2 sm:space-x-3 mt-3 sm:mt-4">
                  <Link
                    href="https://x.com/revolutionev_"
                    className="bg-gray-800 p-1.5 rounded-sm hover:bg-gray-700"
                  >
                    <Twitter size={16} />
                  </Link>
                  <Link
                    href="https://www.instagram.com/_revolutionev"
                    className="bg-gray-800 p-1.5 rounded-sm hover:bg-gray-700"
                  >
                    <Instagram size={16} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/revolutionev/"
                    className="bg-gray-800 p-1.5 rounded-sm hover:bg-gray-700"
                  >
                    <Linkedin size={16} />
                  </Link>
                  <Link
                    href="https://www.youtube.com/channel/UCYhYC3ZVz64d9L1vVV9rQ5g"
                    className="bg-gray-800 p-1.5 rounded-sm hover:bg-gray-700"
                  >
                    <Youtube size={16} />
                  </Link>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61576595758079"
                    className="bg-gray-800 p-1.5 rounded-sm hover:bg-gray-700"
                  >
                    <Facebook size={16} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-4 sm:pt-6 text-center">
            <div className="text-xs sm:text-sm text-gray-500">
              <Link href="#" className="hover:text-[#00E1B0]">
                Terms and Conditions
              </Link>{" "}
              |{" "}
              <Link href="#" className="hover:text-[#00E1B0]">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
