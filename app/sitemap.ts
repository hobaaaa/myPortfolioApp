import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://denizgokbudak.com";

  return [
    "",
    "/hizmetlerimiz",
    "/portfolio",
    "/hakkimizda",
    "/iletisim",
    "/kartvizit-sayfasi"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8
  }));
}
