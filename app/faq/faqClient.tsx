"use client"
import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is Revolution EV Malaysia 2025?",
    answer:
      "The Revolution EV Malaysia 2025 is a premier EV event, designed to be the central hub for future innovations, government policies, and partnerships in Malaysia's rapidly evolving e-mobility sector.",
  },
  {
    question: "Who should attend Revolution EV?",
    answer:
      "The Revolution EV event is designed for professionals from the EV industry, including fleet operators, OEMs, battery tech providers, and government agencies, offering a platform for innovation, networking opportunities, and partnerships to shape the e-mobility industry.",
  },
  {
    question: "When and where is the event taking place?",
    answer: "The revolution EV will take place from 3rd to 4th September 2025 in Kuala Lumpur, Malaysia",
  },
  {
    question: "Why is Malaysia hosting this EV conference?",
    answer:
      "The Revolution EV will primarily emphasize the nation's goal for electric vehicle (EV) adoption, infrastructure expansion, and environmental sustainability.",
  },
  {
    question: "Will there be live product demos or EV test drives?",
    answer: "Yes, the Revolution EV event will feature live product demonstrations and EV test drives",
  },
  {
    question: "Can I download the event brochure?",
    answer: "Yes, you can download the event brochure from our Register page.",
  },
  {
    question: "How Can I Register for the Event?",
    answer:
      "You can register for the event through our official website. Early registration is recommended to secure your spot. For more info, CLICK HERE",
  },
  {
    question: "What can I expect at Revolution EV Malaysia 2025?",
    answer:
      "Attendees can look forward to engaging keynote addresses, panel discussions, technology demonstrations, and networking opportunities centered on Malaysia's zero-emission vehicle innovations and latest e-mobility solutions.",
  },
  {
    question: "Is the event open to the public?",
    answer:
      "Revolution EV is predominantly a B2B event intended for tech pioneers, investors and industry professionals. But some sessions and test drives might be public; see the agenda for specifics.",
  },
  {
    question: "Are there any speaking or sponsorship opportunities available?",
    answer:
      "Yes, those who all are interested in speaking, exhibiting, or sponsorship can contact our team via the Get in Touch Section on our website",
  },
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  const renderAnswerWithLinks = (answer: string) => {
    // Handle "Register page" link
    if (answer.includes("Register page")) {
      return (
        <span>
          Yes, you can download the event brochure from our{" "}
          <Link href="/register?t=brochure" className="text-blue-600 hover:text-blue-800 underline font-medium">
            Register page
          </Link>
          .
        </span>
      )
    }

    // Handle "CLICK HERE" link
    if (answer.includes("CLICK HERE")) {
      return (
        <span>
          You can register for the event through our official website. Early registration is recommended to secure your
          spot. For more info,{" "}
          <Link href="/register" className="text-blue-600 hover:text-blue-800 underline font-bold">
            CLICK HERE
          </Link>
        </span>
      )
    }

    // Handle "agenda" link
    if (answer.includes("see the agenda")) {
      return (
        <span>
          Revolution EV is predominantly a B2B event intended for tech pioneers, investors and industry professionals.
          But some sessions and test drives might be public; see the{" "}
          <Link href="/conference/agenda" className="text-blue-600 hover:text-blue-800 underline font-medium">
            agenda
          </Link>{" "}
          for specifics.
        </span>
      )
    }

    // Handle "Get in Touch Section" link
    if (answer.includes("Get in Touch Section")) {
      return (
        <span>
          Yes, those who all are interested in speaking, exhibiting, or sponsorship can contact our team via the{" "}
          <Link href="/register " className="text-blue-600 hover:text-blue-800 underline font-medium">
            Get in Touch Section
          </Link>{" "}
          on our website
        </span>
      )
    }

    // Return original answer if no links needed
    return answer
  }

  return (
    <div className="w-full bg-white">
      {/* Black header background */}
      <div className="w-full bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-white text-4xl font-bold">General FAQ's</h2>
        </div>
      </div>

      {/* FAQ section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-4 py-16">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-md">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-base font-medium text-black">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-black transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-600 text-sm leading-relaxed">
                  {renderAnswerWithLinks(faq.answer)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
