import { Rocket } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center relative">
      <div className="flex flex-col items-center justify-center z-10">
        <div className="animate-bounce mb-8">
          <Rocket className="h-12 w-12 text-teal-600" />
        </div>
        <h2 className="text-2xl font-bold mb-2">読み込み中...</h2>
        <p className="text-muted-foreground">コンテンツを準備しています</p>

        <div className="w-48 h-1 bg-gray-200 rounded-full mt-6 overflow-hidden">
          <div className="h-full bg-teal-600 animate-pulse rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
