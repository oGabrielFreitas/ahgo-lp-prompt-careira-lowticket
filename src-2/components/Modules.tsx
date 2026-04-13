import { motion } from "framer-motion";

const LESSONS = [
  { number: "01", title: "Visão Geral do Sistema" },
  { number: "02", title: "Como o Prompt Gera a Carteira" },
  { number: "03", title: "Customizando a Carteira para Seu Perfil de Investidor" },
  { number: "04", title: "Como Interpretar e Validar a Carteira Gerada" },
];

export function Modules() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            Conteúdo
          </span>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            O que você recebe
          </h2>
        </motion.div>

        <motion.div
          className="mt-12 rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-lg">
              📦
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                Módulo Principal
              </p>
              <h3 className="font-heading text-lg font-bold">
                Como Usar o Prompt de Carteira
              </h3>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {LESSONS.map((lesson, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-4 rounded-lg bg-surface/60 px-5 py-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.08 }}
              >
                <span className="font-heading text-sm font-bold text-primary/60">
                  {lesson.number}
                </span>
                <span className="text-sm text-foreground/90">{lesson.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
