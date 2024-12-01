"use client";
import React, { useState } from "react";
import Cabecalho from "./Cabecalho";
import AreaLateral from "./AreaLateral";
import Rodape from "./Rodape";
import AreaSuperior from "./AreaSuperior";

export interface PaginaProps {
  children: React.ReactNode;
  className?: string;
}

export default function Pagina(props: PaginaProps) {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex flex-col min-h-screen bg-slate-50 text-zinc-950 dark:bg-zinc-900 dark:text-zinc-50">
        <button
          className="absolute top-0 right-0 m-4 text-zinc-800 dark:text-zinc-50"
          onClick={toggleDarkMode}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>        
        <Cabecalho />
        <AreaSuperior className="md:hidden lg:hidden"/>
        <div className="flex-1 flex gap-5 max-w-7xl mx-auto w-full p-5">
          <main className="flex-1">{props.children}</main>
          <AreaLateral className="sm: hidden md:block lg:block"/>
        </div>
        <Rodape />
      </div>
    </div>
  );
}
