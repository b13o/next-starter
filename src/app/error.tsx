"use client";

import Link from "next/link";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ reset }: ErrorProps) {
  return (
    <div className="flex min-h-screen items-center justify-center relative">
      <div className="bg-white bg-opacity-70 rounded-lg p-8 shadow-md border border-gray-100 max-w-md w-full z-10">
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-red-100 p-3">
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center mb-2">
          エラーが発生しました
        </h2>
        <p className="text-muted-foreground text-center mb-6">
          ページの読み込み中に問題が発生しました。しばらくしてからもう一度お試しください。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} className="bg-teal-600 hover:bg-teal-700">
            <RefreshCw className="mr-2 h-4 w-4" />
            再試行
          </Button>

          <Button
            variant="outline"
            asChild
            className="border-teal-600 text-teal-600 hover:text-teal-700 hover:border-teal-700"
          >
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              ホームに戻る
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
