import React from "react";
import Component from "./marketOutlook";
import WhyMalaysia from "./why-malaysia";

export const metadata={
    title: "Market Outlook | Revolution EV Malaysia 2025",
    description: "Discover the evolving market landscape for electric vehicles in Malaysia. Explore trends, challenges, and opportunities for the future of EVs in Malaysia."
}

export default function Main(){
    return(
        <div>
            <Component/>
            <WhyMalaysia/>
        </div>
    )
}