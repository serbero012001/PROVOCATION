import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configuramos la fuente Inter para un look de E-commerce Premium
const inter = Inter({ 
  subsets: ["latin"], 
  weight: ["400", "700", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PROVOCACIÓN | Heladería Artesanal & Pet Friendly",
  description: "La experiencia de helado más provocativa para ti y tu mejor amigo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#FFF8F1]`}>
        {/* 
            IMPORTANTE: Hemos quitado el Header de aquí. 
            Ahora el Navbar se renderiza dentro de cada página 
            para que se integre perfectamente con el fondo rosa.
        */}
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
