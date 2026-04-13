import { motion } from "framer-motion";

const OBJECTIONS = [
  {
    question: '"Sou iniciante"',
    answer:
      "Feito pra quem não sabe analisar. O prompt organiza o raciocínio que você ainda não tem.",
  },
  {
    question: '"IA pode errar"',
    answer:
      "Pior é investir sem critério nenhum. Aqui você tem geração + validação.",
  },
  {
    question: '"Isso substitui estudar?"',
    answer:
      "Não. Acelera e dá direção. O bônus complementa tudo com uma aula prática completa.",
  },
];

export function Objections() {
  return (
    <section className="px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="text-center font-heading text-3xl font-bold sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Dúvidas frequentes
        </motion.h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {OBJECTIONS.map((obj, i) => (
            <motion.div
              key={i}
              className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="font-heading text-lg font-bold text-primary">
                {obj.question}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {obj.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
