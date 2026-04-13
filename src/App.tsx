import { useEffect } from "react";
import { injectAnalytics } from "@/config/analytics";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Mechanism } from "@/components/Mechanism";
import { Modules } from "@/components/Modules";
import { Bonus } from "@/components/Bonus";
import { Objections } from "@/components/Objections";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function App() {
  useEffect(() => {
    injectAnalytics();
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <Problem />
      <Mechanism />
      <Modules />
      <Bonus />
      <Objections />
      <FinalCTA />
      <Footer />
    </main>
  );
}
