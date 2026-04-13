import { motion } from "framer-motion";

const PROBLEMS = [
  {
    icon: "\u{1F4F1}",
    text: "Copia carteira de influencer",
  },
  {
    icon: "\u{1F4AC}",
    text: "Segue dica de grupo no WhatsApp",
  },
  {
    icon: "\u{1F635}",
    text: "Tenta analisar, sem entender os fundamentos",
  },
];

export function Problem() {
  return (
    <section className="relative px-4 py-0 sm:py-0">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          className="font-heading text-3xl font-bold sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          A maioria das pessoas investe assim:
        </motion.h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={i}
              className="rounded-xl border border-border/50 bg-card/50 px-6 py-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className="text-3xl">{p.icon}</span>
              <p className="mt-4 text-xl">{p.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mt-12 text-xl font-medium text-foreground sm:text-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          O problema não é falta de informação.{" "}
          <span className="text-gradient-gold font-bold">
            É não ter um processo.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
