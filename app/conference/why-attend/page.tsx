
import React from "react";
// import RevolutionBanner from "../exhibition/WhyExhibit/revolution-ev-component";
import RevolutionEVSection from "./RevolutionEvSection";
// import WhyAttendEVConferen;
import Component from "./WhyAttend";

export const metadata = {
  title: "Why Attend | Revolution EV Malaysia 2025",
  description: "Discover why industry leaders, investors, and policymakers are attending Revolution EV 2025. Explore key benefits, networking opportunities, and thought leadership sessions.",
};


export default function Main(){
    return(
        <div>
            <RevolutionEVSection/>
            <Component/>
        </div>

    );
}