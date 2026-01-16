import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import AppGrid from "@/components/AppGrid";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Header />
      <div className="flex flex-1 flex-col">
        <Hero />
        <div className="layout-container mx-auto flex w-full max-w-[1400px] flex-1 flex-col gap-8 px-4 py-8 lg:flex-row lg:px-10">
          <Sidebar />
          <main className="flex-1">
            <AppGrid />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
