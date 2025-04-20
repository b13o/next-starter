import { MetadataRoute } from "next";
import { siteMetadata } from "../constants/site-metadata";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      //   disallow: ["/private/", "/admin/"],
    },
    sitemap: `${siteMetadata.SITE_URL}/sitemap.xml`,
  };
}
