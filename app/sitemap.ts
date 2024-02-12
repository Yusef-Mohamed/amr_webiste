import { products, projects } from "@/data/data";
import { getUrlFromPath } from "@/utils";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projectEntries: MetadataRoute.Sitemap = projects.map(({ id }) => ({
    url: getUrlFromPath(`/projects/${id}`),
  }));
  const productEntries: MetadataRoute.Sitemap = products.map(({ id }) => ({
    url: getUrlFromPath(`/products/${id}`),
  }));
  return [
    {
      url: getUrlFromPath("/"),
    },
    {
      url: getUrlFromPath("/company"),
    },
    {
      url: getUrlFromPath("/products"),
    },
    ...productEntries,
    ...projectEntries,
  ];
}
