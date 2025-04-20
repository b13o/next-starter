import type { Metadata } from "next";
import Link from "next/link";
import {
  Code,
  Component,
  Layers,
  Zap,
  LayoutGrid,
  Bookmark,
  HeartHandshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Icons from "@/components/icons";
import { getAllReleases } from "@/lib/markdown";

export const metadata: Metadata = {
  title: "ドキュメント",
  description: "My Next Starterの使い方とリリース履歴",
};

export default function DocsPage() {
  // 最新の3つのリリースを取得
  const latestReleases = getAllReleases().slice(0, 3);

  // テンプレートの特徴
  const features = [
    {
      title: "最新バージョンの構成",
      description:
        "Next.js 15とReact 19を採用し、最新のWeb開発体験を提供します。",
      icon: <Zap className="w-10 h-10 text-teal-600" />,
    },
    {
      title: "App Router対応",
      description: "Next.js/ App Router による特別ファイルのセットアップ。",
      icon: <LayoutGrid className="w-10 h-10 text-teal-600" />,
    },
    {
      title: "UIコンポーネント",
      description: "美しくアクセシブルなUIコンポーネントをshadcn/uiで提供。",
      icon: <Component className="w-10 h-10 text-teal-600" />,
    },
    {
      title: "TypeScript完全対応",
      description: "型安全な開発環境で、バグを未然に防ぎ、開発効率を向上。",
      icon: <Code className="w-10 h-10 text-teal-600" />,
    },

    {
      title: "SEO設定",
      description: "サイトと各ページのメタデータ、サイトマップも記述済み。",
      icon: <Layers className="w-10 h-10 text-teal-600" />,
    },
    {
      title: "オープンソース",
      description: "ご自由にクローン・フォークして、カスタマイズできます。",
      icon: <HeartHandshake className="w-10 h-10 text-teal-600" />,
    },
  ];

  // クイックスタートステップ
  const quickstartSteps = [
    {
      number: "01",
      title: "リポジトリのクローン",
      description: "GitHubからプロジェクトをクローンします。",
      code: "git clone https://github.com/handle/next-starter.git",
    },
    {
      number: "02",
      title: "依存関係のインストール",
      description: "必要なパッケージをインストールします。",
      code: "cd next-starter\nnpm install",
    },
    {
      number: "03",
      title: "開発サーバーの起動",
      description: "ローカル環境で開発を始めましょう。",
      code: "npm run dev",
    },
  ];

  return (
    <div className="container mx-auto py-10 md:py-20 relative z-10">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl lg:text-6xl">
          <span className="text-teal-600">Next.js</span>の開発を
          <br />
          スムーズに始める
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          すぐに使える設定とコンポーネントで、プロジェクトの立ち上げ時間を短縮。
          <br />
          高品質なWebアプリケーションの開発に集中できます。
        </p>
      </div>

      {/* Features */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-24">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-70 rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Quick Start */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-6 text-teal-600">
            クイックスタート
          </h2>
          <div className="space-y-6">
            {quickstartSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-70 rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-teal-600 text-white font-bold">
                    {step.number}
                  </div>
                  <div className="flex-grow overflow-auto">
                    <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                    <p className="text-muted-foreground mb-3">
                      {step.description}
                    </p>
                    <pre className="bg-gray-100 text-sm p-3 rounded-md overflow-x-auto">
                      <code>{step.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Releases */}
        <div className="mb-16">
          <h2 className="text-3xl mb-6 font-bold tracking-tight text-teal-600">
            最新リリース
          </h2>
          <div className="space-y-4">
            {latestReleases.map((release) => (
              <div
                key={release.version}
                className="bg-white bg-opacity-70 rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Bookmark className="h-5 w-5 text-teal-600" />
                    <Link
                      href={`/releases/${release.version}`}
                      className="font-semibold hover:text-teal-600 transition-colors"
                    >
                      {release.version}
                    </Link>
                    {release.type === "major" && (
                      <span className="text-xs px-2 py-1 rounded-full bg-teal-100 text-teal-800">
                        メジャー
                      </span>
                    )}
                    {release.type === "minor" && (
                      <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">
                        マイナー
                      </span>
                    )}
                    {release.type === "patch" && (
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800">
                        パッチ
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {new Date(release.date).toLocaleDateString("ja-JP", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
                </div>
                <p className="mt-2 text-muted-foreground">{release.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight mb-6">
          今すぐ始めましょう
        </h2>
        <div className="flex flex-col sm:flex-row justify-center">
          <Button
            asChild
            className="bg-teal-600 hover:bg-teal-700 h-16 px-12! text-lg font-semibold"
          >
            <Link href="#">
              <Icons.gitHub className="mr-2 h-5 w-5 fill-white" />
              GitHubを見る
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
