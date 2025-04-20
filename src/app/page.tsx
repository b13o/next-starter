import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
} from "@/components/ui/breadcrumb";

export default function Home() {
  return (
    <div className="max-w-md mx-auto flex flex-col p-6 space-y-6">
      <h1 className="text-2xl font-bold">shadcn/ui 導入確認</h1>

      <Button>Button</Button>
      <Badge>Badge</Badge>

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Docs</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
