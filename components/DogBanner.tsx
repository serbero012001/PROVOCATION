"use client";
import { motion } from "framer-motion";

export default function DogBanner() {
  const scrollToCatalog = () => {
    const el = document.getElementById('catalogo');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 pt-4 md:pt-6">
      {/* Contenedor principal con fondo suave de la imagen */}
      <div className="relative bg-[#F9ECE4] rounded-[40px] md:rounded-[60px] overflow-hidden min-h-[550px] md:min-h-[480px] flex items-center">
        
        {/* Círculo decorativo de fondo (Ajustado para móvil) */}
        <div className="absolute -right-10 -top-10 md:-right-20 md:-top-20 w-64 h-64 md:w-[500px] md:h-[500px] bg-white/40 rounded-full" />
        
        <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-8 md:p-12 items-center">
          
          {/* LADO IZQUIERDO: TEXTO */}
          <div className="space-y-4 md:space-y-6 text-center md:text-left order-1">
            <motion.span 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              className="inline-block px-4 py-1 rounded-full bg-white text-[8px] md:text-[10px] font-black tracking-[4px] text-[#D70E8E] uppercase shadow-sm"
            >
              Artesanal & Pet Friendly
            </motion.span>
            
            {/* Título: Ajustamos el tamaño para que NO se corte en móvil */}
            <h1 className="text-5xl md:text-7xl font-black text-[#2C2A2B] leading-[0.85] tracking-tighter uppercase">
              SABOR <br className="hidden md:block" /> 
              QUE <br /> 
              <span className="text-[#D70E8E]">PROVOCA.</span>
            </h1>
            
            <p className="text-gray-500 font-medium text-xs md:text-sm max-w-xs mx-auto md:mx-0 italic leading-relaxed">
              "El placer de un helado artesanal, ahora compartido con tu mejor amigo."
            </p>
            
            {/* Botón CTA: Estilo Dakingo */}
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={scrollToCatalog}
              className="bg-[#2C2A2B] text-white px-8 md:px-10 py-4 rounded-full font-black text-[10px] md:text-xs uppercase tracking-[4px] hover:bg-[#D70E8E] transition-all shadow-xl cursor-pointer"
            >
              Explorar la carta ↓
            </motion.button>
          </div>

          {/* LADO DERECHO: IMAGEN DEL HELADO */}
          <div className="relative flex justify-center order-2 mt-4 md:mt-0">
            {/* Círculo blanco detrás (El "pedestal") */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute w-56 h-56 md:w-96 md:h-96 bg-white rounded-full shadow-2xl" 
            />
            
            <motion.img 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src="/helados/hero-minimal.png" 
              className="relative z-10 w-full max-w-[280px] md:max-w-[420px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              alt="Provocación Principal"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
