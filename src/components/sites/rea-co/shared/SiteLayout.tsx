import { Header } from "@/components/sites/rea-co/root-00000000/Header";
import { Footer } from "@/components/sites/rea-co/root-00000000/Footer";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
