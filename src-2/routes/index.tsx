import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Mechanism } from "@/components/Mechanism";
import { Modules } from "@/components/Modules";
import { Bonus } from "@/components/Bonus";
import { Objections } from "@/components/Objections";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { injectAnalytics } from "@/config/analytics";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Prompt de Carteira — Monte sua carteira de investimentos com IA",
      },
      {
        name: "description",
        content:
          "Um prompt estruturado que gera carteiras de investimento com lógica fundamentalista. Use no ChatGPT ou Claude e aprenda a validar cada decisão.",
      },
      {
        property: "og:title",
        content: "Prompt de Carteira — Invista com lógica de analista usando IA",
      },
      {
        property: "og:description",
        content:
          "Gere carteiras com critério fundamentalista usando um prompt estruturado. Inclui aulas práticas e aulão bônus de 50 minutos.",
      },
    ],
  }),
});

function Index() {
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
