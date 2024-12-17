import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const fonte = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ordem dos Livros",
  description: "Lista Completa de Todas as Séries de Livros em Ordem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        {/* Meta tags essenciais */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta charSet="utf-8" />

        {/* Script do Google Ads */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8791475834761530"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={fonte.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
