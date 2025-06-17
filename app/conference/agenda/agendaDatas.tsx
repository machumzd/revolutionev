export type Session = {
  time: string;
  title: string;
  description?: string;
  type?: 'Keynote' | 'Presentation' | 'Q&A' | 'Break' | 'Panel';
  session?: string;
};

export type AgendaDay = {
  label: string;
  date: string;
  sessions: Session[];
};

export const agendaData: Record<'day1' | 'day2', AgendaDay> = {
  day1: {
    label: "Day One",
    date: "23 October 2025",
    sessions: [
      { time: "09:00 – 09:30", title: "Registration | Safety Briefing", type: "Break" },
      { time: "09:30 – 10:00", title: "Networking | Coffee Break", type: "Break" },
      { time: "10:00 – 10:05", title: "Official Welcome Remarks - Organizer", session: "Session 1", type: "Keynote" },
      { time: "10:05 – 10:20", title: "Official Ministerial", session: "Session 1", type: "Keynote" },
      { time: "10:20 – 10:35", title: "Keynote Address", session: "Session 1", type: "Keynote" },
      { time: "10:35 – 10:50", title: "TBC", session: "Session 1", type: "Presentation" },
      { time: "10:50 – 11:05", title: "TBC", session: "Session 1", type: "Presentation" },
      { time: "11:05 – 11:20", title: "TBC", session: "Session 1", type: "Presentation" },
      { time: "11:20 – 11:25", title: "Q&A Open Mic", type: "Q&A" },
      { time: "11:25 – 11:45", title: "Networking | Coffee Break", type: "Break" },
      { time: "11:45 – 12:00", title: "Smart Mobility & the Government’s Role in Smart City Design", session: "Session 2", type: "Presentation" },
      { time: "12:00 – 12:15", title: "eMobility for All: Policies for Inclusive, Affordable Public Transport", session: "Session 2", type: "Presentation" },
      { time: "12:15 – 12:20", title: "Q&A Open Mic", type: "Q&A" },
      { time: "12:20 – 13:00", title: "Policy on the Move: Crafting Malaysia’s eMobility Roadmap", session: "Session 2", type: "Panel" },
      { time: "13:00 – 13:05", title: "Q&A Open Mic", type: "Q&A" },
      { time: "13:05 – 14:05", title: "Networking | Lunch Break", type: "Break" },
      { time: "14:05 – 14:20", title: "Overcoming Urban Charging Challenges: Making EV Charging Accessible", session: "Session 3", type: "Presentation" },
      { time: "14:20 – 14:35", title: "Future-Ready Tech: Innovations in Fast, Smart & Sustainable Charging", session: "Session 3", type: "Presentation" },
      { time: "14:35 – 14:50", title: "TBC", session: "Session 3", type: "Presentation" },
      { time: "14:50 – 14:55", title: "Q&A Open Mic", type: "Q&A" },
      { time: "14:55 – 15:35", title: "Building the Backbone: Scaling Charging Infrastructure for Nationwide EV Adoption", session: "Session 3", type: "Panel" },
      { time: "15:35 – 15:40", title: "Q&A Open Mic", type: "Q&A" },
      { time: "15:40 – 16:00", title: "Networking | Coffee Break", type: "Break" },
      { time: "16:00 – 16:15", title: "Green Investments and ESG in Transport", session: "Session 4", type: "Presentation" },
      { time: "16:15 – 16:30", title: "Funding the Future: Investment Opportunities in Malaysia’s EV Ecosystem", session: "Session 4", type: "Presentation" },
      { time: "16:30 – 16:35", title: "Q&A Open Mic", type: "Q&A" },
      { time: "16:35 – 16:40", title: "End of Day 1 | Closing Remarks", type: "Break" },
    ],
  },
  day2: {
    label: "Day Two",
    date: "24 October 2025",
    sessions: [
      { time: "09:00 – 09:15", title: "Registration | Safety Briefing", type: "Break" },
      { time: "09:15 – 09:45", title: "Networking | Coffee Break", type: "Break" },
      { time: "09:45 – 10:00", title: "Localizing EV Manufacturing: Policies for a Sustainable Supply Chain", session: "Session 1", type: "Presentation" },
      { time: "10:00 – 10:15", title: "TBC", session: "Session 1", type: "Presentation" },
      { time: "10:15 – 10:30", title: "Fastest & Visible Ways to Drive eMobility Adoption", session: "Session 1", type: "Presentation" },
      { time: "10:30 – 10:35", title: "Q&A Open Mic", type: "Q&A" },
      { time: "10:35 – 10:05", title: "Policies & Strategies: Accelerating EV Adoption and Growth", session: "Session 1", type: "Presentation" },
      { time: "10:05 – 10:10", title: "Q&A Open Mic", type: "Q&A" },
      { time: "10:10 – 10:30", title: "Networking | Coffee Break", type: "Break" },
      { time: "10:30 – 10:45", title: "EVs, AI & Urban Planning: The Smart City Trifecta", session: "Session 2", type: "Presentation" },
      { time: "10:45 – 11:00", title: "Unlocking the Potential of V2G in Smart Cities", session: "Session 2", type: "Presentation" },
      { time: "11:00 – 11:15", title: "TBC", session: "Session 2", type: "Presentation" },
      { time: "11:15 – 11:20", title: "Q&A Open Mic", type: "Q&A" },
      { time: "11:20 – 12:00", title: "Public Transport Electrification: Beyond Buses and Taxis", session: "Session 2", type: "Presentation" },
      { time: "12:00 – 12:05", title: "Q&A Open Mic", type: "Q&A" },
      { time: "12:05 – 13:05", title: "Networking | Lunch Break", type: "Break" },
      { time: "13:05 – 13:20", title: "Thermal Management Innovations in EV Batteries", session: "Session 3", type: "Presentation" },
      { time: "13:20 – 13:35", title: "Role of Battery Management Systems in EV Safety and Performance", session: "Session 3", type: "Presentation" },
      { time: "13:35 – 13:50", title: "Designing the Future of Battery Intelligence: Hands-On with BMS Architecture", session: "Session 3", type: "Presentation" },
      { time: "13:50 – 13:55", title: "Q&A Open Mic", type: "Q&A" },
      { time: "13:55 – 14:35", title: "Smarter, Safer, Stronger: Innovations in Battery Management Systems for the EV Era", session: "Session 3", type: "Panel" },
      { time: "14:35 – 14:40", title: "Q&A Open Mic", type: "Q&A" },
      { time: "14:40 – 15:00", title: "Networking | Coffee Break", type: "Break" },
      { time: "15:00 – 15:40", title: "Making Sustainable Mobility a Reality: Electrification Across All Transport Modes", session: "Session 4", type: "Presentation" },
      { time: "15:40 – 15:45", title: "Q&A Open Mic", type: "Q&A" },
      { time: "15:45 – 15:50", title: "End of Day 2 | Closing Remarks", type: "Break" },
    ],
  },
};



