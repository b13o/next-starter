import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getAllReleaseVersions, getReleaseData } from "@/lib/markdown";

interface ReleasePageProps {
  params: Promise<{
    version: string;
  }>;
}

export async function generateMetadata({
  params,
}: ReleasePageProps): Promise<Metadata> {
  const { version } = await params;
  const releaseData = await getReleaseData(version);
  return {
    title: `リリース ${version}`,
    description: releaseData.title,
    openGraph: {
      images: [
        {
          // next-starterは、公開するGitHubリポジトリのURLを指定します
          url: `next-starter/releases/${version}/opengraph-image.png`,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const versions = getAllReleaseVersions();
  return versions;
}

export default async function ReleasePage({ params }: ReleasePageProps) {
  const { version } = await params;

  const releaseData = await getReleaseData(version);
  const { date, type, title, contentHtml } = releaseData;

  const isMajor = type === "major";
  const isMinor = type === "minor";

  return (
    <div className="container mx-auto max-w-4xl py-10 md:py-16 relative z-10">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">ホーム</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/docs">概要</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink>{version}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-8">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          {isMajor && <Badge className="bg-teal-600">メジャーリリース</Badge>}
          {isMinor && (
            <Badge variant="outline" className="text-teal-600 border-teal-600">
              マイナーリリース
            </Badge>
          )}
          {!isMajor && !isMinor && (
            <Badge variant="outline" className="text-gray-500 border-gray-500">
              パッチリリース
            </Badge>
          )}
        </div>
        <div className="mt-2 flex items-center text-muted-foreground">
          <Calendar className="mr-1 h-4 w-4" />
          <span>
            {new Date(date).toLocaleDateString("ja-JP", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </div>

      <div className="space-y-8">
        {/* カスタムスタイルを適用したMarkdown内容 */}
        <div className="bg-white bg-opacity-70 rounded-lg p-8 shadow-sm border border-gray-100">
          <div className="prose prose-h2:text-teal-600 -mt-12 max-w-none">
            <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          </div>
        </div>

        <div className="pt-8">
          <Button
            variant="link"
            asChild
            className="text-teal-600 hover:text-teal-700"
          >
            <Link href="/docs">
              <ChevronLeft className="mr-2 h-4 w-4" />
              すべてのリリースに戻る
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
