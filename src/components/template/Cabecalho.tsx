import Logo from "./Logo"

export default function Cabecalho() {
  

  return (
    <header className="flex justify-center items-center h-24 border-b border-zinc-800">
        <div className="flex flex-col items-center">
          <Logo />
          <h1 className="text-sm text-center text-zinc-900 dark:text-zinc-400 mb-4">Lista Completa de Todas as Séries de Livros em Ordem</h1>
        </div>        
    </header>
  )
}