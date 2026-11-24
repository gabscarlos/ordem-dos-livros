import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

export interface PaginaProps {
  children: React.ReactNode;
  className?: string;
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Cabecalho />
      <div className="flex-1 flex flex-col sm:flex-row gap-3 sm:gap-5 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-8">
        <main className="flex-1 min-w-0">{props.children}</main>
      </div>
      <Rodape />
    </div>
  );
}
