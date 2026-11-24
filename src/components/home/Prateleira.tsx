// A tábua da estante: uma faixa com sombra embaixo dos livros.
export default function Prateleira({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-3 rounded-full bg-gradient-to-b from-areia-100 to-areia-300 shadow-[0_10px_16px_-8px_rgba(44,24,16,0.45)] ${className}`}
    />
  );
}
