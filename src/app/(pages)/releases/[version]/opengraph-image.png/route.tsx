import { ImageResponse } from "next/og";
import { getAllReleaseVersions, getReleaseData } from "@/lib/markdown";
import { siteMetadata } from "@/constants/site-metadata";

export const dynamic = "force-static";

export async function generateStaticParams() {
  const versions = getAllReleaseVersions();
  return versions;
}

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}:wght@700&text=${encodeURIComponent(
    text
  )}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}

export async function GET(
  _: Request,
  {
    params,
  }: {
    params: Promise<{ version: string }>;
  }
) {
  const { version } = await params;
  // リリースデータを取得
  const releaseData = await getReleaseData(version);
  const { title } = releaseData;

  const size = {
    width: 1200,
    height: 630,
  };

  return new ImageResponse(
    (
      <div tw="flex flex-col items-center justify-center w-full h-full bg-white relative">
        {/* 背景の装飾円 - 右上 */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "100%",
            background: "rgba(13, 148, 136, 0.2)",
            filter: "blur(40px)",
          }}
        />

        {/* 背景の装飾円 - 左下 */}
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "100%",
            background: "rgba(13, 148, 136, 0.2)",
            filter: "blur(40px)",
          }}
        />

        {/* ロゴとサイト名 */}
        <div tw="absolute top-10 left-10 flex items-center">
          <svg
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="rgb(13, 148, 136)"
            strokeWidth="2"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
          <div tw="ml-4 text-4xl font-bold text-gray-800">My Next Starter</div>
        </div>

        {/* リリース情報 */}
        <div tw="flex flex-col items-center justify-center px-20 text-center">
          <div tw="text-9xl font-bold text-gray-800 max-w-6xl">{title}</div>
        </div>

        {/* フッター */}
        <div tw="absolute bottom-10 w-full flex justify-center text-gray-500 text-2xl">
          {siteMetadata.SITE_URL}
        </div>
      </div>
    ),
    {
      ...size,
      // フォントを指定
      fonts: [
        {
          name: "Inter",
          data: await loadGoogleFont(
            "Inter",
            "My Next Starter" + title + siteMetadata.SITE_URL
          ),
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
