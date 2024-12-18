import { Navbar } from "@/components/Navbar";
import { TopSection } from "@/components/TopSection";
import { Trustees } from "@/components/Trustees";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-4 gap-8 bg-slate-100 ">
      <Navbar />
      <TopSection />
      <Trustees />
    </div>
  );
}
