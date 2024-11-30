import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';

const fonte = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Livro Após Livro",
  description: "Lista Completa de Todas as Séries de Livros em Ordem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={fonte.className}
      >
        {children}
      </body>
    </html>
  );
}
