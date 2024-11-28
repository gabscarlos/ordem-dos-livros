import React from "react"
import Cabecalho from "./Cabecalho"
import AreaLateral from "./AreaLateral"
import Rodape from "./Rodape"

export interface PaginaProps {
    children: React.ReactNode
    className?: string
}

export default function Pagina(props: PaginaProps) {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
    <Cabecalho/>
    <div className="flex-1 flex gap-5 max-w-7xl mx-auto w-full p-5">
      <main className="flex-1">
          {props.children}
      </main>
      <AreaLateral/>
    </div>
    <Rodape/>
</div>
  )
}