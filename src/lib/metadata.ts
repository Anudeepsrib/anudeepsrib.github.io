import type { Metadata } from "next";

export const SITE_URL = "https://anudeepsri.com";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  publishedTime?: string;
};

export function pageMetadata({
  title,
  description,
  path,
  publishedTime,
}: PageMetadataOptions): Metadata {
  const social = {
    title,
    description,
    url: path,
    siteName: "Anudeep Sri Bathina Portfolio",
    images: [
      {
        url: "/assets/logo.png",
        width: 731,
        height: 731,
        alt: "Anudeep Sri Bathina portfolio logo",
      },
    ],
  };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: publishedTime
      ? { ...social, type: "article", publishedTime }
      : { ...social, type: "website" },
    twitter: {
      card: "summary",
      title,
      description,
      images: ["/assets/logo.png"],
    },
  };
}
