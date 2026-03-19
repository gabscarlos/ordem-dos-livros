"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface LeituraContextType {
  lidos: string[];
  alternarLido: (id: string) => void;
  estaLido: (id: string) => boolean;
}

const LeituraContext = createContext<LeituraContextType | undefined>(undefined);

export function LeituraProvider({ children }: { children: React.ReactNode }) {
  const [lidos, setLidos] = useState<string[]>([]);
  const [carregado, setCarregado] = useState(false);

  // Carregar do LocalStorage ao montar
  useEffect(() => {
    const salvos = localStorage.getItem("livros-lidos");
    if (salvos) {
      setLidos(JSON.parse(salvos));
    }
    setCarregado(true);
  }, []);

  // Salvar no LocalStorage sempre que mudar, mas só depois de carregar o inicial
  useEffect(() => {
    if (carregado) {
      localStorage.setItem("livros-lidos", JSON.stringify(lidos));
    }
  }, [lidos, carregado]);

  const alternarLido = (id: string) => {
    setLidos((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const estaLido = (id: string) => lidos.includes(id);

  return (
    <LeituraContext.Provider value={{ lidos, alternarLido, estaLido }}>
      {children}
    </LeituraContext.Provider>
  );
}

export function useLeitura() {
  const context = useContext(LeituraContext);
  if (context === undefined) {
    throw new Error("useLeitura deve ser usado dentro de um LeituraProvider");
  }
  return context;
}
