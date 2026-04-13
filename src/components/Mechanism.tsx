import { motion } from "framer-motion";

const FEATURES = [
  "Organiza o raciocínio de um analista fundamentalista",
  "Gera carteira considerando seu perfil, prazo e objetivos",
  "Aplica lógica com critérios reais automaticamente",
  "Utilizável imediatamente no ChatGPT ou Claude",
];

export function Mechanism() {
  return (
    <section className="relative px-4 py-20 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-glow-green opacity-50" />
      <div className="relative mx-auto max-w-3xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-widest text-primary">
            O Mecanismo
          </span>
          <h2 className="font-heading text-3xl font-bold sm:text-4xl">
            Existe um jeito diferente.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Um prompt estruturado que, ao ser aplicado no ChatGPT ou Claude,
            organiza o raciocínio de um analista fundamentalista e gera uma
            carteira com critérios reais.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3 rounded-lg border border-border/40 bg-surface-elevated/50 p-5"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <svg
                className="mt-0.5 h-7 w-7 shrink-0 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-base">{f}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-10 text-center text-base text-muted-foreground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Você não precisa saber tudo sobre investimentos.{" "}
          <span className="font-medium text-foreground">
            Você precisa de um ponto de partida confiável.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
