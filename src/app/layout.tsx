import { ReactNode } from "react";
import { Poppins } from "next/font/google";
import Header from "../components/header/Header"; // Corrigido o nome do componente
import "./globals.css";
import Anuncio from "@/components/anuncio/anuncio";
import Footer from "@/components/footer/footer";

// Carregamento da fonte
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"]
});

// Utilização da API de metadata do Next.js
export const metadata = {
  title: "Vervita",
  description: "Vervita é uma empresa especializada em produtos místicos e naturais voltados para proteção espiritual, bem-estar e equilíbrio energético. Oferecemos uma ampla gama de óleos essenciais, cristais, incensos, e itens esotéricos, todos cuidadosamente selecionados para ajudar a harmonizar corpo, mente e espírito.",
  keywords: "Vervita, produtos místicos, proteção espiritual, bem-estar, equilíbrio energético, óleos essenciais, cristais, incensos, esoterismo, produtos naturais, espiritualidade, harmonia, meditação",
  author: "Vervita",
  viewport: "width=device-width, initial-scale=1.0",
};

// Definição do layout global
interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <main>
          <Header /> {/* Renderização correta do componente Header */}
          <Anuncio />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
