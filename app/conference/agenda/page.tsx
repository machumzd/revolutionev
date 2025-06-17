"use client"

import { useState } from "react"
import { agendaData } from "./agendaDatas"

type DayKey = 'day1' | 'day2'

export default function Agenda() {
  const [activeDay, setActiveDay] = useState<DayKey>('day1')
  const sessions = agendaData[activeDay].sessions

  // Group agenda items by session
  const grouped = sessions.reduce((acc: any, item) => {
    if (item.session) {
      acc[item.session] = acc[item.session] || []
      acc[item.session].push(item)
    } else {
      acc.__misc = acc.__misc || []
      acc.__misc.push(item)
    }
    return acc
  }, {})

  const getBadgeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "keynote":
        return "bg-blue-200 text-blue-800"
      case "presentation":
        return "bg-yellow-200 text-yellow-800"
      case "panel":
        return "bg-purple-200 text-purple-800"
      case "qa":
        return "bg-sky-200 text-sky-800"
      case "break":
      case "networking":
        return "bg-gray-200 text-gray-800"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="bg-black text-white min-h-screen py-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
        2025 Agenda
      </h1>

      {/* Tab Switcher */}
      <div className="flex space-x-4 mb-10">
        {(['day1', 'day2'] as DayKey[]).map(day => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`px-6 py-2 rounded font-semibold transition-all ${
              activeDay === day
                ? 'bg-gradient-to-r from-green-400 to-teal-400 text-black'
                : 'border border-gray-600'
            }`}
          >
            {agendaData[day].label} {agendaData[day].date}
          </button>
        ))}
      </div>

      {/* Render Non-session Items */}
      {(grouped.__misc || []).map((item: any, idx: number) => (
        <div key={idx} className={
          "bg-white text-black p-4 rounded mb-4"}>
          <div className="text-sm text-gray-600 mb-1">Schedule {item.time}</div>
          <div className={`inline-block text-xs px-2 py-1 rounded ${getBadgeColor(item.type)}`}>
            {item.type}
          </div>
          <h4 className="mt-1 font-semibold text-lg">{item.title}</h4>
        </div>
      ))}

      {/* Render Session Groups */}
      {Object.entries(grouped).filter(([key]) => key !== '__misc').map(([session, items]: any, idx) => (
        <div key={idx} className="mb-10">
          <div className="bg-gradient-to-br from-green-400 to-teal-400 text-black p-4 rounded font-semibold mb-4">
            {session}
            <p className="text-sm font-normal">Session details or abstract could go here (if available in the data).</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {items.map((item: any, i: number) => (
              <div key={i} className="bg-white text-black p-4 rounded shadow">
                <div className="text-sm text-gray-500 mb-1">Schedule {item.time}</div>
                <div className={`inline-block text-xs font-semibold px-2 py-1 rounded mb-2 ${getBadgeColor(item.type)}`}>
                  {item.type}
                </div>
                <h4 className="font-semibold text-lg">{item.title}</h4>
                {item.speaker && (
                  <div className="mt-2 text-sm text-gray-700">
                    <div className="font-semibold">{item.speaker.name}</div>
                    <div>{item.speaker.role}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* CTA */}
      <div className="flex justify-center mt-12">
        <a href="/register?t=delegate">
          <button className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition rounded">
            Get Delegate Pass
          </button>
        </a>
      </div>
    </div>
  )
}
