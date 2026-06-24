import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

interface PageShellProps {
  children: React.ReactNode;
  fullBleedHero?: boolean;
}

export function PageShell({ children, fullBleedHero = false }: PageShellProps) {
  return (
    <>
      <Header />
      <main className={fullBleedHero ? "min-h-screen" : "min-h-screen pt-16"}>
        {children}
      </main>
      <Footer />
    </>
  );
}
