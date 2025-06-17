import Image from "next/image";
import Link from "next/link";

type SponsorCardProps = {
  title: string;
  subtitle: string;
  image: string;
  className?: string;
};

function SponsorCard({
  title,
  subtitle,
  image,
  className = "",
}: SponsorCardProps) {
  return (
    <div
      className={`bg-white overflow-hidden relative w-full h-auto md:h-[848px] p-3 pb-8 pl-4 md:pl-8 ${className}`}
    >
      {/* Image */}
      <div className="relative w-full h-[250px] md:h-[calc(100%-24px)] md:w-[calc(100%-24px)] overflow-hidden">
        <Image
          src={image}
          alt={`${title} ${subtitle}`}
          fill
          className="object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="absolute top-2 left-2 right-2 bg-white px-4 py-4 md:pt-10 md:pb-10 text-black">
        <h3 className="text-xl md:text-4xl font-normal leading-snug">
          {title}
        </h3>
        <h3 className="text-xl md:text-4xl font-normal leading-snug">
          {subtitle}
        </h3>
      </div>

      {/* Arrow Shape */}
      <div className="absolute bottom-6 right-2 md:bottom-9 md:right-4 border-r-[40px] md:border-r-[70px] border-r-transparent border-t-[40px] md:border-t-[70px] border-t-teal-400" />
    </div>
  );
}

export default function SponsorshipBenefits() {
  return (
    <div className=" bg-black text-white p-6 md:p-10 min-h-screen">
      <h2 className="text-2xl md:text-3xl font-normal mb-8">Why Sponsor?</h2>

      {/* Main Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-10" >
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 px-20">
        <SponsorCard
          title="PR"
          subtitle="Support"
          image="/image/Sponsors/img7.png"
        />
        <SponsorCard
          title="Speaking"
          subtitle="Opportunities"
          image="/image/Sponsors/img8.png"
        />
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
