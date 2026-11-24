import type { Metadata, Viewport } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ordem Livro - Séries de Livros em Ordem de Leitura",
    template: "%s | Ordem Livro",
  },
  description:
    "Descubra a ordem certa de leitura das suas séries de livros favoritas: Harry Potter, Percy Jackson, Diário de Pilar, Maze Runner e muito mais.",
  applicationName: SITE_NAME,
  openGraph: {
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
    images: ["/logo.png"],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true, googleBot: { "max-image-preview": "large" } },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
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
