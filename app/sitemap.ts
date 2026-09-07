import { MetadataRoute } from "next";

const BASE_URL = "https://myavedan.com";

interface SitemapRoute {
  path: string;
  changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly";
  priority: number;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date().toISOString();

  const routes: SitemapRoute[] = [
    { path: "", changeFrequency: "daily", priority: 1.0 },
    { path: "/ecosystem", changeFrequency: "weekly", priority: 0.9 },
    { path: "/sectors/education", changeFrequency: "daily", priority: 0.9 },
    { path: "/sectors/business", changeFrequency: "daily", priority: 0.9 },
    { path: "/sectors/public-g2c", changeFrequency: "daily", priority: 0.9 },
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/compliance", changeFrequency: "monthly", priority: 0.8 },
    { path: "/vault", changeFrequency: "monthly", priority: 0.7 },
    { path: "/directory/job-avedan", changeFrequency: "daily", priority: 0.85 },
    { path: "/directory/exam-avedan", changeFrequency: "daily", priority: 0.85 },
    { path: "/directory/biz-avedan", changeFrequency: "daily", priority: 0.85 },
    { path: "/directory/legal-avedan", changeFrequency: "daily", priority: 0.85 },
    { path: "/directory/yojana-avedan", changeFrequency: "daily", priority: 0.85 },
    { path: "/directory/sarkari-avedan", changeFrequency: "daily", priority: 0.85 },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
