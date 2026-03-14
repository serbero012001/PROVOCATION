"use client";
import { motion } from "framer-motion";

interface FooterProps {
  onFilter?: (val: string) => void;
}

export default function MainFooter({ onFilter }: FooterProps) {
  
  // --- Función de Scroll Segura ---
  const handleCategoryClick = (cat: string) => {
    if (onFilter) {
      onFilter(cat);
      
      // Verificación de seguridad para entorno cliente
      if (typeof window !== "undefined") {
        const el = document.getElementById('catalogo');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer className="bg-[#FFF8F1] pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8 items-start">
          
          {/* COLUMNA 1: LOGO Y REDES */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            <img 
              src="/logo-provocacion.png" 
              alt="Logo Provocación" 
              className="h-24 w-auto drop-shadow-sm grayscale hover:grayscale-0 transition-all duration-500"
            />
            <p className="text-gray-700 text-xs font-bold tracking-widest leading-relaxed max-w-xs uppercase">
              Desde 2003 creando momentos dulces <br /> para ti y tus peluditos.
            </p>
            <div className="flex gap-6">
              <a href="https://instagram.com" target="_blank" className="text-[10px] font-black tracking-[3px] text-[#D70E8E] hover:text-[#2C2A2B] transition-colors uppercase">Instagram</a>
              <a href="https://tiktok.com" target="_blank" className="text-[10px] font-black tracking-[3px] text-[#D70E8E] hover:text-[#2C2A2B] transition-colors uppercase">TikTok</a>
              <a href="https://wa.me/3150738110" target="_blank" className="text-[10px] font-black tracking-[3px] text-[#2C2A2B] hover:text-[#D70E8E] transition-colors uppercase">WhatsApp</a>
            </div>
          </div>

          {/* COLUMNA 2: NAVEGACIÓN */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black tracking-[5px] text-gray-600 uppercase">Explorar</h4>
            <ul className="space-y-4 text-[11px] font-black text-[#905742] tracking-widest">
              {["PALETA", "VASO", "CONO", "POSTRE", "PERROS"].map((cat) => (
                <li 
                  key={cat} 
                  onClick={() => handleCategoryClick(cat)}
                  className="hover:text-[#D70E8E] cursor-pointer transition-colors uppercase"
                >
                  {cat}S
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMNA 3: INFO */}
          <div className="space-y-6">
            <h4 className="text-[10px] font-black tracking-[5px] text-gray-600 uppercase">Ubicación</h4>
            <div className="space-y-4">
              <p className="text-[11px] font-black text-[#2C2A2B] tracking-widest leading-loose uppercase">
                Cra. 9 Este, <br /> Soacha, Cundinamarca
              </p>
              <div className="pt-2">
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Línea de atención</p>
                <p className="text-sm font-black text-[#D70E8E] mt-1 italic">315 0738110</p>
              </div>
            </div>
          </div>
        </div>

        {/* BARRA FINAL */}
        <div className="mt-24 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[8px] font-black tracking-[5px] text-gray-600 uppercase">
            © 2026 PROVOCACIÓN HELADERÍA • SOACHA COLOMBIA
          </p>
          <div className="flex gap-8 text-[8px] font-black text-gray-300 tracking-[3px] uppercase">
            <span className="hover:text-[#D70E8E] cursor-pointer">Privacidad</span>
            <span className="hover:text-[#D70E8E] cursor-pointer">Términos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
