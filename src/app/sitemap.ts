import { MetadataRoute } from "next";
import { LOCATIONS } from "@/lib/seo/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://shopta-serrure.fr";

  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  const cityRoutes: MetadataRoute.Sitemap = LOCATIONS.map((loc) => ({
    url: `${baseUrl}/villes/${loc.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: loc.slug === "paris" ? 0.9 : 0.7,
  }));

  return [...staticRoutes, ...cityRoutes];
}
