import Logo from "./Logo";
import FlyoutMenu from "./FlyoutMenu";
import Busca from "./Busca";

export default function Cabecalho() {
  return (
    <header
      className="
        relative flex flex-col justify-center items-center 
        h-64 sm:h-72 md:h-80 max-w-full mx-auto w-full
        bg-[url('https://images.pexels.com/photos/1485114/pexels-photo-1485114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]
        bg-no-repeat bg-cover bg-center rounded-b-xl shadow-lg
      "
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 rounded-b-xl" />

      <div className="absolute top-0 left-0 m-4 z-20">
        <FlyoutMenu />
      </div>

      <div className="relative z-10 flex flex-col gap-6 items-center justify-center px-4 w-full max-w-4xl">
        {/* Seção do Logo */}
        <div className="flex flex-col items-center mt-4">
          <Logo />
          <h1 className="text-sm sm:text-base md:text-lg font-serif italic text-center text-zinc-100 drop-shadow-md mt-2 max-w-2xl">
            Lista Completa de Todas as Séries de Livros em Ordem
          </h1>
        </div>
        {/* Busca */}
        <div className="w-full max-w-lg">
          <Busca />
        </div>
      </div>
    </header>
  );
}
