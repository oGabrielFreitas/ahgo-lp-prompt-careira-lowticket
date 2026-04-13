export function Footer() {
  return (
    <footer className="border-t border-border/30 px-4 py-8">
      <p className="text-center text-xs text-muted-foreground/50">
        © {new Date().getFullYear()} Prompt de Carteira. Produto educacional. Não é recomendação de investimento.
      </p>
    </footer>
  );
}
