import { Closing } from "@/components/Closing";
import Features from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Pricing } from "@/components/Pricing";
import { Reason } from "@/components/Reason";
import { TestimonialsSection } from "@/components/Reviews";
import { TopSection } from "@/components/TopSection";
import Trustees from "@/components/Trustees";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-4 gap-8 bg-slate-100 ">
      <Navbar />
      <TopSection />
      <Trustees />
      <Features />
      <Reason />
      <Pricing />
      <TestimonialsSection />
      <Closing />
      <Footer />
    </div>
  );
}
