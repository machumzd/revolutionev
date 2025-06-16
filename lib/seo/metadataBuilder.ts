// lib/seo/metadataBuilder.ts
import { Metadata } from "next";

type BuildMetadataArgs = {
  title: string;
  description: string;
  slug?: string;
  basePath?: string;
  image?: string;
};

export const buildMetadata = ({
  title,
  description,
  slug = "",
  basePath = "",
  image = "/og-image.png", // Default fallback image
}: BuildMetadataArgs): Metadata => {
  const fullUrl = `https://www.revolutionevmalaysia.com/${basePath}/${slug}`.replace(/\/+$/, "");

  return {
    title: `${title} | Revolution EV Malaysia`,
    description,
    openGraph: {
      title,
      description,
      url: fullUrl,
      images: [
        {
          url: `https://www.revolutionevmalaysia.com${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: "Revolution EV Malaysia",
      type: "website",
      locale: "en_MY",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://www.revolutionevmalaysia.com${image}`],
      creator: "@RevolutionEV",
    },
  };
};
