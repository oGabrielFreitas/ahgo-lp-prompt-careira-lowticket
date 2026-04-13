import { motion } from "framer-motion";
import { useCTALink } from "@/hooks/use-cta-link";
import { CTA_TEXT_BONUS } from "@/config/cta";

const TOPICS = [
  "ROE, P/L, EBITDA e os indicadores que mais importam",
  "Como usar o Status Invest para analisar empresas na prática",
  "Como validar se a carteira gerada pelo prompt faz sentido",
  "Como identificar uma empresa sólida sem ser analista",
];

export function Bonus() {
  const { openCTA } = useCTALink();

  return (
    <section className="relative px-4 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-glow-gold opacity-60" />

      <div className="relative mx-auto max-w-3xl">
        <motion.div
          className="overflow-hidden rounded-2xl border-2 border-gold-glow bg-gradient-to-br from-surface-elevated to-card p-8 sm:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-gold/15 px-4 py-1.5 text-sm font-bold text-gold">
            <span>🎁</span>
            BÔNUS ESPECIAL
          </div>

          <h2 className="font-heading text-2xl font-bold sm:text-3xl">
            Aulão de Análise Fundamentalista
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Aula completa de{" "}
            <span className="font-semibold text-gold">50 minutos</span> onde
            você aprende a ler os dados por trás de qualquer ação — com exemplos
            reais e ferramentas usadas por investidores sérios.
          </p>

          <div className="mt-8 space-y-3">
            {TOPICS.map((topic, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <svg
                  className="mt-1 h-4 w-4 shrink-0 text-gold"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-foreground/85">{topic}</span>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 rounded-lg border border-gold/20 bg-gold/5 px-5 py-3 text-sm italic text-foreground/80">
            "Você usa o prompt para gerar — e o bônus para entender o que foi
            gerado."
          </p>

          <div className="mt-8">
            <button
              onClick={openCTA}
              className="group inline-flex items-center gap-2 rounded-xl bg-gold px-7 py-3.5 font-heading text-base font-semibold text-gold-foreground shadow-lg shadow-gold/20 transition-all hover:shadow-xl hover:shadow-gold/30 hover:-translate-y-0.5 active:translate-y-0"
            >
              {CTA_TEXT_BONUS}
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
      </div>
    </section>
  );
}
