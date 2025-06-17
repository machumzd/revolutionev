import type React from "react";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import "react-phone-input-2/lib/style.css";
import Navbar from "./components/NavBar";
import Footer from "./components/footer";
import Script from "next/script";
import ClientAnalytics from "./components/utils/clientAnalytics";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const mendaFont = localFont({
  src: [
    {
      path: "../public/fonts/menda/Menda Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/menda/Menda Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-menda",
});


export const metadata = {
  title: "Revolution EV Malaysia | 23-24 OCT 2025 | Electric Mobility Summit",
  description:
    "Join Malaysia’s flagship EV event in Kuala Lumpur – October 23–24, 2025. Explore cutting-edge electric vehicles, zero-emission tech, and the future of e-mobility.",
  keywords: [
    "EV Malaysia 2025",
    "electric vehicles",
    "e-mobility",
    "zero-emission",
    "electric cars",
    "Revolution EV",
    "#rev25",
    "smart mobility",
    "EV summit Malaysia",
    "sustainable transportation",
    "electric mobility conference",
    "EV exhibition",
    "KL EV event",
    "green future"
  ],
  authors: [{ name: "Revolution EV Malaysia" }],
  creator: "Revolution EV Malaysia",
  openGraph: {
    title: "Revolution EV Malaysia 2025 | Electric Mobility Summit",
    description:
      "Malaysia’s premier EV event returns October 23–24, 2025. Discover innovations in electric mobility, network with industry leaders, and shape the future of transportation.",
    url: "https://www.revolutionevmalaysia.com/",
    siteName: "Revolution EV Malaysia",
    images: [
      {
        url: "https://www.revolutionevmalaysia.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Revolution EV Malaysia 2025 Banner",
      },
    ],
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revolution EV Malaysia | 23-24 OCT 2025 | Electric Mobility Summit",
    description:
      "Explore the future of electric mobility at Malaysia’s flagship EV event. Innovation showcases, strategic networking & more – Oct 23–24, 2025 in Kuala Lumpur.",
    images: ["https://www.revolutionevmalaysia.com/og-image.png"],
    creator: "@RevolutionEV",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${mendaFont.variable}`}>
      <head>
        {/* ✅ Google Site Verification (optional) */}
        <meta
          name="google-site-verification"
          content="Yr_AowC4ajXeufTLujsbaqo_mC7DI1G2fAgN0pfeGXA"
        />
        {/* ✅ Favicons and Manifest */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />

        {/* ✅ Open Graph (OG) Meta for Social Sharing */}
        <meta property="og:title" content="Revolution EV Malaysia" />
        <meta
          property="og:description"
          content="Malaysia's flagship EV event for a smart, sustainable future."
        />
        <meta
          property="og:image"
          content="https://www.revolutionevmalaysia.com/og-image.png"
        />
        <meta
          property="og:url"
          content="https://www.revolutionevmalaysia.com/"
        />
        <meta property="og:type" content="website" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Revolution EV Malaysia" />
        <meta
          name="twitter:description"
          content="Malaysia's Sustainable Move towards an Electric, Smart, and Green Future."
        />
        <meta
          name="twitter:image"
          content="https://www.revolutionevmalaysia.com/og-image.png"
        />

        {/* ✅ Google Site Verification */}
        <meta
          name="google-site-verification"
          content="Yr_AowC4ajXeufTLujsbaqo_mC7DI1G2fAgN0pfeGXA"
        />

        {/* ✅ Google Tag Manager (Head) */}
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-'TWMN4XJV);
    `}
        </Script>
      </head>

      <body>
        {/* ✅ Google Tag Manager (noscript, immediately after <body>) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TWMN4XJV"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        {children}
        <Footer />
        <ClientAnalytics />
      </body>
    </html>
  );
}
