"use client";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductModal({ isOpen, onClose, product }: any) {
  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[var(--oscuro-elegante)]/80 backdrop-blur-md"
          />
          
          <motion.div 
            initial={{ scale: 0.5, rotate: -10, y: 100 }}
            animate={{ scale: 1, rotate: 0, y: 0 }}
            exit={{ scale: 0.5, rotate: 10, y: 100 }}
            className="relative bg-white w-full max-w-2xl rounded-[50px] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Lado Imagen con color de fondo del producto */}
            <div 
              className="md:w-1/2 p-12 flex items-center justify-center relative overflow-hidden"
              style={{ backgroundColor: `${product.color}22` }}
            >
              <div className="absolute inset-0 opacity-10 bg-[url('/icons/sprinkles.png')] bg-repeat" />
              <motion.img 
                src={product.img} 
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="w-full relative z-10 drop-shadow-2xl"
              />
            </div>

            {/* Lado Información */}
            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <button onClick={onClose} className="absolute top-6 right-8 text-2xl font-black">✕</button>
              <span className="text-[var(--rosa-provocacion)] font-black tracking-widest text-xs mb-2 uppercase">{product.tipo}</span>
              <h2 className="text-4xl font-black text-[var(--oscuro-elegante)] mb-4">{product.nombre}</h2>
              <p className="text-gray-500 mb-8 font-medium">Hecho con ingredientes 100% naturales, amor artesanal y el toque secreto de PROVOCACIÓN.</p>
              
              <div className="flex items-center justify-between mb-8">
                <span className="text-3xl font-black text-[var(--rosa-provocacion)]">{product.precio}</span>
                <div className="flex gap-2 text-2xl">🍓 🍦 🍫</div>
              </div>

              <button className="w-full py-4 rounded-2xl bg-[var(--rosa-provocacion)] text-white font-black shadow-lg shadow-pink-200 hover:scale-105 transition-transform">
                ¡PEDIR AHORA! 🚀
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
