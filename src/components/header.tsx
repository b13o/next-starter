import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileText, Rocket } from "lucide-react";
import Icons from "@/components/icons";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 container mx-auto w-full">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-4">
            <Rocket className="h-6 w-6 text-teal-600" />
            <span className="font-bold text-xl md:text-2xl tracking-tight">
              My Next Starter
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button
            asChild
            variant="link"
            size="lg"
            className="hidden md:flex text-lg"
          >
            <Link href="https://github.com/b13o/next-starter" target="_blank">
              <Icons.gitHub className="h-4 w-4 mr-2" />
              GitHub
            </Link>
          </Button>
          <Button
            asChild
            variant="link"
            size="lg"
            className="hidden md:flex text-lg"
          >
            <Link href="/docs">
              <FileText className="h-4 w-4 mr-2" />
              Docs
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
