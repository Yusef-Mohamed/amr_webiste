import { getUrlFromPath } from "@/utils";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: getUrlFromPath("/"),
    },
    {
      url: "/about",
    },
    {
      url: "/contact",
    },
  ];
}
