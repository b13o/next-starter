import Link from "next/link";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center relative">
      <div className="bg-white bg-opacity-70 rounded-lg p-8 shadow-md border border-gray-100 max-w-md w-full z-10 text-center">
        <h1 className="text-9xl font-bold text-teal-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-2">ページが見つかりません</h2>
        <p className="text-muted-foreground mb-8">
          お探しのページは存在しないか、移動した可能性があります。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-teal-600 hover:bg-teal-700">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              ホームに戻る
            </Link>
          </Button>

          <Button
            variant="outline"
            asChild
            className="border-teal-600 text-teal-600 hover:text-teal-700 hover:border-teal-700"
          >
            <Link href="/docs">
              <Search className="mr-2 h-4 w-4" />
              ドキュメントを見る
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
