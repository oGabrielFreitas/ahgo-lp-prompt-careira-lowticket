import { motion } from "framer-motion";
import { useCTALink } from "@/hooks/use-cta-link";
import { CTA_TEXT_FINAL } from "@/config/cta";

export function FinalCTA() {
  const { openCTA } = useCTALink();

  return (
    <section className="relative px-4 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-glow-green" />

      <motion.div
        className="relative mx-auto max-w-2xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl">
          Pare de investir no escuro.
        </h2>

        <p className="mx-auto mt-5 max-w-md text-lg text-muted-foreground">
          Use um prompt que pensa como analista — e aprenda a validar cada
          decisão.
        </p>

        <div className="mt-10">
          <button
            onClick={openCTA}
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-heading text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            {CTA_TEXT_FINAL}
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
