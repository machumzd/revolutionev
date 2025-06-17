import Image from "next/image";
import Link from "next/link";

type SponsorCardProps = {
  title: string;
  subtitle: string;
  image: string;
  className?: string;
  big?: boolean;
};

function SponsorCard({
  title,
  subtitle,
  image,
  className = "",
  big = false,
}: SponsorCardProps) {
  return (
    <div
      className={`bg-white overflow-hidden relative w-full h-full p-6 md:p-10 ${className}`}
    >
       <div className="relative w-full bg-white text-black p-2">
        <h3 className="text-xl md:text-2xl font-normal leading-snug">
          {title}
        </h3>
        <h3 className="text-xl md:text-2xl font-normal leading-snug">
          {subtitle}
        </h3>
      </div>
      {/* Image */}
      <div className="relative w-full h-full">
        <Image
          src={image}
          width={big ? 717 : 470}
          height={big ? 680 : 620}
          alt={`${title} ${subtitle}`}
          className="object-contain"
        />
      </div>

      {/* Text Content */}
     

      {/* Arrow Shape */}
      <div className="absolute bottom-6 right-2 md:bottom-9 md:right-4 border-r-[40px] md:border-r-[70px] border-r-transparent border-t-[40px] md:border-t-[70px] border-t-teal-400" />
    </div>
  );
}

export default function SponsorshipBenefits() {
  return (
    <div className=" bg-black text-white p-6 md:p-10 min-h-screen">
      <h2 className="text-2xl md:text-3xl font-normal mb-8">Why Sponsor?</h2>
      <div className="container mx-auto mb-12 ">
        {/* Main Grid */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 ">
          <SponsorCard
            title="Brand"
            subtitle="Positioning"
            image="/image/Sponsors/img1.png"
          />
          <SponsorCard
            title="Direct access to"
            subtitle="decision-makers"
            image="/image/Sponsors/img2.png"
          />
          <SponsorCard
            title="High-Quality"
            subtitle="Networking Opportunities"
            image="/image/Sponsors/img3.png"
          />
          <SponsorCard
            title="Boost Visibility with"
            subtitle="Strategic Branding"
            image="/image/Sponsors/img4.png"
          />
          <SponsorCard
            title="Email"
            subtitle="Branding"
            image="/image/Sponsors/img5.png"
          />
          <SponsorCard
            title="Social Media"
            subtitle="Endorsement"
            image="/image/Sponsors/img6.png"
          />
        </div>

        {/* Last 2 Cards */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          <SponsorCard
            title="PR"
            subtitle="Support"
            big={true}
            image="/image/Sponsors/img7.png"
          />
          <SponsorCard
            title="Speaking"
            subtitle="Opportunities"
            big={true}
            image="/image/Sponsors/img8.png"
          />
        </div>
      </div>
      {/* CTA Buttons */}
      <div className="flex flex-col md:flex-row justify-center mt-8 gap-4">
        <Link href="/register?t=sponsor">
          <button className="w-full md:w-60 bg-white text-black px-6 py-2 text-sm font-medium">
            Sponsor
          </button>
        </Link>
        <button className="w-full md:w-60 bg-transparent border border-white text-white px-6 py-2 text-sm font-medium">
          Request Tailored Package
        </button>
      </div>
    </div>
  );
}
