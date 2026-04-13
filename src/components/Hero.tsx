import { motion } from "framer-motion";
import { useCTALink } from "@/hooks/use-cta-link";
import { CTA_TEXT } from "@/config/cta";

export function Hero() {
  const { openCTA } = useCTALink();

  return (
    <section className="relative min-h-[10vh] flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-glow-green" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[800px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 font-body text-sm font-medium text-primary">
            Prompt + Aulas de Investimento
          </span>
        </motion.div>

        <motion.h1
          className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Um prompt que monta sua carteira de investimentos{" "}
          <span className="text-gradient-green">com lógica de analista</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Use IA com um prompt estruturado para gerar carteiras com critério
          fundamentalista e aprenda a validar cada decisão na prática.
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={openCTA}
            className="group relative inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-heading text-lg font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            {CTA_TEXT}
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </motion.div>

        {/* Trust line */}
        <motion.p
          className="mt-6 text-sm text-muted-foreground/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Acesso imediato
        </motion.p>
      </div>
    </section>
  );
}
