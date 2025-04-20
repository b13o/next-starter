import Header from "@/components/header";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen overflow-hidden flex-col mx-auto relative">
      <Header />
      {/* 背景装飾 */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500 opacity-20 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-500 opacity-20 rounded-full blur-3xl -z-10" />
      <main className="flex-1 relative z-10">{children}</main>
    </div>
  );
}
