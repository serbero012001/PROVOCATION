"use client";
import { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { helados as ListaHelados } from "@/data/helados"; // Importante para las sugerencias

interface NavbarProps {
  onSearch: (val: string) => void;
  onFilter: (val: string) => void;
  currentFilter: string;
}

export default function Navbar({ onSearch, onFilter, currentFilter }: NavbarProps) {
  const menuItems = ["PALETA", "VASO", "CONO", "BONICE", "POSTRE", "PLATILLO"];
  
  // --- ESTADOS PARA EL AUTOCOMPLETADO ---
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Lógica de búsqueda predictiva (Filtra nombres y marcas)
  const suggestions = useMemo(() => {
    if (inputValue.length < 2) return [];
    const term = inputValue.toLowerCase();
    return ListaHelados.filter(h => 
      h.nombre.toLowerCase().includes(term) || 
      h.marca.toLowerCase().includes(term)
    ).slice(0, 5); // Mostramos solo los 5 mejores resultados
  }, [inputValue]);

  // Cerrar la lista si haces clic fuera del buscador
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSelectSuggestion = (name: string) => {
    setInputValue(name);
    onSearch(name);
    setShowSuggestions(false);
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFilterClick = (cat: string) => {
    onFilter(cat);
    document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="w-full bg-[#D70E8E] pt-10 pb-2 relative z-50">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* LOGO */}
        <div className="flex flex-col items-center mb-8">
          <motion.img 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            src="/logo-provocacion.png" 
            alt="Logo" 
            className="h-20 md:h-28 w-auto drop-shadow-2xl cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>

        {/* BUSCADOR CON AUTOCOMPLETE */}
        <div ref={searchRef} className="relative w-full max-w-lg mx-auto mb-10 group">
          <input 
            type="text" 
            value={inputValue}
            onFocus={() => setShowSuggestions(true)}
            onChange={(e) => {
              setInputValue(e.target.value);
              onSearch(e.target.value);
              setShowSuggestions(true);
            }}
            placeholder="¿Qué sabor buscas hoy?" 
            className="w-full py-4 px-14 rounded-full bg-white text-[10px] md:text-sm text-[#2C2A2B] outline-none shadow-2xl focus:ring-4 focus:ring-[#90D9FE]/30 transition-all font-black uppercase tracking-[2px] placeholder:text-gray-300"
          />
          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xl opacity-40">🔍</span>

          {/* LISTA DE SUGERENCIAS FLOTANTE */}
          <AnimatePresence>
            {showSuggestions && suggestions.length > 0 && (
              <motion.ul 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full mt-3 w-full bg-white/95 backdrop-blur-xl rounded-[30px] shadow-2xl overflow-hidden border border-gray-100 z-50 p-2"
              >
                {suggestions.map((s) => (
                  <li 
                    key={s.id}
                    onClick={() => handleSelectSuggestion(s.nombre)}
                    className="px-6 py-4 hover:bg-[#D70E8E]/5 rounded-2xl cursor-pointer flex items-center justify-between group transition-colors"
                  >
                    <div className="flex flex-col text-left">
                      <span className="text-[8px] font-black text-[#90D9FE] tracking-widest uppercase">{s.marca}</span>
                      <span className="text-xs font-bold text-[#2C2A2B] uppercase tracking-tighter">{s.nombre}</span>
                    </div>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        {/* MENÚ DE FILTROS */}
        <div className="bg-white rounded-t-[45px] md:rounded-t-[60px] px-6 py-6 shadow-[-10px_0_30px_rgba(0,0,0,0.05)]">
          <ul className="flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-8 pb-1">
            {menuItems.map((item) => (
              <li 
                key={item} 
                onClick={() => handleFilterClick(item)}
                className={`text-[9px] md:text-[10px] font-black cursor-pointer transition-all tracking-[3px] whitespace-nowrap uppercase relative pb-2 ${
                  currentFilter === item ? "text-[#D70E8E]" : "text-gray-300 hover:text-[#905742]"
                }`}
              >
                {item}
                {currentFilter === item && (
                  <motion.div layoutId="activeFilter" className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D70E8E] rounded-full" />
                )}
              </li>
            ))}
            <li 
              onClick={() => {
                handleFilterClick("TODOS");
                setInputValue(""); // Limpia también el buscador al dar click en limpiar
              }}
              className="text-[9px] font-black text-gray-200 cursor-pointer uppercase tracking-widest whitespace-nowrap"
            >
              LIMPIAR
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
