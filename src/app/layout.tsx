import type { Metadata } from "next";
import "./globals.css";
import { Inter, Merriweather } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";
import { LeituraProvider } from "@/contexts/LeituraContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Ordem Livro",
  description: "Lista Completa de Todas as Séries de Livros em Ordem",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.variable} ${merriweather.variable} font-sans`}>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8791475834761530"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <LeituraProvider>
          {children}
          <Analytics />
        </LeituraProvider>
      </body>
    </html>
  );
}
