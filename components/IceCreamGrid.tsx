"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ProductImage({ src, name }: { src?: string; name: string }) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div className="flex flex-col items-center justify-center h-full w-full bg-gray-50/30 rounded-[25px] md:rounded-[40px] border border-dashed border-gray-200">
        <span className="text-xl">❄️</span>
        <span className="text-[7px] font-black text-[#90D9FE] tracking-[1px] uppercase mt-1">Agotado</span>
      </div>
    );
  }

  return (
    <motion.img 
      whileHover={{ scale: 1.05 }}
      src={src} 
      alt={name} 
      onError={() => setError(true)} 
      className="w-full h-full object-contain drop-shadow-xl z-10 p-1 md:p-4"
    />
  );
}

export default function IceCreamGrid({ data }: { data: any[] }) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-3 md:gap-x-8 gap-y-12 md:gap-y-20">
        <AnimatePresence mode="popLayout">
          {data.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              // ANIMACIÓN DE CASCADA PARA MÓVIL
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: (index % 10) * 0.08, // Efecto uno tras otro
                ease: [0.16, 1, 0.3, 1] 
              }}
              whileTap={{ scale: 0.95 }} // Efecto al tocar en celular
              className="group flex flex-col items-center"
            >
              {/* Contenedor de Imagen */}
              <div className="relative aspect-square w-full bg-[#FDFBFA] rounded-[35px] md:rounded-[50px] flex items-center justify-center overflow-hidden mb-5 border border-gray-50 group-hover:shadow-xl transition-all duration-700">
                <ProductImage src={item.imagen} name={item.nombre} />
              </div>
              
              {/* Información Organizada */}
              <div className="flex flex-col items-center text-center w-full px-1">
                
                {/* LA MARCA: Encima del nombre, limpia y profesional */}
                <div className="mb-2">
                  <span className="px-3 py-0.5 bg-gray-50 rounded-full text-[7px] md:text-[8px] font-black text-[#90D9FE] tracking-[2px] uppercase border border-gray-100 group-hover:bg-[#D70E8E] group-hover:text-white transition-colors duration-500">
                    {item.marca}
                  </span>
                </div>

                <h4 className="font-black text-[#2C2A2B] uppercase text-[9px] md:text-xs leading-tight line-clamp-2 h-[28px] md:h-[32px] flex items-center justify-center tracking-tighter">
                  {item.nombre}
                </h4>
                
                <p className="text-sm md:text-xl font-black text-[#D70E8E] tracking-tighter mt-1">
                  ${item.precio?.toLocaleString()}
                </p>
                
                {/* Línea decorativa que crece en Hover */}
                <div className="h-0.5 w-4 bg-[#90D9FE]/20 mt-3 rounded-full group-hover:w-10 group-hover:bg-[#D70E8E] transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
