import Logo from "./Logo";
import FlyoutMenu from "./FlyoutMenu";
import Busca from "./Busca";

export default function Cabecalho() {
  return (
    <header
      className="
        relative flex flex-col justify-center items-center 
        h-56 sm:h-64 md:h-72 max-w-full mx-auto w-full
        bg-[url('https://images.pexels.com/photos/1485114/pexels-photo-1485114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]
        bg-no-repeat bg-cover bg-center rounded-b-lg
      "
    >
      <div className="absolute top-0 left-0 m-2 sm:m-4">
        <FlyoutMenu />
      </div>
      <div className="flex flex-col gap-10 sm:gap-20 items-center justify-center px-4">
        {/* Seção do Logo */}
        <div className="flex flex-col items-center -mt-8 sm:-mt-10">
          <Logo />
          <h1 className="text-xs sm:text-sm text-center text-zinc-900 dark:text-zinc-400 mb-4">
            Lista Completa de Todas as Séries de Livros em Ordem
          </h1>
        </div>
        {/* Busca */}
        <Busca />
      </div>
    </header>
  );
}
