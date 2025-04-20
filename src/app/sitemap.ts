import { MetadataRoute } from "next";
import { getAllReleaseVersions } from "@/lib/markdown";
import { siteMetadata } from "@/constants/site-metadata";

// サイトのベースURL
const baseUrl = siteMetadata.SITE_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // リリースノートのバージョン一覧を取得
  const releaseVersions = getAllReleaseVersions();

  // 静的なページの定義
  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
  ];

  // リリースノートの個別ページを追加
  const releasePages = releaseVersions.map((version) => {
    return {
      url: `${baseUrl}/releases/${version.version}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    };
  });

  // すべてのページをマージして返す
  return [...staticPages, ...releasePages];
}
